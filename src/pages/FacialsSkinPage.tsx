/**
 * Facials & Skin Master Category Page — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /treatments/facials-skin
 * Master Category Page Template (Prompt #6)
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
  HelpCircle,
  ChevronRight,
  Compass,
  Calendar,
} from 'lucide-react';

interface FacialsSkinPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const FacialsSkinPage: React.FC<FacialsSkinPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const category = getCategoryBySlug('facials-skin');
  const breadcrumbs = getBreadcrumbsForPath('/treatments/facials-skin');

  if (!category) {
    return null;
  }

  // Related category items
  const relatedCategories = category.relatedCategorySlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is DetailedTreatmentCategory => Boolean(c));

  // Additional cross-navigation targets requested by Prompt #6
  const extendedRelatedSlugs = ['laser-advanced', 'injectables', 'hair-restoration', 'wellness-iv'];
  const extendedCategories = extendedRelatedSlugs
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
                Skin-Focused Care, <span className="italic font-normal text-[#9E7A42]">Thoughtfully Personalized</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3C332D] leading-relaxed max-w-xl mb-8">
                {category.heroSupporting || category.shortDescription}
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Facials & Skin')}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 transition-all duration-300 shadow-sm focus:outline-none"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-[#E8D8C3] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/treatments')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white/70 hover:bg-white transition-all duration-300 focus:outline-none"
                >
                  <ArrowLeft className="w-4 h-4 text-[#9E7A42]" />
                  <span>BACK TO TREATMENTS</span>
                </button>
              </div>

              {/* Sub-hero Trust Micro-note */}
              <div className="mt-8 pt-5 border-t border-[#E7DFD3]/80 flex items-center gap-3 text-xs text-[#8C7667]">
                <ShieldCheck className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>
                  Private evaluation suites at The Ridges Commercial Center, F. Cabahug St, Cebu City.
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/4] sm:aspect-[4/3] lg:aspect-[4/4] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-white">
                <VisualAsset
                  type="facials-skin"
                  alt="Facials & Skin Clinical Protocol at Elite Aesthetics Cebu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Approved Protocol Visual
                </div>
              </div>
              <p className="text-[11px] text-[#8C7667] text-center mt-2.5 italic">
                In-clinic skin cleansing and hydration procedure at Elite Aesthetics Cebu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. INTRODUCTION — UNDERSTANDING YOUR SKIN                            */}
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
              Philosophy & Individuality
            </span>
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light mb-6 tracking-tight text-balance">
            Understanding Your Skin
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#3C332D] leading-relaxed max-w-3xl mx-auto">
            <p>
              Skin concerns vary naturally from person to person, reflecting unique physiology,
              lifestyle habits, genetic factors, and personal goals. What supports clarity and
              hydration for one individual may require an entirely different emphasis for another.
            </p>
            <p>
              At Elite Aesthetics, skin care discovery begins with understanding your skin history,
              daily routines, and personal comfort rather than recommending generalized protocols.
              Treatment suitability is assessed collaboratively during consultation to ensure all
              recommendations are thoughtful, appropriate, and aligned with your expectations.
            </p>
            <p className="text-xs sm:text-sm text-[#736055] italic pt-2">
              Website information is intended for educational exploration and should not be used for
              self-diagnosis.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 3. WHAT FALLS WITHIN FACIALS & SKIN (DISCOVERY AREAS)                 */}
      {/* ==================================================================== */}
      <SectionBackground variant="warm-taupe" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
            <span>Clinical Scope</span>
            <span aria-hidden="true" className="text-[#C9A77E]">·</span>
            <span>Disciplines of Care</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
            What Falls Within Facials & Skin
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Our facial protocols cover five core areas of supportive care. These represent
            exploratory pathways to discuss with our clinical team.
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
                  onClick={() => onOpenBooking(`Facials & Skin: ${area.title}`)}
                  className="font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                >
                  <span>Discuss in Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Notice */}
        <div className="p-4 bg-white/80 border border-[#E7DFD3] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#8C7667] italic">
            Specific treatment options and availability are discussed during consultation.
          </p>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 4. FEATURED TREATMENT — HYDRAFACIAL (MAJOR EDITORIAL SPLIT)          */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Large Image (approx 55% width on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-[#FAF7F2]">
              <VisualAsset
                type="hydrafacial"
                alt="Hydrafacial Clinical Treatment at Elite Aesthetics Cebu"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                Featured Protocol: Hydrafacial
              </div>
            </div>
            <p className="text-[11px] text-[#8C7667] text-center mt-2 italic">
              Authentic Hydrafacial treatment procedure performed at Elite Aesthetics Cebu.
            </p>
          </div>

          {/* Editorial Text (approx 45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Signature Technology</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
              Hydrafacial Glow
            </h2>

            <p className="text-sm sm:text-base text-[#3C332D] leading-relaxed mb-6 font-normal">
              Hydrafacial is a multi-step facial treatment focused on cleansing, exfoliation,
              extraction, and hydration. Patented vortex technology gently removes impurities while
              infusing concentrated antioxidant and hydrating serums.
            </p>

            {/* Protocol Pillars */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Deep Pore Cleansing:</strong> Gentle vortex vacuum extraction assists in
                  removing accumulated sebum and surface impurities.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Intense Hydration:</strong> Nourishing hyaluronic acid and botanical
                  antioxidant cocktails replenish the skin surface.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Refreshed Radiance:</strong> Formulated to support clean, glowing skin with
                  comfort and zero unverified downtime claims.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking('Hydrafacial')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
              >
                <span>BOOK HYDRAFACIAL CONSULTATION</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking('Facials & Skin')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#241D18] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
              >
                <span>INQUIRE ABOUT SUITABILITY</span>
              </button>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 5. SKIN CONCERNS DISCOVERY (4 PATHWAYS)                              */}
      {/* ==================================================================== */}
      <SectionBackground variant="cream" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Consultation Pathways</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
            Common Skin Concerns
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Visitors commonly discuss these areas of interest during consultation. These pathways
            serve as conversation starters, not clinical diagnoses.
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
                  Focus Area
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
                  onClick={() => onOpenBooking(`Skin Concern: ${pathway.title}`)}
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
          Treatment options depending on individual assessment. Elite Aesthetics does not promise
          guaranteed outcomes or standardized protocols.
        </p>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 6. EDITORIAL IMAGE MOMENT (AUTHENTIC CLINIC ATMOSPHERE)              */}
      {/* ==================================================================== */}
      <section className="relative h-[380px] sm:h-[440px] md:h-[500px] w-full overflow-hidden border-y border-[#B89358]/30">
        <VisualAsset
          type="clinic-suite"
          alt="Quiet clinical treatment suite at Elite Aesthetics Cebu"
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
                Thoughtful care begins with understanding.
              </h2>
              <p className="text-xs sm:text-sm text-[#EBDCC8]/90 leading-relaxed">
                A quiet, private clinical environment dedicated to personal aesthetic wellness and
                attentive patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 7. CONSULTATION / TREATMENT PLANNING (DARK FEATURE CHAPTER)          */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="The Patient Journey"
        title="How Consultation & Planning Works"
        description="Our structured approach ensures you feel informed, comfortable, and confident in every aesthetic decision."
        ghostedAssetKey="clinic-suite"
        ghostedOpacity={0.08}
        ghostedMask="soft-edges"
        paddingY="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(category.planningSteps || []).map((stepItem) => (
            <div
              key={stepItem.step}
              className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30 flex flex-col justify-between hover:border-[#C9A77E] transition-colors duration-300"
            >
              <div>
                <span className="font-serif text-3xl text-[#C9A77E] font-light block mb-2">
                  {stepItem.step}
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#EBDCC8]/70 font-semibold block mb-1">
                  {stepItem.subtitle}
                </span>
                <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#B89358]/20 text-[10px] text-[#C9A77E] uppercase tracking-wider font-semibold">
                Personalized Care
              </div>
            </div>
          ))}
        </div>
      </DarkFeatureSection>

      {/* ==================================================================== */}
      {/* 8. CLINICAL GOVERNANCE (TASTEFUL TRUST SECTION)                      */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="sm" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-[#52453D] leading-relaxed">
              <h3 className="font-serif text-base text-[#1D1815] font-medium">
                {category.governanceHeading || 'Care That Begins With Understanding'}
              </h3>
              <p>
                {category.governanceText ||
                  'Treatment options can vary based on individual goals, skin history, suitability, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.'}
              </p>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 9. RELATED TREATMENT DISCIPLINES ("Continue Exploring")              */}
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
          {extendedCategories.map((relCat) => (
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
      {/* 10. FINAL CONSULTATION CTA                                           */}
      {/* ==================================================================== */}
      <InternalCTA
        title="Ready to"
        italicWord="Begin?"
        subtitle="Personalized Consultation at The Ridges"
        supportingText="Start with a conversation about your skin, your goals, and the care that may be appropriate for you."
        primaryLabel="BOOK A CONSULTATION"
        onPrimaryClick={() => onOpenBooking('Facials & Skin')}
        secondaryLabel="CONTACT ELITE AESTHETICS"
        secondaryPath="/contact"
      />
    </div>
  );
};
