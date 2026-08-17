import React from 'react';
import { CARE_PROGRAMS } from '../data/hiHavenData';
import { HeartPulse, Brain, Sun, Utensils, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface CareProgramsGridProps {
  onOpenTourModal: (programTitle?: string) => void;
}

export const CareProgramsGrid: React.FC<CareProgramsGridProps> = ({ onOpenTourModal }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'personal-care-l1-l2':
        return <HeartPulse className="w-5 h-5 text-[#233B31]" />;
      case 'supportive-mental-health':
        return <Brain className="w-5 h-5 text-[#233B31]" />;
      case 'respite-care':
        return <Sun className="w-5 h-5 text-[#233B31]" />;
      case 'culinary-wellness':
        return <Utensils className="w-5 h-5 text-[#233B31]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#233B31]" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F3EFEA] border-b border-[#E5DFC5]" id="care-programs" aria-labelledby="care-programs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              OUR APPROACH TO CARE
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="care-programs-heading">
            Dignity, stability, and personalized daily support.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            We meet residents where they are. Whether someone needs assistance with daily medications and bathing, a calm routine for mental health stability, or home-cooked meals tailored to dietary requirements, our dedicated staff provides compassionate care.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CARE_PROGRAMS.map((program, index) => {
            const numberLabel = `0${index + 1}`;
            return (
              <article
                key={program.id}
                className="bg-white p-7 border border-[#E5DFC5] flex flex-col justify-between hover:shadow-xs transition-shadow"
                id={`program-card-${program.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#E5DFC5] flex items-center justify-center">
                      {getIcon(program.id)}
                    </div>
                    <span className="text-sm font-serif text-[#8C705B]">
                      {numberLabel}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#5F6B65] block mb-1">
                    {program.careLevel}
                  </span>

                  <h3 className="font-serif text-xl font-normal text-[#1C2622] mb-3 leading-snug">
                    {program.title}
                  </h3>

                  <p className="text-xs text-[#5F6B65] leading-relaxed mb-6 font-light">
                    {program.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#E5DFC5]/60">
                    {program.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#5F6B65]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#233B31] flex-shrink-0 mt-1.5"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5DFC5] flex items-center justify-between">
                  <button
                    onClick={() => onOpenTourModal(program.title)}
                    className="text-[11px] uppercase tracking-wider font-medium text-[#233B31] hover:text-[#1C2622] flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <span className="text-[10px] uppercase tracking-wider text-[#8C9993]">24/7 Staff</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

