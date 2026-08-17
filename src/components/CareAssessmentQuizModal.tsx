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
        title: 'Specialized Mental Health & Recovery Living',
        careLevel: 'Specialized Supportive Care',
        summary: 'Hi Haven provides structured, trauma-informed psychosocial routines, 24/7 dedicated attendants, and tranquil Holyrood woodland surroundings.',
        nextStep: 'We recommend coordinating with your NL Health regional case manager or contacting Lori & Rob Condon directly for a private consultation.'
      };
    } else if (answers.careType === 'respite') {
      return {
        title: 'Short-Term Respite Sanctuary Stay',
        careLevel: 'Short-Term Respite',
        summary: 'Fully furnished private suite, 3 home-cooked meals daily, and complete 24/7 personal care assistance for temporary rest and peace of mind.',
        nextStep: 'Respite availability is managed on a rolling basis. Contact our admissions line to hold a suite for your preferred dates.'
      };
    } else {
      return {
        title: 'Level 1 & Level 2 Personal Care Home Program',
        careLevel: 'Level 1 / Level 2 Provincial Standard',
        summary: 'Comprehensive assistance with activities of daily living (bathing, dressing, grooming, mobility), dietitian-approved meals, and supervised medication administration.',
        nextStep: 'Hi Haven is fully licensed under Provincial Personal Care Home Operational Standards and accommodates both private and subsidized placements.'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 bg-[#121715]/85 backdrop-blur-md z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#9B8258]/30 shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#55645D] hover:text-[#171E1C] transition-colors"
          aria-label="Close quiz"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#78623A] mb-2">
            <span>Care Needs Assessment</span>
            <span>Step {currentStep} of 4</span>
          </div>
          <div className="w-full h-1.5 bg-[#E8E0D5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#78623A] transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Primary Need */}
        {currentStep === 1 && (
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#171E1C] mb-2">
              What is the primary support need?
            </h3>
            <p className="text-xs text-[#55645D] mb-6">
              Select the description that best reflects your loved one's current daily situation.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'personal-care',
                  title: 'Daily Living & Personal Care Assistance',
                  desc: 'Help needed with grooming, bathing, medication, or mobility while enjoying senior living community.'
                },
                {
                  id: 'mental-health',
                  title: 'Supportive Mental Health & Recovery Living',
                  desc: 'Structured, calm residential environment specializing in adult mental wellness and routine stability.'
                },
                {
                  id: 'respite',
                  title: 'Short-Term Respite or Recovery Stay',
                  desc: 'Temporary stay (days to weeks) for family caregiver relief or post-hospital recovery.'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAnswers({ ...answers, careType: opt.id })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    answers.careType === opt.id
                      ? 'bg-white border-[#78623A] shadow-md ring-1 ring-[#78623A]'
                      : 'bg-white/60 border-[#E8E0D5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#171E1C]">{opt.title}</h4>
                    {answers.careType === opt.id && (
                      <CheckCircle className="w-4 h-4 text-[#78623A]" />
                    )}
                  </div>
                  <p className="text-xs text-[#55645D] mt-1">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Mobility */}
        {currentStep === 2 && (
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#171E1C] mb-2">
              What is the current mobility level?
            </h3>
            <p className="text-xs text-[#55645D] mb-6">
              All suites and public areas at Hi Haven are fully barrier-free.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'independent',
                  title: 'Fully Independent Walking',
                  desc: 'Walks without assistance, enjoys outdoor garden pathways and strolls.'
                },
                {
                  id: 'walker-assisted',
                  title: 'Assisted by Cane or Rollator / Walker',
                  desc: 'Requires steadying aids or minimal staff standby when navigating spaces.'
                },
                {
                  id: 'wheelchair',
                  title: 'Wheelchair / Seated Mobility Support',
                  desc: 'Uses wheelchair with wide doorways, roll-in showers, and ramped access.'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAnswers({ ...answers, mobility: opt.id })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    answers.mobility === opt.id
                      ? 'bg-white border-[#78623A] shadow-md ring-1 ring-[#78623A]'
                      : 'bg-white/60 border-[#E8E0D5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#171E1C]">{opt.title}</h4>
                    {answers.mobility === opt.id && (
                      <CheckCircle className="w-4 h-4 text-[#78623A]" />
                    )}
                  </div>
                  <p className="text-xs text-[#55645D] mt-1">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Medication & Supervision */}
        {currentStep === 3 && (
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#171E1C] mb-2">
              What medication oversight is required?
            </h3>
            <p className="text-xs text-[#55645D] mb-6">
              Our Personal Care Attendants are trained and certified in standardized medication protocols.
            </p>

            <div className="space-y-3">
              {[
                {
                  id: 'full-administration',
                  title: '24/7 Supervised Medication Administration',
                  desc: 'Secure lockup, logged distribution, and coordinated refills with pharmacy.'
                },
                {
                  id: 'reminders',
                  title: 'Daily Medication Prompts & Reminders',
                  desc: 'Resident manages self with staff checking schedules and meal timing.'
                },
                {
                  id: 'specialized',
                  title: 'Specialized Medical Nursing Liaison',
                  desc: 'Coordination with visiting community nurses, blood clinics, or doctors.'
                }
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setAnswers({ ...answers, medication: opt.id })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    answers.medication === opt.id
                      ? 'bg-white border-[#78623A] shadow-md ring-1 ring-[#78623A]'
                      : 'bg-white/60 border-[#E8E0D5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#171E1C]">{opt.title}</h4>
                    {answers.medication === opt.id && (
                      <CheckCircle className="w-4 h-4 text-[#78623A]" />
                    )}
                  </div>
                  <p className="text-xs text-[#55645D] mt-1">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Results & Recommendation */}
        {currentStep === 4 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#9B8258]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#78623A]">
                Care Assessment Match
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#171E1C] mb-1">
              {rec.title}
            </h3>
            <span className="inline-block text-xs font-semibold text-[#78623A] bg-[#F4EFE8] px-2.5 py-1 rounded border border-[#9B8258]/30 mb-4">
              {rec.careLevel}
            </span>

            <div className="bg-white p-5 rounded-xl border border-[#9B8258]/20 space-y-3 mb-6">
              <p className="text-xs sm:text-sm text-[#46554D] leading-relaxed">
                {rec.summary}
              </p>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E8E0D5] text-xs text-[#384640]">
                <strong className="block text-[#171E1C] font-semibold mb-0.5">Recommended Next Step:</strong>
                {rec.nextStep}
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenTourModal();
                }}
                className="luxury-button-gold w-full justify-center text-sm py-3"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Private Sanctuary Tour</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.contact.phone}`}
                className="luxury-button-secondary w-full justify-center text-xs py-2.5"
              >
                <Phone className="w-4 h-4 text-[#78623A]" />
                <span>Speak with Lori & Rob Condon: {BUSINESS_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#E8E0D5]">
            {currentStep > 1 ? (
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 text-xs font-semibold text-[#55645D] hover:text-[#171E1C]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>
            ) : (
              <span />
            )}

            <button
              onClick={handleNext}
              className="luxury-button-primary text-xs py-2.5 px-5"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 text-[#9B8258]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
