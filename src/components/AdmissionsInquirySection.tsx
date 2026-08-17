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
    <section className="admissions-tour-section-wrapper" id="admissions" aria-labelledby="admissions-heading">
      <div className="section-editorial-header-block">
        <span className="section-eyebrow-accent-label">Admissions & Inquiries</span>
        <h2 className="section-display-heading" id="admissions-heading">
          Begin the Conversation with Hi Haven
        </h2>
        <p className="section-lead-explanation">
          Choosing the right personal care sanctuary is a meaningful decision. Whether you are navigating regional health subsidies or seeking immediate private placement, our directors are here to guide you.
        </p>
      </div>

      <div className="admissions-grid-layout">
        {/* Left Column: Guidance & Direct Contact Info */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#171E1C] mb-4">
            The Admissions Journey
          </h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#171E1C] text-white flex items-center justify-center font-serif text-sm font-bold flex-shrink-0">
                1
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#171E1C]">Initial Consultation & Care Review</h4>
                <p className="text-xs text-[#55645D] mt-0.5 leading-relaxed">
                  We discuss daily living needs, medical history, and mental wellness preferences either over the phone or in person.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#171E1C] text-white flex items-center justify-center font-serif text-sm font-bold flex-shrink-0">
                2
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#171E1C]">Private Sanctuary Tour</h4>
                <p className="text-xs text-[#55645D] mt-0.5 leading-relaxed">
                  Walk through available suites, meet our personal care attendants, and experience our peaceful Holyrood grounds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#171E1C] text-white flex items-center justify-center font-serif text-sm font-bold flex-shrink-0">
                3
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#171E1C]">Clinical Assessment & Subsidy Coordination</h4>
                <p className="text-xs text-[#55645D] mt-0.5 leading-relaxed">
                  We collaborate with NL Health Services case managers, physicians, and families to finalize official care approvals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#171E1C] text-white flex items-center justify-center font-serif text-sm font-bold flex-shrink-0">
                4
              </span>
              <div>
                <h4 className="text-sm font-bold text-[#171E1C]">Welcoming Move-In & Personalized Settling</h4>
                <p className="text-xs text-[#55645D] mt-0.5 leading-relaxed">
                  Our attendants assist with room setup, familiar routines, and warm introductions to the Hi Haven community.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Box */}
          <div className="bg-[#F4EFE8] p-6 rounded-xl border border-[#9B8258]/30 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#78623A]">
              Direct Contact Information
            </h4>

            <div className="space-y-2.5 text-xs text-[#384640]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#78623A]" />
                <span>Direct Line: <strong className="text-[#171E1C] text-sm">{BUSINESS_INFO.contact.phone}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#78623A]" />
                <span>{BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.town}, {BUSINESS_INFO.location.province} {BUSINESS_INFO.location.postalCode}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#78623A]" />
                <span>{BUSINESS_INFO.contact.hours}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenTourModal}
                className="luxury-button-primary text-xs py-2 px-3.5"
              >
                <Calendar className="w-3.5 h-3.5 text-[#9B8258]" />
                <span>Book a Tour Date</span>
              </button>
              <button
                onClick={onOpenAssessmentModal}
                className="luxury-button-secondary text-xs py-2 px-3.5"
              >
                <span>Take Care Quiz</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Care Inquiry Form */}
        <div className="admissions-form-card-container">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#78623A]">
              Confidential Inquiry
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#171E1C] mt-1">
              Request Care Details & Placement Information
            </h3>
            <p className="text-xs text-[#55645D] mt-1">
              Our directors respond promptly to all confidential family inquiries.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#FAF7F2] p-8 rounded-lg border border-[#9B8258]/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#78623A]/10 text-[#78623A] flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#171E1C]">
                Thank You, {formData.fullName}
              </h4>
              <p className="text-xs sm:text-sm text-[#46554D] leading-relaxed">
                Your care inquiry has been received by Lori & Rob Condon at Hi Haven Manor. We will contact you at <strong>{formData.phone}</strong> shortly to review your loved one's care requirements and answer any questions.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="luxury-button-secondary text-xs py-2 px-4 mt-4"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="form-control-input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. (709) 555-0192"
                    className="form-control-input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@example.ca"
                    className="form-control-input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Relationship to Resident
                  </label>
                  <select
                    value={formData.relationship}
                    onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                    className="form-control-select-field"
                  >
                    <option value="Self">Inquiring for Myself</option>
                    <option value="Family Member">Family Member (Son/Daughter/Spouse)</option>
                    <option value="Healthcare Professional">Social Worker / Healthcare Case Manager</option>
                    <option value="Legal Guardian">Legal Guardian / Power of Attorney</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Care Program of Interest
                  </label>
                  <select
                    value={formData.careType}
                    onChange={(e) => setFormData({ ...formData, careType: e.target.value })}
                    className="form-control-select-field"
                  >
                    <option value="Level 1 & 2 Personal Care">Level 1 & 2 Personal Care</option>
                    <option value="Specialized Mental Health Recovery">Specialized Mental Health Recovery</option>
                    <option value="Short-Term Respite Stay">Short-Term Respite Stay</option>
                    <option value="General Senior Living Inquiry">General Senior Living Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Estimated Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="form-control-select-field"
                  >
                    <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                    <option value="1 to 3 Months">1 to 3 Months</option>
                    <option value="Future Planning (6+ Months)">Future Planning (6+ Months)</option>
                    <option value="Short-Term Respite Only">Short-Term Respite Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#171E1C] mb-1">
                  Specific Care Details or Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any details regarding mobility, medication assistance, dietary requirements, or subsidy questions..."
                  className="form-control-textarea-field text-xs"
                />
              </div>

              <button
                type="submit"
                className="luxury-button-gold w-full justify-center text-sm py-3"
                id="admissions-form-submit-btn"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Inquiry</span>
              </button>

              <p className="text-[11px] text-[#8C7E6F] text-center mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#78623A]" />
                All inquiries are treated with strict confidentiality.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
