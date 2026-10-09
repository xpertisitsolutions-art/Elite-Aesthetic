import React from 'react';
import { X, Sparkles, ShieldCheck, Info, Calendar } from 'lucide-react';
import { REAL_RESULTS_CASES } from '../data/clinicData';
import { VisualAsset } from './VisualAsset';
import { ModalOverlay } from './ui/ModalOverlay';

interface ResultsGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ResultsGalleryModal: React.FC<ResultsGalleryModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy="results-gallery-title"
      maxWidthClass="max-w-2xl"
    >
      {/* Header */}
      <div className="bg-[#241D18] text-[#FAF7F2] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#B89358]/40 shrink-0">
        <div className="min-w-0 flex-1 mr-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#C9A77E] font-medium block truncate">
            Clinical Transformations
          </span>
          <h3 id="results-gallery-title" className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium truncate sm:whitespace-normal">
            Real Treatment Experiences
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[#E8D8C3] hover:text-white rounded-sm hover:bg-[#3C332D] transition-colors focus:outline-none shrink-0 cursor-pointer"
          aria-label="Close results gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
        <div className="p-4 bg-[#FAF7F2] border border-[#E7DFD3] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#8C7667] shrink-0 mt-0.5" />
          <p className="text-xs text-[#52453D] leading-relaxed">
            <strong>Clinical Integrity Statement:</strong> All aesthetic treatments at Elite Aesthetics Cebu are tailored to individual anatomical features. Images and documentation reflect actual clinical protocol observations without artificial filters. Outcomes vary based on skin type, health history, and care regimen.
          </p>
        </div>

        <div className="space-y-6">
          {REAL_RESULTS_CASES.map((item, index) => (
            <div key={item.id} className="border border-[#E7DFD3] p-4 sm:p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-lg text-[#1D1815] font-medium">
                  0{index + 1}. {item.treatment}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#9E7A42]">
                  Observed Case
                </span>
              </div>

              <div className="aspect-[16/9] w-full bg-[#FAF7F2] overflow-hidden relative mb-4">
                <VisualAsset
                  type={index === 0 ? "hydrafacial" : "patient-treatment"}
                  className="w-full h-full object-cover object-center"
                  alt={`Elite Aesthetics - ${item.treatment}`}
                />
                <div className="absolute top-2.5 left-2.5 bg-[#FAF7F2]/95 backdrop-blur-md px-2 py-0.5 border border-[#B89358]/30 text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold">
                  In-Clinic Treatment Protocol
                </div>
              </div>

              <div className="space-y-1 text-xs text-[#52453D]">
                <p><strong>Clinical Focus:</strong> {item.focus}</p>
                <p className="text-[#8C7667] italic">{item.disclaimer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-[#E7DFD3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#8C7667]">
            Schedule a personalized skin assessment at The Ridges.
          </span>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Request a Consultation</span>
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};
