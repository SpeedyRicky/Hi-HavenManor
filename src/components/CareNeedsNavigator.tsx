import React, { useState } from 'react';
import { CARE_PROGRAMS } from '../data/hiHavenData';
import { CareProgram } from '../types';
import { Check, ShieldCheck, Users, Clock, ArrowRight, Calendar, Heart } from 'lucide-react';

interface CareNeedsNavigatorProps {
  onOpenTourModal: (programTitle?: string) => void;
}

export const CareNeedsNavigator: React.FC<CareNeedsNavigatorProps> = ({ onOpenTourModal }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(CARE_PROGRAMS[0].id);

  const currentProgram: CareProgram =
    CARE_PROGRAMS.find((p) => p.id === selectedProgramId) || CARE_PROGRAMS[0];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFC5]" id="care-advisor" aria-labelledby="care-advisor-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              CARE EXPLORER
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="care-advisor-heading">
            Explore our specific care frameworks.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            Click each program below to understand daily staff presence, personal care routines, dietary inclusions, and eligibility for NL Health Services subsidies.
          </p>
        </div>

        {/* Program Selection Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Care program options">
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
                className={`px-4 py-2.5 text-xs uppercase tracking-wider font-medium transition-all ${
                  isActive
                    ? 'bg-[#233B31] text-[#FAF8F5] shadow-xs'
                    : 'bg-white text-[#5F6B65] border border-[#E5DFC5] hover:border-[#233B31] hover:text-[#1C2622]'
                }`}
              >
                <span>{program.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Program Detail Panel */}
        <div className="bg-white border border-[#E5DFC5] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-xs" id={`panel-${currentProgram.id}`} role="tabpanel" aria-labelledby={`tab-${currentProgram.id}`}>
          
          {/* Content Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#FAF8F5] text-[#233B31] px-2.5 py-1 border border-[#E5DFC5]">
                  {currentProgram.careLevel}
                </span>
                <span className="text-xs text-[#5F6B65] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#233B31]" />
                  Provincially Licensed Standards
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C2622] mb-3">
                {currentProgram.title}
              </h3>

              <p className="text-sm text-[#5F6B65] leading-relaxed mb-6 font-light">
                {currentProgram.fullDescription}
              </p>

              {/* Inclusions Box */}
              <div className="mb-6 bg-[#FAF8F5] p-5 sm:p-6 border border-[#E5DFC5]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C2622] mb-3">
                  What is included in this care:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentProgram.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#5F6B65]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#233B31] flex-shrink-0 mt-1.5"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Staffing & Eligibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5F6B65] mb-6 pt-4 border-t border-[#E5DFC5]/60">
                <div>
                  <strong className="block text-[#1C2622] font-semibold mb-0.5">Staffing & Oversight:</strong>
                  <span>{currentProgram.staffingRatio}</span>
                </div>
                <div>
                  <strong className="block text-[#1C2622] font-semibold mb-0.5">Admission / Referral:</strong>
                  <span>{currentProgram.eligibility}</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E5DFC5]">
              <button
                onClick={() => onOpenTourModal(currentProgram.title)}
                className="bg-[#233B31] text-[#FAF8F5] px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors"
                id="care-program-tour-btn"
              >
                <span>Inquire About {currentProgram.title}</span>
              </button>

              <a
                href="#admissions"
                className="text-xs uppercase tracking-wider text-[#233B31] hover:text-[#1C2622] font-medium underline underline-offset-4"
              >
                View Admission Steps
              </a>
            </div>
          </div>

          {/* Media Side */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-auto bg-[#F3EFEA] border-t lg:border-t-0 lg:border-l border-[#E5DFC5]">
            <img
              src={currentProgram.image}
              alt={currentProgram.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2622]/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D5CEBF] font-semibold">
                  Hi Haven Manor • Holyrood
                </span>
                <p className="font-serif italic text-base text-[#FAF8F5] mt-1">
                  "{currentProgram.shortDescription}"
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

