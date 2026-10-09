import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TREATMENT_CATEGORY_NAV_ITEMS } from '../data/navigationData';
import { EliteAestheticsLogo } from './EliteAestheticsLogo';
import { useRouter } from '../router/Router';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenBooking: () => void;
  onOpenPromotionModal: () => void;
  onOpenFaqModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenBooking,
  onOpenPromotionModal,
  onOpenFaqModal,
}) => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#1D1815] text-[#E8D8C3] pt-16 pb-28 md:pb-16 border-t border-[#3C332D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 pb-12 border-b border-[#3C332D]">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 min-w-0">
            <div className="mb-4 max-w-full">
              <EliteAestheticsLogo
                variant="horizontal"
                theme="light"
                size="lg"
                showTagline={false}
              />
            </div>

            <p className="font-serif text-base sm:text-lg italic text-[#C9A77E] mb-3 sm:mb-4">
              &ldquo;{CLINIC_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-[#BFA68E] max-w-full lg:max-w-[300px] xl:max-w-sm leading-relaxed mb-6">
              A luxury aesthetic and wellness clinic located at The Ridges Commercial Center in
              Kasambagan, Cebu City. Providing personalized aesthetic care in an elegant sanctuary
              setting.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href={CLINIC_INFO.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#29221E] hover:bg-[#3C332D] border border-[#B89358]/30 text-xs text-[#E8D8C3] hover:text-white transition-colors min-w-0 max-w-full"
                aria-label="Facebook Page for Elite Aesthetics Cebu"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#C9A77E] shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="truncate">{CLINIC_INFO.socials.facebook.handle}</span>
              </a>

              <a
                href={CLINIC_INFO.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#29221E] hover:bg-[#3C332D] border border-[#B89358]/30 text-xs text-[#E8D8C3] hover:text-white transition-colors min-w-0 max-w-full"
                aria-label="Instagram Profile for Elite Aesthetics"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#C9A77E] shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="truncate">{CLINIC_INFO.socials.instagram.handle}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column (2 cols) */}
          <div className="lg:col-span-2 min-w-0">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A77E] font-medium mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8D8C3]">
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="hover:text-white transition-colors focus:outline-none text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className="hover:text-white transition-colors focus:outline-none text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/treatments')}
                  className="hover:text-white transition-colors focus:outline-none text-left"
                >
                  Treatments Hub
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/promotions')}
                  className="hover:text-white transition-colors focus:outline-none text-left"
                >
                  Promotions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/results')}
                  className="hover:text-white transition-colors focus:outline-none text-left"
                >
                  Results
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/faq')}
                  className="hover:text-white transition-colors focus:outline-none text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="hover:text-white transition-colors focus:outline-none text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Treatment Category Links Column (3 cols) */}
          <div className="lg:col-span-3 min-w-0">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A77E] font-medium mb-4">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-[#BFA68E]">
              {TREATMENT_CATEGORY_NAV_ITEMS.map((cat) => (
                <li key={cat.slug}>
                  <button
                    type="button"
                    onClick={() => navigate(cat.path)}
                    className="hover:text-white transition-colors text-left focus:outline-none max-w-full block leading-snug"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (3 cols) */}
          <div className="lg:col-span-3 min-w-0">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C9A77E] font-medium mb-4">
              Clinic Contact
            </h4>
            <div className="space-y-3.5 text-xs text-[#BFA68E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A77E] shrink-0 mt-0.5" />
                <span>
                  The Ridges Commercial Center, F. Cabahug Street, Kasambagan, Cebu City, Philippines
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A77E] shrink-0" />
                <a
                  href="tel:+639567835959"
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A77E] shrink-0" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C9A77E] hover:text-white transition-colors border-b border-[#C9A77E]/50 pb-0.5 focus:outline-none"
                >
                  Book Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Verified Legal Placeholders */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C7667]">
          <p>© 2026 Elite Aesthetics - Cebu. All rights reserved.</p>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-[#BFA68E] cursor-default" title="Client Verification Required">
              Privacy Policy
            </span>
            <span>·</span>
            <span className="hover:text-[#BFA68E] cursor-default" title="Client Verification Required">
              Terms of Care
            </span>
            <span>·</span>
            <span className="hover:text-[#BFA68E] cursor-default" title="Client Verification Required">
              Medical Disclaimer
            </span>
          </div>

          <p className="font-serif italic text-[#C9A77E]/80">
            Beauty Beyond Imperfection
          </p>
        </div>
      </div>
    </footer>
  );
};
