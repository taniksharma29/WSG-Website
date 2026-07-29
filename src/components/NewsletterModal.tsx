import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Bell, Shield } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0B0B0D] border border-[#D89B18]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Ambient Lighting */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#D89B18]/20 blur-3xl pointer-events-none" />

            {!submitted ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#D89B18]/40 text-[#F2B632] text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Bell className="w-3 h-3" />
                    EXCLUSIVE WSG UPDATES
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white tracking-tight">
                    Stay Ahead of the Game
                  </h3>
                  <p className="text-gray-300 font-sans text-xs sm:text-sm mt-2 leading-relaxed">
                    Subscribe to WSG updates and be the first to hear about new leagues, events, and partnership opportunities.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full h-11 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full h-11 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_20px_rgba(216,155,24,0.3)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.5)] transition-all duration-300 cursor-pointer active:scale-[0.99]"
                  >
                    Subscribe Now
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-sans pt-1">
                    <Shield className="w-3.5 h-3.5 text-[#D89B18]" />
                    <span>No spam. Unsubscribe anytime.</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#D89B18] text-white mx-auto flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Thank You, {name}!</h3>
                <p className="text-xs text-gray-300 font-sans max-w-sm mx-auto leading-relaxed">
                  You are now subscribed to World Sports Group updates. We sent a confirmation to <span className="text-[#F2B632]">{email}</span>.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close Modal
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
