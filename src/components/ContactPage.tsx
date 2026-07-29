import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Globe2,
  Building2,
  ShieldCheck,
  Bell,
  ChevronDown
} from 'lucide-react';

interface ContactPageProps {
  onOpenPartnerModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'League Creation & IP',
    message: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Newsletter State
  const [newsletterForm, setNewsletterForm] = useState({
    name: '',
    email: '',
  });
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setContactSubmitted(true);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterForm.email) {
      setNewsletterSubmitted(true);
    }
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#ffffff] text-[#1A1A1A] font-sans">
      
      {/* 1. Page Hero / Banner */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#0B0B0D] overflow-hidden pt-28 pb-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy"
            src="/src/assets/images/wsg_dubai_arena_1785224318037.jpg"
            alt="World Sports Group Headquarters & Arena"
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
              <Mail className="w-4 h-4 text-[#F2B632]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F2B632] font-sans">
                WORLD SPORTS GROUP • CONTACT & INQUIRIES
              </span>
            </motion.div>

            {/* Exact Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
            >
              Get in Touch <br />
              <span className="text-gold-gradient drop-shadow-[0_4px_25px_rgba(216,155,24,0.3)]">
                with WSG
              </span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans font-light leading-relaxed border-l-2 border-[#D89B18] pl-5"
            >
              Whether you’re planning a league, event, or partnership, we’re ready to collaborate.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="pt-4 flex flex-wrap gap-4"
            >
              <button
                onClick={handleScrollToForm}
                className="group relative inline-flex items-center justify-center h-[56px] px-9 rounded-[14px] text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-[0_4px_25px_rgba(216,155,24,0.35)] hover:shadow-[0_10px_35px_rgba(216,155,24,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2.5">
                  Send Us a Message
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>

              <a
                href="tel:+971562486875"
                className="inline-flex items-center justify-center gap-2 h-[56px] px-8 rounded-[14px] text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#F2B632]" />
                <span>Call Headquarters (+971 562486875)</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <button
            onClick={handleScrollToForm}
            className="flex flex-col items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#D89B18] transition-colors cursor-pointer"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#D89B18]" />
          </button>
        </div>
      </section>

      {/* 2. Contact Information Section */}
      <section className="py-24 bg-[#FAFAFC] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
              GLOBAL PRESENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]">
              Our Office
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg">
              Reach out to our team for inquiries, partnerships, or project discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Address */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all space-y-4 group">
              <div className="w-14 h-14 rounded-xl bg-[#0B0B0D] text-[#F2B632] flex items-center justify-center font-bold">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Address
              </h3>
              <div className="text-gray-600 text-sm font-light leading-relaxed">
                <strong className="text-[#1A1A1A] block font-semibold">World Sports Group</strong>
                Sharjah Media City, <br />
                Sharjah, United Arab Emirates
              </div>
            </div>

            {/* Phone (Click to Call) */}
            <a
              href="tel:+971562486875"
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] hover:-translate-y-1 transition-all space-y-4 group block"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0B0B0D] text-[#F2B632] flex items-center justify-center font-bold group-hover:bg-[#D89B18] group-hover:text-white transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Phone
              </h3>
              <div className="text-gray-600 text-sm font-light leading-relaxed">
                <span className="text-xs text-gray-400 block font-mono">Click-to-Call Direct Line</span>
                <span className="text-base font-bold text-[#D89B18] group-hover:underline">
                  +971 562486875
                </span>
              </div>
            </a>

            {/* Email (Click to Email) */}
            <a
              href="mailto:gworldsports@gmail.com"
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] hover:-translate-y-1 transition-all space-y-4 group block"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0B0B0D] text-[#F2B632] flex items-center justify-center font-bold group-hover:bg-[#D89B18] group-hover:text-white transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Email
              </h3>
              <div className="text-gray-600 text-sm font-light leading-relaxed">
                <span className="text-xs text-gray-400 block font-mono">General & Legal Inquiries</span>
                <span className="text-base font-bold text-[#D89B18] group-hover:underline">
                  gworldsports@gmail.com
                </span>
              </div>
            </a>

            {/* Office Hours */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:border-[#D89B18] transition-all space-y-4">
              <div className="w-14 h-14 rounded-xl bg-[#0B0B0D] text-[#F2B632] flex items-center justify-center font-bold">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Office Hours
              </h3>
              <div className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed space-y-1">
                <p><strong className="text-[#1A1A1A]">Mon – Fri:</strong> 09:00 – 18:00 GST</p>
                <p><strong className="text-[#1A1A1A]">Saturday:</strong> 10:00 – 14:00 GST</p>
                <p><strong className="text-gray-400">Sunday:</strong> Closed</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Contact Form Section */}
      <section id="contact-form-section" className="py-28 bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Left Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
                PARTNERSHIP DISCUSSIONS
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
                Send Us a <br />
                <span className="text-gold-gradient">Message</span>
              </h2>

              <p className="text-gray-600 font-light text-base sm:text-lg leading-relaxed">
                Our sports solutions executive team in Dubai handles league creation proposals, venue contracts, broadcast licensing, and athlete management inquiries.
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <ShieldCheck className="w-5 h-5 text-[#D89B18]" />
                  <span>Strict confidentiality for sports IP proposals</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Building2 className="w-5 h-5 text-[#D89B18]" />
                  <span>Direct routing to Dubai senior executives</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Globe2 className="w-5 h-5 text-[#D89B18]" />
                  <span>Global coverage across 120+ media territories</span>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-7 bg-[#0B0B0D] text-white p-8 sm:p-12 rounded-3xl border border-[#D89B18]/30 shadow-2xl relative overflow-hidden">
              {!contactSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Richard Miller"
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        id="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="e.g. richard@sportscorp.com"
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="e.g. +971 50 123 4567"
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Subject / Project Type *
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-[#141414] border border-white/15 text-white text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                      >
                        <option value="League Creation & IP">Sporting IP & League Creation</option>
                        <option value="Event Production">Event Management & Production</option>
                        <option value="Athlete Support">Talent & Athlete Management</option>
                        <option value="Sponsorships">Strategic Partnerships & Sponsorships</option>
                        <option value="Legal & Compliance">Legal & Compliance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      id="message"
                        value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Describe your sports property, target venue, or partnership vision..."
                      className="w-full p-4 rounded-xl bg-[#141414] border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                    />
                  </div>

                  <div className="space-y-2">
                    <button
                      type="submit"
                      className="w-full h-14 rounded-xl text-xs font-bold uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-lg hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                    <p className="text-center text-xs text-gray-400 font-light">
                      We’ll respond within 24-48 hours.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#D89B18] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-extrabold text-white">
                    Inquiry Received, {contactForm.name}!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed font-light">
                    Thank you for reaching out regarding <span className="text-[#F2B632]">{contactForm.subject}</span>. A World Sports Group executive will contact you at <span className="text-[#F2B632]">{contactForm.email}</span> within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setContactSubmitted(false)}
                    className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Map / Location Section */}
      <section className="py-24 bg-[#FAFAFC] border-t border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D89B18]">
              LOCATION & DIRECTIONS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]">
              Sharjah Media City, UAE
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg">
              World Sports Group headquarters are located in Sharjah Media City, connecting our global operations across UAE, India, UK, Australia, and USA.
            </p>
          </div>

          {/* Interactive Styled Google Maps Container */}
          <div className="rounded-3xl border border-gray-300 shadow-2xl overflow-hidden relative bg-[#0B0B0D] h-[450px]">
            <iframe
              title="WSG Sharjah Media City Headquarters Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115291.6859871804!2d55.454228!3d25.321852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4b9f33b1e7%3A0x7d018cb174f88e99!2sSharjah%20Media%20City%20(Shams)!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) brightness(0.95)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Custom Location Badge */}
            <div className="absolute bottom-6 left-6 z-10 bg-[#0B0B0D]/90 backdrop-blur-md border border-[#D89B18]/40 text-white p-5 rounded-2xl shadow-2xl max-w-xs space-y-2 hidden sm:block">
              <div className="flex items-center gap-2 text-[#F2B632] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>WSG Global Headquarters</span>
              </div>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Sharjah Media City, Sharjah, United Arab Emirates
              </p>
              <a
                href="https://maps.google.com/?q=Sharjah+Media+City"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#F2B632] hover:underline pt-1"
              >
                <span>Get Driving Directions</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Call to Action / Newsletter Section */}
      <section className="py-24 bg-[#0B0B0D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,155,24,0.18),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8 p-10 sm:p-14 rounded-3xl bg-[#141414] border border-[#D89B18]/30 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#D89B18]/40 text-[#F2B632] text-xs font-bold uppercase tracking-wider">
              <Bell className="w-3.5 h-3.5" />
              <span>STAY INFORMED</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
              Stay Connected
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Subscribe for updates on new leagues, events, and WSG initiatives.
            </p>

            {!newsletterSubmitted ? (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto space-y-4">
                <div className="space-y-3">
                  <input
                    type="text"
                    value={newsletterForm.name}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full h-12 px-4 rounded-xl bg-[#0B0B0D] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                  />
                  <input
                    type="email"
                    required
                    value={newsletterForm.email}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, email: e.target.value })}
                    placeholder="Your Email Address *"
                    className="w-full h-12 px-4 rounded-xl bg-[#0B0B0D] border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D89B18] focus:ring-1 focus:ring-[#D89B18]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl text-xs font-bold uppercase tracking-[0.15em] text-white bg-gradient-to-r from-[#D89B18] via-[#E2A522] to-[#B87E0E] shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Subscribe Now</span>
                </button>

                <p className="text-xs text-gray-400 font-light">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-black/60 border border-[#D89B18] space-y-2 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 text-[#F2B632] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Subscribed Successfully!</span>
                </div>
                <p className="text-xs text-gray-300 font-light">
                  You are now on the WSG priority dispatch list for upcoming league announcements and media releases.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
