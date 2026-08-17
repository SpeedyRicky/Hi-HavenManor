import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, Heart, Sparkles, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hiHavenData';

interface CareAssessmentQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTourModal: () => void;
}

export const CareAssessmentQuizModal: React.FC<CareAssessmentQuizModalProps> = ({
  isOpen,
  onClose,
  onOpenTourModal,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    careType: 'personal-care',
    mobility: 'walker-assisted',
    medication: 'full-administration',
    timeline: 'immediate',
    contactName: '',
    contactPhone: '',
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getRecommendation = () => {
    if (answers.careType === 'mental-health') {
      return {
        title: 'Supportive Mental Health & Addiction Recovery Living',
        careLevel: 'Specialized Residential Care',
        summary: 'Hi Haven provides structured daily routines, 24/7 caring attendants, nutritious meals, and a calm Holyrood setting that respects individuality and promotes dignity.',
        nextStep: 'We recommend coordinating with your NL Health Services regional case manager or contacting Lori & Rob Condon directly for a confidential conversation.'
      };
    } else if (answers.careType === 'respite') {
      return {
        title: 'Short-Term Respite Care Stay',
        careLevel: 'Short-Term Community Care',
        summary: 'Fully furnished private bedroom, 3 home-cooked meals daily, and complete 24/7 personal care assistance for temporary family caregiver relief or recovery.',
        nextStep: 'Respite availability is managed on a rolling basis. Call us directly to check suite availability for your preferred dates.'
      };
    } else {
      return {
        title: 'Level 1 & Level 2 Personal Care Home Living',
        careLevel: 'Level 1 & 2 Provincial Care Home Standards',
        summary: 'Comprehensive assistance with daily living (bathing, dressing, grooming, mobility), home-cooked meals, daily laundry/housekeeping, and 24/7 supervised medication administration.',
        nextStep: 'Hi Haven accommodates both privately funded placements and government-subsidized residents through Newfoundland and Labrador Health Services.'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 bg-[#1C2622]/80 backdrop-blur-xs z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="bg-[#FAF8F5] max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E5DFC5] shadow-xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5F6B65] hover:text-[#1C2622] transition-colors"
          aria-label="Close quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#233B31] mb-2">
            <span>Care Needs Quiz</span>
            <span>Step {currentStep} of 4</span>
          </div>
          <div className="w-full h-1.5 bg-[#E5DFC5] overflow-hidden">
            <div
              className="h-full bg-[#233B31] transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Primary Need */}
        {currentStep === 1 && (
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#1C2622] mb-2">
              What is the primary support need?
            </h3>
            <p className="text-xs text-[#5F6B65] mb-6 font-light">
              Select the option that best reflects your loved one's current daily situation.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'personal-care',
                  title: 'Daily Living & Personal Care (Level 1 & 2)',
                  desc: 'Assistance needed with grooming, bathing, medication, or mobility while living in a supportive home setting.'
                },
                {
                  id: 'mental-health',
                  title: 'Mental Health & Addiction Recovery Support',
                  desc: 'A calm, supportive 17-bed home offering structured daily routines, community belonging, and compassionate care.'
                },
                {
                  id: 'respite',
                  title: 'Short-Term Respite Care Stay',
                  desc: 'Temporary stay (days to weeks) for family caregiver relief or post-procedure recovery.'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAnswers({ ...answers, careType: opt.id })}
                  className={`p-4 border cursor-pointer transition-all ${
                    answers.careType === opt.id
                      ? 'bg-white border-[#233B31] shadow-xs'
                      : 'bg-white/60 border-[#E5DFC5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-[#1C2622]">{opt.title}</h4>
                    {answers.careType === opt.id && (
                      <CheckCircle className="w-4 h-4 text-[#233B31]" />
                    )}
                  </div>
                  <p className="text-xs text-[#5F6B65] mt-1 font-light">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Mobility */}
        {currentStep === 2 && (
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#1C2622] mb-2">
              What is the current mobility level?
            </h3>
            <p className="text-xs text-[#5F6B65] mb-6 font-light">
              All resident bedrooms, dining, and living areas at Hi Haven are ground-level and accessible.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'independent',
                  title: 'Fully Independent Walking',
                  desc: 'Walks freely indoors and enjoys walking on our grounds.'
                },
                {
                  id: 'walker-assisted',
                  title: 'Uses Cane or Walker / Rollator',
                  desc: 'Requires steadying aids or minimal staff standby when navigating the home.'
                },
                {
                  id: 'wheelchair',
                  title: 'Wheelchair / Seated Mobility Support',
                  desc: 'Uses wheelchair with wide doorways, level thresholds, and accessible showers.'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAnswers({ ...answers, mobility: opt.id })}
                  className={`p-4 border cursor-pointer transition-all ${
                    answers.careType === opt.id
                      ? 'bg-white border-[#233B31] shadow-xs'
                      : 'bg-white/60 border-[#E5DFC5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-[#1C2622]">{opt.title}</h4>
                    {answers.mobility === opt.id && (
                      <CheckCircle className="w-4 h-4 text-[#233B31]" />
                    )}
                  </div>
                  <p className="text-xs text-[#5F6B65] mt-1 font-light">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Medication & Supervision */}
        {currentStep === 3 && (
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#1C2622] mb-2">
              What medication support is required?
            </h3>
            <p className="text-xs text-[#5F6B65] mb-6 font-light">
              Our Personal Care Attendants are trained and certified under provincial medication management standards.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'full-administration',
                  title: '24/7 Supervised Medication Administration',
                  desc: 'Secure storage, logged distribution on schedule, and coordination with community pharmacy.'
                },
                {
                  id: 'reminders',
                  title: 'Medication Prompts & Reminders',
                  desc: 'Resident is self-directed with staff monitoring schedules and meal timing.'
                },
                {
                  id: 'specialized',
                  title: 'Community Nursing Liaison Support',
                  desc: 'Coordination with visiting community nurses, blood collection, or family physicians.'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAnswers({ ...answers, medication: opt.id })}
                  className={`p-4 border cursor-pointer transition-all ${
                    answers.medication === opt.id
                      ? 'bg-white border-[#233B31] shadow-xs'
                      : 'bg-white/60 border-[#E5DFC5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-[#1C2622]">{opt.title}</h4>
                    {answers.medication === opt.id && (
                      <CheckCircle className="w-4 h-4 text-[#233B31]" />
                    )}
                  </div>
                  <p className="text-xs text-[#5F6B65] mt-1 font-light">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Results & Recommendation */}
        {currentStep === 4 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#233B31]">
                ASSESSMENT MATCH
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-[#1C2622] mb-1">
              {rec.title}
            </h3>
            <span className="inline-block text-xs font-medium text-[#233B31] bg-[#F3EFEA] px-2.5 py-1 border border-[#E5DFC5] mb-4">
              {rec.careLevel}
            </span>

            <div className="bg-white p-5 border border-[#E5DFC5] space-y-3 mb-6">
              <p className="text-xs sm:text-sm text-[#5F6B65] leading-relaxed font-light">
                {rec.summary}
              </p>
              <div className="p-3 bg-[#FAF8F5] border border-[#E5DFC5] text-xs text-[#5F6B65]">
                <strong className="block text-[#1C2622] font-semibold mb-0.5">Recommended Next Step:</strong>
                {rec.nextStep}
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenTourModal();
                }}
                className="bg-[#233B31] text-[#FAF8F5] w-full justify-center text-xs uppercase tracking-wider py-3.5 flex items-center gap-2 font-medium hover:bg-[#1A2E26] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Home Visit with Lori & Rob</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="border border-[#233B31] text-[#233B31] w-full justify-center text-xs uppercase tracking-wider py-3 flex items-center gap-2 font-medium hover:bg-[#233B31] hover:text-[#FAF8F5] transition-colors text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Line: {BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#E5DFC5]">
            {currentStep > 1 ? (
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 text-xs font-medium text-[#5F6B65] hover:text-[#1C2622]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            ) : (
              <span />
            )}

            <button
              onClick={handleNext}
              className="bg-[#233B31] text-[#FAF8F5] text-xs uppercase tracking-wider py-2.5 px-5 flex items-center gap-1.5 font-medium hover:bg-[#1A2E26] transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

