/**
 * Massage & Relaxation Category Page — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /treatments/massage-relaxation
 * Master Category Page Architecture (Prompt #13)
 * Identity: Restorative Tone, Personal Comfort, Intentional Self-Care, Quiet Luxury, Zero Unsupported Medical Claims
 */

import React from 'react';
import { getCategoryBySlug, DetailedTreatmentCategory } from '../data/treatmentsData';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { useRouter } from '../router/Router';
import { VisualAsset } from '../components/VisualAsset';
import { InternalCTA } from '../components/InternalCTA';
import {
  SectionBackground,
  DarkFeatureSection,
} from '../components/ui/LayoutPrimitives';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface MassageRelaxationPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const MassageRelaxationPage: React.FC<MassageRelaxationPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const category = getCategoryBySlug('massage-relaxation');
  const breadcrumbs = getBreadcrumbsForPath('/treatments/massage-relaxation');

  if (!category) {
    return null;
  }

  // Cross-navigation disciplines: Wellness & IV, Facials & Skin, Body Sculpting, Medical Weight Management
  const relatedSlugs = [
    'wellness-iv',
    'facials-skin',
    'body-sculpting',
    'medical-weight-mgmt',
  ];
  const crossCategories = relatedSlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is DetailedTreatmentCategory => Boolean(c));

  return (
    <div className="bg-[#FAF7F2] text-[#2C2420]">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION (EDITORIAL SPLIT COMPOSITION)                        */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 md:pt-12 md:pb-24 border-b border-[#E7DFD3]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
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
            {/* Left Column: Editorial Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
                <span>Treatment Discipline</span>
                <span aria-hidden="true" className="text-[#C9A77E]">·</span>
                <span>{category.badge}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1D1815] font-light leading-[1.12] tracking-tight mb-5 text-balance">
                Rest, Relaxation, <span className="italic font-normal text-[#9E7A42]">Thoughtfully Personalized.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3C332D] leading-relaxed max-w-xl mb-8">
                {category.heroSupporting || category.shortDescription}
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Massage & Relaxation')}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 transition-all duration-300 shadow-sm focus:outline-none"
                >
                  <span>Book a Consultation</span>
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

              {/* Sub-hero Location Micro-note */}
              <div className="mt-8 pt-5 border-t border-[#E7DFD3]/80 flex items-center gap-3 text-xs text-[#8C7667]">
                <ShieldCheck className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>
                  The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City · 0956 783 5959
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-white">
                <VisualAsset
                  type="massage-relaxation"
                  alt="Relaxation and Bodywork Suite at Elite Aesthetics Cebu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Approved Clinical Asset
                </div>
              </div>
              <p className="text-[11px] text-[#8C7667] text-center mt-2.5 italic">
                Serene relaxation and bodywork suite at Elite Aesthetics Cebu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. INTRODUCTION — A MOMENT TO PAUSE                                 */}
      {/* ==================================================================== */}
      <SectionBackground variant="ivory" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
            <span className="text-xs uppercase tracking-[0.26em] text-[#9E7A42] font-semibold">
              Intentional Time Away
            </span>
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light mb-6 tracking-tight text-balance">
            A Moment to Pause
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#3C332D] leading-relaxed max-w-3xl mx-auto">
            <p>
              Modern self-care can include simply creating intentional time to rest, recharge, and
              reconnect with yourself. In a fast-paced environment, taking unhurried time away from daily
              demands is an essential part of personal balance.
            </p>
            <p>
              At Elite Aesthetics, our massage and relaxation experiences are designed to offer a calm,
              attentive sanctuary where your comfort, personal preferences, and preferred pace guide
              every moment.
            </p>
            <p className="text-xs sm:text-sm text-[#736055] italic pt-2">
              Website information is intended for educational exploration and should not replace
              professional guidance.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 3. UNDERSTANDING MASSAGE & RELAXATION                                */}
      {/* ==================================================================== */}
      <SectionBackground
        variant="white"
        paddingY="lg"
        ghostedAssetKey="hero-wide"
        ghostedOpacity={0.10}
        ghostedFade="radial"
        borderBottom={true}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
            <span className="text-xs uppercase tracking-[0.26em] text-[#9E7A42] font-semibold">
              Personalized Experience
            </span>
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-6 tracking-tight text-balance">
            Understanding Your Relaxation Experience
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#3C332D] leading-relaxed max-w-3xl mx-auto">
            <p>
              Massage experiences can form part of an individual's personal self-care routine. Comfort
              preferences, session atmosphere, and focus areas can vary significantly from one person
              to another.
            </p>
            <p>
              Rather than adopting a rigid formula, we emphasize an unhurried, attentive approach that
              respects your preferences, communication, and comfort level from start to finish.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 4. MASSAGE & RELAXATION DISCOVERY AREAS                              */}
      {/* ==================================================================== */}
      <SectionBackground variant="warm-taupe" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
            <span>Wellness Scope</span>
            <span aria-hidden="true" className="text-[#C9A77E]">·</span>
            <span>Disciplines of Care</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
            What Falls Within Massage & Relaxation
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Explore five core disciplines of intentional relaxation and restorative care. These
            represent exploratory pathways to discuss during your consultation.
          </p>
        </div>

        {/* 5 Discovery Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {(category.discoveryAreas || []).map((area, index) => (
            <div
              key={area.id}
              className="bg-white p-7 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between hover:border-[#C9A77E] transition-all duration-300"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
                  0{index + 1} — Discovery Area
                </span>
                <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2.5">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed">
                  {area.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7DFD3]/60 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => onOpenBooking(`Relaxation: ${area.title}`)}
                  className="font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                >
                  <span>Discuss Preferences</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Notice */}
        <div className="p-4 bg-white/80 border border-[#E7DFD3] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#8C7667] italic">
            Specific session options, protocols, and individual preferences are discussed prior to care.
          </p>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 5. FEATURED MASSAGE EXPERIENCE — INTENTIONAL WAY TO UNWIND           */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Large Image on Left (55% width on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-[#FAF7F2]">
              <VisualAsset
                type="massage-relaxation"
                alt="Massage and Relaxation Environment at Elite Aesthetics Cebu"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                Signature Relaxation Suite
              </div>
            </div>
            <p className="text-[11px] text-[#8C7667] text-center mt-2 italic">
              Authentic relaxation environment at Elite Aesthetics Cebu.
            </p>
          </div>

          {/* Editorial Text on Right (45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Dedicated Self-Care</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
              A More Intentional Way to Unwind
            </h2>

            <p className="text-sm sm:text-base text-[#3C332D] leading-relaxed mb-6 font-normal">
              Whether you are creating space for yourself after a demanding week or simply making time
              for a moment of calm, a thoughtful massage experience can become part of a more
              intentional self-care ritual.
            </p>

            {/* Three Supporting Pillars */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Personal Comfort:</strong> Sessions are shaped around your individual
                  comfort level, focus areas, and preferred pressure.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Calm Atmosphere:</strong> Quiet suites designed to provide an unhurried,
                  peaceful ambiance away from daily distraction.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Attentive Care:</strong> Thoughtful staff committed to respectful,
                  personalized attention throughout your visit.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking('Massage & Relaxation')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
              >
                <span>Book a Consultation</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking('Massage & Relaxation')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#241D18] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
              >
                <span>Inquire About Preferences</span>
              </button>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 6. BROADER EDITORIAL SECTION — SELF-CARE, AT YOUR OWN PACE          */}
      {/* ==================================================================== */}
      <SectionBackground variant="champagne" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
            Holistic Perspective
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            Self-Care, At Your Own Pace
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-2xl mx-auto">
            Relaxation looks different for every individual. Finding what helps you unwind begins with
            listening to your needs, honoring your pace, and choosing experiences that feel appropriate
            to your personal routine.
          </p>
        </div>

        {/* Three Conceptual Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-7 border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
              Pillar 01
            </span>
            <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2.5">
              Personal Atmosphere
            </h3>
            <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed">
              Quiet, gentle surroundings that allow you to unwind without feeling rushed.
            </p>
          </div>

          <div className="bg-white p-7 border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
              Pillar 02
            </span>
            <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2.5">
              Individual Pace
            </h3>
            <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed">
              Sessions that respect your natural rhythm and personal preference for quiet or conversation.
            </p>
          </div>

          <div className="bg-white p-7 border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
              Pillar 03
            </span>
            <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2.5">
              Thoughtful Balance
            </h3>
            <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed">
              A complementary experience that fits seamlessly into your broader wellness rhythm.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 7. CONCERN / GOAL DISCOVERY — WHAT BRINGS YOU IN?                    */}
      {/* ==================================================================== */}
      <SectionBackground variant="cream" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Exploration Pathways</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
            What Brings You In?
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Whether you are seeking intentional quiet or setting aside time for self-care, explore the
            pathways below to help shape your visit.
          </p>
        </div>

        {/* 4 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {(category.concernPathways || []).map((pathway) => (
            <div
              key={pathway.id}
              className="bg-white p-6 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between hover:border-[#C9A77E] transition-all duration-300"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
                  Focus Pathway
                </span>
                <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2">
                  {pathway.title}
                </h3>
                <p className="text-xs text-[#685B52] leading-relaxed mb-4">
                  {pathway.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7DFD3]/60">
                <button
                  type="button"
                  onClick={() => onOpenBooking(`Relaxation Focus: ${pathway.title}`)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#1D1815] hover:text-[#9E7A42] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                >
                  <span>Discuss in Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89358]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Language Governance Note */}
        <p className="text-xs text-[#8C7667] text-center italic">
          Experiences are shaped around individual preferences. Elite Aesthetics does not make medical or
          therapeutic outcome claims.
        </p>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 8. FULL-WIDTH EDITORIAL IMAGE MOMENT                                 */}
      {/* ==================================================================== */}
      <section className="relative h-[380px] sm:h-[440px] md:h-[500px] w-full overflow-hidden border-y border-[#B89358]/30">
        <VisualAsset
          type="clinic-suite"
          alt="Quiet clinical and relaxation suite environment at Elite Aesthetics Cebu"
          className="w-full h-full object-cover"
        />
        {/* Dark editorial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1815]/90 via-[#1D1815]/50 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.24em] text-[#C9A77E] font-semibold block mb-2">
                The Ridges · Cebu City
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-light mb-3">
                A Moment of Quiet Caliber.
              </h2>
              <p className="text-xs sm:text-sm text-[#EBDCC8]/90 leading-relaxed">
                Thoughtful relaxation begins with creating space for calm, comfort, and attentive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 9. PERSONALIZED PLANNING SECTION (STRUCTURED PROCESS)                */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
            The Patient Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            Your Experience Begins With Understanding
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Our structured approach ensures you feel informed, comfortable, and respected in every
            aspect of your visit.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(category.planningSteps || []).map((stepItem) => (
            <div
              key={stepItem.step}
              className="bg-[#FAF7F2] p-7 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between hover:border-[#9E7A42] transition-colors duration-300"
            >
              <div>
                <span className="font-serif text-3xl text-[#9E7A42] font-light block mb-2">
                  {stepItem.step}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C7667] font-semibold block mb-1">
                  {stepItem.subtitle}
                </span>
                <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-[#685B52] leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E7DFD3]/60 text-[10px] text-[#9E7A42] uppercase tracking-wider font-semibold">
                Personalized Care
              </div>
            </div>
          ))}
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 10. DARK ESPRESSO FEATURE SECTION — MAKE SPACE FOR YOURSELF          */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="Massage & Relaxation"
        title="Make Space"
        italicTitleWord="For Yourself."
        description="Thoughtful self-care is not about meeting an expectation—it is about carving out space to slow down, unwind, and experience personalized comfort in a tranquil environment."
        ghostedAssetKey="clinic-suite"
        ghostedOpacity={0.08}
        ghostedMask="soft-edges"
        paddingY="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Principle 01
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Intentional Self-Care
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Dedicate unhurried time for personal comfort away from routine demands.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Principle 02
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Respectful Attentiveness
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Every detail is tailored to your preferences, comfort, and desired atmosphere.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Principle 03
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Tranquil Sanctuary
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Quiet suites designed to support deep relaxation without rush or intrusion.
            </p>
          </div>
        </div>
      </DarkFeatureSection>

      {/* ==================================================================== */}
      {/* 11. CARE & CONTENT GOVERNANCE                                        */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="sm" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-[#52453D] leading-relaxed">
              <h3 className="font-serif text-base text-[#1D1815] font-medium">
                {category.governanceHeading || 'Thoughtful Care, Clear Expectations'}
              </h3>
              <p>
                {category.governanceText ||
                  'Experiences should be selected according to individual preferences and circumstances. Information presented on this website is general and does not replace professional medical advice. Clients should communicate relevant concerns or physical considerations before beginning care.'}
              </p>
              <p className="text-[11px] text-[#8C7667] italic pt-1">
                Individual experiences and preferences may vary.
              </p>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 12. RELATED TREATMENT DISCIPLINES ("Continue Exploring")             */}
      {/* ==================================================================== */}
      <SectionBackground variant="champagne" paddingY="md" borderBottom={true}>
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
            Connected Disciplines
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-light">
            Continue Exploring
          </h2>
          <p className="text-xs sm:text-sm text-[#685B52] mt-1">
            Discover other aesthetic and wellness categories offered at Elite Aesthetics Cebu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crossCategories.map((relCat) => (
            <div
              key={relCat.id}
              className="bg-white p-6 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between hover:border-[#C9A77E] transition-all duration-300 group"
            >
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
                  {relCat.badge}
                </span>
                <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2 group-hover:text-[#9E7A42] transition-colors">
                  {relCat.name}
                </h3>
                <p className="text-xs text-[#685B52] leading-relaxed mb-4 line-clamp-3">
                  {relCat.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7DFD3]/60 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => navigate(`/treatments/${relCat.slug}`)}
                  className="font-semibold uppercase tracking-wider text-[#1D1815] hover:text-[#9E7A42] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                >
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89358]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 13. FINAL CONSULTATION CTA                                           */}
      {/* ==================================================================== */}
      <InternalCTA
        title="Your Time to Unwind"
        italicWord="Starts Here."
        subtitle="Personalized Relaxation at The Ridges"
        supportingText="Explore your options or begin a conversation about the relaxation experience that best fits your individual preferences."
        primaryLabel="Book a Consultation"
        onPrimaryClick={() => onOpenBooking('Massage & Relaxation')}
        secondaryLabel="Explore Treatments"
        secondaryPath="/treatments"
      />
    </div>
  );
};
