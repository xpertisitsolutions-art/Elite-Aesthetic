import React from 'react';
import { ArrowRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { VisualAsset } from './VisualAsset';

interface DoctorExpertisePreviewProps {
  onMeetDoctors: () => void;
  onOpenBooking: () => void;
}

export const DoctorExpertisePreview: React.FC<DoctorExpertisePreviewProps> = ({
  onMeetDoctors,
  onOpenBooking,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/3] sm:aspect-[4/4] w-full overflow-hidden luxury-card-shadow border border-[#E7DFD3] relative bg-[#FAF7F2]">
                <VisualAsset
                  type="doctor-care"
                  alt="Attentive Clinical Consultation and Patient Care at Elite Aesthetics Cebu"
                  className="w-full h-full object-cover object-center"
                />

                {/* Corner detail tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-4 border border-[#E7DFD3]">
                  <p className="text-[10px] uppercase tracking-widest text-[#9E7A42] font-semibold">
                    Clinical Standards
                  </p>
                  <p className="font-serif text-sm text-[#1D1815] italic mt-0.5">
                    Personalized aesthetic consultations tailored to your individual goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (7 cols) */}
          <div className="lg:col-span-7">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
              <span>Personalized Approach</span>
              <span aria-hidden="true">·</span>
              <span>Patient Safety & Care</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light tracking-tight leading-tight mb-6 text-balance">
              Expert Care, <span className="italic font-normal text-[#9E7A42]">Personalized to You</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#52453D] leading-relaxed mb-8">
              <p>
                Aesthetic procedures demand more than artistry; they require a profound understanding of facial anatomy, skin health, and dedicated patient care.
              </p>
              <p>
                At Elite Aesthetics, our care philosophy centers on personalized consultations. We take time to understand your individual goals, providing thoughtful recommendations and treatments designed to enhance your natural confidence.
              </p>
            </div>

            {/* 3 Core Pillars of Care */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white border border-[#E7DFD3]">
                <ShieldCheck className="w-5 h-5 text-[#B89358] mb-2" />
                <h4 className="font-serif text-base text-[#1D1815] font-medium mb-1">Clinical Safety</h4>
                <p className="text-xs text-[#685B52]">Attentive care protocols and modern aesthetic technology.</p>
              </div>

              <div className="p-4 bg-white border border-[#E7DFD3]">
                <HeartHandshake className="w-5 h-5 text-[#B89358] mb-2" />
                <h4 className="font-serif text-base text-[#1D1815] font-medium mb-1">Private Consultations</h4>
                <p className="text-xs text-[#685B52]">Confidential, in-depth evaluation of your aesthetic goals.</p>
              </div>

              <div className="p-4 bg-white border border-[#E7DFD3]">
                <Award className="w-5 h-5 text-[#B89358] mb-2" />
                <h4 className="font-serif text-base text-[#1D1815] font-medium mb-1">Natural Results</h4>
                <p className="text-xs text-[#685B52]">Balancing symmetry without over-treatment or exaggerated change.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onMeetDoctors}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#1D1815] hover:text-[#9E7A42] border border-[#DBC3A3] bg-white transition-colors focus:outline-none"
              >
                Book a Consultation
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
