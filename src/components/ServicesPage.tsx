import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Calendar,
  UserCheck,
  ShieldCheck,
  Handshake,
  ChevronDown,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  Send,
  Layers,
  Globe2,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';
import wsgHeroSports from '../assets/images/wsg_hero_sports_1785224235464.jpg';
import wsgDubaiArena from '../assets/images/wsg_dubai_arena_1785224318037.jpg';
import wsgAsianLeague from '../assets/images/wsg_asian_league_1785224345066.jpg';

interface ServicesPageProps {
  onOpenPartnerModal: () => void;
  onNavigateToProjects: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenPartnerModal,
  onNavigateToProjects,
}) => {
  const [expandedTile, setExpandedTile] = useState<number | null>(0);
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const [collabModalOpen, setCollabModalOpen] = useState(false);
  const [collabForm, setCollabForm] = useState({
    name: '',
    email: '',
    projectType: 'League Creation',
    message: '',
  });
  const [collabSubmitted, setCollabSubmitted] = useState(false);

  // 1. Interactive Services Accordion / Tiles
  const servicesTiles = [
    {
      id: 1,
      title: 'Sporting IP & League Creation',
      icon: Trophy,
      tag: 'LEAGUE INNOVATION',
      summary: 'Building high-value, sustainable sporting IP from concept to global broadcast.',
      points: [
        'Conceptualizing original leagues and sport properties',
        'Developing formats that attract fans, sponsors, and media',
        'Commercial strategy & scalable execution',
      ],
      image: wsgHeroSports,
    },
    {
      id: 2,
      title: 'Event Management & Production',
      icon: Calendar,
      tag: 'WORLD-CLASS EVENTS',
      summary: 'Flawless execution of international sporting events with end-to-end logistics.',
      points: [
        'End-to-end event planning and logistics',
        'Broadcast coordination and fan engagement experiences',
        'Sponsorship integration and venue management',
      ],
      image: wsgDubaiArena,
    },
    {
      id: 3,
      title: 'Talent & Athlete Management',
      icon: UserCheck,
      tag: 'ATHLETE EXCELLENCE',
      summary: 'Comprehensive career and performance management for elite world athletes.',
      points: [
        'Performance planning, contracts, and training oversight',
        'Media, branding, and PR support',
        'Career guidance and professional development',
      ],
      image: wsgHeroSports,
    },
    {
      id: 4,
      title: 'Legal & Compliance',
      icon: ShieldCheck,
      tag: 'GOVERNANCE & TRUST',
      summary: 'Safeguarding sports properties with strict regulatory and legal governance.',
      points: [
        'Contracts, regulations, and federation compliance',
        'Risk management and dispute resolution',
        'Protecting stakeholders and properties',
      ],
      image: wsgAsianLeague,
    },
    {
      id: 5,
      title: 'Strategic Partnerships & Sponsorships',
      icon: Handshake,
      tag: 'COMMERCIAL GROWTH',
      summary: 'Maximizing brand equity and driving multi-million dollar sponsorships.',
      points: [
        'Identifying commercial opportunities for leagues and events',
        'Brand activations, marketing, and fan engagement',
        'Long-term growth strategies for stakeholders',
      ],
      image: wsgAsianLeague,
    },
  ];

  // 2. Services Spotlight Data
  const spotlights = [
    {
      id: 1,
      title: 'ALL T20 League',
      badge: 'FLAGSHIP LEAGUE',
      description: 'Full operational management from planning to global broadcast, delivering high-octane cricket entertainment.',
      stats: '150M+ Viewers | 8 Teams | Global Rights',
      image: wsgHeroSports,
    },
    {
      id: 2,
      title: 'WSG Development League',
      badge: 'TALENT PIPELINE',
      description: 'Nurturing next-generation athletes through professional support, elite coaching, and structured scouting programs.',
      stats: '500+ Athletes | 12 Academies | Elite Pathway',
      image: wsgHeroSports,
    },
    {
      id: 3,
      title: 'Multi-Sport Events',
      badge: 'GLOBAL COMPETITIONS',
      description: 'Engaging competitions with immersive fan experiences across cricket, football, basketball, and combat sports.',
      stats: '20+ Host Cities | 100k+ Attendance',
      image: wsgDubaiArena,
    },
  ];

  // 3. Why Choose WSG Points
  const whyChoosePoints = [
    {
      title: 'End-to-End Execution',
      description: 'We handle every single aspect of sports projects — from initial concept to live stadium execution and post-event analysis.',
      icon: Layers,
    },
    {
      title: 'Athlete-Centric Approach',
      description: 'We let talent focus purely on performance while our experienced operational team manages logistics, legal, and branding.',
      icon: HeartHandshake,
    },
    {
      title: 'Global Standards',
      description: 'Every league and event is delivered with international operational excellence, adhering to world governing body guidelines.',
      icon: Globe2,
    },
    {
      title: 'Scalable & Sustainable',
      description: 'Designed to grow across regions, audiences, and sports properties for long-term commercial vitality.',
      icon: TrendingUp,
    },
  ];

  const handleCollabSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (collabForm.name && collabForm.email) {
      setCollabSubmitted(true);
    }
  };

  const handleScrollToOverview = () => {
    const el = document.getElementById('services-overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#ffffff] text-[#1A1A1A] font-sans">
      
      {/* 1. Page Hero / Banner */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden pt-28 pb-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy"
            src={wsgDubaiArena}
            alt="World Sports Group Stadium Event Production"
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
              <Sparkles className="w-4 h-4 text-[#F2B632]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                WORLD SPORTS GROUP • END-TO-END CAPABILITIES
              </span>
            </motion.div>

            {/* Exact Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
            >
              Comprehensive <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(216,155,24,0.3)]">
                Sports Solutions
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed border-l-2 border-[#D89B18] pl-5"
            >
              From leagues to events to athlete management — WSG delivers end-to-end sports excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <button
                onClick={handleScrollToOverview}
                className="group relative inline-flex items-center justify-center h-[56px] px-9 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>

              <button
                onClick={() => setCollabModalOpen(true)}
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                Want to Collaborate?
              </button>
            </motion.div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <button
            onClick={handleScrollToOverview}
            className="flex flex-col items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#D89B18] transition-colors cursor-pointer"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#D89B18]" />
          </button>
        </div>
      </section>

      {/* 2. Introduction Section + Infographic Counters */}
      <section className="py-24 bg-[#FAFAFC] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Narrative Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
                STRATEGIC EXECUTION & INSIGHT
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
                End-to-End Expertise in <br />
                <span className="text-gold-gradient">Sports Management</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  World Sports Group provides full-scale sports management solutions tailored for leagues, events, athletes, and federations.
                </p>
                <p>
                  Our team combines strategic insight, operational excellence, and a global perspective to ensure every project is efficient, engaging, and impactful.
                </p>
              </div>
            </div>

            {/* Interactive Infographic / Counter Cards Right */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all flex items-center justify-between group">
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] group-hover:text-[#D89B18] transition-colors">
                    5+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                    Leagues Managed
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F2B632]/10 text-[#D89B18] flex items-center justify-center font-bold">
                  <Trophy className="w-6 h-6" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all flex items-center justify-between group">
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] group-hover:text-[#D89B18] transition-colors">
                    20+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                    Events Produced
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F2B632]/10 text-[#D89B18] flex items-center justify-center font-bold">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all flex items-center justify-between group">
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] group-hover:text-[#D89B18] transition-colors">
                    500+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                    Athletes Supported
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F2B632]/10 text-[#D89B18] flex items-center justify-center font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Services Overview – Interactive Accordion / Tiles */}
      <section id="services-overview" className="py-28 bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
              CORE SERVICE PILLARS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]">
              Services Overview
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg">
              Click any pillar to expand details and explore how WSG powers championship-grade outcomes.
            </p>
          </div>

          {/* Interactive Tiles List */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {servicesTiles.map((tile, index) => {
              const IconComp = tile.icon;
              const isExpanded = expandedTile === index;

              return (
                <div
                  key={tile.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#0B0B0D] text-white border-[#D89B18] shadow-2xl'
                      : 'bg-[#FAFAFC] text-[#1A1A1A] border-gray-200 hover:border-[#D89B18]'
                  }`}
                >
                  {/* Header Row */}
                  <button
                    onClick={() => setExpandedTile(isExpanded ? null : index)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-bold transition-colors ${
                          isExpanded
                            ? 'bg-[#D89B18] text-white'
                            : 'bg-white text-[#D89B18] border border-gray-200'
                        }`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <div
                          className={`text-[10px] font-bold uppercase tracking-widest ${
                            isExpanded ? 'text-[#F2B632]' : 'text-[#D89B18]'
                          }`}
                        >
                          {tile.tag}
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                          Tile {tile.id} – {tile.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {isExpanded ? 'Collapse' : 'Expand Details'}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                          isExpanded ? 'rotate-180 bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="border-t border-white/10 p-6 sm:p-8 bg-[#141414]/90"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                          <div className="md:col-span-7 space-y-6">
                            <p className="text-gray-300 text-base font-light leading-relaxed">
                              {tile.summary}
                            </p>

                            <ul className="space-y-3">
                              {tile.points.map((pt, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-200 font-sans">
                                  <CheckCircle2 className="w-5 h-5 text-[#F2B632] shrink-0 mt-0.5" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="pt-2">
                              <button
                                onClick={() => setCollabModalOpen(true)}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D89B18] to-[#B87E0E] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all cursor-pointer"
                              >
                                <span>Learn More / Request Proposal</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="md:col-span-5">
                            <div className="rounded-xl overflow-hidden border border-white/15 shadow-xl h-52">
                              <img loading="lazy"
                                src={tile.image}
                                alt={tile.title}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Services Spotlight Section (Carousel) */}
      <section className="py-24 bg-[#0B0B0D] text-white border-t border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632]">
                CASE STUDIES IN MOTION
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
                Services Spotlight
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setActiveSpotlight((prev) => (prev - 1 + spotlights.length) % spotlights.length)
                }
                className="w-12 h-12 rounded-full bg-[#141414] border border-white/15 text-white hover:border-[#D89B18] hover:text-[#D89B18] flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveSpotlight((prev) => (prev + 1) % spotlights.length)
                }
                className="w-12 h-12 rounded-full bg-[#141414] border border-white/15 text-white hover:border-[#D89B18] hover:text-[#D89B18] flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Slide */}
          <div className="relative rounded-3xl bg-[#141414] border border-white/15 overflow-hidden p-8 sm:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpotlight}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#D89B18]/40 text-[#F2B632] text-xs font-bold uppercase tracking-wider">
                    {spotlights[activeSpotlight].badge}
                  </div>

                  <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
                    Spotlight {spotlights[activeSpotlight].id}: {spotlights[activeSpotlight].title}
                  </h3>

                  <p className="text-gray-300 text-lg font-light leading-relaxed">
                    {spotlights[activeSpotlight].description}
                  </p>

                  <div className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-[#F2B632] inline-block">
                    Impact Metrics: {spotlights[activeSpotlight].stats}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onNavigateToProjects}
                      className="group inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-gradient-to-r from-[#D89B18] to-[#B87E0E] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                    >
                      <span>See All Projects</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15">
                  <img loading="lazy"
                    src={spotlights[activeSpotlight].image}
                    alt={spotlights[activeSpotlight].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 5. Why Choose WSG for Your Sports Needs */}
      <section className="py-28 bg-[#FAFAFC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]">
              Why Choose WSG for Your Sports Needs
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg">
              We provide global standards and seamless execution so federations, brands, and athletes achieve peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoosePoints.map((pt) => {
              const IconComp = pt.icon;
              return (
                <div
                  key={pt.title}
                  className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] hover:-translate-y-1 transition-all space-y-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0B0B0D] text-[#F2B632] flex items-center justify-center font-bold">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    {pt.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Call to Action Section */}
      <section className="py-28 bg-[#0B0B0D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.18),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8 p-10 sm:p-14 rounded-3xl bg-[#141414] border border-[#D89B18]/30 shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632]">
              TAKE THE NEXT STEP
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Ready to Elevate Your <br />
              <span className="text-gold-gradient">Sports Property?</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed">
              WSG partners with leagues, federations, and brands to deliver exceptional sports experiences.
            </p>

            <button
              onClick={() => setCollabModalOpen(true)}
              className="inline-flex items-center gap-2.5 h-14 px-10 rounded-xl bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] text-white text-xs font-bold uppercase tracking-wider shadow-xl hover:shadow-[0_10px_35px_rgba(216,155,24,0.5)] transition-all cursor-pointer"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Collaboration Pop-Up / Modal ("Want to Collaborate?") */}
      <AnimatePresence>
        {collabModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setCollabModalOpen(false);
                setCollabSubmitted(false);
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0B0B0D] border border-[#D89B18]/40 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-white overflow-hidden"
            >
              <button
                onClick={() => {
                  setCollabModalOpen(false);
                  setCollabSubmitted(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!collabSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F2B632]">
                      WSG PARTNERSHIP INQUIRY
                    </span>
                    <h3 className="font-serif text-3xl font-extrabold text-white mt-1">
                      Want to Collaborate?
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                      Reach out to discuss league creation, event management, or athlete support programs.
                    </p>
                  </div>

                  <form onSubmit={handleCollabSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={collabForm.name}
                        onChange={(e) => setCollabForm({ ...collabForm, name: e.target.value })}
                        placeholder="e.g. David Warner"
                        className="w-full h-11 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={collabForm.email}
                        onChange={(e) => setCollabForm({ ...collabForm, email: e.target.value })}
                        placeholder="e.g. david@sportsgroup.com"
                        className="w-full h-11 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Project Type
                      </label>
                      <select
                        value={collabForm.projectType}
                        onChange={(e) => setCollabForm({ ...collabForm, projectType: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl bg-[#141414] border border-white/15 text-white text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      >
                        <option value="League Creation">Sporting IP & League Creation</option>
                        <option value="Event Management">Event Management & Production</option>
                        <option value="Athlete Support">Talent & Athlete Management</option>
                        <option value="Legal & Compliance">Legal & Compliance</option>
                        <option value="Sponsorships">Strategic Partnerships & Sponsorships</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Project Brief / Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={collabForm.message}
                        onChange={(e) => setCollabForm({ ...collabForm, message: e.target.value })}
                        placeholder="Tell us about your league or sports project timeline..."
                        className="w-full p-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#D89B18] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Inquiry Sent, {collabForm.name}!
                  </h3>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed font-light">
                    Our sports solutions executive team in Sharjah Media City, UAE will review your inquiry for <span className="text-[#F2B632]">{collabForm.projectType}</span> and reply to <span className="text-[#F2B632]">{collabForm.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setCollabModalOpen(false);
                      setCollabSubmitted(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
