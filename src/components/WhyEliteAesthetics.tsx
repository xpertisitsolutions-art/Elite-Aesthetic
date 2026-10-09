import React from 'react';
import { CLINIC_PILLARS, CLINIC_INFO } from '../data/clinicData';

export const WhyEliteAesthetics: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD3]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-medium mb-3">
            <span>The Elite Standard</span>
            <span aria-hidden="true">·</span>
            <span>Cebu Aesthetic Clinic</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light tracking-tight mb-4 text-balance">
            Why Elite Aesthetics?
          </h2>

          <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
            Every detail of our clinic is curated around discretion, personalized care, and natural-looking aesthetic results.
          </p>
        </div>

        {/* 4 Pillars Grid with human editorial numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLINIC_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="relative p-7 bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between group hover:border-[#C9A77E] transition-all duration-300"
            >
              {/* Editorial Pillar Index */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-2xl text-[#C9A77E] font-light">
                  0{index + 1}
                </span>
                <span className="w-8 h-[1px] bg-[#E7DFD3] group-hover:bg-[#C9A77E] transition-colors" />
              </div>

              <div>
                <h3 className="font-serif text-xl text-[#1D1815] font-medium mb-1.5 group-hover:text-[#9E7A42] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-[#9E7A42] font-medium mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-[#52453D] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom subtle gold accent line on hover */}
              <div className="mt-6 pt-4 border-t border-[#E7DFD3]/40 flex items-center justify-end text-[11px] text-[#8C7667]">
                <span className="text-[#C9A77E] group-hover:translate-x-1 transition-transform">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic Commitment Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-[#241D18] text-[#FAF7F2] border border-[#B89358]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A77E] font-medium block mb-1">
              Safety & Integrity First
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-light">
              &ldquo;Beauty Beyond Imperfection&rdquo; — where your safety, peace of mind, and authentic confidence come first.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right">
            <p className="text-xs text-[#C9A77E]">Direct Inquiries & Bookings</p>
            <a
              href="tel:+639567835959"
              className="font-serif text-lg text-white hover:text-[#C9A77E] transition-colors mt-0.5 block"
            >
              {CLINIC_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
