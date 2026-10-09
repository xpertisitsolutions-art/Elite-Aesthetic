/**
 * Reusable Subpage Hero Component
 * Elite Aesthetics Cebu
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BreadcrumbItem } from '../data/navigationData';
import { Breadcrumbs } from './Breadcrumbs';
import { VisualAsset } from './VisualAsset';
interface SubpageHeroProps {
  eyebrow?: string;
  title: string;
  italicTitleWord?: string;
  supportingText?: string;
  breadcrumbs?: BreadcrumbItem[];
  imageSlot?: string;
  imageAlt?: string;
  primaryCtaLabel?: string;
  onPrimaryCta?: () => void;
  secondaryCtaLabel?: string;
  onSecondaryCta?: () => void;
}

export const SubpageHero: React.FC<SubpageHeroProps> = ({
  eyebrow,
  title,
  italicTitleWord,
  supportingText,
  breadcrumbs,
  imageSlot = 'clinic-interior-hero',
  imageAlt,
  primaryCtaLabel = 'BOOK A CONSULTATION',
  onPrimaryCta,
  secondaryCtaLabel,
  onSecondaryCta,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 md:pt-12 md:pb-20 border-b border-[#E7DFD3]/70">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-0 sm:right-1/4 w-48 sm:w-96 h-48 sm:h-96 max-w-full bg-[#F3EDE4] rounded-full blur-2xl sm:blur-3xl -z-10 pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 max-w-full bg-[#EBDCC8]/30 rounded-full blur-2xl sm:blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb row */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {eyebrow && (
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
                <span>{eyebrow}</span>
                <span aria-hidden="true" className="text-[#C9A77E]">·</span>
                <span>The Ridges Cebu</span>
              </div>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-4 text-balance">
              {title}{' '}
              {italicTitleWord && (
                <span className="italic font-normal text-[#9E7A42]">{italicTitleWord}</span>
              )}
            </h1>

            {supportingText && (
              <p className="text-base sm:text-lg text-[#3C332D]/90 font-normal leading-relaxed max-w-xl mb-8">
                {supportingText}
              </p>
            )}

            {/* CTAs */}
            {(onPrimaryCta || onSecondaryCta) && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                {onPrimaryCta && (
                  <button
                    type="button"
                    onClick={onPrimaryCta}
                    className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#B89358]"
                  >
                    <span>{primaryCtaLabel}</span>
                    <ArrowRight className="w-4 h-4 text-[#E8D8C3] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}

                {onSecondaryCta && secondaryCtaLabel && (
                  <button
                    type="button"
                    onClick={onSecondaryCta}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white/60 hover:bg-white transition-all duration-300 focus:outline-none"
                  >
                    <span>{secondaryCtaLabel}</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Authentic Luxury Visual Container (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden luxury-card-shadow border border-[#E7DFD3] bg-[#FAF7F2]">
                <VisualAsset
                  type={imageSlot}
                  alt={imageAlt || `${title} at Elite Aesthetics Cebu`}
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute top-3 left-3 z-10 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 border border-[#B89358]/40 shadow-xs">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#9E7A42] font-semibold block">
                    Elite Aesthetics Cebu
                  </span>
                  <span className="text-[11px] text-[#241D18] font-serif italic block">
                    The Ridges Commercial Center
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
