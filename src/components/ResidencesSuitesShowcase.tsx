import React, { useState } from 'react';
import { RESIDENCE_SPACES } from '../data/hiHavenData';
import { ResidenceSuite } from '../types';
import { Check, Maximize2, Shield, Eye, Calendar, Sparkles, X, Home, CheckCircle2 } from 'lucide-react';

interface ResidencesSuitesShowcaseProps {
  onOpenTourModal: (suiteName?: string) => void;
}

export const ResidencesSuitesShowcase: React.FC<ResidencesSuitesShowcaseProps> = ({ onOpenTourModal }) => {
  const [selectedSuiteForDetails, setSelectedSuiteForDetails] = useState<ResidenceSuite | null>(null);

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFC5]" id="residences" aria-labelledby="residences-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              THE 15-RESIDENT HOME
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="residences-heading">
            Comfortable, clean rooms with a genuine home feel.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            Our 15-resident home setting strikes a thoughtful balance between personal privacy and community connection. All accommodations include continuous PCA presence, regular housekeeping, laundry service, and full home-cooked meals.
          </p>
        </div>

        {/* Suites & Living Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESIDENCE_SPACES.map((suite, index) => {
            const numberLabel = `0${index + 1}`;
            return (
              <article
                key={suite.id}
                className="bg-white border border-[#E5DFC5] flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
                id={`suite-card-${suite.id}`}
              >
                {/* Image Box */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[#F3EFEA] border-b border-[#E5DFC5]">
                  <img
                    src={suite.image}
                    alt={suite.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#233B31] text-[#FAF8F5] text-[9px] font-medium tracking-[0.15em] uppercase px-2.5 py-1">
                    {suite.tier}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-serif text-xl font-normal text-[#1C2622]">
                        {suite.name}
                      </h3>
                      <span className="font-serif text-sm text-[#8C705B]">
                        {numberLabel}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#5F6B65] uppercase tracking-wider mb-3 font-medium">
                      {suite.view}
                    </p>
                    
                    <p className="text-xs text-[#5F6B65] leading-relaxed mb-5 font-light">
                      {suite.description}
                    </p>

                    {/* Key Inclusions */}
                    <div className="space-y-1.5 mb-6 pt-4 border-t border-[#E5DFC5]/60">
                      {suite.amenities.slice(0, 3).map((amenity, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#5F6B65]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#233B31] flex-shrink-0 mt-1.5"></span>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#E5DFC5] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedSuiteForDetails(suite)}
                      className="text-[11px] uppercase tracking-wider text-[#233B31] hover:text-[#1C2622] font-medium underline underline-offset-4"
                    >
                      Room Details
                    </button>

                    <button
                      onClick={() => onOpenTourModal(suite.name)}
                      className="bg-[#233B31] text-[#FAF8F5] px-4 py-2 text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors"
                    >
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 bg-[#F3EFEA] border border-[#E5DFC5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-lg text-[#1C2622] mb-1">
              Looking for current bed availability or room options?
            </h4>
            <p className="text-xs text-[#5F6B65] font-light">
              We welcome families, health case managers, and prospective residents to call us directly for up-to-date vacancy information.
            </p>
          </div>
          <button
            onClick={() => onOpenTourModal()}
            className="bg-[#233B31] text-[#FAF8F5] px-6 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors whitespace-nowrap"
          >
            Check Bed Availability
          </button>
        </div>

        {/* Suite Details Modal */}
        {selectedSuiteForDetails && (
          <div className="fixed inset-0 bg-[#1C2622]/70 backdrop-blur-xs z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <div className="bg-[#FAF8F5] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E5DFC5] p-6 sm:p-8 relative shadow-lg">
              <button
                onClick={() => setSelectedSuiteForDetails(null)}
                className="absolute top-5 right-5 p-2 text-[#5F6B65] hover:text-[#1C2622] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] bg-[#E8E1D5] text-[#1C2622] px-2.5 py-1">
                  {selectedSuiteForDetails.tier}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C2622] mt-3">
                  {selectedSuiteForDetails.name}
                </h3>
                <p className="text-xs text-[#5F6B65] uppercase tracking-wider mt-1 font-medium">
                  {selectedSuiteForDetails.view}
                </p>
              </div>

              <div className="overflow-hidden h-60 mb-6 border border-[#E5DFC5]">
                <img
                  src={selectedSuiteForDetails.image}
                  alt={selectedSuiteForDetails.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-xs sm:text-sm text-[#5F6B65] leading-relaxed mb-6 font-light">
                {selectedSuiteForDetails.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 border border-[#E5DFC5]">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C2622] mb-3">
                    Room Features & Amenities:
                  </h4>
                  <ul className="space-y-2">
                    {selectedSuiteForDetails.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#5F6B65]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#233B31] flex-shrink-0 mt-1.5"></span>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-5 border border-[#E5DFC5]">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1C2622] mb-3">
                    Care & Safety Inclusions:
                  </h4>
                  <ul className="space-y-2">
                    {selectedSuiteForDetails.safetyFeatures.map((safety, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#5F6B65]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C705B] flex-shrink-0 mt-1.5"></span>
                        <span>{safety}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setSelectedSuiteForDetails(null);
                    onOpenTourModal(selectedSuiteForDetails.name);
                  }}
                  className="bg-[#233B31] text-[#FAF8F5] px-6 py-3 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors"
                >
                  Arrange a Visit to View {selectedSuiteForDetails.name}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

