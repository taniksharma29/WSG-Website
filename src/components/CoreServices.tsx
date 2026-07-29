import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Calendar, Sliders, ShieldCheck, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface CoreServicesProps {
  onSelectService?: (service: ServiceItem) => void;
  onNavigateToServices?: () => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'sporting-ip',
    title: 'Sporting IP & Leagues',
    description: 'We develop original leagues and sporting properties that attract fans, sponsors, and media globally.',
    icon: 'trophy',
    features: [
      'League Architecture & Governance',
      'Global Broadcasting & Streaming Rights',
      'Commercial Sponsorship Integration',
      'Fan Engagement & Digital Ecosystems',
    ],
  },
  {
    id: 'event-management',
    title: 'Event Management & Production',
    description: 'Planning, logistics, media, sponsorship integration — we handle every detail to deliver flawless events.',
    icon: 'calendar',
    features: [
      'Stadium Operations & Venue Logistics',
      '4K Broadcast Production & Graphics',
      'VIP Hospitality & Fan Experiences',
      'On-site Media & PR Coordination',
    ],
  },
  {
    id: 'athlete-support',
    title: 'Athlete & Talent Support',
    description: 'Performance planning, contracts, media and branding — we allow athletes to focus on the game.',
    icon: 'sliders',
    features: [
      'Contract Negotiation & Management',
      'Personal Brand Strategy & Endorsements',
      'Media Training & Public Relations',
      'Career Pathways & Post-Sport Planning',
    ],
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    description: 'Contracts, agreements, and regulatory compliance — ensuring every project runs smoothly and safely.',
    icon: 'shield',
    features: [
      'International Sports Governance',
      'Intellectual Property Protection',
      'Regulatory & Anti-Doping Compliance',
      'Cross-border Sponsorship Agreements',
    ],
  },
];

export const CoreServices: React.FC<CoreServicesProps> = ({ onNavigateToServices }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="w-8 h-8" />;
      case 'calendar':
        return <Calendar className="w-8 h-8" />;
      case 'sliders':
        return <Sliders className="w-8 h-8" />;
      case 'shield':
        return <ShieldCheck className="w-8 h-8" />;
      default:
        return <Trophy className="w-8 h-8" />;
    }
  };

  return (
    <section id="solutions" className="relative py-28 bg-[#0B0B0D] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D89B18]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F2B632]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 justify-center"
          >
            <span className="w-8 h-[2px] bg-[#D89B18]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
              WHO WE ARE
            </span>
            <span className="w-8 h-[2px] bg-[#D89B18]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
          >
            Our Core Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-sans text-base sm:text-lg max-w-2xl mx-auto font-light"
          >
            End-to-end expertise delivering high-impact sports properties, global media management, and strategic athlete advisory.
          </motion.p>
        </div>

        {/* 4 Cards Equal Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              onClick={() => setSelectedService(service)}
              className="group relative flex flex-col justify-between h-full p-8 rounded-[22px] bg-[#141414]/90 border border-white/10 hover:border-[#D89B18] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(216,155,24,0.2)] cursor-pointer overflow-hidden"
            >
              {/* Top Gold Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D89B18] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D89B18]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Large Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-[#0B0B0D] border border-white/10 group-hover:border-[#D89B18] text-[#F2B632] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                  {getIcon(service.icon)}
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-[#F2B632] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Action Arrow */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D89B18] group-hover:text-[#F2B632]">
                <span>Discover More</span>
                <div className="w-8 h-8 rounded-full bg-[#D89B18]/10 group-hover:bg-[#D89B18] text-[#D89B18] group-hover:text-white flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              if (onNavigateToServices) {
                onNavigateToServices();
              } else {
                setSelectedService(servicesData[0]);
              }
            }}
            className="group inline-flex items-center justify-center h-[52px] px-8 rounded-[14px] text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_20px_rgba(216,155,24,0.3)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              EXPLORE ALL SERVICES
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

      </div>

      {/* Detail Modal for Selected Service */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#141414] border border-[#D89B18]/40 rounded-3xl p-8 shadow-2xl z-10 text-white"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#D89B18]/20 border border-[#D89B18] text-[#F2B632] flex items-center justify-center">
                  {getIcon(selectedService.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D89B18]">WSG Core Capability</span>
                  <h3 className="font-serif text-2xl font-bold">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-gray-300 text-base mb-6 font-sans leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-3 mb-8 bg-[#0B0B0D] p-5 rounded-2xl border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Key Offerings & Scope:</h4>
                {selectedService.features?.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#F2B632] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
