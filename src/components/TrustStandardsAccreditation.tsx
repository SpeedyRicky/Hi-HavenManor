import React from 'react';
import { ACCREDITATION_STANDARDS } from '../data/hiHavenData';
import { ShieldCheck, CheckCircle2, Award, FileCheck, Landmark, Check } from 'lucide-react';

export const TrustStandardsAccreditation: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F3EFEA] border-b border-[#E5DFC5]" id="standards" aria-labelledby="standards-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              STANDARDS & ACCREDITATION
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="standards-heading">
            Licensed care you can trust with confidence.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            Trust is earned through transparency and accountability. Hi Haven Manor operates under strict Provincial Personal Care Home standards, routine public health and fire safety inspections, and verified staff credentialing.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCREDITATION_STANDARDS.map((standard, index) => {
            const numberLabel = `0${index + 1}`;
            return (
              <div
                key={standard.id}
                className="bg-white p-6 border border-[#E5DFC5] flex flex-col justify-between"
                id={`standard-card-${standard.id}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#233B31] bg-[#FAF8F5] px-2.5 py-1 border border-[#E5DFC5]">
                      {standard.status}
                    </span>
                    <span className="text-xs font-serif text-[#8C705B]">
                      {numberLabel}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-normal text-[#1C2622] mb-1">
                    {standard.title}
                  </h3>

                  <p className="text-[10px] uppercase tracking-wider text-[#5F6B65] font-medium mb-3 flex items-center gap-1">
                    <Landmark className="w-3 h-3 text-[#233B31]" />
                    <span>{standard.authority}</span>
                  </p>

                  <p className="text-xs text-[#5F6B65] leading-relaxed mb-5 font-light">
                    {standard.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DFC5]/60">
                  <ul className="space-y-2">
                    {standard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#5F6B65]">
                        <Check className="w-3.5 h-3.5 text-[#233B31] mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

