/**
 * Treatments Hub Page Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /treatments
 * Architectural compliance: Prompt #5 & Prompt #5.1 (Visual Rhythm & Background Refinement)
 */

import React, { useState } from 'react';
import { SubpageHero } from '../components/SubpageHero';
import { InternalCTA } from '../components/InternalCTA';
import { VisualAsset } from '../components/VisualAsset';
import { SectionBackground, DarkFeatureSection } from '../components/ui/LayoutPrimitives';
import {
  DETAILED_TREATMENT_CATEGORIES,
  TREATMENT_CONCERNS,
  FEATURED_HUB_TREATMENTS,
  DetailedTreatmentCategory,
} from '../data/treatmentsData';
import { FEATURED_TREATMENTS, FeaturedTreatment } from '../data/clinicData';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { useRouter } from '../router/Router';
import {
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
  Filter,
} from 'lucide-react';

interface TreatmentsPageProps {
  onOpenBooking: (treatmentName?: string) => void;
  onLearnMoreTreatment?: (treatment: FeaturedTreatment) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onOpenBooking,
  onLearnMoreTreatment,
}) => {
  const { navigate } = useRouter();
  const breadcrumbs = getBreadcrumbsForPath('/treatments');

  // Selected concern filter state
  const [selectedConcernId, setSelectedConcernId] = useState<string>('all');

  // Active categories based on selected concern
  const activeConcern = TREATMENT_CONCERNS.find((c) => c.id === selectedConcernId);
  const displayedCategories: DetailedTreatmentCategory[] =
    selectedConcernId === 'all'
      ? DETAILED_TREATMENT_CATEGORIES
      : DETAILED_TREATMENT_CATEGORIES.filter((cat) =>
          activeConcern?.relatedCategorySlugs.includes(cat.slug)
        );

  // Helper to trigger treatment modal or navigate to category
  const handleLearnMore = (treatmentHubItem: (typeof FEATURED_HUB_TREATMENTS)[0]) => {
    const matched = FEATURED_TREATMENTS.find((t) => t.id === treatmentHubItem.id);
    if (matched && onLearnMoreTreatment) {
      onLearnMoreTreatment(matched);
    } else {
      navigate(`/treatments/${treatmentHubItem.categorySlug}`);
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2C2420]">
      {/* ==================================================================== */}
      {/* 1. TREATMENTS HERO (LIGHT / IMAGE-LED)                              */}
      {/* ==================================================================== */}
      <SubpageHero
        eyebrow="TREATMENTS"
        title="Explore Your"
        italicTitleWord="Options"
        supportingText="Discover aesthetic and wellness services designed to be explored through personalized consultation and thoughtful treatment planning."
        breadcrumbs={breadcrumbs}
        imageSlot="clinic-suite"
        imageAlt="Elite Aesthetics Cebu Private Treatment Environment at The Ridges Commercial Center"
        primaryCtaLabel="BOOK A CONSULTATION"
        onPrimaryCta={() => onOpenBooking()}
        secondaryCtaLabel="CONTACT ELITE AESTHETICS"
        onSecondaryCta={() => navigate('/contact')}
      />

      {/* ==================================================================== */}
      {/* 2. INTRODUCTION / CONSULTATION PHILOSOPHY                            */}
      {/*    (WARM IVORY / GHOSTED PHOTOGRAPHY LAYER via SectionBackground)   */}
      {/* ==================================================================== */}
      <SectionBackground
        variant="ivory"
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
              Consultation-First Discovery
            </span>
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light mb-6 tracking-tight text-balance">
            Aesthetic Care Tailored to What Makes You Uniquely You
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#3C332D] leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              Every individual arrives with different goals, skin characteristics, lifestyle
              considerations, and personal preferences. At Elite Aesthetics, we present treatment
              discovery as a thoughtful conversation rather than a rigid, one-size-fits-all menu.
            </p>
            <p className="text-xs sm:text-sm text-[#736055] italic pt-2">
              Treatment options can be discussed during consultation based on individual goals,
              concerns, suitability, and the clinic's professional assessment.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 3. EXPLORE BY CONCERN (CRISP WHITE / CLEAN LIGHT)                    */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="md" borderBottom={true}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
              <Compass className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Discovery Pathways</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-light">
              Explore by Concern
            </h2>
            <p className="text-xs sm:text-sm text-[#685B52] mt-1 max-w-xl">
              Select a primary area of interest to discover relevant clinical categories. These are
              exploratory pathways to guide your consultation conversation, not medical diagnoses.
            </p>
          </div>

          {/* Quick Filter Reset */}
          {selectedConcernId !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedConcernId('all')}
              className="self-start md:self-auto text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors inline-flex items-center gap-1 focus:outline-none"
            >
              <span>Show All Categories</span>
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>

        {/* Concern Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          <button
            type="button"
            onClick={() => setSelectedConcernId('all')}
            className={`p-4 text-left border transition-all duration-300 focus:outline-none ${
              selectedConcernId === 'all'
                ? 'bg-[#241D18] text-[#FAF7F2] border-[#241D18] shadow-sm'
                : 'bg-[#FAF7F2] text-[#3C332D] border-[#E7DFD3] hover:border-[#9E7A42]'
            }`}
          >
            <span
              className={`text-[10px] uppercase tracking-wider font-semibold block mb-1 ${
                selectedConcernId === 'all' ? 'text-[#C9A77E]' : 'text-[#8C7667]'
              }`}
            >
              Overview
            </span>
            <span className="font-serif text-sm font-medium block">All Categories</span>
          </button>

          {TREATMENT_CONCERNS.map((concern) => {
            const isSelected = selectedConcernId === concern.id;
            return (
              <button
                key={concern.id}
                type="button"
                onClick={() => setSelectedConcernId(concern.id)}
                className={`p-4 text-left border transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? 'bg-[#241D18] text-[#FAF7F2] border-[#241D18] shadow-sm'
                    : 'bg-[#FAF7F2] text-[#3C332D] border-[#E7DFD3] hover:border-[#9E7A42]'
                }`}
              >
                <span
                  className={`text-[10px] uppercase tracking-wider font-semibold block mb-1 truncate ${
                    isSelected ? 'text-[#C9A77E]' : 'text-[#8C7667]'
                  }`}
                >
                  {concern.badge}
                </span>
                <span className="font-serif text-sm font-medium block leading-tight">
                  {concern.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Concern Feedback Banner */}
        {activeConcern && selectedConcernId !== 'all' && (
          <div className="p-4 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#52453D]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9E7A42] shrink-0" />
              <span>
                <strong>{activeConcern.title}:</strong> {activeConcern.shortDescription}
              </span>
            </div>
            <span className="text-[11px] text-[#8C7667] italic shrink-0">
              Showing {displayedCategories.length} related categories
            </span>
          </div>
        )}
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 4. EIGHT TREATMENT CATEGORIES (SOFT WARM TAUPE CANVAS)               */}
      {/* ==================================================================== */}
      <SectionBackground variant="warm-taupe" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
            <span>Aesthetic & Wellness Portfolio</span>
            <span aria-hidden="true" className="text-[#C9A77E]">·</span>
            <span>8 Disciplines</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
            Treatment Categories
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Explore our eight core disciplines. Click any category to explore related treatment
            pathways and consultation considerations.
          </p>
        </div>

        {/* Primary 8-Category Grid on Warm Taupe Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between group hover:border-[#C9A77E] transition-all duration-300"
            >
              {/* Authentic Category Imagery (Strict non-promotional enforcement) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                <VisualAsset
                  type={category.id as any}
                  alt={`${category.name} at Elite Aesthetics Cebu`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#FAF7F2]/95 backdrop-blur-xs px-2.5 py-1 border border-[#B89358]/30 text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  {category.badge}
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2 group-hover:text-[#9E7A42] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#52453D] leading-relaxed mb-4">
                    {category.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Subtle availability governance line */}
                  <div className="text-[10px] text-[#8C7667] italic mb-4 pt-3 border-t border-[#E7DFD3]/60">
                    Treatment availability is discussed during consultation.
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => navigate(`/treatments/${category.slug}`)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#1D1815] hover:text-[#9E7A42] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B89358]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(category.name)}
                      className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#241D18] hover:text-[#FAF7F2] border border-[#DBC3A3] text-[#241D18] transition-colors focus:outline-none"
                    >
                      Consult
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 5. FEATURED TREATMENTS (WARM IVORY / IMAGE-LED EDITORIAL)            */}
      {/* ==================================================================== */}
      <SectionBackground variant="ivory" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
            <span>Highlighted Concepts</span>
            <span aria-hidden="true" className="text-[#C9A77E]">·</span>
            <span>In-Clinic Technologies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
            Featured Treatment Concepts
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Carefully curated treatment methodologies utilizing modern aesthetic technology and
            gentle clinical protocols. Specific suitability is evaluated during your consultation.
          </p>
        </div>

        {/* 6 Featured Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_HUB_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between overflow-hidden group hover:border-[#C9A77E] transition-all duration-300"
            >
              {/* Approved Authentic Asset */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                <VisualAsset
                  type={treatment.imageAssetKey as any}
                  alt={treatment.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#FAF7F2]/95 backdrop-blur-xs px-2.5 py-1 border border-[#B89358]/30 text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  {treatment.categoryName}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2">
                    {treatment.name}
                  </h3>
                  <p className="text-xs text-[#52453D] leading-relaxed mb-4">
                    {treatment.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DFD3] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleLearnMore(treatment)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#1D1815] hover:text-[#9E7A42] transition-colors focus:outline-none"
                  >
                    Learn More
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(treatment.name)}
                    className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 bg-[#241D18] hover:bg-[#9E7A42] text-[#FAF7F2] transition-colors focus:outline-none"
                  >
                    {treatment.bookingLabel}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 6. HOW TREATMENT PLANNING WORKS (DARK ESPRESSO FEATURE CHAPTER)      */}
      {/*    via DarkFeatureSection                                            */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="The Patient Journey"
        title="How Treatment Planning Works"
        description="Our structured approach ensures you feel informed, comfortable, and confident in every aesthetic decision."
        ghostedAssetKey="clinic-suite"
        ghostedOpacity={0.08}
        ghostedMask="soft-edges"
        paddingY="lg"
      >
        {/* 4 Steps Grid in Dark Espresso Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30 flex flex-col justify-between hover:border-[#C9A77E] transition-colors duration-300">
            <div>
              <span className="font-serif text-3xl text-[#C9A77E] font-light block mb-2">01</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#EBDCC8]/70 font-semibold block mb-1">
                Initial Step
              </span>
              <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">DISCOVER</h3>
              <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
                Discuss your personal goals, daily routines, and aesthetic concerns in an unhurried
                setting.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#B89358]/20 text-[10px] text-[#C9A77E] uppercase tracking-wider font-semibold">
              Listening First
            </div>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30 flex flex-col justify-between hover:border-[#C9A77E] transition-colors duration-300">
            <div>
              <span className="font-serif text-3xl text-[#C9A77E] font-light block mb-2">02</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#EBDCC8]/70 font-semibold block mb-1">
                Evaluation
              </span>
              <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">CONSULT</h3>
              <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
                Explore suitable treatment options with the clinic team based on your anatomical
                profile and health history.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#B89358]/20 text-[10px] text-[#C9A77E] uppercase tracking-wider font-semibold">
              Medical Assessment
            </div>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30 flex flex-col justify-between hover:border-[#C9A77E] transition-colors duration-300">
            <div>
              <span className="font-serif text-3xl text-[#C9A77E] font-light block mb-2">03</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#EBDCC8]/70 font-semibold block mb-1">
                Strategy
              </span>
              <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">PLAN</h3>
              <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
                Consider an approach appropriate to your individual needs, realistic expectations, and
                personal comfort.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#B89358]/20 text-[10px] text-[#C9A77E] uppercase tracking-wider font-semibold">
              Tailored Guidance
            </div>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30 flex flex-col justify-between hover:border-[#C9A77E] transition-colors duration-300">
            <div>
              <span className="font-serif text-3xl text-[#C9A77E] font-light block mb-2">04</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#EBDCC8]/70 font-semibold block mb-1">
                Care Delivery
              </span>
              <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">BEGIN</h3>
              <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
                Proceed with the selected care plan after consultation, supported by attentive
                aftercare guidance.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#B89358]/20 text-[10px] text-[#C9A77E] uppercase tracking-wider font-semibold">
              Attentive Follow-Up
            </div>
          </div>
        </div>
      </DarkFeatureSection>

      {/* ==================================================================== */}
      {/* 7. CLINICAL GOVERNANCE / SUITABILITY NOTICE (LIGHT / MINIMAL)        */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="sm" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-[#52453D] leading-relaxed">
              <h3 className="font-serif text-base text-[#1D1815] font-medium">
                Clinical Suitability & Medical Governance
              </h3>
              <p>
                Treatment options vary from person to person. Suitability, expectations, and available
                procedures should be discussed during consultation with the appropriate clinic
                professional.
              </p>
              <p className="text-[11px] text-[#8C7667] italic">
                Information on this website is intended for general treatment discovery and does not
                replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 8. RELATED CATEGORY DISCOVERY (WARM IVORY / SOFT CHAMPAGNE)          */}
      {/* ==================================================================== */}
      <SectionBackground variant="champagne" paddingY="md" borderBottom={true}>
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
            Connected Disciplines
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-light">
            Explore More
          </h2>
          <p className="text-xs sm:text-sm text-[#685B52] mt-1">
            Discover complementary categories often explored together by clinic patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
              Facial & Skin Care
            </span>
            <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2">
              Facials, Laser & Injectables
            </h3>
            <p className="text-xs text-[#685B52] leading-relaxed mb-4">
              Explore how gentle hydration, surface texture renewal, and facial balance are discussed
              during comprehensive consultations.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={() => navigate('/treatments/facials-skin')}
                className="hover:text-[#9E7A42] underline focus:outline-none"
              >
                Facials & Skin →
              </button>
              <button
                type="button"
                onClick={() => navigate('/treatments/laser-advanced')}
                className="hover:text-[#9E7A42] underline focus:outline-none"
              >
                Laser & Advanced →
              </button>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
              Vitality & Follicle Care
            </span>
            <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2">
              Hair Restoration & Wellness IV
            </h3>
            <p className="text-xs text-[#685B52] leading-relaxed mb-4">
              Discover scalp revitalizing therapies alongside bioavailable nutrient infusions designed
              to promote vitality.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={() => navigate('/treatments/hair-restoration')}
                className="hover:text-[#9E7A42] underline focus:outline-none"
              >
                Hair Restoration →
              </button>
              <button
                type="button"
                onClick={() => navigate('/treatments/wellness-iv')}
                className="hover:text-[#9E7A42] underline focus:outline-none"
              >
                Wellness & IV →
              </button>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-2">
              Body & Lifestyle Care
            </span>
            <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-2">
              Body Sculpting & Weight Management
            </h3>
            <p className="text-xs text-[#685B52] leading-relaxed mb-4">
              Explore non-invasive muscle activation together with personalized lifestyle and
              nutritional consultations.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                type="button"
                onClick={() => navigate('/treatments/body-sculpting')}
                className="hover:text-[#9E7A42] underline focus:outline-none"
              >
                Body Sculpting →
              </button>
              <button
                type="button"
                onClick={() => navigate('/treatments/medical-weight-mgmt')}
                className="hover:text-[#9E7A42] underline focus:outline-none"
              >
                Weight Management →
              </button>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 9. CONSULTATION CTA (DARK ESPRESSO CLOSING)                         */}
      {/* ==================================================================== */}
      <InternalCTA
        title="Not Sure Where to"
        italicWord="Start?"
        subtitle="Personalized Consultation at The Ridges"
        supportingText="Begin with a consultation and discuss your goals with the Elite Aesthetics team."
        primaryLabel="BOOK A CONSULTATION"
        onPrimaryClick={() => onOpenBooking()}
        secondaryLabel="CONTACT ELITE AESTHETICS"
        secondaryPath="/contact"
      />
    </div>
  );
};
