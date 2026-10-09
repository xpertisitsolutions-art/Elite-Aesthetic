export interface TreatmentCategory {
  id: string;
  name: string;
  description: string;
  badge: string;
  accentColor: string;
  popularTreatments: string[];
}

export interface FeaturedTreatment {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  duration: string;
  recommendedFor: string;
}

export interface ClinicPillar {
  title: string;
  subtitle: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "Elite Aesthetics - Cebu",
  shortName: "Elite Aesthetics",
  tagline: "Beauty Beyond Imperfection",
  headlineSupporting: "Aesthetic & Wellness Clinic · Cebu City",
  heroSupportingCopy:
    "Personalized aesthetic care and thoughtful consultations in Cebu City. Discover treatments tailored to your individual features and confidence.",
  location: {
    venue: "The Ridges Commercial Center",
    street: "F. Cabahug Street",
    area: "Kasambagan, Cebu City",
    country: "Philippines",
    fullAddress:
      "The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City, Philippines",
    mapsUrl:
      "https://maps.google.com/?q=The+Ridges+Commercial+Center+F+Cabahug+Street+Kasambagan+Cebu+City",
  },
  phone: "0956 783 5959",
  phoneFormatted: "+63 956 783 5959",
  email: "eliteaesthetics.cebu@gmail.com",
  socials: {
    facebook: {
      name: "Elite Aesthetics - Cebu",
      url: "https://www.facebook.com/search/top?q=Elite%20Aesthetics%20-%20Cebu",
      handle: "Elite Aesthetics - Cebu",
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/EliteAesthetics",
      handle: "@EliteAesthetics",
    },
  },
};

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: "facials-skin",
    name: "Facials & Skin",
    description: "Deep cleansing, hydration, and restorative skincare facials designed to support skin clarity and a fresh, refreshed glow.",
    badge: "Skincare",
    accentColor: "#C9A77E",
    popularTreatments: ["Hydrafacial Glow", "Deep Pore Cleansing", "Skin Infusion"],
  },
  {
    id: "laser-advanced",
    name: "Laser & Advanced Treatments",
    description: "Targeted skin texture care and skin renewal treatments utilizing modern aesthetic laser technology.",
    badge: "Aesthetic Tech",
    accentColor: "#B89358",
    popularTreatments: ["CO₂ Fractional Laser", "Laser Toning", "Skin Renewal"],
  },
  {
    id: "injectables",
    name: "Injectables",
    description: "Targeted facial contouring, line smoothing, and personalized treatments tailored to your facial features.",
    badge: "Targeted Care",
    accentColor: "#A17C44",
    popularTreatments: ["Botox Smoothing", "Dermal Fillers", "Skin Boosters"],
  },
  {
    id: "body-sculpting",
    name: "Body Sculpting",
    description: "Non-invasive body contouring treatments designed to help tone, define, and firm targeted areas.",
    badge: "Body Contouring",
    accentColor: "#9E7A42",
    popularTreatments: ["Emsculpt Contouring", "Body Tightening", "Targeted Firming"],
  },
  {
    id: "wellness-iv",
    name: "Wellness & IV Therapy",
    description: "Nutrient infusions and supportive wellness drips designed to promote vitality and hydration.",
    badge: "Wellness Drips",
    accentColor: "#C9A77E",
    popularTreatments: ["Gluta Glow Infusion", "Immune Defense Drip", "Radiance Cocktails"],
  },
  {
    id: "hair-restoration",
    name: "Hair Restoration",
    description: "Targeted scalp therapies and care protocols designed to support hair and scalp vitality.",
    badge: "Scalp Care",
    accentColor: "#B89358",
    popularTreatments: ["Scalp PRP Therapy", "Follicle Revitalizing", "Scalp Care Protocol"],
  },
  {
    id: "weight-management",
    name: "Medical Weight Management",
    description: "Personalized wellness consultations and lifestyle-oriented programs focused on health, vitality, and body contour.",
    badge: "Wellness",
    accentColor: "#826035",
    popularTreatments: ["Wellness Consultation", "Body Composition Check", "Targeted Programs"],
  },
  {
    id: "massage-relaxation",
    name: "Massage & Relaxation",
    description: "Therapeutic bodywork and soothing relaxation sessions designed to ease muscle tension and encourage rest.",
    badge: "Holistic Calm",
    accentColor: "#C9A77E",
    popularTreatments: ["Deep Tissue Session", "Aromatherapy Relaxation", "Lymphatic Drainage"],
  },
];

export const FEATURED_TREATMENTS: FeaturedTreatment[] = [
  {
    id: "hydrafacial",
    name: "Hydrafacial",
    category: "Facials & Skin",
    description:
      "A multi-step treatment that gently cleanses, exfoliates, extracts impurities, and hydrates the skin with nourishing serums.",
    benefits: [
      "Designed for deep pore cleansing and exfoliation",
      "Hydrates and refreshes skin appearance",
      "Non-invasive with no required downtime",
    ],
    duration: "45–60 mins",
    recommendedFor: "Dull-looking skin, congested pores, uneven texture, pre-event care",
  },
  {
    id: "co2-fractional-laser",
    name: "CO₂ Fractional Laser",
    category: "Laser & Advanced Treatments",
    description:
      "Micro-ablative laser technology designed to address uneven skin texture, fine lines, and support skin renewal over time.",
    benefits: [
      "Designed to address uneven skin texture and scarring",
      "Commonly used to refine the appearance of enlarged pores",
      "Supports skin renewal and smoother skin tone",
    ],
    duration: "60 mins (including preparation)",
    recommendedFor: "Uneven skin texture, fine lines, and skin renewal options discussed during consultation",
  },
  {
    id: "botox",
    name: "Botox",
    category: "Injectables",
    description:
      "Targeted neuromodulator treatments commonly used to soften the appearance of expression lines, crow's feet, and forehead lines while maintaining natural facial movement.",
    benefits: [
      "Softens the appearance of dynamic expression lines",
      "Maintains natural facial expression",
      "Treatment plan customized during consultation",
    ],
    duration: "20–30 mins",
    recommendedFor: "Forehead lines, glabellar lines, crow's feet, masseter concerns",
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    category: "Injectables",
    description:
      "Hyaluronic acid dermal fillers commonly used to enhance facial contours, support volume in selected areas, and define lip shape with balanced proportions.",
    benefits: [
      "Supports facial volume and contour in targeted areas",
      "Commonly used for jawline, cheek, or lip definition",
      "Personalized placement planned during consultation",
    ],
    duration: "30–45 mins",
    recommendedFor: "Mid-face volume, nasolabial folds, lip symmetry, contour support",
  },
  {
    id: "emsculpt",
    name: "Emsculpt",
    category: "Body Sculpting",
    description:
      "High-Intensity Focused Electromagnetic (HIFEM) technology designed to stimulate muscle contractions and support body toning in targeted areas.",
    benefits: [
      "Designed for abdominal and gluteal toning",
      "Non-invasive procedure with no downtime",
      "Custom session schedule planned during consultation",
    ],
    duration: "30 mins per session",
    recommendedFor: "Abdominal toning, gluteal firming, contour support",
  },
  {
    id: "prp",
    name: "PRP (Platelet-Rich Plasma)",
    category: "Regenerative & Hair",
    description:
      "Autologous platelet-rich plasma treatments commonly used to support skin revitalization and scalp follicle care.",
    benefits: [
      "Utilizes your own plasma components",
      "Commonly used for skin revitalization",
      "Supports scalp and hair care protocols",
    ],
    duration: "45–60 mins",
    recommendedFor: "Skin texture revitalization and scalp care options discussed during consultation",
  },
];

export const CLINIC_PILLARS: ClinicPillar[] = [
  {
    title: "Personalized Care",
    subtitle: "Individual Aesthetic Journey",
    description: "Every treatment plan is thoughtfully crafted around your unique skin profile, features, and individual wellness aspirations.",
  },
  {
    title: "Advanced Treatments",
    subtitle: "Modern Aesthetic Technology",
    description: "A comprehensive menu of modern aesthetic, laser, injectable, and wellness services calibrated to elevated standards.",
  },
  {
    title: "Premium Experience",
    subtitle: "Tranquil Clinic Sanctuary",
    description: "A serene, comfortable clinic environment at The Ridges Commercial Center designed for discretion, relaxation, and ease.",
  },
  {
    title: "Personalized Consultation",
    subtitle: "Tailored Aesthetic Plans",
    description: "Care and treatment recommendations tailored to your individual goals.",
  },
];

export const REAL_RESULTS_CASES = [
  {
    id: "result-1",
    treatment: "Hydrafacial & Skincare Protocol",
    timeframe: "Results observed after personalized protocol",
    focus: "Pore cleansing, skin hydration, and refreshed clarity",
    disclaimer: "Individual results vary depending on skin condition and custom plan.",
  },
  {
    id: "result-2",
    treatment: "Facial Contouring Consultation",
    timeframe: "Results observed after tailored aesthetic care",
    focus: "Subtle facial harmony, softened expression lines, and natural contour",
    disclaimer: "Individual results vary depending on anatomical features and clinical assessment.",
  },
];

export const CLINIC_FAQS = [
  {
    question: "Where is Elite Aesthetics located in Cebu?",
    answer:
      "We are conveniently situated at The Ridges Commercial Center along F. Cabahug Street in Kasambagan, Cebu City, Philippines. There is accessible parking and a comfortable, private clinic entrance.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can tap the 'BOOK AN APPOINTMENT' button anywhere on our website, call our direct line at 0956 783 5959, send an email to eliteaesthetics.cebu@gmail.com, or reach out through our official Facebook and Instagram pages.",
  },
  {
    question: "Is a consultation recommended before treatment?",
    answer:
      "Yes. We believe in personalized, attentive care. We conduct a thorough aesthetic assessment before any procedure to recommend the most suitable treatments for your unique goals.",
  },
  {
    question: "What makes Elite Aesthetics different from standard beauty salons?",
    answer:
      "Elite Aesthetics offers a dedicated aesthetic and wellness environment at The Ridges Commercial Center. Our treatments feature modern aesthetic technologies (such as CO₂ Fractional Laser, Hydrafacial, and Emsculpt), attentive care protocols, and a refined, comfortable clinic sanctuary setting.",
  },
];
