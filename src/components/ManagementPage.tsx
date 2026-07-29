import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Briefcase,
  Users,
  ChevronDown,
  Scale,
  Building2,
  Globe2,
  CheckCircle2,
  Mail,
  X,
  Phone,
  Shield
} from 'lucide-react';
import wsgDubaiArena from '../assets/images/wsg_dubai_arena_1785224318037.jpg';

interface ManagementPageProps {
  onOpenPartnerModal: () => void;
}

interface Member {
  id: string;
  name: string;
  role: string;
  category: 'Executive Leadership' | 'Senior Management' | 'Specialized Operations';
  department: string;
  location: string;
  primaryImage: string;
  fallbackImage: string;
  bio: string;
  responsibilities: string[];
  badgeColor?: string;
}

// Custom Image Component with Automatic Fallback
const ImageWithFallback: React.FC<{
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}> = ({ src, fallbackSrc, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img loading="lazy"
      src={imgSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
};

export const ManagementPage: React.FC<ManagementPageProps> = ({ onOpenPartnerModal }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleScrollToRoster = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('management-roster');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Executive Leadership
  const executiveLeadership: Member[] = [
    {
      id: 'priya-chaudhary',
      name: 'Priya Chaudhary',
      role: 'General Manager',
      category: 'Executive Leadership',
      department: 'Asian Legends League Secretariat',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/board8.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      bio: 'Priya Chaudhary heads the Asian Legends League Secretariat as General Manager, directing multi-nation tournament scheduling, franchise compliance, and commercial operations across Asia and the Middle East.',
      responsibilities: [
        'Franchise Rights & License Management',
        'International Cricket Board Liaisons',
        'Commercial Sponsorship Integration',
        'Executive Secretariat Oversight'
      ]
    },
    {
      id: 'nirav-shukla',
      name: 'Nirav Shukla',
      role: 'Chief Coordinator',
      category: 'Executive Leadership',
      department: 'Tournament Operations & Event Logistics',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/nirav-shukla.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      bio: 'Nirav Shukla oversees operational coordination across all World Sports Group marquee properties, harmonizing broadcast production crews, stadium authorities, and hospitality partners.',
      responsibilities: [
        'Multi-Venue Event Operations',
        'Broadcast & Production Coordination',
        'Player Transport & Hospitality Logistics',
        'Stadium & Facility Partner Alignment'
      ]
    },
  ];

  // Senior Management
  const seniorManagement: Member[] = [
    {
      id: 'harpal-oshan',
      name: 'Harpal Oshan',
      role: 'Chief Executive Officer',
      category: 'Senior Management',
      department: 'Corporate Strategy & Governance',
      location: 'Dubai • London',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/board6.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80',
      bio: 'As CEO of World Sports Group, Harpal Oshan steers global corporate strategy, capital allocation, and new sports IP creation, expanding WSG presence in global sports markets.',
      responsibilities: [
        'Global Corporate Vision & M&A',
        'International Broadcast Rights',
        'Strategic Investor Partnerships',
        'C-Suite Executive Governance'
      ]
    },
    {
      id: 'ritu-anand',
      name: 'Ritu Anand',
      role: 'Chief Operating Officer',
      category: 'Senior Management',
      department: 'Global Operations & Execution',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/uploads/2026/05/Ritu_Anand-200x300.jpeg',
      fallbackImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
      bio: 'Ritu Anand manages operational workflows across all WSG subsidiaries, ensuring seamless stadium setup, broadcast logistics, and corporate operational standards.',
      responsibilities: [
        'End-to-End Event Execution',
        'Cross-Departmental Workflow Security',
        'Vendor & Supplier Management',
        'Corporate Risk & Compliance'
      ]
    },
    {
      id: 'pradeep-singh',
      name: 'Pradeep Singh',
      role: 'Chief Financial Officer',
      category: 'Senior Management',
      department: 'Finance & Capital Allocations',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/pradeep-singh.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
      bio: 'Pradeep Singh manages the financial architecture of World Sports Group, directing league budgets, prize pool escrow, franchise valuation models, and global financial audit.',
      responsibilities: [
        'League Financial Audits & Budgets',
        'Franchise Valuation Models',
        'Sponsorship Escrow & Revenue Distribution',
        'International Tax & Treasury Operations'
      ]
    },
  ];

  // Specialized Roles
  const specializedRoles: Member[] = [
    {
      id: 'anmol-rattan-sidhu',
      name: 'Dr. Anmol Rattan Sidhu',
      role: 'Arbitrator Officer',
      category: 'Specialized Operations',
      department: 'Dispute Resolution & Legal Arbitration',
      location: 'New Delhi • Dubai',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/board11.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
      bio: 'Dr. Anmol Rattan Sidhu serves as Lead Arbitrator, resolving contractual, franchise, and player disputes with legal clarity and international arbitration expertise.',
      responsibilities: [
        'Sports Contract Arbitration',
        'Franchise & Player Dispute Resolution',
        'Regulatory Compliance Advisory',
        'Independent Legal Tribunals'
      ]
    },
    {
      id: 'hps-ishar',
      name: 'Adv. HPS Ishar',
      role: 'Chief Legal Advisor',
      category: 'Specialized Operations',
      department: 'Legal Affairs & Intellectual Property',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/board12.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=500&q=80',
      bio: 'Adv. HPS Ishar counsels World Sports Group on broadcast rights licensing, trademark enforcement, international sports law, and corporate contractual frameworks.',
      responsibilities: [
        'Media & Broadcast Licensing Law',
        'Intellectual Property Protection',
        'Franchise Agreement Drafting',
        'Global Cross-Border Legal Filings'
      ]
    },
    {
      id: 'kabir-subedar',
      name: 'Capt. Kabir Subedar',
      role: 'Head, Anti-Corruption Unit',
      category: 'Specialized Operations',
      department: 'Integrity, Security & Match Oversight',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/board10.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=500&q=80',
      bio: 'Capt. Kabir Subedar leads the WSG Anti-Corruption Unit (ACU), guaranteeing uncompromised integrity, stadium security protocols, and ethical standards across all matches.',
      responsibilities: [
        'Anti-Corruption & Anti-Match Fixing Protocols',
        'Player Dressing Room Protocol Enforcement',
        'Stadium Access & Security Operations',
        'Intelligence & Integrity Monitoring'
      ]
    },
    {
      id: 'bhawna-jagwani',
      name: 'Bhawna Jagwani',
      role: 'Public Relationship Officer',
      category: 'Specialized Operations',
      department: 'Global Media Relations & PR',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/board16.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
      bio: 'Bhawna Jagwani shapes World Sports Group public voice, steering press conferences, crisis communications, and international media distribution.',
      responsibilities: [
        'Global Press & Media Strategy',
        'Tournament Announcement Campaigns',
        'Executive Spokesperson Management',
        'Crisis & Reputation Oversight'
      ]
    },
    {
      id: 'chantelle-thomas',
      name: 'Chantelle Thomas',
      role: 'Head of Social Media & Digital',
      category: 'Specialized Operations',
      department: 'Digital Strategy & Fan Engagement',
      location: 'Sharjah Media City, UAE',
      primaryImage: 'https://allt20.asia/wp-content/themes/allt20/src/assets/board13.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      bio: 'Chantelle Thomas drives digital growth across WSG digital touchpoints, delivering real-time tournament highlights, player behind-the-scenes content, and social campaigns.',
      responsibilities: [
        'Multi-Platform Digital Strategy',
        'Live Matchday Content Production',
        'Global Fan Community Engagement',
        'Digital Monetization & Growth'
      ]
    },
  ];

  return (
    <div className="bg-[#ffffff] text-[#1A1A1A] font-sans min-h-screen pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden pt-28 pb-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy"
            src={wsgDubaiArena}
            alt="World Sports Group Management Background"
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.15]"
            referrerPolicy="no-referrer"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/85 to-[#0B0B0D]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(216,155,24,0.22),transparent_65%)] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12 text-left">
          <div className="max-w-3xl space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/70 border border-[#D89B18]/50 backdrop-blur-md shadow-lg"
            >
              <Users className="w-4 h-4 text-[#F2B632]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                WORLD SPORTS GROUP • GOVERNANCE & LEADERSHIP
              </span>
            </motion.div>

            {/* Exact Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
            >
              Executive <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(216,155,24,0.35)]">
                Leadership
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed border-l-2 border-[#D89B18] pl-5"
            >
              The administrative directors, operational executives, legal arbiters, and integrity officers guiding World Sports Group & the Asian Legends League.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <a
                href="#management-roster"
                onClick={handleScrollToRoster}
                className="group relative inline-flex items-center justify-center h-[56px] px-9 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Explore Roster
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>

              <button
                onClick={onOpenPartnerModal}
                className="inline-flex items-center justify-center h-[56px] px-8 rounded-[14px] text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                Inquire With Board
              </button>
            </motion.div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <a
            href="#management-roster"
            onClick={handleScrollToRoster}
            className="flex flex-col items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#D89B18] transition-colors"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#D89B18]" />
          </a>
        </div>
      </section>

      {/* Main Content Area */}
      <div id="management-roster" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-20">

        {/* Quick Anchor Navigation */}
        <div className="bg-[#0B0B0D] p-3 sm:p-4 rounded-2xl border border-[#D89B18]/30 shadow-xl flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-300">
          <a
            href="#exec-leadership"
            className="px-5 py-2.5 rounded-xl bg-[#D89B18]/15 text-[#F2B632] border border-[#D89B18]/40 hover:bg-[#D89B18] hover:text-white transition-all flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-[#F2B632]" />
            <span>Executive Leadership</span>
          </a>
          <a
            href="#senior-mgmt"
            className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:bg-[#D89B18]/20 hover:text-[#F2B632] hover:border-[#D89B18]/40 transition-all flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4 text-[#D89B18]" />
            <span>Senior Management</span>
          </a>
          <a
            href="#specialized-ops"
            className="px-5 py-2.5 rounded-xl bg-white/5 text-gray-300 border border-white/10 hover:bg-[#D89B18]/20 hover:text-[#F2B632] hover:border-[#D89B18]/40 transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#D89B18]" />
            <span>Specialized Operations & Advisory</span>
          </a>
        </div>

        {/* ==========================================
            1. EXECUTIVE LEADERSHIP (HERO FEATURE CARDS)
           ========================================== */}
        <section id="exec-leadership" className="space-y-10 scroll-mt-28">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D89B18]/10 text-[#D89B18] text-xs font-black uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                SECRETARIAT & COMMERCIAL GOVERNANCE
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0D] tracking-tight">
                Executive Leadership
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl font-light">
              Directing global league management, international cricket board compliance, and commercial franchise operations.
            </p>
          </div>

          {/* 2 Featured Premium Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {executiveLeadership.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMember(member)}
                className="group relative bg-[#0B0B0D] text-white rounded-[28px] border border-[#D89B18]/40 p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_rgba(216,155,24,0.25)] transition-all cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Background Glow Effect */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#D89B18]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D89B18]/25 transition-colors" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D89B18] to-transparent" />

                <div className="space-y-6 relative z-10">
                  
                  {/* Top Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D89B18]/20 border border-[#D89B18]/40 text-[#F2B632] text-[11px] font-black uppercase tracking-widest">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {member.department}
                    </span>
                    <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#D89B18]" />
                      {member.location}
                    </span>
                  </div>

                  {/* Profile Layout */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
                    {/* Portrait Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#D89B18] shadow-[0_10px_30px_rgba(216,155,24,0.3)] bg-[#1A1A1E] group-hover:scale-105 transition-transform duration-500">
                        <ImageWithFallback
                          src={member.primaryImage}
                          fallbackSrc={member.fallbackImage}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#D89B18] to-[#B87E0E] text-white text-[10px] font-black uppercase tracking-wider shadow-md whitespace-nowrap">
                        VERIFIED LEAD
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2 text-center sm:text-left flex-1">
                      <div className="text-xs font-bold uppercase tracking-widest text-[#F2B632]">
                        {member.role}
                      </div>
                      <h3 className="font-serif text-3xl font-extrabold text-white group-hover:text-[#F2B632] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-3 pt-1">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Key Operational Badges */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Key Mandates:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.responsibilities.slice(0, 2).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F2B632] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#F2B632] group-hover:text-white transition-colors relative z-10">
                  <span>View Complete Executive Profile</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 text-[#D89B18]" />
                </div>
              </motion.div>
            ))}
          </div>

        </section>


        {/* ==========================================
            2. SENIOR MANAGEMENT (C-SUITE DIRECTORS)
           ========================================== */}
        <section id="senior-mgmt" className="space-y-10 scroll-mt-28">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D89B18]/10 text-[#D89B18] text-xs font-black uppercase tracking-widest">
                <Briefcase className="w-3.5 h-3.5" />
                C-SUITE CORPORATE OFFICERS
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0D] tracking-tight">
                Senior Management
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl font-light">
              Executive officers driving World Sports Group global vision, capital allocation, and operational execution.
            </p>
          </div>

          {/* 3 Executive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {seniorManagement.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMember(member)}
                className="group p-6 sm:p-7 rounded-[24px] bg-white border border-gray-200 hover:border-[#D89B18] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(216,155,24,0.18)] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-5">
                  
                  {/* Top Badge & Location */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#D89B18]/10 text-[#D89B18] text-[11px] font-black uppercase tracking-wider">
                      {member.role}
                    </span>
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                      <Globe2 className="w-3.5 h-3.5 text-[#D89B18]" />
                      {member.location}
                    </span>
                  </div>

                  {/* Avatar & Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gray-200 group-hover:border-[#D89B18] shadow-sm shrink-0 bg-gray-100 group-hover:scale-105 transition-all">
                      <ImageWithFallback
                        src={member.primaryImage}
                        fallbackSrc={member.fallbackImage}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#0B0B0D] group-hover:text-[#D89B18] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-semibold mt-0.5">
                        {member.department}
                      </p>
                    </div>
                  </div>

                  {/* Bio snippet */}
                  <p className="text-xs text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-3">
                    {member.bio}
                  </p>

                  {/* Operational Tags */}
                  <div className="space-y-1.5 pt-2">
                    {member.responsibilities.slice(0, 2).map((resp, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D89B18]" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#D89B18] group-hover:text-[#0B0B0D] transition-colors">
                  <span>Executive Credentials</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </motion.div>
            ))}
          </div>

        </section>


        {/* ==========================================
            3. SPECIALIZED OPERATIONS & ADVISORY
           ========================================== */}
        <section id="specialized-ops" className="space-y-10 scroll-mt-28">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-6 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D89B18]/10 text-[#D89B18] text-xs font-black uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5" />
                LEGAL, ARBITRATION, INTEGRITY & MEDIA
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0B0D] tracking-tight">
                Specialized Operations & Advisory
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl font-light">
              Distinguished legal arbiters, integrity command officers, public relations heads, and social communications directors.
            </p>
          </div>

          {/* 5 Specialized Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {specializedRoles.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedMember(member)}
                className="group p-6 rounded-[22px] bg-[#FFFDF8] border border-[#D89B18]/30 hover:border-[#D89B18] shadow-sm hover:shadow-[0_15px_35px_rgba(216,155,24,0.15)] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar Icon Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#D89B18]/15 text-[#D89B18] flex items-center justify-center font-bold">
                      {member.role.includes('Arbitrator') || member.role.includes('Legal') ? (
                        <Scale className="w-5 h-5" />
                      ) : member.role.includes('Anti-Corruption') ? (
                        <Shield className="w-5 h-5" />
                      ) : (
                        <Globe2 className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D89B18] bg-white px-2.5 py-1 rounded-md border border-[#D89B18]/20 shadow-2xs">
                      {member.role}
                    </span>
                  </div>

                  {/* Profile Info */}
                  <div className="flex items-center gap-4 pt-1">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#D89B18]/40 shadow-sm shrink-0 bg-gray-100 group-hover:scale-105 transition-transform">
                      <ImageWithFallback
                        src={member.primaryImage}
                        fallbackSrc={member.fallbackImage}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0B0B0D] group-hover:text-[#D89B18] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-gray-500 font-semibold leading-tight mt-0.5">
                        {member.department}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-3 line-clamp-3">
                    {member.bio}
                  </p>

                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#D89B18] group-hover:text-[#0B0B0D] transition-colors">
                  <span>Specialist Advisory Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>

        </section>


        {/* ==========================================
            4. EXECUTIVE BOARD CTA
           ========================================== */}
        <section className="relative py-16 sm:py-20 bg-[#0B0B0D] text-white rounded-[32px] border border-[#D89B18]/40 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.22),transparent_70%)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D89B18] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D89B18]/40 to-transparent" />

          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#D89B18]/40 text-[#F2B632] text-xs font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-[#F2B632]" />
              EXECUTIVE BOARD INQUIRIES & PARTNERSHIPS
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Connect Direct With <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(216,155,24,0.3)]">WSG Management</span>
            </h2>

            {/* Subheading */}
            <p className="text-gray-300 font-sans text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              For league governance, franchise acquisition, commercial rights, or official arbitrations, connect directly with our global executive desk in Sharjah Media City, UAE.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenPartnerModal}
                className="group relative inline-flex items-center justify-center h-[56px] px-10 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_40px_rgba(216,155,24,0.6)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Partner With Management
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>

              <a
                href="mailto:gworldsports@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 h-[56px] px-8 rounded-[14px] text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#F2B632]" />
                <span>Email Executive Desk</span>
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* ==========================================
          MEMBER DETAIL MODAL
         ========================================== */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0B0B0D] text-white rounded-[28px] border border-[#D89B18]/50 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 overflow-hidden"
            >
              {/* Gold Top Light Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D89B18] to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#D89B18] shadow-lg shrink-0 bg-[#1A1A1E]">
                    <ImageWithFallback
                      src={selectedMember.primaryImage}
                      fallbackSrc={selectedMember.fallbackImage}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-block px-3 py-0.5 rounded-full bg-[#D89B18]/20 border border-[#D89B18]/40 text-[#F2B632] text-[11px] font-black uppercase tracking-wider">
                      {selectedMember.category}
                    </div>
                    <h3 className="font-serif text-3xl font-extrabold text-white">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm text-[#F2B632] font-bold">
                      {selectedMember.role} • <span className="text-gray-400 font-normal">{selectedMember.department}</span>
                    </p>
                    <p className="text-xs text-gray-400 flex items-center justify-center sm:justify-start gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#D89B18]" />
                      <span>{selectedMember.location}</span>
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2B632]">
                    Executive Biography & Portfolio
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2B632]">
                    Primary Operational Focus & Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedMember.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F2B632] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedMember(null);
                      onOpenPartnerModal();
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] to-[#B87E0E] hover:shadow-lg transition-all cursor-pointer"
                  >
                    Send Inquiries to Executive
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
