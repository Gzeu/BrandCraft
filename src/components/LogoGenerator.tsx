import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';

interface LogoGeneratorProps {
  selectedTemplate: string;
  onBack: () => void;
}

export default function LogoGenerator({ selectedTemplate, onBack }: LogoGeneratorProps) {
  const [brandName, setBrandName] = useState('');
  const [description, setDescription] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#8B5CF6');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLogo, setGeneratedLogo] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleGenerate = async () => {
    if (!brandName.trim()) return;

    setIsGenerating(true);
    try {
      // Construiește prompt-ul optimizat
      let prompt = `Professional logo design for "${brandName}". `;
      
      if (description) {
        prompt += `${description}. `;
      }
      
      prompt += `Style: ${selectedTemplate}. Main color: ${primaryColor}. `;
      prompt += 'Vector style, clean, minimalist, professional brand identity, white background, centered, high quality';

      // Encode prompt și generează URL Pollinations
      const encodedPrompt = encodeURIComponent(prompt);
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&model=flux&seed=${Date.now()}`;
      
      // Preload imaginea
      const img = new Image();
      img.onload = () => {
        setGeneratedLogo(imageUrl);
        setIsGenerating(false);
      };
      img.onerror = () => {
        alert('Failed to generate logo. Please try again.');
        setIsGenerating(false);
      };
      img.src = imageUrl;
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Failed to generate logo. Please try again.');
      setIsGenerating(false);
    }
  };

  const handleDownload = async () => {
    if (!generatedLogo) return;
    
    try {
      const response = await fetch(generatedLogo);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${brandName.replace(/\s+/g, '-').toLowerCase()}-logo.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(generatedLogo, '_blank');
    }
  };

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onBack}
        className="flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Înapoi la Template-uri
      </motion.button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Controls Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Creează Logo-ul Tău</h2>
            <p className="text-gray-400">Template: <span className="text-purple-400">{selectedTemplate}</span></p>
          </div>

          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nume Brand *</label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Numele companiei sau brandului"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Descriere</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrie logo-ul dorit (ex: simplu, modern, folosește forme geometrice...)"
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            />
          </div>

          {/* Color Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Culoare Primară</label>
            <div className="flex gap-3">
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="w-16 h-16 rounded-xl border-2 border-white/20 transition-all hover:scale-105"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            {showColorPicker && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
              </motion.div>
            )}
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!brandName.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generare...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generează Logo
              </>
            )}
          </button>
        </motion.div>

        {/* Preview Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col"
        >
          <h3 className="text-xl font-bold text-white mb-6">Preview</h3>
          
          <div className="flex-1 bg-white/5 rounded-xl flex items-center justify-center min-h-[400px]">
            {isGenerating ? (
              <div className="text-center">
                <Loader2 className="w-16 h-16 text-purple-400 animate-spin mx-auto mb-4" />
                <p className="text-gray-400">AI generează logo-ul...</p>
              </div>
            ) : generatedLogo ? (
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <img
                  src={generatedLogo}
                  alt="Generated Logo"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  crossOrigin="anonymous"
                />
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Logo-ul tău va apărea aici</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {generatedLogo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3 mt-6"
            >
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Regenerează
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
