import React from 'react';
import { ACCREDITATION_STANDARDS } from '../data/hiHavenData';
import { ShieldCheck, CheckCircle2, Award, FileCheck, Landmark } from 'lucide-react';

export const TrustStandardsAccreditation: React.FC = () => {
  return (
    <section className="trust-standards-section-wrapper" id="standards" aria-labelledby="standards-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">Accountability & Standards</span>
        <h2 className="section-display-heading" id="standards-heading">
          Licensed Excellence & Uncompromising Safety
        </h2>
        <p className="section-lead-explanation">
          Trust is earned through transparency. Hi Haven adheres strictly to Provincial Personal Care Home Operational Standards, continuous regulatory oversight, and exhaustive staff credentialing.
        </p>
      </div>

      <div className="standards-responsive-grid">
        {ACCREDITATION_STANDARDS.map((standard) => (
          <div
            key={standard.id}
            className="standard-card-box"
            id={`standard-card-${standard.id}`}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#78623A] bg-[#F4EFE8] px-3 py-1 rounded-full border border-[#9B8258]/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {standard.status}
              </span>
              <ShieldCheck className="w-5 h-5 text-[#9B8258]" />
            </div>

            <h3 className="font-serif text-xl font-bold text-[#171E1C] mb-1">
              {standard.title}
            </h3>

            <p className="text-xs text-[#78623A] font-semibold mb-3 flex items-center gap-1">
              <Landmark className="w-3.5 h-3.5" />
              <span>{standard.authority}</span>
            </p>

            <p className="text-xs text-[#55645D] leading-relaxed mb-4">
              {standard.description}
            </p>

            <div className="pt-3 border-t border-[#E8E0D5]">
              <ul className="space-y-1.5">
                {standard.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#384640]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B8258] mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
