import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Trophy, Sparkles, MapPin, Radio, Users, X, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';
import wsgAsianLeague from '../assets/images/wsg_asian_league_1785224345066.jpg';
import wsgDevLeague from '../assets/images/wsg_dev_league_1785224364717.jpg';
import wsgSportsChallenge from '../assets/images/wsg_sports_challenge_1785224385493.jpg';

export const projectsData: ProjectItem[] = [
  {
    id: 'all-t20-league',
    title: 'ALL T20 League',
    subtitle: 'Asian Legends League T20',
    description: 'The premier T20 cricket league designed for fans worldwide, featuring top players and international broadcast.',
    category: 'LEAGUE',
    image: wsgAsianLeague,
    location: 'Dubai & Sharjah Stadiums',
    stats: [
      { label: 'Broadcasting', value: '120+ Countries' },
      { label: 'Match Format', value: 'T20 Fast-Paced' },
      { label: 'Attendance', value: '250,000+ Stadium Fans' },
    ],
  },
  {
    id: 'wsg-development-league',
    title: 'WSG Development League',
    subtitle: 'Elite Youth & Talent Academy',
    description: 'An upcoming league focused on identifying and nurturing the next generation of professional athletes.',
    category: 'DEVELOPMENT',
    image: wsgDevLeague,
    location: 'Middle East & South Asia Hubs',
    stats: [
      { label: 'Talent Scouted', value: '500+ Emerging Stars' },
      { label: 'Coaching Board', value: 'ICC Master Coaches' },
      { label: 'Pathway Success', value: '85% Professional Draft' },
    ],
  },
  {
    id: 'global-sports-challenge',
    title: 'Global Sports Challenge',
    subtitle: 'Multi-Sport Championship Series',
    description: 'Future multi-sport events designed to engage audiences and create high-quality competition across cricket, football, and basketball.',
    category: 'SPORTS EVENT',
    image: wsgSportsChallenge,
    location: 'Dubai • London • Singapore',
    stats: [
      { label: 'Disciplines', value: 'Cricket, Football, Hoops' },
      { label: 'Prize Pool', value: '$2.5M USD' },
      { label: 'Digital Reach', value: '50M+ Impressions' },
    ],
  },
];

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-28 bg-[#ffffff] text-[#1A1A1A] overflow-hidden">
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
              OUR IMPACT
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
            Featured Projects / Leagues
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B6B6B] font-sans text-base sm:text-lg max-w-2xl mx-auto font-light"
          >
            Building iconic sports franchises, international competitive leagues, and high-performance development pipelines.
          </motion.p>
        </div>

        {/* 3 Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col justify-between rounded-[24px] overflow-hidden bg-[#ffffff] border border-[#ECECEC] hover:border-[#D89B18] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(216,155,24,0.18)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container (16:9 ratio) */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0B0B0D]">
                <img loading="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] bg-black/75 text-[#F2B632] border border-[#D89B18]/40 backdrop-blur-md shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Floating Quick Action Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>

                {/* Title over image */}
                <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[#F2B632] transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <div className="text-xs text-gray-300 font-sans mt-0.5 font-medium">
                      {project.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm text-[#6B6B6B] leading-relaxed font-sans font-normal">
                  {project.description}
                </p>

                {/* Card Footer Button */}
                <div className="pt-4 border-t border-[#ECECEC] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D89B18] group-hover:text-[#F2B632] transition-colors flex items-center gap-1.5">
                    VIEW PROJECT DETAILS
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#D89B18]/10 group-hover:bg-[#D89B18] text-[#D89B18] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => setSelectedProject(projectsData[0])}
            className="group inline-flex items-center justify-center h-[52px] px-8 rounded-[14px] text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_20px_rgba(216,155,24,0.25)] hover:shadow-[0_8px_30px_rgba(216,155,24,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              VIEW ALL PROJECTS
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0B0B0D] border border-[#D89B18]/40 rounded-3xl overflow-hidden shadow-2xl z-10 text-white"
            >
              {/* Header Image */}
              <div className="relative aspect-video w-full bg-black">
                <img loading="lazy"
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#D89B18] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#D89B18] text-white">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">
                    {selectedProject.title}
                  </h3>
                  <div className="text-sm text-[#F2B632] flex items-center gap-1.5 mt-1 font-sans">
                    <MapPin className="w-4 h-4" /> {selectedProject.location}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                <p className="text-gray-300 font-sans text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {selectedProject.stats?.map((st, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#141414] border border-white/5">
                      <div className="text-lg font-bold text-[#F2B632] font-serif">{st.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-sans mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-xl bg-[#D89B18] hover:bg-[#F2B632] text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Close Portfolio View
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
