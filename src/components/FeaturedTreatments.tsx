import React from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { FEATURED_TREATMENTS, FeaturedTreatment } from '../data/clinicData';
import { VisualAsset } from './VisualAsset';

interface FeaturedTreatmentsProps {
  onLearnMore: (treatment: FeaturedTreatment) => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const FeaturedTreatments: React.FC<FeaturedTreatmentsProps> = ({
  onLearnMore,
  onBookTreatment,
}) => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-medium mb-3">
              <span>Signature Care</span>
              <span aria-hidden="true">·</span>
              <span>Client Favorites</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light tracking-tight text-balance">
              Featured Treatments
            </h2>
            
            <p className="text-sm sm:text-base text-[#52453D] mt-3">
              Recognized aesthetic treatments delivered with personalized attention and clinical care.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-[#8C7667]">
            <span>Personalized consultations available prior to every session</span>
          </div>
        </div>

        {/* 6 Featured Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between group hover:border-[#C9A77E] transition-all duration-300"
            >
              {/* Treatment Visual */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2]">
                <VisualAsset
                  type={treatment.id as any}
                  alt={`Elite Aesthetics - ${treatment.name}`}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-[#1D1815]/85 backdrop-blur-sm px-2.5 py-1 border border-[#C9A77E]/30">
                  <span className="text-[10px] uppercase tracking-wider text-[#E8D8C3] font-medium">
                    {treatment.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2 py-0.5 text-[10px] text-[#3C332D] flex items-center gap-1 border border-[#E7DFD3]">
                  <Clock className="w-3 h-3 text-[#9E7A42]" />
                  <span>{treatment.duration}</span>
                </div>
              </div>

              {/* Treatment Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1D1815] font-medium mb-2 group-hover:text-[#9E7A42] transition-colors">
                    {treatment.name}
                  </h3>
                  
                  <p className="text-xs text-[#52453D] leading-relaxed mb-4 line-clamp-3">
                    {treatment.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-6 text-xs text-[#3C332D]/90">
                    {treatment.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-[#B89358] shrink-0" />
                        <span className="text-[11px]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E7DFD3] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onLearnMore(treatment)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#29221E] hover:text-[#9E7A42] transition-colors flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 text-[#9E7A42]" />
                  </button>

                  <button
                    onClick={() => onBookTreatment(treatment.name)}
                    className="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 bg-[#FAF7F2] hover:bg-[#241D18] hover:text-[#FAF7F2] border border-[#DBC3A3] text-[#241D18] transition-colors focus:outline-none"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
