import React from 'react';
import { BUSINESS_INFO } from '../data/hiHavenData';
import { ShieldCheck, HeartHandshake, Home, MapPin, Award, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeritageStorySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F3EFEA] border-b border-[#E5DFC5]" id="about" aria-labelledby="heritage-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Portrait & Quotation Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-md border border-[#E5DFC5] bg-white shadow-sm aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
                  alt="Warm, sunlit communal living room with armchairs and books at Hi Haven Manor"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Founder Quote Card */}
              <div className="mt-6 bg-white p-6 sm:p-7 border border-[#E5DFC5] shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C705B] font-bold">A Note from Our Founders</span>
                </div>
                <p className="text-sm font-serif text-[#1C2622] italic leading-relaxed">
                  "We set out over 20 years ago to create a place where care is never an institutional routine, but a genuine expression of warmth, safety, and mutual respect."
                </p>
                <div className="mt-3 pt-3 border-t border-[#E5DFC5]/60 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider text-[#5F6B65] font-medium">
                    — {BUSINESS_INFO.owners}
                  </p>
                  <span className="text-[11px] text-[#8C705B] font-serif">Est. {BUSINESS_INFO.foundedYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
                ABOUT HI HAVEN MANOR
              </span>
              <div className="h-[1px] w-8 bg-[#233B31]"></div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-6" id="heritage-heading">
              A home, not an institution.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
              <p>
                Founded under <em>{BUSINESS_INFO.legalName}</em>, Hi Haven Manor was created with a heartfelt conviction: that individuals living with mental health challenges, substance use recovery journeys, or personal care needs thrive best when supported in a genuine, comfortable home.
              </p>

              <p>
                Located along peaceful <strong>Butter Pot Road in Holyrood</strong>, our residence was specifically chosen for its quiet woodland surroundings, fresh coastal-forest air, and calming separation from noise—while remaining just 30 minutes from St. John's regional healthcare centres.
              </p>

              <p>
                Because we limit our residence to <strong>17 beds</strong>, no one gets lost in the crowd. Our attendants know each resident's name, daily preferences, favorite meals, and personal story.
              </p>
            </div>

            {/* 3 Key Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 pt-8 border-t border-[#E5DFC5]">
              <div className="bg-white p-4 border border-[#E5DFC5]">
                <span className="text-xs font-serif text-[#8C705B] font-medium block mb-1">01</span>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C2622] mb-1">Hands-On Guidance</h3>
                <p className="text-xs text-[#5F6B65] font-light leading-relaxed">Direct daily involvement by Lori & Rob Condon in meal quality, care, and resident well-being.</p>
              </div>

              <div className="bg-white p-4 border border-[#E5DFC5]">
                <span className="text-xs font-serif text-[#8C705B] font-medium block mb-1">02</span>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C2622] mb-1">Provincial Standards</h3>
                <p className="text-xs text-[#5F6B65] font-light leading-relaxed">Fully licensed and inspected personal care home adhering to NL Health Services guidelines.</p>
              </div>

              <div className="bg-white p-4 border border-[#E5DFC5]">
                <span className="text-xs font-serif text-[#8C705B] font-medium block mb-1">03</span>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C2622] mb-1">Trauma-Informed Care</h3>
                <p className="text-xs text-[#5F6B65] font-light leading-relaxed">Compassionate, non-judgmental support respecting every resident's individuality and dignity.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

