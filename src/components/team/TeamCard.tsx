import React from 'react';
import { ArrowRight, UserCheck, ShieldAlert } from 'lucide-react';
import { TeamMember, TEAM_CATEGORIES } from '../../data/teamData';
import { VisualAsset } from '../VisualAsset';

interface TeamCardProps {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, onSelect }) => {
  const categoryDef = TEAM_CATEGORIES[member.category];

  return (
    <article
      aria-labelledby={`team-member-${member.id}`}
      className="group bg-white border border-[#E7DFD3] luxury-card-shadow flex flex-col justify-between transition-all duration-300 hover:border-[#C9A77E] hover:shadow-md"
    >
      <div>
        {/* Authentic Photographic Portrait */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF7F2] border-b border-[#E7DFD3]">
          <VisualAsset
            type={member.photoAssetKey as any}
            alt={`${member.displayName} at Elite Aesthetics Cebu`}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Quiet Category Overlay Ribbon */}
          <div className="absolute top-3 left-3 bg-[#1D1815]/85 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#E8D8C3] font-medium border border-[#B89358]/30">
            {categoryDef.shortLabel}
          </div>

          {/* Verification Status Indicator (Quiet unboxed tag) */}
          <div className="absolute bottom-3 left-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-xs px-3 py-1.5 border border-[#E7DFD3] flex items-center justify-between text-[11px] text-[#736055]">
            <span className="font-serif italic text-xs text-[#241D18]">
              {member.displayName}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#9E7A42] font-medium">
              Profile Pending
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex flex-col">
          {/* Metadata Row: Unboxed with typographic separators */}
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#9E7A42] font-semibold mb-2">
            <span>{categoryDef.eyebrow}</span>
          </div>

          {/* Primary Name / Shell Title */}
          <h3
            id={`team-member-${member.id}`}
            className="font-serif text-xl sm:text-2xl text-[#1D1815] font-light leading-snug mb-1.5 group-hover:text-[#9E7A42] transition-colors"
          >
            {member.name}
          </h3>

          {/* Role Specification */}
          <p className="text-xs font-medium text-[#736055] tracking-wide mb-3">
            {member.role}
          </p>

          {/* Short Introduction */}
          <p className="text-xs text-[#52453D] leading-relaxed line-clamp-3 mb-4">
            {member.shortIntro}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-[#E7DFD3]/60 flex items-center justify-between">
        <span className="text-[11px] text-[#8C7667]">
          Elite Aesthetics Cebu
        </span>

        <button
          type="button"
          onClick={() => onSelect(member)}
          aria-label={`View clinical profile details for ${member.displayName}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9E7A42] hover:text-[#1D1815] transition-colors cursor-pointer py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42]"
        >
          <span>View Profile</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#B89358] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
};
