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
    <footer className="site-luxury-footer" id="site-footer">
      <div className="footer-content-grid">
        {/* Column 1: Brand & Philosophy */}
        <div className="space-y-4">
          <div className="brand-identity-lockup">
            <span className="font-serif text-3xl font-bold tracking-widest text-[#FAF7F2]">
              HI HAVEN
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9B8258] font-semibold mt-1">
              MANOR • HOLYROOD, NL
            </span>
          </div>

          <p className="text-xs text-[#A89C8C] leading-relaxed max-w-sm">
            An accredited personal care home and supportive senior living sanctuary in Holyrood, Newfoundland & Labrador. Over 20 years of dedicated service under {BUSINESS_INFO.legalName}.
          </p>

          <div className="flex items-center gap-2 text-xs text-[#9B8258]">
            <ShieldCheck className="w-4 h-4" />
            <span>Licensed by Government of Newfoundland & Labrador</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2] mb-4">
            Sanctuary & Care
          </h4>
          <ul className="space-y-2 text-xs text-[#C8BCAC]">
            <li>
              <a href="#sanctuary" className="hover:text-white transition-colors">The Sanctuary</a>
            </li>
            <li>
              <a href="#care-programs" className="hover:text-white transition-colors">Care & Programs</a>
            </li>
            <li>
              <a href="#heritage" className="hover:text-white transition-colors">Our 20+ Year Heritage</a>
            </li>
            <li>
              <a href="#residences" className="hover:text-white transition-colors">Accommodations & Suites</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition-colors">Daily Life & Activities</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition-colors">Visual Gallery</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Admissions & Tools */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2] mb-4">
            Admissions
          </h4>
          <ul className="space-y-2 text-xs text-[#C8BCAC]">
            <li>
              <a href="#admissions" className="hover:text-white transition-colors">Admissions Process</a>
            </li>
            <li>
              <a href="#standards" className="hover:text-white transition-colors">Provincial Standards</a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-white transition-colors">Frequently Asked Questions</a>
            </li>
            <li>
              <button onClick={onOpenAssessmentModal} className="hover:text-white transition-colors text-left">
                Care Needs Quiz
              </button>
            </li>
            <li>
              <button onClick={onOpenTourModal} className="hover:text-white transition-colors text-left text-[#9B8258] font-semibold">
                Schedule a Visit
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Location */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2] mb-4">
            Location & Contact
          </h4>

          <div className="flex items-start gap-2.5 text-xs text-[#C8BCAC]">
            <MapPin className="w-4 h-4 text-[#9B8258] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#FAF7F2]">{BUSINESS_INFO.name} (Hi-Haven Manor)</p>
              <p>{BUSINESS_INFO.location.address}</p>
              <p>{BUSINESS_INFO.location.town}, {BUSINESS_INFO.location.province} {BUSINESS_INFO.location.postalCode}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-[#C8BCAC]">
            <Phone className="w-4 h-4 text-[#9B8258] flex-shrink-0" />
            <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-white font-semibold text-[#FAF7F2]">
              {BUSINESS_INFO.contact.phone}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-[#C8BCAC]">
            <Clock className="w-4 h-4 text-[#9B8258] flex-shrink-0" />
            <span>Visiting: 9:00 AM – 8:00 PM Daily</span>
          </div>

          <div className="pt-2">
            <a
              href="https://maps.google.com/?q=36+Butter+Pot+Rd,+Holyrood,+NL+A0A+2R0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#9B8258] hover:text-white transition-colors font-semibold"
            >
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom-copyright-strip">
        <div>
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.</p>
          <p className="text-[11px] text-[#706456] mt-0.5">
            Licensed Personal Care Home under the Department of Health and Community Services, Newfoundland & Labrador.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#C8BCAC] hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10"
          id="footer-back-to-top-btn"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
