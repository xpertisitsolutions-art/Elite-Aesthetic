/**
 * FAQ Page — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /faq
 * Strict Content Governance: Trust-Building, Zero Unsupported Claims, Quiet Luxury
 */

import React, { useState, useMemo } from 'react';
import { useRouter } from '../router/Router';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { FAQS_DATA, FAQCategory, FAQItem } from '../data/faqsData';
import { VisualAsset } from '../components/VisualAsset';
import {
  SectionBackground,
  DarkFeatureSection,
} from '../components/ui/LayoutPrimitives';
import {
  ArrowRight,
  ArrowLeft,
  Info,
  ShieldCheck,
  Plus,
  Minus,
  HelpCircle,
  CheckCircle2,
  Phone,
  Calendar,
} from 'lucide-react';

interface FaqPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();
  const breadcrumbs = getBreadcrumbsForPath('/faq');
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('ALL');
  const [openFaqIds, setOpenFaqIds] = useState<Set<string>>(new Set(['faq-gen-1']));

  const categories: FAQCategory[] = [
    'ALL',
    'GENERAL QUESTIONS',
    'CONSULTATIONS',
    'TREATMENTS',
    'PROMOTIONS & SPECIAL OFFERS',
    'PRICING',
    'BOOKING & CONTACT',
    'CARE & EXPECTATIONS',
    'MEDICAL INFORMATION',
    'WELLNESS & IV',
    'INJECTABLES',
    'MEDICAL WEIGHT MANAGEMENT',
    'RESULTS & EXPERIENCE',
    'PRIVACY & CLIENT IMAGES',
  ];

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return FAQS_DATA;
    }
    return FAQS_DATA.filter((faq) => faq.category === selectedCategory);
  }, [selectedCategory]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const checklistItems = [
    'What concern am I trying to address?',
    'What treatment options are available?',
    'Why might this treatment be appropriate for me?',
    'What should I realistically expect?',
    'Are there alternatives I should consider?',
    'What preparation or aftercare should I know about?',
    'What is the current price?',
    'Are there any conditions attached to a promotion?',
    'Who will perform the treatment?',
    'What should I do if I have concerns afterward?',
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
                Questions Are <span className="italic font-normal text-[#9E7A42]">Part of the Process.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#3C332D] leading-relaxed max-w-xl mb-8">
                Good aesthetic care begins with understanding. Explore common questions about
                consultations, treatments, pricing, promotions, booking, expectations, and
                personalized care.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenBooking('Consultation Inquiry')}
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
                  type="clinic-suite"
                  alt="Elite Aesthetics Cebu Quiet Consultation Suite"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Consultation Environment
                </div>
              </div>
              <p className="text-[11px] text-[#8C7667] text-center mt-2.5 italic">
                Quiet clinical consultation room at The Ridges, Cebu City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. FAQ INTRODUCTION & GOVERNANCE NOTICE                             */}
      {/* ==================================================================== */}
      <section className="bg-[#FAF7F2] py-8 border-b border-[#E7DFD3]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-6 bg-white border border-[#B89358]/40 luxury-card-shadow flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#B89358]/40 flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-4 h-4 text-[#9E7A42]" />
            </div>
            <div className="space-y-1.5 text-xs text-[#52453D] leading-relaxed">
              <h2 className="font-serif text-base text-[#1D1815] font-medium">
                Start With What You Want to Know
              </h2>
              <p>
                Every person, treatment, and care plan is different. These answers are designed to help
                you understand the process and identify the questions that matter most before making a
                treatment decision.
              </p>
              <p className="text-[11px] text-[#8C7667] italic pt-1 border-t border-[#E7DFD3]/60">
                Information on this page is intended for general guidance and does not replace a
                professional consultation or individualized medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. CATEGORY FILTER TABS & ACCORDION SYSTEM                           */}
      {/* ==================================================================== */}
      <SectionBackground variant="white" paddingY="lg" borderBottom={true}>
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Structured Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              Select a category below to explore specific guidance, or review the complete index of
              questions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
            role="tablist"
            aria-label="FAQ categories"
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
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border focus:outline-none ${
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

          {/* Accordion List */}
          <div className="space-y-4 mb-14" role="region" aria-label="FAQ questions">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`bg-white border transition-all duration-200 ${
                    isOpen ? 'border-[#C9A77E] luxury-card-shadow' : 'border-[#E7DFD3]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer group"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block">
                        {faq.category}
                      </span>
                      <span className="font-serif text-lg sm:text-xl text-[#1D1815] font-medium group-hover:text-[#9E7A42] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#E7DFD3] flex items-center justify-center shrink-0 mt-1 text-[#9E7A42] group-hover:border-[#9E7A42] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#52453D] leading-relaxed border-t border-[#E7DFD3]/70">
                      <p className="mb-3">{faq.answer}</p>
                      {faq.relatedLink && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => navigate(faq.relatedLink!.path)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors focus:outline-none"
                          >
                            <span>{faq.relatedLink.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 4. EDITORIAL FEATURE SECTION                                         */}
      {/* ==================================================================== */}
      <SectionBackground variant="ivory" paddingY="lg" borderBottom={true}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Authentic Photography (55%) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#DBC3A3] luxury-card-shadow bg-[#FAF7F2]">
              <VisualAsset
                type="doctor-care"
                alt="Physician Consultation at Elite Aesthetics Cebu"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                Clinical Consultation
              </div>
            </div>
            <p className="text-[11px] text-[#8C7667] text-center mt-2 italic">
              Attentive in-clinic consultation at The Ridges Commercial Center, Cebu City.
            </p>
          </div>

          {/* Right: Editorial Narrative (45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#B89358]" />
              <span>Informed Decision-Making</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-4">
              Ask What Matters to You.
            </h2>

            <p className="text-sm sm:text-base text-[#3C332D] leading-relaxed mb-6 font-normal">
              A thoughtful treatment decision starts with the right conversation. If you are unsure
              about a treatment, ask about suitability, alternatives, expectations, preparation,
              aftercare, and anything else that matters to you.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Unhurried Dialogue:</strong> Ample opportunity to ask questions without feeling
                  rushed or committed.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Transparent Guidance:</strong> Honest expectations about outcomes, session
                  counts, and aftercare.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3C332D]">
                <CheckCircle2 className="w-4 h-4 text-[#9E7A42] shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Obligation:</strong> You retain complete freedom to decide whether to
                  proceed.
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onOpenBooking('Consultation & Assessment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
              </button>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 5. IMPORTANT QUESTIONS TO ASK BEFORE BOOKING (CHECKLIST)             */}
      {/* ==================================================================== */}
      <SectionBackground variant="champagne" paddingY="lg" borderBottom={true}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Empowered Choices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-3">
              Before You Book
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
              We encourage you to bring this checklist of thoughtful questions to your consultation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklistItems.map((item, index) => (
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
            Your clinical team is always ready to answer each of these questions thoroughly.
          </p>
        </div>
      </SectionBackground>

      {/* ==================================================================== */}
      {/* 6. DARK EDITORIAL SECTION — CLARITY BEFORE CONFIDENCE                */}
      {/* ==================================================================== */}
      <DarkFeatureSection
        eyebrow="Decision Philosophy"
        title="Clarity Before"
        italicTitleWord="Confidence."
        description="The goal is not simply to choose a treatment. It is to understand your options well enough to make a decision that feels right for you."
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
              Open Communication
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Direct, transparent answers regarding what a treatment can realistically achieve.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Value 02
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Personalized Guidance
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Care planning designed around your features and personal comfort rather than trends.
            </p>
          </div>

          <div className="bg-[#2B231D]/90 p-7 border border-[#B89358]/30">
            <span className="text-[10px] uppercase tracking-wider text-[#C9A77E] font-semibold block mb-2">
              Value 03
            </span>
            <h3 className="font-serif text-lg text-[#FAF7F2] font-medium mb-2">
              Respect for Time
            </h3>
            <p className="text-xs text-[#EBDCC8]/85 leading-relaxed">
              Freedom to reflect on options and proceed only when you feel completely comfortable.
            </p>
          </div>
        </div>
      </DarkFeatureSection>

      {/* ==================================================================== */}
      {/* 7. FINAL CONSULTATION CTA                                            */}
      {/* ==================================================================== */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 border-t border-[#E7DFD3]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-3">
            Questions Are Welcome
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light mb-4 text-balance">
            Still Have a <span className="italic font-normal text-[#9E7A42]">Question?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed max-w-xl mx-auto mb-8">
            If you cannot find the information you are looking for, reach out to Elite Aesthetics Cebu
            directly or request a consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8D8C3]" />
              <span>Contact the Clinic</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/book-consultation')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white transition-colors focus:outline-none"
            >
              <Calendar className="w-3.5 h-3.5 text-[#9E7A42]" />
              <span>Book a Consultation</span>
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
