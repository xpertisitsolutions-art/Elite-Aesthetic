/**
 * Results & Experience Page — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /results
 * Strict Content Governance: Authentic Clinic Experience, Zero Unsupported Before/After Claims, Quiet Luxury
 */

import React, { useState, useMemo } from 'react';
import { useRouter } from '../router/Router';
import { getBreadcrumbsForPath } from '../data/navigationData';
import {
  RESULTS_EXPERIENCE_DATA,
  ExperienceItem,
  ExperienceCategory,
} from '../data/resultsData';
import { getCategoryBySlug, DetailedTreatmentCategory } from '../data/treatmentsData';
import { VisualAsset } from '../components/VisualAsset';
import { InternalCTA } from '../components/InternalCTA';
import {
  SectionBackground,
  DarkFeatureSection,
} from '../components/ui/LayoutPrimitives';
import {
  ArrowRight,
  ArrowLeft,
  Info,
  ShieldCheck,
  Sparkles,
  Compass,
  CheckCircle2,
  X,
  Maximize2,
} from 'lucide-react';

interface ResultsPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const breadcrumbs = getBreadcrumbsForPath('/results');
  const [selectedCategory, setSelectedCategory] = useState<ExperienceCategory>('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState<ExperienceItem | null>(null);

  // Category filters
  const categories: ExperienceCategory[] = [
    'ALL',
    'CLINIC & ENVIRONMENT',
    'TREATMENT MOMENTS',
    'CONSULTATION & CARE',
    'BEAUTY & WELLNESS',
  ];

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return RESULTS_EXPERIENCE_DATA;
    }
    return RESULTS_EXPERIENCE_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Related treatment disciplines for cross-navigation
  const relatedSlugs = [
    'facials-skin',
    'laser-advanced',
    'injectables',
    'body-sculpting',
    'wellness-iv',
    'hair-restoration',
    'medical-weight-mgmt',
    'massage-relaxation',
  ];
  const crossCategories = relatedSlugs
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is DetailedTreatmentCategory => Boolean(c));

  return (
    <div className="bg-[#FAF7F2] text-[#2C2420]">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION (EDITORIAL SPLIT COMPOSITION)                        */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#E7DFD3]/70">
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
                <span>Elite Aesthetics</span>
                <span aria-hidden="true" className="text-[#C9A77E]">·</span>
                <span>Cebu</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1D1815] font-light leading-[1.12] tracking-tight mb-5 text-balance">
                Your Experience. <span className="italic font-normal text-[#9E7A42]">Your Features.</span> Your Journey.
              </h1>

              <p className="text-base sm:text-lg text-[#3C332D] leading-relaxed max-w-xl mb-8">
                Explore authentic moments from the Elite Aesthetics experience and discover how
                personalized treatment planning begins with understanding the individual.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Clinical Assessment')}
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
                  type="clinic-suite"
                  alt="Clinical Treatment Suite at Elite Aesthetics Cebu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Authentic Clinic Setting
                </div>
              </div>
              <p className="text-[11px] text-[#8C7667] text-center mt-2.5 italic">
                Quiet clinical procedure environment at The Ridges, Cebu City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. IMPORTANT RESULTS GOVERNANCE NOTICE                                */}
      {/* ==================================================================== */}
      <section className="bg-[#FAF7F2] py-8 border-b border-[#E7DFD3]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 bg-white border border-[#B89358]/40 luxury-card-shadow flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#B89358]/40 flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-4 h-4 text-[#9E7A42]" />
            </div>
            <div className="space-y-1.5 text-xs text-[#52453D] leading-relaxed">
              <h2 className="font-serif text-base text-[#1D1815] font-medium">
                Every Result Is Individual
              </h2>
              <p>
                Images shown on this page are intended to provide an authentic view of the Elite
                Aesthetics environment, treatment experience, and selected clinical moments. Individual
                experiences and outcomes vary, and imagery should not be interpreted as a guarantee of a
                particular result.
              </p>
              <p className="text-[11px] text-[#8C7667] italic pt-1">
                Any future before-and-after imagery should be published only with appropriate client
                consent and verified treatment context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. RESULTS PHILOSOPHY — BEYOND THE IMAGE                              */}
      {/* ==================================================================== */}
      <SectionBackground variant="ivory" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
            <span className="text-xs uppercase tracking-[0.26em] text-[#9E7A42] font-semibold">
              Beauty Beyond Imperfection
            </span>
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light mb-6 tracking-tight text-balance">
            Beyond the Image
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#3C332D] leading-relaxed max-w-3xl mx-auto">
            <p>
              Aesthetic care is not simply about creating a visual change. It begins with understanding
              your unique features, listening to your personal goals, and selecting treatments that honor
              your individuality.
            </p>
            <p>
              At Elite Aesthetics, we believe that true clinical excellence lies in natural-looking
              intent and realistic expectations. The goal is never to impose a standardized template,
              but to support confidence through refined, personalized care.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 4. EXPERIENCE GALLERY — INSIDE THE ELITE EXPERIENCE                  */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Authentic In-Clinic Imagery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Inside the Elite Experience
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              Explore documented moments from our clinic suites, consultation spaces, and treatment
              environments at The Ridges Commercial Center.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
            role="tablist"
            aria-label="Experience gallery categories"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border focus:outline-none ${
                    isSelected
                      ? 'bg-[#241D18] text-[#FAF7F2] border-[#241D18] shadow-xs'
                      : 'bg-[#FAF7F2] text-[#685B52] border-[#E7DFD3] hover:border-[#9E7A42] hover:text-[#1D1815]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between hover:border-[#C9A77E] transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveLightboxItem(item)}
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2] border-b border-[#E7DFD3]">
                    <VisualAsset
                      type={item.assetKey}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#FAF7F2]/95 backdrop-blur-xs px-2 py-0.5 border border-[#B89358]/30 text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                      {item.category}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-[#1D1815]/80 text-[#FAF7F2] p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-1.5 group-hover:text-[#9E7A42] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#685B52] leading-relaxed mb-3">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-[#E7DFD3]/60 flex items-center justify-between text-[11px] text-[#9E7A42] font-semibold uppercase tracking-wider">
                    <span>View Detail</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 5. FUTURE RESULTS DOCUMENTATION (BEFORE & AFTER GOVERNANCE)          */}
      {/* ==================================================================== */}
      <SectionBackground variant="champagne" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-[#B89358]" />
            <span>Clinical Transparency Standard</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            Future Results Documentation
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed mb-8">
            As Elite Aesthetics develops its documented results library, verified before-and-after
            cases may be presented here with appropriate client consent, treatment context, and
            individual-result disclosures.
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking('Consultation & Assessment')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
          >
            <span>Discuss Your Goals</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
          </button>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 6. FEATURED EXPERIENCE SECTION                                       */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Large Image on Left (55% width on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-[#FAF7F2]">
              <VisualAsset
                type="doctor-care"
                alt="Personalized clinical consultation at Elite Aesthetics Cebu"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                Consultation Suite
              </div>
            </div>
            <p className="text-[11px] text-[#8C7667] text-center mt-2 italic">
              Authentic consultation atmosphere at The Ridges Commercial Center, Cebu City.
            </p>
          </div>

          {/* Editorial Text on Right (45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Attentive Clinical Care</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
              Care You Can See. Attention You Can Feel.
            </h2>

            <p className="text-sm sm:text-base text-[#3C332D] leading-relaxed mb-6 font-normal">
              From the consultation room to the treatment environment, every part of the Elite
              Aesthetics experience is designed around thoughtful attention, individual preferences,
              and a considered approach to care.
            </p>

            {/* Three Pillars */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Thoughtful Consultations:</strong> Space to discuss your goals, preferences,
                  and treatment options.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Individual Attention:</strong> Attentive care focused on your comfort and
                  personal features.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Considered Treatment Planning:</strong> Thoughtful selection aligned with
                  realistic expectations.
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onOpenBooking('Consultation & Assessment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
              >
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 7. NATURAL-LOOKING AESTHETIC PHILOSOPHY (DARK EDITORIAL)             */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="Aesthetic Philosophy"
        title="Refinement, Not"
        italicTitleWord="Reinvention."
        description="Elite Aesthetics approaches aesthetic care with the understanding that individuality should remain part of the result. Treatment planning begins with your features, preferences, and goals—not a predefined template."
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
              Individual Features
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Every person brings unique facial architecture and personal goals that must be
              respected.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Principle 02
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Considered Intent
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Subtle enhancements that complement your natural expressions rather than creating an
              artificial appearance.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Principle 03
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Preserving Expression
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Careful protocol selection designed to retain authentic movement, vitality, and
              harmony.
            </p>
          </div>
        </div>
      </DarkFeatureSection>

      {/* ==================================================================== */}
      {/* 8. INDIVIDUAL VARIATION SECTION — WHY RESULTS VARY                   */}
      {/* ==================================================================== */}
      <SectionBackground variant="warm-taupe" paddingY="lg" borderBottom={true}>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
            Clinical Realism
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            Why Results Vary
          </h2>
          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Individual experiences and outcomes can vary from person to person. Treatment selection,
            individual features, personal goals, treatment parameters, and individual response can all
            influence the experience and outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          <div className="bg-white p-6 border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-xs font-semibold text-[#9E7A42] uppercase tracking-wider block mb-1.5">
              Principle 01
            </span>
            <h3 className="font-serif text-base text-[#1D1815] font-medium mb-2">
              Individual Features
            </h3>
            <p className="text-xs text-[#685B52] leading-relaxed">
              Each person has their own anatomy, skin characteristics, and individual features.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-xs font-semibold text-[#9E7A42] uppercase tracking-wider block mb-1.5">
              Principle 02
            </span>
            <h3 className="font-serif text-base text-[#1D1815] font-medium mb-2">
              Treatment Selection
            </h3>
            <p className="text-xs text-[#685B52] leading-relaxed">
              Different concerns and goals may call for different treatment approaches.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-xs font-semibold text-[#9E7A42] uppercase tracking-wider block mb-1.5">
              Principle 03
            </span>
            <h3 className="font-serif text-base text-[#1D1815] font-medium mb-2">
              Personalized Planning
            </h3>
            <p className="text-xs text-[#685B52] leading-relaxed">
              Treatment planning may be adapted to individual preferences, goals, and relevant
              considerations.
            </p>
          </div>

          <div className="bg-white p-6 border border-[#E7DFD3] luxury-card-shadow">
            <span className="text-xs font-semibold text-[#9E7A42] uppercase tracking-wider block mb-1.5">
              Principle 04
            </span>
            <h3 className="font-serif text-base text-[#1D1815] font-medium mb-2">
              Individual Response
            </h3>
            <p className="text-xs text-[#685B52] leading-relaxed">
              People can respond differently to the same treatment, so outcomes should not be assumed
              in advance.
            </p>
          </div>
        </div>

        <p className="text-xs text-[#8C7667] text-center italic">
          Elite Aesthetics does not publish fabricated outcome statistics or guarantee uniform results.
        </p>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 9. CONSULTATION-FIRST SECTION                                        */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
            <span className="text-xs uppercase tracking-[0.26em] text-[#9E7A42] font-semibold">
              The First Step
            </span>
            <span className="w-8 h-[1px] bg-[#B89358]/50" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
            Your Starting Point Is Personal
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-2xl mx-auto mb-8">
            Before deciding on a treatment, a thoughtful consultation creates space to discuss your
            goals, preferences, relevant considerations, and the options that may be appropriate for
            you.
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking('Consultation & Assessment')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
          </button>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 10. PRIVACY & CLIENT IMAGE GOVERNANCE                                */}
      {/* ==================================================================== */}
      <SectionBackground variant="cream" paddingY="sm" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-white border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-[#52453D] leading-relaxed">
              <h3 className="font-serif text-base text-[#1D1815] font-medium">
                Respecting Every Story
              </h3>
              <p>
                Client imagery is personal. Any future identifiable client results or before-and-after
                cases should be published only with appropriate permission and with clear treatment
                context.
              </p>
              <p className="text-[11px] text-[#8C7667] italic pt-1">
                Elite Aesthetics prioritizes patient confidentiality and data integrity above
                promotional visibility.
              </p>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 11. RELATED TREATMENT DISCIPLINES ("Continue Exploring")             */}
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
            Discover the full spectrum of aesthetic and wellness care available at Elite Aesthetics Cebu.
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
                  <span>Explore Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89358]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 12. FINAL CONSULTATION CTA                                           */}
      {/* ==================================================================== */}
      <InternalCTA
        title="Start With"
        italicWord="Your Goals."
        subtitle="Personalized Assessment at The Ridges"
        supportingText="Your aesthetic journey begins with understanding what you want, what feels right for you, and which options may be appropriate to explore."
        primaryLabel="Book a Consultation"
        onPrimaryClick={() => onOpenBooking('Clinical Assessment')}
        secondaryLabel="Explore Treatments"
        secondaryPath="/treatments"
      />

      {/* ==================================================================== */}
      {/* 13. ACCESSIBLE EXPERIENCE LIGHTBOX MODAL                             */}
      {/* ==================================================================== */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D1815]/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="bg-white max-w-2xl w-full border border-[#DBC3A3] luxury-card-shadow overflow-hidden relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 border border-[#E7DFD3] flex items-center justify-center text-[#1D1815] hover:text-[#9E7A42] transition-colors focus:outline-none"
              aria-label="Close image detail"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2]">
              <VisualAsset
                type={activeLightboxItem.assetKey}
                alt={activeLightboxItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-2.5 py-1 border border-[#B89358]/30 text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                {activeLightboxItem.category}
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6">
              <h3 id="lightbox-title" className="font-serif text-2xl text-[#1D1815] font-medium mb-2">
                {activeLightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed mb-4">
                {activeLightboxItem.context}
              </p>

              <div className="p-3 bg-[#FAF7F2] border border-[#E7DFD3] mb-6 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#736055] leading-relaxed">
                  {activeLightboxItem.disclaimer}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#E7DFD3]">
                {activeLightboxItem.treatmentRoute ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveLightboxItem(null);
                      navigate(activeLightboxItem.treatmentRoute!);
                    }}
                    className="text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>Learn About This Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-xs text-[#8C7667] italic">
                    Inside Elite Aesthetics Cebu
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setActiveLightboxItem(null);
                    onOpenBooking(activeLightboxItem.title);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#241D18] hover:bg-[#9E7A42] text-[#FAF7F2] transition-colors focus:outline-none text-center"
                >
                  Inquire in Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
