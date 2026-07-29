import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Volume2, ShieldCheck, Award } from 'lucide-react';
import wsgHeroSports from '../assets/images/wsg_hero_sports_1785224235464.jpg';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-[#0B0B0D] rounded-3xl border border-[#D89B18]/30 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141414]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D89B18] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white font-sans">
                  World Sports Group • Official 2026 Showreel
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Container / High End Interactive Preview */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <img
                src={wsgHeroSports}
                alt="WSG Showreel Preview"
                className="w-full h-full object-cover brightness-75 scale-105 animate-pulse duration-[4000ms]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-black/40 to-black/60" />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <div className="w-20 h-20 rounded-full bg-[#D89B18]/90 text-white flex items-center justify-center shadow-[0_0_50px_rgba(216,155,24,0.6)] cursor-pointer hover:scale-110 transition-transform duration-300 mb-6 group">
                  <Play className="w-8 h-8 ml-1 fill-white group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-serif text-2xl md:text-4xl text-white font-bold mb-2">
                  Building Modern Sports Empires
                </h3>
                <p className="text-sm text-gray-300 max-w-lg mb-6 font-sans">
                  Experience WSG's global leagues, stadium productions, and talent representation across Asia, Europe, and the Middle East.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-sans">
                  <span className="flex items-center gap-1.5 text-[#F2B632]">
                    <Award className="w-4 h-4" /> 100+ Live Broadcast Events
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D89B18]" /> Dubai Headquarters
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-[#D89B18]" /> High Definition 4K HDR
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="px-6 py-4 bg-[#141414] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3 border-t border-white/5">
              <span>All rights reserved © 2026 World Sports Group</span>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-[#D89B18] text-white font-semibold transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
