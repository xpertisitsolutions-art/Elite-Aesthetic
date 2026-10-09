/**
 * Global Application Shell
 * Elite Aesthetics Cebu
 *
 * Wraps Header, Page Content, Footer, Persistent Mobile Bar, and Global Modals.
 */

import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomBar } from './MobileBottomBar';
import { useRouter } from '../router/Router';

interface AppShellProps {
  children: ReactNode;
  onOpenBooking: (treatmentName?: string) => void;
  onOpenPromotionModal: () => void;
  onOpenFaqModal: () => void;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  onOpenBooking,
  onOpenPromotionModal,
  onOpenFaqModal,
}) => {
  const { pathname, navigate } = useRouter();

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'top') {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#' + sectionId);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full bg-[#FAF7F2] text-[#2C2420] flex flex-col font-sans selection:bg-[#E8D8C3] selection:text-[#1D1815]">
      {/* Sticky Header */}
      <Header
        onOpenBooking={() => onOpenBooking()}
        onNavigateSection={handleNavigateSection}
        onOpenPromotionModal={onOpenPromotionModal}
        onOpenFaqModal={onOpenFaqModal}
      />

      {/* Main Page Content with bottom clearance for persistent mobile bar */}
      <main className="flex-1 w-full max-w-full pb-14 lg:pb-0">{children}</main>

      {/* Global Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenBooking={() => onOpenBooking()}
        onOpenPromotionModal={onOpenPromotionModal}
        onOpenFaqModal={onOpenFaqModal}
      />

      {/* Persistent Mobile Action Bar */}
      <MobileBottomBar
        onOpenBooking={() => onOpenBooking()}
        onOpenContact={() => navigate('/contact')}
      />
    </div>
  );
};
