import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy';
  onNavigate: (page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy', targetSection?: string) => void;
  onOpenPartnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenPartnerModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPage === 'home') {
        const sections = ['home', 'about', 'solutions', 'management', 'projects'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else if (currentPage === 'services') {
        setActiveSection('services');
      } else if (currentPage === 'projects') {
        setActiveSection('projects');
      } else if (currentPage === 'team') {
        setActiveSection('team');
      } else if (currentPage === 'management') {
        setActiveSection('management');
      } else if (currentPage === 'contact') {
        setActiveSection('contact');
      } else {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks: Array<{ label: string; page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact'; section?: string }> = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Teams', page: 'team' },
    { label: 'Management', page: 'management' },
    { label: 'Services', page: 'services' },
    { label: 'Projects', page: 'projects' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy',
    section?: string
  ) => {
    e.preventDefault();
    onNavigate(page, section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav-light py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-b border-[#ECECEC]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Header Image Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="z-10 focus:outline-none flex items-center group">
            <img
              src={isScrolled ? "../assets/WSG-LOGO.png" : "../assets/IMG-20250917-WA0013-1024x601.png"}
              alt="World Sports Group Logo"
              referrerPolicy="no-referrer"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page && (link.section ? activeSection === link.section : true);
              return (
                <a
                  key={link.label}
                  href={`#${link.section || link.page}`}
                  onClick={(e) => handleNavClick(e, link.page, link.section)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1 ${
                    isScrolled
                      ? isActive ? 'text-[#D89B18]' : 'text-[#1A1A1A] hover:text-[#D89B18]'
                      : isActive ? 'text-[#F2B632]' : 'text-white/90 hover:text-[#F2B632]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D89B18] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenPartnerModal}
              className="group relative inline-flex items-center justify-center h-[52px] px-7 rounded-[14px] text-sm font-semibold text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_20px_rgba(216,155,24,0.3)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden cursor-pointer"
            >
              {/* Subtle light shimmer overlay */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                Partner with us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              isScrolled ? 'text-[#1A1A1A] hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8 md:hidden"
          >
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#D89B18] mb-2">
                Menu Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.section || link.page}`}
                  onClick={(e) => handleNavClick(e, link.page, link.section)}
                  className="block text-3xl font-serif font-bold text-white hover:text-[#F2B632] transition-colors py-2 border-b border-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full flex items-center justify-center gap-2 h-[52px] rounded-[14px] text-sm font-semibold text-white bg-gradient-to-r from-[#D89B18] to-[#B87E0E] shadow-lg"
              >
                <span>Partner with us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="text-center text-xs text-gray-500 font-sans pt-2">
                Sharjah Media City, UAE • Global Sports Conglomerate
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
