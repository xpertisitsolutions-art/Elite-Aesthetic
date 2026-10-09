/**
 * Results & Experience Data Architecture — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /results
 * Strict Content Governance: Authentic Clinic Experience, Zero Unsupported Before/After Claims
 */

export type ExperienceCategory =
  | 'ALL'
  | 'CLINIC & ENVIRONMENT'
  | 'TREATMENT MOMENTS'
  | 'CONSULTATION & CARE'
  | 'BEAUTY & WELLNESS';

export interface ExperienceItem {
  id: string;
  title: string;
  category: 'CLINIC & ENVIRONMENT' | 'TREATMENT MOMENTS' | 'CONSULTATION & CARE' | 'BEAUTY & WELLNESS';
  assetKey: string;
  caption: string;
  context: string;
  treatmentRoute?: string;
  consentStatus: 'verified-consent' | 'client-verification-required';
  verificationStatus: 'verified' | 'client-verification-required';
  isBeforeAfter: boolean;
  beforeAssetKey?: string;
  afterAssetKey?: string;
  disclaimer: string;
}

export const RESULTS_EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-clinic-reception',
    title: 'Reception & Welcome Suite',
    category: 'CLINIC & ENVIRONMENT',
    assetKey: 'clinic-reception',
    caption: 'Inside the Elite Aesthetics reception at The Ridges.',
    context: 'The tranquil arrival space designed to offer an unhurried, comfortable start to your visit.',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Authentic clinic environment at The Ridges Commercial Center, Cebu City.',
  },
  {
    id: 'exp-clinic-suite',
    title: 'Clinical Treatment Room',
    category: 'CLINIC & ENVIRONMENT',
    assetKey: 'clinic-suite',
    caption: 'An authentic clinical treatment suite at The Ridges.',
    context: 'Private, quiet clinical environment equipped for thoughtful procedural care.',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Authentic treatment suite at Elite Aesthetics Cebu.',
  },
  {
    id: 'exp-hydrafacial',
    title: 'Procedural Skin Care',
    category: 'TREATMENT MOMENTS',
    assetKey: 'hydrafacial',
    caption: 'An in-clinic aesthetic skin treatment setting.',
    context: 'Delicate exfoliation and clinical hydration administered with attentive care.',
    treatmentRoute: '/treatments/facials-skin',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Treatment experience at Elite Aesthetics Cebu. Individual responses differ.',
  },
  {
    id: 'exp-co2-laser',
    title: 'Precision Laser Technology',
    category: 'TREATMENT MOMENTS',
    assetKey: 'co2-laser',
    caption: 'An authentic treatment moment at The Ridges.',
    context: 'Clinical laser device technology utilized following personalized suitability assessment.',
    treatmentRoute: '/treatments/laser-advanced',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Clinical laser procedure setting at Elite Aesthetics. Suitability determined by consultation.',
  },
  {
    id: 'exp-doctor-care',
    title: 'Physician Consultation',
    category: 'CONSULTATION & CARE',
    assetKey: 'doctor-care',
    caption: 'Part of the personalized consultation and care experience.',
    context: 'Unhurried one-on-one evaluation to understand goals, anatomy, and individual suitability.',
    treatmentRoute: '/about',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Consultation moment at Elite Aesthetics Cebu. Plans are individually tailored.',
  },
  {
    id: 'exp-doctor-consultation',
    title: 'Collaborative Care Planning',
    category: 'CONSULTATION & CARE',
    assetKey: 'doctor-consultation',
    caption: 'Personalized treatment planning conversation.',
    context: 'A collaborative discussion establishing realistic expectations and tailored options.',
    treatmentRoute: '/about',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Clinical consultation setting at Elite Aesthetics Cebu.',
  },
  {
    id: 'exp-patient-treatment',
    title: 'Dedicated Treatment Protocol',
    category: 'BEAUTY & WELLNESS',
    assetKey: 'patient-treatment',
    caption: 'An authentic in-clinic procedural setting.',
    context: 'Restorative in-clinic protocols delivered in a calm, supportive setting.',
    treatmentRoute: '/treatments/wellness-iv',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Clinical care delivery at Elite Aesthetics Cebu.',
  },
  {
    id: 'exp-massage-suite',
    title: 'Restorative Relaxation Suite',
    category: 'BEAUTY & WELLNESS',
    assetKey: 'massage-relaxation',
    caption: 'Inside the relaxation and bodywork suite.',
    context: 'A quiet, dedicated relaxation space designed around comfort and personal pace.',
    treatmentRoute: '/treatments/massage-relaxation',
    consentStatus: 'client-verification-required',
    verificationStatus: 'verified',
    isBeforeAfter: false,
    disclaimer: 'Relaxation and wellness environment at Elite Aesthetics Cebu.',
  },
];

// Backward-compatible alias for existing code
export const RESULTS_DATA = RESULTS_EXPERIENCE_DATA;
