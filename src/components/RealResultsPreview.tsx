import React, { useState } from 'react';
import { Sparkles, Info, ArrowRight } from 'lucide-react';
import { VisualAsset } from './VisualAsset';

interface RealResultsPreviewProps {
  onViewResults: () => void;
  onOpenBooking: () => void;
}

export const RealResultsPreview: React.FC<RealResultsPreviewProps> = ({
  onViewResults,
  onOpenBooking,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section id="results" className="py-16 md:py-24 bg-[#F5F0EB]/60 border-b border-[#E7DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-medium mb-3">
            <span>Clinical Transformations</span>
            <span aria-hidden="true">·</span>
            <span>Real Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light tracking-tight mb-4 text-balance">
            Real Results
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Explore treatment experiences and results from Elite Aesthetics.
          </p>
        </div>

        {/* Real Treatment Experience Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-xl">
              
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden luxury-card-shadow border border-[#E7DFD3] select-none bg-[#FAF7F2]">
                <VisualAsset
                  type="patient-treatment"
                  alt="Elite Aesthetics Cebu Patient Treatment Experience"
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1.5 border border-[#B89358]/30 shadow-xs">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-semibold block">
                    Clinical Experience
                  </span>
                  <span className="text-[11px] text-[#241D18] font-serif italic block">
                    In-Clinic Treatment Care
                  </span>
                </div>
              </div>

              {/* Verified Clinical Context */}
              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#685B52]">
                <span className="truncate">Authentic In-Clinic Treatment Protocol</span>
                <span className="text-[#9E7A42] font-medium shrink-0">The Ridges Commercial Center</span>
              </div>

            </div>
          </div>

          {/* Right Narrative & Rigor Statement (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white p-6 sm:p-8 border border-[#E7DFD3] luxury-card-shadow">
              
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#B89358]" />
                <h3 className="font-serif text-2xl text-[#1D1815] font-medium">
                  Personalized Transformations
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed mb-6">
                Our approach emphasizes balanced enhancement that honors your natural facial symmetry and skin health. From deep skin texture restoration to contour refinement, each plan is tailored to the individual.
              </p>

              {/* Crucial Ethical / Medical Disclaimer box (Strict adherence to rule) */}
              <div className="p-4 bg-[#FAF7F2] border border-[#E7DFD3] mb-6 flex items-start gap-3">
                <Info className="w-4 h-4 text-[#8C7667] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#685B52] leading-normal">
                  <strong className="text-[#1D1815]">Important Notice:</strong> Individual results vary according to personal physiology, skin condition, lifestyle, and adherence to prescribed care. Treatment options and realistic expectations are evaluated during consultation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onViewResults}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
                >
                  <span>VIEW RESULTS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center px-4 py-3 text-xs font-semibold tracking-wider uppercase text-[#1D1815] hover:text-[#9E7A42] transition-colors focus:outline-none border border-[#DBC3A3]"
                >
                  Book Consultation
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
