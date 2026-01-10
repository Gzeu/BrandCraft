import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Download, Sparkles, Loader2, RefreshCw, Wand2, Check, AlertCircle, Settings, ShoppingBag, Sliders } from 'lucide-react';
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
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  // Advanced Editor Controls (2026 Edition)
  const [symmetry, setSymmetry] = useState(70); // 0-100: Balance & geometric precision
  const [complexity, setComplexity] = useState(50); // 0-100: Detail level (minimal to intricate)
  const [vibe2026, setVibe2026] = useState(80); // 0-100: Futuristic/glassmorphic aesthetic strength
  const [iconTextRatio, setIconTextRatio] = useState(100); // 0-100: 0=text only, 100=icon only

  const getTemplatePromptEnhancements = (template: string): string => {
    const templateStyles: { [key: string]: string } = {
      'Minimal Modern': 'ultra-minimalist geometric design, negative space mastery, Swiss design principles, perfect symmetry, single elegant shape, maximum clarity, Bauhaus-inspired, contemporary sans-serif integration if text included, breathing room',
      'Bold & Vibrant': 'energetic dynamic composition, bold saturated colors, high contrast gradients, confident shapes, powerful visual impact, modern vibrant aesthetic, eye-catching color palette, strong geometric forms, playful yet professional',
      'Tech & Innovation': 'futuristic technological aesthetic, circuit-inspired patterns, digital gradients, innovative geometric structures, AI-inspired elements, sleek angular forms, modern tech company style, forward-thinking design, subtle tech motifs',
      'Elegant Classic': 'timeless refined elegance, sophisticated monoline style, premium brand aesthetic, subtle luxury details, balanced classical proportions, heritage-inspired, upscale craftsmanship, refined color palette, professional traditional feel',
      'Creative Abstract': 'unique artistic expression, abstract organic shapes, creative flowing forms, imaginative composition, distinctive memorable design, artistic interpretation, unconventional geometry, expressive curves and angles, creative industry suitable',
      'Corporate Professional': 'corporate identity excellence, authoritative presence, business-appropriate design, trust-building aesthetics, professional color scheme, established brand feeling, credible and confident, enterprise-grade quality, serious business tone'
    };
    return templateStyles[template] || 'professional modern design';
  };

  const buildAdvancedPrompt = (): string => {
    let prompt = `Create a professional premium logo design. `;
    
    // Brand identity
    prompt += `Brand name: "${brandName}". `;
    
    // User's custom description
    if (description.trim()) {
      prompt += `Design requirements: ${description.trim()}. `;
    }
    
    // Template-specific style
    prompt += `Style: ${getTemplatePromptEnhancements(selectedTemplate)}. `;
    
    // Advanced Editor Parameters (2026)
    if (symmetry > 60) {
      prompt += `Perfectly balanced symmetrical composition, ${symmetry > 80 ? 'mirror-exact' : 'harmoniously balanced'} geometric precision. `;
    } else if (symmetry < 40) {
      prompt += `Asymmetric dynamic layout, energetic off-center composition. `;
    }

    if (complexity < 30) {
      prompt += `Ultra-minimalist, single iconic shape, maximum simplicity, zen aesthetic. `;
    } else if (complexity > 70) {
      prompt += `Rich detailed design, intricate patterns, layered depth, sophisticated visual complexity. `;
    } else {
      prompt += `Clean professional detail level, balanced complexity. `;
    }

    if (vibe2026 > 60) {
      prompt += `2026 design trends: glassmorphism effects, holographic gradients, futuristic glow, modern premium aesthetic, AI-inspired visual language. `;
    }

    if (iconTextRatio > 80) {
      prompt += `Icon-based logomark, no text, pure symbolic representation. `;
    } else if (iconTextRatio < 20) {
      prompt += `Wordmark design, typography-focused, minimal or no icon. `;
    } else {
      prompt += `Balanced icon and text combination. `;
    }
    
    // Color direction
    prompt += `Primary color palette: ${primaryColor} with complementary harmonious colors. `;
    
    // Technical requirements
    prompt += `Technical specs: vector-style graphic, clean professional composition, centered on pure white background (#FFFFFF), `;
    prompt += `studio quality rendering, 2026 modern design trends, scalable emblem format, `;
    prompt += `perfect for brand identity, commercial-grade quality, suitable for print and digital, `;
    prompt += `ultra-high resolution, crisp edges, professional logo designer quality, print-ready 300dpi equivalent`;

    return prompt;
  };

  const handleGenerate = async () => {
    if (!brandName.trim()) return;

    setIsGenerating(true);
    setShowSuccess(false);
    try {
      const prompt = buildAdvancedPrompt();
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

  const handleZazzleLaunch = () => {
    if (!brandName.trim()) return;
    const searchQuery = encodeURIComponent(`${brandName} custom products`);
    const zazzleUrl = `https://www.zazzle.com/s/${searchQuery}?rf=238894403392654484`;
    window.open(zazzleUrl, '_blank');
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
              placeholder="Ex: Logo geometric cu linii curate, stil minimalist modern, folosește forme abstracte circulare..."
              rows={4}
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

          {/* Advanced Settings Toggle */}
          <button
            onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
            className="flex items-center gap-3 px-6 py-3 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-purple-300 transition-all backdrop-blur-xl group"
          >
            <Sliders className="w-5 h-5" />
            <span className="font-semibold">Advanced Studio Editor (2026)</span>
            <motion.div
              animate={{ rotate: showAdvancedSettings ? 180 : 0 }}
              className="ml-auto"
            >
              ▼
            </motion.div>
          </button>

          {/* Advanced Settings Panel */}
          <AnimatePresence>
            {showAdvancedSettings && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-bold text-gray-300">Simetrie & Echilibru</label>
                      <span className="text-sm text-purple-400 font-mono">{symmetry}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={symmetry}
                      onChange={(e) => setSymmetry(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">0 = Asimetric energic • 100 = Simetrie perfectă</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-bold text-gray-300">Complexitate Vizuală</label>
                      <span className="text-sm text-pink-400 font-mono">{complexity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={complexity}
                      onChange={(e) => setComplexity(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-pink-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">0 = Ultra-minimalist • 100 = Detalii bogate</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-bold text-gray-300">Vibe 2026 Strength</label>
                      <span className="text-sm text-blue-400 font-mono">{vibe2026}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={vibe2026}
                      onChange={(e) => setVibe2026(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">0 = Classic • 100 = Futuristic glassmorphic</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-bold text-gray-300">Icon / Text Ratio</label>
                      <span className="text-sm text-green-400 font-mono">{iconTextRatio}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={iconTextRatio}
                      onChange={(e) => setIconTextRatio(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">0 = Wordmark only • 100 = Icon-based logomark</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
              Logo-ul este generat instant folosind AI avansat Pollinations Flux. Poți regenera de câte ori vrei pentru variații diferite.
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
                    className="space-y-4 mt-8"
                  >
                    <div className="flex gap-4">
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
                    </div>

                    {/* Zazzle Integration */}
                    <motion.button
                      onClick={handleZazzleLaunch}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full group overflow-hidden rounded-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600" />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                      <div className="relative py-4 flex items-center justify-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-white" />
                        <span className="text-white font-bold">Print on Products (Zazzle)</span>
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
