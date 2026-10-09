import React from 'react';
import { createPortal } from 'react-dom';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenBooking,
  onOpenContact,
}) => {
  const content = (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1D1815]/95 backdrop-blur-md border-t border-[#B89358]/40 shadow-2xl"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        margin: 0,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-stretch h-14 w-full divide-x divide-[#3C332D]">
        {/* CALL */}
        <a
          href="tel:+639567835959"
          className="flex-1 min-w-0 flex flex-col items-center justify-center text-[#E8D8C3] hover:text-white transition-colors py-1 px-1 focus:outline-none"
          aria-label="Call Elite Aesthetics Clinic at 0956 783 5959"
        >
          <Phone className="w-4 h-4 text-[#C9A77E] mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-wider uppercase truncate">CALL</span>
        </a>

        {/* CONTACT */}
        <button
          type="button"
          onClick={onOpenContact}
          className="flex-1 min-w-0 flex flex-col items-center justify-center text-[#E8D8C3] hover:text-white transition-colors py-1 px-1 focus:outline-none cursor-pointer"
          aria-label="Contact the Clinic"
        >
          <MessageSquare className="w-4 h-4 text-[#C9A77E] mb-0.5 shrink-0" />
          <span className="text-[10px] font-semibold tracking-wider uppercase truncate">CONTACT</span>
        </button>

        {/* CONSULT */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 min-w-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#9E7A42] to-[#B89358] text-[#FAF7F2] font-semibold hover:brightness-110 transition-all py-1 px-1 focus:outline-none cursor-pointer"
          aria-label="Request a Consultation"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5 shrink-0" />
          <span className="text-[10px] font-bold tracking-wider uppercase truncate">CONSULT</span>
        </button>
      </div>
    </aside>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : content;
};
