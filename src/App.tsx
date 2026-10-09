/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { AppShell } from './components/AppShell';

// Homepage Components (Locked from Prompt #1.11)
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { TreatmentCategories } from './components/TreatmentCategories';
import { WhyEliteAesthetics } from './components/WhyEliteAesthetics';
import { FeaturedTreatments } from './components/FeaturedTreatments';
import { RealResultsPreview } from './components/RealResultsPreview';
import { DoctorExpertisePreview } from './components/DoctorExpertisePreview';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { AppointmentCTA } from './components/AppointmentCTA';
import { LocationContactPreview } from './components/LocationContactPreview';

// Subpage Route Components (Prompt #3 Foundation)
import { AboutPage } from './pages/AboutPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { TreatmentCategoryPage } from './pages/TreatmentCategoryPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { ResultsPage } from './pages/ResultsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { BookConsultationPage } from './pages/BookConsultationPage';
import { ClientExperiencesPage } from './pages/ClientExperiencesPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Shared Modals & Data
import { AppointmentModal } from './components/AppointmentModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { DoctorModal } from './components/DoctorModal';
import { PromotionsModal } from './components/PromotionsModal';
import { FaqModal } from './components/FaqModal';
import { ResultsGalleryModal } from './components/ResultsGalleryModal';
import { ChatLauncher } from './components/chat/ChatLauncher';
import { FeaturedTreatment, TreatmentCategory } from './data/clinicData';

function AppContent() {
  const { pathname, navigate } = useRouter();

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

  // Route selector
  const renderCurrentRoute = () => {
    const normalized = pathname.replace(/\/+$/, '') || '/';

    if (normalized === '/') {
      return (
        <>
          {/* Hero Section */}
          <Hero
            onOpenBooking={() => handleOpenBooking()}
            onExploreTreatments={() => navigate('/treatments')}
          />

          {/* Introduction Section ("Glow Into Your Best Self") */}
          <IntroductionSection
            onDiscover={() => navigate('/treatments')}
            onOpenBooking={() => handleOpenBooking('Physician Consultation')}
          />

          {/* Treatment Categories (8 Categories) */}
          <TreatmentCategories
            onSelectCategory={handleSelectCategory}
            onOpenBookingForCategory={(categoryName) => handleOpenBooking(categoryName)}
          />

          {/* Why Elite Aesthetics (4 Pillars) */}
          <WhyEliteAesthetics />

          {/* Featured Treatments (Hydrafacial, CO₂ Laser, Botox, Fillers, Emsculpt, PRP) */}
          <FeaturedTreatments
            onLearnMore={handleLearnMoreTreatment}
            onBookTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
          />

          {/* Real Results Preview */}
          <RealResultsPreview
            onViewResults={() => setResultsModalOpen(true)}
            onOpenBooking={() => handleOpenBooking('Skin Assessment & Treatment Plan')}
          />

          {/* Doctor / Expertise Preview */}
          <DoctorExpertisePreview
            onMeetDoctors={() => setDoctorModalOpen(true)}
            onOpenBooking={() => handleOpenBooking('Physician Consultation')}
          />

          {/* Client Experiences / Testimonials Section */}
          <TestimonialsSection onOpenBooking={handleOpenBooking} />

          {/* Appointment CTA */}
          <AppointmentCTA
            onOpenBooking={() => handleOpenBooking()}
            onOpenContact={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Location / Contact Preview */}
          <LocationContactPreview onOpenBooking={() => handleOpenBooking()} />
        </>
      );
    }

    if (normalized === '/about' || normalized === '/team') {
      return <AboutPage onOpenBooking={() => handleOpenBooking('Physician Consultation')} />;
    }

    if (normalized === '/treatments') {
      return (
        <TreatmentsPage
          onOpenBooking={handleOpenBooking}
          onLearnMoreTreatment={handleLearnMoreTreatment}
        />
      );
    }

    if (normalized.startsWith('/treatments/')) {
      return <TreatmentCategoryPage onOpenBooking={handleOpenBooking} />;
    }

    if (normalized === '/promotions') {
      return <PromotionsPage onOpenBooking={handleOpenBooking} />;
    }

    if (normalized === '/results') {
      return <ResultsPage onOpenBooking={handleOpenBooking} />;
    }

    if (normalized === '/faq') {
      return <FaqPage onOpenBooking={handleOpenBooking} />;
    }

    if (normalized === '/client-experiences') {
      return <ClientExperiencesPage onOpenBooking={handleOpenBooking} />;
    }

    if (normalized === '/contact') {
      return <ContactPage onOpenBooking={handleOpenBooking} />;
    }

    if (normalized === '/book-consultation') {
      return <BookConsultationPage onOpenBookingModal={handleOpenBooking} />;
    }

    return <NotFoundPage onOpenBooking={() => handleOpenBooking()} />;
  };

  return (
    <AppShell
      onOpenBooking={handleOpenBooking}
      onOpenPromotionModal={() => setPromotionsModalOpen(true)}
      onOpenFaqModal={() => setFaqModalOpen(true)}
    >
      {renderCurrentRoute()}

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
