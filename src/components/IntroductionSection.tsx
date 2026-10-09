import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VisualAsset } from './VisualAsset';

interface IntroductionSectionProps {
  onDiscover: () => void;
  onOpenBooking: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  onDiscover,
  onOpenBooking,
}) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD3]/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Real Clinic & Team Visual (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative pb-4 sm:pb-6 pr-2 sm:pr-4">
              <div className="aspect-[4/3] w-full overflow-hidden luxury-card-shadow border border-[#E7DFD3] relative bg-[#FAF7F2]">
                <VisualAsset
                  type="clinic-suite"
                  alt="Elite Aesthetics Cebu Private Treatment Suite at The Ridges Commercial Center"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-md px-2.5 py-1 border border-[#B89358]/30 text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  Treatment Suite
                </div>
              </div>

              {/* Real Team Inset Photo */}
              <div className="absolute -bottom-2 right-0 sm:-bottom-4 sm:-right-2 w-32 sm:w-48 aspect-[4/3] border-2 border-white luxury-card-shadow overflow-hidden bg-[#FAF7F2]">
                <VisualAsset
                  type="welcome-team"
                  alt="Elite Aesthetics Cebu Clinical Team and Specialists"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-1 inset-x-1 bg-[#FAF7F2]/95 backdrop-blur-xs py-0.5 px-1 text-center border border-[#B89358]/30">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold block">
                    Our Clinic Team
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Human & Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#9E7A42] font-semibold mb-3">
              <span>The Ridges · Kasambagan</span>
              <span aria-hidden="true">·</span>
              <span>Cebu Aesthetic Clinic</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight mb-4 text-balance">
              Welcome to <span className="italic font-normal text-[#9E7A42]">Elite Aesthetics</span>
            </h2>

            <p className="text-base sm:text-lg text-[#7E5F32] font-medium mb-6">
              A refined space where beauty, wellness and personalized aesthetic care come together.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#3C332D]/90 leading-relaxed mb-8">
              <p>
                At Elite Aesthetics, we believe beauty is an authentic expression of personal confidence, health, and vitality. Located at The Ridges Commercial Center in Kasambagan, Cebu City, our clinic offers a welcoming sanctuary where modern aesthetic treatments meet attentive, individualized patient care.
              </p>
              <p>
                Every treatment journey begins with a personalized consultation, ensuring your plan is comfortable, gentle, and specifically tailored to celebrate your natural features.
              </p>
            </div>

            {/* Clean feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-[#29221E]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>Personalized aesthetic consultations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>Modern aesthetic technology</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>Private, tranquil treatment environment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0" />
                <span>Custom plans for skin, face & body</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscover}
                className="group inline-flex items-center gap-2.5 px-6 py-3 text-xs font-semibold tracking-[0.14em] uppercase text-[#1D1815] bg-white border border-[#DBC3A3] hover:border-[#9E7A42] hover:text-[#9E7A42] transition-colors shadow-sm focus:outline-none"
              >
                <span>EXPLORE TREATMENTS</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B89358] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#9E7A42] hover:text-[#1D1815] transition-colors py-2 px-1 focus:outline-none"
              >
                <span>Book a Consultation →</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
