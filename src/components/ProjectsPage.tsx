import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe2,
  HeartHandshake,
  Users,
  TrendingUp,
  X,
  Play,
  Zap,
  Clock,
  Radio,
  ChevronDown
} from 'lucide-react';
import wsgHeroSports from '../assets/images/wsg_hero_sports_1785224235464.jpg';
import wsgDubaiArena from '../assets/images/wsg_dubai_arena_1785224318037.jpg';

interface ProjectsPageProps {
  onOpenPartnerModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenPartnerModal }) => {
  const [selectedProjectModal, setSelectedProjectModal] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'ALL T20 League',
      type: 'T20 Cricket League',
      badge: 'LIVE / ACTIVE LEAGUE',
      scope: 'International players, global broadcast-ready',
      highlights: 'High-energy matches, engaging fan experience, top-tier production',
      description:
        'The flagship T20 tournament bringing together international cricket icons, high-stakes matches, and state-of-the-art multi-camera broadcast production across 120+ territories.',
      metrics: ['150M+ Global Viewers', '8 Franchises', 'Dubai & Global Arenas'],
      image: wsgHeroSports,
      status: 'active',
    },
    {
      id: 2,
      title: 'WSG Development League',
      type: 'Cricket Development League (Upcoming)',
      badge: 'UPCOMING LEAGUE',
      scope: 'Focused on nurturing young talent and creating pathways for professional athletes',
      highlights: 'Structured academy pathways, elite coaching, international scout access',
      description:
        'An upcoming premier grass-roots development engine designed to identify, mentor, and launch emerging talent into professional franchise leagues.',
      metrics: ['500+ Grassroots Prospects', '12 Regional Academies', 'Scout Showcase'],
      image: wsgHeroSports,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Global Sports Challenge',
      type: 'Multi-Sport Championship',
      badge: 'FUTURE PROPERTY',
      scope: 'Multi-city competitions across cricket, football, and basketball',
      highlights: 'Immersive fan zones, celebrity exhibition matches, regional rivalries',
      description:
        'A high-octane multi-sport spectacle uniting top club sides and fanbase activations in major metropolitan sports arenas across the Middle East and Asia.',
      metrics: ['3 Major Sports', '10 Host Cities', 'Interactive Fan Zones'],
      image: wsgDubaiArena,
      status: 'upcoming',
    },
  ];

  const whyStandOut = [
    {
      title: 'Global Standards',
      description: 'Professional execution and operational excellence across every fixture.',
      icon: Globe2,
    },
    {
      title: 'Athlete Focused',
      description: 'Supporting talent on and off the field with elite medical and career resources.',
      icon: HeartHandshake,
    },
    {
      title: 'Fan-Centric',
      description: 'High-quality stadium experiences, immersive broadcast-friendly formats.',
      icon: Users,
    },
    {
      title: 'Sustainable Growth',
      description: 'Designed to expand and scale internationally with robust commercial returns.',
      icon: TrendingUp,
    },
  ];

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentProject = projects.find((p) => p.id === selectedProjectModal);

  return (
    <div className="bg-[#ffffff] text-[#1A1A1A] font-sans">
      
      {/* 1. Page Hero / Banner */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden pt-28 pb-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy"
            src={wsgHeroSports}
            alt="World Sports Group Cricket Stadium Action"
            className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/80 to-[#0B0B0D]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(216,155,24,0.18),transparent_65%)] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12 text-left">
          <div className="max-w-3xl space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 border border-[#D89B18]/40 backdrop-blur-md"
            >
              <Trophy className="w-4 h-4 text-[#F2B632]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                WORLD SPORTS GROUP • SPORTING PORTFOLIO
              </span>
            </motion.div>

            {/* Exact Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
            >
              Our Leagues & <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(216,155,24,0.3)]">
                Sporting Properties
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed border-l-2 border-[#D89B18] pl-5"
            >
              Delivering world-class tournaments and creating pathways for athletes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <button
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center justify-center h-[56px] px-9 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Explore Projects
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>

              <button
                onClick={onOpenPartnerModal}
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                Partner With Us
              </button>
            </motion.div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <button
            onClick={handleScrollToProjects}
            className="flex flex-col items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#D89B18] transition-colors cursor-pointer"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#D89B18]" />
          </button>
        </div>
      </section>

      {/* 2. Introduction Section + Interactive Counters */}
      <section className="py-24 bg-[#FAFAFC] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
                GLOBAL IMPACT & PATHWAYS
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
                Building Leagues, <br />
                <span className="text-gold-gradient">Creating Opportunities</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  At WSG, we design, manage, and deliver sporting properties that excite fans and empower athletes.
                </p>
                <p>
                  From premier leagues to development initiatives, every project is built to professional standards, ensuring maximum engagement, sustainability, and growth.
                </p>
              </div>
            </div>

            {/* Animated Counters */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all flex items-center justify-between group">
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] group-hover:text-[#D89B18] transition-colors">
                    1+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                    Leagues Managed
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F2B632]/10 text-[#D89B18] flex items-center justify-center font-bold">
                  <Radio className="w-6 h-6" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all flex items-center justify-between group">
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] group-hover:text-[#D89B18] transition-colors">
                    2
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                    Upcoming Projects
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F2B632]/10 text-[#D89B18] flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all flex items-center justify-between group">
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] group-hover:text-[#D89B18] transition-colors">
                    50+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                    Matches Planned
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F2B632]/10 text-[#D89B18] flex items-center justify-center font-bold">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Projects / Leagues Grid */}
      <section id="projects-grid" className="py-28 bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
              CHAMPIONSHIP PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]">
              Featured Leagues & Properties
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg">
              Explore our portfolio of international cricket leagues, development pipelines, and multi-sport challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-3xl bg-[#0B0B0D] text-white border border-white/10 hover:border-[#D89B18] shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 relative"
              >
                {/* Coming Soon Tag Overlay */}
                {proj.status === 'upcoming' && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#D89B18] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    COMING SOON
                  </div>
                )}

                <div>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img loading="lazy"
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover filter brightness-[0.8] group-hover:scale-108 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-4">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F2B632]">
                      {proj.type}
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#F2B632] transition-colors">
                      {proj.title}
                    </h3>

                    <div className="space-y-2 text-xs font-sans text-gray-300">
                      <p><strong className="text-white">Scope:</strong> {proj.scope}</p>
                      <p><strong className="text-white">Highlights:</strong> {proj.highlights}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 pt-0">
                  {proj.status === 'active' ? (
                    <button
                      onClick={() => setSelectedProjectModal(proj.id)}
                      className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] to-[#B87E0E] hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedProjectModal(proj.id)}
                      className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-300 bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Explore Coming Soon</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Our Leagues Stand Out */}
      <section className="py-28 bg-[#FAFAFC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
              PROVEN STANDARDS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]">
              Why Our Leagues Stand Out
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg">
              Combining world-class broadcast quality with athlete growth and high fan engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyStandOut.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all space-y-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0B0B0D] text-[#F2B632] flex items-center justify-center font-bold">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Call to Action / Contact Prompt */}
      <section className="py-28 bg-[#0B0B0D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.18),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8 p-10 sm:p-14 rounded-3xl bg-[#141414] border border-[#D89B18]/30 shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632]">
              PARTNERSHIP OPPORTUNITIES
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Partner With Us on <br />
              <span className="text-gold-gradient">Future Projects</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed">
              WSG welcomes collaboration for leagues, tournaments, and talent programs.
            </p>

            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center gap-2.5 h-14 px-10 rounded-xl bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] text-white text-xs font-bold uppercase tracking-wider shadow-xl hover:shadow-[0_10px_35px_rgba(216,155,24,0.5)] transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProjectModal && currentProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0B0B0D] border border-[#D89B18]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden"
            >
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="h-48 rounded-2xl overflow-hidden relative">
                  <img loading="lazy"
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs font-extrabold uppercase tracking-widest text-[#F2B632] bg-black/70 px-3 py-1 rounded-md border border-[#D89B18]/40">
                    {currentProject.badge}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs text-[#D89B18] font-bold uppercase tracking-wider mt-1">
                    {currentProject.type}
                  </p>
                </div>

                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase text-[#F2B632]">
                    Key Metrics & Scope
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentProject.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-black text-gray-200 text-xs font-mono border border-white/10"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    onClick={() => {
                      setSelectedProjectModal(null);
                      onOpenPartnerModal();
                    }}
                    className="flex-1 h-12 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] to-[#B87E0E] transition-all cursor-pointer"
                  >
                    Partner on this League
                  </button>
                  <button
                    onClick={() => setSelectedProjectModal(null)}
                    className="px-6 h-12 rounded-xl text-xs font-semibold text-gray-300 bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
