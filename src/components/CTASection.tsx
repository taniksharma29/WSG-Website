import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenPartnerModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="relative py-32 bg-[#0B0B0D] text-white overflow-hidden">
      {/* Subtle Stadium Lights Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-[#141414]/50 via-transparent to-[#0B0B0D] pointer-events-none" />

      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D89B18]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D89B18]/30 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto space-y-8 p-10 sm:p-16 rounded-[32px] bg-[#141414]/80 border border-[#D89B18]/30 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          {/* Subtle Shimmer Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D89B18]/10 to-transparent translate-x-[-100%] animate-shimmer pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#D89B18]/40 text-[#F2B632] text-xs font-bold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            LET'S SHAPE THE FUTURE OF SPORTS
          </div>

          {/* Exact Headline */}
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Ready to Build <br />
            <span className="text-gold-gradient">Something Extraordinary?</span>
          </h2>

          {/* Exact Subheading */}
          <p className="text-gray-300 font-sans text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            If you’re planning a league, event, or partnership, our team is ready to help.
          </p>

          {/* Gold Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenPartnerModal}
              className="group relative inline-flex items-center justify-center h-[56px] px-10 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_40px_rgba(216,155,24,0.6)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2.5">
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
