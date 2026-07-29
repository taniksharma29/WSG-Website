import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Award,
  Briefcase,
  Sparkles,
  ArrowRight,
  X,
  Send,
  Linkedin,
  Mail,
  CheckCircle2,
  Trophy,
  Globe2,
  Building2,
  ShieldCheck,
  Star,
  ChevronDown
} from 'lucide-react';

interface TeamPageProps {
  onOpenPartnerModal: () => void;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  expertise: string;
  funFact: string;
  image: string;
  linkedin: string;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onOpenPartnerModal }) => {
  const [selectedMemberModal, setSelectedMemberModal] = useState<TeamMember | null>(null);
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [careerForm, setCareerForm] = useState({
    name: '',
    email: '',
    field: 'Operations',
    resumeNote: '',
  });
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  // Leadership Team Members
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Global sports strategist with 20+ years in event management and league operations.',
      expertise: 'Strategic IP Growth, Sports Governance & Dealmaking',
      funFact: 'Helped launch 3 continental T20 franchise leagues across Asia & Middle East.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 2,
      name: 'Ayesha Khan',
      role: 'Director of Athlete Development',
      bio: 'Oversees talent programs, athlete support, and performance planning.',
      expertise: 'High-Performance Pathways, Sports Psychology & Mentorship',
      funFact: 'Former national multi-sport athlete who pioneered youth grassroots scouting.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 3,
      name: 'Mohammed Al-Farsi',
      role: 'Head of Event Operations',
      bio: 'Responsible for seamless execution of all leagues and tournaments.',
      expertise: 'Stadium Logistics, Multi-Camera Broadcast & Security',
      funFact: 'Managed venue operations for over 100+ international stadium fixtures.',
      image: '/src/assets/images/wsg_dubai_arena_1785224318037.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 4,
      name: 'Sofia Patel',
      role: 'Marketing & Sponsorship Lead',
      bio: 'Leads brand partnerships, media, and fan engagement initiatives.',
      expertise: 'Global Rights Commercialization, Digital Fan Experience',
      funFact: 'Closed multi-million dollar broadcast sponsorship deals across 120 territories.',
      image: '/src/assets/images/wsg_asian_league_1785224345066.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 5,
      name: 'David Vance',
      role: 'Chief Legal & Compliance Officer',
      bio: 'Expert in sports law, anti-corruption policies, and multi-jurisdictional IP contracts.',
      expertise: 'Sports Arbitration, Contractual Governance, Regulatory Compliance',
      funFact: 'Drafted tournament rules for premier international cricket and motorsport series.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 6,
      name: 'Elena Rostova',
      role: 'Head of Broadcast & Live Media',
      bio: 'Directs satellite transmission, virtual advertising, and OTT stream delivery.',
      expertise: 'Ultra-HD Production, Remote Graphics, Global Media Distribution',
      funFact: 'Pioneered 360-degree interactive camera angles for live stadium broadcasts.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      linkedin: 'https://linkedin.com',
    },
  ];

  const visibleMembers = showAllMembers ? teamMembers : teamMembers.slice(0, 4);

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (careerForm.name && careerForm.email) {
      setCareerSubmitted(true);
    }
  };

  const handleScrollToTeam = () => {
    const el = document.getElementById('team-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#ffffff] text-[#1A1A1A] font-sans">
      
      {/* 1. Page Hero / Banner */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden pt-28 pb-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
            alt="World Sports Group Executive Leadership"
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
              <Users className="w-4 h-4 text-[#F2B632]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                WORLD SPORTS GROUP • EXECUTIVE LEADERSHIP
              </span>
            </motion.div>

            {/* Exact Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
            >
              Meet the People <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(216,155,24,0.3)]">
                Behind WSG
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed border-l-2 border-[#D89B18] pl-5"
            >
              Experienced professionals shaping global sports leagues, events, and talent programs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <button
                onClick={() => setCareerModalOpen(true)}
                className="group relative inline-flex items-center justify-center h-[56px] px-9 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Join Our Network
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>

              <button
                onClick={handleScrollToTeam}
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                View Leadership Team
              </button>
            </motion.div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <button
            onClick={handleScrollToTeam}
            className="flex flex-col items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#D89B18] transition-colors cursor-pointer"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#D89B18]" />
          </button>
        </div>
      </section>

      {/* 2. Introduction Section + Stat Counters */}
      <section className="py-24 bg-[#FAFAFC] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
                WORLD-CLASS TEAMWORK
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
                Driving Excellence <br />
                <span className="text-gold-gradient">in Sports</span>
              </h2>

              <div className="space-y-4 text-gray-600 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  World Sports Group is powered by a team of sports management experts, event professionals, and industry leaders.
                </p>
                <p>
                  With decades of combined experience in league operations, athlete management, legal compliance, marketing, and production, our team ensures every project achieves world-class standards.
                </p>
              </div>
            </div>

            {/* Scroll-Triggered / Microanimated Stat Counters */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all flex items-center justify-between group">
                <div>
                  <div className="font-serif text-4xl sm:text-5xl font-black text-[#1A1A1A] group-hover:text-[#D89B18] transition-colors">
                    50+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                    Years of Combined Experience
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F2B632]/10 text-[#D89B18] flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
              </div>

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
                  <Trophy className="w-6 h-6" />
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
                  <Users className="w-6 h-6" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Leadership / Key Team Members */}
      <section id="team-grid" className="py-28 bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]">
              Key Team Members
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg">
              Hover over member cards to reveal expertise areas and unique sports insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleMembers.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-3xl bg-[#0B0B0D] text-white border border-white/10 hover:border-[#D89B18] shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMemberModal(member)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img loading="lazy"
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-108 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/15 text-white group-hover:text-[#F2B632] group-hover:border-[#D89B18] flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-3">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#F2B632]">
                    {member.role}
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#F2B632] transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs text-gray-300 font-sans font-light leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Hover Micro-Interaction: Fun Fact / Expertise */}
                  <div className="pt-2 border-t border-white/10 text-[11px] text-[#D89B18] font-mono flex items-center justify-between">
                    <span>Expertise: {member.expertise.split(',')[0]}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 pt-0">
                  <div className="w-full h-10 rounded-xl text-[11px] font-bold uppercase tracking-wider text-white bg-white/10 group-hover:bg-[#D89B18] transition-colors flex items-center justify-center gap-2">
                    <span>View Bio & Insight</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Team Members CTA Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAllMembers(!showAllMembers)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#D89B18] text-[#1A1A1A] hover:bg-[#D89B18] hover:text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
            >
              <span>{showAllMembers ? 'Show Key Leadership' : 'View All Team Members'}</span>
              <Users className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. Join the Team / Careers Section */}
      <section className="py-24 bg-[#FAFAFC] border-t border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl bg-[#0B0B0D] text-white border border-[#D89B18]/30 shadow-2xl text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D89B18]/15 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D89B18]/40 text-[#F2B632] text-xs font-bold uppercase tracking-widest">
              <Briefcase className="w-3.5 h-3.5" />
              CAREERS AT WORLD SPORTS GROUP
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Be Part of WSG
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              WSG is always looking for passionate professionals to join our mission. Whether your expertise is in operations, marketing, athlete support, or production, we welcome innovative thinkers ready to shape global sports experiences.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setCareerModalOpen(true)}
                className="group inline-flex items-center gap-2.5 h-13 px-8 rounded-xl bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_8px_30px_rgba(216,155,24,0.5)] transition-all cursor-pointer"
              >
                <span>View Careers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="py-28 bg-[#0B0B0D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.18),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8 p-10 sm:p-14 rounded-3xl bg-[#141414] border border-[#D89B18]/30 shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632]">
              DIRECT EXECUTIVE CONTACT
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Connect With <br />
              <span className="text-gold-gradient">Our Team</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed">
              For partnerships, collaboration, or inquiries, our experts are ready to help.
            </p>

            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center gap-2.5 h-14 px-10 rounded-xl bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] text-white text-xs font-bold uppercase tracking-wider shadow-xl hover:shadow-[0_10px_35px_rgba(216,155,24,0.5)] transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Member Bio Modal */}
      <AnimatePresence>
        {selectedMemberModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMemberModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0B0B0D] border border-[#D89B18]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden"
            >
              <button
                onClick={() => setSelectedMemberModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <img loading="lazy"
                    src={selectedMemberModal.image}
                    alt={selectedMemberModal.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-[#D89B18]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {selectedMemberModal.name}
                    </h3>
                    <p className="text-xs text-[#F2B632] font-bold uppercase tracking-wider">
                      {selectedMemberModal.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {selectedMemberModal.bio}
                </p>

                <div className="p-4 rounded-xl bg-[#141414] border border-white/10 space-y-2">
                  <div className="text-xs font-bold uppercase text-[#F2B632]">
                    Core Specialization
                  </div>
                  <p className="text-xs text-gray-200 font-sans">
                    {selectedMemberModal.expertise}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-[#D89B18]/30 text-xs font-mono text-[#F2B632] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-[#D89B18]" />
                  <span>Fun Fact: {selectedMemberModal.funFact}</span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedMemberModal(null);
                      onOpenPartnerModal();
                    }}
                    className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] to-[#B87E0E] transition-all cursor-pointer"
                  >
                    Contact {selectedMemberModal.name.split(' ')[0]}'s Office
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Careers Application Modal */}
      <AnimatePresence>
        {careerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setCareerModalOpen(false);
                setCareerSubmitted(false);
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0B0B0D] border border-[#D89B18]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden"
            >
              <button
                onClick={() => {
                  setCareerModalOpen(false);
                  setCareerSubmitted(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!careerSubmitted ? (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F2B632]">
                      JOIN WORLD SPORTS GROUP
                    </span>
                    <h3 className="font-serif text-3xl font-extrabold text-white mt-1">
                      Careers & Talent Network
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-2 font-light">
                      Submit your resume and details to join our global network of sports professionals.
                    </p>
                  </div>

                  <form onSubmit={handleCareerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={careerForm.name}
                        onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
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
                        value={careerForm.email}
                        onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                        placeholder="e.g. sarah@domain.com"
                        className="w-full h-11 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Area of Expertise
                      </label>
                      <select
                        value={careerForm.field}
                        onChange={(e) => setCareerForm({ ...careerForm, field: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl bg-[#141414] border border-white/15 text-white text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      >
                        <option value="Operations">League Operations & Logistics</option>
                        <option value="Marketing">Marketing & Sponsorships</option>
                        <option value="Athlete Support">Athlete & Talent Support</option>
                        <option value="Broadcast">Broadcast & Live Production</option>
                        <option value="Legal">Legal & Compliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                        Cover Note / LinkedIn Profile
                      </label>
                      <textarea
                        rows={3}
                        value={careerForm.resumeNote}
                        onChange={(e) => setCareerForm({ ...careerForm, resumeNote: e.target.value })}
                        placeholder="Paste your LinkedIn URL or brief experience highlights..."
                        className="w-full p-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#D89B18] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Application Received, {careerForm.name}!
                  </h3>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed font-light">
                    Our talent recruitment team will review your background in <span className="text-[#F2B632]">{careerForm.field}</span> and respond to <span className="text-[#F2B632]">{careerForm.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setCareerModalOpen(false);
                      setCareerSubmitted(false);
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
