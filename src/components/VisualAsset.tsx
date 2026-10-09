import React, { useState } from 'react';
import { PRODUCTION_ASSET_REGISTRY, ProductionAsset } from '../data/assets';
import { EliteAestheticsLogo } from './EliteAestheticsLogo';

interface VisualAssetProps {
  type: string;
  className?: string;
  alt?: string;
  customSrc?: string;
  focalPoint?: string;
  aspectRatioClass?: string;
}

export const VisualAsset: React.FC<VisualAssetProps> = ({
  type,
  className = 'w-full h-full',
  alt,
  customSrc,
  focalPoint,
  aspectRatioClass = '',
}) => {
  const [loadError, setLoadError] = useState(false);

  // Look up asset in central production registry
  const asset: ProductionAsset | undefined = PRODUCTION_ASSET_REGISTRY[type];

  // Resolve image source (priority: customSrc if given, else registry path)
  const imageSource = customSrc || asset?.imagePath;
  const effectiveAlt = alt || asset?.altText || `Elite Aesthetics Cebu - ${asset?.name || type}`;
  const effectiveFocal = focalPoint || asset?.focalPoint || 'center';

  if (imageSource && !loadError) {
    return (
      <div className={`relative overflow-hidden w-full h-full bg-[#FAF7F2] ${aspectRatioClass}`}>
        <img
          src={imageSource}
          alt={effectiveAlt}
          width={asset?.width}
          height={asset?.height}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02] ${className}`}
          style={{ objectPosition: effectiveFocal }}
          referrerPolicy="no-referrer"
          onError={() => setLoadError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  // Tasteful neutral editorial fallback if an image ever fails to load
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE8] border border-[#E7DFD3] flex flex-col items-center justify-center p-6 text-center ${className} ${aspectRatioClass}`}
      role="img"
      aria-label={effectiveAlt}
    >
      <div className="absolute inset-3 border border-[#B89358]/20 pointer-events-none" />
      <div className="relative z-10 mb-3">
        <EliteAestheticsLogo variant="emblem" size="md" theme="dark" />
      </div>
      <div className="relative z-10 max-w-xs">
        <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-1">
          {asset?.category || 'Elite Aesthetics'}
        </span>
        <h4 className="font-serif text-lg text-[#1D1815] font-medium leading-snug">
          {asset?.name || type}
        </h4>
        <p className="text-[11px] text-[#685B52] mt-1">
          The Ridges Commercial Center, Kasambagan, Cebu
        </p>
      </div>
    </div>
  );
};
