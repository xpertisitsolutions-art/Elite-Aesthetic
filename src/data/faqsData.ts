/**
 * FAQ Data Architecture — Production Build
 * Elite Aesthetics Cebu
 *
 * Route: /faq
 * Strict Content Governance: Trust-Building, Zero Unsupported Medical/Pricing Claims, Quiet Luxury
 */

export type FAQCategory =
  | 'ALL'
  | 'GENERAL QUESTIONS'
  | 'CONSULTATIONS'
  | 'TREATMENTS'
  | 'PROMOTIONS & SPECIAL OFFERS'
  | 'PRICING'
  | 'BOOKING & CONTACT'
  | 'CARE & EXPECTATIONS'
  | 'MEDICAL INFORMATION'
  | 'WELLNESS & IV'
  | 'INJECTABLES'
  | 'MEDICAL WEIGHT MANAGEMENT'
  | 'RESULTS & EXPERIENCE'
  | 'PRIVACY & CLIENT IMAGES';

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  relatedLink?: {
    label: string;
    path: string;
  };
  verificationStatus: 'verified' | 'client-verification-required';
}

export const FAQS_DATA: FAQItem[] = [
  // --------------------------------------------------------------------------
  // 1. GENERAL QUESTIONS
  // --------------------------------------------------------------------------
  {
    id: 'faq-gen-1',
    category: 'GENERAL QUESTIONS',
    question: 'What is Elite Aesthetics Cebu?',
    answer:
      'Elite Aesthetics Cebu is a physician-led aesthetic, skin health, and wellness clinic located in Cebu City. We focus on thoughtful consultations, personalized treatment planning, and natural-looking care that respects individual features.',
    relatedLink: { label: 'About the Clinic', path: '/about' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-gen-2',
    category: 'GENERAL QUESTIONS',
    question: 'Where is the clinic located?',
    answer:
      'The clinic is situated at The Ridges Commercial Center along F. Cabahug Street, Kasambagan, Cebu City. Convenient commercial parking is available on-site.',
    relatedLink: { label: 'Location & Contact', path: '/contact' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-gen-3',
    category: 'GENERAL QUESTIONS',
    question: 'What types of treatments are available?',
    answer:
      'Our care spectrum encompasses facials and clinical skin health, laser renewal, targeted injectables, non-invasive body sculpting, supportive wellness and IV infusions, hair restoration, medical weight management, and therapeutic massage relaxation.',
    relatedLink: { label: 'Explore Treatments', path: '/treatments' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-gen-4',
    category: 'GENERAL QUESTIONS',
    question: 'How do I know which treatment may be appropriate for me?',
    answer:
      'Treatment selection begins with a personalized consultation. During your visit, your clinical concerns, skin characteristics, and aesthetic goals are evaluated to identify appropriate, individualized options.',
    relatedLink: { label: 'Book a Consultation', path: '/book-consultation' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-gen-5',
    category: 'GENERAL QUESTIONS',
    question: 'Can I ask questions before deciding on a treatment?',
    answer:
      'Yes. We encourage an unhurried dialogue. A thoughtful treatment decision starts with understanding your options, expected timelines, and personal suitability before committing to any procedure.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 2. CONSULTATIONS
  // --------------------------------------------------------------------------
  {
    id: 'faq-con-1',
    category: 'CONSULTATIONS',
    question: 'Why is consultation important?',
    answer:
      'A consultation provides the essential foundation for safe, effective aesthetic care. Because every person possesses unique facial anatomy, skin physiology, and wellness priorities, care plans must be tailored rather than standardized.',
    relatedLink: { label: 'Our Philosophy', path: '/about' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-con-2',
    category: 'CONSULTATIONS',
    question: 'What happens during a consultation?',
    answer:
      'Your practitioner listens to your aesthetic concerns, reviews your health background and relevant history, assesses your facial or bodily features, and discusses suitable treatment modalities, expected experiences, and aftercare considerations.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-con-3',
    category: 'CONSULTATIONS',
    question: 'Can I discuss multiple concerns during a single consultation?',
    answer:
      'Yes. Clients frequently discuss a combination of skin texture, facial contours, or body wellness goals. Your practitioner will help organize these into a logical, prioritized care pathway.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-con-4',
    category: 'CONSULTATIONS',
    question: 'Will the clinic recommend a treatment?',
    answer:
      'Your practitioner will offer considered clinical recommendations based on what is appropriate for your goals and anatomy. Recommendations are guided by suitability, realistic outcomes, and patient comfort.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-con-5',
    category: 'CONSULTATIONS',
    question: 'Can I decide not to proceed with a treatment after consultation?',
    answer:
      'Absolutely. Consultations at Elite Aesthetics are non-coercive. You are encouraged to take the time you need to reflect on the discussion and make a decision that feels entirely right for you.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 3. TREATMENTS
  // --------------------------------------------------------------------------
  {
    id: 'faq-trt-1',
    category: 'TREATMENTS',
    question: 'How do I choose between different treatment options?',
    answer:
      'Treatment choices are guided by your specific concerns, desired outcomes, comfort with downtime, and clinical evaluation. During your consultation, alternative approaches and their respective characteristics are thoroughly reviewed.',
    relatedLink: { label: 'Browse Treatments', path: '/treatments' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-trt-2',
    category: 'TREATMENTS',
    question: 'Can the same treatment be suitable for everyone?',
    answer:
      'No single aesthetic treatment is universally appropriate. Suitability depends on individual factors including skin baseline, medical history, anatomical considerations, and personal aesthetic objectives.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-trt-3',
    category: 'TREATMENTS',
    question: 'Can aesthetic treatments be combined?',
    answer:
      'Many treatment modalities complement one another—such as pairing clinical facials with targeted injectables or body contouring with wellness care. Any combination protocol is coordinated thoughtfully by your clinical team.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-trt-4',
    category: 'TREATMENTS',
    question: 'How many sessions might I need?',
    answer:
      'Session requirements vary significantly depending on the treatment type, initial condition, individual response, and personal goals. Progressive care plans and recommended intervals are discussed during consultation.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-trt-5',
    category: 'TREATMENTS',
    question: 'What should I ask before undergoing any procedure?',
    answer:
      'We suggest asking about treatment suitability, anticipated sensations, aftercare guidelines, recommended session intervals, and current pricing or package terms.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 4. PROMOTIONS & SPECIAL OFFERS
  // --------------------------------------------------------------------------
  {
    id: 'faq-prm-1',
    category: 'PROMOTIONS & SPECIAL OFFERS',
    question: 'Are promotional offers on the website currently valid?',
    answer:
      'Promotional privileges displayed on the website reflect clinic campaign artwork and seasonal offerings. Because promotional availability, campaign periods, and clinic terms change over time, we ask that you confirm current pricing and availability directly with the clinic prior to booking.',
    relatedLink: { label: 'View Promotions', path: '/promotions' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prm-2',
    category: 'PROMOTIONS & SPECIAL OFFERS',
    question: 'Where can I view current clinic campaign offerings?',
    answer:
      'You can explore our documented campaign privileges on the dedicated Promotions page, or contact our clinic team directly for the latest updates on special packages.',
    relatedLink: { label: 'Explore Special Offers', path: '/promotions' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prm-3',
    category: 'PROMOTIONS & SPECIAL OFFERS',
    question: 'Do promotional prices apply to all treatment quantities?',
    answer:
      'Promotional offers frequently correspond to specific quantities, formulations, or session packages (for instance, specific volume increments or minimum unit thresholds). Please confirm exact inclusions with the clinic team.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prm-4',
    category: 'PROMOTIONS & SPECIAL OFFERS',
    question: 'Can promotions have special eligibility conditions or terms?',
    answer:
      'Yes. Clinical suitability remains paramount; even when a promotion is active, a preliminary consultation is conducted to ensure the treatment is clinically appropriate for you.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prm-5',
    category: 'PROMOTIONS & SPECIAL OFFERS',
    question: 'What should I confirm before booking a promotional treatment?',
    answer:
      'We recommend confirming current package pricing, applicable inclusions, potential pre-treatment requirements, and expiration or campaign dates with our reception desk.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 5. PRICING
  // --------------------------------------------------------------------------
  {
    id: 'faq-prc-1',
    category: 'PRICING',
    question: 'Why are not all treatment prices listed on the website?',
    answer:
      'Aesthetic treatments are deeply individualized. The exact dosage, product formulation, technology parameters, and number of sessions differ from client to client, making a single fixed price misleading prior to professional assessment.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prc-2',
    category: 'PRICING',
    question: 'Why does treatment pricing vary between individuals?',
    answer:
      'Pricing varies according to the scope of care, the anatomical area treated, the volume or intensity required, and whether treatments are delivered as individual visits or structured care packages.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prc-3',
    category: 'PRICING',
    question: 'Where can I find documented promotional pricing?',
    answer:
      'Documented promotional rates derived from clinic campaign artwork are transparently presented on our Promotions page with clear confirmation notices.',
    relatedLink: { label: 'Promotions & Pricing', path: '/promotions' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prc-4',
    category: 'PRICING',
    question: 'What pricing information should I confirm before my appointment?',
    answer:
      'Before proceeding with treatment, your practitioner will outline the comprehensive treatment plan and associated investment so you have total clarity with no unexpected surprises.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 6. BOOKING & CONTACT
  // --------------------------------------------------------------------------
  {
    id: 'faq-bkg-1',
    category: 'BOOKING & CONTACT',
    question: 'How do I request an in-clinic consultation?',
    answer:
      'You can request an appointment online through our booking page, call us directly at 0956 783 5959, or visit us at The Ridges Commercial Center in Kasambagan, Cebu City.',
    relatedLink: { label: 'Book Online', path: '/book-consultation' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-bkg-2',
    category: 'BOOKING & CONTACT',
    question: 'How can I contact Elite Aesthetics Cebu directly?',
    answer:
      'Our team is reachable by phone at 0956 783 5959 or in person at The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City.',
    relatedLink: { label: 'Contact Us', path: '/contact' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-bkg-3',
    category: 'BOOKING & CONTACT',
    question: 'Can I ask questions before finalizing an appointment?',
    answer:
      'Yes. Our front desk team is pleased to answer questions regarding our location, treatment offerings, and the consultation process prior to scheduling your visit.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-bkg-4',
    category: 'BOOKING & CONTACT',
    question: 'What information should I share when inquiring with the clinic?',
    answer:
      'Sharing the general treatment area or concerns you wish to explore, along with your preferred appointment days or times, helps our team coordinate an unhurried visit for you.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 7. CARE & EXPECTATIONS
  // --------------------------------------------------------------------------
  {
    id: 'faq-exp-1',
    category: 'CARE & EXPECTATIONS',
    question: 'Are aesthetic treatment results the same for every person?',
    answer:
      'No. Individual experiences and outcomes can vary from person to person. Differences in tissue elasticity, healing response, lifestyle, and facial structure naturally produce individualized outcomes.',
    relatedLink: { label: 'Results & Experience', path: '/results' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-exp-2',
    category: 'CARE & EXPECTATIONS',
    question: 'Why can individual treatment experiences and outcomes vary?',
    answer:
      'Outcomes are influenced by individual features, baseline skin condition, treatment selection, customized protocol parameters, and biological response to procedural care.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-exp-3',
    category: 'CARE & EXPECTATIONS',
    question: 'What should I ask regarding pre-treatment preparation and aftercare?',
    answer:
      'Always ask your practitioner about pre-treatment skincare adjustments (such as avoiding active exfoliants) and procedural aftercare recommendations to support comfortable healing.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-exp-4',
    category: 'CARE & EXPECTATIONS',
    question: 'Can I expect a specific guaranteed outcome from an aesthetic treatment?',
    answer:
      'Elite Aesthetics does not offer guaranteed outcomes. Professional aesthetic care is grounded in considered planning, anatomical balance, and realistic expectations rather than manufactured guarantees.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-exp-5',
    category: 'CARE & EXPECTATIONS',
    question: 'What should I do if I have questions or concerns after my treatment?',
    answer:
      'If you have any questions following a procedure, contact the clinic directly at 0956 783 5959. Our clinical team provides ongoing support and guidance throughout your post-care journey.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 8. MEDICAL INFORMATION
  // --------------------------------------------------------------------------
  {
    id: 'faq-med-1',
    category: 'MEDICAL INFORMATION',
    question: 'Does the information on this website replace professional medical advice?',
    answer:
      'No. Website content is provided for informational and educational guidance only. It is not a substitute for a professional consultation, medical examination, or diagnosis by a qualified practitioner.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-med-2',
    category: 'MEDICAL INFORMATION',
    question: 'Should I disclose my health history and medications prior to care?',
    answer:
      'Yes. Disclosing medical history, allergies, current medications, recent procedures, or pregnancy is essential to ensure your treatments are calibrated safely and appropriately.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-med-3',
    category: 'MEDICAL INFORMATION',
    question: 'Can everyone receive every aesthetic treatment?',
    answer:
      'Certain medical conditions, skin characteristics, or health factors may indicate that a particular treatment is temporarily or permanently inappropriate. Your safety always comes first.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-med-4',
    category: 'MEDICAL INFORMATION',
    question: 'Why might a particular treatment not be recommended for me?',
    answer:
      'A treatment may be deferred or redirected if your clinical assessment indicates that an alternative approach would be safer, more suitable for your anatomy, or better aligned with your aesthetic goals.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 9. WELLNESS & IV
  // --------------------------------------------------------------------------
  {
    id: 'faq-wiv-1',
    category: 'WELLNESS & IV',
    question: 'What wellness and IV infusion options are available at the clinic?',
    answer:
      'Our wellness suite offers restorative micronutrient IV infusions—such as Glutathione and Immune wellness formulations—administered in quiet, comfortable clinical treatment rooms.',
    relatedLink: { label: 'Wellness & IV Suites', path: '/treatments/wellness-iv' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-wiv-2',
    category: 'WELLNESS & IV',
    question: 'How do I know which wellness or infusion option is appropriate for me?',
    answer:
      'Suitability depends on your hydration baseline, lifestyle demands, and health background, which are reviewed by our clinical staff before any infusion therapy is administered.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-wiv-3',
    category: 'WELLNESS & IV',
    question: 'Should I disclose underlying health considerations prior to IV infusions?',
    answer:
      'Yes. Reviewing cardiovascular, kidney, or metabolic history ensures that IV hydration and micronutrient supplementation are safe and suitable for your body.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-wiv-4',
    category: 'WELLNESS & IV',
    question: 'Are IV wellness therapies suitable for everyone?',
    answer:
      'While many individuals enjoy wellness infusions, specific medical conditions may require pre-clearance or make IV therapy inadvisable. Suitability is evaluated individually during consultation.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 10. INJECTABLES
  // --------------------------------------------------------------------------
  {
    id: 'faq-inj-1',
    category: 'INJECTABLES',
    question: 'What are injectable aesthetic treatments?',
    answer:
      'Injectable treatments refer to minimally invasive clinical procedures—such as neurotoxin smoothing (Botox) and dermal fillers—used to soften expression lines, restore volume, and balance facial contours.',
    relatedLink: { label: 'Injectables Care', path: '/treatments/injectables' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-inj-2',
    category: 'INJECTABLES',
    question: 'What aesthetic concerns can injectable treatments address?',
    answer:
      'Injectables commonly address dynamic forehead lines, frown lines, crow’s feet, under-eye hollowing, midface volume loss, and lip or jawline definition.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-inj-3',
    category: 'INJECTABLES',
    question: 'Why is a consultation essential prior to receiving injectable treatments?',
    answer:
      'Precise anatomical assessment is critical for injectables. Your clinician evaluates muscle movement patterns, tissue depth, and facial balance to craft a natural-looking, individualized treatment plan.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-inj-4',
    category: 'INJECTABLES',
    question: 'Are Botox and dermal fillers the same type of treatment?',
    answer:
      'No. Botox relaxes specific muscle groups to soften expression-related wrinkles, whereas dermal fillers use gel formulations to restore lost volume or sculpt facial contours. Both are often coordinated for holistic facial balance.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-inj-5',
    category: 'INJECTABLES',
    question: 'Can injectable treatments be personalized to natural facial expressions?',
    answer:
      'Yes. Our philosophy centers on refinement rather than reinvention. Injectables are administered with conservative placement to maintain your authentic expressions and natural movement.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 11. MEDICAL WEIGHT MANAGEMENT
  // --------------------------------------------------------------------------
  {
    id: 'faq-mwm-1',
    category: 'MEDICAL WEIGHT MANAGEMENT',
    question: 'What does medical weight management mean at Elite Aesthetics?',
    answer:
      'Medical weight management involves a comprehensive, physician-guided approach that evaluates metabolic health, lifestyle factors, body composition, and sustainable wellness pathways.',
    relatedLink: { label: 'Weight Management', path: '/treatments/medical-weight-mgmt' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-mwm-2',
    category: 'MEDICAL WEIGHT MANAGEMENT',
    question: 'Is medical weight management personalized to each individual?',
    answer:
      'Yes. Weight management programs are individually tailored based on baseline health assessment, personal wellness goals, lifestyle considerations, and medical history.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-mwm-3',
    category: 'MEDICAL WEIGHT MANAGEMENT',
    question: 'Are medications automatically prescribed for weight management?',
    answer:
      'No. Clinical interventions or medications are considered only after thorough physician evaluation and if determined to be clinically appropriate for your specific health profile.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-mwm-4',
    category: 'MEDICAL WEIGHT MANAGEMENT',
    question: 'Why is professional assessment essential for weight management care?',
    answer:
      'Professional supervision ensures that weight management strategies prioritize long-term metabolic health, nutritional support, and safety rather than rapid, unsustainable fixes.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 12. RESULTS & EXPERIENCE
  // --------------------------------------------------------------------------
  {
    id: 'faq-res-1',
    category: 'RESULTS & EXPERIENCE',
    question: 'Why do aesthetic results vary from person to person?',
    answer:
      'Outcomes vary because of four core principles: Individual Features (unique anatomy and skin characteristics), Treatment Selection (approaches matched to specific concerns), Personalized Planning (parameters tailored to individual goals), and Individual Response (biological variation in healing and response).',
    relatedLink: { label: 'Results Philosophy', path: '/results' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-res-2',
    category: 'RESULTS & EXPERIENCE',
    question: 'Does everyone respond to aesthetic procedures in the same way?',
    answer:
      'No. Healing timelines, degree of collagen stimulation, and product longevity vary based on age, genetics, metabolism, and lifestyle factors.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-res-3',
    category: 'RESULTS & EXPERIENCE',
    question: 'Does Elite Aesthetics guarantee specific treatment outcomes?',
    answer:
      'No. In accordance with medical ethics and honest clinical standards, we do not offer guaranteed outcomes. We focus on rigorous assessment and personalized care to achieve the best realistic results.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-res-4',
    category: 'RESULTS & EXPERIENCE',
    question: 'Where can I explore authentic in-clinic imagery and environments?',
    answer:
      'You can view our verified clinical suites, procedure settings, and consultation environments on our Results & Experience page.',
    relatedLink: { label: 'View Experience Gallery', path: '/results' },
    verificationStatus: 'verified',
  },
  {
    id: 'faq-res-5',
    category: 'RESULTS & EXPERIENCE',
    question: 'Can I use website photographs to predict my personal treatment result?',
    answer:
      'Website images provide an authentic look into our clinic and procedural setting, but they should not be interpreted as a guarantee or direct prediction of your individual outcome.',
    verificationStatus: 'verified',
  },

  // --------------------------------------------------------------------------
  // 13. PRIVACY & CLIENT IMAGES
  // --------------------------------------------------------------------------
  {
    id: 'faq-prv-1',
    category: 'PRIVACY & CLIENT IMAGES',
    question: 'How are client photographs and clinical documentation handled?',
    answer:
      'Clinical photography taken during consultations or treatment tracking is treated as strictly confidential medical documentation stored securely in accordance with patient privacy standards.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prv-2',
    category: 'PRIVACY & CLIENT IMAGES',
    question: 'Can before-and-after photographs be published on the website?',
    answer:
      'Future before-and-after cases will be published only when backed by formal, informed client consent, documented treatment context, and appropriate disclosures.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prv-3',
    category: 'PRIVACY & CLIENT IMAGES',
    question: 'Why is documented consent important for identifiable clinical images?',
    answer:
      'We place client privacy and autonomy first. Identifiable clinical images belong to the patient, and no image is shared publicly without explicit, voluntary authorization.',
    verificationStatus: 'verified',
  },
  {
    id: 'faq-prv-4',
    category: 'PRIVACY & CLIENT IMAGES',
    question: 'Can client imagery be published without explicit permission?',
    answer:
      'No. Elite Aesthetics Cebu strictly adheres to confidentiality ethics. We never publish patient imagery without verified, documented client consent.',
    verificationStatus: 'verified',
  },
];
