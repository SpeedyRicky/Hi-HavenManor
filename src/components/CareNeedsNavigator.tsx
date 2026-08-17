import React, { useState } from 'react';
import { CARE_PROGRAMS } from '../data/hiHavenData';
import { CareProgram } from '../types';
import { Check, ShieldCheck, Users, Clock, ArrowRight, Calendar } from 'lucide-react';

interface CareNeedsNavigatorProps {
  onOpenTourModal: (programTitle?: string) => void;
}

export const CareNeedsNavigator: React.FC<CareNeedsNavigatorProps> = ({ onOpenTourModal }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(CARE_PROGRAMS[0].id);

  const currentProgram: CareProgram =
    CARE_PROGRAMS.find((p) => p.id === selectedProgramId) || CARE_PROGRAMS[0];

  return (
    <section className="care-advisor-interactive-section" id="care-advisor" aria-labelledby="care-advisor-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">Interactive Care Navigator</span>
        <h2 className="section-display-heading" id="care-advisor-heading">
          Tailored Care Programs for Every Chapter
        </h2>
        <p className="section-lead-explanation">
          Every individual has unique daily rhythms and health requirements. Select a program below to explore our licensed standards, specialized staffing, and supportive routines.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="care-tabs-navigation-row" role="tablist" aria-label="Care program options">
        {CARE_PROGRAMS.map((program) => {
          const isActive = program.id === selectedProgramId;
          return (
            <button
              key={program.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${program.id}`}
              id={`tab-${program.id}`}
              onClick={() => setSelectedProgramId(program.id)}
              className={`care-tab-pill-button ${isActive ? 'active' : ''}`}
            >
              <span>{program.title}</span>
            </button>
          );
        })}
      </div>

      {/* Program Detail Card */}
      <div className="care-program-detail-card-panel" id={`panel-${currentProgram.id}`} role="tabpanel" aria-labelledby={`tab-${currentProgram.id}`}>
        {/* Content Side */}
        <div className="care-card-content-side">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider bg-[#F4EFE8] text-[#78623A] px-3 py-1 rounded border border-[#9B8258]/30">
                {currentProgram.careLevel}
              </span>
              <span className="text-xs text-[#55645D] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9B8258]" />
                Accredited Program
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171E1C] mb-3">
              {currentProgram.title}
            </h3>

            <p className="text-base text-[#46554D] leading-relaxed mb-6">
              {currentProgram.fullDescription}
            </p>

            {/* Highlights Grid */}
            <div className="mb-6 bg-[#FAF7F2] p-4 sm:p-5 rounded-lg border border-[#9B8258]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171E1C] mb-3">
                Key Care Inclusions:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentProgram.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#384640]">
                    <Check className="w-4 h-4 text-[#78623A] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Staffing & Eligibility */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#55645D] mb-6 pt-4 border-t border-[#E8E0D5]">
              <div>
                <strong className="block text-[#171E1C] font-semibold mb-1">Staffing Model:</strong>
                <span>{currentProgram.staffingRatio}</span>
              </div>
              <div>
                <strong className="block text-[#171E1C] font-semibold mb-1">Admission Criteria:</strong>
                <span>{currentProgram.eligibility}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8E0D5]">
            <button
              onClick={() => onOpenTourModal(currentProgram.title)}
              className="luxury-button-primary text-xs sm:text-sm py-2.5 px-5"
              id="care-program-tour-btn"
            >
              <Calendar className="w-4 h-4 text-[#9B8258]" />
              <span>Book Tour for this Program</span>
            </button>

            <a
              href="#admissions"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#78623A] hover:text-[#171E1C] transition-colors"
            >
              <span>Review Admission Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Media Side */}
        <div className="care-card-media-side">
          <img
            src={currentProgram.image}
            alt={currentProgram.imageAlt}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141B18]/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <span className="text-xs uppercase tracking-widest text-[#D3C9BD] font-semibold">
                Hi Haven Living Standards
              </span>
              <p className="font-serif text-lg text-[#FAF7F2] mt-1 italic">
                "{currentProgram.shortDescription}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
