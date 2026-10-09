/**
 * Reusable Global Internal CTA Component
 * Elite Aesthetics Cebu
 */

import React from 'react';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/Router';

interface InternalCTAProps {
  title?: string;
  italicWord?: string;
  subtitle?: string;
  supportingText?: string;
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  secondaryLabel?: string;
  secondaryPath?: string;
  onSecondaryClick?: () => void;
  className?: string;
}

export const InternalCTA: React.FC<InternalCTAProps> = ({
  title = 'Ready to Begin Your',
  italicWord = 'Journey?',
  subtitle = 'Personalized Aesthetic Care Starts with a Conversation',
  supportingText = 'Schedule a one-on-one consultation with our clinical team at The Ridges Commercial Center, Cebu City.',
  primaryLabel = 'BOOK A CONSULTATION',
  onPrimaryClick,
  secondaryLabel = 'CONTACT ELITE AESTHETICS',
  secondaryPath = '/contact',
  onSecondaryClick,
  className = '',
}) => {
  const { navigate } = useRouter();

  const handleSecondary = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else if (secondaryPath) {
      navigate(secondaryPath);
    }
  };

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-[#241D18] via-[#2A221C] to-[#1E1714] text-[#FAF7F2] py-16 md:py-24 border-t border-[#B89358]/30 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(184,147,88,0.18),transparent_70%)] pointer-events-none" />

      {/* Decorative hairline frame */}
      <div className="absolute inset-4 sm:inset-8 border border-[#B89358]/20 pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C9A77E]/60" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#C9A77E] font-medium">
              {subtitle}
            </span>
            <span className="w-8 h-[1px] bg-[#C9A77E]/60" />
          </div>
        )}

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2] font-light tracking-tight leading-tight mb-5 text-balance">
          {title} {italicWord && <span className="italic font-normal text-[#E8D8C3]">{italicWord}</span>}
        </h2>

        {supportingText && (
          <p className="text-sm sm:text-base text-[#EBDCC8]/85 max-w-xl mx-auto leading-relaxed mb-8">
            {supportingText}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onPrimaryClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#1D1815] bg-gradient-to-r from-[#EBDCC8] via-[#E8D8C3] to-[#DBC3A3] hover:from-[#FAF7F2] hover:to-[#EBDCC8] shadow-lg transition-all duration-300 focus:outline-none"
          >
            <Calendar className="w-4 h-4 text-[#9E7A42]" />
            <span>{primaryLabel}</span>
            <ArrowRight className="w-4 h-4 text-[#9E7A42]" />
          </button>

          <button
            type="button"
            onClick={handleSecondary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-[#FAF7F2] hover:text-[#E8D8C3] border border-[#C9A77E]/50 hover:border-[#E8D8C3] bg-[#241D18]/50 hover:bg-[#241D18] transition-colors focus:outline-none"
          >
            <MessageSquare className="w-4 h-4 text-[#C9A77E]" />
            <span>{secondaryLabel}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
