/**
 * Promotions Data Architecture — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /promotions
 * Content Governance: Transparent, Time-Sensitive, Zero Independent Medical/Validity Claims
 */

export type PromotionCategory =
  | 'ALL'
  | 'SKIN & FACE'
  | 'INJECTABLES'
  | 'WELLNESS'
  | 'BODY & FACE'
  | 'SPECIAL OFFERS';

export type PromotionValidityStatus =
  | 'verification_required'
  | 'confirmed_active'
  | 'expired'
  | 'archived';

export interface PromotionCampaign {
  id: string;
  title: string;
  subtitle: string;
  category: 'SKIN & FACE' | 'INJECTABLES' | 'WELLNESS' | 'BODY & FACE' | 'SPECIAL OFFERS';
  description: string;
  assetKey: string;
  displayedPrice?: string;
  originalPrice?: string;
  packageQuantity?: string;
  campaignLabel: string;
  validityStatus: PromotionValidityStatus;
  validityDate?: string;
  treatmentRoute?: string;
  bookingService: string;
  verificationNote: string;
  disclaimer: string;
}

export const PROMOTIONS_DATA: PromotionCampaign[] = [
  {
    id: 'promo-lemon-bottle',
    title: 'Lemon Bottle + RF',
    subtitle: 'Targeted Body & Facial Contouring',
    category: 'BODY & FACE',
    description:
      'Clinic promotional campaign feature pairing Lemon Bottle solution application with complementary radiofrequency support.',
    assetKey: 'promo-lemon-bottle',
    displayedPrice: '₱3,100 for 5ml',
    originalPrice: '₱7,500',
    packageQuantity: '5ml Session',
    campaignLabel: 'Clinic Promotional Feature',
    validityStatus: 'verification_required',
    treatmentRoute: '/treatments/body-sculpting',
    bookingService: 'Lemon Bottle + RF Inquiry',
    verificationNote:
      'Displayed promotional price: ₱3,100 for 5ml (historical advertised rate from clinic artwork). Confirm current availability and pricing with the clinic.',
    disclaimer:
      'Displayed pricing reflects promotional campaign artwork. Treatment suitability, protocol parameters, and current rates must be confirmed with Elite Aesthetics before care.',
  },
  {
    id: 'promo-iv-wellness',
    title: 'Glutathione & Immune IV Drips',
    subtitle: 'Restorative Micronutrient Hydration',
    category: 'WELLNESS',
    description:
      'Supportive IV wellness drip options listed in clinic promotional materials, including Glutathione and Immune wellness formulations administered in quiet clinical suites.',
    assetKey: 'promo-wellness-iv',
    displayedPrice: 'Starting ₱1,000/session',
    packageQuantity: 'Single Session',
    campaignLabel: 'Clinic Promotional Feature',
    validityStatus: 'verification_required',
    treatmentRoute: '/treatments/wellness-iv',
    bookingService: 'IV Wellness Promotion Inquiry',
    verificationNote:
      'Displayed promotional pricing from supplied clinic artwork; confirm current pricing and availability with the clinic.',
    disclaimer:
      'IV wellness formulations, eligibility, and specific protocols are discussed during clinical consultation. Displayed rate is from historical campaign materials.',
  },
  {
    id: 'promo-botox',
    title: 'Botox Smoothing Privilege',
    subtitle: 'Targeted Neurotoxin Care',
    category: 'INJECTABLES',
    description:
      'Promotional privilege referenced in clinic campaign materials for targeted line-smoothing and facial expression balance.',
    assetKey: 'promo-botox',
    displayedPrice: '₱250 / unit',
    packageQuantity: 'Minimum 100 units · 10% OFF',
    campaignLabel: 'Clinic Promotional Feature',
    validityStatus: 'verification_required',
    treatmentRoute: '/treatments/injectables',
    bookingService: 'Botox Promotion Inquiry',
    verificationNote:
      'Displayed promotional pricing from supplied clinic artwork; confirm current pricing, eligibility, and availability with the clinic.',
    disclaimer:
      'Injectable treatments require clinical assessment to evaluate suitability, exact unit requirements, and anatomical balance before any procedure.',
  },
  {
    id: 'promo-hiko',
    title: 'HIKO Nose Lift Feature',
    subtitle: 'Non-Surgical Nasal Contouring',
    category: 'INJECTABLES',
    description:
      'Clinic promotional campaign feature for HIKO contouring thread placement discussed through personalized clinical consultation.',
    assetKey: 'promo-hiko',
    campaignLabel: 'Clinic Promotional Feature',
    validityStatus: 'verification_required',
    treatmentRoute: '/treatments/injectables',
    bookingService: 'HIKO Nose Lift Inquiry',
    verificationNote:
      'Treatment suitability and current promotional details should be confirmed with the clinic.',
    disclaimer:
      'Thread placement procedures require comprehensive pre-procedure consultation and medical assessment to establish anatomical suitability and realistic expectations.',
  },
  {
    id: 'promo-co2-laser',
    title: 'Laser Skin Renewal Consultation',
    subtitle: 'Advanced Fractional Technology',
    category: 'SKIN & FACE',
    description:
      'Comprehensive skin evaluation and customized laser treatment planning for texture renewal, tone clarity, and pore refinement.',
    assetKey: 'promo-co2-laser',
    campaignLabel: 'Advanced Technology Feature',
    validityStatus: 'verification_required',
    treatmentRoute: '/treatments/laser-advanced',
    bookingService: 'Laser Skin Consultation',
    verificationNote:
      'Laser treatments require a prior medical suitability assessment. Confirm current consultation terms with the clinic.',
    disclaimer:
      'Laser suitability is determined during your individual clinical evaluation based on skin type and concerns.',
  },
  {
    id: 'promo-body-sculpting',
    title: 'Body Contouring Privilege Card',
    subtitle: 'Targeted Muscle & Tone Care',
    category: 'BODY & FACE',
    description:
      'Personalized body assessment session discussing non-invasive muscle activation, firming modalities, and holistic body care options.',
    assetKey: 'promo-body-sculpting',
    campaignLabel: 'Body Sculpting Consultation',
    validityStatus: 'verification_required',
    treatmentRoute: '/treatments/body-sculpting',
    bookingService: 'Body Contouring Consultation',
    verificationNote:
      'Targeted body sculpting suitability is determined during your individual clinical evaluation.',
    disclaimer:
      'Available modalities and candidate suitability are reviewed collaboratively during consultation.',
  },
];
