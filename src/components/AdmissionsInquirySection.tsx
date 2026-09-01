import React, { useState } from 'react';
import { BUSINESS_INFO, ADMISSION_STEPS } from '../data/hiHavenData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface AdmissionsInquirySectionProps {
  onOpenTourModal: () => void;
  onOpenAssessmentModal: () => void;
}

export const AdmissionsInquirySection: React.FC<AdmissionsInquirySectionProps> = ({
  onOpenTourModal,
  onOpenAssessmentModal,
}) => {
  const [inquirerType, setInquirerType] = useState('a family member');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comments: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !inquirerType) return;
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFC5]" id="admissions" aria-labelledby="admissions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              CONTACT & ADMISSIONS
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="admissions-heading">
            Connect with Hi Haven Manor
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            You can contact us by using the info below or use our contact form. Whether inquiring for yourself, a family member, or as a case worker, we are always here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & 4-Step Process */}
          <div className="lg:col-span-6 space-y-8">
            {/* Contact Card */}
            <div className="bg-[#F3EFEA] p-6 sm:p-8 border border-[#E5DFC5] space-y-5">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C705B] font-bold block mb-1">
                  GET IN TOUCH
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#1C2622]">
                  {BUSINESS_INFO.name}
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#5F6B65]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#233B31] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1C2622] block font-medium">Address</strong>
                    <span>{BUSINESS_INFO.location.address}</span><br />
                    <span>{BUSINESS_INFO.location.town}, NL {BUSINESS_INFO.location.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#E5DFC5]/60">
                  <Phone className="w-4 h-4 text-[#233B31] flex-shrink-0" />
                  <div>
                    <span className="text-xs text-[#5F6B65]">Telephone: </span>
                    <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="font-semibold text-[#1C2622] hover:underline">
                      {BUSINESS_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#E5DFC5]/60">
                  <Mail className="w-4 h-4 text-[#233B31] flex-shrink-0" />
                  <div>
                    <span className="text-xs text-[#5F6B65]">Email: </span>
                    <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="font-semibold text-[#1C2622] hover:underline">
                      {BUSINESS_INFO.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5DFC5]/80 flex flex-wrap gap-3">
                <button
                  onClick={onOpenTourModal}
                  className="bg-[#233B31] text-[#FAF8F5] px-5 py-2.5 text-xs uppercase tracking-wider font-medium hover:bg-[#1A2E26] transition-colors"
                >
                  Schedule an In-Person Visit
                </button>
                <button
                  onClick={onOpenAssessmentModal}
                  className="border border-[#233B31] text-[#233B31] px-5 py-2.5 text-xs uppercase tracking-wider font-medium hover:bg-[#233B31] hover:text-[#FAF8F5] transition-colors bg-transparent"
                >
                  Care Needs Assessment
                </button>
              </div>
            </div>

            {/* Admission Steps */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C2622] mb-5">
                How Admissions Work
              </h3>

              <div className="space-y-4">
                {ADMISSION_STEPS.map((stepItem) => (
                  <div key={stepItem.step} className="flex items-start gap-4 bg-white p-4 border border-[#E5DFC5]">
                    <span className="font-serif text-lg text-[#8C705B] font-medium flex-shrink-0 w-7">
                      {stepItem.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C2622]">{stepItem.title}</h4>
                      <p className="text-xs text-[#5F6B65] mt-1 leading-relaxed font-light">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Exact Contact Form from Specification */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#E5DFC5] shadow-xs">
            <div className="mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#233B31] block mb-1">
                ONLINE MESSAGE
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1C2622]">
                Contact Form
              </h3>
              <p className="text-xs text-[#5F6B65] mt-1 font-light">
                Please fill out the form below and we will get back to you promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#FAF8F5] p-8 border border-[#E5DFC5] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#233B31] text-[#FAF8F5] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-normal text-[#1C2622]">
                  Thank You, {formData.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#5F6B65] leading-relaxed font-light">
                  Your message has been sent to Hi Haven Manor. We will contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', comments: '' });
                  }}
                  className="border border-[#233B31] text-[#233B31] text-xs uppercase tracking-wider py-2.5 px-6 mt-4 hover:bg-[#233B31] hover:text-[#FAF8F5] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* "I am:" Radios */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C2622] mb-2">
                    I am: <span className="text-[#8C705B] font-normal text-[11px]">(required)</span>
                  </label>
                  <div className="space-y-2 text-xs text-[#1C2622]">
                    {[
                      { id: 'individual', label: 'an interested individual', val: 'an interested individual' },
                      { id: 'family', label: 'a family member', val: 'a family member' },
                      { id: 'caseworker', label: 'a case worker', val: 'a case worker' },
                      { id: 'other', label: 'other', val: 'other' }
                    ].map((opt) => (
                      <label key={opt.id} className="flex items-center gap-2.5 cursor-pointer select-none">
                        <input
                          type="radio"
                          name="inquirerType"
                          value={opt.val}
                          checked={inquirerType === opt.val}
                          onChange={(e) => setInquirerType(e.target.value)}
                          className="w-4 h-4 text-[#233B31] border-[#E5DFC5] focus:ring-[#233B31]"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C2622] mb-1">
                    Name <span className="text-[#8C705B] font-normal text-[11px]">(required)</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C2622] mb-1">
                    Phone Number <span className="text-[#8C705B] font-normal text-[11px]">(required)</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 709-229-7992"
                    className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C2622] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@example.ca"
                    className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-xs font-semibold text-[#1C2622] mb-1">
                    Comments
                  </label>
                  <textarea
                    rows={4}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="How can we assist you?"
                    className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-[#233B31] text-[#FAF8F5] w-full py-3.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors shadow-sm"
                  id="admissions-form-submit-btn"
                >
                  Submit
                </button>

                <p className="text-[11px] text-[#5F6B65] text-center mt-2 flex items-center justify-center gap-1.5 font-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#233B31]" />
                  Your information is kept strictly private and confidential.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};


