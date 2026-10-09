import React from 'react';
import { X, Sparkles, ExternalLink, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ModalOverlay } from './ui/ModalOverlay';

interface PromotionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const PromotionsModal: React.FC<PromotionsModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  return (
    <ModalOverlay
      isOpen={isOpen}
      onClose={onClose}
      ariaLabelledBy="promotions-modal-title"
      maxWidthClass="max-w-xl"
    >
      {/* Header */}
      <div className="bg-[#241D18] text-[#FAF7F2] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#B89358]/40 shrink-0">
        <div className="min-w-0 flex-1 mr-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-[#C9A77E] font-medium block truncate">
            Exclusive Packages
          </span>
          <h3 id="promotions-modal-title" className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-medium truncate sm:whitespace-normal">
            Clinic Promotions
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-[#E8D8C3] hover:text-white rounded-sm hover:bg-[#3C332D] transition-colors focus:outline-none shrink-0 cursor-pointer"
          aria-label="Close promotions modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Content Body */}
      <div className="overflow-y-auto flex-1">
        {/* Real Promotional Campaign Banner from 06_Promotions_Campaigns */}
        <div className="relative aspect-[2.26/1] w-full overflow-hidden bg-[#FAF7F2] border-b border-[#E7DFD3]">
          <img
            src="/images/v2/06_Promotions_Campaigns/829191200_122174768456654695_2343900898877753007_n.jpg"
            alt="Elite Aesthetics Cebu Seasonal Privileges and Packages"
            width={960}
            height={424}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 sm:p-6 md:p-8 space-y-6">
          <p className="text-sm text-[#3C332D] leading-relaxed">
            Elite Aesthetics Cebu periodically introduces curated seasonal wellness packages and combination protocols designed to provide holistic care for face, skin, and body.
          </p>

          {/* Featured Campaign Highlights (Authentic Promotional Assets) */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold">
              Featured Campaign Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-[#E7DFD3] bg-[#FAF7F2] overflow-hidden group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/v2/04_Treatment_Promotional/mixed_image_-54.jpg"
                    alt="Body Contouring & Sculpting Campaign"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5">
                  <span className="text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold block">Body Sculpting</span>
                  <p className="text-xs font-serif text-[#1D1815] font-medium mt-0.5 line-clamp-1">Toning & Contouring Privilege</p>
                </div>
              </div>

              <div className="border border-[#E7DFD3] bg-[#FAF7F2] overflow-hidden group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/v2/04_Treatment_Promotional/mixed_image_-16.jpg"
                    alt="Wellness & Radiance Infusion Campaign"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5">
                  <span className="text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold block">Wellness & IV</span>
                  <p className="text-xs font-serif text-[#1D1815] font-medium mt-0.5 line-clamp-1">Radiance Infusion Protocol</p>
                </div>
              </div>

              <div className="border border-[#E7DFD3] bg-[#FAF7F2] overflow-hidden group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src="/images/v2/04_Treatment_Promotional/mixed_image_-45.jpg"
                    alt="Clinical Body Wellness Campaign"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-2.5">
                  <span className="text-[9px] uppercase tracking-wider text-[#9E7A42] font-semibold block">Body Wellness</span>
                  <p className="text-xs font-serif text-[#1D1815] font-medium mt-0.5 line-clamp-1">Lifestyle Contour Package</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAF7F2] border border-[#E7DFD3] space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B89358]" />
              <h4 className="font-serif text-base text-[#1D1815] font-semibold">
                Facebook Community Updates
              </h4>
            </div>
            <p className="text-xs text-[#52453D] leading-relaxed">
              Our official Facebook page shares regular updates on clinic privileges, seasonal skin radiance bundles, and special event announcements.
            </p>
            <div className="pt-2">
              <a
                href={CLINIC_INFO.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9E7A42] hover:text-[#1D1815] transition-colors"
              >
                <span>View Elite Aesthetics on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-[#E7DFD3] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] text-[#8C7667]">
              Inquire about current package rates directly.
            </span>

            <button
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
      </div>
    </ModalOverlay>
  );
};
