/**
 * Branded 404 / Not Found Page
 * Elite Aesthetics Cebu
 */

import React from 'react';
import { EliteAestheticsLogo } from '../components/EliteAestheticsLogo';
import { ArrowRight, Home, Calendar } from 'lucide-react';
import { useRouter } from '../router/Router';

interface NotFoundPageProps {
  onOpenBooking: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onOpenBooking }) => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF7F2] py-20 px-4">
      <div className="max-w-md w-full mx-auto text-center">
        {/* Elite Aesthetics Brand Emblem */}
        <div className="flex justify-center mb-6">
          <EliteAestheticsLogo variant="horizontal" theme="dark" size="md" />
        </div>

        <span className="font-serif text-5xl sm:text-6xl text-[#9E7A42] font-light block mb-2">
          404
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl text-[#1D1815] font-light mb-3">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed mb-8">
          The page or treatment protocol you are seeking may have moved or is currently in development. Explore our treatments or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] transition-colors focus:outline-none"
          >
            <Home className="w-3.5 h-3.5" />
            <span>HOME</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/treatments')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#1D1815] border border-[#DBC3A3] hover:border-[#9E7A42] hover:text-[#9E7A42] bg-white transition-colors focus:outline-none"
          >
            <span>VIEW TREATMENTS</span>
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#9E7A42] hover:text-[#1D1815] transition-colors focus:outline-none"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK CONSULTATION</span>
          </button>
        </div>
      </div>
    </div>
  );
};
