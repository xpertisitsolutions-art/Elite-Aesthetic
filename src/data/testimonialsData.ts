/**
 * Centralized Testimonials & Client Experiences Data Architecture
 * Elite Aesthetics Cebu
 *
 * Single source of truth for client experiences, patient feedback,
 * and editorial testimonials.
 *
 * CRITICAL CONTENT GOVERNANCE (Prompt #21 & #21A):
 * - Real testimonials require:
 *     contentStatus !== 'sample'
 *     consentStatus === 'confirmed'
 *     verificationStatus === 'verified'
 *     publicationStatus === 'approved' | 'published'
 *     quote is non-empty
 * - Sample demonstration testimonials are strictly labeled with contentStatus: 'sample'
 *   and NEVER pass the real-publication eligibility predicate.
 * - Sample testimonials are purely fictional demonstrations of the finished UI.
 */

export type TestimonialCategory =
  | 'clinic_experience'
  | 'consultation_experience'
  | 'treatment_experience'
  | 'wellness_experience';

export type TestimonialPublicationStatus =
  | 'draft'
  | 'verification_required'
  | 'approved'
  | 'published'
  | 'archived';

export type TestimonialConsentStatus =
  | 'not_confirmed'
  | 'pending'
  | 'confirmed';

export type TestimonialContentStatus =
  | 'sample'
  | 'approved'
  | 'published';

export type TestimonialAttributionType =
  | 'full_name'
  | 'first_name'
  | 'initials'
  | 'anonymous';

export interface Testimonial {
  id: string;
  quote: string;
  attributionName?: string;
  attributionType?: TestimonialAttributionType;
  category: TestimonialCategory;
  treatmentSlug?: string;
  treatmentName?: string;
  photoAssetKey?: string;
  source?: string;
  consentStatus: TestimonialConsentStatus;
  publicationStatus: TestimonialPublicationStatus;
  verificationStatus: 'pending' | 'verified';
  contentStatus?: TestimonialContentStatus;
  isSample?: boolean;
  contextNote?: string;
  date?: string;
}

export const TESTIMONIAL_CATEGORIES: Record<
  TestimonialCategory,
  { label: string; shortLabel: string; description: string }
> = {
  clinic_experience: {
    label: 'Clinic Experience',
    shortLabel: 'Clinic Care',
    description: 'Patient visits, reception hospitality, and clinic environment at The Ridges.',
  },
  consultation_experience: {
    label: 'Consultation Experience',
    shortLabel: 'Consultation',
    description: 'Physician dialogues, facial assessments, and personalized treatment planning.',
  },
  treatment_experience: {
    label: 'Treatment Care',
    shortLabel: 'Treatments',
    description: 'Procedural comfort, gentle execution, and aesthetic care protocols.',
  },
  wellness_experience: {
    label: 'Wellness & Vitality',
    shortLabel: 'Wellness',
    description: 'Restorative wellness protocols and revitalizing clinic experiences.',
  },
};

/**
 * Production Real Testimonials Dataset
 *
 * STRICT GOVERNANCE RULE:
 * Must remain empty until verified, consented testimonials are officially
 * provided by Elite Aesthetics Cebu.
 */
export const testimonialsData: Testimonial[] = [];

// Backward-compatible alias
export const TESTIMONIALS_DATA = testimonialsData;

/**
 * Sample Demonstration Notice
 */
export const SAMPLE_TESTIMONIALS_NOTICE = {
  badge: 'SAMPLE CONTENT FOR DEMONSTRATION',
  title: 'Demonstration Client Profiles',
  message:
    'Sample client profiles and experiences are shown here to demonstrate the website experience. These will be replaced with genuine client testimonials and approved photographs when provided by Elite Aesthetics Cebu.',
};

/**
 * Demonstration Dataset (Prompt #21A)
 * 6 Fictional adult client experiences with balanced female and male representation.
 * STRICTLY MARKED contentStatus: 'sample' and isSample: true.
 * NEVER passed to real-publication getter.
 */
export const SAMPLE_TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'sample-mia-santos',
    attributionName: 'Mia Santos',
    attributionType: 'full_name',
    category: 'treatment_experience',
    treatmentSlug: 'facials-skin',
    treatmentName: 'Hydrafacial',
    photoAssetKey: 'sample-client-mia-santos',
    quote:
      'I really enjoyed my first visit to Elite Aesthetics. The clinic felt welcoming, and the team took the time to explain what to expect during my Hydrafacial session. I appreciated how comfortable the whole experience felt.',
    contextNote: 'Hydrafacial Experience',
    source: 'Demonstration Profile',
    consentStatus: 'not_confirmed',
    publicationStatus: 'draft',
    verificationStatus: 'pending',
    contentStatus: 'sample',
    isSample: true,
  },
  {
    id: 'sample-carla-reyes',
    attributionName: 'Carla Reyes',
    attributionType: 'full_name',
    category: 'treatment_experience',
    treatmentSlug: 'laser-advanced',
    treatmentName: 'Carbon Laser Facial',
    photoAssetKey: 'sample-client-carla-reyes',
    quote:
      'I wanted a more refreshed look and decided to try a facial treatment. The consultation helped me understand the process before proceeding, and I really liked how relaxed and comfortable the clinic environment was.',
    contextNote: 'Carbon Laser Experience',
    source: 'Demonstration Profile',
    consentStatus: 'not_confirmed',
    publicationStatus: 'draft',
    verificationStatus: 'pending',
    contentStatus: 'sample',
    isSample: true,
  },
  {
    id: 'sample-andrea-cruz',
    attributionName: 'Andrea Cruz',
    attributionType: 'full_name',
    category: 'wellness_experience',
    treatmentSlug: 'wellness-iv',
    treatmentName: 'IV Wellness Therapy',
    photoAssetKey: 'sample-client-andrea-cruz',
    quote:
      'My visit was a great self-care experience. I appreciated the calm atmosphere and how clearly everything was explained before my treatment session.',
    contextNote: 'IV Wellness Experience',
    source: 'Demonstration Profile',
    consentStatus: 'not_confirmed',
    publicationStatus: 'draft',
    verificationStatus: 'pending',
    contentStatus: 'sample',
    isSample: true,
  },
  {
    id: 'sample-joshua-garcia',
    attributionName: 'Joshua Garcia',
    attributionType: 'full_name',
    category: 'consultation_experience',
    treatmentSlug: 'injectables',
    treatmentName: 'Dermal Fillers',
    photoAssetKey: 'sample-client-joshua-garcia',
    quote:
      'The consultation was thorough and completely unhurried. They answered every question I had about facial symmetry and made sure I felt confident with every step before starting.',
    contextNote: 'Consultation Experience',
    source: 'Demonstration Profile',
    consentStatus: 'not_confirmed',
    publicationStatus: 'draft',
    verificationStatus: 'pending',
    contentStatus: 'sample',
    isSample: true,
  },
  {
    id: 'sample-mark-villanueva',
    attributionName: 'Mark Villanueva',
    attributionType: 'full_name',
    category: 'consultation_experience',
    treatmentSlug: 'injectables',
    treatmentName: 'Botox Consultation',
    photoAssetKey: 'sample-client-mark-villanueva',
    quote:
      'What stood out to me most was the professionalism and attention to detail. The doctor listened carefully to my preferences and gave very balanced, conservative guidance.',
    contextNote: 'Aesthetic Planning Experience',
    source: 'Demonstration Profile',
    consentStatus: 'not_confirmed',
    publicationStatus: 'draft',
    verificationStatus: 'pending',
    contentStatus: 'sample',
    isSample: true,
  },
  {
    id: 'sample-daniel-ramos',
    attributionName: 'Daniel Ramos',
    attributionType: 'full_name',
    category: 'clinic_experience',
    treatmentSlug: 'body-sculpting',
    treatmentName: 'Body Sculpting',
    photoAssetKey: 'sample-client-daniel-ramos',
    quote:
      'The staff was welcoming, the environment felt comfortable and well cared for, and the overall experience felt attentive from start to finish.',
    contextNote: 'Clinic Care Experience',
    source: 'Demonstration Profile',
    consentStatus: 'not_confirmed',
    publicationStatus: 'draft',
    verificationStatus: 'pending',
    contentStatus: 'sample',
    isSample: true,
  },
];

/**
 * Strict publication eligibility predicate
 * Enforces data-level publication governance.
 * Sample demonstration testimonials will ALWAYS evaluate to false.
 */
export function isTestimonialPubliclyEligible(testimonial: Testimonial): boolean {
  if (testimonial.contentStatus === 'sample' || testimonial.isSample) {
    return false;
  }
  return (
    testimonial.consentStatus === 'confirmed' &&
    testimonial.verificationStatus === 'verified' &&
    (testimonial.publicationStatus === 'approved' || testimonial.publicationStatus === 'published') &&
    Boolean(testimonial.quote && testimonial.quote.trim().length > 0)
  );
}

/**
 * Returns only genuine testimonials that satisfy all verification and publication conditions.
 */
export function getPublishedTestimonials(): Testimonial[] {
  return testimonialsData.filter(isTestimonialPubliclyEligible);
}

/**
 * Returns sample testimonials for prototype demonstration mode.
 */
export function getSampleTestimonials(): Testimonial[] {
  return SAMPLE_TESTIMONIALS_DATA;
}

/**
 * Returns active display testimonials:
 * If genuine published testimonials exist, returns them.
 * Otherwise returns demonstration sample testimonials.
 */
export function getActiveDisplayTestimonials(): {
  items: Testimonial[];
  isDemonstrationMode: boolean;
} {
  const published = getPublishedTestimonials();
  if (published.length > 0) {
    return { items: published, isDemonstrationMode: false };
  }
  return { items: getSampleTestimonials(), isDemonstrationMode: true };
}
