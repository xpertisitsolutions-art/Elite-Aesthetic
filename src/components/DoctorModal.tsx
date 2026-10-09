import React from 'react';
import { X, ShieldCheck, Stethoscope, HeartHandshake, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ModalOverlay } from './ui/ModalOverlay';

interface DoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy="doctor-modal-title"
      maxWidthClass="max-w-xl"
    >
      {/* Header */}
      <div className="bg-[#241D18] text-[#FAF7F2] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#B89358]/40 shrink-0">
        <div className="min-w-0 flex-1 mr-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#C9A77E] font-medium block truncate">
            Clinical Consultations
          </span>
          <h3 id="doctor-modal-title" className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium truncate sm:whitespace-normal">
            Physician Consultation & Guidance
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[#E8D8C3] hover:text-white rounded-sm hover:bg-[#3C332D] transition-colors focus:outline-none shrink-0 cursor-pointer"
          aria-label="Close doctors modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6 text-left overflow-y-auto flex-1">
        <div className="space-y-3 text-sm text-[#3C332D] leading-relaxed">
          <p>
            At Elite Aesthetics Cebu, our clinical standards are rooted in medical aesthetic rigor. Every client journey begins with professional clinical oversight to assess individual skin anatomy, facial structure, and treatment suitability.
          </p>
          <p>
            We prioritize patient safety, sterile clinic protocols, and natural balance above fleeting trends.
          </p>
        </div>

        {/* Clean Placeholder Notice */}
        <div className="p-4 bg-[#FAF7F2] border border-[#E7DFD3]">
          <div className="flex items-center gap-2 mb-1.5">
            <Stethoscope className="w-4 h-4 text-[#B89358]" />
            <h4 className="font-serif text-base text-[#1D1815] font-medium">
              Physician Directory & Profiles
            </h4>
          </div>
          <p className="text-xs text-[#685B52] leading-relaxed">
            Official verified physician biographies, aesthetic subspecialties, and clinical credentials are scheduled to be published here as the clinic&apos;s digital directory expands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#29221E]">
          <div className="flex items-start gap-2.5 p-3 bg-white border border-[#E7DFD3]">
            <ShieldCheck className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1D1815]">Safety Protocol</p>
              <p className="text-[#685B52]">Strict clinical sterile standards across all suites.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-white border border-[#E7DFD3]">
            <HeartHandshake className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1D1815]">Private Dialogue</p>
              <p className="text-[#685B52]">Direct evaluation of your concerns and expectations.</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#E7DFD3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#8C7667]">
            Location: The Ridges, Kasambagan, Cebu City
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Consultation</span>
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};
