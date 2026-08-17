import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/hiHavenData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

interface AdmissionsInquirySectionProps {
  onOpenTourModal: () => void;
  onOpenAssessmentModal: () => void;
}

export const AdmissionsInquirySection: React.FC<AdmissionsInquirySectionProps> = ({
  onOpenTourModal,
  onOpenAssessmentModal,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    residentName: '',
    relationship: 'Family Member',
    careType: 'Level 1 & 2 Personal Care',
    timeline: 'Immediate (Next 30 Days)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E5DFC5]" id="admissions" aria-labelledby="admissions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5F6B65] font-semibold">
              ADMISSIONS & INQUIRIES
            </span>
            <div className="h-[1px] w-8 bg-[#233B31]"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C2622] leading-[1.1] mb-4" id="admissions-heading">
            Taking the first step is simple and supportive.
          </h2>
          <p className="text-sm sm:text-base text-[#5F6B65] leading-relaxed font-light">
            Choosing a community care home is an important family decision. Whether you are navigating regional health authority subsidies or seeking immediate private placement, our family is here to answer every question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Guidance & Direct Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C2622] mb-6">
                Our 4-Step Admission Process
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-xl text-[#8C705B] font-medium flex-shrink-0 w-8">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C2622]">Initial Conversation & Needs Review</h4>
                    <p className="text-xs text-[#5F6B65] mt-1 leading-relaxed font-light">
                      We discuss daily living needs, medication routines, and personal preferences over the phone or in person.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-serif text-xl text-[#8C705B] font-medium flex-shrink-0 w-8">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C2622]">In-Person Home Walkthrough</h4>
                    <p className="text-xs text-[#5F6B65] mt-1 leading-relaxed font-light">
                      Tour available bedrooms, meet our caring staff, see the dining and living spaces, and experience Holyrood.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-serif text-xl text-[#8C705B] font-medium flex-shrink-0 w-8">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C2622]">Assessment & Subsidy Coordination</h4>
                    <p className="text-xs text-[#5F6B65] mt-1 leading-relaxed font-light">
                      We assist in coordinating with NL Health Services case managers, social workers, and physicians.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-serif text-xl text-[#8C705B] font-medium flex-shrink-0 w-8">
                    04
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C2622]">Move-In & Gentle Transition</h4>
                    <p className="text-xs text-[#5F6B65] mt-1 leading-relaxed font-light">
                      We help set up the resident's room with personal comforts, establish medication routines, and welcome them home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-[#F3EFEA] p-6 sm:p-7 border border-[#E5DFC5] space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#233B31]">
                Direct Contact Information
              </h4>

              <div className="space-y-2 text-xs text-[#5F6B65]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#233B31]" />
                  <span>Phone: <strong className="text-[#1C2622] font-semibold">{BUSINESS_INFO.contact.phone}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#233B31]" />
                  <span>{BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.town}, NL {BUSINESS_INFO.location.postalCode}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#233B31]" />
                  <span>{BUSINESS_INFO.contact.hours}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenTourModal}
                  className="bg-[#233B31] text-[#FAF8F5] px-5 py-2.5 text-xs uppercase tracking-wider font-medium hover:bg-[#1A2E26] transition-colors"
                >
                  <span>Book a Tour Date</span>
                </button>
                <button
                  onClick={onOpenAssessmentModal}
                  className="border border-[#233B31] text-[#233B31] px-5 py-2.5 text-xs uppercase tracking-wider font-medium hover:bg-[#233B31] hover:text-[#FAF8F5] transition-colors bg-transparent"
                >
                  <span>Take Care Quiz</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Care Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#E5DFC5] shadow-xs">
            <div className="mb-6">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#233B31] block mb-1">
                CONFIDENTIAL INQUIRY
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#1C2622]">
                Inquire About Placement & Care
              </h3>
              <p className="text-xs text-[#5F6B65] mt-1 font-light">
                Fill out this quick form and Lori & Rob Condon will be in touch promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#FAF8F5] p-8 border border-[#E5DFC5] text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#233B31] text-[#FAF8F5] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-normal text-[#1C2622]">
                  Thank You, {formData.fullName}
                </h4>
                <p className="text-xs sm:text-sm text-[#5F6B65] leading-relaxed font-light">
                  Your care inquiry has been received. We will contact you at <strong>{formData.phone}</strong> shortly to discuss care requirements and answer any questions.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-[#233B31] text-[#233B31] text-xs uppercase tracking-wider py-2.5 px-6 mt-4 hover:bg-[#233B31] hover:text-[#FAF8F5] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1C2622] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Mary Walsh"
                      className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1C2622] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (709) 555-0192"
                      className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1C2622] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. mary@example.ca"
                      className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1C2622] mb-1">
                      Relationship to Resident
                    </label>
                    <select
                      value={formData.relationship}
                      onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                    >
                      <option value="Self">Inquiring for Myself</option>
                      <option value="Family Member">Family Member (Son/Daughter/Spouse)</option>
                      <option value="Healthcare Professional">Social Worker / Healthcare Worker</option>
                      <option value="Legal Guardian">Legal Guardian / Power of Attorney</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1C2622] mb-1">
                      Care Program Needed
                    </label>
                    <select
                      value={formData.careType}
                      onChange={(e) => setFormData({ ...formData, careType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                    >
                      <option value="Level 1 & 2 Personal Care">Level 1 & 2 Personal Care</option>
                      <option value="Specialized Mental Health Recovery">Mental Health & Addiction Support</option>
                      <option value="Short-Term Respite Stay">Short-Term Respite Stay</option>
                      <option value="General Senior Living Inquiry">General Care Home Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1C2622] mb-1">
                      Estimated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                    >
                      <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                      <option value="1 to 3 Months">1 to 3 Months</option>
                      <option value="Future Planning (6+ Months)">Future Planning (6+ Months)</option>
                      <option value="Short-Term Respite Only">Short-Term Respite Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1C2622] mb-1">
                    Specific Care Details or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Share any details regarding mobility, medication assistance, dietary requirements, or subsidy questions..."
                    className="w-full bg-[#FAF8F5] border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#233B31] text-[#FAF8F5] w-full py-3.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#1A2E26] transition-colors"
                  id="admissions-form-submit-btn"
                >
                  Send Confidential Message
                </button>

                <p className="text-[11px] text-[#5F6B65] text-center mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#233B31]" />
                  All inquiries are kept strictly confidential.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

