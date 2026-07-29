import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, MapPin, Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  {
    name: 'Senior Executive Board',
    role: 'Global Sports Governance & Capital',
    location: 'Sharjah Media City, UAE',
    bio: 'Overseeing global expansion, commercial rights acquisition, and strategic league investments across UAE, India, UK, Australia, and USA.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tournament & Event Operations',
    role: 'League Operations & Broadcast Production',
    location: 'UAE • India • UK',
    bio: 'Directing stadium logistics, 4K multi-camera broadcast production, and venue security for international multi-team competitions.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Commercial & Player Partnerships',
    role: 'Global Sponsorships & Athlete Pathways',
    location: 'UAE • Australia • USA',
    bio: 'Connecting multinational brands with premier sports IP, negotiating high-value athlete endorsements, and guiding youth development.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
  },
];

export const ManagementSection: React.FC = () => {
  return (
    <section id="management" className="relative py-28 bg-[#ffffff] text-[#1A1A1A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 justify-center"
          >
            <span className="w-8 h-[2px] bg-[#D89B18]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18] font-sans">
              MANAGEMENT & GOVERNANCE
            </span>
            <span className="w-8 h-[2px] bg-[#D89B18]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0B0D] tracking-tight"
          >
            Executive Leadership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B6B6B] font-sans text-base sm:text-lg max-w-2xl mx-auto font-light"
          >
            A veteran leadership team with decades of combined experience in sports governance, broadcast rights, and elite tournament management.
          </motion.p>
        </div>

        {/* 3 Executive Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 rounded-[24px] bg-[#ffffff] border border-[#ECECEC] hover:border-[#D89B18] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(216,155,24,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#D89B18]/10 text-[#D89B18] flex items-center justify-center mb-6 group-hover:bg-[#D89B18] group-hover:text-white transition-colors duration-300">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div className="text-xs font-extrabold uppercase tracking-widest text-[#D89B18] mb-1 font-sans">
                  {member.role}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#0B0B0D] mb-2 group-hover:text-[#D89B18] transition-colors">
                  {member.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] mb-4 font-sans font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D89B18]" />
                  <span>{member.location}</span>
                </div>

                <p className="text-sm text-[#6B6B6B] leading-relaxed font-sans font-normal border-t border-[#ECECEC] pt-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#ECECEC] flex items-center justify-between text-xs text-[#6B6B6B]">
                <span className="font-semibold text-[#0B0B0D]">World Sports Group Advisory</span>
                <span className="text-[#D89B18] font-bold">Sharjah Media City, UAE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
