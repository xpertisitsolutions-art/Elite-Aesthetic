/**
 * Dedicated Client Experiences Editorial Page
 * Elite Aesthetics Cebu
 *
 * Route: /client-experiences
 * Architectural compliance: Prompt #21D
 *
 * GOVERNANCE:
 * - All demonstration testimonials are clearly designated with SAMPLE CLIENT
 *   and DEMO PROFILE indicators.
 * - Real testimonials require confirmed consent, clinic verification, and publication approval.
 * - Zero fabricated star ratings, review aggregations, or unsupported medical claims.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  getActiveDisplayTestimonials,
  SAMPLE_TESTIMONIALS_NOTICE,
  TESTIMONIAL_CATEGORIES,
  TestimonialCategory,
  Testimonial,
} from '../data/testimonialsData';
import { PRODUCTION_ASSET_REGISTRY } from '../data/assets';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TestimonialCard } from '../components/testimonials/TestimonialCard';
import { ContactBlock } from '../components/ContactBlock';
import {
  MessageSquare,
  Info,
  Calendar,
  Sparkles,
  Quote,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface ClientExperiencesPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const ClientExperiencesPage: React.FC<ClientExperiencesPageProps> = ({
  onOpenBooking,
}) => {
  const { items, isDemonstrationMode } = getActiveDisplayTestimonials();
  const breadcrumbs = getBreadcrumbsForPath('/client-experiences');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // --------------------------------------------------------------------------
  // FEATURED CLIENT EXPERIENCE AUTO-ROTATION STATE (Prompt #21G)
  // --------------------------------------------------------------------------
  // Lightweight randomized initial index so different page visits can begin on different profiles
  const [featuredIndex, setFeaturedIndex] = useState<number>(() => {
    return items.length > 0 ? Math.floor(Math.random() * items.length) : 0;
  });

  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Detect user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Coordinated slide change handler with refined crossfade
  const changeFeaturedIndex = useCallback(
    (targetIdx: number) => {
      if (items.length === 0) return;
      const normalizedIdx = (targetIdx + items.length) % items.length;

      if (prefersReducedMotion) {
        setFeaturedIndex(normalizedIdx);
        return;
      }

      setIsTransitioning(true);
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }

      transitionTimerRef.current = setTimeout(() => {
        setFeaturedIndex(normalizedIdx);
        setIsTransitioning(false);
      }, 250);
    },
    [items.length, prefersReducedMotion]
  );

  const handlePrevFeatured = useCallback(() => {
    changeFeaturedIndex(featuredIndex - 1);
  }, [changeFeaturedIndex, featuredIndex]);

  const handleNextFeatured = useCallback(() => {
    changeFeaturedIndex(featuredIndex + 1);
  }, [changeFeaturedIndex, featuredIndex]);

  // Clean React timer: 8-second cyclical automatic rotation with pause on hover/focus/touch
  useEffect(() => {
    // If paused, reduced motion requested, or fewer than 2 items, don't run automatic timer
    if (isHovered || isFocused || isInteracting || prefersReducedMotion || items.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      if (prefersReducedMotion) {
        setFeaturedIndex((prev) => (prev + 1) % items.length);
      } else {
        setIsTransitioning(true);
        if (transitionTimerRef.current) {
          clearTimeout(transitionTimerRef.current);
        }
        transitionTimerRef.current = setTimeout(() => {
          setFeaturedIndex((prev) => (prev + 1) % items.length);
          setIsTransitioning(false);
        }, 250);
      }
    }, 8000);

    return () => {
      clearInterval(interval);
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, [isHovered, isFocused, isInteracting, prefersReducedMotion, items.length]);

  // Resolved current featured testimonial profile
  const currentFeatured: Testimonial | undefined =
    items[featuredIndex] || items[0];

  const featuredPhotoAsset = currentFeatured?.photoAssetKey
    ? PRODUCTION_ASSET_REGISTRY[currentFeatured.photoAssetKey]
    : undefined;

  const featuredImageSrc =
    featuredPhotoAsset?.imagePath ||
    (currentFeatured?.photoAssetKey
      ? `/images/sample_clients/${currentFeatured.photoAssetKey.replace('sample-client-', 'sample_client_').replace(/-/g, '_')}.jpg`
      : '/images/sample_clients/sample_client_mia_santos.jpg');

  const featuredCategoryInfo = currentFeatured?.category
    ? TESTIMONIAL_CATEGORIES[currentFeatured.category]
    : undefined;

  const featuredDisplayName = currentFeatured?.attributionName || 'Client Profile';
  const featuredAltText = `Fictional sample client portrait — ${featuredDisplayName}`;

  // Filter items for the collection grid
  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const categoriesList: { key: string; label: string }[] = [
    { key: 'all', label: 'All Experiences' },
    { key: 'clinic_experience', label: TESTIMONIAL_CATEGORIES.clinic_experience.label },
    { key: 'consultation_experience', label: TESTIMONIAL_CATEGORIES.consultation_experience.label },
    { key: 'treatment_experience', label: TESTIMONIAL_CATEGORIES.treatment_experience.label },
    { key: 'wellness_experience', label: TESTIMONIAL_CATEGORIES.wellness_experience.label },
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#1D1815]">
      {/* ==================================================================== */}
      {/* 1. BREADCRUMBS & EDITORIAL PAGE HERO (Prompt #21D Section 6 & 19)      */}
      {/* ==================================================================== */}
      <section className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#E7DFD3]/80 bg-[#FAF7F2]">
        {/* Subtle ambient luxury warmth */}
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3EDE4] rounded-full blur-3xl -z-10 pointer-events-none opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-80 h-80 bg-[#EBDCC8]/30 rounded-full blur-3xl -z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb row */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="max-w-3xl">
            {/* Kicker / Eyebrow */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[#B89358]" />
              <span>CLIENT EXPERIENCES</span>
              <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              <span>The Ridges Cebu</span>
            </div>

            {/* Primary H1 Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-4 text-balance">
              Client Experiences
            </h1>

            {/* Supporting Headline */}
            <p className="font-serif text-lg sm:text-xl text-[#9E7A42] italic mb-4">
              Real experiences, shared with permission.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed mb-6">
              Discover how clients have experienced thoughtful care, personal attention, and a
              welcoming environment at Elite Aesthetics Cebu.
            </p>
          </div>

          {/* ==================================================================== */}
          {/* 2. DEMONSTRATION CONTENT NOTICE (Prompt #21D Section 7)               */}
          {/* ==================================================================== */}
          {isDemonstrationMode && (
            <div className="mt-4 p-5 sm:p-6 bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl">
              <div className="flex items-start gap-3.5">
                <Info className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#685B52] leading-relaxed">
                  <span className="font-semibold text-[#1D1815] block sm:inline mr-1.5 uppercase tracking-wide">
                    {SAMPLE_TESTIMONIALS_NOTICE.badge}:
                  </span>
                  <span>{SAMPLE_TESTIMONIALS_NOTICE.message}</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase px-3 py-1.5 bg-[#FAF7F2] border border-[#E7DFD3] text-[#736055] font-medium shrink-0 self-start sm:self-center">
                PROTOTYPE PREVIEW
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. FEATURED EXPERIENCE AREA (Prompt #21D Section 9 / #21G Auto-Rotate) */}
      {/* ==================================================================== */}
      {currentFeatured && (
        <section
          aria-labelledby="featured-experience-heading"
          className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#9E7A42] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
              <span id="featured-experience-heading">Featured Client Experience</span>
              <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              <span>Demonstration Story</span>
            </div>

            {/* Subtle manual controls & index indicator (Prompt #21G Section 17 & 18) */}
            {items.length > 1 && (
              <div
                className="flex items-center gap-2 self-start sm:self-auto"
                role="group"
                aria-label="Featured experience navigation"
              >
                <button
                  type="button"
                  onClick={handlePrevFeatured}
                  aria-label="Previous client experience"
                  className="p-1.5 border border-[#E7DFD3] transition-colors cursor-pointer bg-white hover:bg-[#FAF7F2] text-[#1D1815] hover:border-[#C9A77E] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42]"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <span
                  className="font-mono text-xs text-[#8C7667] px-1.5 select-none tabular-nums"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {String(featuredIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={handleNextFeatured}
                  aria-label="Next client experience"
                  className="p-1.5 border border-[#E7DFD3] transition-colors cursor-pointer bg-white hover:bg-[#FAF7F2] text-[#1D1815] hover:border-[#C9A77E] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42]"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          <div
            className="bg-white border border-[#E7DFD3] luxury-card-shadow overflow-hidden min-h-[460px] sm:min-h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setIsFocused(false);
              }
            }}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsInteracting(false), 3000);
            }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured Client Experience Showcase"
          >
            {/* Synchronized transition container */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 items-stretch h-full transition-opacity ${
                prefersReducedMotion ? 'duration-0' : 'duration-300 ease-in-out'
              } ${isTransitioning && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'}`}
            >
              {/* Large Featured Portrait Image Area */}
              <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[460px] bg-[#FAF7F2] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E7DFD3]">
                <img
                  src={featuredImageSrc}
                  alt={featuredAltText}
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Sample Client Tag */}
                <div className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-wider text-[#9E7A42] bg-white/95 backdrop-blur-xs border border-[#E7DFD3] px-2.5 py-1 shadow-xs">
                  SAMPLE CLIENT
                </div>

                {/* Treatment Label Badge */}
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.16em] font-semibold text-white drop-shadow-sm">
                  <span className="bg-[#1D1815]/85 backdrop-blur-xs px-2.5 py-1 border border-white/20">
                    {currentFeatured.treatmentName || 'Client Treatment'}
                  </span>
                </div>
              </div>

              {/* Testimonial Content & Narrative */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full min-h-[360px] sm:min-h-[420px]">
                <div>
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <cite className="not-italic font-serif text-2xl sm:text-3xl text-[#1D1815] font-medium block">
                      {featuredDisplayName}
                    </cite>
                    <span className="text-[10px] font-mono text-[#9E7A42] uppercase tracking-wider shrink-0">
                      DEMO PROFILE
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.16em] text-[#9E7A42] font-semibold mb-6">
                    {currentFeatured.contextNote || 'Client Experience'}
                    <span className="text-[#685B52] font-normal normal-case ml-2">
                      · {featuredCategoryInfo?.label || 'Aesthetic Care'}
                    </span>
                  </p>

                  <Quote className="w-8 h-8 text-[#C9A77E]/50 mb-4 rotate-180 shrink-0" aria-hidden="true" />

                  <blockquote className="font-serif text-base sm:text-xl text-[#1D1815] italic leading-relaxed mb-6 text-pretty">
                    &ldquo;{currentFeatured.quote}&rdquo;
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#685B52] leading-relaxed mb-8">
                    This demonstration profile illustrates how a client experience can be presented
                    on the website, from consultation context to the overall clinic experience.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E7DFD3]/70 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#736055]">
                    <CheckCircle2 className="w-4 h-4 text-[#9E7A42]" />
                    <span>Demonstration Profile Presentation</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(currentFeatured.treatmentName || 'Client Consultation')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
                    <span>Consult on {currentFeatured.treatmentName || 'Treatment'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* 4. COMPLETE CLIENT EXPERIENCE COLLECTION (Prompt #21D Section 10-13)  */}
      {/* ==================================================================== */}
      <section
        aria-labelledby="collection-heading"
        className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
              <span>ALL EXPERIENCES</span>
              <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              <span>PATIENT JOURNEYS</span>
            </div>

            <h2
              id="collection-heading"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1D1815] font-light leading-tight tracking-tight"
            >
              Curated Client Experiences
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#685B52] max-w-md leading-relaxed">
            Explore perspectives on the clinic experience, consultations, treatments, and wellness services.
          </p>
        </div>

        {/* Lightweight Category Navigation Tabs (Prompt #21D Section 13) */}
        <div
          role="tablist"
          aria-label="Filter experiences by category"
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-[#E7DFD3]/70"
        >
          {categoriesList.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.key)}
                className={`text-xs font-semibold uppercase tracking-wider px-3.5 py-2 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42] ${
                  isActive
                    ? 'bg-[#241D18] text-[#FAF7F2] shadow-xs'
                    : 'bg-white text-[#685B52] hover:text-[#1D1815] border border-[#E7DFD3] hover:border-[#C9A77E]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3-Column Editorial Grid (Prompt #21D Section 11) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard
                testimonial={testimonial}
                onOpenBooking={onOpenBooking}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5. CONSULTATION CTA (Prompt #21D Section 16)                          */}
      {/* ==================================================================== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE8] border-b border-[#E7DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
            <ShieldCheck className="w-4 h-4 text-[#B89358]" />
            <span>PERSONALIZED CARE JOURNEY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-4 text-balance">
            Ready for Your Own Experience?
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-2xl mx-auto mb-8">
            Begin with a consultation and take the first step toward a plan tailored to your goals.
          </p>

          <button
            type="button"
            onClick={() => onOpenBooking('Client Consultation')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#FAF7F2] bg-gradient-to-r from-[#29221E] via-[#382E28] to-[#241D18] hover:from-[#B89358] hover:to-[#9E7A42] border border-[#B89358]/50 shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B89358]/40"
          >
            <Calendar className="w-4 h-4 text-[#E8D8C3]" />
            <span>BOOK A CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
          </button>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 6. CLINIC CONTACT & LOCATION BLOCK                                   */}
      {/* ==================================================================== */}
      <section className="py-14 md:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactBlock />
      </section>
    </div>
  );
};
