import { motion } from 'framer-motion';
import { Wand2, Palette, Download, Zap, Sparkles, Cpu, Lock, Gauge } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Generare Instantă',
    description: 'Tehnologie neurală avansată pentru design-uri unice',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0
  },
  {
    icon: Palette,
    title: 'Customizare Totală',
    description: 'Control precis asupra fiecărui aspect vizual',
    gradient: 'from-pink-500 to-rose-500',
    delay: 0.1
  },
  {
    icon: Download,
    title: 'Export Ultra HD',
    description: 'Rezoluție profesională 1024x1024 pixels',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0.2
  },
  {
    icon: Zap,
    title: 'Performanță Blazing',
    description: 'Generație rapidă în sub 3 secunde',
    gradient: 'from-yellow-500 to-orange-500',
    delay: 0.3
  },
  {
    icon: Sparkles,
    title: 'Template-uri Premium',
    description: '6 stiluri profesionale curatizate',
    gradient: 'from-violet-500 to-purple-500',
    delay: 0.4
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Processing direct în browser, fără backend',
    gradient: 'from-emerald-500 to-teal-500',
    delay: 0.5
  },
  {
    icon: Lock,
    title: '100% Private',
    description: 'Datele tale rămân local, zero tracking',
    gradient: 'from-indigo-500 to-blue-500',
    delay: 0.6
  },
  {
    icon: Gauge,
    title: 'Zero Limite',
    description: 'Generații nelimitate, fără abonamente',
    gradient: 'from-fuchsia-500 to-pink-500',
    delay: 0.7
  },
];

export default function PremiumFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: feature.delay, duration: 0.5 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative"
        >
          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
          
          {/* Card */}
          <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-500">
            {/* Icon Container */}
            <div className="relative mb-4">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {feature.description}
            </p>

            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
              <div className={`w-6 h-6 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                <span className="text-white text-sm">→</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
