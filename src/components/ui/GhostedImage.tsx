/**
 * Reusable GhostedImage Visual Primitive
 * Elite Aesthetics Cebu — Visual Rhythm & Background Refinement
 *
 * Positions an authentic Elite Aesthetics production photograph behind
 * selected content areas at low opacity (8–18%) with editorial edge masks.
 * Ensures strict WCAG AA contrast and zero interference with readability.
 */

import React from 'react';
import { PRODUCTION_ASSET_REGISTRY, ProductionAsset } from '../../data/assets';

export type GhostedMaskType =
  | 'radial'
  | 'vertical'
  | 'horizontal'
  | 'bottom-fade'
  | 'top-fade'
  | 'soft-edges'
  | 'none';

export type GhostedPosition =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-right'
  | 'bottom-left'
  | 'center-right';

export interface GhostedImageProps {
  /** Asset key from PRODUCTION_ASSET_REGISTRY */
  assetKey?: string;
  /** Configurable opacity clamped between 0.08 and 0.18 (default: 0.10) */
  opacity?: number;
  /** Editorial gradient mask for smooth dissolution */
  mask?: GhostedMaskType;
  /** Background positioning for responsive composition */
  position?: GhostedPosition;
  /** Subtle zoom scale factor (default: 1.05) */
  scale?: number;
  /** Optional blend mode for light or dark sections */
  blendMode?: 'normal' | 'multiply' | 'luminosity' | 'overlay' | 'soft-light';
  /** Additional custom class names */
  className?: string;
}

const POSITION_MAP: Record<GhostedPosition, string> = {
  center: 'bg-center',
  top: 'bg-top',
  bottom: 'bg-bottom',
  left: 'bg-left',
  right: 'bg-right',
  'top-right': 'bg-top-right',
  'bottom-left': 'bg-bottom-left',
  'center-right': 'bg-[center_right]',
};

export const GhostedImage: React.FC<GhostedImageProps> = ({
  assetKey = 'hero-wide',
  opacity = 0.10,
  mask = 'radial',
  position = 'center',
  scale = 1.04,
  blendMode = 'normal',
  className = '',
}) => {
  // Clamp opacity strictly within the 0.08–0.18 range for guaranteed WCAG AA legibility
  const clampedOpacity = Math.min(0.18, Math.max(0.08, opacity));

  // Retrieve approved asset from registry; safety fallback ensures zero broken paths
  const candidateAsset: ProductionAsset | undefined = PRODUCTION_ASSET_REGISTRY[assetKey];

  // Governance check: strictly reject promotional assets as ghosted backgrounds
  const isValidNonPromotional =
    candidateAsset && candidateAsset.productionStatus !== 'reserved_promotional';

  const verifiedAsset = isValidNonPromotional
    ? candidateAsset
    : PRODUCTION_ASSET_REGISTRY['hero-wide'];

  const imageSrc = verifiedAsset ? verifiedAsset.imagePath : '/images/v2/02_Clinic_Interior/Hero_Image-5.jpg';

  // Compute CSS mask gradient based on editorial mask type
  const getMaskStyle = (): React.CSSProperties => {
    switch (mask) {
      case 'radial':
        return {
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0) 80%)',
        };
      case 'vertical':
        return {
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
        };
      case 'bottom-fade':
        return {
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
        };
      case 'top-fade':
        return {
          maskImage:
            'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
        };
      case 'horizontal':
        return {
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
        };
      case 'soft-edges':
        return {
          maskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 95%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0) 95%)',
        };
      case 'none':
      default:
        return {};
    }
  };

  const positionClass = POSITION_MAP[position] || 'bg-center';

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none -z-0 ${className}`}
    >
      <div
        className={`w-full h-full bg-cover ${positionClass} grayscale-[15%] transition-opacity duration-700`}
        style={{
          backgroundImage: `url(${imageSrc})`,
          opacity: clampedOpacity,
          transform: `scale(${scale})`,
          mixBlendMode: blendMode,
          ...getMaskStyle(),
        }}
      />
    </div>
  );
};
