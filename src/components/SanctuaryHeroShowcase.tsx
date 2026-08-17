import React from 'react';
import { Calendar, Phone, ArrowDown, ShieldCheck, Heart, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, CORE_PILLARS } from '../data/hiHavenData';

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
                COMMUNITY CARE • HOLYROOD, NEWFOUNDLAND
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[68px] leading-[1.05] font-serif text-[#1C2622] font-normal mb-6 tracking-tight" id="sanctuary-hero-heading">
              A place to feel at home.
            </h1>

            <p className="text-[#5F6B65] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light">
              <strong>Hi Haven Manor</strong> is a 17-bed community care home in Holyrood providing a supportive, respectful residential environment for individuals living with mental health and addiction-related challenges, as well as those needing daily personal care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
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
                Learn About Hi Haven
              </button>

              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="text-xs uppercase tracking-wider text-[#5F6B65] hover:text-[#1C2622] flex items-center gap-1.5 py-2 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#233B31]" />
                <span>{BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>

            {/* Reassuring Note */}
            <div className="pt-6 border-t border-[#E5DFC5] flex flex-wrap items-center gap-6 text-xs text-[#5F6B65]">
              <span className="flex items-center gap-1.5 font-medium text-[#1C2622]">
                <ShieldCheck className="w-4 h-4 text-[#233B31]" />
                Provincially Licensed Home
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#233B31]" />
                17-Bed Intimate Setting
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#8C705B]" />
                Lori & Rob Condon, Founders
              </span>
            </div>
          </div>

          {/* Right Column: Warm Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-md border border-[#E5DFC5] bg-[#FAF8F5] shadow-md aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80"
                  alt="Scenic natural peaceful setting of Holyrood, Newfoundland near Butter Pot"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2622]/70 via-[#1C2622]/10 to-transparent"></div>
                
                {/* Photo Annotation Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D5CEBF] font-semibold flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B5A493]" />
                    36 Butter Pot Road • Holyrood, NL
                  </span>
                  <p className="text-sm font-serif italic text-[#FAF8F5]">
                    "A calm, natural setting where you are treated with dignity, kindness, and respect."
                  </p>
                </div>
              </div>

              {/* Floating Reassurance Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-5 sm:p-6 shadow-md border border-[#E5DFC5] max-w-[240px] rounded-sm">
                <div className="flex items-center gap-2 mb-1 text-[#233B31]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">A Genuine Home</span>
                </div>
                <p className="text-xs text-[#5F6B65] leading-relaxed">
                  Home-cooked meals, private and semi-private rooms, and 24/7 caring staff.
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

