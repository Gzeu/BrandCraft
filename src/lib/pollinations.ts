interface GenerateLogoParams {
  brandName: string;
  description?: string;
  style: string;
  primaryColor: string;
}

interface GenerateLogoResult {
  success: boolean;
  imageUrl: string;
  imageData?: string;
}

export async function generateLogo(params: GenerateLogoParams): Promise<GenerateLogoResult> {
  const { brandName, description, style, primaryColor } = params;

  // Construiește prompt-ul
  let prompt = `Professional logo for "${brandName}". `;
  
  if (description) {
    prompt += `${description}. `;
  }
  
  prompt += `Style: ${style}. Main color: ${primaryColor}. `;
  prompt += 'Vector style, clean, minimalist, professional brand identity, white background, centered';

  try {
    const response = await fetch('/api/generate-logo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        style,
        colorScheme: primaryColor,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate logo');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Logo generation error:', error);
    throw error;
  }
}

export function getDirectPollinationsUrl(prompt: string): string {
  const encodedPrompt = encodeURIComponent(prompt);
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&model=flux`;
}
