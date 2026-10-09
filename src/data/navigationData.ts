/**
 * Navigation Data Single Source of Truth
 * Elite Aesthetics Cebu
 */

export interface NavItem {
  label: string;
  path: string;
  id?: string;
  isPrimaryAction?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', id: 'top' },
  { label: 'About', path: '/about', id: 'about' },
  { label: 'Treatments', path: '/treatments', id: 'treatments' },
  { label: 'Experiences', path: '/client-experiences' },
  { label: 'Promotions', path: '/promotions' },
  { label: 'Results', path: '/results', id: 'results' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact', id: 'contact' },
];

export const TREATMENT_CATEGORY_NAV_ITEMS: { name: string; slug: string; path: string; categoryId: string }[] = [
  { name: 'Facials & Skin', slug: 'facials-skin', path: '/treatments/facials-skin', categoryId: 'facials-skin' },
  { name: 'Laser & Advanced Treatments', slug: 'laser-advanced', path: '/treatments/laser-advanced', categoryId: 'laser-advanced' },
  { name: 'Injectables', slug: 'injectables', path: '/treatments/injectables', categoryId: 'injectables' },
  { name: 'Body Sculpting', slug: 'body-sculpting', path: '/treatments/body-sculpting', categoryId: 'body-sculpting' },
  { name: 'Wellness & IV Therapy', slug: 'wellness-iv', path: '/treatments/wellness-iv', categoryId: 'wellness-iv' },
  { name: 'Hair Restoration', slug: 'hair-restoration', path: '/treatments/hair-restoration', categoryId: 'hair-restoration' },
  { name: 'Medical Weight Management', slug: 'medical-weight-mgmt', path: '/treatments/medical-weight-mgmt', categoryId: 'weight-management' },
  { name: 'Massage & Relaxation', slug: 'massage-relaxation', path: '/treatments/massage-relaxation', categoryId: 'massage-relaxation' },
];

export const FOOTER_NAV_COLUMNS = {
  explore: [
    { label: 'Home', path: '/' },
    { label: 'About Elite Aesthetics', path: '/about' },
    { label: 'Treatment Hub', path: '/treatments' },
    { label: 'Client Experiences', path: '/client-experiences' },
    { label: 'Current Promotions', path: '/promotions' },
    { label: 'Clinical Results', path: '/results' },
    { label: 'Patient FAQ', path: '/faq' },
    { label: 'Contact & Location', path: '/contact' },
  ],
  treatments: TREATMENT_CATEGORY_NAV_ITEMS.map((item) => ({
    label: item.name,
    path: item.path,
  })),
  legal: [
    { label: 'Privacy Policy', path: '#', verificationStatus: 'client-verification-required' },
    { label: 'Terms of Service', path: '#', verificationStatus: 'client-verification-required' },
    { label: 'Medical Treatment Disclaimer', path: '#', verificationStatus: 'client-verification-required' },
  ],
};

/**
 * Helper to build breadcrumb trails based on route path
 */
export function getBreadcrumbsForPath(pathname: string): BreadcrumbItem[] {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  
  if (normalized === '/') {
    return [];
  }

  const items: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

  if (normalized === '/about') {
    items.push({ label: 'About', path: '/about' });
  } else if (normalized === '/team') {
    items.push({ label: 'About', path: '/about' }, { label: 'Meet the Team', path: '/team' });
  } else if (normalized === '/treatments') {
    items.push({ label: 'Treatments', path: '/treatments' });
  } else if (normalized.startsWith('/treatments/')) {
    items.push({ label: 'Treatments', path: '/treatments' });
    const slug = normalized.replace('/treatments/', '');
    const matchedCategory = TREATMENT_CATEGORY_NAV_ITEMS.find((c) => c.slug === slug);
    if (matchedCategory) {
      items.push({ label: matchedCategory.name, path: matchedCategory.path });
    } else {
      items.push({ label: slug, path: normalized });
    }
  } else if (normalized === '/promotions') {
    items.push({ label: 'Promotions', path: '/promotions' });
  } else if (normalized === '/results') {
    items.push({ label: 'Results', path: '/results' });
  } else if (normalized === '/faq') {
    items.push({ label: 'FAQ', path: '/faq' });
  } else if (normalized === '/client-experiences') {
    items.push({ label: 'Client Experiences', path: '/client-experiences' });
  } else if (normalized === '/contact') {
    items.push({ label: 'Contact', path: '/contact' });
  } else if (normalized === '/book-consultation') {
    items.push({ label: 'Book Consultation', path: '/book-consultation' });
  } else {
    items.push({ label: 'Page', path: normalized });
  }

  return items;
}
