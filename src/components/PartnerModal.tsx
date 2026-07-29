import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Shield, Sparkles } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: 'League Partnership / Ownership',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: 'League Partnership / Ownership',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0B0B0D] border border-[#D89B18]/40 rounded-3xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 text-white my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#F2B632]" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632]">
                    WORLD SPORTS GROUP PARTNERSHIP
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                  Partner With Us
                </h3>
                <p className="text-sm text-gray-400 font-sans font-light mb-8">
                  Connect directly with World Sports Group executive team in Sharjah Media City, UAE to discuss Asian Legends League, tournament production, PR, or global sponsorship.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Organization / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Apex Global Media"
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@apexmedia.com"
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                        Area of Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                      >
                        <option value="League Partnership / Ownership">League Partnership / Ownership</option>
                        <option value="Event Production & Venue Management">Event Production & Venue Management</option>
                        <option value="Sponsorship & Media Rights">Sponsorship & Media Rights</option>
                        <option value="Athlete & Talent Representation">Athlete & Talent Representation</option>
                        <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Project Details & Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your event scope, timing, or collaboration goals..."
                      className="w-full p-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[52px] rounded-[14px] text-sm font-bold uppercase tracking-widest text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_8px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Executive Proposal</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-sans pt-1">
                    <Shield className="w-3.5 h-3.5 text-[#D89B18]" />
                    <span>Protected by World Sports Group Non-Disclosure Agreement Protocols</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-5">
                <div className="w-20 h-20 rounded-full bg-[#D89B18]/20 text-[#F2B632] flex items-center justify-center mx-auto border border-[#D89B18]">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <h3 className="font-serif text-3xl font-bold text-white">
                  Proposal Received
                </h3>

                <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <strong className="text-[#F2B632]">{formData.interest}</strong> has been transmitted to World Sports Group's Dubai executive desk.
                </p>

                <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 text-xs text-gray-400 max-w-md mx-auto">
                  A representative will review your message and connect with you within 24 business hours.
                </div>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-xl bg-[#D89B18] hover:bg-[#F2B632] text-white font-semibold text-sm transition-colors cursor-pointer mt-4"
                >
                  Return to Website
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
