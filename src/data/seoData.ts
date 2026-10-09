/**
 * SEO Metadata System
 * Elite Aesthetics Cebu
 *
 * NOTE: Production domain is CLIENT VERIFICATION REQUIRED.
 * Canonical routes are stored as relative paths during development.
 */

export interface PageMetadata {
  title: string;
  metaDescription: string;
  canonicalPath: string;
  robots: 'index, follow' | 'noindex, follow';
}

export const ROUTE_METADATA: Record<string, PageMetadata> = {
  '/': {
    title: 'Elite Aesthetics Cebu | Aesthetic Clinic in Cebu City',
    metaDescription:
      'Elite Aesthetics Cebu is an aesthetic and wellness clinic in Cebu City, Philippines. Explore personalized aesthetic treatments and schedule your consultation at The Ridges Commercial Center.',
    canonicalPath: '/',
    robots: 'index, follow',
  },
  '/about': {
    title: 'About Elite Aesthetics Cebu | Philosophy & Personalized Care',
    metaDescription:
      'Learn about Elite Aesthetics Cebu, our Beauty Beyond Imperfection philosophy, personalized consultation approach, and welcoming clinic environment at The Ridges.',
    canonicalPath: '/about',
    robots: 'index, follow',
  },
  '/treatments': {
    title: 'Aesthetic Treatments Cebu | Elite Aesthetics Service Hub',
    metaDescription:
      'Explore aesthetic and wellness treatment categories at Elite Aesthetics Cebu, with personalized consultation and treatment planning at The Ridges Commercial Center.',
    canonicalPath: '/treatments',
    robots: 'index, follow',
  },
  '/treatments/facials-skin': {
    title: 'Facials & Skin Treatments Cebu | Elite Aesthetics',
    metaDescription:
      'Explore facial and skin-focused treatments at Elite Aesthetics Cebu, with personalized consultation and thoughtful treatment planning at The Ridges Commercial Center.',
    canonicalPath: '/treatments/facials-skin',
    robots: 'index, follow',
  },
  '/treatments/laser-advanced': {
    title: 'Laser & Advanced Treatments Cebu | Elite Aesthetics',
    metaDescription:
      'Explore laser and advanced skin-focused treatments at Elite Aesthetics Cebu, with personalized consultation and thoughtful treatment planning at The Ridges Commercial Center.',
    canonicalPath: '/treatments/laser-advanced',
    robots: 'index, follow',
  },
  '/treatments/injectables': {
    title: 'Injectable Treatments Cebu | Elite Aesthetics',
    metaDescription:
      'Explore personalized injectable treatments at Elite Aesthetics Cebu, including facial contouring, line-smoothing, and volume-focused options discussed through consultation.',
    canonicalPath: '/treatments/injectables',
    robots: 'index, follow',
  },
  '/treatments/body-sculpting': {
    title: 'Body Sculpting Cebu | Elite Aesthetics',
    metaDescription:
      'Explore personalized body-contouring options at Elite Aesthetics Cebu through consultation, individual assessment, and thoughtful treatment planning.',
    canonicalPath: '/treatments/body-sculpting',
    robots: 'index, follow',
  },
  '/treatments/wellness-iv': {
    title: 'Wellness & IV Cebu | Elite Aesthetics',
    metaDescription:
      'Explore personalized wellness and IV options at Elite Aesthetics Cebu through consultation, individual assessment, and thoughtful treatment planning.',
    canonicalPath: '/treatments/wellness-iv',
    robots: 'index, follow',
  },
  '/treatments/hair-restoration': {
    title: 'Hair Restoration Cebu | Elite Aesthetics',
    metaDescription:
      'Explore personalized hair and scalp treatment options at Elite Aesthetics Cebu through consultation, individual assessment, and thoughtful treatment planning.',
    canonicalPath: '/treatments/hair-restoration',
    robots: 'index, follow',
  },
  '/treatments/medical-weight-mgmt': {
    title: 'Medical Weight Management Cebu | Elite Aesthetics',
    metaDescription:
      'Explore personalized medical weight-management options at Elite Aesthetics Cebu through professional assessment, individual goals, and thoughtful treatment planning.',
    canonicalPath: '/treatments/medical-weight-mgmt',
    robots: 'index, follow',
  },
  '/treatments/massage-relaxation': {
    title: 'Massage & Relaxation Cebu | Elite Aesthetics',
    metaDescription:
      'Discover personalized massage and relaxation experiences at Elite Aesthetics Cebu, designed around comfort, self-care, and your individual wellness preferences.',
    canonicalPath: '/treatments/massage-relaxation',
    robots: 'index, follow',
  },
  '/promotions': {
    title: 'Elite Aesthetics Cebu Promotions | Special Offers & Packages',
    metaDescription:
      'Explore promotional offers and selected treatment packages from Elite Aesthetics Cebu. Contact the clinic to confirm current availability, pricing, and campaign details.',
    canonicalPath: '/promotions',
    robots: 'index, follow',
  },
  '/results': {
    title: 'Aesthetic Results & Experience Cebu | Elite Aesthetics',
    metaDescription:
      'Explore authentic treatment and clinic imagery from Elite Aesthetics Cebu and discover a personalized approach to aesthetic care, consultation, and individual treatment planning.',
    canonicalPath: '/results',
    robots: 'index, follow',
  },
  '/faq': {
    title: 'Frequently Asked Questions | Elite Aesthetics Cebu',
    metaDescription:
      'Find answers about consultations, treatments, pricing, promotions, booking, expectations, wellness, injectables, and personalized aesthetic care at Elite Aesthetics Cebu.',
    canonicalPath: '/faq',
    robots: 'index, follow',
  },
  '/client-experiences': {
    title: 'Client Experiences | Elite Aesthetics Cebu',
    metaDescription:
      'Explore client experiences at Elite Aesthetics Cebu and discover how thoughtful care, personal attention, and a welcoming clinic environment shape the experience.',
    canonicalPath: '/client-experiences',
    robots: 'index, follow',
  },
  '/contact': {
    title: 'Contact Elite Aesthetics Cebu | Get in Touch',
    metaDescription:
      'Contact Elite Aesthetics Cebu at The Ridges Commercial Center in Cebu City. Ask questions, explore treatment options, or request a consultation.',
    canonicalPath: '/contact',
    robots: 'index, follow',
  },
  '/book-consultation': {
    title: 'Book a Consultation | Elite Aesthetics Cebu',
    metaDescription:
      'Request a consultation with Elite Aesthetics Cebu to discuss your goals, explore treatment options, and understand what may be appropriate for you.',
    canonicalPath: '/book-consultation',
    robots: 'index, follow',
  },
};

/**
 * Update document title and description dynamically on client route transition
 */
export function applyPageMetadata(pathname: string): void {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const meta = ROUTE_METADATA[normalized];

  if (meta) {
    document.title = meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.metaDescription);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.metaDescription);
    }
  } else if (normalized.startsWith('/treatments/')) {
    // Dynamic category handling
    document.title = 'Treatment Protocol | Elite Aesthetics Cebu';
  } else {
    document.title = 'Page Not Found | Elite Aesthetics Cebu';
  }
}
