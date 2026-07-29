import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WelcomeSection } from './components/WelcomeSection';
import { CoreServices } from './components/CoreServices';
import { FeaturedProjects } from './components/FeaturedProjects';
import { WhyChooseWSG } from './components/WhyChooseWSG';
import { NewsletterSection } from './components/NewsletterSection';
import { ManagementSection } from './components/ManagementSection';
import { StatsSection } from './components/StatsSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';

// Lazy Loaded Page Components for Code-Splitting & Performance
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./components/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProjectsPage = lazy(() => import('./components/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const TeamPage = lazy(() => import('./components/TeamPage').then(m => ({ default: m.TeamPage })));
const ManagementPage = lazy(() => import('./components/ManagementPage').then(m => ({ default: m.ManagementPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));

// Lazy Loaded Modals
const ShowreelModal = lazy(() => import('./components/ShowreelModal').then(m => ({ default: m.ShowreelModal })));
const PartnerModal = lazy(() => import('./components/PartnerModal').then(m => ({ default: m.PartnerModal })));

// Page Loading Fallback Spinner
const PageLoader = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#0B0B0D] text-white p-8">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-[#D89B18]/20 animate-ping" />
      <div className="w-12 h-12 rounded-full border-3 border-t-[#D89B18] border-r-transparent border-b-[#F2B632] border-l-transparent animate-spin" />
    </div>
    <span className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
      WORLD SPORTS GROUP
    </span>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy'>('home');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const handleOpenPartnerModal = () => {
    setPartnerModalOpen(true);
  };

  const handleOpenShowreel = () => {
    setShowreelOpen(true);
  };

  const handleNavigate = (
    page: 'home' | 'about' | 'services' | 'projects' | 'team' | 'management' | 'contact' | 'privacy',
    targetSection?: string
  ) => {
    setCurrentPage(page);
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // SEO configuration based on active page
  const getSeoProps = () => {
    switch (currentPage) {
      case 'about':
        return {
          title: 'About Us — World Sports Group | Founder of Asian Legends League',
          description: 'Learn about World Sports Group (WSG), founder of Asian Legends League. Specializing in Events Management, Players Management, PR, TV Production, and Sponsorship.',
          path: '/about',
        };
      case 'services':
        return {
          title: 'Services & Solutions — World Sports Group (WSG)',
          description: 'Comprehensive sports solutions by WSG: Events Management, Players Management, PR, TV Production, and Sponsorship across UAE, India, UK, Australia, and USA.',
          path: '/services',
        };
      case 'projects':
        return {
          title: 'Leagues & Properties — World Sports Group | Asian Legends League',
          description: 'Discover marquee sports IPs founded and managed by World Sports Group, including Asian Legends League and international marquee events.',
          path: '/projects',
        };
      case 'team':
        return {
          title: 'Executive Team & Operations — World Sports Group',
          description: 'Meet the team behind World Sports Group, directing global sports events, athlete pathways, media PR, and broadcast production.',
          path: '/team',
        };
      case 'management':
        return {
          title: 'Executive Board & Governance — World Sports Group',
          description: 'Strategic governance, legal arbitration, and executive leadership directing World Sports Group global sports operations.',
          path: '/management',
        };
      case 'contact':
        return {
          title: 'Contact Us — World Sports Group | Sharjah Media City, UAE',
          description: 'Contact World Sports Group at gworldsports@gmail.com or +971 562486875. Headquarters at Sharjah Media City, Sharjah, UAE.',
          path: '/contact',
        };
      case 'privacy':
        return {
          title: 'Privacy Policy — World Sports Group | Asian Legends League',
          description: 'Official Privacy Policy of World Sports Group (WSG) & Asian Legends League. How we collect, protect, and safeguard your data across UAE, India, UK, Australia, and USA.',
          path: '/privacy-policy',
        };
      default:
        return {
          title: 'World Sports Group (WSG) — Founder of Asian Legends League',
          description: 'World Sports Group (WSG) is the founder of Asian Legends League. Events Management | Players Management | PR | TV Production | Sponsorship across UAE, India, UK, Australia, and USA.',
          path: '/',
        };
    }
  };

  const seoProps = getSeoProps();

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1A1A1A] font-sans overflow-x-hidden selection:bg-[#D89B18]/30 selection:text-[#D89B18]">
      {/* Dynamic SEO Tag Updates */}
      <SEO {...seoProps} />

      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPartnerModal={handleOpenPartnerModal}
      />

      {/* Main Page Content */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Slider (3 rotating slides) */}
            <Hero
              onOpenShowreel={handleOpenShowreel}
              onOpenPartnerModal={handleOpenPartnerModal}
              onNavigate={handleNavigate}
            />

            {/* 2. Welcome / Intro Section */}
            <WelcomeSection
              onLearnMoreClick={() => handleNavigate('about')}
            />

            {/* 3. Services Snapshot (4 Cards) */}
            <CoreServices onNavigateToServices={() => handleNavigate('services')} />

            {/* 4. Featured Projects / Leagues */}
            <FeaturedProjects />

            {/* 5. Why Choose WSG (4 Key Points + Icons) */}
            <WhyChooseWSG />

            {/* 6. Newsletter Subscription ("Stay Ahead of the Game") */}
            <NewsletterSection />

            {/* Executive Management Section */}
            <ManagementSection />

            {/* Global Reach Stats Counter */}
            <StatsSection />

            {/* 7. Call To Action Section ("Ready to Build Something Extraordinary?") */}
            <CTASection onOpenPartnerModal={handleOpenPartnerModal} />
          </>
        )}

        <Suspense fallback={<PageLoader />}>
          {currentPage === 'about' && (
            <AboutPage
              onOpenPartnerModal={handleOpenPartnerModal}
              onNavigateToServices={() => handleNavigate('services')}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onOpenPartnerModal={handleOpenPartnerModal}
              onNavigateToProjects={() => handleNavigate('projects')}
            />
          )}

          {currentPage === 'projects' && (
            <ProjectsPage
              onOpenPartnerModal={handleOpenPartnerModal}
            />
          )}

          {currentPage === 'team' && (
            <TeamPage
              onOpenPartnerModal={handleOpenPartnerModal}
            />
          )}

          {currentPage === 'management' && (
            <ManagementPage
              onOpenPartnerModal={handleOpenPartnerModal}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              onOpenPartnerModal={handleOpenPartnerModal}
            />
          )}

          {currentPage === 'privacy' && (
            <PrivacyPolicyPage
              onNavigate={handleNavigate}
              onOpenPartnerModal={handleOpenPartnerModal}
            />
          )}
        </Suspense>
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenPartnerModal={handleOpenPartnerModal}
        onNavigate={handleNavigate}
      />

      {/* Modals Lazy Suspense */}
      <Suspense fallback={null}>
        {showreelOpen && (
          <ShowreelModal
            isOpen={showreelOpen}
            onClose={() => setShowreelOpen(false)}
          />
        )}

        {partnerModalOpen && (
          <PartnerModal
            isOpen={partnerModalOpen}
            onClose={() => setPartnerModalOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}

