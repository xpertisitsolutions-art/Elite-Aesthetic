import React from 'react';
import { ArrowRight, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { VisualAsset } from './VisualAsset';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  return (
    <section id="top" className="relative overflow-hidden bg-[#FAF7F2] pt-6 pb-16 md:pt-10 md:pb-24 border-b border-[#E7DFD3]/70">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-0 sm:right-1/4 w-48 sm:w-96 h-48 sm:h-96 max-w-full bg-[#F3EDE4] rounded-full blur-2xl sm:blur-3xl -z-10 pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 max-w-full bg-[#EBDCC8]/30 rounded-full blur-2xl sm:blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed location & clinic trust metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E7A42] font-medium mb-5">
              <span>The Ridges</span>
              <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              <span>Cebu City</span>
              <span aria-hidden="true" className="text-[#C9A77E]">·</span>
              <span>Aesthetic & Wellness Clinic</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1D1815] font-light leading-[1.12] tracking-tight mb-4 text-balance">
              Beauty Beyond <span className="italic font-normal text-[#9E7A42]">Imperfection</span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-sm sm:text-base font-medium uppercase tracking-[0.18em] text-[#7E5F32] mb-5">
              {CLINIC_INFO.headlineSupporting}
            </p>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#3C332D]/90 font-normal leading-relaxed max-w-xl mb-8">
              {CLINIC_INFO.heroSupportingCopy}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#B89358]"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4 text-[#E8D8C3] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#29221E] hover:text-[#9E7A42] border border-[#DBC3A3] hover:border-[#9E7A42] bg-white/60 hover:bg-white transition-all duration-300 focus:outline-none"
              >
                <span>EXPLORE TREATMENTS</span>
              </button>
            </div>

            {/* Direct Phone Option */}
            <div className="flex items-center gap-2 text-xs text-[#685B52] mb-8">
              <span>Direct Inquiries:</span>
              <a
                href="tel:+639567835959"
                className="font-medium text-[#9E7A42] hover:text-[#1D1815] transition-colors underline underline-offset-2"
              >
                {CLINIC_INFO.phone}
              </a>
            </div>

            {/* Trust and Location Markers (Clean, unboxed text per constitution) */}
            <div className="pt-6 border-t border-[#E7DFD3]/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3C332D]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1815]">The Ridges Commercial Center</p>
                  <p className="text-[#685B52]">F. Cabahug St, Kasambagan, Cebu City</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1815]">Personalized Consultation</p>
                  <p className="text-[#685B52]">Care and treatment recommendations tailored to your individual goals</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Photographic Visual Asset (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Refined Gold Double-Frame Offset */}
              <div className="absolute -inset-2 border border-[#C9A77E]/30 rounded-none -z-10 translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
              
              {/* Main Visual Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden luxury-card-shadow border border-[#E7DFD3] bg-[#FAF7F2]">
                <VisualAsset
                  type="hero"
                  alt="Elite Aesthetics Cebu Luxury Clinic Reception and Interior at The Ridges Commercial Center"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle corner badge for real clinic branding */}
                <div className="absolute top-4 left-4 z-20 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-2 border border-[#B89358]/40 text-left shadow-sm">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block">
                    Elite Aesthetics Cebu
                  </span>
                  <span className="text-[11px] text-[#241D18] font-serif italic block">
                    The Ridges Commercial Center
                  </span>
                </div>
              </div>

              {/* Factual Evergreen Location Statement */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#685B52] px-1">
                <span className="flex items-center gap-1.5 min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-[#B89358] shrink-0" />
                  <span className="truncate">The Ridges Commercial Center, Kasambagan</span>
                </span>
                <span className="font-medium text-[#1D1815] shrink-0">Cebu City, Philippines</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
