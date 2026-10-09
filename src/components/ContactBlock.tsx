/**
 * Reusable Contact / NAP Block Component
 * Elite Aesthetics Cebu
 *
 * Uses CLINIC_INFO as single source of truth.
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, Check, Copy, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactBlockProps {
  variant?: 'card' | 'compact' | 'minimal';
  showDirectionsButton?: boolean;
  className?: string;
}

export const ContactBlock: React.FC<ContactBlockProps> = ({
  variant = 'card',
  showDirectionsButton = true,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === 'compact') {
    return (
      <div className={`space-y-3 text-xs text-[#3C332D] ${className}`}>
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
          <span>{CLINIC_INFO.location.fullAddress}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-[#B89358] shrink-0" />
          <a
            href="tel:+639567835959"
            className="hover:text-[#9E7A42] transition-colors"
          >
            {CLINIC_INFO.phone}
          </a>
        </div>
        <div className="flex items-center gap-2.5">
          <Mail className="w-4 h-4 text-[#B89358] shrink-0" />
          <a
            href={`mailto:${CLINIC_INFO.email}`}
            className="hover:text-[#9E7A42] transition-colors break-all"
          >
            {CLINIC_INFO.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white p-6 sm:p-8 border border-[#E7DFD3] luxury-card-shadow ${className}`}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#9E7A42] font-semibold mb-2">
        <span>The Ridges · Kasambagan</span>
        <span aria-hidden="true">·</span>
        <span>Cebu City</span>
      </div>

      <h3 className="font-serif text-2xl text-[#1D1815] font-medium mb-1">
        {CLINIC_INFO.name}
      </h3>
      <p className="text-xs uppercase tracking-widest text-[#9E7A42] font-medium mb-6">
        &ldquo;{CLINIC_INFO.tagline}&rdquo;
      </p>

      <div className="space-y-5 text-sm text-[#3C332D]">
        {/* Location */}
        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-[#FAF7F2] border border-[#E7DFD3] text-[#B89358] shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-[#1D1815]">{CLINIC_INFO.location.venue}</p>
            <p className="text-xs text-[#685B52] leading-relaxed mt-0.5">
              {CLINIC_INFO.location.street}, {CLINIC_INFO.location.area}, {CLINIC_INFO.location.country}
            </p>
            <button
              type="button"
              onClick={handleCopyAddress}
              className="mt-2 text-[11px] font-medium text-[#9E7A42] hover:text-[#1D1815] inline-flex items-center gap-1 transition-colors focus:outline-none"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700">Address copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Direct Telephone */}
        <div className="flex items-start gap-3.5 pt-3 border-t border-[#E7DFD3]/60">
          <div className="p-2 bg-[#FAF7F2] border border-[#E7DFD3] text-[#B89358] shrink-0 mt-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-[#1D1815]">Direct Telephone</p>
            <a
              href="tel:+639567835959"
              className="text-xs text-[#9E7A42] hover:underline font-medium block mt-0.5"
            >
              {CLINIC_INFO.phone}
            </a>
          </div>
        </div>

        {/* Email Inquiry */}
        <div className="flex items-start gap-3.5 pt-3 border-t border-[#E7DFD3]/60">
          <div className="p-2 bg-[#FAF7F2] border border-[#E7DFD3] text-[#B89358] shrink-0 mt-0.5">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-[#1D1815]">Email Inquiry</p>
            <a
              href={`mailto:${CLINIC_INFO.email}`}
              className="text-xs text-[#9E7A42] hover:underline font-medium block mt-0.5 break-all"
            >
              {CLINIC_INFO.email}
            </a>
          </div>
        </div>

        {/* Operating Hours (Verified status: Pending client sign-off) */}
        <div className="flex items-start gap-3.5 pt-3 border-t border-[#E7DFD3]/60">
          <div className="p-2 bg-[#FAF7F2] border border-[#E7DFD3] text-[#B89358] shrink-0 mt-0.5">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-[#1D1815]">Clinic Hours & Appointments</p>
            <p className="text-xs text-[#685B52] mt-0.5">
              Clinic hours: Please contact Elite Aesthetics for the current appointment schedule.
            </p>
          </div>
        </div>
      </div>

      {showDirectionsButton && (
        <div className="mt-6 pt-5 border-t border-[#E7DFD3]">
          <a
            href={CLINIC_INFO.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#1D1815] bg-[#FAF7F2] hover:bg-[#241D18] hover:text-[#FAF7F2] border border-[#DBC3A3] transition-colors focus:outline-none"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      )}
    </div>
  );
};
