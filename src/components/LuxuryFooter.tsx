import React from 'react';
import { BUSINESS_INFO } from '../data/hiHavenData';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Clock, Heart } from 'lucide-react';

interface LuxuryFooterProps {
  onOpenTourModal: () => void;
  onOpenAssessmentModal: () => void;
}

export const LuxuryFooter: React.FC<LuxuryFooterProps> = ({
  onOpenTourModal,
  onOpenAssessmentModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C2622] text-[#E5DFC5] pt-16 pb-12 border-t border-[#2D3E37]" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#2D3E37]">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-normal tracking-[0.15em] uppercase text-[#FAF8F5]">
                HI HAVEN MANOR
              </span>
              <p className="text-xs uppercase tracking-wider text-[#8C705B] mt-1">
                Community Care Home • Holyrood, NL
              </p>
            </div>

            <p className="text-xs text-[#BAC7C0] leading-relaxed max-w-md font-light">
              A 15-bed residential care home providing personal care, medication supervision, and supportive mental health & addiction recovery in Holyrood, Newfoundland & Labrador under Eastern Health (NL Health Services). Family-run for over 40 years, renovated in 2015.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#FAF8F5] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#8C705B]" />
              <span>Government Subsidized Residential Care • Certified PCA Attendants</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-[#FAF8F5] block font-semibold">
              The Home
            </span>
            <ul className="space-y-2 text-xs text-[#BAC7C0]">
              <li>
                <a href="#sanctuary" className="hover:text-[#FAF8F5] transition-colors">Overview</a>
              </li>
              <li>
                <a href="#care-programs" className="hover:text-[#FAF8F5] transition-colors">Care Programs</a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-[#FAF8F5] transition-colors">Our Founders</a>
              </li>
              <li>
                <a href="#residences" className="hover:text-[#FAF8F5] transition-colors">Rooms & Living</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FAF8F5] transition-colors">Daily Life</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FAF8F5] transition-colors">Photo Gallery</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Actions */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-[#FAF8F5] block font-semibold">
              Admissions
            </span>
            <ul className="space-y-2 text-xs text-[#BAC7C0]">
              <li>
                <a href="#admissions" className="hover:text-[#FAF8F5] transition-colors">Admissions Guide</a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#FAF8F5] transition-colors">Provincial Standards</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FAF8F5] transition-colors">Common Questions</a>
              </li>
              <li>
                <button onClick={onOpenAssessmentModal} className="hover:text-[#FAF8F5] transition-colors text-left">
                  Care Needs Quiz
                </button>
              </li>
              <li>
                <button onClick={onOpenTourModal} className="text-[#FAF8F5] font-medium hover:underline text-left">
                  Book a Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-[#FAF8F5] block font-semibold">
              Contact & Location
            </span>

            <div className="flex items-start gap-2.5 text-xs text-[#BAC7C0]">
              <MapPin className="w-4 h-4 text-[#8C705B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#FAF8F5]">{BUSINESS_INFO.name}</p>
                <p>{BUSINESS_INFO.location.address}</p>
                <p>{BUSINESS_INFO.location.town}, NL {BUSINESS_INFO.location.postalCode}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#BAC7C0]">
              <Phone className="w-4 h-4 text-[#8C705B] flex-shrink-0" />
              <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-[#FAF8F5] font-medium text-[#FAF8F5]">
                {BUSINESS_INFO.contact.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#BAC7C0]">
              <Mail className="w-4 h-4 text-[#8C705B] flex-shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-[#FAF8F5] font-medium text-[#FAF8F5]">
                {BUSINESS_INFO.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#BAC7C0]">
              <Clock className="w-4 h-4 text-[#8C705B] flex-shrink-0" />
              <span>Visiting: 9:00 AM – 8:00 PM Daily</span>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BAC7C0] font-light">
          <div>
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-[#BAC7C0]/70 mt-0.5">
              A licensed 17-bed community care home in Holyrood, Newfoundland & Labrador.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#FAF8F5] hover:text-[#8C705B] transition-colors"
            id="footer-back-to-top-btn"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

