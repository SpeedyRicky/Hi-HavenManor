import React from 'react';
import { CARE_PROGRAMS } from '../data/hiHavenData';
import { HeartPulse, Brain, Sun, Utensils, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface CareProgramsGridProps {
  onOpenTourModal: (programTitle?: string) => void;
}

export const CareProgramsGrid: React.FC<CareProgramsGridProps> = ({ onOpenTourModal }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'personal-care-l1-l2':
        return <HeartPulse className="w-6 h-6" />;
      case 'supportive-mental-health':
        return <Brain className="w-6 h-6" />;
      case 'respite-care':
        return <Sun className="w-6 h-6" />;
      case 'culinary-wellness':
        return <Utensils className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section className="care-programs-section-wrapper" id="care-programs" aria-labelledby="care-programs-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">Our Dedicated Services</span>
        <h2 className="section-display-heading" id="care-programs-heading">
          Comprehensive Care Rooted in Dignity
        </h2>
        <p className="section-lead-explanation">
          From full assistance with daily personal routines to specialized adult mental health recovery and wholesome home-cooked nutrition, our services honor the individual.
        </p>
      </div>

      <div className="care-programs-responsive-grid">
        {CARE_PROGRAMS.map((program) => (
          <article
            key={program.id}
            className="program-editorial-card-article"
            id={`program-card-${program.id}`}
          >
            <div>
              <div className="program-icon-badge-box">
                {getIcon(program.id)}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#78623A] bg-[#F4EFE8] px-2 py-0.5 rounded border border-[#9B8258]/20">
                  {program.careLevel}
                </span>
              </div>

              <h3 className="program-card-title">
                {program.title}
              </h3>

              <p className="program-card-description">
                {program.shortDescription}
              </p>

              <div className="space-y-2 mb-6 pt-3 border-t border-[#E8E0D5]">
                {program.keyFeatures.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#46554D]">
                    <Check className="w-3.5 h-3.5 text-[#78623A] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E0D5] flex items-center justify-between">
              <button
                onClick={() => onOpenTourModal(program.title)}
                className="text-xs font-semibold text-[#171E1C] hover:text-[#78623A] flex items-center gap-1.5 transition-colors"
              >
                <span>Inquire About Care</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-[#8C7E6F]">24/7 Attendants</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
