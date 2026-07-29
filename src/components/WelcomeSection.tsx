import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, Compass, ShieldCheck } from 'lucide-react';
import wsgDubaiArena from '../assets/images/wsg_dubai_arena_1785224318037.jpg';

interface WelcomeSectionProps {
  onLearnMoreClick?: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="about" className="relative py-28 bg-[#ffffff] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#D89B18]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18] font-sans">
                WHO WE ARE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.1]">
              Welcome to <br />
              <span className="text-[#0B0B0D] underline decoration-[#D89B18]/40 decoration-4 underline-offset-8">
                World Sports Group
              </span>
            </h2>

            {/* Exact Body Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#6B6B6B] leading-relaxed font-sans font-normal">
              <p>
                Headquartered in Dubai, WSG builds world-class sports properties with a global mindset.
              </p>
              <p>
                From leagues to athlete programs to fan-first events, we combine experience, innovation, and precision to deliver projects that stand out.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 gap-4 py-2 border-y border-[#ECECEC]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D89B18]/10 text-[#D89B18] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Dubai HQ</h4>
                  <p className="text-xs text-[#6B6B6B]">Global gateway & premier sports hub</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#D89B18]/10 text-[#D89B18] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Global Execution</h4>
                  <p className="text-xs text-[#6B6B6B]">Multi-tier event delivery worldwide</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#solutions"
                onClick={(e) => {
                  if (onLearnMoreClick) {
                    e.preventDefault();
                    onLearnMoreClick();
                  }
                }}
                className="group inline-flex items-center justify-center h-[52px] px-8 rounded-[14px] text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_20px_rgba(216,155,24,0.25)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <span className="flex items-center gap-2">
                  LEARN MORE ABOUT US
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Large Rounded Image with Abstract Background Shape */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Soft Abstract Gold Backdrop Shape */}
            <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full bg-gradient-to-br from-[#D89B18]/20 via-[#F2B632]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-3xl bg-[#D89B18]/10 -rotate-6 pointer-events-none" />

            {/* Image Container */}
            <div className="relative z-10 rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#ECECEC] bg-white group">
              <img loading="lazy"
                src={wsgDubaiArena}
                alt="WSG Dubai Sports Arena Infrastructure"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-nav-dark border border-white/10 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#F2B632]">Dubai Headquarters</div>
                  <div className="text-sm font-semibold text-gray-200 mt-0.5">Connecting Sports Across Continents</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D89B18] text-white flex items-center justify-center font-bold">
                  WSG
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
