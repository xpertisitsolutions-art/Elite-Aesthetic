import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { CLINIC_FAQS, CLINIC_INFO } from '../data/clinicData';
import { ModalOverlay } from './ui/ModalOverlay';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy="faq-modal-title"
      maxWidthClass="max-w-xl"
    >
      {/* Header */}
      <div className="bg-[#241D18] text-[#FAF7F2] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#B89358]/40 shrink-0">
        <div className="min-w-0 flex-1 mr-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#C9A77E] font-medium block truncate">
            Patient Guidance
          </span>
          <h3 id="faq-modal-title" className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium truncate sm:whitespace-normal">
            Frequently Asked Questions
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[#E8D8C3] hover:text-white rounded-sm hover:bg-[#3C332D] transition-colors focus:outline-none shrink-0 cursor-pointer"
          aria-label="Close FAQ modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-4 flex-1">
        <p className="text-xs text-[#685B52] leading-relaxed mb-4">
          Answers to common questions about visiting our Cebu City clinic and scheduling personalized aesthetic consultations and treatments.
        </p>

        <div className="space-y-3">
          {CLINIC_FAQS.map((faq, index) => {
            const isExpanded = openIndex === index;
            return (
              <div key={index} className="border border-[#E7DFD3] bg-[#FAF7F2]/60">
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <span className="font-serif text-base text-[#1D1815] font-medium pr-4">
                    {faq.question}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#9E7A42] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8C7667] shrink-0" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#52453D] leading-relaxed border-t border-[#E7DFD3]/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-6 border-t border-[#E7DFD3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="tel:+639567835959"
            className="text-[11px] text-[#8C7667] hover:text-[#9E7A42] transition-colors"
          >
            Have a specific question? Call us at {CLINIC_INFO.phone}
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none cursor-pointer"
          >
            Request a Consultation
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};
