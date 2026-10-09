import React from 'react';
import { X, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { FeaturedTreatment, TreatmentCategory } from '../data/clinicData';
import { VisualAsset } from './VisualAsset';
import { ModalOverlay } from './ui/ModalOverlay';

interface TreatmentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment?: FeaturedTreatment | null;
  category?: TreatmentCategory | null;
  onBookTreatment: (name: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  isOpen,
  onClose,
  treatment,
  category,
  onBookTreatment,
}) => {
  if (!isOpen || (!treatment && !category)) return null;

  const isIndividualTreatment = Boolean(treatment);
  const title = treatment ? treatment.name : category?.name || '';
  const subtitle = treatment ? treatment.category : category?.badge || 'Clinical Offering';
  const description = treatment ? treatment.description : category?.description || '';

  const handleBook = () => {
    onClose();
    onBookTreatment(title);
  };

  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy="treatment-detail-title"
      maxWidthClass="max-w-2xl"
    >
      {/* Top Header */}
      <div className="bg-[#241D18] text-[#FAF7F2] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#B89358]/40 shrink-0">
        <div className="min-w-0 flex-1 mr-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#C9A77E] font-medium block truncate">
            {subtitle}
          </span>
          <h3 id="treatment-detail-title" className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium truncate sm:whitespace-normal">
            {title}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[#E8D8C3] hover:text-white rounded-sm hover:bg-[#3C332D] transition-colors focus:outline-none shrink-0 cursor-pointer"
          aria-label="Close treatment details"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Modal Body */}
      <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
        {/* Visual Banner */}
        <div className="relative aspect-[16/8] w-full overflow-hidden mb-6 bg-[#FAF7F2] border border-[#E7DFD3]">
          <VisualAsset
            type={treatment ? (treatment.id as any) : (category?.id as any)}
            alt={title}
            className="w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#9E7A42] font-semibold mb-2">
              Overview & Methodology
            </h4>
            <p className="text-sm text-[#3C332D] leading-relaxed">
              {description}
            </p>
          </div>

          {isIndividualTreatment && treatment && (
            <>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#9E7A42] font-semibold mb-3">
                  Key Aesthetic Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {treatment.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#29221E] bg-[#FAF7F2] p-2.5 border border-[#E7DFD3]">
                      <Check className="w-3.5 h-3.5 text-[#B89358] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#FAF7F2] p-3.5 border border-[#E7DFD3]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7667] block mb-1">
                    Session Duration
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1D1815]">
                    <Clock className="w-3.5 h-3.5 text-[#B89358]" />
                    <span>{treatment.duration}</span>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-3.5 border border-[#E7DFD3]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8C7667] block mb-1">
                    Recommended Focus
                  </span>
                  <p className="text-xs font-medium text-[#1D1815]">{treatment.recommendedFor}</p>
                </div>
              </div>
            </>
          )}

          {!isIndividualTreatment && category && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#9E7A42] font-semibold mb-3">
                Signature Treatments in this Category
              </h4>
              <div className="space-y-2">
                {category.popularTreatments.map((tName, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#FAF7F2] border border-[#E7DFD3] text-xs">
                    <span className="font-medium text-[#1D1815] min-w-0">{tName}</span>
                    <button
                      onClick={() => {
                        onClose();
                        onBookTreatment(tName);
                      }}
                      className="text-[11px] font-semibold uppercase text-[#9E7A42] hover:text-[#1D1815] transition-colors self-start sm:self-auto shrink-0 cursor-pointer"
                    >
                      Select & Book →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Note & Action */}
          <div className="pt-4 border-t border-[#E7DFD3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <span className="text-[11px] text-[#8C7667] text-center sm:text-left">
              Personalized aesthetic consultation prior to treatment.
            </span>
            
            <button
              onClick={handleBook}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none cursor-pointer shrink-0"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8D8C3]" />
            </button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};
