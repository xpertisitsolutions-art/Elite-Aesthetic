/**
 * Promotions Page — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /promotions
 * Content Governance: Transparent, Time-Sensitive, Zero Independent Medical/Validity Claims
 */

import React, { useState, useMemo } from 'react';
import { useRouter } from '../router/Router';
import { getBreadcrumbsForPath } from '../data/navigationData';
import {
  PROMOTIONS_DATA,
  PromotionCampaign,
  PromotionCategory,
} from '../data/promotionsData';
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
  Tag,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface PromotionsPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const breadcrumbs = getBreadcrumbsForPath('/promotions');
  const [selectedCategory, setSelectedCategory] = useState<PromotionCategory>('ALL');

  // Filter categories
  const categories: PromotionCategory[] = [
    'ALL',
    'BODY & FACE',
    'WELLNESS',
    'INJECTABLES',
    'SKIN & FACE',
  ];

  // Filtered promotions list
  const filteredPromotions = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return PROMOTIONS_DATA;
    }
    return PROMOTIONS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#FAF7F2] text-[#2C2420]">
      {/* ==================================================================== */}
      {/* 1. HERO SECTION (EDITORIAL COMPOSITION)                              */}
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
                Current Ways to <span className="italic font-normal text-[#9E7A42]">Experience More</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3C332D] leading-relaxed max-w-xl mb-8">
                Discover selected offers and promotional experiences from Elite Aesthetics Cebu,
                with current availability and details confirmed directly with the clinic.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('General Consultation')}
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
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-white">
                <VisualAsset
                  type="campaign-cover"
                  alt="Elite Aesthetics Cebu Promotional Campaign Feature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Campaign Artwork
                </div>
              </div>
              <p className="text-[11px] text-[#8C7667] text-center mt-2.5 italic">
                Promotional campaign materials from Elite Aesthetics Cebu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. PROMOTIONAL TRANSPARENCY NOTICE                                   */}
      {/* ==================================================================== */}
      <section className="bg-[#FAF7F2] py-8 border-b border-[#E7DFD3]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 bg-white border border-[#B89358]/40 luxury-card-shadow flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#B89358]/40 flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-4 h-4 text-[#9E7A42]" />
            </div>
            <div className="space-y-1.5 text-xs text-[#52453D] leading-relaxed">
              <h2 className="font-serif text-base text-[#1D1815] font-medium">
                Promotions Change. Your Care Comes First.
              </h2>
              <p>
                Promotional offers may change based on availability, campaign period, treatment
                suitability, and clinic terms. Please contact Elite Aesthetics Cebu to confirm current
                pricing, availability, inclusions, and applicable conditions before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. PROMOTION FILTERING & CARDS GRID                                  */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Curated Privileges
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Selected Clinic Promotions
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              Explore documented promotional features. All privileges require professional
              consultation to establish personal suitability.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Promotion categories">
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPromotions.map((promo) => (
              <div
                key={promo.id}
                className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between hover:border-[#C9A77E] transition-all duration-300 group"
              >
                {/* Visual Asset Container */}
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2] border-b border-[#E7DFD3]">
                    <VisualAsset
                      type={promo.assetKey}
                      alt={promo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-2.5 py-1 border border-[#B89358]/30 text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                      {promo.campaignLabel}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#241D18]/90 text-[#FAF7F2] backdrop-blur-xs px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold">
                      Subject to Confirmation
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block mb-1.5">
                      {promo.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1D1815] font-medium mb-3">
                      {promo.title}
                    </h3>
                    <p className="text-xs text-[#52453D] leading-relaxed mb-5">
                      {promo.description}
                    </p>

                    {/* Pricing Information (Strictly Displayed from Artwork) */}
                    {promo.displayedPrice && (
                      <div className="p-3.5 bg-[#FAF7F2] border border-[#E7DFD3] mb-4">
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <span className="text-xs text-[#8C7667]">Displayed Artwork Rate:</span>
                          <div className="flex items-baseline gap-2">
                            {promo.originalPrice && (
                              <span className="text-xs text-[#8C7667] line-through">
                                {promo.originalPrice}
                              </span>
                            )}
                            <span className="font-serif text-lg font-medium text-[#1D1815]">
                              {promo.displayedPrice}
                            </span>
                          </div>
                        </div>
                        {promo.packageQuantity && (
                          <div className="text-[10px] text-[#9E7A42] font-semibold flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            <span>{promo.packageQuantity}</span>
                          </div>
                        )}
                        <p className="text-[10px] text-[#8C7667] italic mt-1.5 border-t border-[#E7DFD3]/60 pt-1.5">
                          Displayed promotional pricing is subject to clinic confirmation.
                        </p>
                      </div>
                    )}

                    {/* Verification Note */}
                    <div className="flex items-start gap-2 text-[11px] text-[#736055] italic mb-2">
                      <Clock className="w-3.5 h-3.5 text-[#B89358] shrink-0 mt-0.5" />
                      <span>{promo.verificationNote}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#E7DFD3]/70 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(promo.bookingService)}
                      className="text-xs font-semibold uppercase tracking-wider px-4 py-2.5 bg-[#241D18] hover:bg-[#9E7A42] text-[#FAF7F2] transition-colors focus:outline-none text-center"
                    >
                      Inquire About This Promotion
                    </button>

                    {promo.treatmentRoute && (
                      <button
                        type="button"
                        onClick={() => navigate(promo.treatmentRoute!)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors inline-flex items-center justify-center gap-1 focus:outline-none py-1"
                      >
                        <span>Explore Treatment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 4. NON-PROMOTIONAL EDITORIAL SECTION                                 */}
      {/* ==================================================================== */}
      <SectionBackground variant="ivory" paddingY="lg" borderBottom={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Large Image on Left (55% width on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-[#FAF7F2]">
              <VisualAsset
                type="clinic-suite"
                alt="Quiet clinical consultation environment at Elite Aesthetics Cebu"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                Clinical Environment
              </div>
            </div>
            <p className="text-[11px] text-[#8C7667] text-center mt-2 italic">
              Authentic consultation suite at The Ridges Commercial Center, Cebu City.
            </p>
          </div>

          {/* Editorial Text on Right (45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Philosophy of Care</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
              The Offer Is Only Part of the Experience
            </h2>

            <p className="text-sm sm:text-base text-[#3C332D] leading-relaxed mb-6 font-normal">
              At Elite Aesthetics, we believe that true clinical excellence cannot be defined by a
              discount. A promotional privilege may open the door, but the foundation of our care
              remains unhurried consultation, individual suitability, and realistic expectations.
            </p>

            {/* Three Pillars */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <ShieldCheck className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Personalized Consultation:</strong> Every treatment plan is crafted around
                  your unique anatomy and personal goals.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <ShieldCheck className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Expectations:</strong> Clear discussion of procedure parameters,
                  session frequency, and anticipated outcomes.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <ShieldCheck className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Clinical Suitability:</strong> Treatments are administered only when
                  determined medically appropriate by our clinical staff.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div>
              <button
                type="button"
                onClick={() => onOpenBooking('Consultation & Assessment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
              >
                <span>Schedule a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 5. DARK ESPRESSO FEATURE SECTION — CHOOSE WITH CONFIDENCE            */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="Care Before Price"
        title="Choose With"
        italicTitleWord="Confidence."
        description="Promotional availability can change. The right treatment begins with understanding what is appropriate for you."
        ghostedAssetKey="clinic-suite"
        ghostedOpacity={0.08}
        ghostedMask="soft-edges"
        paddingY="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Standard 01
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Individual Suitability
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              We never recommend a protocol based on a promotion if it is not suitable for your
              individual aesthetic goals.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Standard 02
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Transparent Pricing
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              All package terms, quantities, and inclusions are clearly explained with no hidden fees
              or rushed commitments.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Standard 03
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Continuity of Care
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Promotional treatments receive the exact same attentive clinical protocols and care as
              our signature services.
            </p>
          </div>
        </div>
      </DarkFeatureSection>

      {/* ==================================================================== */}
      {/* 6. PROMOTION GOVERNANCE FOOTER — BEFORE YOU BOOK                     */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="sm" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow flex items-start gap-4">
            <ShieldCheck className="w-5 h-5 text-[#9E7A42] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs text-[#52453D] leading-relaxed">
              <h3 className="font-serif text-base text-[#1D1815] font-medium">
                Before You Book
              </h3>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#685B52]">
                <li>Promotional prices and offers may change based on clinic terms.</li>
                <li>Availability and terms should be confirmed directly with the clinic before your visit.</li>
                <li>Treatment suitability varies by individual and is determined during clinical assessment.</li>
                <li>Promotional artwork may represent a campaign period that has ended.</li>
                <li>Final pricing, inclusions, eligibility, and applicable conditions must be confirmed with Elite Aesthetics.</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 7. FINAL CONSULTATION CTA                                            */}
      {/* ==================================================================== */}
      <InternalCTA
        title="Ready to Explore"
        italicWord="An Offer?"
        subtitle="Special Privileges at The Ridges"
        supportingText="Tell us which promotion caught your attention and our team can help you confirm the current details and next steps."
        primaryLabel="Book a Consultation"
        onPrimaryClick={() => onOpenBooking('Promotion Inquiry')}
        secondaryLabel="Contact Elite Aesthetics"
        secondaryPath="/contact"
      />
    </div>
  );
};
