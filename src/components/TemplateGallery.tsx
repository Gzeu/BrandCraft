import { motion } from 'framer-motion';
import { Sparkles, Zap, Cpu, Crown, Palette, Building, ArrowRight } from 'lucide-react';

interface TemplateGalleryProps {
  onSelectTemplate: (template: string) => void;
}

const templates = [
  {
    id: 'minimal',
    name: 'Minimal Zen',
    description: 'Design curat, modern și sofisticat',
    icon: Sparkles,
    gradient: 'from-slate-400 via-slate-500 to-slate-600',
    bgGradient: 'from-slate-500/10 to-slate-600/10',
    prompt: 'minimal modern clean simple geometric zen aesthetic',
    tags: ['Modern', 'Clean', 'Professional']
  },
  {
    id: 'bold',
    name: 'Bold Energy',
    description: 'Impact vizual maxim și energie',
    icon: Zap,
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    bgGradient: 'from-orange-500/10 to-red-600/10',
    prompt: 'bold vibrant energetic colorful dynamic powerful',
    tags: ['Vibrant', 'Dynamic', 'Bold']
  },
  {
    id: 'tech',
    name: 'Tech Fusion',
    description: 'Futurism digital și inovație',
    icon: Cpu,
    gradient: 'from-blue-400 via-cyan-500 to-teal-600',
    bgGradient: 'from-blue-500/10 to-cyan-600/10',
    prompt: 'futuristic tech innovation digital modern cyber',
    tags: ['Tech', 'Futuristic', 'Innovation']
  },
  {
    id: 'elegant',
    name: 'Elegant Luxe',
    description: 'Rafinament și eleganță premium',
    icon: Crown,
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    bgGradient: 'from-amber-500/10 to-yellow-600/10',
    prompt: 'elegant classic luxury refined sophisticated premium',
    tags: ['Luxury', 'Elegant', 'Premium']
  },
  {
    id: 'creative',
    name: 'Creative Flow',
    description: 'Expresie artistică și originalitate',
    icon: Palette,
    gradient: 'from-purple-400 via-pink-500 to-rose-600',
    bgGradient: 'from-purple-500/10 to-pink-600/10',
    prompt: 'creative abstract artistic unique expressive organic',
    tags: ['Artistic', 'Creative', 'Unique']
  },
  {
    id: 'corporate',
    name: 'Corporate Elite',
    description: 'Profesionalism și credibilitate',
    icon: Building,
    gradient: 'from-indigo-400 via-blue-500 to-violet-600',
    bgGradient: 'from-indigo-500/10 to-blue-600/10',
    prompt: 'corporate professional business trustworthy reliable',
    tags: ['Business', 'Professional', 'Trust']
  },
];

export default function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
          Selectează <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Stilul Perfect</span>
        </h3>
        <p className="text-gray-400 text-lg">6 template-uri premium design-ate de experți</p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, idx) => (
          <motion.button
            key={template.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -12, scale: 1.02 }}
            onClick={() => onSelectTemplate(template.prompt)}
            className="group relative text-left overflow-hidden rounded-3xl"
          >
            {/* Animated Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${template.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700`} />
            
            {/* Card Container */}
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 group-hover:border-white/20 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500">
              {/* Icon with Glow */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className={`relative w-20 h-20 bg-gradient-to-br ${template.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <template.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Content */}
              <h4 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                {template.name}
              </h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {template.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {template.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:bg-white/10 group-hover:border-white/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-2 text-sm font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                <span>Selectează Template</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
