import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import wsgHeroSports from '../assets/images/wsg_hero_sports_1785224235464.jpg';
import wsgAsianLeague from '../assets/images/wsg_asian_league_1785224345066.jpg';
import wsgDubaiArena from '../assets/images/wsg_dubai_arena_1785224318037.jpg';

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenPartnerModal: () => void;
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'contact', targetSection?: string) => void;
}

interface SlideData {
  id: number;
  heading: string;
  subheading: string;
  ctaText: string;
  ctaAction: 'projects' | 'services' | 'partner';
  image: string;
  tag: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    heading: 'Sport. Passion. Global Reach.',
    subheading: 'From Dubai to the world — we create leagues, events, and experiences that excite.',
    ctaText: 'Discover Our Projects',
    ctaAction: 'projects',
    image: wsgHeroSports,
    tag: 'GLOBAL LEAGUES & CHAMPIONSHIPS',
  },
  {
    id: 2,
    heading: 'From Concept to Championship',
    subheading: 'Designing and managing sports properties that grow, engage, and inspire.',
    ctaText: 'Explore Our Services',
    ctaAction: 'services',
    image: wsgAsianLeague,
    tag: 'END-TO-END EVENT PRODUCTION',
  },
  {
    id: 3,
    heading: 'Empowering Athletes, Engaging Fans',
    subheading: 'Full-scale management for events, leagues, and talent programs worldwide.',
    ctaText: 'Partner With Us',
    ctaAction: 'partner',
    image: wsgDubaiArena,
    tag: 'GLOBAL TALENT & BRAND PATHWAYS',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onOpenShowreel,
  onOpenPartnerModal,
  onNavigate,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Auto-play timer (6 seconds per slide)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Particle Canvas for Gold Dust Ambient Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
    }

    const particles: Particle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedY: -(Math.random() * 0.35 + 0.1),
      speedX: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.2,
      fadeSpeed: Math.random() * 0.004 + 0.002,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.fadeSpeed;

        if (p.opacity > 0.75 || p.opacity < 0.1) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 155, 24, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#D89B18';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCtaClick = (action: 'projects' | 'services' | 'partner') => {
    if (action === 'partner') {
      onOpenPartnerModal();
    } else if (action === 'projects') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'services') {
      if (onNavigate) {
        onNavigate('services');
      } else {
        const el = document.getElementById('solutions');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0D] pt-24 pb-16"
    >
      {/* Background Images with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.15]"
            referrerPolicy="no-referrer"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(216,155,24,0.15),transparent_65%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Gold Dust Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-1 pointer-events-none" />

      {/* Side Navigation Arrows (Floating Edge Arrows) - Hidden on Mobile to prevent text overlap */}
      <div className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#F2B632] hover:border-[#D89B18] hover:bg-[#D89B18]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>

      <div className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 border border-white/20 text-white hover:text-[#F2B632] hover:border-[#D89B18] hover:bg-[#D89B18]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer group"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-8 sm:px-14 lg:px-20 py-12 flex flex-col justify-center min-h-[75vh]">
        
        {/* Slide Narrative */}
        <div className="max-w-4xl space-y-8 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 border border-[#D89B18]/40 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D89B18] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                  {slide.tag}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.06] max-w-4xl drop-shadow-lg">
                {slide.heading}
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl font-sans font-light leading-relaxed border-l-2 border-[#D89B18] pl-5 drop-shadow-md">
                {slide.subheading}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-4">
                <button
                  onClick={() => handleCtaClick(slide.ctaAction)}
                  className="group relative inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <span className="relative z-10 flex items-center gap-2.5">
                    {slide.ctaText}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </button>

                <button
                  onClick={onOpenShowreel}
                  className="group inline-flex items-center justify-center h-[56px] px-7 rounded-[14px] text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#D89B18]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-full bg-[#D89B18] text-white flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </span>
                  <span>Watch Showreel</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Premium Integrated Bottom Controller Dock */}
      <div className="absolute bottom-8 right-8 sm:right-14 z-20 hidden sm:flex items-center gap-6 bg-black/60 border border-white/15 backdrop-blur-xl px-6 py-3.5 rounded-full shadow-2xl">
        {/* Slide Counter */}
        <div className="flex items-center gap-2 font-mono text-xs font-extrabold text-white">
          <span className="text-[#F2B632] text-sm">0{currentSlide + 1}</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">0{slides.length}</span>
        </div>

        <div className="h-4 w-[1px] bg-white/20" />

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${s.id}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-[#D89B18]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/20" />

        {/* Auto-rotate status */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-gray-300 hover:text-[#F2B632] transition-colors cursor-pointer"
        >
          {isPaused ? (
            <>
              <Pause className="w-3 h-3 text-[#F2B632]" />
              <span>PAUSED</span>
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D89B18] animate-pulse" />
              <span>AUTOPLAY</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Bottom Controller Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex sm:hidden items-center gap-4 bg-black/70 border border-white/15 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl">
        <button
          onClick={prevSlide}
          className="text-white hover:text-[#F2B632] p-1 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all ${
                currentSlide === idx ? 'w-6 bg-[#D89B18]' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-white hover:text-[#F2B632] p-1 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-10 overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <path d="M0,120 C480,30 960,30 1440,120 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};
