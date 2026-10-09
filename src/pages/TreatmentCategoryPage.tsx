/**
 * Dynamic Treatment Category Page Placeholder
 * Elite Aesthetics Cebu
 *
 * Handles /treatments/:slug
 */

import React from 'react';
import { SubpageHero } from '../components/SubpageHero';
import { InternalCTA } from '../components/InternalCTA';
import { VisualAsset } from '../components/VisualAsset';
import { getCategoryBySlug } from '../data/treatmentsData';
import { getBreadcrumbsForPath } from '../data/navigationData';
import { NotFoundPage } from './NotFoundPage';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from '../router/Router';
import { FacialsSkinPage } from './FacialsSkinPage';
import { LaserAdvancedPage } from './LaserAdvancedPage';
import { InjectablesPage } from './InjectablesPage';
import { BodySculptingPage } from './BodySculptingPage';
import { WellnessIvPage } from './WellnessIvPage';
import { HairRestorationPage } from './HairRestorationPage';
import { MedicalWeightMgmtPage } from './MedicalWeightMgmtPage';
import { MassageRelaxationPage } from './MassageRelaxationPage';

interface TreatmentCategoryPageProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const TreatmentCategoryPage: React.FC<TreatmentCategoryPageProps> = ({ onOpenBooking }) => {
  const { pathname, params, navigate } = useRouter();
  const slug = params.slug || pathname.replace('/treatments/', '').split('/')[0];

  // Master Category Page Template implementation for facials-skin
  if (slug === 'facials-skin') {
    return <FacialsSkinPage onOpenBooking={onOpenBooking} />;
  }

  // Master Category Page Template implementation for laser-advanced
  if (slug === 'laser-advanced') {
    return <LaserAdvancedPage onOpenBooking={onOpenBooking} />;
  }

  // Master Category Page Template implementation for injectables
  if (slug === 'injectables') {
    return <InjectablesPage onOpenBooking={onOpenBooking} />;
  }

  // Master Category Page Template implementation for body-sculpting
  if (slug === 'body-sculpting') {
    return <BodySculptingPage onOpenBooking={onOpenBooking} />;
  }

  // Master Category Page Template implementation for wellness-iv
  if (slug === 'wellness-iv') {
    return <WellnessIvPage onOpenBooking={onOpenBooking} />;
  }

  // Master Category Page Template implementation for hair-restoration
  if (slug === 'hair-restoration') {
    return <HairRestorationPage onOpenBooking={onOpenBooking} />;
  }

  // Master Category Page Template implementation for medical-weight-mgmt
  if (slug === 'medical-weight-mgmt') {
    return <MedicalWeightMgmtPage onOpenBooking={onOpenBooking} />;
  }

  // Master Category Page Template implementation for massage-relaxation
  if (slug === 'massage-relaxation') {
    return <MassageRelaxationPage onOpenBooking={onOpenBooking} />;
  }

  const category = getCategoryBySlug(slug);

  if (!category) {
    return <NotFoundPage onOpenBooking={() => onOpenBooking()} />;
  }

  const breadcrumbs = getBreadcrumbsForPath(pathname);

  return (
    <div className="bg-[#FAF7F2]">
      {/* Subpage Hero */}
      <SubpageHero
        eyebrow={`Category: ${category.badge}`}
        title={category.name}
        supportingText={category.shortDescription}
        breadcrumbs={breadcrumbs}
        imageSlot={category.heroAssetKey as any}
        imageAlt={`${category.name} at Elite Aesthetics Cebu`}
        primaryCtaLabel="BOOK A CONSULTATION"
        onPrimaryCta={() => onOpenBooking(category.name)}
        secondaryCtaLabel="ALL TREATMENTS"
        onSecondaryCta={() => navigate('/treatments')}
      />

      {/* Category Overview & Protocols Scaffold */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Clinical Overview */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold block mb-2">
              Clinical Approach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1815] font-light mb-5">
              Personalized {category.name} Protocols
            </h2>
            <p className="text-sm sm:text-base text-[#52453D] leading-relaxed mb-6">
              {category.clinicalOverview}
            </p>

            <div className="p-5 bg-white border border-[#E7DFD3] luxury-card-shadow mb-8">
              <h3 className="font-serif text-lg text-[#1D1815] font-medium mb-3">
                Key Protocol Focus Areas
              </h3>
              <div className="space-y-2.5 text-xs text-[#3C332D]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                  <span>Personalized consultation and skin/body assessment prior to treatment.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                  <span>Care calibrated to support natural facial kinetics and personal comfort.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                  <span>Comprehensive post-procedure guidance and restorative support.</span>
                </div>
              </div>
            </div>

            {/* Treatment Items in this Category */}
            <div>
              <h3 className="font-serif text-2xl text-[#1D1815] font-medium mb-4">
                Available Protocols & Consultations
              </h3>
              <div className="space-y-4">
                {category.treatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className="p-5 bg-white border border-[#E7DFD3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-serif text-lg text-[#1D1815] font-medium">
                        {treatment.name}
                      </h4>
                      <p className="text-xs text-[#685B52] mt-0.5">{treatment.shortDescription}</p>
                      {treatment.verificationStatus === 'client-verification-required' && (
                        <span className="text-[10px] text-[#8C7667] italic block mt-1">
                          [Detailed protocol parameters subject to consultation verification]
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(treatment.name)}
                      className="shrink-0 text-xs font-semibold uppercase tracking-wider px-4 py-2 bg-[#241D18] hover:bg-[#9E7A42] text-[#FAF7F2] transition-colors focus:outline-none"
                    >
                      {treatment.bookingLabel}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Private Suite & Location Snapshot */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-white border border-[#E7DFD3] luxury-card-shadow">
              <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-2">
                Consultation Environment
              </h3>
              <p className="text-xs text-[#685B52] leading-relaxed mb-4">
                All {category.name.toLowerCase()} sessions take place in dedicated, acoustically quiet suites at The Ridges Commercial Center.
              </p>

              <div className="aspect-[4/3] w-full overflow-hidden border border-[#E7DFD3] mb-4 bg-[#FAF7F2]">
                <VisualAsset
                  type="clinic-suite"
                  alt={`Private Treatment Suite for ${category.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(category.name)}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
              >
                REQUEST CONSULTATION FOR {category.name.toUpperCase()}
              </button>
            </div>
          </div>
        </div>

        {/* Blueprint Placeholder Callout */}
        <div className="p-6 bg-[#FAF7F2] border border-[#E7DFD3] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#8C7667]">
            <strong className="text-[#1D1815]">Architectural Blueprint Notice:</strong> Complete clinical protocol sheets, session frequencies, and contraindication FAQs will be populated in subsequent prompt phases following client clinical sign-off.
          </p>
        </div>
      </section>

      {/* Global Internal CTA */}
      <InternalCTA
        title="Schedule Your"
        italicWord="Consultation"
        subtitle={`Personalized ${category.name} at The Ridges`}
        primaryLabel="BOOK A CONSULTATION"
        onPrimaryClick={() => onOpenBooking(category.name)}
        secondaryLabel="ALL TREATMENTS"
        secondaryPath="/treatments"
      />
    </div>
  );
};
