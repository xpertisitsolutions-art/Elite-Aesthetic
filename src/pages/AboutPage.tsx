/**
 * About Page Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /about
 * Architectural compliance: Prompt #4
 */

import React from 'react';
import { SubpageHero } from '../components/SubpageHero';
import { InternalCTA } from '../components/InternalCTA';
import { ContactBlock } from '../components/ContactBlock';
import { VisualAsset } from '../components/VisualAsset';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { CLINIC_INFO } from '../data/clinicData';
import { useRouter } from '../router/Router';
import { TeamSection } from '../components/team/TeamSection';
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  MessageSquare,
  Compass,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  MapPin,
  Clock,
  UserCheck,
} from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const breadcrumbs = getBreadcrumbsForPath('/about');

  // 4 Brand Principles as defined in Prompt #4
  const brandPrinciples = [
    {
      number: '01',
      title: 'PERSONALIZED',
      statement: 'Care begins with understanding individual goals.',
      description:
        'Every face, body, and skin profile possesses unique characteristics. We tailor protocols to respect your natural features rather than imposing uniform standards.',
    },
    {
      number: '02',
      title: 'THOUGHTFUL',
      statement: 'Treatment options are discussed with attention to suitability and expectations.',
      description:
        'Aesthetic decisions warrant careful consideration. We take time to evaluate suitability, explain realistic outcomes, and formulate gentle, conservative recommendations.',
    },
    {
      number: '03',
      title: 'ATTENTIVE',
      statement: 'The patient experience should feel informed, respectful, and personal.',
      description:
        'From your first inquiry to post-procedure check-ins, our clinical team focuses on clear communication, patient dignity, and your overall physical comfort.',
    },
    {
      number: '04',
      title: 'TRANSPARENT',
      statement: 'Clear communication helps patients understand available options before deciding.',
      description:
        'We outline protocol steps, session expectations, and aftercare guidance openly so you always feel confident and in control of your aesthetic choices.',
    },
  ];

  // 5-Step Consultation Conceptual Flow
  const consultationSteps = [
    {
      step: '01',
      name: 'Listen',
      description:
        'We begin by listening to your personal concerns, daily routine, and aesthetic goals in an unhurried, private conversation.',
    },
    {
      step: '02',
      name: 'Understand',
      description:
        'Our team evaluates your skin profile, facial harmony, or body goals to understand what makes your anatomy unique.',
    },
    {
      step: '03',
      name: 'Discuss',
      description:
        'We review suitable aesthetic options, explain treatment sensations, and establish realistic, conservative expectations.',
    },
    {
      step: '04',
      name: 'Recommend',
      description:
        'You receive a tailored care recommendation designed around your comfort, schedule, and individual wellness timeline.',
    },
    {
      step: '05',
      name: 'Plan',
      description:
        'Together, we schedule treatments with clear pre-care guidelines and attentive post-procedure check-in support.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#2C2420]">
      {/* ==================================================================== */}
      {/* 1. ABOUT HERO                                                        */}
      {/* ==================================================================== */}
      <SubpageHero
        eyebrow="ABOUT ELITE AESTHETICS"
        title="Beauty Beyond"
        italicTitleWord="Imperfection"
        supportingText="Personalized aesthetic care begins with understanding what makes you uniquely you. Discover a consultation-first approach to aesthetic and wellness care in Cebu City."
        breadcrumbs={breadcrumbs}
        imageSlot="hero"
        imageAlt="Elite Aesthetics Cebu Reception and Welcome Sanctuary at The Ridges Commercial Center"
        primaryCtaLabel="BOOK A CONSULTATION"
        onPrimaryCta={onOpenBooking}
        secondaryCtaLabel="EXPLORE TREATMENTS"
        onSecondaryCta={() => navigate('/treatments')}
      />

      {/* ==================================================================== */}
      {/* 2. THE ELITE AESTHETICS PHILOSOPHY                                  */}
      {/* ==================================================================== */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
              <span>The Clinic Philosophy</span>
              <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              <span>Cebu City</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-6 text-balance">
              A Dedicated Sanctuary for Thoughtful Aesthetic & Wellness Care
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#52453D] leading-relaxed">
              <p>
                At Elite Aesthetics, we view aesthetic care as an attentive personal journey. Located
                at The Ridges Commercial Center in Kasambagan, Cebu City, our clinic was established to
                provide an unhurried, comfortable setting where individuals can explore treatments with
                clarity, dignity, and individualized attention.
              </p>
              <p>
                Rather than prescribing standardized packages, we place consultation at the core of
                every patient interaction. We take the time to examine your unique skin characteristics,
                understand your personal aesthetic aspirations, and propose protocols tailored to your
                features and personal comfort.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#E7DFD3]/80">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-1">
                  Focus
                </span>
                <p className="font-serif text-base text-[#1D1815]">Individuality & Balance</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-1">
                  Approach
                </span>
                <p className="font-serif text-base text-[#1D1815]">Consultation-First</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-1">
                  Setting
                </span>
                <p className="font-serif text-base text-[#1D1815]">Private Sanctuary</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[3/4] w-full overflow-hidden luxury-card-shadow border border-[#E7DFD3] bg-[#FAF7F2]">
                <VisualAsset
                  type="clinic-suite"
                  alt="Elite Aesthetics Cebu Treatment Suite Environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-4 border border-[#B89358]/30 shadow-xs">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-0.5">
                    Clinic Sanctuary
                  </span>
                  <p className="font-serif text-sm text-[#1D1815]">
                    Designed for comfort, tranquility, and attentive care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. BEAUTY BEYOND IMPERFECTION (Distinctive Editorial Feature)        */}
      {/* ==================================================================== */}
      <section className="py-20 md:py-28 bg-[#F3EDE4]/60 border-b border-[#E7DFD3]/70 relative overflow-hidden">
        {/* Subtle decorative background flourishes */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(201,167,126,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-[#B89358]/60" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#9E7A42] font-semibold">
              The Brand Philosophy
            </span>
            <span className="w-10 h-[1px] bg-[#B89358]/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-8 text-balance">
            &ldquo;Beauty is not about eliminating every imperfection. It is about understanding the
            features that make you unique and exploring thoughtful ways to care for them.&rdquo;
          </h2>

          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-[#52453D] leading-relaxed">
            <p>
              In modern aesthetic care, restraint is an art. We believe authentic confidence comes
              from respecting your individual facial contours, personal health, and vitality. Our
              treatments are planned to revitalize your natural appearance rather than transform you
              into someone else.
            </p>
            <p className="text-xs sm:text-sm text-[#736055] italic">
              All treatment decisions are personal. During your consultation, we review your individual
              goals, discuss realistic expectations, and identify treatment options best suited to
              your needs.
            </p>
          </div>

          <div className="pt-8 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/40 transition-colors focus:outline-none shadow-sm"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
            </button>

            <button
              type="button"
              onClick={() => navigate('/treatments')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#1D1815] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
            >
              <span>EXPLORE TREATMENTS</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 4. THE CLINIC EXPERIENCE (Visual Storytelling Section)                */}
      {/* ==================================================================== */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
            <span>Inside the Clinic</span>
            <span aria-hidden="true" className="text-[#C9A77E]">·</span>
            <span>The Ridges Commercial Center</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            A Calm, Welcoming Environment for Aesthetic Care
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Every aspect of the Elite Aesthetics interior has been configured to foster relaxation,
            discretion, and personal ease. Take a visual walkthrough of our clinic spaces in
            Kasambagan, Cebu City.
          </p>
        </div>

        {/* 3-Column Photography Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Reception Area */}
          <div className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between overflow-hidden group">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
              <VisualAsset
                type="hero"
                alt="Elite Aesthetics Cebu Reception and Welcome Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-1">
                Lounge & Reception
              </span>
              <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2">
                Warm Welcome
              </h3>
              <p className="text-xs text-[#685B52] leading-relaxed">
                A serene reception lounge where consultations begin calmly and appointments are handled
                with dedicated attention and prompt assistance.
              </p>
            </div>
          </div>

          {/* Card 2: Consultation Suite */}
          <div className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between overflow-hidden group">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
              <VisualAsset
                type="injectables"
                alt="Elite Aesthetics Cebu Private Consultation and Treatment Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-1">
                Clinical Suites
              </span>
              <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2">
                Dedicated Treatment Rooms
              </h3>
              <p className="text-xs text-[#685B52] leading-relaxed">
                Quiet, dedicated spaces arranged for personal comfort, modern aesthetic instrumentation,
                and attentive one-on-one evaluations.
              </p>
            </div>
          </div>

          {/* Card 3: Wellness & Recovery Setting */}
          <div className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between overflow-hidden group">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
              <VisualAsset
                type="wellness-iv"
                alt="Elite Aesthetics Cebu Wellness Suite at The Ridges"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-1">
                Wellness & Rest
              </span>
              <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2">
                Restful Treatment Setting
              </h3>
              <p className="text-xs text-[#685B52] leading-relaxed">
                Gentle ambient lighting and comfortable seating designed to make infusion protocols,
                facials, and body sessions restorative and peaceful.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#FAF7F2] border border-[#E7DFD3] text-center max-w-xl mx-auto">
          <p className="text-xs text-[#685B52]">
            All photographs depict authentic interior spaces at The Ridges Commercial Center, Cebu City.
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. PERSONALIZED CONSULTATION (Step-by-Step Flow)                    */}
      {/* ==================================================================== */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
            The Consultation Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            How Your Consultation Unfolds
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            We follow an intentional, respectful process to ensure you feel heard, informed, and
            supported throughout your aesthetic care.
          </p>
        </div>

        {/* 5 Steps Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {consultationSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl text-[#9E7A42] font-light block mb-3">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-[#685B52] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E7DFD3]/60 flex items-center gap-1.5 text-[10px] text-[#9E7A42] uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-3 h-3" />
                <span>Patient-First</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Governance Callout Banner */}
        <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base text-[#1D1815] font-medium mb-1">
                Professional Consultation Note
              </h4>
              <p className="text-xs text-[#685B52] leading-relaxed">
                Treatment options can be discussed during consultation based on individual goals,
                skin or aesthetic concerns, medical suitability, and the clinic's professional
                assessment. No treatment is performed without prior evaluation and mutual agreement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. THE CARE ENVIRONMENT                                             */}
      {/* ==================================================================== */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Photography Inset (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden luxury-card-shadow border border-[#E7DFD3] bg-[#FAF7F2]">
                <VisualAsset
                  type="doctor-care"
                  alt="Attentive Clinical Care and Consultation at Elite Aesthetics Cebu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 border border-[#B89358]/40">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block">
                    Attentive Care
                  </span>
                  <span className="text-[11px] text-[#241D18] font-serif italic">
                    The Ridges Commercial Center
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus Elements (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
              <span>Patient Experience</span>
              <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              <span>Attentive Service</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-6">
              Thoughtful Communication in a Welcoming Setting
            </h2>

            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed mb-6">
              A visit to an aesthetic clinic should feel reassuring, transparent, and restorative.
              Our practice is built around providing thoughtful communication and personal attention
              at every step of your appointment.
            </p>

            {/* Feature Points */}
            <div className="space-y-4 pt-2 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#FAF7F2] border border-[#E7DFD3] text-[#9E7A42] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1D1815] font-medium">Personal Comfort</h4>
                  <p className="text-xs text-[#685B52] leading-relaxed mt-0.5">
                    Appointments are spaced to prevent crowded waiting areas and ensure unhurried
                    conversations with our staff.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#FAF7F2] border border-[#E7DFD3] text-[#9E7A42] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1D1815] font-medium">Thoughtful Care</h4>
                  <p className="text-xs text-[#685B52] leading-relaxed mt-0.5">
                    Our team provides clear pre-treatment recommendations and detailed home-care
                    guidance for continuous support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-[#FAF7F2] border border-[#E7DFD3] text-[#9E7A42] shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1D1815] font-medium">Accessible Support</h4>
                  <p className="text-xs text-[#685B52] leading-relaxed mt-0.5">
                    Questions about procedures, scheduling, or aftercare are answered directly by our
                    clinic team via phone or email.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-[#1D1815] bg-white border border-[#DBC3A3] hover:border-[#9E7A42] hover:text-[#9E7A42] transition-colors focus:outline-none shadow-xs"
            >
              <span>EXPERIENCE OUR CLINIC CARE</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B89358]" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. OUR APPROACH TO AESTHETIC CARE (4 Brand Principles)              */}
      {/* ==================================================================== */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
            Brand Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            Our Approach to Aesthetic Care
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Four guiding values shape every consultation, recommendation, and patient experience at
            Elite Aesthetics Cebu.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="bg-white p-7 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl text-[#9E7A42] font-light block mb-2">
                  {principle.number}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C7667] font-semibold block mb-2">
                  {principle.title}
                </span>
                <h3 className="font-serif text-lg text-[#1D1815] font-medium leading-snug mb-3">
                  {principle.statement}
                </h3>
                <p className="text-xs text-[#685B52] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E7DFD3]/60 flex items-center gap-1.5 text-[10px] text-[#9E7A42] uppercase tracking-wider font-semibold">
                <Sparkles className="w-3 h-3 text-[#B89358]" />
                <span>Elite Aesthetics Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8. MEET THE TEAM / PEOPLE & CARE PRACTITIONERS                       */}
      {/* ==================================================================== */}
      <TeamSection onOpenBooking={onOpenBooking} />

      {/* ==================================================================== */}
      {/* 9. LOCATION & CONTACT (Reusable ContactBlock)                       */}
      {/* ==================================================================== */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Reusable ContactBlock (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ContactBlock variant="card" showDirectionsButton={true} />
          </div>

          {/* Right Column: The Ridges Location Context (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white p-6 sm:p-8 border border-[#E7DFD3] luxury-card-shadow flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
                  Clinic Location
                </span>
                <h3 className="font-serif text-2xl text-[#1D1815] font-medium mb-3">
                  Visiting Us in Kasambagan, Cebu City
                </h3>
                <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed mb-6">
                  Elite Aesthetics is conveniently situated within The Ridges Commercial Center on
                  F. Cabahug Street, Kasambagan. The location offers easy vehicle accessibility and
                  dedicated on-site commercial parking for patient comfort.
                </p>

                {/* Map Direction Visual Box */}
                <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-base text-[#1D1815] font-medium">
                        The Ridges Commercial Center
                      </h4>
                      <p className="text-xs text-[#685B52] mt-0.5">
                        F. Cabahug Street, Kasambagan, Cebu City, Philippines
                      </p>
                    </div>
                  </div>

                  <a
                    href={CLINIC_INFO.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
                  >
                    <span>View Map</span>
                    <ArrowRight className="w-3 h-3 text-[#E8D8C3]" />
                  </a>
                </div>
              </div>

              {/* Consultation Scheduling Note */}
              <div className="pt-4 border-t border-[#E7DFD3] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#685B52]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#9E7A42] shrink-0" />
                  <span>Clinic hours: Please contact Elite Aesthetics for the current appointment schedule.</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors self-start sm:self-auto"
                >
                  Book Visit →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 10. CONSULTATION CTA                                                */}
      {/* ==================================================================== */}
      <InternalCTA
        title="Your Aesthetic Journey Starts with a"
        italicWord="Conversation"
        subtitle="Individualized Aesthetic Care at The Ridges"
        supportingText="Discuss your goals with the Elite Aesthetics team and explore options suited to your individual needs."
        primaryLabel="BOOK A CONSULTATION"
        onPrimaryClick={onOpenBooking}
        secondaryLabel="EXPLORE TREATMENTS"
        secondaryPath="/treatments"
      />
    </div>
  );
};
