import React from 'react';
import { BUSINESS_INFO, ABOUT_US_STORY } from '../data/hiHavenData';
import { ShieldCheck, HeartHandshake, Home, MapPin, Award, Users, CheckCircle2, Stethoscope, Sparkles } from 'lucide-react';
import hiHavenExterior from '../assets/images/hi_haven_exact_screenshot.png';


export const HeritageStorySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F3EFEA] border-b border-[#E5DFC5]" id="about" aria-labelledby="heritage-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Portrait & History Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-md border border-[#E5DFC5] bg-white shadow-sm aspect-[4/3]">
                <img
                  src={hiHavenExterior}
                  alt="Hi Haven Manor building nestled in trees in Holyrood, NL"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Heritage Note Card */}
              <div className="mt-6 bg-white p-6 sm:p-7 border border-[#E5DFC5] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C705B] font-bold">
                    40+ Year Holyrood Heritage
                  </span>
                  <span className="text-[11px] bg-[#FAF8F5] text-[#233B31] font-semibold px-2 py-0.5 border border-[#E5DFC5]">
                    Updated 2015
                  </span>
                </div>
                <p className="text-sm font-serif text-[#1C2622] italic leading-relaxed">
                  "We offer a long-term home and surrogate family setting where every resident is treated with dignity, kindness, and personal respect."
                </p>
                <div className="mt-3 pt-3 border-t border-[#E5DFC5]/60 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider text-[#5F6B65] font-medium">
                    Hi Haven Manor • Holyrood, NL
                  </p>
                  <span className="text-[11px] text-[#233B31] font-medium">15 Beds Max</span>
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
              {ABOUT_US_STORY.headline}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
              <p>
                <strong>Hi Haven Manor</strong> has been a family-run business in Holyrood for over 40 years. Originally, the property was a beloved tavern and motel with cabins for visitors to stay in and grounds for camping. Following the closure of the local refinery, Hi Haven Manor was transitioned into a dedicated residential care home.
              </p>

              <p>
                In <strong>2015</strong>, it came under new owners and management who made extensive updates and modern renovations to the building, accommodations, and community facilities.
              </p>

              <p>
                Operating under the <strong>Mental Health and Addiction program of Eastern Health (NL Health Services)</strong>, our program is <strong>government subsidized</strong>, meaning that potential residents and their families can apply for provincial financing.
              </p>


              <p>
                We aim to provide a comprehensive care plan for each of our residents through supportive, recreational, medical, and psychosocial services. We assist residents to reach their maximum potential for growth and self-determination in a comfortable, surrogate family setting.
              </p>

              <p>
                We are also delighted to note that several of our staff members have completed their certified <strong>PCA (Personal Care Attendant)</strong> course, ensuring knowledgeable and compassionate daily care.
              </p>
            </div>

            {/* 3 Core Operational Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#E5DFC5]">
              <div className="bg-white p-4 border border-[#E5DFC5]">
                <div className="flex items-center gap-1.5 mb-1.5 text-[#233B31]">
                  <Users className="w-4 h-4" />
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C2622]">Surrogate Family</h3>
                </div>
                <p className="text-xs text-[#5F6B65] font-light leading-relaxed">
                  Treating each resident and staff member as family, with visits from loved ones warmly encouraged.
                </p>
              </div>

              <div className="bg-white p-4 border border-[#E5DFC5]">
                <div className="flex items-center gap-1.5 mb-1.5 text-[#233B31]">
                  <Stethoscope className="w-4 h-4" />
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C2622]">Weekly Doctor & PCAs</h3>
                </div>
                <p className="text-xs text-[#5F6B65] font-light leading-relaxed">
                  Weekly community General Practitioner visits, psychiatric specialist access, and certified PCAs.
                </p>
              </div>

              <div className="bg-white p-4 border border-[#E5DFC5]">
                <div className="flex items-center gap-1.5 mb-1.5 text-[#233B31]">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C2622]">Self-Determination</h3>
                </div>
                <p className="text-xs text-[#5F6B65] font-light leading-relaxed">
                  Supervision is no greater than necessary with the goal of active integration into the community.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


