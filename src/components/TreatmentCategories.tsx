import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TREATMENT_CATEGORIES, TreatmentCategory } from '../data/clinicData';
import { VisualAsset } from './VisualAsset';

interface TreatmentCategoriesProps {
  onSelectCategory: (category: TreatmentCategory) => void;
  onOpenBookingForCategory: (categoryName: string) => void;
}

export const TreatmentCategories: React.FC<TreatmentCategoriesProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="treatments" className="py-16 md:py-24 bg-[#F5F0EB]/60 border-b border-[#E7DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-medium mb-3">
            <span>Clinical Offerings</span>
            <span aria-hidden="true">·</span>
            <span>Personalized Care</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light tracking-tight mb-4 text-balance">
            Explore Our Treatments
          </h2>
          
          <p className="text-sm sm:text-base text-[#52453D] max-w-lg mx-auto leading-relaxed">
            Discover a curated spectrum of aesthetic, laser, injectable, and wellness protocols calibrated to your personal goals.
          </p>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TREATMENT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="group cursor-pointer flex flex-col bg-white border border-[#E7DFD3] luxury-card-shadow hover:luxury-card-shadow-hover hover:border-[#C9A77E] transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Visual Header */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                <VisualAsset
                  type={category.id as any}
                  alt={`Elite Aesthetics - ${category.name}`}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle category index kicker */}
                <div className="absolute top-3 left-3 bg-[#1D1815]/80 backdrop-blur-sm px-2.5 py-1 border border-[#C9A77E]/30">
                  <span className="text-[10px] uppercase tracking-widest text-[#E8D8C3] font-medium">
                    {category.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1D1815] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-[#9E7A42]" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2 group-hover:text-[#9E7A42] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#52453D] leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Clean unboxed popular treatments */}
                <div className="pt-3 border-t border-[#E7DFD3]/60 flex items-center justify-between gap-2 text-xs min-w-0">
                  <span className="text-[11px] text-[#8C7667] truncate min-w-0">
                    {category.popularTreatments[0]} · {category.popularTreatments[1]}
                  </span>
                  <span className="font-semibold uppercase tracking-wider text-[11px] text-[#9E7A42] group-hover:text-[#1D1815] transition-colors whitespace-nowrap shrink-0">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
