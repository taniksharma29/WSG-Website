import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Zap,
  Flame,
  CheckCircle2,
  Users,
  Globe,
  Trophy,
  Linkedin,
  Mail,
  ChevronDown,
  Sparkles,
  Building2
} from 'lucide-react';

interface AboutPageProps {
  onOpenPartnerModal: () => void;
  onNavigateToServices: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenPartnerModal,
  onNavigateToServices,
}) => {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true, margin: '-100px' });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });

  const handleDiscoverStory = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('company-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '10+', label: 'Projects Delivered', desc: 'Global leagues & premier sporting events' },
    { value: '5+', label: 'Countries Reached', desc: 'Cross-border international operations' },
    { value: '500+', label: 'Athletes Supported', desc: 'Elite grassroots to pro player representation' },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Every project executed to the highest standard with meticulous precision.',
      icon: Award,
      tag: 'WORLD-CLASS STANDARDS',
    },
    {
      title: 'Integrity',
      description: 'Transparent partnerships with all stakeholders, athletes, and corporate sponsors.',
      icon: ShieldCheck,
      tag: 'ETHICAL GOVERNANCE',
    },
    {
      title: 'Innovation',
      description: 'Unique leagues, dynamic fan-first event formats, and athlete solutions.',
      icon: Zap,
      tag: 'FORWARD THINKING',
    },
    {
      title: 'Passion',
      description: 'We live and breathe sport — driving unmatched enthusiasm into every venue.',
      icon: Flame,
      tag: 'PURE DEDICATION',
    },
  ];

  const objectives = [
    'Deliver sustainable sporting ecosystems that grow audiences and fan engagement.',
    'Develop pathways for athletes at all levels, from grassroots to professional.',
    'Expand WSG’s footprint to multiple countries with scalable leagues and events.',
    'Foster partnerships that enhance the commercial and social impact of sport.',
  ];

  const team = [
    {
      name: 'Executive Board',
      role: 'Global Governance & Capital',
      location: 'Sharjah Media City, UAE',
      bio: 'Leading international sports investments, commercial rights acquisition, and multi-country league expansion across UAE, India, UK, Australia, and USA.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'League & Operations Directorate',
      role: 'Broadcast & Stadium Logistics',
      location: 'UAE • India • UK',
      bio: 'Specializing in venue infrastructure, 4K multi-camera broadcast streams, and operational execution for multi-team tournament properties.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Talent & Commercial Partnerships',
      role: 'Sponsorships & Athlete Pathways',
      location: 'UAE • Australia • USA',
      bio: 'Connecting multinational brands with premier sports IP, negotiating high-value athlete endorsements, and building player academies.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-[#ffffff] text-[#1A1A1A] font-sans">
      
      {/* 1. PAGE HERO / BANNER */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden pt-28 pb-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy"
            src="/src/assets/images/wsg_dubai_arena_1785224318037.jpg"
            alt="World Sports Group Stadium Background"
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
              <Building2 className="w-4 h-4 text-[#F2B632]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                WORLD SPORTS GROUP • ABOUT US
              </span>
            </motion.div>

            {/* Exact Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
            >
              Shaping the <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(216,155,24,0.3)]">
                Future of Sport
              </span>
            </motion.h1>

            {/* Exact Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed border-l-2 border-[#D89B18] pl-5"
            >
              Global leagues, transformative events, and talent programs from Dubai to the world.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-4"
            >
              <a
                href="#company-overview"
                onClick={handleDiscoverStory}
                className="group relative inline-flex items-center justify-center h-[56px] px-9 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <a
            href="#company-overview"
            onClick={handleDiscoverStory}
            className="flex flex-col items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#D89B18] transition-colors"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#D89B18]" />
          </a>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW / INTRODUCTION */}
      <section id="company-overview" ref={introRef} className="py-28 bg-[#ffffff] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#D89B18]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18] font-sans">
                  COMPANY OVERVIEW
                </span>
              </div>

              {/* Exact Title */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0B0D] tracking-tight">
                Who We Are
              </h2>

              {/* Exact Body Paragraphs */}
              <div className="space-y-5 text-base sm:text-lg text-[#6B6B6B] leading-relaxed font-sans font-normal border-l-2 border-[#ECECEC] pl-6">
                <p>
                  World Sports Group (WSG) is a Dubai-based sports management company creating world-class sporting properties and experiences.
                </p>
                <p>
                  We operate with a global vision, combining strategy, creativity, and execution to deliver leagues, tournaments, athlete programs, and fan-first events.
                </p>
                <p>
                  From grassroots initiatives to international championships, our work bridges talent, audiences, and commercial partners to grow sport sustainably.
                </p>
              </div>
            </motion.div>

            {/* Right Interactive Stats Reveal Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-8 rounded-[28px] bg-[#0B0B0D] text-white border border-[#D89B18]/30 shadow-[0_20px_50px_rgba(0,0,0,0.15)] space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D89B18]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F2B632] font-sans">
                    WSG Impact Metrics
                  </span>
                  <Sparkles className="w-4 h-4 text-[#D89B18]" />
                </div>

                {/* 3 Stats Items with Hover Animation */}
                <div className="space-y-6">
                  {stats.map((st, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02, x: 6 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D89B18] transition-all duration-300 cursor-pointer group"
                    >
                      <div className="font-serif text-4xl lg:text-5xl font-black text-white group-hover:text-gold-gradient transition-colors">
                        {st.value}
                      </div>
                      <div className="text-sm font-bold uppercase tracking-wider text-[#D89B18] font-sans mt-1">
                        {st.label}
                      </div>
                      <div className="text-xs text-gray-400 font-sans mt-0.5 font-light">
                        {st.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. OUR MISSION, VISION & VALUES */}
      <section ref={valuesRef} className="py-28 bg-[#0B0B0D] text-white relative overflow-hidden border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Mission & Vision Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Mission Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-[28px] bg-[#141414] border border-[#D89B18]/30 shadow-xl space-y-4 relative group hover:border-[#D89B18] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D89B18]/15 border border-[#D89B18] text-[#F2B632] flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18] block font-sans">
                OUR PURPOSE
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 text-base sm:text-lg font-sans font-light leading-relaxed">
                To create world-class sports properties that inspire athletes, engage fans, and deliver long-term impact for stakeholders.
              </p>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 sm:p-10 rounded-[28px] bg-[#141414] border border-[#D89B18]/30 shadow-xl space-y-4 relative group hover:border-[#D89B18] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D89B18]/15 border border-[#D89B18] text-[#F2B632] flex items-center justify-center">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18] block font-sans">
                OUR ASPIRATION
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-300 text-base sm:text-lg font-sans font-light leading-relaxed">
                To become the most trusted global partner for leagues, events, and talent development, with projects spanning multiple countries and sports.
              </p>
            </motion.div>

          </div>

          {/* Core Values Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
              Core Values
            </h2>
          </div>

          {/* 4 Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="group p-8 rounded-[24px] bg-[#141414] border border-white/10 hover:border-[#D89B18] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-white/10 group-hover:border-[#D89B18] text-[#F2B632] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#D89B18] mb-2 font-sans">
                      {val.tag}
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#F2B632] transition-colors">
                      {val.title}
                    </h4>

                    <p className="text-sm text-gray-400 font-sans font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. OUR OBJECTIVES */}
      <section className="py-28 bg-[#ffffff] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Objectives List */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#D89B18]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18] font-sans">
                  STRATEGIC GOALS
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0B0D] tracking-tight">
                Our Objectives
              </h2>

              <div className="space-y-4">
                {objectives.map((obj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-2xl bg-[#ffffff] border border-[#ECECEC] hover:border-[#D89B18] shadow-sm flex items-start gap-4 transition-all hover:shadow-md"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#D89B18]/10 text-[#D89B18] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg text-[#1A1A1A] font-sans font-medium leading-relaxed">
                      {obj}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={onNavigateToServices}
                  className="group inline-flex items-center justify-center h-[52px] px-8 rounded-[14px] text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_20px_rgba(216,155,24,0.25)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    Learn About Our Services
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Sports Challenge Graphic Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] overflow-hidden border border-[#ECECEC] shadow-2xl relative group bg-[#0B0B0D]">
                <img loading="lazy"
                  src="/src/assets/images/wsg_sports_challenge_1785224385493.jpg"
                  alt="WSG Sports Equipment Challenge"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#D89B18] text-white">
                    SUSTAINABLE GROWTH
                  </span>
                  <h3 className="font-serif text-2xl font-bold">Bridging Talent & Global Audiences</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP / TEAM OVERVIEW */}
      <section className="py-28 bg-[#0B0B0D] text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 justify-center">
              <span className="w-8 h-[2px] bg-[#D89B18]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                LEADERSHIP & CONSORTIUM
              </span>
              <span className="w-8 h-[2px] bg-[#D89B18]" />
            </div>

            {/* Exact Title */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Meet the People Behind WSG
            </h2>

            {/* Exact Body */}
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              A consortium of sports professionals and industry experts drives WSG. Our team brings decades of experience in event management, league operations, media, marketing, and athlete development.
            </p>
          </div>

          {/* Interactive Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((mem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group p-8 rounded-[24px] bg-[#141414] border border-white/10 hover:border-[#D89B18] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0B0D] border border-white/10 group-hover:border-[#D89B18] text-[#F2B632] flex items-center justify-center mb-6">
                    <Users className="w-7 h-7" />
                  </div>

                  <div className="text-xs font-extrabold uppercase tracking-widest text-[#D89B18] mb-1 font-sans">
                    {mem.role}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-[#F2B632] transition-colors">
                    {mem.name}
                  </h3>

                  <div className="text-xs text-gray-400 mb-4 font-sans font-medium flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#D89B18]" />
                    <span>{mem.location}</span>
                  </div>

                  <p className="text-sm text-gray-300 font-sans font-light leading-relaxed border-t border-white/10 pt-4">
                    {mem.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-bold text-[#F2B632]">WSG Executive Office</span>
                  <div className="flex gap-2 text-gray-400 hover:text-white">
                    <Linkedin className="w-4 h-4 cursor-pointer hover:text-[#D89B18]" />
                    <Mail className="w-4 h-4 cursor-pointer hover:text-[#D89B18]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION / CONTACT PROMPT */}
      <section className="py-28 bg-[#ffffff] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          
          <div className="max-w-3xl mx-auto space-y-6 p-10 sm:p-14 rounded-[32px] bg-[#0B0B0D] text-white border border-[#D89B18]/30 shadow-2xl relative">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans block">
              JOIN THE CONGLOMERATE
            </span>

            {/* Exact Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
              Be Part of Our Journey
            </h2>

            {/* Exact Sub-text */}
            <p className="text-gray-300 font-sans text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Whether you’re an athlete, brand, or federation, we welcome collaboration.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={onOpenPartnerModal}
                className="group relative inline-flex items-center justify-center h-[52px] px-9 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
