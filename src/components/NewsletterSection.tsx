import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, Bell, Shield } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-24 bg-[#ffffff] text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto rounded-[32px] bg-[#0B0B0D] text-white p-8 sm:p-14 border border-[#D89B18]/30 shadow-[0_25px_60px_rgba(0,0,0,0.25)] relative overflow-hidden">
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#D89B18]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#F2B632]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D89B18]/40 text-[#F2B632] text-xs font-bold uppercase tracking-[0.2em]">
                <Bell className="w-3.5 h-3.5" />
                WSG INSIGHTS & UPDATES
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Stay Ahead <br />
                <span className="text-gold-gradient">of the Game</span>
              </h2>

              <p className="text-gray-300 font-sans text-sm sm:text-base font-light leading-relaxed">
                Subscribe to WSG updates and be the first to hear about new leagues, events, and partnership opportunities.
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 bg-[#141414] p-6 sm:p-8 rounded-2xl border border-white/10">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alexander Vance"
                      className="w-full h-12 px-4 rounded-xl bg-[#0B0B0D] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alexander@company.com"
                      className="w-full h-12 px-4 rounded-xl bg-[#0B0B0D] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_20px_rgba(216,155,24,0.3)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.5)] transition-all duration-300 cursor-pointer active:scale-[0.99]"
                  >
                    Subscribe Now
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-sans pt-1">
                    <Shield className="w-3.5 h-3.5 text-[#D89B18]" />
                    <span>No spam. Unsubscribe anytime.</span>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#141414] border border-[#D89B18] text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D89B18] text-white mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Welcome Aboard, {name}!</h3>
                  <p className="text-xs text-gray-300 font-sans">
                    You're now subscribed to World Sports Group. We'll send executive updates directly to <span className="text-[#F2B632]">{email}</span>.
                  </p>
                </motion.div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
