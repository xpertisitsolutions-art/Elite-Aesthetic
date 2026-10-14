/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RouterProvider } from './router/Router';
import { AppRoutes } from './router/AppRoutes';
import { AppShell } from './components/AppShell';

// Shared Modals & Data
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { DoctorModal } from './components/DoctorModal';
import { PromotionsModal } from './components/PromotionsModal';
import { FaqModal } from './components/FaqModal';
import { ResultsGalleryModal } from './components/ResultsGalleryModal';
import { ChatLauncher } from './components/chat/ChatLauncher';
import type { FeaturedTreatment, TreatmentCategory } from './data/clinicData';

function AppContent() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingTreatment, setSelectedBookingTreatment] = useState<string>('');

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState<FeaturedTreatment | null>(null);
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | null>(null);

  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [promotionsModalOpen, setPromotionsModalOpen] = useState(false);
  const [faqModalOpen, setFaqModalOpen] = useState(false);
  const [resultsModalOpen, setResultsModalOpen] = useState(false);

  // Open booking modal
  const handleOpenBooking = (treatmentName: string = '') => {
    setSelectedBookingTreatment(treatmentName);
    setBookingModalOpen(true);
  };

  // Open category detail
  const handleSelectCategory = (category: TreatmentCategory) => {
    setActiveCategory(category);
    setActiveTreatment(null);
    setDetailModalOpen(true);
  };

  // Open featured treatment detail
  const handleLearnMoreTreatment = (treatment: FeaturedTreatment) => {
    setActiveTreatment(treatment);
    setActiveCategory(null);
    setDetailModalOpen(true);
  };

  return (
    <AppShell
      onOpenBooking={handleOpenBooking}
      onOpenPromotionModal={() => setPromotionsModalOpen(true)}
      onOpenFaqModal={() => setFaqModalOpen(true)}
    >
      <AppRoutes
        onOpenBooking={handleOpenBooking}
        onSelectCategory={handleSelectCategory}
        onLearnMoreTreatment={handleLearnMoreTreatment}
        onViewResults={() => setResultsModalOpen(true)}
        onMeetDoctors={() => setDoctorModalOpen(true)}
      />

      {/* Global Interactive Modals (Accessible Across All Routes) */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedTreatment={selectedBookingTreatment}
      />

      <TreatmentDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        treatment={activeTreatment}
        category={activeCategory}
        onBookTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
      />

      <DoctorModal
        isOpen={doctorModalOpen}
        onClose={() => setDoctorModalOpen(false)}
        onOpenBooking={() => handleOpenBooking('Physician Consultation')}
      />

      <PromotionsModal
        isOpen={promotionsModalOpen}
        onClose={() => setPromotionsModalOpen(false)}
        onOpenBooking={() => handleOpenBooking('Seasonal Promotion')}
      />

      <FaqModal
        isOpen={faqModalOpen}
        onClose={() => setFaqModalOpen(false)}
        onOpenBooking={() => handleOpenBooking('Consultation')}
      />

      <ResultsGalleryModal
        isOpen={resultsModalOpen}
        onClose={() => setResultsModalOpen(false)}
        onOpenBooking={() => handleOpenBooking('Skin Assessment & Treatment Plan')}
      />

      {/* Feature #22: Dormant future chat integration foundation (returns null while disabled) */}
      <ChatLauncher />
    </AppShell>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
