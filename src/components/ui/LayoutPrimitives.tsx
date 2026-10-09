/**
 * Reusable Layout Primitives
 * Elite Aesthetics Cebu — Visual Rhythm & Background Palette System
 *
 * Implements the coordinated background palette:
 * - Cream / Warm Ivory (#FAF7F2)
 * - Pure White (#FFFFFF)
 * - Soft Warm Taupe (#F5EFEB)
 * - Soft Light Champagne (#F6F1EA)
 * - Deep Espresso (#1E1815)
 *
 * Provides 'SectionBackground', 'DarkFeatureSection', and 'GhostedImage' for
 * consistent, editorial, quiet-luxury visual rhythm across internal pages.
 */

import React from 'react';
import { GhostedImage, GhostedMaskType, GhostedPosition } from './GhostedImage';

export { GhostedImage };
export type { GhostedMaskType, GhostedPosition };

export type BackgroundVariant =
  | 'cream'
  | 'ivory'
  | 'white'
  | 'warm-taupe'
  | 'taupe'
  | 'champagne'
  | 'espresso';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface SectionBackgroundProps extends React.HTMLAttributes<HTMLElement> {
  variant?: BackgroundVariant;
  paddingY?: SectionPadding;
  borderTop?: boolean;
  borderBottom?: boolean;
  ghostedAssetKey?: string;
  ghostedOpacity?: number;
  ghostedFade?: GhostedMaskType;
  ghostedPosition?: GhostedPosition;
  children: React.ReactNode;
  containerClassName?: string;
  isFullWidth?: boolean;
}

const PADDING_MAP: Record<SectionPadding, string> = {
  none: '',
  sm: 'py-10 md:py-14',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-32',
};

const VARIANT_MAP: Record<
  BackgroundVariant,
  { bgClass: string; textClass: string; defaultBorderColor: string }
> = {
  cream: {
    bgClass: 'bg-[#FAF7F2]',
    textClass: 'text-[#2C2420]',
    defaultBorderColor: 'border-[#E7DFD3]/70',
  },
  ivory: {
    bgClass: 'bg-[#FAF7F2]',
    textClass: 'text-[#2C2420]',
    defaultBorderColor: 'border-[#E7DFD3]/70',
  },
  white: {
    bgClass: 'bg-white',
    textClass: 'text-[#2C2420]',
    defaultBorderColor: 'border-[#E7DFD3]/70',
  },
  'warm-taupe': {
    bgClass: 'bg-[#F5EFEB]',
    textClass: 'text-[#2C2420]',
    defaultBorderColor: 'border-[#E2D7C8]',
  },
  taupe: {
    bgClass: 'bg-[#F5EFEB]',
    textClass: 'text-[#2C2420]',
    defaultBorderColor: 'border-[#E2D7C8]',
  },
  champagne: {
    bgClass: 'bg-[#F6F1EA]',
    textClass: 'text-[#2C2420]',
    defaultBorderColor: 'border-[#E2D7C8]',
  },
  espresso: {
    bgClass: 'bg-[#1E1815]',
    textClass: 'text-[#FAF7F2]',
    defaultBorderColor: 'border-[#B89358]/30',
  },
};

/**
 * SectionBackground
 * Flexible section container that guarantees visual harmony and WCAG contrast
 * across the Elite Aesthetics neutral tonal palette.
 */
export const SectionBackground: React.FC<SectionBackgroundProps> = ({
  variant = 'cream',
  paddingY = 'lg',
  borderTop = false,
  borderBottom = true,
  ghostedAssetKey,
  ghostedOpacity = 0.10,
  ghostedFade = 'radial',
  ghostedPosition = 'center',
  children,
  className = '',
  containerClassName = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  isFullWidth = false,
  ...rest
}) => {
  const config = VARIANT_MAP[variant] || VARIANT_MAP.cream;
  const paddingClass = PADDING_MAP[paddingY] || '';
  const topBorderClass = borderTop ? `border-t ${config.defaultBorderColor}` : '';
  const bottomBorderClass = borderBottom ? `border-b ${config.defaultBorderColor}` : '';

  return (
    <section
      className={`relative ${config.bgClass} ${config.textClass} ${topBorderClass} ${bottomBorderClass} ${paddingClass} ${className}`}
      {...rest}
    >
      {/* Optional Ghosted Photography Layer */}
      {ghostedAssetKey && (
        <GhostedImage
          assetKey={ghostedAssetKey}
          opacity={ghostedOpacity}
          mask={ghostedFade}
          position={ghostedPosition}
        />
      )}

      {/* Content Container */}
      <div className={`relative z-10 ${isFullWidth ? '' : containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export interface DarkFeatureSectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: string;
  title?: React.ReactNode;
  italicTitleWord?: string;
  description?: string;
  showDecorativeFrame?: boolean;
  maxWidth?: '4xl' | '5xl' | '6xl' | '7xl';
  paddingY?: SectionPadding;
  headerClassName?: string;
  ghostedAssetKey?: string;
  ghostedOpacity?: number;
  ghostedMask?: GhostedMaskType;
  children: React.ReactNode;
}

const MAX_WIDTH_MAP = {
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

/**
 * DarkFeatureSection
 * Dedicated deep espresso feature section for major visual punctuation chapters
 * (e.g. Treatment Planning, Clinical Philosophy, Trust Commitments).
 */
export const DarkFeatureSection: React.FC<DarkFeatureSectionProps> = ({
  eyebrow,
  title,
  italicTitleWord,
  description,
  showDecorativeFrame = true,
  maxWidth = '7xl',
  paddingY = 'lg',
  headerClassName = 'text-center max-w-2xl mx-auto mb-16',
  ghostedAssetKey,
  ghostedOpacity = 0.08,
  ghostedMask = 'soft-edges',
  children,
  className = '',
  ...rest
}) => {
  const paddingClass = PADDING_MAP[paddingY] || '';
  const maxWidthClass = MAX_WIDTH_MAP[maxWidth] || 'max-w-7xl';

  return (
    <section
      className={`relative bg-[#1E1815] text-[#FAF7F2] border-y border-[#B89358]/30 overflow-hidden ${paddingClass} ${className}`}
      {...rest}
    >
      {/* Optional Ghosted Photography Layer for dark sections */}
      {ghostedAssetKey && (
        <GhostedImage
          assetKey={ghostedAssetKey}
          opacity={ghostedOpacity}
          mask={ghostedMask}
          blendMode="luminosity"
        />
      )}

      {/* Subtle radial ambient warmth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(184,147,88,0.14),transparent_70%)] pointer-events-none -z-0"
      />

      {/* Optional decorative hairline outer frame */}
      {showDecorativeFrame && (
        <div
          aria-hidden="true"
          className="absolute inset-4 sm:inset-8 border border-[#B89358]/20 pointer-events-none hidden sm:block -z-0"
        />
      )}

      <div className={`relative z-10 ${maxWidthClass} mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Optional Section Header */}
        {(eyebrow || title || description) && (
          <div className={headerClassName}>
            {eyebrow && (
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 max-w-full">
                <span className="hidden sm:inline-block w-8 h-[1px] bg-[#C9A77E]/60 shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.26em] text-[#C9A77E] font-medium text-center">
                  {eyebrow}
                </span>
                <span className="hidden sm:inline-block w-8 h-[1px] bg-[#C9A77E]/60 shrink-0" />
              </div>
            )}

            {title && (
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] font-light mb-4 tracking-tight">
                {title}{' '}
                {italicTitleWord && (
                  <span className="italic text-[#C9A77E] font-normal">{italicTitleWord}</span>
                )}
              </h2>
            )}

            {description && (
              <p className="text-sm sm:text-base text-[#EBDCC8]/85 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};
