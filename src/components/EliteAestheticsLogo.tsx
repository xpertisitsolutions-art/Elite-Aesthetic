import React from 'react';

interface EliteAestheticsLogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTagline?: boolean;
}

export const EliteAestheticsLogo: React.FC<EliteAestheticsLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  // Height classes maintaining original square/circle proportions without stretching
  const imageSizes = {
    sm: 'h-7 w-7 sm:h-8 sm:w-8',
    md: 'h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10',
    lg: 'h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-11 lg:w-11 xl:h-13 xl:w-13 2xl:h-14 2xl:w-14',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base md:text-lg',
    md: 'text-[14px] sm:text-[16px] md:text-lg lg:text-xl',
    lg: 'text-lg sm:text-xl md:text-xl lg:text-[19px] xl:text-[22px] 2xl:text-2xl',
  };

  const subtextSizes = {
    sm: 'text-[7px] sm:text-[8px] tracking-[0.26em] sm:tracking-[0.3em]',
    md: 'text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.28em] sm:tracking-[0.34em]',
    lg: 'text-[9px] sm:text-[10px] md:text-[10px] lg:text-[9px] xl:text-[10px] tracking-[0.24em] sm:tracking-[0.30em]',
  };

  const trackingClasses = {
    sm: 'tracking-[0.10em] sm:tracking-[0.14em]',
    md: 'tracking-[0.10em] sm:tracking-[0.14em] md:tracking-[0.16em]',
    lg: 'tracking-[0.12em] sm:tracking-[0.16em] md:tracking-[0.16em] lg:tracking-[0.12em] xl:tracking-[0.16em] 2xl:tracking-[0.20em]',
  };

  const isLightText = theme === 'light';

  // High-resolution V2 uploaded logo asset (1600x1600 original)
  const LogoImage = (
    <img
      src="/images/v2/01_Brand/Logo-2.jpg"
      alt="Elite Aesthetics Cebu Official Logo"
      width={1600}
      height={1600}
      className={`${imageSizes[size]} object-contain rounded-full shadow-xs shrink-0 border border-[#B89358]/40`}
      referrerPolicy="no-referrer"
    />
  );

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        {LogoImage}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center max-w-full ${className}`}>
        {LogoImage}
        <div className="mt-2.5">
          <span
            className={`font-serif ${textSizes[size]} font-medium ${trackingClasses[size]} block uppercase ${
              isLightText ? 'text-[#FAF7F2]' : 'text-[#1D1815]'
            }`}
          >
            ELITE AESTHETICS
          </span>
          <span
            className={`${subtextSizes[size]} uppercase text-[#A17C44] font-semibold block mt-0.5`}
          >
            CEBU
          </span>
          {showTagline && (
            <span
              className={`font-serif italic text-xs tracking-wider block mt-1 ${
                isLightText ? 'text-[#C9A77E]' : 'text-[#7E5F32]'
              }`}
            >
              Beauty Beyond Imperfection
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default horizontal layout pairing the official logo image with the clean brand mark
  return (
    <div className={`flex items-center gap-2 sm:gap-3 min-w-0 max-w-full ${className}`}>
      {LogoImage}
      <div className="flex flex-col justify-center text-left min-w-0">
        <span
          className={`font-serif ${textSizes[size]} font-medium ${trackingClasses[size]} leading-tight block uppercase whitespace-nowrap ${
            isLightText ? 'text-[#FAF7F2]' : 'text-[#1D1815]'
          }`}
        >
          ELITE AESTHETICS
        </span>
        <div className="flex items-center gap-1.5 sm:gap-2 -mt-0.5">
          <span className={`${subtextSizes[size]} uppercase text-[#A17C44] font-semibold block`}>
            CEBU
          </span>
          {showTagline && (
            <>
              <span className="text-[10px] text-[#C9A77E]">·</span>
              <span className="font-serif italic text-[11px] text-[#8C7667] truncate">
                Beauty Beyond Imperfection
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
