import React from 'react';
import { useRouter } from '../router/Router';
import { Hero } from '../components/Hero';
import { IntroductionSection } from '../components/IntroductionSection';
import { TreatmentCategories } from '../components/TreatmentCategories';
import { WhyEliteAesthetics } from '../components/WhyEliteAesthetics';
import { FeaturedTreatments } from '../components/FeaturedTreatments';
import { RealResultsPreview } from '../components/RealResultsPreview';
import { DoctorExpertisePreview } from '../components/DoctorExpertisePreview';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { AppointmentCTA } from '../components/AppointmentCTA';
import { LocationContactPreview } from '../components/LocationContactPreview';
import type { FeaturedTreatment, TreatmentCategory } from '../data/clinicData';

interface HomePageProps {
  onOpenBooking: (treatmentName?: string) => void;
  onSelectCategory: (category: TreatmentCategory) => void;
  onLearnMoreTreatment: (treatment: FeaturedTreatment) => void;
  onViewResults: () => void;
  onMeetDoctors: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onSelectCategory,
  onLearnMoreTreatment,
  onViewResults,
  onMeetDoctors,
}) => {
  const { navigate } = useRouter();

  return (
    <>
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onExploreTreatments={() => navigate('/treatments')}
      />

      <IntroductionSection
        onDiscover={() => navigate('/treatments')}
        onOpenBooking={() => onOpenBooking('Physician Consultation')}
      />

      <TreatmentCategories
        onSelectCategory={onSelectCategory}
        onOpenBookingForCategory={onOpenBooking}
      />

      <WhyEliteAesthetics />

      <FeaturedTreatments
        onLearnMore={onLearnMoreTreatment}
        onBookTreatment={onOpenBooking}
      />

      <RealResultsPreview
        onViewResults={onViewResults}
        onOpenBooking={() => onOpenBooking('Skin Assessment & Treatment Plan')}
      />

      <DoctorExpertisePreview
        onMeetDoctors={onMeetDoctors}
        onOpenBooking={() => onOpenBooking('Physician Consultation')}
      />

      <TestimonialsSection onOpenBooking={onOpenBooking} />

      <AppointmentCTA
        onOpenBooking={() => onOpenBooking()}
        onOpenContact={() => {
          const contactSection = document.getElementById('contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <LocationContactPreview onOpenBooking={() => onOpenBooking()} />
    </>
  );
};
