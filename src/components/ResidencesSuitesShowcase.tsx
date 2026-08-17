import React, { useState } from 'react';
import { RESIDENCE_SUITES } from '../data/hiHavenData';
import { ResidenceSuite } from '../types';
import { Check, Maximize2, Shield, Eye, Calendar, Sparkles, X } from 'lucide-react';

interface ResidencesSuitesShowcaseProps {
  onOpenTourModal: (suiteName?: string) => void;
}

export const ResidencesSuitesShowcase: React.FC<ResidencesSuitesShowcaseProps> = ({ onOpenTourModal }) => {
  const [selectedSuiteForDetails, setSelectedSuiteForDetails] = useState<ResidenceSuite | null>(null);

  return (
    <section className="residences-section-wrapper" id="residences" aria-labelledby="residences-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">Accommodations & Living Spaces</span>
        <h2 className="section-display-heading" id="residences-heading">
          Sanctuary Living Designed for Comfort & Safety
        </h2>
        <p className="section-lead-explanation">
          Every suite at Hi Haven is crafted with barrier-free accessibility, emergency call monitoring, warm natural finishes, and expansive windows welcoming Newfoundland daylight.
        </p>
      </div>

      <div className="residences-cards-grid">
        {RESIDENCE_SUITES.map((suite) => (
          <article
            key={suite.id}
            className="suite-editorial-card-article"
            id={`suite-card-${suite.id}`}
          >
            {/* Image Preview */}
            <div className="suite-card-image-box">
              <img
                src={suite.image}
                alt={suite.imageAlt}
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-[#171E1C]/90 text-white text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-sm border border-white/15">
                {suite.tier}
              </div>
              <div className="absolute bottom-3 right-3 bg-white/95 text-[#171E1C] text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
                {suite.squareFeet}
              </div>
            </div>

            {/* Suite Content */}
            <div className="suite-card-body-content">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#171E1C] mb-1.5">
                  {suite.name}
                </h3>
                <p className="text-xs text-[#78623A] font-medium mb-3 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{suite.view}</span>
                </p>
                <p className="text-xs text-[#55645D] leading-relaxed mb-4">
                  {suite.description}
                </p>

                {/* Key Amenities */}
                <div className="space-y-1.5 mb-6">
                  {suite.amenities.slice(0, 3).map((amenity, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#384640]">
                      <Check className="w-3.5 h-3.5 text-[#78623A] flex-shrink-0 mt-0.5" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8E0D5] flex items-center gap-2 justify-between">
                <button
                  onClick={() => setSelectedSuiteForDetails(suite)}
                  className="text-xs font-semibold text-[#78623A] hover:text-[#171E1C] flex items-center gap-1 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Specifications</span>
                </button>

                <button
                  onClick={() => onOpenTourModal(suite.name)}
                  className="luxury-button-primary text-xs py-2 px-3.5"
                >
                  <span>Book Tour</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Suite Details Modal */}
      {selectedSuiteForDetails && (
        <div className="fixed inset-0 bg-[#121715]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="bg-[#FAF7F2] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#9B8258]/30 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedSuiteForDetails(null)}
              className="absolute top-4 right-4 p-2 text-[#55645D] hover:text-[#171E1C] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#78623A] bg-[#F4EFE8] px-3 py-1 rounded border border-[#9B8258]/20">
                {selectedSuiteForDetails.tier}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171E1C] mt-2">
                {selectedSuiteForDetails.name}
              </h3>
              <p className="text-xs text-[#55645D] mt-1">
                {selectedSuiteForDetails.squareFeet} • {selectedSuiteForDetails.view}
              </p>
            </div>

            <div className="rounded-lg overflow-hidden h-64 mb-6 border border-[#E8E0D5]">
              <img
                src={selectedSuiteForDetails.image}
                alt={selectedSuiteForDetails.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#46554D] leading-relaxed mb-6">
              {selectedSuiteForDetails.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-[#E8E0D5]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#171E1C] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#9B8258]" />
                  Suite Inclusions & Amenities:
                </h4>
                <ul className="space-y-2">
                  {selectedSuiteForDetails.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#384640]">
                      <Check className="w-3.5 h-3.5 text-[#78623A] flex-shrink-0 mt-0.5" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-[#E8E0D5]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#171E1C] mb-3 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#9B8258]" />
                  Safety & Emergency Specs:
                </h4>
                <ul className="space-y-2">
                  {selectedSuiteForDetails.safetyFeatures.map((safety, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#384640]">
                      <Check className="w-3.5 h-3.5 text-[#78623A] flex-shrink-0 mt-0.5" />
                      <span>{safety}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#F4EFE8] p-4 rounded-lg border border-[#9B8258]/20 mb-6 text-xs text-[#46554D]">
              <strong className="block text-[#171E1C] font-semibold mb-1">Floor Plan & Layout Details:</strong>
              <p>{selectedSuiteForDetails.floorPlanDetails}</p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#E8E0D5]">
              <button
                onClick={() => setSelectedSuiteForDetails(null)}
                className="luxury-button-secondary text-xs py-2.5 px-4"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  const suiteName = selectedSuiteForDetails.name;
                  setSelectedSuiteForDetails(null);
                  onOpenTourModal(suiteName);
                }}
                className="luxury-button-primary text-xs py-2.5 px-5"
              >
                <Calendar className="w-4 h-4 text-[#9B8258]" />
                <span>Reserve a Tour of this Suite</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
