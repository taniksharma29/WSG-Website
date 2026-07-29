import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Globe, Trophy, ShieldCheck, Users, Flame } from 'lucide-react';
import { StatItem } from '../types';

export const statsList: StatItem[] = [
  { id: '1', value: 25, suffix: '+', label: 'Countries', sublabel: 'Global footprint & international venues' },
  { id: '2', value: 150, suffix: '+', label: 'Events', sublabel: 'Flawlessly produced sports tournaments' },
  { id: '3', value: 10, suffix: '+', label: 'Leagues', sublabel: 'Original IP franchises & competitions' },
  { id: '4', value: 1, suffix: 'M+', label: 'Audience', sublabel: 'Passionate fans & digital spectators' },
];

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-28 bg-[#0B0B0D] text-white overflow-hidden border-y border-white/10">
      {/* Background stadium glow light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#F2B632]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
              PROVEN PERFORMANCE TRACK RECORD
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            World Sports Group in Numbers
          </h2>
        </div>

        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative p-8 rounded-[24px] bg-[#141414]/80 border border-white/10 hover:border-[#D89B18]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] text-center overflow-hidden"
            >
              {/* Top Gold Shimmer Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#D89B18] rounded-full group-hover:w-full transition-all duration-500" />

              {/* Number display */}
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white group-hover:text-gold-gradient transition-colors mb-2">
                <Counter target={stat.value} suffix={stat.suffix} start={isInView} />
              </div>

              {/* Label */}
              <div className="text-base font-bold uppercase tracking-[0.15em] text-[#D89B18] mb-2 font-sans">
                {stat.label}
              </div>

              {/* Sublabel */}
              <p className="text-xs text-gray-400 font-sans font-light max-w-[200px] mx-auto leading-relaxed">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Animated Number Counter Helper
const Counter: React.FC<{ target: number; suffix: string; start: boolean }> = ({ target, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, target]);

  return (
    <span>
      {count}
      <span className="text-[#F2B632]">{suffix}</span>
    </span>
  );
};
