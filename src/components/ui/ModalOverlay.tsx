import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidthClass?: string;
  ariaLabelledBy?: string;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  isOpen,
  onClose,
  children,
  maxWidthClass = 'max-w-xl',
  ariaLabelledBy,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledBy}
      className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center py-4 px-0 sm:p-6"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        margin: 0,
      }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#14100E]/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Modal Dialog Card — Exact Viewport Symmetrical Centering */}
      <div
        className={`relative ${maxWidthClass} mx-auto my-auto bg-white border border-[#E7DFD3] shadow-2xl z-10 overflow-hidden flex flex-col`}
        style={{
          width: 'calc(100% - 1.5rem)',
          maxHeight: 'calc(100dvh - 2rem)',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : content;
};
