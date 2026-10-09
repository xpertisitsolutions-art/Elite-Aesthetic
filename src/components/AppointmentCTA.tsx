import React from 'react';
import { ArrowRight, Phone, MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentCTAProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({
  onOpenBooking,
  onOpenContact,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#241D18] via-[#2A221C] to-[#1E1714] text-[#FAF7F2] py-20 md:py-28 border-b border-[#B89358]/30">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(184,147,88,0.18),transparent_70%)] pointer-events-none" />

      {/* Decorative hairline frame */}
      <div className="absolute inset-4 sm:inset-8 border border-[#B89358]/20 pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 max-w-full">
          <span className="hidden sm:inline-block w-8 h-[1px] bg-[#C9A77E]/60 shrink-0" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.26em] text-[#C9A77E] font-medium text-center">
            Personalized Aesthetic Care Starts with a Conversation
          </span>
          <span className="hidden sm:inline-block w-8 h-[1px] bg-[#C9A77E]/60 shrink-0" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-light tracking-tight leading-tight mb-6 text-balance">
          Ready to Begin Your <span className="italic font-normal text-[#E8D8C3]">Journey?</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#EBDCC8]/85 max-w-xl mx-auto leading-relaxed mb-10">
          Take the first step toward personalized aesthetic care. Schedule a consultation with our clinic team at The Ridges Commercial Center, Cebu City.
        </p>

        {/* Primary and Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.16em] uppercase text-[#1D1815] bg-gradient-to-r from-[#EBDCC8] via-[#E8D8C3] to-[#DBC3A3] hover:from-[#FAF7F2] hover:to-[#EBDCC8] shadow-lg transition-all duration-300 focus:outline-none"
          >
            <Calendar className="w-4 h-4 text-[#9E7A42]" />
            <span>BOOK A CONSULTATION</span>
            <ArrowRight className="w-4 h-4 text-[#9E7A42]" />
          </button>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-[#FAF7F2] hover:text-[#E8D8C3] border border-[#C9A77E]/50 hover:border-[#E8D8C3] bg-[#241D18]/50 hover:bg-[#241D18] transition-colors focus:outline-none"
          >
            <MessageSquare className="w-4 h-4 text-[#C9A77E]" />
            <span>CONTACT ELITE AESTHETICS</span>
          </button>
        </div>

        {/* Direct Phone Assistance */}
        <div className="inline-flex items-center gap-3 text-xs text-[#C9A77E]">
          <Phone className="w-3.5 h-3.5" />
          <span>Prefer to speak directly? Call us at</span>
          <a
            href="tel:+639567835959"
            className="font-medium text-white hover:text-[#C9A77E] underline underline-offset-4 transition-colors"
          >
            {CLINIC_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
