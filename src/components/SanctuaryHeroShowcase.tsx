import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hiHavenData';

interface SanctuaryHeroShowcaseProps {
  onOpenTourModal: () => void;
  onOpenAssessmentModal: () => void;
}

export const SanctuaryHeroShowcase: React.FC<SanctuaryHeroShowcaseProps> = ({
  onOpenTourModal,
  onOpenAssessmentModal,
}) => {
  return (
    <section className="sanctuary-showcase-wrapper" id="sanctuary" aria-labelledby="sanctuary-hero-heading">
      <div className="sanctuary-showcase-grid-layout">
        {/* Left Column: Narrative & High Impact Typography */}
        <div className="flex flex-col justify-center">
          <div className="sanctuary-badge-eyebrow" id="hero-accreditation-pill">
            <ShieldCheck className="w-4 h-4 text-[#78623A]" />
            <span>EST. 2004 • HOLYROOD, NEWFOUNDLAND & LABRADOR</span>
          </div>

          <h1 className="sanctuary-primary-display-title" id="sanctuary-hero-heading">
            A sanctuary of <em>dignity</em>, compassionate care, and tranquil living.
          </h1>

          <p className="sanctuary-lead-narrative-paragraph">
            Nestled beneath the majestic forested hills of Butter Pot in Holyrood, <strong>Hi Haven Manor</strong> has provided over two decades of accredited personal care, specialized mental health residential support, and warm Newfoundland hospitality.
          </p>

          {/* Action CTAs */}
          <div className="sanctuary-actions-button-row">
            <button
              onClick={onOpenTourModal}
              className="luxury-button-primary"
              id="hero-schedule-visit-btn"
            >
              <Calendar className="w-4 h-4 text-[#9B8258]" />
              <span>Schedule a Private Visit</span>
            </button>

            <button
              onClick={onOpenAssessmentModal}
              className="luxury-button-secondary"
              id="hero-care-needs-assessment-btn"
            >
              <span>Care Needs Assessment</span>
              <ArrowRight className="w-4 h-4 text-[#78623A]" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#171E1C] hover:text-[#78623A] px-3 py-2 transition-colors"
              id="hero-call-direct-link"
            >
              <Phone className="w-4 h-4 text-[#78623A]" />
              <span>{BUSINESS_INFO.contact.phone}</span>
            </a>
          </div>

          {/* Real Metrics Strip */}
          <div className="sanctuary-core-metrics-strip" id="hero-metrics-strip">
            <div className="metric-card-single-item">
              <span className="metric-number-display">20+</span>
              <span className="metric-description-label">Years of compassionate care in Newfoundland</span>
            </div>

            <div className="metric-card-single-item">
              <span className="metric-number-display">24/7</span>
              <span className="metric-description-label">Dedicated Personal Care Attendants on-site</span>
            </div>

            <div className="metric-card-single-item">
              <span className="metric-number-display">L1 & L2</span>
              <span className="metric-description-label">Provincially licensed personal care standards</span>
            </div>

            <div className="metric-card-single-item">
              <span className="metric-number-display">100%</span>
              <span className="metric-description-label">Screened & certified care attendants</span>
            </div>
          </div>
        </div>

        {/* Right Column: Cinematic Photography & Floating Badges */}
        <div className="cinematic-visual-frame-container">
          <div className="cinematic-main-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
              alt="Caregiver holding resident's hand with warm sunlight and dignity at Hi Haven"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141B18]/70 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#D3C9BD] font-semibold flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#9B8258]" />
                36 Butter Pot Road, Holyrood
              </span>
              <p className="text-base sm:text-lg font-serif font-light text-[#FAF7F2]">
                "A true home where every resident is known, valued, and sheltered with love."
              </p>
            </div>
          </div>

          {/* Floating Accreditation Badge */}
          <div className="floating-accreditation-seal-badge" id="hero-floating-accreditation-badge">
            <div className="w-10 h-10 rounded-full bg-[#9B8258]/20 flex items-center justify-center flex-shrink-0 text-[#9B8258]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9B8258]">Licensed Facility</p>
              <p className="text-xs text-[#D8CFC3] mt-0.5 leading-snug">
                Provincial Personal Care Home Standards • Government of NL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
