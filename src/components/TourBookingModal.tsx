import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, ShieldCheck, Phone, User, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hiHavenData';
import { TourBookingRequest } from '../types';

interface TourBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'General Home Visit',
}) => {
  const [formData, setFormData] = useState<TourBookingRequest>({
    visitType: 'in-person',
    preferredDate: '',
    preferredTime: '10:00 AM',
    fullName: '',
    email: '',
    phone: '',
    relationshipToResident: 'Family Member',
    interestedCareProgram: initialTopic,
    specificQuestions: '',
  });

  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.preferredDate) return;
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#1C2622]/80 backdrop-blur-xs z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="bg-[#FAF8F5] max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E5DFC5] p-6 sm:p-8 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5F6B65] hover:text-[#1C2622] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#233B31] text-[#FAF8F5] flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>

            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#233B31] block">
              VISIT SCHEDULED
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C2622]">
              We Look Forward to Welcoming You
            </h3>

            <div className="bg-white p-5 border border-[#E5DFC5] text-left text-xs sm:text-sm text-[#5F6B65] space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#233B31]" />
                <span>Date: <strong className="text-[#1C2622] font-semibold">{formData.preferredDate}</strong> at <strong className="text-[#1C2622] font-semibold">{formData.preferredTime}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#233B31]" />
                <span>Location: {BUSINESS_INFO.location.address}, Holyrood, NL</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#233B31]" />
                <span>Host: Lori or Rob Condon (Home Directors)</span>
              </div>
            </div>

            <p className="text-xs text-[#5F6B65] leading-relaxed max-w-md mx-auto font-light">
              Your visit request for <strong>{formData.fullName}</strong> has been received. If you need to reschedule or have immediate questions, call Lori & Rob at <strong>{BUSINESS_INFO.contact.phone}</strong>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#233B31] text-[#FAF8F5] px-8 py-3 text-xs uppercase tracking-wider font-medium hover:bg-[#1A2E26] transition-colors"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#233B31] block mb-1">
                SCHEDULE A VISIT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C2622]">
                Come See Hi Haven in Person
              </h3>
              <p className="text-xs text-[#5F6B65] mt-1 font-light">
                Meet Lori & Rob Condon, tour our resident accommodations, see the dining and living spaces, and get your questions answered.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Visit Type Toggle */}
              <div>
                <label className="block text-xs font-medium text-[#1C2622] mb-1.5">
                  Type of Visit:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, visitType: 'in-person' })}
                    className={`py-2.5 px-3 border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                      formData.visitType === 'in-person'
                        ? 'bg-[#233B31] text-[#FAF8F5] border-[#233B31]'
                        : 'bg-white text-[#5F6B65] border-[#E5DFC5]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>In-Person Walkthrough</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, visitType: 'phone-consultation' })}
                    className={`py-2.5 px-3 border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                      formData.visitType === 'phone-consultation'
                        ? 'bg-[#233B31] text-[#FAF8F5] border-[#233B31]'
                        : 'bg-white text-[#5F6B65] border-[#E5DFC5]'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Consultation</span>
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#1C2622] mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1C2622] mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-white border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  >
                    <option value="10:00 AM">Morning (10:00 AM)</option>
                    <option value="11:30 AM">Late Morning (11:30 AM)</option>
                    <option value="2:00 PM">Afternoon (2:00 PM)</option>
                    <option value="3:30 PM">Late Afternoon (3:30 PM)</option>
                    <option value="6:00 PM">Evening (6:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#1C2622] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mary Walsh"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1C2622] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (709) 555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
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
                    placeholder="e.g. mary@example.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1C2622] mb-1">
                    Relationship
                  </label>
                  <select
                    value={formData.relationshipToResident}
                    onChange={(e) => setFormData({ ...formData, relationshipToResident: e.target.value })}
                    className="w-full bg-white border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                  >
                    <option value="Self">Self (Future Resident)</option>
                    <option value="Family Member">Family Member (Son/Daughter/Spouse)</option>
                    <option value="Social Worker / Case Manager">Social Worker / Healthcare Worker</option>
                    <option value="Legal Representative">Power of Attorney / Guardian</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#1C2622] mb-1">
                  Questions or Care Requirements to Discuss
                </label>
                <textarea
                  rows={2}
                  value={formData.specificQuestions}
                  onChange={(e) => setFormData({ ...formData, specificQuestions: e.target.value })}
                  placeholder="Share details about mobility, medication needs, or subsidy questions..."
                  className="w-full bg-white border border-[#E5DFC5] px-3.5 py-2.5 text-xs text-[#1C2622] focus:outline-hidden focus:border-[#233B31]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#233B31] text-[#FAF8F5] w-full py-3.5 text-xs uppercase tracking-wider font-medium hover:bg-[#1A2E26] transition-colors"
                  id="tour-modal-submit-btn"
                >
                  Confirm Visit Booking
                </button>
              </div>

              <p className="text-[11px] text-[#5F6B65] text-center mt-1 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#233B31]" />
                All visits are relaxed, private, and zero pressure.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

