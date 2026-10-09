/**
 * Comprehensive Treatment Data Model
 * Elite Aesthetics Cebu
 */

export interface TreatmentItem {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  clinicalFocus: string;
  imageAssetKey?: string;
  verificationStatus: 'verified' | 'client-verification-required';
  bookingLabel: string;
  benefits?: string[];
  duration?: string;
  recommendedFor?: string;
}

export interface CategoryDiscoveryArea {
  id: string;
  title: string;
  shortDescription: string;
}

export interface CategoryConcernPathway {
  id: string;
  title: string;
  description: string;
}

export interface CategoryPlanningStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface DetailedTreatmentCategory {
  id: string;
  slug: string;
  name: string;
  badge: string;
  accentColor: string;
  shortDescription: string;
  clinicalOverview: string;
  heroAssetKey: string;
  verificationStatus: 'verified' | 'client-verification-required';
  treatments: TreatmentItem[];
  relatedCategorySlugs: string[];
  seoMetadata: {
    title: string;
    metaDescription: string;
  };
  headline?: string;
  heroSupporting?: string;
  understandingOverview?: string[];
  discoveryAreas?: CategoryDiscoveryArea[];
  concernPathways?: CategoryConcernPathway[];
  featuredTreatmentSlug?: string;
  editorialImageKey?: string;
  editorialImageQuote?: string;
  planningSteps?: CategoryPlanningStep[];
  governanceHeading?: string;
  governanceText?: string;
}

export const DETAILED_TREATMENT_CATEGORIES: DetailedTreatmentCategory[] = [
  {
    id: 'facials-skin',
    slug: 'facials-skin',
    name: 'Facials & Skin',
    badge: 'Skincare',
    accentColor: '#C9A77E',
    shortDescription:
      'Explore facial and skin-focused treatments designed around individual skin concerns, hydration, and skin clarity.',
    clinicalOverview:
      'Our facial and clinical skincare treatments utilize gentle, multi-step protocols designed to clarify pores, hydrate deeply, and replenish the skin barrier in a peaceful clinical setting.',
    heroAssetKey: 'facials-skin',
    verificationStatus: 'verified',
    headline: 'Skin-Focused Care, Thoughtfully Personalized',
    heroSupporting:
      'Explore facial and skin-focused treatments designed around individual skin concerns, hydration, skin clarity, and your personal goals.',
    understandingOverview: [
      'Skin concerns vary naturally from person to person, reflecting unique physiology, lifestyle habits, genetic factors, and personal goals.',
      'At Elite Aesthetics, skin care discovery begins with understanding your skin history, daily routines, and personal comfort rather than recommending generalized protocols.',
      'Treatment suitability is assessed collaboratively during consultation to ensure all recommendations are thoughtful, appropriate, and aligned with your expectations.',
      'Website information is intended for educational exploration and should not be used for self-diagnosis.',
    ],
    discoveryAreas: [
      {
        id: 'cleansing-hydration',
        title: 'Facial Cleansing & Hydration',
        shortDescription:
          'Gentle, multi-step pore cleansing and moisture replenishment protocols designed to support a refreshed skin feel.',
      },
      {
        id: 'texture-clarity',
        title: 'Skin Texture & Clarity',
        shortDescription:
          'Supportive exfoliation and clarifying care to encourage smoother skin surface and gentle pore refinement.',
      },
      {
        id: 'skin-renewal',
        title: 'Skin Renewal',
        shortDescription:
          'Non-invasive treatment protocols designed to support natural barrier vitality, skin tone, and gentle rejuvenation.',
      },
      {
        id: 'personalized-care',
        title: 'Personalized Facial Care',
        shortDescription:
          'Customized session parameters adapted to individual skin sensitivity, tolerance, and seasonal considerations.',
      },
      {
        id: 'advanced-treatments',
        title: 'Advanced Skin-Focused Treatments',
        shortDescription:
          'In-clinic technology-assisted protocols discussed during consultation based on professional evaluation.',
      },
    ],
    concernPathways: [
      {
        id: 'skin-texture',
        title: 'SKIN TEXTURE',
        description: 'Explore options for discussing uneven texture and skin clarity.',
      },
      {
        id: 'hydration',
        title: 'HYDRATION',
        description: 'Explore facial care focused on hydration and refreshed skin.',
      },
      {
        id: 'clarity',
        title: 'CLARITY',
        description: 'Discuss personalized approaches to maintaining clearer-looking skin.',
      },
      {
        id: 'skin-renewal',
        title: 'SKIN RENEWAL',
        description: 'Explore treatment options focused on skin renewal and refinement.',
      },
    ],
    featuredTreatmentSlug: 'hydrafacial',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'Thoughtful care begins with understanding.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share your goals, concerns, routines, and expectations in an unhurried, comfortable clinical setting.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Professional Assessment',
        description:
          'Explore appropriate options based on individual circumstances and professional assessment.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Personalized Strategy',
        description:
          'Discuss a personalized approach and realistic expectations tailored to your lifestyle.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Proceed with the selected care plan after consultation with attentive post-care guidance.',
      },
    ],
    governanceHeading: 'Care That Begins With Understanding',
    governanceText:
      'Treatment options can vary based on individual goals, skin history, suitability, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.',
    treatments: [
      {
        id: 'hydrafacial',
        slug: 'hydrafacial',
        name: 'Hydrafacial Glow',
        categoryId: 'facials-skin',
        shortDescription: 'Patented multi-step technology that cleanses, exfoliates, and hydrates.',
        clinicalFocus: 'Deep pore extraction and serum antioxidant infusion.',
        imageAssetKey: 'hydrafacial',
        verificationStatus: 'verified',
        bookingLabel: 'Book Hydrafacial',
        benefits: ['Deep pore cleansing', 'Intense hydration', 'Immediate refreshed radiance'],
        duration: '45–60 mins',
      },
      {
        id: 'deep-pore-cleansing',
        slug: 'deep-pore-cleansing',
        name: 'Clinical Deep Pore Clarifying',
        categoryId: 'facials-skin',
        shortDescription: 'Targeted medical-grade cleansing for congested skin and blemish support.',
        clinicalFocus: 'Sebum regulation and botanical calming.',
        verificationStatus: 'client-verification-required',
        bookingLabel: 'Book Consultation',
      },
    ],
    relatedCategorySlugs: ['laser-advanced', 'injectables'],
    seoMetadata: {
      title: 'Facials & Skin Treatments Cebu | Elite Aesthetics',
      metaDescription:
        'Explore clinical facials and restorative skincare protocols at Elite Aesthetics Cebu, located at The Ridges Commercial Center.',
    },
  },
  {
    id: 'laser-advanced',
    slug: 'laser-advanced',
    name: 'Laser & Advanced Treatments',
    badge: 'Aesthetic Tech',
    accentColor: '#B89358',
    shortDescription:
      'Explore targeted skin texture care, laser toning, and skin renewal options discussed during consultation.',
    clinicalOverview:
      'State-of-the-art fractional laser and advanced energy modalities calibrate energy delivery to renew skin surface texture, soften irregularities, and support dermal rejuvenation.',
    heroAssetKey: 'laser-advanced',
    verificationStatus: 'verified',
    headline: 'Precision Care for Skin Texture & Renewal',
    heroSupporting:
      'Explore targeted skin-focused treatments and laser-based options through personalized consultation and thoughtful treatment planning.',
    understandingOverview: [
      'Laser and advanced skin treatments can involve different approaches depending on the individual’s concerns, skin history, goals, and professional assessment.',
      'At Elite Aesthetics, we approach laser technology with thoughtful precision: evaluating skin characteristics, history, and personal comfort before considering any protocol.',
      'A comprehensive consultation helps determine which options may be appropriate to discuss, setting realistic expectations and supportive post-care guidance.',
      'Website information is intended for educational exploration and should not be used for self-diagnosis.',
    ],
    discoveryAreas: [
      {
        id: 'skin-texture',
        title: 'Skin Texture',
        shortDescription:
          'Explore options for discussing uneven texture and skin refinement.',
      },
      {
        id: 'skin-renewal',
        title: 'Skin Renewal',
        shortDescription:
          'Discuss approaches focused on skin renewal and refinement.',
      },
      {
        id: 'tone-clarity',
        title: 'Tone & Clarity',
        shortDescription:
          'Explore skin-focused options for discussing tone and overall clarity.',
      },
      {
        id: 'laser-facial-care',
        title: 'Laser-Based Facial Care',
        shortDescription:
          'Learn about laser-based approaches that may be considered during consultation.',
      },
      {
        id: 'advanced-skin-treatments',
        title: 'Advanced Skin-Focused Treatments',
        shortDescription:
          'Explore additional skin-focused treatment options based on individual assessment.',
      },
    ],
    concernPathways: [
      {
        id: 'texture',
        title: 'TEXTURE',
        description: 'Explore options for discussing uneven texture and skin refinement.',
      },
      {
        id: 'renewal',
        title: 'RENEWAL',
        description: 'Discuss approaches focused on skin renewal and surface refinement.',
      },
      {
        id: 'tone',
        title: 'TONE',
        description: 'Explore treatment options that may be discussed for overall skin tone and clarity.',
      },
      {
        id: 'clarity',
        title: 'CLARITY',
        description: 'Discuss personalized approaches to maintaining clearer-looking skin.',
      },
    ],
    featuredTreatmentSlug: 'co2-fractional-laser',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'Precision begins with understanding.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share your skin concerns, goals, routines, and expectations in an unhurried clinical setting.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Clinical Assessment',
        description:
          'Explore relevant factors and discuss options based on individual circumstances and professional assessment.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Personalized Strategy',
        description:
          'Discuss an appropriate treatment approach and realistic expectations tailored to your skin.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Proceed with the selected care plan after consultation with attentive post-care guidance.',
      },
    ],
    governanceHeading: 'Care Before Technology',
    governanceText:
      'Laser and advanced treatment options can vary according to individual circumstances, skin history, goals, suitability, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.',
    treatments: [
      {
        id: 'co2-fractional-laser',
        slug: 'co2-fractional-laser',
        name: 'CO₂ Fractional Laser',
        categoryId: 'laser-advanced',
        shortDescription:
          'CO₂ Fractional Laser is a fractional laser treatment used in skin-focused care, with treatment discussions centered on individual skin texture and renewal goals.',
        clinicalFocus: 'Micro-column dermal stimulation and tissue renewal.',
        imageAssetKey: 'co2-fractional-laser',
        verificationStatus: 'verified',
        bookingLabel: 'Book CO₂ Laser Consultation',
        benefits: ['Refined skin texture', 'Targeted scar softening', 'Collagen renewal'],
        duration: '60–90 mins',
      },
      {
        id: 'laser-toning',
        slug: 'laser-toning',
        name: 'Laser Skin Toning',
        categoryId: 'laser-advanced',
        shortDescription: 'Non-ablative gentle laser passes designed to support overall skin clarity.',
        clinicalFocus: 'Melanin dispersion and gentle collagen heating.',
        verificationStatus: 'client-verification-required',
        bookingLabel: 'Book Consultation',
      },
    ],
    relatedCategorySlugs: ['facials-skin', 'injectables'],
    seoMetadata: {
      title: 'Laser & Advanced Treatments Cebu | Elite Aesthetics',
      metaDescription:
        'Explore laser and advanced skin-focused treatments at Elite Aesthetics Cebu, with personalized consultation and thoughtful treatment planning at The Ridges Commercial Center.',
    },
  },
  {
    id: 'injectables',
    slug: 'injectables',
    name: 'Injectables',
    badge: 'Targeted Care',
    accentColor: '#A17C44',
    shortDescription:
      'Explore personalized facial contouring, line smoothing, and subtle volume options discussed during consultation.',
    clinicalOverview:
      'Carefully planned neuromodulator and hyaluronic acid dermal filler protocols designed to respect natural facial kinetics, enhance harmony, and restore volume subtly.',
    heroAssetKey: 'injectables',
    verificationStatus: 'verified',
    headline: 'Subtle Refinement, Thoughtfully Personalized',
    heroSupporting:
      'Explore personalized options for facial contouring, line smoothing, and subtle volume through consultation and individualized treatment planning.',
    understandingOverview: [
      'Injectable treatments are highly individualized. The approach discussed during consultation may depend on facial anatomy, existing features, personal goals, treatment history, and professional assessment.',
      'At Elite Aesthetics, we emphasize anatomical balance, facial kinetics, and subtle enhancement rather than applying standardized formulas or promoting dramatic reinvention.',
      'A thorough consultation creates the space to discuss realistic expectations, product suitability, and personalized placement with our clinic team.',
      'Website information is intended for educational exploration and should not be used for self-diagnosis.',
    ],
    discoveryAreas: [
      {
        id: 'expression-line-care',
        title: 'Expression Line Care',
        shortDescription:
          'Explore options for discussing the appearance of expression lines and facial movement.',
      },
      {
        id: 'facial-contouring',
        title: 'Facial Contouring',
        shortDescription:
          'Discuss individualized approaches to facial balance and contour.',
      },
      {
        id: 'subtle-volume',
        title: 'Subtle Volume',
        shortDescription:
          'Explore volume-focused options based on individual facial structure and goals.',
      },
      {
        id: 'lip-definition',
        title: 'Lip Definition',
        shortDescription:
          'Discuss personalized approaches to lip shape, definition, and proportion.',
      },
      {
        id: 'personalized-planning',
        title: 'Personalized Injectable Planning',
        shortDescription:
          'Explore an individualized treatment approach based on professional assessment.',
      },
    ],
    concernPathways: [
      {
        id: 'expression-lines',
        title: 'EXPRESSION LINES',
        description: 'Discuss approaches that may be considered for the appearance of expression lines.',
      },
      {
        id: 'facial-balance',
        title: 'FACIAL BALANCE',
        description: 'Explore options for discussing facial proportion and contour.',
      },
      {
        id: 'volume',
        title: 'VOLUME',
        description: 'Discuss individualized approaches to facial volume and definition.',
      },
      {
        id: 'lip-definition',
        title: 'LIP DEFINITION',
        description: 'Explore personalized options related to lip shape and definition.',
      },
    ],
    featuredTreatmentSlug: 'botox',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'Refinement begins with understanding.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share your goals, concerns, expectations, and desired degree of refinement.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Anatomical Assessment',
        description:
          'Explore relevant facial characteristics and suitability with the appropriate clinic professional.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Individualized Strategy',
        description:
          'Discuss an individualized approach, including expectations and appropriate treatment considerations.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Proceed with the selected care plan after consultation with attentive post-care guidance.',
      },
    ],
    governanceHeading: 'Care Before Treatment',
    governanceText:
      'Injectable treatment options vary according to individual anatomy, goals, treatment history, suitability, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.',
    treatments: [
      {
        id: 'botox',
        slug: 'botox',
        name: 'Botox Expression Smoothing',
        categoryId: 'injectables',
        shortDescription:
          'Botox is a neuromodulator treatment discussed for targeted facial expression lines and individualized aesthetic goals.',
        clinicalFocus: 'Targeted muscle relaxation and facial rejuvenation.',
        imageAssetKey: 'botox',
        verificationStatus: 'verified',
        bookingLabel: 'Book Botox Consultation',
        benefits: ['Softened expression lines', 'Preserved natural mobility', 'Refined upper facial contour'],
        duration: '30 mins',
      },
      {
        id: 'dermal-fillers',
        slug: 'dermal-fillers',
        name: 'Dermal Fillers',
        categoryId: 'injectables',
        shortDescription:
          'Dermal fillers are injectable treatments that may be discussed for individualized facial volume, contour, or lip-definition goals.',
        clinicalFocus: 'Structural mid-face support and balanced contouring.',
        imageAssetKey: 'dermal-fillers',
        verificationStatus: 'verified',
        bookingLabel: 'Book Filler Consultation',
        benefits: ['Subtle facial balancing', 'Restored youthful volume', 'Hydrated lip definition'],
        duration: '45 mins',
      },
    ],
    relatedCategorySlugs: ['facials-skin', 'laser-advanced', 'body-sculpting', 'hair-restoration'],
    seoMetadata: {
      title: 'Injectable Treatments Cebu | Elite Aesthetics',
      metaDescription:
        'Explore personalized injectable treatments at Elite Aesthetics Cebu, including facial contouring, line-smoothing, and volume-focused options discussed through consultation.',
    },
  },
  {
    id: 'body-sculpting',
    slug: 'body-sculpting',
    name: 'Body Sculpting',
    badge: 'Body Contouring',
    accentColor: '#9E7A42',
    shortDescription:
      'Explore personalized body-contouring options through consultation, individual assessment, and thoughtful treatment planning.',
    clinicalOverview:
      'Thoughtful body contouring begins with understanding your individual goals, proportions, and suitability. Treatments are discussed collaboratively in a clinical setting.',
    heroAssetKey: 'body-sculpting',
    verificationStatus: 'verified',
    headline: 'Shape, Balance, Thoughtfully Personalized',
    heroSupporting:
      'Explore personalized body-contouring options through consultation, individual assessment, and thoughtful treatment planning.',
    understandingOverview: [
      'Body sculpting encompasses a range of aesthetic approaches intended to support individualized body-contouring goals. Suitability depends on the area being considered, individual anatomy, treatment history, goals, and professional assessment.',
      'A consultation provides an opportunity to understand your priorities, discuss appropriate options, and establish realistic expectations before treatment.',
      'At Elite Aesthetics, we emphasize anatomical balance, proportion, and personalized care rather than standardized transformation formulas.',
      'Website information is intended for educational exploration and should not be used for self-diagnosis.',
    ],
    discoveryAreas: [
      {
        id: 'body-contouring',
        title: 'Body Contouring',
        shortDescription:
          'Explore options for individualized body-shape and contouring goals.',
      },
      {
        id: 'targeted-areas',
        title: 'Targeted Areas',
        shortDescription:
          'Discuss specific areas of concern and whether an available treatment may be appropriate.',
      },
      {
        id: 'shape-proportion',
        title: 'Shape & Proportion',
        shortDescription:
          'Consider how individual proportions and treatment goals influence planning.',
      },
      {
        id: 'skin-body-appearance',
        title: 'Skin & Body Appearance',
        shortDescription:
          'Explore approaches that may complement the overall appearance of a targeted area.',
      },
      {
        id: 'personalized-planning',
        title: 'Personalized Treatment Planning',
        shortDescription:
          'Discuss available options, suitability, expectations, and appropriate next steps with the clinic team.',
      },
    ],
    concernPathways: [
      {
        id: 'abdominal-contouring',
        title: 'ABDOMINAL CONTOURING',
        description: 'Discuss individualized options for concerns involving abdominal contour and proportion.',
      },
      {
        id: 'waist-flanks',
        title: 'WAIST & FLANKS',
        description: 'Explore approaches that may be considered for targeted waist and flank contouring goals.',
      },
      {
        id: 'arms-other-targets',
        title: 'ARMS & OTHER TARGET AREAS',
        description: 'Discuss whether available treatments may be appropriate for a specific area.',
      },
      {
        id: 'overall-proportion',
        title: 'OVERALL BODY PROPORTION',
        description: 'Explore how individual goals and proportions can inform treatment planning.',
      },
    ],
    featuredTreatmentSlug: 'emsculpt',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'Thoughtful Contouring Begins With Understanding.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share the areas you would like to explore, your goals, and your expectations.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Professional Assessment',
        description:
          'Discuss relevant characteristics, treatment history, and suitability with the appropriate clinic professional.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Individualized Strategy',
        description:
          'Review appropriate options, expectations, and treatment considerations.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Proceed with the selected care plan after consultation and appropriate guidance.',
      },
    ],
    governanceHeading: 'Care Before Contouring',
    governanceText:
      'Body-contouring options vary according to individual anatomy, goals, treatment history, suitability, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.',
    treatments: [
      {
        id: 'emsculpt',
        slug: 'emsculpt',
        name: 'Emsculpt',
        categoryId: 'body-sculpting',
        shortDescription:
          'Emsculpt is a body-contouring treatment discussed for individualized aesthetic goals involving targeted areas of the body.',
        clinicalFocus: 'Targeted non-invasive body contouring discussed during consultation.',
        imageAssetKey: 'emsculpt',
        verificationStatus: 'verified',
        bookingLabel: 'Book Emsculpt Consultation',
        benefits: ['Targeted contouring discussions', 'Professional suitability assessment', 'Personalized care planning'],
        duration: '30 mins',
      },
    ],
    relatedCategorySlugs: [
      'facials-skin',
      'laser-advanced',
      'injectables',
      'wellness-iv',
      'medical-weight-mgmt',
      'massage-relaxation',
    ],
    seoMetadata: {
      title: 'Body Sculpting Cebu | Elite Aesthetics',
      metaDescription:
        'Explore personalized body-contouring options at Elite Aesthetics Cebu through consultation, individual assessment, and thoughtful treatment planning.',
    },
  },
  {
    id: 'wellness-iv',
    slug: 'wellness-iv',
    name: 'Wellness & IV Therapy',
    badge: 'Wellness Drips',
    accentColor: '#C9A77E',
    shortDescription:
      'Explore personalized wellness and IV options through consultation, individual assessment, and thoughtful treatment planning.',
    clinicalOverview:
      'Wellness care begins with understanding what your body and goals need. Individualized hydration-focused wellness protocols discussed collaboratively in an attentive clinical setting.',
    heroAssetKey: 'wellness-iv',
    verificationStatus: 'verified',
    headline: 'Wellness, Thoughtfully Personalized',
    heroSupporting:
      'Explore personalized wellness and IV options through consultation, individual assessment, and thoughtful treatment planning.',
    understandingOverview: [
      'Wellness and IV services can form part of a broader personalized care experience. The appropriate approach depends on individual goals, health considerations, treatment history, and professional assessment.',
      'A consultation provides an opportunity to discuss what you are looking for, understand available options, and determine what may be appropriate for you.',
      'IV-related services should be considered within the context of individual suitability and professional guidance.',
      'Website information is intended for educational exploration and should not be used for self-diagnosis.',
    ],
    discoveryAreas: [
      {
        id: 'iv-wellness-options',
        title: 'IV Wellness Options',
        shortDescription:
          'Explore available IV wellness options and discuss whether they may be appropriate for your individual goals.',
      },
      {
        id: 'personalized-wellness-planning',
        title: 'Personalized Wellness Planning',
        shortDescription:
          'Discuss your priorities and explore available approaches with the appropriate clinic professional.',
      },
      {
        id: 'hydration-focused-care',
        title: 'Hydration-Focused Care',
        shortDescription:
          'Explore hydration-oriented wellness options according to individual suitability.',
      },
      {
        id: 'rest-and-recharge',
        title: 'Rest & Recharge',
        shortDescription:
          'Discover a calm space for intentional self-care and wellness-focused experiences.',
      },
      {
        id: 'individual-assessment',
        title: 'Individual Assessment',
        shortDescription:
          'Consider personal circumstances, treatment history, and suitability before beginning care.',
      },
    ],
    concernPathways: [
      {
        id: 'hydration-wellness',
        title: 'HYDRATION & WELLNESS',
        description: 'Discuss hydration-focused wellness options and whether they may be appropriate for your individual needs.',
      },
      {
        id: 'personal-wellness-goals',
        title: 'PERSONAL WELLNESS GOALS',
        description: 'Share what you would like to explore and discuss available options with the clinic team.',
      },
      {
        id: 'rest-recharge',
        title: 'REST & RECHARGE',
        description: 'Explore wellness-focused experiences designed around intentional self-care.',
      },
      {
        id: 'personalized-iv-planning',
        title: 'PERSONALIZED IV PLANNING',
        description: 'Discuss available formulations, suitability, and treatment considerations before proceeding.',
      },
    ],
    featuredTreatmentSlug: 'iv-wellness',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'Wellness Begins With Understanding.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share your wellness goals, priorities, and expectations.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Professional Assessment',
        description:
          'Discuss relevant health considerations, treatment history, and suitability with the appropriate clinic professional.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Individualized Strategy',
        description:
          'Review available options, formulations, protocols, and expectations as appropriate.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Proceed with the selected care plan after consultation and appropriate guidance.',
      },
    ],
    governanceHeading: 'Care Before Wellness Treatment',
    governanceText:
      'Wellness and IV services vary according to individual circumstances, treatment history, suitability, available formulations, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.',
    treatments: [
      {
        id: 'iv-wellness',
        slug: 'iv-wellness',
        name: 'IV Wellness',
        categoryId: 'wellness-iv',
        shortDescription:
          'IV wellness services may be discussed as part of an individualized approach to hydration and wellness, subject to professional assessment and clinic protocols.',
        clinicalFocus: 'Individualized hydration and wellness support discussed during consultation.',
        imageAssetKey: 'wellness-iv',
        verificationStatus: 'verified',
        bookingLabel: 'Book IV Consultation',
        benefits: ['Personalized consultation', 'Comfortable clinical setting', 'Professional assessment'],
        duration: '45–60 mins',
      },
      {
        id: 'glutathione-iv',
        slug: 'glutathione-iv',
        name: 'Glutathione IV Drip',
        categoryId: 'wellness-iv',
        shortDescription:
          'An IV wellness option listed by Elite Aesthetics. Specific formulation, suitability, and intended use should be discussed during consultation.',
        clinicalFocus: 'Wellness and hydration exploration.',
        verificationStatus: 'client-verification-required',
        bookingLabel: 'Book Consultation',
      },
      {
        id: 'immune-iv',
        slug: 'immune-iv',
        name: 'Immune IV Drip',
        categoryId: 'wellness-iv',
        shortDescription:
          'An IV wellness option listed by Elite Aesthetics. Specific formulation, suitability, and intended use should be discussed during consultation.',
        clinicalFocus: 'Supportive wellness consultation.',
        verificationStatus: 'client-verification-required',
        bookingLabel: 'Book Consultation',
      },
    ],
    relatedCategorySlugs: [
      'facials-skin',
      'laser-advanced',
      'injectables',
      'body-sculpting',
      'hair-restoration',
      'medical-weight-mgmt',
      'massage-relaxation',
    ],
    seoMetadata: {
      title: 'Wellness & IV Cebu | Elite Aesthetics',
      metaDescription:
        'Explore personalized wellness and IV options at Elite Aesthetics Cebu through consultation, individual assessment, and thoughtful treatment planning.',
    },
  },
  {
    id: 'hair-restoration',
    slug: 'hair-restoration',
    name: 'Hair Restoration',
    badge: 'Scalp Care',
    accentColor: '#B89358',
    shortDescription:
      'Explore personalized approaches to hair and scalp concerns through consultation, individual assessment, and thoughtful treatment planning.',
    clinicalOverview:
      'Hair and scalp care begins with understanding the individual. Thoughtful consultation creates space to discuss concerns, evaluate scalp health, and consider appropriate treatment options.',
    heroAssetKey: 'hair-restoration',
    verificationStatus: 'verified',
    headline: 'Thoughtful Care for Hair & Scalp',
    heroSupporting:
      'Explore personalized approaches to hair and scalp concerns through consultation, individual assessment, and thoughtful treatment planning.',
    understandingOverview: [
      'Hair and scalp concerns can have different causes, patterns, and individual considerations. A thoughtful approach begins by understanding your concerns, treatment history, goals, and overall suitability.',
      'Consultation creates an opportunity to discuss what you have noticed, explore available options, and determine what may be appropriate for you.',
      'At Elite Aesthetics, we emphasize unhurried clinical assessment and realistic expectations rather than standardized promises.',
      'Website information is intended for educational exploration and should not be used for self-diagnosis.',
    ],
    discoveryAreas: [
      {
        id: 'hair-scalp-assessment',
        title: 'Hair & Scalp Assessment',
        shortDescription:
          'Discuss your hair and scalp concerns and explore appropriate next steps with the clinic team.',
      },
      {
        id: 'hair-thinning-concerns',
        title: 'Hair Thinning Concerns',
        shortDescription:
          'Explore individualized approaches for concerns involving changes in hair density or appearance.',
      },
      {
        id: 'scalp-focused-care',
        title: 'Scalp-Focused Care',
        shortDescription:
          'Discuss available approaches that focus on the condition and appearance of the scalp.',
      },
      {
        id: 'hair-restoration-options',
        title: 'Hair Restoration Options',
        shortDescription:
          'Explore available treatment approaches according to individual suitability and professional assessment.',
      },
      {
        id: 'personalized-hair-planning',
        title: 'Personalized Hair Planning',
        shortDescription:
          'Discuss goals, expectations, treatment history, and appropriate options before beginning care.',
      },
    ],
    concernPathways: [
      {
        id: 'hair-thinning',
        title: 'HAIR THINNING',
        description: 'Discuss concerns involving changes in hair density or overall hair appearance.',
      },
      {
        id: 'scalp-concerns',
        title: 'SCALP CONCERNS',
        description: 'Explore scalp-focused care and appropriate options based on individual assessment.',
      },
      {
        id: 'hair-density',
        title: 'HAIR DENSITY & APPEARANCE',
        description: 'Discuss personalized approaches to concerns involving the appearance of hair density.',
      },
      {
        id: 'restoration-planning',
        title: 'RESTORATION PLANNING',
        description: 'Explore available options, expectations, and appropriate next steps with the clinic team.',
      },
    ],
    featuredTreatmentSlug: 'prp',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'Understanding Comes Before Treatment.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share what you have noticed, your concerns, your goals, and your expectations.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Clinical Assessment',
        description:
          'Discuss relevant hair and scalp considerations, treatment history, and suitability with the appropriate clinic professional.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Individualized Strategy',
        description:
          'Review appropriate options, expectations, and treatment considerations.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Proceed with the selected care plan after consultation and appropriate guidance.',
      },
    ],
    governanceHeading: 'Care Before Restoration',
    governanceText:
      'Hair and scalp treatment options vary according to individual circumstances, treatment history, goals, suitability, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.',
    treatments: [
      {
        id: 'prp',
        slug: 'prp',
        name: 'PRP',
        categoryId: 'hair-restoration',
        shortDescription:
          'PRP is a treatment approach that may be discussed for selected hair and scalp concerns following individual assessment and professional consultation.',
        clinicalFocus: 'Individualized scalp evaluation and care planning.',
        imageAssetKey: 'prp',
        verificationStatus: 'verified',
        bookingLabel: 'Book PRP Consultation',
        benefits: ['Personalized scalp assessment', 'Professional clinical consultation', 'Realistic care planning'],
        duration: '60 mins',
      },
    ],
    relatedCategorySlugs: [
      'facials-skin',
      'laser-advanced',
      'injectables',
      'body-sculpting',
      'wellness-iv',
      'medical-weight-mgmt',
      'massage-relaxation',
    ],
    seoMetadata: {
      title: 'Hair Restoration Cebu | Elite Aesthetics',
      metaDescription:
        'Explore personalized hair and scalp treatment options at Elite Aesthetics Cebu through consultation, individual assessment, and thoughtful treatment planning.',
    },
  },
  {
    id: 'medical-weight-mgmt',
    slug: 'medical-weight-mgmt',
    name: 'Medical Weight Management',
    badge: 'Wellness',
    accentColor: '#826035',
    shortDescription:
      'Explore personalized weight-management options through professional assessment, individual goals, and thoughtful treatment planning.',
    clinicalOverview:
      'Weight management begins with understanding the individual, not applying a standard formula. A thoughtful consultation creates space to discuss your goals, health context, and appropriate options.',
    heroAssetKey: 'weight-management',
    verificationStatus: 'verified',
    headline: 'A Thoughtful Approach to Weight Management',
    heroSupporting:
      'Explore personalized weight-management options through professional assessment, individual goals, and thoughtful treatment planning.',
    understandingOverview: [
      'Weight management is personal. Goals, health considerations, treatment history, lifestyle, and individual circumstances can all influence the appropriate approach.',
      'A thoughtful consultation creates an opportunity to understand your goals, discuss relevant considerations, and explore options that may be appropriate for you.',
      'At Elite Aesthetics, we emphasize sustainable progress, personal health context, and professional guidance rather than standardized transformation formulas.',
      'Website information is intended for educational exploration and should not be used for self-diagnosis.',
    ],
    discoveryAreas: [
      {
        id: 'individual-goals',
        title: 'Individual Goals',
        shortDescription:
          'Discuss what you would like to achieve and what sustainable progress means to you.',
      },
      {
        id: 'health-lifestyle',
        title: 'Health & Lifestyle Context',
        shortDescription:
          'Explore relevant health, lifestyle, and treatment considerations as part of individualized planning.',
      },
      {
        id: 'medical-assessment',
        title: 'Medical Assessment',
        shortDescription:
          'Discuss appropriate assessment and suitability with the appropriate clinic professional.',
      },
      {
        id: 'treatment-options',
        title: 'Treatment Options',
        shortDescription:
          'Explore available weight-management approaches according to individual circumstances and professional guidance.',
      },
      {
        id: 'ongoing-planning',
        title: 'Ongoing Planning',
        shortDescription:
          'Discuss expectations, next steps, and appropriate follow-through as part of a personalized care plan.',
      },
    ],
    concernPathways: [
      {
        id: 'weight-management-goals',
        title: 'WEIGHT MANAGEMENT GOALS',
        description:
          'Discuss the goals you would like to explore and the type of progress that matters to you.',
      },
      {
        id: 'health-wellness',
        title: 'HEALTH & WELLNESS',
        description:
          'Consider relevant health and wellness priorities as part of individualized planning.',
      },
      {
        id: 'treatment-options',
        title: 'TREATMENT OPTIONS',
        description:
          'Explore available approaches according to suitability and professional guidance.',
      },
      {
        id: 'long-term-planning',
        title: 'LONG-TERM PLANNING',
        description:
          'Discuss realistic expectations and appropriate next steps for continued care.',
      },
    ],
    featuredTreatmentSlug: 'metabolic-consultation',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'Progress Begins With Understanding.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share your goals, priorities, expectations, and relevant background.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Professional Assessment',
        description:
          'Discuss relevant health considerations, treatment history, lifestyle factors, and suitability with the appropriate clinic professional.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Individualized Strategy',
        description:
          'Review appropriate options, expectations, and treatment considerations.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Proceed with the selected care plan after consultation and appropriate guidance.',
      },
    ],
    governanceHeading: 'Care Before Treatment',
    governanceText:
      'Medical weight-management options vary according to individual circumstances, health considerations, treatment history, suitability, and professional assessment. Information presented on this website is intended for general treatment discovery and does not replace professional medical advice.',
    treatments: [
      {
        id: 'metabolic-consultation',
        slug: 'metabolic-consultation',
        name: 'Personalized Weight Management',
        categoryId: 'medical-weight-mgmt',
        shortDescription:
          'Medical weight management may involve different approaches depending on individual circumstances, goals, health considerations, and professional assessment.',
        clinicalFocus: 'Individualized health context and collaborative care planning.',
        imageAssetKey: 'weight-management',
        verificationStatus: 'verified',
        bookingLabel: 'Book Weight Management Consultation',
        benefits: ['Individual assessment', 'Appropriate option selection', 'Realistic expectations'],
        duration: '45–60 mins',
      },
    ],
    relatedCategorySlugs: [
      'facials-skin',
      'laser-advanced',
      'injectables',
      'body-sculpting',
      'wellness-iv',
      'hair-restoration',
      'massage-relaxation',
    ],
    seoMetadata: {
      title: 'Medical Weight Management Cebu | Elite Aesthetics',
      metaDescription:
        'Explore personalized medical weight-management options at Elite Aesthetics Cebu through professional assessment, individual goals, and thoughtful treatment planning.',
    },
  },
  {
    id: 'massage-relaxation',
    slug: 'massage-relaxation',
    name: 'Massage & Relaxation',
    badge: 'Holistic Calm',
    accentColor: '#C9A77E',
    shortDescription:
      'Explore personalized massage and relaxation experiences designed around comfort, self-care, and your individual wellness preferences.',
    clinicalOverview:
      'A calming sanctuary experience centered around comfort, relaxation, and personalized self-care in an attentive environment.',
    heroAssetKey: 'massage-relaxation',
    verificationStatus: 'verified',
    headline: 'Rest, Relaxation, Thoughtfully Personalized.',
    heroSupporting:
      'Explore personalized massage and relaxation experiences designed around comfort, self-care, and your individual wellness preferences.',
    understandingOverview: [
      'Modern self-care can include simply creating intentional time to rest, recharge, and reconnect with yourself.',
      'Massage and relaxation experiences can form part of your personal routine, offering space to unwind at your own pace.',
      'At Elite Aesthetics, we emphasize personal comfort, individual preferences, and a calm atmosphere rather than standardized formulas.',
      'Website information is intended for educational exploration and should not replace professional guidance.',
    ],
    discoveryAreas: [
      {
        id: 'relaxation-unwinding',
        title: 'Relaxation & Unwinding',
        shortDescription:
          'Focus on creating time to slow down and enjoy a calm, restful experience.',
      },
      {
        id: 'personal-comfort',
        title: 'Personal Comfort',
        shortDescription:
          'Focus on communicating preferences and creating an experience aligned with individual comfort.',
      },
      {
        id: 'self-care-rituals',
        title: 'Self-Care Rituals',
        shortDescription:
          'Position massage as one possible part of a broader personal self-care routine.',
      },
      {
        id: 'rest-recharge',
        title: 'Rest & Recharge',
        shortDescription:
          'Explore a dedicated space for intentional downtime and peaceful renewal.',
      },
      {
        id: 'personalized-planning',
        title: 'Personalized Planning',
        shortDescription:
          'Discuss individual preferences and expectations before beginning your session.',
      },
    ],
    concernPathways: [
      {
        id: 'rest-relaxation',
        title: 'REST & RELAXATION',
        description:
          'Create intentional time away from daily routine in a tranquil, attentive environment.',
      },
      {
        id: 'personal-comfort-pathway',
        title: 'PERSONAL COMFORT',
        description:
          'Tailor your session according to pressure preference, focus areas, and comfort levels.',
      },
      {
        id: 'self-care-wellness',
        title: 'SELF-CARE & WELLNESS',
        description:
          'Incorporate restorative relaxation into your broader health and wellness rhythm.',
      },
      {
        id: 'personalized-planning-pathway',
        title: 'PERSONALIZED MASSAGE PLANNING',
        description:
          'Discuss individual preferences and expectations with the clinic team before your visit.',
      },
    ],
    featuredTreatmentSlug: 'restorative-massage',
    editorialImageKey: 'clinic-suite',
    editorialImageQuote: 'A Moment to Pause.',
    planningSteps: [
      {
        step: '01',
        title: 'DISCUSS',
        subtitle: 'Initial Conversation',
        description:
          'Share your personal comfort preferences, focus areas, and expectations.',
      },
      {
        step: '02',
        title: 'ASSESS',
        subtitle: 'Personal Preferences',
        description:
          'Review comfort considerations and session goals with the clinic team.',
      },
      {
        step: '03',
        title: 'PLAN',
        subtitle: 'Tailored Approach',
        description:
          'Select an experience aligned with your preferred pace and atmosphere.',
      },
      {
        step: '04',
        title: 'BEGIN',
        subtitle: 'Care Delivery',
        description:
          'Relax into your personalized session with attentive, respectful care.',
      },
    ],
    governanceHeading: 'Thoughtful Care, Clear Expectations',
    governanceText:
      'Experiences should be selected according to individual preferences and circumstances. Information presented on this website is general and does not replace professional medical advice. Clients should communicate relevant concerns or physical considerations before beginning care.',
    treatments: [
      {
        id: 'restorative-massage',
        slug: 'restorative-massage',
        name: 'Restorative Massage Experience',
        categoryId: 'massage-relaxation',
        shortDescription:
          'A personalized relaxation experience designed around comfort, calm, and intentional self-care.',
        clinicalFocus: 'Comfort, relaxation, and individual pace.',
        imageAssetKey: 'massage-relaxation',
        verificationStatus: 'verified',
        bookingLabel: 'Book Consultation',
        benefits: ['Calm atmosphere', 'Personalized pace', 'Attentive care'],
        duration: '60 mins',
      },
    ],
    relatedCategorySlugs: [
      'wellness-iv',
      'facials-skin',
      'body-sculpting',
      'medical-weight-mgmt',
    ],
    seoMetadata: {
      title: 'Massage & Relaxation Cebu | Elite Aesthetics',
      metaDescription:
        'Discover personalized massage and relaxation experiences at Elite Aesthetics Cebu, designed around comfort, self-care, and your individual wellness preferences.',
    },
  },
];

export function getCategoryBySlug(slug: string): DetailedTreatmentCategory | undefined {
  return DETAILED_TREATMENT_CATEGORIES.find((cat) => cat.slug === slug);
}

export interface TreatmentConcern {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  whatItIs: string;
  whatPeopleMayNotice: string[];
  whatMayInfluenceIt: string;
  relatedCategorySlugs: string[];
  treatmentExamples: { name: string; categoryName: string; path: string }[];
  consultationGuidance: string;
}

export const TREATMENT_CONCERNS: TreatmentConcern[] = [
  {
    id: 'skin-texture',
    title: 'Skin Texture & Clarity',
    badge: 'Surface & Pores',
    shortDescription:
      'Explore options related to pore refinement, gentle exfoliation, hydration, and skin renewal.',
    whatItIs:
      'General variations in skin surface smoothness, visible pore appearance, post-blemish marks, superficial dehydration, and overall skin luminosity.',
    whatPeopleMayNotice: [
      'Areas of roughness, uneven tactile feel, or dry flakiness',
      'Visible congestion, enlarged pores, or dull skin tone',
      'Subtle post-blemish marks or minor superficial texture irregularities',
    ],
    whatMayInfluenceIt:
      'Environmental exposure, sun damage, humidity fluctuations, individual epidermal cell turnover rates, and daily skincare habits.',
    relatedCategorySlugs: ['facials-skin', 'laser-advanced'],
    treatmentExamples: [
      { name: 'Hydrafacial Glow', categoryName: 'Facials & Skin', path: '/treatments/facials-skin' },
      { name: 'Deep Pore Cleansing Facial', categoryName: 'Facials & Skin', path: '/treatments/facials-skin' },
      { name: 'CO₂ Fractional Laser', categoryName: 'Laser & Advanced', path: '/treatments/laser-advanced' },
      { name: 'Laser Skin Toning', categoryName: 'Laser & Advanced', path: '/treatments/laser-advanced' },
    ],
    consultationGuidance:
      'A clinical evaluation helps assess your skin barrier condition, pore depth, and tolerance before selecting gentle cleansing, hydration infusion, or advanced laser resurfacing.',
  },
  {
    id: 'facial-lines',
    title: 'Facial Lines & Features',
    badge: 'Smoothing & Expression',
    shortDescription:
      'Explore options related to softening dynamic expression lines while respecting natural movement.',
    whatItIs:
      'Dynamic facial lines associated with everyday facial animation (such as forehead creases, crow’s feet, or frown lines) alongside subtle loss of superficial skin elasticity over time.',
    whatPeopleMayNotice: [
      'Lines across the forehead or between brows that deepen during expression',
      'Fine crinkles around the outer eyes when smiling or laughing',
      'Early static lines that remain faintly visible even when facial muscles are at rest',
    ],
    whatMayInfluenceIt:
      'Repetitive facial expressions, gradual reduction in collagen and elastin, cumulative sun exposure, and lifestyle factors.',
    relatedCategorySlugs: ['injectables', 'laser-advanced'],
    treatmentExamples: [
      { name: 'Botox Line Smoothing', categoryName: 'Injectables', path: '/treatments/injectables' },
      { name: 'Skin Boosters & Micro-infusions', categoryName: 'Injectables', path: '/treatments/injectables' },
      { name: 'Laser Skin Renewal', categoryName: 'Laser & Advanced', path: '/treatments/laser-advanced' },
    ],
    consultationGuidance:
      'Personalized assessment ensures that treatments soften dynamic lines while preserving genuine facial expression and natural movement.',
  },
  {
    id: 'facial-contouring',
    title: 'Facial Contouring',
    badge: 'Harmony & Definition',
    shortDescription:
      'Explore options related to mid-face volume, chin alignment, and subtle lip definition.',
    whatItIs:
      'Aesthetic balance and geometric proportion across facial landmarks, including cheek volume, jawline definition, chin projection, and natural lip symmetry.',
    whatPeopleMayNotice: [
      'Under-eye hollows or mid-face volume deflation',
      'Softer jawline contours or a recessed chin profile',
      'Asymmetrical lip proportion or subtle loss of vermilion border definition',
    ],
    whatMayInfluenceIt:
      'Natural craniofacial bone structure, age-related fat pad migration, gravity, and individual tissue elasticity.',
    relatedCategorySlugs: ['injectables', 'facials-skin'],
    treatmentExamples: [
      { name: 'Dermal Fillers (Hyaluronic Acid)', categoryName: 'Injectables', path: '/treatments/injectables' },
      { name: 'Chin & Jawline Contouring', categoryName: 'Injectables', path: '/treatments/injectables' },
      { name: 'Targeted Facial Sculpting', categoryName: 'Injectables', path: '/treatments/injectables' },
    ],
    consultationGuidance:
      'One-on-one consultation analyzes full facial symmetry and anatomical harmony, avoiding overfilling in favor of subtle, natural refinement.',
  },
  {
    id: 'body-contouring',
    title: 'Body Contouring',
    badge: 'Tone & Firmness',
    shortDescription:
      'Explore options related to non-invasive muscle activation, targeted firming, and body silhouette.',
    whatItIs:
      'Localized tissue laxity, muscle definition, and stubborn focal fullness across areas such as the abdomen, flanks, thighs, or arms that resist regular exercise.',
    whatPeopleMayNotice: [
      'Areas where skin feels less firm or shows mild localized laxity',
      'Subtle focal fullness across the midsection, love handles, or inner arms',
      'Desire for enhanced muscular tone and contour definition',
    ],
    whatMayInfluenceIt:
      'Genetic adipose distribution, hormonal balance, post-pregnancy changes, metabolic rate, and muscle conditioning.',
    relatedCategorySlugs: ['body-sculpting', 'medical-weight-mgmt'],
    treatmentExamples: [
      { name: 'Emsculpt Muscle Contouring', categoryName: 'Body Sculpting', path: '/treatments/body-sculpting' },
      { name: 'Targeted Body Tightening', categoryName: 'Body Sculpting', path: '/treatments/body-sculpting' },
      { name: 'Medical Weight Evaluation', categoryName: 'Medical Weight Mgmt', path: '/treatments/medical-weight-mgmt' },
    ],
    consultationGuidance:
      'Individual assessment determines whether non-invasive electromagnetic muscle stimulation, tissue tightening, or lifestyle guidance aligns best with your goals.',
  },
  {
    id: 'hair-scalp',
    title: 'Hair & Scalp',
    badge: 'Follicle Care',
    shortDescription:
      'Explore options related to scalp revitalization, follicular nutrition, and hair wellness protocols.',
    whatItIs:
      'Changes in hair strand density, shedding frequency, scalp microcirculation, and overall follicle vitality.',
    whatPeopleMayNotice: [
      'Noticeable hair thinning along the crown or part line',
      'Increased shedding during washing or daily brushing',
      'Dry, tight, or congested scalp environment',
    ],
    whatMayInfluenceIt:
      'Genetic predisposition, androgenic activity, nutritional deficiencies, systemic stress, and scalp circulation.',
    relatedCategorySlugs: ['hair-restoration', 'wellness-iv'],
    treatmentExamples: [
      { name: 'Autologous PRP Hair Restoration', categoryName: 'Hair Restoration', path: '/treatments/hair-restoration' },
      { name: 'Scalp Nutrition & Mesotherapy', categoryName: 'Hair Restoration', path: '/treatments/hair-restoration' },
      { name: 'Radiance & Micronutrient Infusions', categoryName: 'Wellness & IV', path: '/treatments/wellness-iv' },
    ],
    consultationGuidance:
      'Professional scalp evaluation examines shedding patterns and follicle health to recommend an appropriate in-clinic protocol.',
  },
  {
    id: 'wellness-relaxation',
    title: 'Wellness & Relaxation',
    badge: 'Rest & Infusion',
    shortDescription:
      'Explore options related to micronutrient infusions, cellular hydration, and soothing bodywork.',
    whatItIs:
      'Systemic fatigue, dehydration, high stress levels, muscle tension, and the desire for restorative personal self-care.',
    whatPeopleMayNotice: [
      'General lethargy, lack of physical vitality, or dull-looking skin',
      'Tightness and muscular soreness in neck, shoulders, or back',
      'Difficulty unwinding and recovering from a demanding schedule',
    ],
    whatMayInfluenceIt:
      'Demanding work schedules, frequent travel, sleep quality, hydration status, and micronutrient intake.',
    relatedCategorySlugs: ['wellness-iv', 'massage-relaxation'],
    treatmentExamples: [
      { name: 'Gluta Glow & Hydration Infusion', categoryName: 'Wellness & IV', path: '/treatments/wellness-iv' },
      { name: 'Immune Defense Infusion', categoryName: 'Wellness & IV', path: '/treatments/wellness-iv' },
      { name: 'Signature Therapeutic Bodywork', categoryName: 'Massage & Relaxation', path: '/treatments/massage-relaxation' },
    ],
    consultationGuidance:
      'Our wellness team reviews your hydration and lifestyle goals to guide you toward comforting bodywork or restorative nutrient drips.',
  },
];

export interface FeaturedHubTreatment {
  id: string;
  slug: string;
  name: string;
  categoryName: string;
  categorySlug: string;
  shortDescription: string;
  imageAssetKey: string;
  bookingLabel: string;
  verificationStatus: 'verified' | 'client-verification-required';
}

export const FEATURED_HUB_TREATMENTS: FeaturedHubTreatment[] = [
  {
    id: 'hydrafacial',
    slug: 'hydrafacial',
    name: 'Hydrafacial',
    categoryName: 'Facials & Skin',
    categorySlug: 'facials-skin',
    shortDescription:
      'A multi-step procedure combining gentle cleansing, pore extraction, and antioxidant hydration.',
    imageAssetKey: 'hydrafacial',
    bookingLabel: 'Book Hydrafacial',
    verificationStatus: 'verified',
  },
  {
    id: 'co2-fractional-laser',
    slug: 'co2-fractional-laser',
    name: 'CO₂ Fractional Laser',
    categoryName: 'Laser & Advanced',
    categorySlug: 'laser-advanced',
    shortDescription:
      'Micro-ablative laser technology targeting uneven skin texture, enlarged pores, and tissue renewal.',
    imageAssetKey: 'co2-fractional-laser',
    bookingLabel: 'Book Laser Consultation',
    verificationStatus: 'verified',
  },
  {
    id: 'botox',
    slug: 'botox',
    name: 'Botox',
    categoryName: 'Injectables',
    categorySlug: 'injectables',
    shortDescription:
      'Targeted neuromodulator micro-dosing designed to soften expression lines while preserving natural facial mobility.',
    imageAssetKey: 'botox',
    bookingLabel: 'Book Botox Consultation',
    verificationStatus: 'verified',
  },
  {
    id: 'dermal-fillers',
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    categoryName: 'Injectables',
    categorySlug: 'injectables',
    shortDescription:
      'Hyaluronic acid formulations utilized for structural mid-face support, jawline harmony, and lip definition.',
    imageAssetKey: 'dermal-fillers',
    bookingLabel: 'Book Filler Consultation',
    verificationStatus: 'verified',
  },
  {
    id: 'emsculpt',
    slug: 'emsculpt',
    name: 'Emsculpt',
    categoryName: 'Body Sculpting',
    categorySlug: 'body-sculpting',
    shortDescription:
      'High-intensity electromagnetic stimulation designed to activate muscle contractions and support body contouring.',
    imageAssetKey: 'emsculpt',
    bookingLabel: 'Book Emsculpt Consultation',
    verificationStatus: 'verified',
  },
  {
    id: 'prp',
    slug: 'prp',
    name: 'PRP (Platelet-Rich Plasma)',
    categoryName: 'Hair & Regenerative',
    categorySlug: 'hair-restoration',
    shortDescription:
      'Autologous platelet-rich plasma application delivering concentrated growth factors to support tissue and scalp vitality.',
    imageAssetKey: 'prp',
    bookingLabel: 'Book PRP Consultation',
    verificationStatus: 'verified',
  },
];

