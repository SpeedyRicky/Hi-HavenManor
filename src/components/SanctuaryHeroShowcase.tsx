import React from 'react';
import { Calendar, Phone, ShieldCheck, Heart, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, CORE_PILLARS } from '../data/hiHavenData';
import hiHavenExterior from '../assets/images/hi_haven_exact_screenshot.png';


interface SanctuaryHeroShowcaseProps {
  onOpenTourModal: () => void;
  onOpenAssessmentModal: () => void;
}

export const SanctuaryHeroShowcase: React.FC<SanctuaryHeroShowcaseProps> = ({
  onOpenTourModal,
  onOpenAssessmentModal,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#FAF8F5] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 border-b border-[#E5DFC5]" id="sanctuary" aria-labelledby="sanctuary-hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & High Impact Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#233B31]"></span>
                HOLYROOD, NEWFOUNDLAND & LABRADOR • OVER 40 YEARS OF HERITAGE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[66px] leading-[1.05] font-serif text-[#1C2622] font-normal mb-6 tracking-tight" id="sanctuary-hero-heading">
              A personalized home, nestled in Holyrood.
            </h1>

            <p className="text-[#5F6B65] text-base sm:text-lg leading-relaxed mb-6 max-w-2xl font-light">
              <strong>Hi Haven Manor</strong> is a small, welcoming care home accommodating a maximum of <strong>15 adult residents</strong>. Situated in a park-like woodland setting in Holyrood, we offer supervised living, clinical support, and therapeutic recreation under the <strong>Mental Health and Addiction program of Eastern Health</strong>.
            </p>

            <div className="bg-[#F3EFEA] border-l-2 border-[#233B31] p-3.5 mb-8 max-w-2xl text-xs text-[#5F6B65] leading-relaxed">
              <strong className="text-[#1C2622] font-semibold block mb-0.5">Government Subsidized Program:</strong>
              Because our program is government subsidized through Eastern Health (NL Health Services), potential residents and families can apply for provincial financing.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
              <button
                onClick={onOpenTourModal}
                className="bg-[#233B31] text-[#FAF8F5] px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors shadow-sm flex items-center gap-2"
                id="hero-schedule-visit-btn"
              >
                <Calendar className="w-4 h-4 text-[#D5CEBF]" />
                <span>Arrange a Visit</span>
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="px-6 py-3.5 border border-[#233B31] text-[#233B31] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#233B31] hover:text-white transition-colors"
                id="hero-learn-more-btn"
              >
                Our 40-Year Story
              </button>

              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="text-xs uppercase tracking-wider text-[#5F6B65] hover:text-[#1C2622] flex items-center gap-1.5 py-2 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#233B31]" />
                <span>{BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>

            {/* Reassuring Note */}
            <div className="pt-6 border-t border-[#E5DFC5] flex flex-wrap items-center gap-6 text-xs text-[#5F6B65]">
              <span className="flex items-center gap-1.5 font-medium text-[#1C2622]">
                <ShieldCheck className="w-4 h-4 text-[#233B31]" />
                Eastern Health Subsidized
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#233B31]" />
                15 Adult Residents Max
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#8C705B]" />
                Certified PCA Staff
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Building Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Real Building Photo Frame */}
              <div className="relative overflow-hidden rounded-md border border-[#E5DFC5] bg-[#FAF8F5] shadow-md aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3]">
                <img
                  src={hiHavenExterior}
                  alt="Hi Haven Manor building in Holyrood, Newfoundland with colorful lawn chairs"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2622]/80 via-transparent to-transparent"></div>
                
                {/* Photo Annotation Overlay */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D5CEBF] font-semibold flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B5A493]" />
                    36 Butterpot Road • Holyrood, NL A0A 2R0
                  </span>
                  <p className="text-xs sm:text-sm font-serif italic text-[#FAF8F5]">
                    Hi Haven Manor — Nestled in the trees, only 30 minutes from St. John’s
                  </p>
                </div>
              </div>

              {/* Floating Reassurance Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-5 shadow-md border border-[#E5DFC5] max-w-[260px] rounded-sm">
                <div className="flex items-center gap-1.5 mb-1 text-[#233B31]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">A Surrogate Family Setting</span>
                </div>
                <p className="text-xs text-[#5F6B65] leading-relaxed">
                  Home cooked meals, weekly doctor visits, in-house canteen & supportive community living.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Community Pillars Row */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#E5DFC5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CORE_PILLARS.map((pillar) => (
            <div key={pillar.number} className="bg-white p-6 border border-[#E5DFC5] flex flex-col justify-between">
              <div>
                <span className="text-xs font-serif text-[#8C705B] block mb-2 font-medium">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-lg font-normal text-[#1C2622] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5F6B65] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


