/**
 * Book Consultation Page — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /book-consultation
 * Strict Content Governance: Consultation-First, Non-Coercive, Transparent Front-End, Quiet Luxury
 */

import React, { useState, useRef } from 'react';
import { useRouter } from '../router/Router';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { DETAILED_TREATMENT_CATEGORIES, DetailedTreatmentCategory } from '../data/treatmentsData';
import { submitInquiry } from '../lib/submitInquiry';
import { getClinicToday } from '../lib/clinicDate';
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
  CheckCircle2,
  Info,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Send,
  RotateCcw,
  HelpCircle,
} from 'lucide-react';

interface BookConsultationPageProps {
  onOpenBookingModal?: (treatmentName?: string) => void;
}

export const BookConsultationPage: React.FC<BookConsultationPageProps> = () => {
  const { navigate } = useRouter();
  const breadcrumbs = getBreadcrumbsForPath('/book-consultation');
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('General Consultation');
  const [message, setMessage] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'Phone' | 'SMS / Mobile' | 'Email'>('Phone');
  const [preferredTiming, setPreferredTiming] = useState('No Preference');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  // Form Validation & Status
  const [errors, setErrors] = useState<{
    fullName?: string;
    mobileNumber?: string;
    preferredDate?: string;
    preferredTime?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Micro-FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your mobile contact number.';
    } else if (mobileNumber.trim().length < 7) {
      newErrors.mobileNumber = 'Please enter a valid telephone or mobile number.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred appointment date.';
    } else if (preferredDate < getClinicToday()) {
      newErrors.preferredDate = 'Please choose today or a future date in Cebu time.';
    }

    if (!preferredTime) {
      newErrors.preferredTime = 'Please choose a preferred appointment time.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);
    const result = await submitInquiry({
      source: 'book-consultation',
      full_name: fullName,
      phone: mobileNumber,
      email: emailAddress,
      interest: areaOfInterest,
      message,
      preferred_contact_method: preferredContactMethod,
      preferred_timing: preferredTiming,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
    });
    setIsSubmitting(false);
    if (!result.ok) {
      setSubmitError('We could not send your request. Please try again or contact the clinic by phone.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setMobileNumber('');
    setEmailAddress('');
    setAreaOfInterest('General Consultation');
    setMessage('');
    setPreferredContactMethod('Phone');
    setPreferredTiming('No Preference');
    setPreferredDate('');
    setPreferredTime('');
    setErrors({});
    setSubmitError('');
    setIsSubmitted(false);
  };

  const expectationSteps = [
    {
      num: '01',
      title: 'Share Your Goals',
      copy: 'Tell the clinic what you would like to explore, what concerns you have, or what you would like to understand better.',
    },
    {
      num: '02',
      title: 'Discuss Your Options',
      copy: 'Use the conversation to ask questions and explore treatment approaches that may be relevant to your goals.',
    },
    {
      num: '03',
      title: 'Understand What Is Appropriate',
      copy: 'Treatment planning considers the individual, the concern being addressed, the selected approach, and professional assessment.',
    },
    {
      num: '04',
      title: 'Decide With Clarity',
      copy: 'You can use the information discussed to decide what feels appropriate for your next step.',
    },
  ];

  const questionsToAsk = [
    'What treatment options may be relevant to my goals?',
    'Why might one approach be considered over another?',
    'What should I realistically expect?',
    'Are there alternatives I should consider?',
    'What preparation should I know about?',
    'What aftercare should I expect?',
    'What is the current treatment price?',
    'Are there conditions attached to any current promotion?',
    'Who will perform the treatment?',
    'What should I do if I have concerns afterward?',
  ];

  const consultationFaqs = [
    {
      q: 'Do I need to know which treatment I want before requesting a consultation?',
      a: 'No. You are welcome to begin with your general concerns, questions, or aesthetic goals. Your clinician will help you understand which treatment approaches may be suitable for you.',
    },
    {
      q: 'Is a consultation required before treatment?',
      a: 'Whether a consultation is required can depend on the treatment and individual circumstances. Please confirm the current process with the clinic.',
    },
    {
      q: 'Can I discuss more than one concern?',
      a: 'Yes. You can use your consultation to discuss the concerns and areas you would like to explore, allowing your clinician to recommend a cohesive care plan.',
    },
    {
      q: 'Can I decide not to proceed after the consultation?',
      a: 'Absolutely. A consultation is an opportunity to understand your options, ask questions, and decide what feels comfortable for you without obligation.',
    },
    {
      q: 'Can I ask about pricing during the consultation?',
      a: 'Yes. You can ask about current pricing and applicable promotional terms, which will be confirmed based on your individualized treatment plan.',
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
                Your Consultation <span className="italic font-normal text-[#9E7A42]">Starts With You.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3C332D] leading-relaxed max-w-xl mb-8">
                Tell us what you'd like to explore, what concerns you have, or what you'd like to
                understand better. A consultation can be the first step toward identifying options
                that are appropriate for you.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 transition-all duration-300 shadow-sm focus:outline-none cursor-pointer"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#E8D8C3] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/treatments')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white/70 hover:bg-white transition-all duration-300 focus:outline-none"
                >
                  <ArrowLeft className="w-4 h-4 text-[#9E7A42]" />
                  <span>Explore Treatments</span>
                </button>
              </div>

              {/* Micro-note */}
              <div className="mt-8 pt-5 border-t border-[#E7DFD3]/80 flex items-center gap-3 text-xs text-[#8C7667]">
                <ShieldCheck className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>
                  The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City · 0956 783 5959
                </span>
              </div>
            </div>

            {/* Right Visual Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-white">
                <VisualAsset
                  type="doctor-care"
                  alt="Clinical Consultation Care at Elite Aesthetics Cebu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Consultation Care
                </div>
              </div>
              <p className="text-[11px] text-[#8C7667] text-center mt-2.5 italic">
                Thoughtful, unhurried consultation at The Ridges, Cebu City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. CONSULTATION PHILOSOPHY                                           */}
      {/* ==================================================================== */}
      <section className="bg-[#FAF7F2] py-8 border-b border-[#E7DFD3]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 bg-white border border-[#B89358]/40 luxury-card-shadow flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#B89358]/40 flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-4 h-4 text-[#9E7A42]" />
            </div>
            <div className="space-y-1.5 text-xs text-[#52453D] leading-relaxed">
              <h2 className="font-serif text-base text-[#1D1815] font-medium">
                Begin With a Conversation
              </h2>
              <p>
                You do not need to arrive with a treatment already chosen. Your consultation can be a
                space to discuss your goals, explore relevant options, ask questions, and understand
                what may be appropriate for you.
              </p>
              <p className="text-[11px] text-[#8C7667] italic pt-1 border-t border-[#E7DFD3]/60">
                Treatment suitability and recommendations depend on individual circumstances and
                professional assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. WHAT TO EXPECT (4-STEP EDITORIAL PATHWAY)                         */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              The Consultation Pathway
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              What to Expect
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              A structured, respectful process designed to provide clarity without commercial pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectationSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#FAF7F2] p-6 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[#9E7A42] tracking-wider uppercase block mb-3">
                    Step {step.num}
                  </span>
                  <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#52453D] leading-relaxed">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 4. PRIMARY CONSULTATION INQUIRY FORM & SIDEBAR                       */}
      {/* ==================================================================== */}
      <div ref={formRef} id="consultation-form">
        <SectionBackground variant="ivory" paddingY="lg" borderBottom={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Consultation Request Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#E7DFD3] luxury-card-shadow">
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-10 px-4 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#B89358]/40 flex items-center justify-center mx-auto text-[#9E7A42]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block">
                    Request Submitted
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-medium">
                    Thank You for Reaching Out.
                  </h3>
                  <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-md mx-auto">
                    Your preferred appointment date and time have been submitted for clinic review. This is a
                    request, not a confirmed booking; please wait for the clinic to contact you about availability.
                  </p>
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => navigate('/')}
                      className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
                    >
                      Return to Home
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/treatments')}
                      className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#29221E] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
                    >
                      Explore Treatments
                    </button>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs text-[#8C7667] hover:text-[#1D1815] underline transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-1">
                      Direct Request
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-light mb-2">
                      Request a Consultation
                    </h2>
                    <p className="text-xs text-[#685B52]">
                      Share a few details so the clinic can understand what you'd like to discuss.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferred-date" className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2">
                        Preferred Appointment Date <span className="text-[#9E7A42]">*</span>
                      </label>
                      <input
                        id="preferred-date"
                        type="date"
                        min={getClinicToday()}
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          setErrors((current) => ({ ...current, preferredDate: undefined }));
                        }}
                        aria-required="true"
                        aria-invalid={Boolean(errors.preferredDate)}
                        aria-describedby={errors.preferredDate ? 'preferred-date-error' : undefined}
                        className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors ${errors.preferredDate ? 'border-[#B85858]' : 'border-[#E7DFD3]'}`}
                      />
                      {errors.preferredDate && <p id="preferred-date-error" className="mt-1.5 text-xs text-[#B85858]">{errors.preferredDate}</p>}
                    </div>

                    <div>
                      <label htmlFor="preferred-time" className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2">
                        Preferred Appointment Time <span className="text-[#9E7A42]">*</span>
                      </label>
                      <input
                        id="preferred-time"
                        type="time"
                        value={preferredTime}
                        onChange={(e) => {
                          setPreferredTime(e.target.value);
                          setErrors((current) => ({ ...current, preferredTime: undefined }));
                        }}
                        aria-required="true"
                        aria-invalid={Boolean(errors.preferredTime)}
                        aria-describedby={errors.preferredTime ? 'preferred-time-error' : undefined}
                        className={`w-full px-4 py-3 text-sm bg-[#FAF7F2] border text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors ${errors.preferredTime ? 'border-[#B85858]' : 'border-[#E7DFD3]'}`}
                      />
                      {errors.preferredTime && <p id="preferred-time-error" className="mt-1.5 text-xs text-[#B85858]">{errors.preferredTime}</p>}
                      <p className="mt-1.5 text-xs text-[#685B52]">Requested times use Cebu time (Asia/Manila) and require clinic confirmation.</p>
                    </div>
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
                    {/* Email Address */}
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

                    {/* Primary Area of Interest */}
                    <div>
                      <label
                        htmlFor="primary-interest"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                      >
                        Primary Area of Interest
                      </label>
                      <select
                        id="primary-interest"
                        value={areaOfInterest}
                        onChange={(e) => setAreaOfInterest(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#E7DFD3] text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors"
                      >
                        <option value="General Consultation">General Consultation</option>
                        <option value="Facials & Skin">Facials & Skin</option>
                        <option value="Laser & Advanced Treatments">Laser & Advanced Treatments</option>
                        <option value="Injectables">Injectables</option>
                        <option value="Body Sculpting">Body Sculpting</option>
                        <option value="Wellness & IV">Wellness & IV</option>
                        <option value="Hair Restoration">Hair Restoration</option>
                        <option value="Medical Weight Management">Medical Weight Management</option>
                        <option value="Massage & Relaxation">Massage & Relaxation</option>
                        <option value="Unsure — I'd Like Guidance">Unsure — I'd Like Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                    >
                      What Would You Like to Discuss? <span className="text-[#8C7667] text-[10px] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      maxLength={2000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you'd like to explore, what concerns you have, or what you'd like to understand better."
                      className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#E7DFD3] text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Preferred Contact Method */}
                    <div>
                      <label
                        htmlFor="contact-method"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                      >
                        Preferred Contact Method
                      </label>
                      <select
                        id="contact-method"
                        value={preferredContactMethod}
                        onChange={(e) => setPreferredContactMethod(e.target.value as any)}
                        className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#E7DFD3] text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors"
                      >
                        <option value="Phone">Phone</option>
                        <option value="SMS / Mobile">SMS / Mobile</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>

                    {/* Preferred Timing */}
                    <div>
                      <label
                        htmlFor="timing-preference"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#2C2420] mb-2"
                      >
                        When would you prefer to be contacted?
                      </label>
                      <select
                        id="timing-preference"
                        value={preferredTiming}
                        onChange={(e) => setPreferredTiming(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-[#FAF7F2] border border-[#E7DFD3] text-[#1D1815] focus:outline-none focus:border-[#9E7A42] transition-colors"
                      >
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        <option value="No Preference">No Preference</option>
                      </select>
                    </div>
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
                      <span>{isSubmitting ? 'Sending…' : 'Request a Consultation'}</span>
                    </button>
                  </div>

                  {/* Form Governance Note */}
                  <div className="pt-3 border-t border-[#E7DFD3]/80">
                    <p className="text-[11px] text-[#736055] leading-relaxed italic">
                      Please avoid submitting highly sensitive medical information through this general
                      consultation request. Relevant medical information can be discussed directly with
                      an appropriately qualified professional.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Sidebar / Support Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Before You Begin Card */}
              <div className="bg-white p-6 sm:p-8 border border-[#E7DFD3] luxury-card-shadow space-y-4">
                <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block">
                  Support Guide
                </span>
                <h3 className="font-serif text-2xl text-[#1D1815] font-light">
                  Before You Begin
                </h3>

                <div className="space-y-4 text-xs text-[#52453D] leading-relaxed pt-2">
                  <div>
                    <h4 className="font-serif text-sm text-[#1D1815] font-medium mb-1">
                      You can start with a concern.
                    </h4>
                    <p>
                      You do not need to know the name of a treatment before contacting the clinic.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm text-[#1D1815] font-medium mb-1">
                      Bring your questions.
                    </h4>
                    <p>
                      Ask about suitability, alternatives, expectations, preparation, aftercare, or
                      anything else that matters to you.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm text-[#1D1815] font-medium mb-1">
                      Take your time.
                    </h4>
                    <p>
                      A consultation is an opportunity to understand your options before deciding what
                      to do next.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Clinic Contact Card */}
              <div className="bg-[#FAF7F2] p-6 border border-[#E7DFD3] luxury-card-shadow space-y-3">
                <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block">
                  Verified Clinic Details
                </span>
                <h4 className="font-serif text-lg text-[#1D1815] font-medium">
                  Elite Aesthetics Cebu
                </h4>
                <p className="text-xs text-[#52453D] leading-relaxed">
                  The Ridges Commercial Center<br />
                  F. Cabahug Street, Kasambagan, Cebu City
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+639567835959"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 0956 783 5959</span>
                  </a>
                </div>
              </div>

              {/* Appointment Availability Governance Notice */}
              <div className="p-4 bg-white border border-[#E7DFD3] flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <p className="text-xs text-[#685B52] leading-relaxed">
                  <strong className="text-[#1D1815]">Availability Notice:</strong> Consultation requests
                  are subject to clinic availability. Please contact Elite Aesthetics Cebu directly to
                  confirm scheduling details.
                </p>
              </div>
            </div>
          </div>
        </SectionBackground>
      </div>

      {/* ==================================================================== */}
      {/* 5. QUESTIONS WORTH BRINGING WITH YOU (CHECKLIST)                     */}
      {/* ==================================================================== */}
      <SectionBackground variant="champagne" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Informed Decision-Making
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Questions Worth Bringing With You
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              We welcome every question. Consider bringing this checklist to your consultation visit:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questionsToAsk.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 border border-[#E7DFD3] luxury-card-shadow flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#B89358]/40 flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold text-[#9E7A42]">
                  {index + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#2C2420] font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#8C7667] text-center italic mt-8">
            Your clinician will take the time to address each of these points in detail.
          </p>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 6. RELATED TREATMENT DISCOVERY                                       */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Treatment Overview
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Explore Before You Decide
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              If you would like to understand the clinic's treatment areas before requesting a
              consultation, explore the treatment categories below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {DETAILED_TREATMENT_CATEGORIES.map((category: DetailedTreatmentCategory) => (
              <div
                key={category.id}
                className="bg-[#FAF7F2] p-6 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between hover:border-[#C9A77E] transition-all duration-300 group"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
                    {category.badge}
                  </span>
                  <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2 group-hover:text-[#9E7A42] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#685B52] leading-relaxed mb-4 line-clamp-3">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DFD3]/60 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => navigate(`/treatments/${category.slug}`)}
                    className="font-semibold uppercase tracking-wider text-[#1D1815] hover:text-[#9E7A42] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B89358]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/treatments')}
              className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
            >
              <span>Explore All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 7. FAQ SUPPORT SECTION                                               */}
      {/* ==================================================================== */}
      <SectionBackground variant="warm-taupe" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Consultation Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Common Questions About Consultations
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              Clear answers to help you feel informed and prepared for your visit.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {consultationFaqs.map((faq, idx) => {
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
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 8. DARK EDITORIAL SECTION — CLARITY BEFORE COMMITMENT                */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="Consultation Standard"
        title="Clarity Before"
        italicTitleWord="Commitment."
        description="The purpose of a consultation is not simply to choose a treatment. It is to understand your options well enough to decide what feels appropriate for you."
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
              Understand
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Learn what may be relevant to your unique facial features and personal goals.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Value 02
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Ask
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Explore the questions that matter to you in an unhurried, comfortable dialogue.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Decide
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              With Confidence
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Move forward only when you feel thoroughly informed, comfortable, and prepared.
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
            Start With a <span className="italic font-normal text-[#9E7A42]">Question.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-xl mx-auto mb-8">
            If you're ready to explore your options, request a consultation and begin the conversation
            with Elite Aesthetics Cebu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none shadow-sm cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
              <span>Request a Consultation</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
            >
              <Phone className="w-3.5 h-3.5 text-[#9E7A42]" />
              <span>Contact the Clinic</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/treatments')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#685B52] hover:text-[#1D1815] transition-colors focus:outline-none"
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
