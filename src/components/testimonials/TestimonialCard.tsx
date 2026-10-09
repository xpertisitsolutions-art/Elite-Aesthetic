import React from 'react';
import { Testimonial, TESTIMONIAL_CATEGORIES } from '../../data/testimonialsData';
import { PRODUCTION_ASSET_REGISTRY } from '../../data/assets';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onOpenBooking?: (treatmentName?: string) => void;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  const categoryInfo = TESTIMONIAL_CATEGORIES[testimonial.category];
  const isSample = testimonial.isSample || testimonial.contentStatus === 'sample';

  // Resolve photo asset from central registry or directly from public sample_clients
  const photoAsset = testimonial.photoAssetKey
    ? PRODUCTION_ASSET_REGISTRY[testimonial.photoAssetKey]
    : undefined;

  // Resolved image source path (Prompt #21C: Prominent major visual element)
  const imageSrc =
    photoAsset?.imagePath ||
    (testimonial.photoAssetKey
      ? `/images/sample_clients/${testimonial.photoAssetKey.replace('sample-client-', 'sample_client_').replace(/-/g, '_')}.jpg`
      : '/images/sample_clients/sample_client_mia_santos.jpg');

  const displayName = testimonial.attributionName || 'Client Profile';
  const altText = `Fictional sample client portrait — ${displayName}`;

  return (
    <article className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between h-full transition-all duration-300 hover:border-[#C9A77E] overflow-hidden group">
      <div>
        {/* Prominent Editorial Portrait Area (Prompt #21C Section 3 & 4) */}
        <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden border-b border-[#E7DFD3]/80">
          <img
            src={imageSrc}
            alt={altText}
            width={1024}
            height={1024}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Subtle warm luxury gradient overlay at bottom edge */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Mandatory Sample Client Indicator */}
          {isSample && (
            <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-wider text-[#9E7A42] bg-white/95 backdrop-blur-xs border border-[#E7DFD3] px-2.5 py-1 shadow-xs">
              SAMPLE CLIENT
            </div>
          )}

          {/* Category Badge overlay on bottom-left of image */}
          <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.16em] font-semibold text-white drop-shadow-sm flex items-center gap-1.5">
            <span className="bg-[#1D1815]/80 backdrop-blur-xs px-2.5 py-0.5 border border-white/20">
              {categoryInfo?.shortLabel || 'Client Experience'}
            </span>
          </div>
        </div>

        {/* Card Body: Identification, Context, & Testimonial Quote */}
        <div className="p-6 sm:p-7">
          {/* Attribution & Demo Status */}
          <div className="mb-4">
            <div className="flex items-baseline justify-between gap-2">
              <cite className="not-italic font-serif text-xl sm:text-2xl text-[#1D1815] font-medium block">
                {displayName}
              </cite>
              {isSample && (
                <span className="text-[10px] font-mono text-[#9E7A42] uppercase tracking-wider shrink-0">
                  DEMO PROFILE
                </span>
              )}
            </div>

            {/* Treatment Context Note */}
            <div className="flex items-center flex-wrap gap-1.5 text-xs text-[#736055] mt-1 font-medium">
              {testimonial.treatmentName && (
                <span className="text-[#9E7A42] uppercase tracking-wider text-[11px] font-semibold">
                  {testimonial.treatmentName}
                </span>
              )}
              {testimonial.treatmentName && testimonial.contextNote && (
                <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              )}
              {testimonial.contextNote && (
                <span className="text-[#685B52]">{testimonial.contextNote}</span>
              )}
            </div>
          </div>

          {/* Decorative Quote Accent */}
          <Quote className="w-5 h-5 text-[#C9A77E]/50 mb-3 rotate-180 shrink-0" aria-hidden="true" />

          {/* Primary Testimonial Quote Content */}
          <blockquote className="font-serif text-sm sm:text-base text-[#1D1815] italic leading-relaxed text-pretty">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </article>
  );
};
