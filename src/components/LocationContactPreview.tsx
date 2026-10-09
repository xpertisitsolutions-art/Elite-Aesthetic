import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation, ExternalLink, Check, Copy } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface LocationContactPreviewProps {
  onOpenBooking: () => void;
}

export const LocationContactPreview: React.FC<LocationContactPreviewProps> = ({
  onOpenBooking,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.location.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-medium mb-3">
            <span>Clinic Location</span>
            <span aria-hidden="true">·</span>
            <span>Kasambagan, Cebu City</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light tracking-tight mb-4 text-balance">
            Visit Elite Aesthetics
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Conveniently situated at The Ridges Commercial Center along F. Cabahug Street.
          </p>
        </div>

        {/* Location & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Verified Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-white p-7 border border-[#E7DFD3] luxury-card-shadow">
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

                {/* Phone */}
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

                {/* Email */}
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

              </div>
            </div>

            {/* Quick Action Box */}
            <div className="p-6 bg-[#241D18] text-[#FAF7F2] border border-[#B89358]/40">
              <h4 className="font-serif text-lg text-white mb-2">Book Your Visit</h4>
              <p className="text-xs text-[#EBDCC8]/80 leading-relaxed mb-4">
                Consultations are by appointment. Secure your preferred date and time with our clinical team.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-[#1D1815] bg-[#E8D8C3] hover:bg-white transition-colors focus:outline-none"
              >
                BOOK A CONSULTATION
              </button>
            </div>

          </div>

          {/* Right: Map / Location visual container (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[360px] bg-[#EBDCC8]/30 border border-[#E7DFD3] luxury-card-shadow overflow-hidden flex flex-col justify-between">
              
              {/* Map Illustration Graphic */}
              <div className="absolute inset-0 bg-[#29221E] text-[#E8D8C3] overflow-hidden">
                {/* Stylized Street Grid */}
                <svg className="w-full h-full opacity-35" viewBox="0 0 700 500" fill="none">
                  {/* F. Cabahug Road */}
                  <line x1="0" y1="260" x2="700" y2="230" stroke="#C9A77E" strokeWidth="8" opacity="0.9" />
                  <text x="50" y="245" fill="#E8D8C3" fontSize="12" letterSpacing="2">F. CABAHUG STREET</text>
                  
                  {/* Cross Streets */}
                  <line x1="220" y1="0" x2="260" y2="500" stroke="#FAF7F2" strokeWidth="3" opacity="0.3" />
                  <line x1="480" y1="0" x2="440" y2="500" stroke="#FAF7F2" strokeWidth="4" opacity="0.4" />
                  <line x1="0" y1="120" x2="700" y2="100" stroke="#FAF7F2" strokeWidth="2" opacity="0.25" />
                  <line x1="0" y1="390" x2="700" y2="380" stroke="#FAF7F2" strokeWidth="2" opacity="0.25" />

                  {/* Kasambagan Commercial Blocks */}
                  <rect x="310" y="150" width="120" height="90" fill="#3A3029" stroke="#C9A77E" strokeWidth="1" />
                  <text x="325" y="195" fill="#FAF7F2" fontSize="10" fontWeight="bold">THE RIDGES</text>
                  <text x="325" y="210" fill="#C9A77E" fontSize="9">COMMERCIAL</text>

                  <rect x="120" y="160" width="80" height="60" fill="#241D18" stroke="#685B52" strokeWidth="0.5" />
                  <rect x="490" y="260" width="90" height="70" fill="#241D18" stroke="#685B52" strokeWidth="0.5" />
                </svg>

                {/* Pin Landmark at The Ridges */}
                <div className="absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#B89358] border-2 border-white shadow-xl flex items-center justify-center animate-bounce">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/40 rounded-full blur-xs" />
                  </div>
                  <div className="mt-2 bg-[#1A1412]/90 backdrop-blur-sm px-3 py-1.5 border border-[#C9A77E]/50 text-center">
                    <p className="text-[11px] font-semibold text-white whitespace-nowrap">Elite Aesthetics</p>
                    <p className="text-[9px] text-[#C9A77E] uppercase tracking-wider">The Ridges Commercial Center</p>
                  </div>
                </div>
              </div>

              {/* Map Footer Control Card */}
              <div className="relative z-10 p-4 sm:p-5 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E7DFD3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-auto">
                <div>
                  <p className="font-serif text-sm text-[#1D1815] font-semibold">Kasambagan, Cebu City</p>
                  <p className="text-xs text-[#685B52]">Ample parking available at The Ridges complex.</p>
                </div>
                
                <a
                  href={CLINIC_INFO.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1D1815] hover:text-[#9E7A42] bg-white border border-[#DBC3A3] hover:border-[#9E7A42] transition-colors focus:outline-none"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B89358]" />
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#8C7667]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
