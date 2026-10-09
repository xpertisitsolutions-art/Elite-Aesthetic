import React from 'react';
import { X, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { TeamMember, TEAM_CATEGORIES } from '../../data/teamData';
import { ModalOverlay } from '../ui/ModalOverlay';
import { VisualAsset } from '../VisualAsset';

interface TeamProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember | null;
  onOpenBooking: (treatmentName?: string) => void;
}

export const TeamProfileModal: React.FC<TeamProfileModalProps> = ({
  isOpen,
  onClose,
  member,
  onOpenBooking,
}) => {
  if (!isOpen || !member) return null;

  const categoryDef = TEAM_CATEGORIES[member.category];

  const handleBook = () => {
    onClose();
    onOpenBooking(`Consultation with Clinic`);
  };

  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy="team-profile-modal-title"
      maxWidthClass="max-w-2xl"
    >
      {/* Top Header Ribbon */}
      <div className="bg-[#241D18] text-[#FAF7F2] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#B89358]/40 shrink-0">
        <div className="min-w-0 flex-1 mr-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#C9A77E] font-medium block truncate">
            {categoryDef.label} · Elite Aesthetics Cebu
          </span>
          <h2
            id="team-profile-modal-title"
            className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium truncate sm:whitespace-normal"
          >
            {member.name}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 text-[#E8D8C3] hover:text-white rounded-xs hover:bg-[#3C332D] transition-colors focus:outline-none shrink-0 cursor-pointer"
          aria-label="Close team profile modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Modal Body */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto flex-1 text-left">
        {/* Profile Intro Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
          {/* Portrait Column (5 cols) */}
          <div className="sm:col-span-5">
            <div className="aspect-[3/4] w-full overflow-hidden bg-[#FAF7F2] border border-[#E7DFD3] luxury-card-shadow">
              <VisualAsset
                type={member.photoAssetKey as any}
                alt={`${member.displayName} at Elite Aesthetics Cebu`}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-2 text-center">
              <span className="text-[10px] uppercase tracking-wider text-[#8C7667] font-mono">
                Status: Details Pending
              </span>
            </div>
          </div>

          {/* Details Column (7 cols) */}
          <div className="sm:col-span-7 space-y-3">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-1">
                {categoryDef.eyebrow}
              </span>
              <h3 className="font-serif text-2xl text-[#1D1815] font-light">
                {member.name}
              </h3>
              <p className="text-xs font-medium text-[#736055] tracking-wide mt-0.5">
                {member.role}
              </p>
            </div>

            {/* Verification-Safe Explanatory Text */}
            <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed">
              Professional profile information is currently being confirmed with Elite Aesthetics Cebu. Additional background, credentials, and professional details will be published once officially confirmed.
            </p>

            {/* Governance Safety Notice */}
            <div className="p-3.5 bg-[#FAF7F2] border border-[#E7DFD3] text-xs text-[#685B52] space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1D1815]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9E7A42]" />
                <span>Profile Details To Be Confirmed</span>
              </div>
              <p className="text-[11px] text-[#736055] leading-normal">
                Professional profile details are being confirmed with Elite Aesthetics Cebu and will be published as information becomes available.
              </p>
            </div>
          </div>
        </div>

        {/* Future Verified Details (Only rendered if verified) */}
        {member.verificationStatus === 'verified' && member.responsibilities && member.responsibilities.length > 0 && (
          <div className="pt-4 border-t border-[#E7DFD3]/80">
            <h4 className="font-serif text-base text-[#1D1815] font-medium mb-3">
              Responsibilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#52453D]">
              {member.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 bg-[#FAF7F2] border border-[#E7DFD3]/60">
                  <span className="text-[#9E7A42] font-bold text-xs mt-0.5">•</span>
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clinic Location & Consultation Action */}
        <div className="p-4 bg-[#1D1815] text-[#FAF7F2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A77E] font-medium block">
              The Ridges Commercial Center, Cebu City
            </span>
            <p className="text-xs text-[#E8D8C3] font-serif italic mt-0.5">
              Personalized aesthetic consultations by advance appointment
            </p>
          </div>
          <button
            type="button"
            onClick={handleBook}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1D1815] bg-gradient-to-r from-[#C9A77E] to-[#B89358] hover:from-white hover:to-[#FAF7F2] transition-all cursor-pointer whitespace-nowrap shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#1D1815]" />
            <span>Request a Consultation</span>
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};
