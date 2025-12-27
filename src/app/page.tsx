'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Wand2, Palette } from 'lucide-react';
import LogoGenerator from '@/components/LogoGenerator';
import TemplateGallery from '@/components/TemplateGallery';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [showGenerator, setShowGenerator] = useState(false);

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setShowGenerator(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">BrandCraft</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-purple-300">Powered by Pollinations AI</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {!showGenerator && (
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Creează Logo-uri
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Profesionale</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Folosește puterea AI pentru a genera logo-uri unice și memorabile pentru brandul tău
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {[
              { icon: Wand2, title: 'AI Generare', desc: 'Tehnologie avansată de generare' },
              { icon: Palette, title: 'Customizare', desc: 'Control total asupra designului' },
              { icon: Download, title: 'Export HD', desc: 'Download în multiple formate' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Template Gallery */}
          <TemplateGallery onSelectTemplate={handleTemplateSelect} />
        </section>
      )}

      {/* Generator */}
      {showGenerator && (
        <LogoGenerator 
          selectedTemplate={selectedTemplate}
          onBack={() => setShowGenerator(false)}
        />
      )}
    </main>
  );
}
