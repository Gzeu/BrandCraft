import { motion } from 'framer-motion';
import { Sparkles, Zap, Cpu, Crown, Palette, Building } from 'lucide-react';

interface TemplateGalleryProps {
  onSelectTemplate: (template: string) => void;
}

const templates = [
  {
    id: 'minimal',
    name: 'Minimal Modern',
    description: 'Design curat și minimalist',
    icon: Sparkles,
    gradient: 'from-slate-500 to-slate-700',
    prompt: 'minimal modern clean simple geometric'
  },
  {
    id: 'bold',
    name: 'Bold & Vibrant',
    description: 'Culori vii și energie',
    icon: Zap,
    gradient: 'from-orange-500 to-red-600',
    prompt: 'bold vibrant energetic colorful dynamic'
  },
  {
    id: 'tech',
    name: 'Tech & Innovation',
    description: 'Stil futurist și tehnologic',
    icon: Cpu,
    gradient: 'from-blue-500 to-cyan-600',
    prompt: 'futuristic tech innovation digital modern'
  },
  {
    id: 'elegant',
    name: 'Elegant Classic',
    description: 'Rafinament și tradiție',
    icon: Crown,
    gradient: 'from-amber-500 to-yellow-600',
    prompt: 'elegant classic luxury refined sophisticated'
  },
  {
    id: 'creative',
    name: 'Creative Abstract',
    description: 'Forme artistice și unice',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-600',
    prompt: 'creative abstract artistic unique expressive'
  },
  {
    id: 'corporate',
    name: 'Corporate Professional',
    description: 'Business și credibilitate',
    icon: Building,
    gradient: 'from-indigo-600 to-blue-700',
    prompt: 'corporate professional business trustworthy'
  },
];

export default function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-white mb-8 text-center"
      >
        Alege un Template
      </motion.h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, idx) => (
          <motion.button
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelectTemplate(template.prompt)}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all text-left overflow-hidden"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
            
            {/* Icon */}
            <div className={`w-16 h-16 bg-gradient-to-br ${template.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <template.icon className="w-8 h-8 text-white" />
            </div>
            
            {/* Content */}
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {template.name}
            </h4>
            <p className="text-gray-400 text-sm">
              {template.description}
            </p>
            
            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">→</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
