import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, CheckCircle2, Phone, MapPin, Copy, Check, Info } from 'lucide-react';
import { CLINIC_INFO, TREATMENT_CATEGORIES, FEATURED_TREATMENTS } from '../data/clinicData';
import { EliteAestheticsLogo } from './EliteAestheticsLogo';
import { ModalOverlay } from './ui/ModalOverlay';
import { submitInquiry } from '../lib/submitInquiry';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(preselectedTreatment || 'General Consultation');
  const [preferredWindow, setPreferredWindow] = useState('No Preference');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phoneNumber?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync if preselectedTreatment changes
  useEffect(() => {
    if (preselectedTreatment) {
      setSelectedService(preselectedTreatment);
    }
  }, [preselectedTreatment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; phoneNumber?: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your contact phone number.';
    } else if (phoneNumber.trim().length < 7) {
      newErrors.phoneNumber = 'Please enter a valid telephone or mobile number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);
    const result = await submitInquiry({
      source: 'modal',
      full_name: fullName,
      phone: phoneNumber,
      email,
      interest: selectedService,
      message: notes,
      preferred_timing: preferredWindow,
    });
    setIsSubmitting(false);
    if (!result.ok) {
      setSubmitError('We could not send your request. Please try again or call the clinic.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const summary = `Consultation Request\nName: ${fullName}\nPhone: ${phoneNumber}\nService: ${selectedService}\nPreferred Contact Window: ${preferredWindow}\nClinic: Elite Aesthetics - Cebu (The Ridges Commercial Center)`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError('');
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={resetForm}
      ariaLabelledBy="appointment-modal-title"
      maxWidthClass="max-w-xl"
    >
      {/* Header Ribbon */}
      <div className="bg-[#241D18] text-[#FAF7F2] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#B89358]/40 shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 mr-2">
          <EliteAestheticsLogo variant="emblem" theme="light" size="sm" />
          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#C9A77E] font-medium block truncate">
              Elite Aesthetics Cebu
            </span>
            <h2 id="appointment-modal-title" className="font-serif text-lg sm:text-2xl text-[#FAF7F2] font-medium truncate">
              {isSubmitted ? 'Request Submitted' : 'Request a Consultation'}
            </h2>
          </div>
        </div>
        <button
          onClick={resetForm}
          className="p-1.5 text-[#E8D8C3] hover:text-white rounded-xs hover:bg-[#3C332D] transition-colors focus:outline-none cursor-pointer shrink-0"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Modal Content */}
      <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FAF7F2] border-2 border-[#B89358] flex items-center justify-center text-[#B89358]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#9E7A42] font-semibold">
                Request Received
              </span>

              <h3 className="font-serif text-2xl text-[#1D1815] font-medium mt-2 mb-2">
                Thank You, {fullName || 'Valued Client'}
              </h3>

              <p className="text-xs sm:text-sm text-[#52453D] max-w-md mx-auto leading-relaxed mb-6">
                Your consultation request for <strong>{selectedService}</strong> has been received through this website interface. The clinic can follow up using the contact details you provided to discuss scheduling and the next step.
              </p>

              {/* Booking Summary Box */}
              <div className="bg-[#FAF7F2] p-4 border border-[#E7DFD3] text-left text-xs text-[#3C332D] space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#8C7667]">Selected Area:</span>
                  <span className="font-semibold text-[#1D1815]">{selectedService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7667]">Preferred Contact Window:</span>
                  <span className="font-semibold text-[#1D1815]">{preferredWindow}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7667]">Contact Phone:</span>
                  <span className="font-semibold text-[#1D1815]">{phoneNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7667]">Clinic Location:</span>
                  <span className="font-semibold text-[#1D1815]">The Ridges, Kasambagan</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase border border-[#DBC3A3] text-[#1D1815] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied Summary</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#9E7A42]" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>

                <a
                  href="tel:+639567835959"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 0956 783 5959</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
              {submitError && <p role="alert" className="text-sm text-[#B85858]">{submitError}</p>}
              <div className="bg-[#FAF7F2] p-3 border border-[#E7DFD3] flex items-center gap-2 text-xs text-[#685B52]">
                <MapPin className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City</span>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="modal-full-name" className="block text-xs font-semibold uppercase tracking-wider text-[#3C332D] mb-1.5">
                  Full Name <span className="text-[#9E7A42]">*</span>
                </label>
                <input
                  id="modal-full-name"
                  type="text"
                  placeholder="e.g. Maria Santos"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-3.5 py-2.5 bg-white border text-sm text-[#1D1815] outline-none transition-colors ${
                    errors.fullName ? 'border-[#B85858]' : 'border-[#E7DFD3] focus:border-[#B89358]'
                  }`}
                  aria-required="true"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'modal-fullname-error' : undefined}
                />
                {errors.fullName && (
                  <p id="modal-fullname-error" className="text-xs text-[#B85858] mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#3C332D] mb-1.5">
                    Phone Number <span className="text-[#9E7A42]">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    placeholder="0917 123 4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={`w-full px-3.5 py-2.5 bg-white border text-sm text-[#1D1815] outline-none transition-colors ${
                      errors.phoneNumber ? 'border-[#B85858]' : 'border-[#E7DFD3] focus:border-[#B89358]'
                    }`}
                    aria-required="true"
                    aria-invalid={Boolean(errors.phoneNumber)}
                    aria-describedby={errors.phoneNumber ? 'modal-phone-error' : undefined}
                  />
                  {errors.phoneNumber && (
                    <p id="modal-phone-error" className="text-xs text-[#B85858] mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-[#3C332D] mb-1.5">
                    Email Address <span className="text-[#8C7667] text-[10px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD3] focus:border-[#B89358] text-sm text-[#1D1815] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Treatment / Area of Interest */}
              <div>
                <label htmlFor="modal-service" className="block text-xs font-semibold uppercase tracking-wider text-[#3C332D] mb-1.5">
                  Treatment / Area of Interest
                </label>
                <select
                  id="modal-service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD3] focus:border-[#B89358] text-sm text-[#1D1815] outline-none transition-colors"
                >
                  <option value="General Consultation">General Consultation</option>
                  <optgroup label="Clinical Disciplines">
                    {TREATMENT_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Specific Treatments">
                    {FEATURED_TREATMENTS.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.category})
                      </option>
                    ))}
                  </optgroup>
                  <option value="Unsure — I'd Like Guidance">Unsure — I'd Like Guidance</option>
                </select>
              </div>

              {/* Preferred Contact Window */}
              <div>
                <label htmlFor="modal-window" className="block text-xs font-semibold uppercase tracking-wider text-[#3C332D] mb-1.5">
                  When would you prefer to be contacted?
                </label>
                <select
                  id="modal-window"
                  value={preferredWindow}
                  onChange={(e) => setPreferredWindow(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD3] focus:border-[#B89358] text-sm text-[#1D1815] outline-none transition-colors"
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="No Preference">No Preference</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="modal-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#3C332D] mb-1.5">
                  Consultation Goals <span className="text-[#8C7667] text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  placeholder="Share what you'd like to explore, what concerns you have, or what questions you have..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E7DFD3] focus:border-[#B89358] text-sm text-[#1D1815] outline-none transition-colors resize-y"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 shadow-xs transition-colors focus:outline-none cursor-pointer"
                >
                  {isSubmitting ? 'SENDING…' : 'REQUEST A CONSULTATION'}
                </button>
                <div className="mt-3 pt-2 border-t border-[#E7DFD3]/60 flex items-start gap-2 text-[11px] text-[#736055] leading-relaxed italic">
                  <Info className="w-3.5 h-3.5 text-[#9E7A42] shrink-0 mt-0.5" />
                  <span>
                    Consultation requests are subject to clinic availability. Please avoid submitting sensitive medical data through this initial form.
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </ModalOverlay>
    );
};
