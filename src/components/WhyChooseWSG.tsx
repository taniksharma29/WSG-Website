import React from 'react';
import { motion } from 'motion/react';
import { Globe2, Layers, HeartHandshake, TrendingUp, Sparkles } from 'lucide-react';

export const WhyChooseWSG: React.FC = () => {
  const points = [
    {
      title: 'Global Standards',
      description: 'Projects delivered with international operational quality.',
      icon: Globe2,
      tag: 'WORLD-CLASS QUALITY',
    },
    {
      title: 'End-to-End Solutions',
      description: 'From concept to execution, we manage it all.',
      icon: Layers,
      tag: 'TURNKEY EXECUTION',
    },
    {
      title: 'Athlete-Centric',
      description: 'Supporting talent while creating fan-first experiences.',
      icon: HeartHandshake,
      tag: 'TALENT & FANS FIRST',
    },
    {
      title: 'Scalable & Sustainable',
      description: 'Every project designed to grow and thrive globally.',
      icon: TrendingUp,
      tag: 'LONG-TERM IMPACT',
    },
  ];

  return (
    <section className="relative py-28 bg-[#0B0B0D] text-white overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 justify-center"
          >
            <Sparkles className="w-4 h-4 text-[#F2B632]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
              THE WSG ADVANTAGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Why Choose WSG
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-sans text-base sm:text-lg max-w-2xl mx-auto font-light"
          >
            Our core pillars set us apart as a trusted global sports conglomerate headquartered in Dubai.
          </motion.p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, index) => {
            const IconComp = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative p-8 rounded-[24px] bg-[#141414] border border-white/10 hover:border-[#D89B18] shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D89B18] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0B0D] border border-white/10 group-hover:border-[#D89B18] text-[#F2B632] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#D89B18] mb-2 font-sans">
                    {pt.tag}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#F2B632] transition-colors">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-sans font-light leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-gray-400">World Sports Group</span>
                  <span className="text-[#D89B18] font-bold">Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
