import React, { useState } from 'react';
import { Twitter, Instagram, Send, Check, MapPin, Phone, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenPartnerModal: () => void;
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy', targetSection?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal, onNavigate }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy',
    section?: string
  ) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, section);
    } else {
      const targetId = section || page;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0B0B0D] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(216,155,24,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: Logo, Brand Statement & Footprints */}
          <div className="lg:col-span-5 space-y-5">
            <img
              src="/src/assets/images/IMG-20250917-WA0013-1024x601.png"
              alt="World Sports Group Logo"
              referrerPolicy="no-referrer"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            
            <div className="space-y-2 font-sans">
              <p className="text-[#F2B632] font-bold text-sm tracking-wider uppercase">
                Founder of ASIAN LEGENDS LEAGUE
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Events Management &bull; Players Management &bull; PR &bull; TV Production &bull; Sponsorship
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-gray-400 font-mono">
                <Globe className="w-3.5 h-3.5 text-[#D89B18]" />
                <span>UAE | INDIA | UK | AUSTRALIA | USA</span>
              </div>
            </div>

            {/* Direct Contact Pills */}
            <div className="pt-2 space-y-2 text-xs font-sans">
              <a
                href="mailto:gworldsports@gmail.com"
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#F2B632] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D89B18]" />
                <span>gworldsports@gmail.com</span>
              </a>
              <a
                href="tel:+971562486875"
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#F2B632] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D89B18]" />
                <span>+971 562486875</span>
              </a>
              <div className="flex items-center gap-2.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#D89B18]" />
                <span>Sharjah Media City, Sharjah, UAE</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white font-sans border-b border-white/10 pb-3 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-gray-300 hover:text-[#F2B632] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89B18] group-hover:scale-125 transition-transform" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="text-gray-300 hover:text-[#F2B632] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89B18] group-hover:scale-125 transition-transform" />
                  Projects & Leagues
                </a>
              </li>
              <li>
                <a
                  href="#management"
                  onClick={(e) => handleNavClick(e, 'management')}
                  className="text-gray-300 hover:text-[#F2B632] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89B18] group-hover:scale-125 transition-transform" />
                  Management Board
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => handleNavClick(e, 'team')}
                  className="text-gray-300 hover:text-[#F2B632] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89B18] group-hover:scale-125 transition-transform" />
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="text-gray-300 hover:text-[#F2B632] transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D89B18] group-hover:scale-125 transition-transform" />
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPartnerModal}
                  className="text-[#F2B632] hover:text-white transition-colors inline-flex items-center gap-2 group text-left cursor-pointer font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2B632] group-hover:scale-125 transition-transform" />
                  Partner Proposal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white font-sans border-b border-white/10 pb-3 inline-block">
              Follow & Connect
            </h4>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/WorldSportsg?t=JdIcESAp1BAQ3BI3ydHxIw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-full bg-[#141414] border border-white/10 text-gray-300 hover:text-white hover:bg-[#D89B18] hover:border-[#D89B18] flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 text-xs font-semibold"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
                <span>X / Twitter</span>
              </a>
              <a
                href="https://www.instagram.com/worldsportsgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-full bg-[#141414] border border-white/10 text-gray-300 hover:text-white hover:bg-[#D89B18] hover:border-[#D89B18] flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 text-xs font-semibold"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Quick newsletter subscription input */}
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
                <label className="block text-xs text-gray-400 font-sans">
                  Stay updated with official WSG announcements:
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full h-11 pl-4 pr-10 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18] transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-[#D89B18] hover:bg-[#F2B632] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-[#D89B18]/15 border border-[#D89B18] text-xs text-[#F2B632] flex items-center gap-2 font-sans font-medium">
                <Check className="w-4 h-4 text-[#F2B632]" />
                Subscribed successfully!
              </div>
            )}
          </div>

        </div>

        {/* Thin Gold Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D89B18]/40 to-transparent my-8" />

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-sans gap-4">
          <div>
            © {new Date().getFullYear()} World Sports Group. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6 text-gray-400">
            <a
              href="#privacy"
              onClick={(e) => handleNavClick(e, 'privacy')}
              className="hover:text-[#D89B18] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hover:text-[#D89B18] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#management"
              onClick={(e) => handleNavClick(e, 'management')}
              className="hover:text-[#D89B18] transition-colors"
            >
              Sports Governance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

