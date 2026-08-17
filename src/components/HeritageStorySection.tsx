import React from 'react';
import { BUSINESS_INFO } from '../data/hiHavenData';
import { ShieldCheck, HeartHandshake, Home, MapPin, Award } from 'lucide-react';

export const HeritageStorySection: React.FC = () => {
  return (
    <section className="heritage-story-section-wrapper" id="heritage" aria-labelledby="heritage-heading">
      <div className="heritage-story-grid-container">
        {/* Left Column: Visual Portrait & Legacy Plaque */}
        <div className="heritage-portrait-frame-box">
          <img
            src="https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80"
            alt="Scenic mountain sanctuary landscape in Holyrood near Butter Pot"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111614] via-[#111614]/30 to-transparent flex flex-col justify-end p-8">
            <div className="bg-[#171E1C]/90 backdrop-blur-md p-5 rounded-lg border border-[#9B8258]/30 max-w-md">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#9B8258]" />
                <span className="text-xs uppercase tracking-widest text-[#9B8258] font-bold">20+ Year Legacy</span>
              </div>
              <p className="text-sm font-serif text-[#FAF7F2] italic">
                "We set out to create a sanctuary where care is never an institutional transaction, but a genuine expression of family warmth."
              </p>
              <p className="text-xs text-[#C8BCAC] mt-2 font-medium">
                — {BUSINESS_INFO.owners}, Founders & Directors
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Values */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9B8258] mb-3">
            <Home className="w-4 h-4" />
            <span>OUR STORY & PHILOSOPHY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#FAF7F2] leading-tight mb-6" id="heritage-heading">
            More than a facility — a true Newfoundland sanctuary.
          </h2>

          <div className="space-y-4 text-base text-[#C8BCAC] leading-relaxed">
            <p>
              Founded under <em>{BUSINESS_INFO.legalName}</em>, Hi Haven was born from a fundamental belief: that adults and seniors requiring daily personal assistance or mental health stabilization thrive most in an environment filled with natural serenity, respect, and human connection.
            </p>

            <p>
              Located along Butter Pot Road in Holyrood, our setting was intentionally chosen for its tranquil woodland atmosphere, crisp Atlantic air, and peaceful separation from high-stress urban noise—while remaining just 30 minutes from St. John's medical facilities.
            </p>

            <p>
              Under the continuous leadership of <strong>{BUSINESS_INFO.owners}</strong>, Hi Haven has earned an enduring reputation across Newfoundland for unwavering reliability, meticulous provincial standards compliance, and care attendants who know every resident by name, preference, and personal history.
            </p>
          </div>

          {/* Pillars List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/5 text-[#9B8258] border border-white/10 flex-shrink-0 mt-1">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Family-First Leadership</h3>
                <p className="text-xs text-[#A89C8C] mt-0.5">Direct owner involvement in everyday operations and resident well-being.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/5 text-[#9B8258] border border-white/10 flex-shrink-0 mt-1">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Provincial Standards</h3>
                <p className="text-xs text-[#A89C8C] mt-0.5">Licensed institutional personal care home inspected and approved by NL Health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
