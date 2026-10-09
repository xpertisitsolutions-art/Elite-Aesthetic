import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { EliteAestheticsLogo } from './EliteAestheticsLogo';
import { useRouter } from '../router/Router';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onOpenPromotionModal?: () => void;
  onOpenFaqModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
}) => {
  const { navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Treatments', path: '/treatments' },
    { label: 'About', path: '/about' },
    { label: 'Experiences', path: '/client-experiences' },
    { label: 'Results', path: '/results' },
    { label: 'Promotions', path: '/promotions' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD3]/80 shadow-[0_4px_20px_-4px_rgba(38,32,28,0.06)] py-2.5'
          : 'bg-[#FAF7F2] border-b border-[#E7DFD3]/50 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-12 w-full gap-2">
          {/* Zone 1: Real Elite Aesthetics Logo Mark with EA Emblem */}
          <div className="flex items-center shrink-0 mr-6 lg:mr-8 xl:mr-12 2xl:mr-16">
            <button
              type="button"
              onClick={() => handleLinkClick('/')}
              className="group flex items-center focus:outline-none cursor-pointer"
              aria-label="Elite Aesthetics Cebu Home"
            >
              <EliteAestheticsLogo
                variant="horizontal"
                theme="dark"
                size="md"
                className="transition-transform group-hover:scale-[1.01]"
              />
            </button>
          </div>

          {/* Zone 2: Desktop clean text navigation links (xl+) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center space-x-5 2xl:space-x-8 text-[13px] tracking-wide font-medium text-[#3C332D]"
          >
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleLinkClick(item.path)}
                className="hover:text-[#B89358] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89358] cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions (Responsive CTA + Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto xl:ml-6">
            {/* Desktop Direct Phone Link */}
            <a
              href="tel:+639567835959"
              className="hidden 2xl:inline-flex items-center gap-2 text-xs font-medium text-[#3C332D] hover:text-[#B89358] transition-colors px-2 py-1.5 focus:outline-none"
              title="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89358]" />
              <span className="whitespace-nowrap">{CLINIC_INFO.phone}</span>
            </a>

            {/* Desktop Full BOOK CONSULTATION Button (md+) */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-gradient-to-r from-[#29221E] via-[#382E28] to-[#241D18] hover:from-[#B89358] hover:to-[#9E7A42] rounded-none border border-[#B89358]/50 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#B89358] whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89358]/40 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
              <span>BOOK CONSULTATION</span>
            </button>

            {/* Compact Mobile Booking Button (< md) */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="md:hidden inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 shadow-xs transition-colors focus:outline-none cursor-pointer shrink-0"
              aria-label="Request a Consultation"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
              <span>BOOK</span>
            </button>

            {/* Mobile menu button — ALWAYS visible on mobile & tablet (< xl) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#29221E] hover:text-[#B89358] transition-colors focus:outline-none cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#29221E]" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden pt-3 pb-6 mt-2 border-t border-[#E7DFD3] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 px-1">
              <button
                type="button"
                onClick={() => handleLinkClick('/')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/about')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/treatments')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                Treatments
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/client-experiences')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                Client Experiences
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/promotions')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                Promotions
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/results')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                Results
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/faq')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('/contact')}
                className="text-left text-sm font-medium text-[#29221E] hover:text-[#B89358] py-2.5 px-3 border-b border-[#E7DFD3]/40 transition-colors cursor-pointer"
              >
                Contact
              </button>

              <div className="pt-3 px-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 shadow-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
                  <span>Book Consultation</span>
                </button>

                <a
                  href="tel:+639567835959"
                  className="flex items-center justify-center gap-2 text-xs font-medium text-[#3C332D] py-2 hover:text-[#9E7A42] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B89358]" />
                  <span>Call: {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
