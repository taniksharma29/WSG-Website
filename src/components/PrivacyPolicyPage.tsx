import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Printer,
  ChevronRight,
  ArrowUp,
  Globe,
  Database,
  UserCheck,
  AlertCircle,
  Clock
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy', targetSection?: string) => void;
  onOpenPartnerModal?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigate,
  onOpenPartnerModal,
}) => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const handlePrint = () => {
    window.print();
  };

  const sections = [
    { id: 'intro', title: '1. Introduction & Scope' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Your Information' },
    { id: 'sharing', title: '4. Data Sharing & Disclosures' },
    { id: 'security', title: '5. Security & Data Retention' },
    { id: 'rights', title: '6. Your Rights & Choices' },
    { id: 'cookies', title: '7. Cookies & Tracking' },
    { id: 'third-party', title: '8. Third-Party Links & Platforms' },
    { id: 'children', title: "9. Children's Privacy" },
    { id: 'changes', title: '10. Updates to This Policy' },
    { id: 'contact', title: '11. Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white font-sans pt-24 pb-20 selection:bg-[#D89B18] selection:text-black">
      
      {/* Top Banner Hero Header */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-b from-[#141418] via-[#0B0B0D] to-[#0B0B0D] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#D89B18]/15 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D89B18]/10 border border-[#D89B18]/30 text-[#F2B632] text-xs font-mono uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-[#F2B632]" />
                <span>Legal Governance & Compliance</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Privacy Policy
              </h1>

              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
                World Sports Group (WSG), founder and owner of Asian Legends League, is committed to safeguarding your personal information, respecting your privacy rights, and ensuring regulatory compliance across our global sporting operations.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D89B18]" />
                  Last Updated: <strong>July 2026</strong>
                </span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#D89B18]" />
                  Applicable Jurisdiction: UAE, India, UK, Australia, USA
                </span>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap lg:flex-col gap-3 self-start lg:self-center"
            >
              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer backdrop-blur-md"
              >
                <Printer className="w-4 h-4 text-[#F2B632]" />
                <span>Print Document</span>
              </button>

              <a
                href="mailto:gworldsports@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D89B18] hover:bg-[#F2B632] text-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#D89B18]/20"
              >
                <Mail className="w-4 h-4" />
                <span>Email Privacy Officer</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content & Table of Contents Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-6 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <FileText className="w-5 h-5 text-[#F2B632]" />
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-sans">
                  Document Index
                </h3>
              </div>

              <nav className="space-y-1 font-sans text-sm">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all flex items-center justify-between text-xs sm:text-sm ${
                      activeSection === sec.id
                        ? 'bg-[#D89B18] text-black font-bold shadow-md'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 ${activeSection === sec.id ? 'text-black' : 'text-gray-500'}`} />
                  </button>
                ))}
              </nav>

              {/* Quick Contact Box */}
              <div className="p-4 rounded-xl bg-[#0B0B0D] border border-white/10 space-y-3">
                <div className="text-xs font-bold text-[#F2B632] uppercase tracking-wider">
                  Data Protection Desk
                </div>
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D89B18]" />
                    <a href="mailto:gworldsports@gmail.com" className="hover:underline text-white font-mono">
                      gworldsports@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D89B18]" />
                    <a href="tel:+971562486875" className="hover:underline text-white font-mono">
                      +971 562486875
                    </a>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D89B18] mt-0.5 flex-shrink-0" />
                    <span>Sharjah Media City, Sharjah, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Policy Text Content */}
          <main className="lg:col-span-8 space-y-12">

            {/* 1. Introduction & Scope */}
            <section id="intro" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  1
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  1. Introduction & Scope
                </h2>
              </div>
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed font-light space-y-3 pt-2">
                <p>
                  Welcome to World Sports Group (referred to herein as <strong>"WSG"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>). World Sports Group is the primary founder, owner, and operator of marquee international sporting properties including the <strong>Asian Legends League</strong> (accessible via <code>allt20.asia</code> and official WSG digital applications).
                </p>
                <p>
                  This Privacy Policy outlines how we collect, process, store, disclose, and protect personal information collected from fans, ticket holders, league franchise partners, broadcast affiliates, athletes, website visitors, and corporate stakeholders across our operating territories including the <strong>United Arab Emirates, India, United Kingdom, Australia, and United States of America</strong>.
                </p>
                <p>
                  By accessing or using our websites, purchasing match tickets, subscribing to official league updates, or communicating with our executive team, you consent to the data practices described in this policy.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="collection" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  2
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  2. Information We Collect
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base font-light">
                <p>
                  We collect information in three ways: information you provide directly, technical data collected automatically when you visit our platforms, and information obtained from verified third-party partners.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-[#0B0B0D] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#F2B632] font-bold text-sm">
                      <UserCheck className="w-4 h-4" />
                      <span>Direct Information Provided</span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4 font-light">
                      <li>Full Name, Title, and Corporate Affiliation</li>
                      <li>Email Address & Phone Number</li>
                      <li>Billing Address, Passport Details (for credentialing)</li>
                      <li>Franchise / Partner Application submissions</li>
                      <li>Newsletter and Broadcast Alert preferences</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-[#0B0B0D] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#F2B632] font-bold text-sm">
                      <Database className="w-4 h-4" />
                      <span>Automated Technical Data</span>
                    </div>
                    <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4 font-light">
                      <li>IP Address, Browser Type & Version</li>
                      <li>Device OS, Screen Resolution & Language</li>
                      <li>Referral URLs & On-site Navigation clickstreams</li>
                      <li>Session Timestamps and Page Interaction depth</li>
                      <li>Cookies, Pixel tags, and Local Cache records</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="usage" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  3
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  3. How We Use Your Information
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  World Sports Group processes collected personal data strictly for legitimate business, operational, legal, and commercial purposes related to sports management:
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: 'Tournament Operations & Ticketing',
                      desc: 'Facilitating stadium admission, issuing digital match credentials, verifying franchise ownership, and managing player/official VIP access.',
                    },
                    {
                      title: 'Communications & Official Announcements',
                      desc: 'Sending match schedules, team rosters, broadcast television channel listings, press releases, and corporate news regarding Asian Legends League.',
                    },
                    {
                      title: 'Security, Anti-Corruption & Compliance',
                      desc: 'Enforcing the WSG Anti-Corruption Code, stadium security clearance, dispute resolution arbitration, and anti-fraud transaction validation.',
                    },
                    {
                      title: 'Sponsorship & Commercial Partnerships',
                      desc: 'Evaluating sponsorship proposals, licensing commercial broadcast rights, and customizing corporate VIP hospitality experiences.',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-[#0B0B0D] border border-white/5">
                      <CheckCircle className="w-5 h-5 text-[#D89B18] mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-white block font-semibold text-sm">{item.title}</strong>
                        <span className="text-xs text-gray-400">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Data Sharing & Disclosures */}
            <section id="sharing" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  4
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  4. Data Sharing & Disclosures
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  We do <strong>not sell, rent, or trade</strong> your personal information to third-party marketers. We share personal data only with trusted entities under strict confidentiality agreements:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-300 font-light">
                  <li>
                    <strong className="text-white font-semibold">Official Service Partners:</strong> Ticketing platforms, cloud hosting providers, payment gateways, and security management teams operating under non-disclosure obligations.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">League Franchises & Broadcasters:</strong> Team owners, tournament organizers, and broadcast networks (e.g., Sony Sports Network, FanCode) solely for credentialing and official event logistics.
                  </li>
                  <li>
                    <strong className="text-white font-semibold">Legal & Regulatory Bodies:</strong> Statutory government authorities, arbitration tribunals, or law enforcement agencies when mandated by law or necessary to enforce anti-corruption integrity.
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. Security & Data Retention */}
            <section id="security" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  5
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  5. Security & Data Retention
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  World Sports Group employs enterprise-grade technical and administrative security measures to protect your data against unauthorized access, loss, alteration, or destruction.
                </p>
                <div className="p-4 rounded-xl bg-[#0B0B0D] border border-white/10 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-[#F2B632] flex-shrink-0" />
                  <span className="text-xs text-gray-300">
                    All website transmissions are encrypted using 256-bit SSL/TLS protocol. Physical and digital access controls are strictly limited to authorized WSG personnel.
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Data is retained only as long as necessary to fulfill operational sports objectives or legal compliance periods in the UAE and international jurisdictions.
                </p>
              </div>
            </section>

            {/* 6. Your Rights & Choices */}
            <section id="rights" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  6
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  6. Your Rights & Choices
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  Depending on your jurisdiction (including GDPR, UAE Data Protection Laws, and regional privacy frameworks), you possess specific rights regarding your personal records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-white/5 space-y-1">
                    <strong className="text-[#F2B632] block font-semibold">Right to Access</strong>
                    <span className="text-gray-400">Request a complete copy of the personal information stored in our databases.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-white/5 space-y-1">
                    <strong className="text-[#F2B632] block font-semibold">Right to Rectification</strong>
                    <span className="text-gray-400">Request immediate correction of inaccurate or outdated contact information.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-white/5 space-y-1">
                    <strong className="text-[#F2B632] block font-semibold">Right to Erasure</strong>
                    <span className="text-gray-400">Request deletion of your personal records, subject to regulatory retention mandates.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0B0D] border border-white/5 space-y-1">
                    <strong className="text-[#F2B632] block font-semibold">Opt-Out of Marketing</strong>
                    <span className="text-gray-400">Unsubscribe from promotional emails at any time via footer link or direct email request.</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 pt-2">
                  To exercise any of these rights, email our Data Officer at <a href="mailto:gworldsports@gmail.com" className="text-[#F2B632] underline font-mono">gworldsports@gmail.com</a>.
                </p>
              </div>
            </section>

            {/* 7. Cookies & Tracking */}
            <section id="cookies" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  7
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  7. Cookies & Tracking Technologies
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  We use cookies and similar tracking tools to optimize page loading times, analyze fan traffic patterns, and remember user site preferences.
                </p>
                <p className="text-xs text-gray-400">
                  You can configure your browser settings to reject non-essential cookies. Note that disabling cookies may affect certain interactive features on our websites.
                </p>
              </div>
            </section>

            {/* 8. Third-Party Links */}
            <section id="third-party" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  8
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  8. Third-Party Links & Platforms
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  Our websites contain links to third-party platforms including official sponsors, ticketing vendors, and social media networks (X / Twitter: <code>@WorldSportsg</code>, Instagram: <code>@worldsportsgroup</code>). World Sports Group is not responsible for the privacy practices of external sites.
                </p>
              </div>
            </section>

            {/* 9. Children's Privacy */}
            <section id="children" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  9
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  9. Children's Privacy
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  Our digital platforms are intended for a general audience and are not directed at children under 13 years of age. We do not knowingly collect personal data from minors. If you believe a child has submitted personal information, please contact us immediately for deletion.
                </p>
              </div>
            </section>

            {/* 10. Updates to This Policy */}
            <section id="changes" className="scroll-mt-28 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18]/15 border border-[#D89B18]/30 flex items-center justify-center text-[#F2B632] font-bold">
                  10
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  10. Updates to This Policy
                </h2>
              </div>

              <div className="text-gray-300 text-sm sm:text-base font-light space-y-3">
                <p>
                  World Sports Group reserves the right to amend or update this Privacy Policy periodically to reflect changes in regulatory standards or operational practices. Revised terms will be published on this page with an updated date stamp.
                </p>
              </div>
            </section>

            {/* 11. Contact Us */}
            <section id="contact" className="scroll-mt-28 bg-gradient-to-br from-[#141418] via-[#1A1A22] to-[#0B0B0D] border border-[#D89B18]/30 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D89B18] text-black font-bold flex items-center justify-center">
                  11
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  11. Contact Our Privacy Team
                </h2>
              </div>

              <p className="text-gray-300 text-sm sm:text-base font-light">
                For questions, data access requests, or privacy compliance concerns, contact World Sports Group headquarters:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <a
                  href="mailto:gworldsports@gmail.com"
                  className="p-5 rounded-xl bg-[#0B0B0D] border border-white/10 hover:border-[#D89B18] transition-all space-y-2 group"
                >
                  <Mail className="w-5 h-5 text-[#D89B18] group-hover:scale-110 transition-transform" />
                  <div className="text-xs text-gray-400">Direct Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#F2B632] font-mono truncate">
                    gworldsports@gmail.com
                  </div>
                </a>

                <a
                  href="tel:+971562486875"
                  className="p-5 rounded-xl bg-[#0B0B0D] border border-white/10 hover:border-[#D89B18] transition-all space-y-2 group"
                >
                  <Phone className="w-5 h-5 text-[#D89B18] group-hover:scale-110 transition-transform" />
                  <div className="text-xs text-gray-400">Direct Helpline</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#F2B632] font-mono">
                    +971 562486875
                  </div>
                </a>

                <div className="p-5 rounded-xl bg-[#0B0B0D] border border-white/10 space-y-2">
                  <MapPin className="w-5 h-5 text-[#D89B18]" />
                  <div className="text-xs text-gray-400">Headquarters Address</div>
                  <div className="text-sm font-bold text-white">
                    Sharjah Media City, Sharjah, UAE
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                <span>By using World Sports Group platforms or allt20.asia, you accept this Privacy Policy.</span>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-1.5 text-[#F2B632] font-bold hover:underline"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};
