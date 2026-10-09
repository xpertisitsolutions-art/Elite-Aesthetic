import React from 'react';
import { TEAM_GROUP_ASSETS } from '../../data/teamData';
import { VisualAsset } from '../VisualAsset';
import { Users } from 'lucide-react';

export const TeamGroupFeature: React.FC = () => {
  return (
    <div className="pt-16 mt-16 border-t border-[#E7DFD3]/80">
      {/* Editorial Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-2">
          <Users className="w-3.5 h-3.5 text-[#B89358]" />
          <span>Inside the Clinic Experience</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1D1815] font-light mb-3">
          Inside the Clinic Experience
        </h3>
        <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed">
          Authentic moments from the people and environment behind Elite Aesthetics Cebu.
        </p>
      </div>

      {/* Dual Group Photography Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {TEAM_GROUP_ASSETS.map((item, index) => (
          <div
            key={item.assetKey}
            className="group bg-white p-4 sm:p-5 border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2] border border-[#E7DFD3]/80 mb-4">
              <VisualAsset
                type={item.assetKey as any}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute top-3 left-3 bg-[#1D1815]/85 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#E8D8C3] font-medium border border-[#B89358]/30">
                0{index + 1} · {item.title}
              </div>
            </div>

            <div>
              <p className="font-serif text-base text-[#1D1815] font-medium mb-1">
                {item.title}
              </p>
              <p className="text-xs text-[#685B52] leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
