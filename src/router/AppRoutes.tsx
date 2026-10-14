import React from 'react';
import { useRouter } from './Router';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { TreatmentsPage } from '../pages/TreatmentsPage';
import { TreatmentCategoryPage } from '../pages/TreatmentCategoryPage';
import { PromotionsPage } from '../pages/PromotionsPage';
import { ResultsPage } from '../pages/ResultsPage';
import { FaqPage } from '../pages/FaqPage';
import { ContactPage } from '../pages/ContactPage';
import { BookConsultationPage } from '../pages/BookConsultationPage';
import { ClientExperiencesPage } from '../pages/ClientExperiencesPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import type { FeaturedTreatment, TreatmentCategory } from '../data/clinicData';

interface AppRoutesProps {
  onOpenBooking: (treatmentName?: string) => void;
  onSelectCategory: (category: TreatmentCategory) => void;
  onLearnMoreTreatment: (treatment: FeaturedTreatment) => void;
  onViewResults: () => void;
  onMeetDoctors: () => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({
  onOpenBooking,
  onSelectCategory,
  onLearnMoreTreatment,
  onViewResults,
  onMeetDoctors,
}) => {
  const { pathname } = useRouter();
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/') {
    return (
      <HomePage
        onOpenBooking={onOpenBooking}
        onSelectCategory={onSelectCategory}
        onLearnMoreTreatment={onLearnMoreTreatment}
        onViewResults={onViewResults}
        onMeetDoctors={onMeetDoctors}
      />
    );
  }

  if (path === '/about' || path === '/team') {
    return <AboutPage onOpenBooking={() => onOpenBooking('Physician Consultation')} />;
  }

  if (path === '/treatments') {
    return (
      <TreatmentsPage
        onOpenBooking={onOpenBooking}
        onLearnMoreTreatment={onLearnMoreTreatment}
      />
    );
  }

  if (path.startsWith('/treatments/')) {
    return <TreatmentCategoryPage onOpenBooking={onOpenBooking} />;
  }

  if (path === '/promotions') return <PromotionsPage onOpenBooking={onOpenBooking} />;
  if (path === '/results') return <ResultsPage onOpenBooking={onOpenBooking} />;
  if (path === '/faq') return <FaqPage onOpenBooking={onOpenBooking} />;
  if (path === '/client-experiences') return <ClientExperiencesPage onOpenBooking={onOpenBooking} />;
  if (path === '/contact') return <ContactPage onOpenBooking={onOpenBooking} />;
  if (path === '/book-consultation') return <BookConsultationPage onOpenBookingModal={onOpenBooking} />;

  return <NotFoundPage onOpenBooking={() => onOpenBooking()} />;
};
