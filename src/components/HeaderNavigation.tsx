import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, ChevronRight, Clock, Heart } from 'lucide-react';
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
  const [activeSection, setActiveSection] = useState('sanctuary');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['sanctuary', 'about', 'residences', 'care-programs', 'experience', 'standards', 'admissions', 'faqs'];
      const scrollPosition = window.scrollY + 180;

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
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'The 17-Bed Home', href: '#residences', id: 'residences' },
    { label: 'Our Approach to Care', href: '#care-programs', id: 'care-programs' },
    { label: 'Daily Life', href: '#experience', id: 'experience' },
    { label: 'Admissions & Referrals', href: '#admissions', id: 'admissions' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
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
      <div className="bg-[#233B31] text-[#E8E1D5] text-[11px] border-b border-[#2D483C]/60" id="site-top-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hidden sm:inline-flex text-[#D5CEBF]">
              <MapPin className="w-3.5 h-3.5 text-[#B5A493]" />
              {BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.town}, NL
            </span>
            <span className="flex items-center gap-1.5 hidden md:inline-flex text-[#D5CEBF]">
              <Clock className="w-3.5 h-3.5 text-[#B5A493]" />
              Visiting Hours: 9:00 AM – 8:00 PM Daily
            </span>
          </div>

          <div className="flex items-center gap-5 font-medium ml-auto">
            <span className="text-[#E8E1D5] hidden lg:inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B5A493]" />
              17-Bed Provincially Licensed Community Care Home
            </span>
            <a 
              href={`tel:${BUSINESS_INFO.contact.phone}`} 
              className="inline-flex items-center gap-1.5 text-[#FAF8F5] hover:text-[#B5A493] transition-colors"
              id="topbar-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-[#B5A493]" />
              <span>Call Us: <strong className="font-semibold">{BUSINESS_INFO.contact.phone}</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DFC5] ${isScrolled ? 'shadow-sm bg-[#FAF8F5]/98 py-3' : 'py-4'}`} id="main-site-navigation-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#sanctuary" className="flex flex-col text-decoration-none group" id="header-brand-logo">
            <span className="text-xl sm:text-2xl font-serif tracking-[0.15em] uppercase text-[#1C2622] font-normal leading-none">
              HI HAVEN MANOR
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#5F6B65] font-medium mt-1">
              Community Care • Holyrood, NL
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-colors py-1 relative ${
                  activeSection === link.id ? 'text-[#233B31] font-semibold' : 'text-[#5F6B65] hover:text-[#1C2622]'
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#233B31]"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAssessmentModal}
              className="hidden xl:inline-flex text-[11px] tracking-wider uppercase text-[#233B31] hover:text-[#1C2622] font-medium pb-0.5 border-b border-[#233B31]/40 hover:border-[#1C2622] transition-colors"
              id="header-care-assessment-btn"
            >
              Is Hi Haven Right for You?
            </button>

            <button
              onClick={onOpenTourModal}
              className="bg-[#233B31] text-[#FAF8F5] px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors shadow-xs"
              id="header-schedule-tour-btn"
            >
              Arrange a Visit
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C2622] hover:text-[#233B31] transition-colors"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[100%] bottom-0 bg-[#FAF8F5] border-t border-[#E5DFC5] z-50 p-6 flex flex-col justify-between overflow-y-auto min-h-[calc(100vh-100px)]" id="mobile-navigation-drawer">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5F6B65]">Menu</span>
                <div className="h-[1px] flex-1 bg-[#E5DFC5]"></div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-serif tracking-wide text-[#1C2622] py-3 border-b border-[#E5DFC5]/60 flex items-center justify-between hover:text-[#233B31] transition-colors"
                  id={`mobile-nav-${link.id}`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#8C9993]" />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5DFC5] flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAssessmentModal();
                }}
                className="w-full py-3 border border-[#233B31] text-[#233B31] text-center text-[11px] uppercase tracking-wider font-medium hover:bg-[#233B31] hover:text-white transition-colors"
                id="mobile-care-quiz-btn"
              >
                Care Fit Questionnaire
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTourModal();
                }}
                className="w-full py-3 bg-[#233B31] text-[#FAF8F5] text-center text-[11px] uppercase tracking-wider font-medium hover:bg-[#1A2E26] transition-colors flex items-center justify-center gap-2"
                id="mobile-schedule-tour-btn"
              >
                <Calendar className="w-4 h-4 text-[#D5CEBF]" />
                <span>Arrange a Visit</span>
              </button>

              <div className="mt-4 text-center">
                <p className="text-[11px] text-[#5F6B65]">Need to speak with our staff?</p>
                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="text-sm font-semibold text-[#1C2622] hover:text-[#233B31]">
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

