/**
 * Contact Page — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /contact
 * Strict Content Governance: Reassuring, Transparent, Verified Information Only, Quiet Luxury
 */

import React, { useState } from 'react';
import { useRouter } from '../router/Router';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { CLINIC_INFO } from '../data/clinicData';
import { submitInquiry } from '../lib/submitInquiry';
import { VisualAsset } from '../components/VisualAsset';
import {
  SectionBackground,
  DarkFeatureSection,
} from '../components/ui/LayoutPrimitives';
import {
  MapPin,
  Phone,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Navigation,
  CheckCircle2,
  Info,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Send,
  RotateCcw,
} from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const breadcrumbs = getBreadcrumbsForPath('/contact');

  // Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  // Form Validation & Status
  const [errors, setErrors] = useState<{ fullName?: string; mobileNumber?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Micro-FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { fullName?: string; mobileNumber?: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your mobile contact number.';
    } else if (mobileNumber.trim().length < 7) {
      newErrors.mobileNumber = 'Please enter a valid telephone or mobile number.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);
    const result = await submitInquiry({
      source: 'contact',
      full_name: fullName,
      phone: mobileNumber,
      email: emailAddress,
      interest: inquiryType,
      message,
    });
    setIsSubmitting(false);
    if (!result.ok) {
      setSubmitError('We could not send your inquiry. Please try again or contact the clinic by phone.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setMobileNumber('');
    setEmailAddress('');
    setInquiryType('General Inquiry');
    setMessage('');
    setErrors({});
    setSubmitError('');
    setIsSubmitted(false);
  };

  const microFaqs = [
    {
      q: 'Do I need to know which treatment I want before contacting the clinic?',
      a: 'No. You are welcome to begin by describing what you would like to address or what questions you have. Your clinician will help you explore suitable, individualized options during consultation.',
    },
    {
      q: 'Can I ask about pricing before booking?',
      a: 'Yes. You can inquire about general pricing and current promotional privileges. Your practitioner will confirm specific treatment costs based on your individualized plan prior to any procedure.',
    },
    {
      q: 'Can I ask about a treatment before deciding?',
      a: 'Absolutely. We encourage an open, information-first dialogue so you can make an informed choice with realistic expectations.',
    },
    {
      q: 'Where is Elite Aesthetics located?',
      a: 'The clinic is located at The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City. Convenient on-site commercial center parking is available.',
    },
    {
      q: 'How can I contact the clinic directly?',
      a: 'You can reach our reception desk directly by calling 0956 783 5959 during operational days.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#2C2420]">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION (EDITORIAL SPLIT COMPOSITION)                        */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#E7DFD3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-[#8C7667]">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {idx > 0 && <span aria-hidden="true" className="text-[#C9A77E]">/</span>}
                    {isLast ? (
                      <span aria-current="page" className="font-semibold text-[#1D1815]">
                        {crumb.label}
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => navigate(crumb.path)}
                        className="hover:text-[#9E7A42] transition-colors focus:outline-none"
                      >
                        {crumb.label}
                      </button>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Editorial Split Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
                <span>Elite Aesthetics</span>
                <span aria-hidden="true" className="text-[#C9A77E]">·</span>
                <span>Cebu</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1D1815] font-light leading-[1.12] tracking-tight mb-5 text-balance">
                Let's Start the <span className="italic font-normal text-[#9E7A42]">Conversation.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3C332D] leading-relaxed max-w-xl mb-8">
                Whether you have a question, want to explore your options, or are ready to request a
                consultation, we're here to help you take the next step with clarity.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="tel:+639567835959"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 transition-all duration-300 shadow-sm focus:outline-none"
                >
                  <Phone className="w-4 h-4 text-[#E8D8C3]" />
                  <span>Call 0956 783 5959</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenBooking('General Inquiry')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white/70 hover:bg-white transition-all duration-300 focus:outline-none"
                >
                  <Calendar className="w-4 h-4 text-[#9E7A42]" />
                  <span>Request Consultation</span>
                </button>
              </div>

              {/* Micro-note */}
              <div className="mt-8 pt-5 border-t border-[#E7DFD3]/80 flex items-center gap-3 text-xs text-[#8C7667]">
                <ShieldCheck className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>
                  The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City
                </span>
              </div>
            </div>

            {/* Right Visual Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-white">
                <VisualAsset
                  type="clinic-suite"
                  alt="Elite Aesthetics Cebu Clinical Consultation Suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Reception & Suites
                </div>
              </div>
              <p className="text-[11px] text-[#8C7667] text-center mt-2.5 italic">
                The Ridges Commercial Center, Kasambagan, Cebu City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. PRIMARY CONTACT INFORMATION                                       */}
      {/* ==================================================================== */}
      <section className="bg-white py-12 border-b border-[#E7DFD3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-1">
              Direct Contact
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-light">
              Reach Elite Aesthetics Cebu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Card */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-[#B89358]/40 flex items-center justify-center shrink-0 text-[#9E7A42]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base text-[#1D1815] font-medium mb-1">
                  Clinic Location
                </h3>
                <p className="text-xs text-[#52453D] leading-relaxed">
                  The Ridges Commercial Center<br />
                  F. Cabahug Street, Kasambagan<br />
                  Cebu City, Philippines
                </p>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-[#B89358]/40 flex items-center justify-center shrink-0 text-[#9E7A42]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base text-[#1D1815] font-medium mb-1">
                  Telephone Contact
                </h3>
                <p className="text-xs text-[#52453D] leading-relaxed mb-2">
                  Speak directly with our clinic front desk team:
                </p>
                <a
                  href="tel:+639567835959"
                  className="font-serif text-lg font-medium text-[#1D1815] hover:text-[#9E7A42] transition-colors block"
                >
                  0956 783 5959
                </a>
              </div>
            </div>

            {/* Consultation Appointments */}
            <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-[#B89358]/40 flex items-center justify-center shrink-0 text-[#9E7A42]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base text-[#1D1815] font-medium mb-1">
                  Appointment Scheduling
                </h3>
                <p className="text-xs text-[#52453D] leading-relaxed mb-3">
                  Consultations and clinical visits are arranged by appointment.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenBooking('Consultation Request')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors inline-flex items-center gap-1 focus:outline-none"
                >
                  <span>Request Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3 & 4. CONTACT EXPERIENCE & INQUIRY FORM                             */}
      {/* ==================================================================== */}
      <SectionBackground variant="ivory" paddingY="lg" borderBottom={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Authentic Photography & Narrative (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-[#FAF7F2] mb-6">
              <VisualAsset
                type="doctor-care"
                alt="Consultation Dialogue at Elite Aesthetics Cebu"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                Clinical Dialogue
              </div>
            </div>

            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Consultation-First Approach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
              Tell Us What You Need
            </h2>
            <p className="text-sm sm:text-base text-[#3C332D] leading-relaxed mb-6 font-normal">
              You do not need to know exactly which treatment you need before reaching out. Share what
              you would like to improve, what you are curious about, or what questions you have, and the
              conversation can begin there.
            </p>

            <div className="p-4 bg-white border border-[#E7DFD3] luxury-card-shadow flex items-start gap-3 text-xs text-[#52453D] leading-relaxed">
              <Info className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
              <span>
                Our team reviews every inquiry thoughtfully to help guide you toward the most
                appropriate next steps.
              </span>
            </div>
          </div>

          {/* Right Column: Refined Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#E7DFD3] luxury-card-shadow">
            {isSubmitted ? (
              /* Success State */
              <div className="text-center py-10 px-4 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#B89358]/40 flex items-center justify-center mx-auto text-[#9E7A42]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-medium">
                  Thank You for Reaching Out.
                </h3>
                <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-md mx-auto">
                  Your inquiry has been received through this website interface. The clinic can follow
                  up using the contact details you provided.
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#1D1815] font-medium mb-1">
                    Send an In-Clinic Inquiry
                  </h3>
                  <p className="text-xs text-[#685B52]">
                    Complete the details below and we will be pleased to assist you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                    >
                      Full Name <span className="text-[#9E7A42]">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      maxLength={120}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Maria Santos"
                      className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors ${
                        errors.fullName ? 'border-[#B85858]' : 'border-[#E7DFD3]'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'full-name-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="full-name-error" className="text-xs text-[#B85858] mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobile-number"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                    >
                      Mobile Number <span className="text-[#9E7A42]">*</span>
                    </label>
                    <input
                      id="mobile-number"
                      type="tel"
                      maxLength={30}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="e.g. 0917 123 4567"
                      className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors ${
                        errors.mobileNumber ? 'border-[#B85858]' : 'border-[#E7DFD3]'
                      }`}
                      aria-required="true"
                      aria-invalid={Boolean(errors.mobileNumber)}
                      aria-describedby={errors.mobileNumber ? 'mobile-number-error' : undefined}
                    />
                    {errors.mobileNumber && (
                      <p id="mobile-number-error" className="text-xs text-[#B85858] mt-1.5">
                        {errors.mobileNumber}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Address (Optional) */}
                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                    >
                      Email Address <span className="text-[#8C7667] text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      maxLength={200}
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#E7DFD3] text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#E7DFD3] text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Consultation Inquiry">Consultation Inquiry</option>
                      <option value="Treatment Question">Treatment Question</option>
                      <option value="Promotion Question">Promotion Question</option>
                      <option value="Pricing Question">Pricing Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                  >
                    Message <span className="text-[#8C7667] text-[10px] font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    maxLength={2000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you'd like to know or what you'd like to discuss."
                    className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#E7DFD3] text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div>
                  {submitError && <p role="alert" className="mb-3 text-sm text-[#B85858]">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending…' : 'Send Inquiry'}</span>
                  </button>
                </div>

                {/* Governance Note */}
                <div className="pt-3 border-t border-[#E7DFD3]/80">
                  <p className="text-[11px] text-[#736055] leading-relaxed italic">
                    Please avoid submitting highly sensitive medical information through a general
                    inquiry form. Treatment suitability and medical concerns should be discussed
                    directly with an appropriately qualified professional.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 5. CONSULTATION PATHWAY                                              */}
      {/* ==================================================================== */}
      <SectionBackground variant="champagne" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Consultation Pathway</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            Not Sure Where to Begin?
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-2xl mx-auto mb-8">
            You do not have to choose a treatment before speaking with the clinic. A consultation can be
            an opportunity to discuss your goals, explore relevant options, and understand what may be
            appropriate for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking('General Consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
              <span>Book a Consultation</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/treatments')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 6. LOCATION / ARRIVAL & OPERATING HOURS SECTION                      */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Location Panel (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
                Arrival Guide
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
                Find Elite Aesthetics Cebu
              </h2>
              <p className="text-sm sm:text-base text-[#52453D] leading-relaxed mb-4">
                Elite Aesthetics is situated inside The Ridges Commercial Center along F. Cabahug
                Street, Kasambagan, Cebu City.
              </p>
              <p className="text-xs text-[#685B52] leading-relaxed mb-6">
                Convenient commercial parking is available on-site at The Ridges for patients and
                visitors.
              </p>
            </div>

            <div className="p-5 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7A42]">
                <MapPin className="w-4 h-4" />
                <span>Verified Address</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1D1815] font-serif font-medium leading-relaxed">
                The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City
              </p>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=The+Ridges+Commercial+Center+F+Cabahug+Street+Kasambagan+Cebu+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Operating Hours (Strictly Verification-Gated) */}
            <div className="p-4 bg-white border border-[#E7DFD3] flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
              <div className="text-xs text-[#685B52] leading-relaxed">
                <strong className="text-[#1D1815]">Appointment-Based Scheduling:</strong> Clinic
                visits and consultations are scheduled by appointment. Please contact 0956 783 5959
                to confirm current daily availability.
              </div>
            </div>
          </div>

          {/* Right: Phone Contact Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#FAF7F2] p-8 sm:p-10 border border-[#DBC3A3] luxury-card-shadow text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-white border border-[#B89358]/40 flex items-center justify-center mx-auto text-[#9E7A42]">
              <Phone className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
                Direct Line
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-light mb-3">
                Prefer to Talk Directly?
              </h3>
              <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed max-w-md mx-auto">
                For questions about treatments, availability, promotions, or the consultation process,
                you can contact the clinic directly.
              </p>
            </div>

            <div>
              <a
                href="tel:+639567835959"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors shadow-sm focus:outline-none"
              >
                <Phone className="w-4 h-4 text-[#E8D8C3]" />
                <span>Call 0956 783 5959</span>
              </a>
            </div>

            <p className="text-[11px] text-[#8C7667] italic">
              Telephone inquiries are welcomed during clinic operational days.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 7. CONTACT FAQ MICROSECTION                                          */}
      {/* ==================================================================== */}
      <SectionBackground variant="warm-taupe" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Frequently Asked Contact Questions
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              Quick answers to help you prepare before reaching out to Elite Aesthetics Cebu.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {microFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border transition-colors ${
                    isOpen ? 'border-[#C9A77E] luxury-card-shadow' : 'border-[#E7DFD3]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg text-[#1D1815] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9E7A42] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#52453D] leading-relaxed border-t border-[#E7DFD3]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/faq')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors focus:outline-none"
            >
              <span>Explore Complete FAQ Resource</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 8. DARK EDITORIAL SECTION — A CONVERSATION COMES FIRST              */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="Consultation Standard"
        title="A Conversation"
        italicTitleWord="Comes First."
        description="The right treatment begins with understanding what you want, what is appropriate for you, and what you can realistically expect."
        ghostedAssetKey="clinic-suite"
        ghostedOpacity={0.08}
        ghostedMask="soft-edges"
        paddingY="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Value 01
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Direct Clarity
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Clear, transparent discussion of treatment pathways without commercial pressure.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Value 02
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Considered Advice
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Tailored clinical recommendations grounded in your individual facial features.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Value 03
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Patient Comfort
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Private, quiet clinical suites designed for unhurried consultations and treatments.
            </p>
          </div>
        </div>
      </DarkFeatureSection>

      {/* ==================================================================== */}
      {/* 9. FINAL CTA                                                         */}
      {/* ==================================================================== */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 border-t border-[#E7DFD3]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-3">
            Your Next Step
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light mb-4 text-balance">
            Ready to Explore <span className="italic font-normal text-[#9E7A42]">Your Options?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-xl mx-auto mb-8">
            Start with a question, explore the treatments, or request a consultation. The next step can
            be as simple as beginning the conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking('Consultation Request')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
              <span>Book a Consultation</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/treatments')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
