import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, style, colorScheme } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Construiește prompt-ul optimizat pentru Pollinations AI
    const enhancedPrompt = `Professional logo design: ${prompt}. Style: ${style || 'modern minimalist'}. Color scheme: ${colorScheme || 'vibrant'}. High quality, vector style, clean background, centered composition, brand identity`;

    // Encode prompt pentru URL
    const encodedPrompt = encodeURIComponent(enhancedPrompt);

    // Pollinations AI API endpoint
    const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&model=flux`;

    // Fetch imaginea
    const response = await fetch(pollinationsUrl, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to generate logo');
    }

    // Convertește răspunsul în blob
    const imageBlob = await response.blob();
    const arrayBuffer = await imageBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Returnează imaginea ca base64
    const base64Image = buffer.toString('base64');

    return NextResponse.json({
      success: true,
      imageUrl: pollinationsUrl,
      imageData: `data:image/png;base64,${base64Image}`,
    });
  } catch (error) {
    console.error('Logo generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate logo' },
      { status: 500 }
    );
  }
}
