import React, { useState } from 'react';
import {
  TeamCategoryKey,
  TEAM_CATEGORIES,
  TEAM_GOVERNANCE_NOTICE,
  getAllTeamMembers,
  getTeamMembersByCategory,
  TeamMember,
} from '../../data/teamData';
import { TeamCard } from './TeamCard';
import { TeamProfileModal } from './TeamProfileModal';
import { TeamGroupFeature } from './TeamGroupFeature';
import { FileCheck, Sparkles, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

type FilterKey = 'all' | TeamCategoryKey;

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const displayedMembers = getTeamMembersByCategory(selectedFilter);

  const handleSelectMember = (member: TeamMember) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const filterTabs: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All Team Members' },
    { key: 'doctors', label: 'Doctors & Physicians' },
    { key: 'treatment_team', label: 'Aesthetic Team' },
    { key: 'clinic_operations', label: 'Clinic Operations' },
    { key: 'founder', label: 'Owner & Founder' },
  ];

  return (
    <section
      id="team-section"
      aria-labelledby="team-section-heading"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#E7DFD3]/70"
    >
      {/* 1. Editorial Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#9E7A42] font-semibold mb-3">
          <span>Our People & Practitioners</span>
          <span aria-hidden="true" className="text-[#C9A77E]">·</span>
          <span>Cebu City</span>
        </div>

        <h2
          id="team-section-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1815] font-light leading-tight tracking-tight mb-4 text-balance"
        >
          Meet the People Behind Your Care
        </h2>

        <p className="text-sm sm:text-base text-[#52453D] leading-relaxed">
          Every experience at Elite Aesthetics begins with people — thoughtful professionals, attentive
          team members, and a clinic environment designed around your individual care.
        </p>
      </div>

      {/* 2. Verification Governance Notice */}
      <div className="mb-10 p-5 sm:p-6 bg-white border border-[#E7DFD3] luxury-card-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1D1815]">
              <FileCheck className="w-4 h-4 text-[#9E7A42]" />
              <span>{TEAM_GOVERNANCE_NOTICE.title}</span>
            </div>
            <p className="text-xs text-[#685B52] leading-relaxed">
              {TEAM_GOVERNANCE_NOTICE.statement}
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase px-3 py-1 bg-[#FAF7F2] border border-[#E7DFD3] text-[#736055]">
              <ShieldCheck className="w-3 h-3 text-[#9E7A42]" />
              <span>{TEAM_GOVERNANCE_NOTICE.statusLabel}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 3. Category Filter Tabs (Zero-Pill Discipline: Segmented Controls) */}
      <div className="mb-10 flex flex-wrap items-center gap-1.5 sm:gap-2 p-1 bg-[#FAF7F2] border border-[#E7DFD3]">
        {filterTabs.map((tab) => {
          const isActive = selectedFilter === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setSelectedFilter(tab.key)}
              className={`px-3.5 py-2 text-xs tracking-wider uppercase transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#9E7A42] ${
                isActive
                  ? 'bg-white text-[#1D1815] font-semibold shadow-xs border border-[#C9A77E]'
                  : 'text-[#685B52] hover:text-[#1D1815] hover:bg-white/60 font-medium'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 4. Team Members Grid or Safe Empty State */}
      {displayedMembers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onSelect={handleSelectMember}
            />
          ))}
        </div>
      ) : (
        /* Empty State for Categories like Founder awaiting confirmation */
        <div className="p-8 sm:p-12 bg-white border border-[#E7DFD3] text-center max-w-2xl mx-auto luxury-card-shadow">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#FAF7F2] border border-[#E7DFD3] flex items-center justify-center text-[#9E7A42]">
            <Sparkles className="w-5 h-5 text-[#B89358]" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E7A42] font-semibold block mb-2">
            {selectedFilter !== 'all' ? TEAM_CATEGORIES[selectedFilter].eyebrow : 'Clinic Leadership'}
          </span>

          <h3 className="font-serif text-2xl text-[#1D1815] font-light mb-3">
            {selectedFilter !== 'all' && TEAM_CATEGORIES[selectedFilter].emptyStateTitle
              ? TEAM_CATEGORIES[selectedFilter].emptyStateTitle
              : 'Profile Details Pending Formal Confirmation'}
          </h3>

          <p className="text-xs sm:text-sm text-[#52453D] leading-relaxed mb-6">
            {selectedFilter !== 'all' && TEAM_CATEGORIES[selectedFilter].emptyStateMessage
              ? TEAM_CATEGORIES[selectedFilter].emptyStateMessage
              : 'Official profile information is currently being finalized with clinic management and will be published upon verified confirmation.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className="px-5 py-2.5 text-xs uppercase tracking-wider text-[#1D1815] bg-[#FAF7F2] hover:bg-[#E7DFD3] border border-[#DBC3A3] transition-colors cursor-pointer"
            >
              View All Team Profiles
            </button>
            <button
              type="button"
              onClick={() => onOpenBooking('Physician Consultation')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#241D18] hover:bg-[#9E7A42] border border-[#B89358]/50 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E8D8C3]" />
              <span>Request Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* 5. Team Group Experience Showcase */}
      <TeamGroupFeature />

      {/* 6. Profile Detail Modal */}
      <TeamProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        member={selectedMember}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
