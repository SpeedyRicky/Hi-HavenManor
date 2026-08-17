import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, ChevronRight, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hiHavenData';

interface HeaderNavigationProps {
  onOpenTourModal: () => void;
  onOpenAssessmentModal: () => void;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  onOpenTourModal,
  onOpenAssessmentModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['sanctuary', 'care-programs', 'heritage', 'residences', 'experience', 'gallery', 'standards', 'admissions'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Sanctuary', href: '#sanctuary', id: 'sanctuary' },
    { label: 'Care & Programs', href: '#care-programs', id: 'care-programs' },
    { label: 'Our Heritage', href: '#heritage', id: 'heritage' },
    { label: 'Residences', href: '#residences', id: 'residences' },
    { label: 'Daily Life', href: '#experience', id: 'experience' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Accreditation', href: '#standards', id: 'standards' },
    { label: 'Admissions', href: '#admissions', id: 'admissions' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Advisory Strip */}
      <div className="site-topbar-notice-bar" id="site-top-bar">
        <div className="site-topbar-content-container">
          <div className="flex items-center gap-6 text-xs text-[#D8CFC3]">
            <span className="flex items-center gap-1.5 hidden sm:inline-flex">
              <MapPin className="w-3.5 h-3.5 text-[#9B8258]" />
              {BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.town}, NL
            </span>
            <span className="flex items-center gap-1.5 hidden md:inline-flex">
              <Clock className="w-3.5 h-3.5 text-[#9B8258]" />
              Visiting Hours: Daily 9:00 AM – 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium ml-auto">
            <span className="text-[#9B8258] hidden lg:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Provincially Licensed Personal Care Home
            </span>
            <a 
              href={`tel:${BUSINESS_INFO.contact.phone}`} 
              className="site-topbar-contact-link hover:text-white"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-[#9B8258]" />
              <span>Direct: <strong className="font-semibold text-white">{BUSINESS_INFO.contact.phone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className={`luxury-site-header ${isScrolled ? 'scrolled' : ''}`} id="main-site-navigation-header">
        <div className="luxury-navigation-container">
          {/* Brand Identity */}
          <a href="#sanctuary" className="brand-identity-lockup" id="header-brand-logo">
            <span className="brand-identity-title">HI HAVEN</span>
            <span className="brand-identity-subtitle">MANOR • HOLYROOD, NL</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navigation-menu-links-list" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`navigation-menu-item-link ${activeSection === link.id ? 'active text-[#78623A] font-semibold' : ''}`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="navigation-action-buttons-group">
            <button
              onClick={onOpenAssessmentModal}
              className="hidden xl:inline-flex text-xs font-semibold text-[#5A492C] hover:text-[#171E1C] px-3 py-2 border border-[#9B8258]/30 rounded transition-colors"
              id="header-care-assessment-btn"
            >
              Care Needs Quiz
            </button>

            <button
              onClick={onOpenTourModal}
              className="luxury-button-primary text-xs sm:text-sm py-2.5 px-4 sm:px-5"
              id="header-schedule-tour-btn"
            >
              <Calendar className="w-4 h-4 text-[#9B8258]" />
              <span>Schedule Visit</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#171E1C] hover:text-[#78623A] transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Full-Screen / Drawer Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[88px] bottom-0 bg-[#FAF7F2] border-t border-[#9B8258]/20 z-50 p-6 flex flex-col justify-between overflow-y-auto" id="mobile-navigation-drawer">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#78623A] mb-2">Navigation Menu</p>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium text-[#1A211E] py-2 border-b border-[#E8E0D5] flex items-center justify-between"
                  id={`mobile-nav-${link.id}`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#9B8258]" />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#9B8258]/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAssessmentModal();
                }}
                className="luxury-button-secondary w-full justify-center"
                id="mobile-care-quiz-btn"
              >
                Take Care Needs Assessment
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTourModal();
                }}
                className="luxury-button-primary w-full justify-center"
                id="mobile-schedule-tour-btn"
              >
                <Calendar className="w-4 h-4 text-[#9B8258]" />
                <span>Schedule a Private Visit</span>
              </button>

              <div className="mt-4 text-center">
                <p className="text-xs text-[#55645D]">Call our admissions team directly:</p>
                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="text-sm font-semibold text-[#171E1C] hover:text-[#78623A]">
                  {BUSINESS_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
