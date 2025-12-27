import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Download, Wand2, Palette, Zap, Star, TrendingUp } from 'lucide-react';
import LogoGenerator from './components/LogoGenerator';
import TemplateGallery from './components/TemplateGallery';
import PremiumFeatures from './components/PremiumFeatures';

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [showGenerator, setShowGenerator] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setShowGenerator(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-pink-600/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 pointer-events-none" />

      {/* Premium Header */}
      <header className="relative border-b border-white/5 bg-black/40 backdrop-blur-2xl z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-blue-600/5" />
        <div className="container mx-auto px-6 py-5 relative">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-60 animate-pulse-slow" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                  <Sparkles className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black text-white tracking-tight">BrandCraft</h1>
                <p className="text-xs text-purple-300 font-medium">AI Logo Studio 2026</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-white">Premium AI</span>
              </div>
              <span className="text-sm text-gray-400">Powered by <span className="text-purple-400 font-semibold">Pollinations</span></span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {!showGenerator && (
        <section className="relative container mx-auto px-6 py-24">
          <motion.div
            style={{ opacity, scale }}
            className="text-center mb-20"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-purple-500/30 rounded-full mb-8 backdrop-blur-xl"
            >
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-transparent bg-clip-text">
                NEW 2026 · AI-Powered Design Revolution
              </span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight"
            >
              Creează Logo-uri
              <br />
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-2xl opacity-50" />
                <span className="relative bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-gradient-x">
                  Extraordinare
                </span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Transformă viziunea ta în realitate cu tehnologia AI de ultimă generație.
              <br />
              <span className="text-purple-300 font-medium">Design profesional în secunde, nu ore.</span>
            </motion.p>

            {/* CTA Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 mt-12"
            >
              {[
                { label: 'Logo-uri Generate', value: '50K+', icon: Sparkles },
                { label: 'Stiluri Premium', value: '6', icon: Palette },
                { label: 'Export HD', value: '100%', icon: Download },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/30 to-pink-600/30 border border-purple-500/30 rounded-xl flex items-center justify-center backdrop-blur-xl">
                    <stat.icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Premium Features Grid */}
          <PremiumFeatures />

          {/* Template Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-32"
          >
            <TemplateGallery onSelectTemplate={handleTemplateSelect} />
          </motion.div>
        </section>
      )}

      {/* Generator */}
      {showGenerator && (
        <LogoGenerator 
          selectedTemplate={selectedTemplate}
          onBack={() => setShowGenerator(false)}
        />
      )}

      {/* Premium Footer */}
      {!showGenerator && (
        <footer className="relative mt-32 border-t border-white/5 bg-black/40 backdrop-blur-2xl">
          <div className="container mx-auto px-6 py-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BrandCraft</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">© 2026 George Pricop. Creat cu ❤️ în România</p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span>Powered by Pollinations AI</span>
              <span>•</span>
              <span>Made with React & Vite</span>
              <span>•</span>
              <span>Open Source</span>
            </div>
          </div>
        </footer>
      )}
    </main>
  );
}
