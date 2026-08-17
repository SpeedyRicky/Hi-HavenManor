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
  initialTopic = 'General Sanctuary Visit',
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
    <div className="fixed inset-0 bg-[#121715]/85 backdrop-blur-md z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="bg-[#FAF7F2] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#9B8258]/30 shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#55645D] hover:text-[#171E1C] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {isBooked ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#78623A]/10 text-[#78623A] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#78623A]">
              Visit Scheduled
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171E1C]">
              We Look Forward to Welcoming You
            </h3>

            <div className="bg-white p-5 rounded-xl border border-[#9B8258]/20 text-left text-xs sm:text-sm text-[#384640] space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#78623A]" />
                <span>Date: <strong>{formData.preferredDate}</strong> at <strong>{formData.preferredTime}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#78623A]" />
                <span>Location: {BUSINESS_INFO.location.address}, Holyrood, NL</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#78623A]" />
                <span>Host: Lori or Rob Condon (Director / Care Coordinator)</span>
              </div>
            </div>

            <p className="text-xs text-[#55645D] leading-relaxed max-w-md mx-auto">
              A confirmation summary has been logged for <strong>{formData.fullName}</strong>. If you need to adjust your time or require immediate assistance, call us at <strong>{BUSINESS_INFO.contact.phone}</strong>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="luxury-button-primary text-xs sm:text-sm py-2.5 px-6"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78623A]">
                Schedule a Visit
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171E1C] mt-1">
                Experience Hi Haven in Person
              </h3>
              <p className="text-xs text-[#55645D] mt-1">
                Meet our directors, tour our private suites, and experience our Holyrood sanctuary firsthand.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Visit Type Toggle */}
              <div>
                <label className="block text-xs font-bold text-[#171E1C] mb-1.5">
                  Format of Consultation:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, visitType: 'in-person' })}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.visitType === 'in-person'
                        ? 'bg-[#171E1C] text-white border-[#171E1C]'
                        : 'bg-white text-[#55645D] border-[#9B8258]/30'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>In-Person Sanctuary Tour</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, visitType: 'phone-consultation' })}
                    className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.visitType === 'phone-consultation'
                        ? 'bg-[#171E1C] text-white border-[#171E1C]'
                        : 'bg-white text-[#55645D] border-[#9B8258]/30'
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Care Consultation</span>
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="form-control-input-field text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="form-control-select-field text-xs"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Tour & Coffee)</option>
                    <option value="1:30 PM">1:30 PM (Midday Dining & Suite Walkthrough)</option>
                    <option value="3:30 PM">3:30 PM (Afternoon Tea & Garden Tour)</option>
                    <option value="5:30 PM">5:30 PM (Evening Family Consultation)</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael O'Brien"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-control-input-field text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (709) 229-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-control-input-field text-xs"
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
                    placeholder="e.g. mobrien@nl.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-control-input-field text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171E1C] mb-1">
                    Program / Suite Interest
                  </label>
                  <input
                    type="text"
                    value={formData.interestedCareProgram}
                    onChange={(e) => setFormData({ ...formData, interestedCareProgram: e.target.value })}
                    className="form-control-input-field text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#171E1C] mb-1">
                  Special Accommodations or Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.specificQuestions}
                  onChange={(e) => setFormData({ ...formData, specificQuestions: e.target.value })}
                  placeholder="e.g. Wheelchair accessibility needs, dietary queries, or family members attending..."
                  className="form-control-textarea-field text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="luxury-button-gold w-full justify-center text-sm py-3"
                  id="tour-modal-submit-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Tour Reservation</span>
                </button>
              </div>

              <p className="text-[11px] text-[#8C7E6F] text-center mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#78623A]" />
                Tours are complimentary, obligation-free, and confidential.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
