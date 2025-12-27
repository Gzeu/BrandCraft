import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Sparkles, Loader2, RefreshCw, Wand2, Check, AlertCircle } from 'lucide-react';
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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleGenerate = async () => {
    if (!brandName.trim()) return;

    setIsGenerating(true);
    setShowSuccess(false);
    try {
      let prompt = `Professional premium logo design for "${brandName}". `;
      
      if (description) {
        prompt += `${description}. `;
      }
      
      prompt += `Style: ${selectedTemplate}. Main color: ${primaryColor}. `;
      prompt += 'Vector style, clean, minimalist, professional brand identity, white background, centered, ultra high quality, modern 2026 design';

      const encodedPrompt = encodeURIComponent(prompt);
      const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&model=flux&seed=${Date.now()}`;
      
      const img = new Image();
      img.onload = () => {
        setGeneratedLogo(imageUrl);
        setIsGenerating(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      };
      img.onerror = () => {
        alert('Failed to generate logo. Please try again.');
        setIsGenerating(false);
      };
      img.src = imageUrl;
    } catch (error) {
      console.error('Generation failed:', error);
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
      link.download = `${brandName.replace(/\s+/g, '-').toLowerCase()}-logo-2026.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      window.open(generatedLogo, '_blank');
    }
  };

  return (
    <section className="relative container mx-auto px-6 py-12 min-h-screen">
      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600/90 to-emerald-600/90 border border-green-400/30 rounded-2xl backdrop-blur-2xl shadow-2xl"
          >
            <Check className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Logo generat cu succes!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ x: -4 }}
        onClick={onBack}
        className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-purple-300 hover:text-purple-200 transition-all mb-12 backdrop-blur-xl group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold">Înapoi la Template-uri</span>
      </motion.button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Controls Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Wand2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white mb-2">Studio Creator</h2>
                  <p className="text-gray-400 text-sm">Template: <span className="text-purple-400 font-semibold">{selectedTemplate}</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">Nume Brand *</label>
            <div className="relative">
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Ex: TechVision, BrandHub, InnovateLab"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-2xl text-white text-lg placeholder-gray-500 focus:outline-none transition-all backdrop-blur-xl"
              />
              {brandName && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">Descriere Design (Opțional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Logo geometric cu linii curate, stil minimalist modern, folosește forme abstracte..."
              rows={5}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all resize-none backdrop-blur-xl leading-relaxed"
            />
          </div>

          {/* Color Picker */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-300 uppercase tracking-wider">Culoare Principală</label>
            <div className="flex gap-4">
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="relative w-20 h-20 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all hover:scale-105 shadow-2xl overflow-hidden group"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="flex-1">
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 focus:border-purple-500/50 rounded-2xl text-white font-mono focus:outline-none transition-all backdrop-blur-xl"
                />
                <p className="text-xs text-gray-500 mt-2">Format HEX (ex: #8B5CF6)</p>
              </div>
            </div>
            <AnimatePresence>
              {showColorPicker && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
                >
                  <HexColorPicker color={primaryColor} onChange={setPrimaryColor} style={{ width: '100%' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Generate Button */}
          <motion.button
            onClick={handleGenerate}
            disabled={!brandName.trim() || isGenerating}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full group overflow-hidden rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient-x" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            <div className="relative px-8 py-5 flex items-center justify-center gap-3">
              {isGenerating ? (
                <>
                  <Loader2 className="w-6 h-6 text-white animate-spin" />
                  <span className="text-white font-black text-lg">Generez Logo...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6 text-white" />
                  <span className="text-white font-black text-lg">Generează Logo AI</span>
                </>
              )}
            </div>
          </motion.button>

          {/* Info */}
          <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-200 leading-relaxed">
              Logo-ul este generat instant folosind AI. Poți regenera de câte ori vrei pentru variații diferite.
            </p>
          </div>
        </motion.div>

        {/* Preview Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="sticky top-8">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-white">Preview HD</h3>
                  {generatedLogo && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-green-300">1024x1024</span>
                    </div>
                  )}
                </div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl flex items-center justify-center aspect-square border border-white/10 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isGenerating ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center"
                      >
                        <Loader2 className="w-20 h-20 text-purple-400 animate-spin mx-auto mb-6" />
                        <p className="text-gray-400 font-medium">AI lucrează la logo-ul tău...</p>
                        <p className="text-gray-500 text-sm mt-2">~3 secunde</p>
                      </motion.div>
                    ) : generatedLogo ? (
                      <motion.div
                        key="logo"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative w-full h-full p-8"
                      >
                        <img
                          src={generatedLogo}
                          alt="Generated Logo"
                          className="w-full h-full object-contain rounded-2xl"
                          crossOrigin="anonymous"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                          <Sparkles className="w-12 h-12 text-purple-300 opacity-50" />
                        </div>
                        <p className="text-gray-400 font-medium">Logo-ul tău va apărea aici</p>
                        <p className="text-gray-500 text-sm mt-2">Completează formularul și apasă generează</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons */}
                {generatedLogo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 mt-8"
                  >
                    <motion.button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 backdrop-blur-xl"
                    >
                      <RefreshCw className="w-5 h-5" />
                      Regenerează
                    </motion.button>
                    <motion.button
                      onClick={handleDownload}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative flex-1 group overflow-hidden rounded-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      <div className="relative py-4 flex items-center justify-center gap-2">
                        <Download className="w-5 h-5 text-white" />
                        <span className="text-white font-bold">Download HD</span>
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
