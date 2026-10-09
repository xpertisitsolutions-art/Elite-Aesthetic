/**
 * Centralized Team & Practitioner Data Architecture
 * Elite Aesthetics Cebu
 *
 * Single source of truth for clinic physicians, aesthetic specialists,
 * operations personnel, and leadership profiles.
 *
 * GOVERNANCE (Prompt #20A):
 * All unverified profiles use neutral, verification-safe language without
 * invented credentials, medical licenses, fabricated titles, or unsupported claims.
 */

export type TeamCategoryKey = 'doctors' | 'treatment_team' | 'clinic_operations' | 'founder';

export type VerificationStatus = 'pending' | 'verified';

export type PublicProfileStatus = 'coming_soon' | 'published';

export interface TeamMember {
  id: string;
  name: string;
  displayName: string;
  role: string;
  category: TeamCategoryKey;
  photoAssetKey: string;
  shortIntro: string;
  biography: string;
  education?: string[];
  credentials?: string[];
  affiliations?: string[];
  specialties?: string[];
  responsibilities?: string[];
  relatedTreatmentSlugs?: string[];
  verificationStatus: VerificationStatus;
  publicProfileStatus: PublicProfileStatus;
}

export interface TeamCategoryDefinition {
  key: TeamCategoryKey;
  label: string;
  shortLabel: string;
  eyebrow: string;
  description: string;
  emptyStateTitle?: string;
  emptyStateMessage?: string;
}

export const TEAM_CATEGORIES: Record<TeamCategoryKey, TeamCategoryDefinition> = {
  doctors: {
    key: 'doctors',
    label: 'Doctors & Physicians',
    shortLabel: 'Physicians',
    eyebrow: 'Clinical Practitioners',
    description: 'Physician profiles and clinical background details for Elite Aesthetics Cebu.',
    emptyStateTitle: 'Physician Profiles Being Confirmed',
    emptyStateMessage:
      'Physician profiles and background details are being reviewed with Elite Aesthetics Cebu and will be published as information is confirmed.',
  },
  treatment_team: {
    key: 'treatment_team',
    label: 'Aesthetic / Treatment Team',
    shortLabel: 'Treatment Team',
    eyebrow: 'Clinic Team Members',
    description: 'Treatment team profiles and background details for Elite Aesthetics Cebu.',
    emptyStateTitle: 'Treatment Team Profiles Being Confirmed',
    emptyStateMessage:
      'Treatment team profiles and background details are being reviewed with Elite Aesthetics Cebu and will be published as information is confirmed.',
  },
  clinic_operations: {
    key: 'clinic_operations',
    label: 'Clinic Operations',
    shortLabel: 'Clinic Operations',
    eyebrow: 'Clinic Team Members',
    description: 'Clinic operations and care team profiles for Elite Aesthetics Cebu.',
    emptyStateTitle: 'Operations Team Profiles Being Confirmed',
    emptyStateMessage:
      'Operations team profiles and background details are being reviewed with Elite Aesthetics Cebu and will be published as information is confirmed.',
  },
  founder: {
    key: 'founder',
    label: 'Owner / Founder',
    shortLabel: 'Leadership',
    eyebrow: 'Clinic Leadership',
    description: 'Leadership and founder information for Elite Aesthetics Cebu.',
    emptyStateTitle: 'Leadership & Founder Profile Notice',
    emptyStateMessage:
      'Official founder and leadership information will be published following confirmation by Elite Aesthetics Cebu.',
  },
};

/**
 * Editorial Governance Notice (Prompt #20A simplified)
 */
export const TEAM_GOVERNANCE_NOTICE = {
  title: 'Professional Profiles Are Being Confirmed',
  statement:
    'Team biographies, professional backgrounds, credentials, and roles are being reviewed with Elite Aesthetics Cebu and will be published as information is confirmed.',
  statusLabel: 'VERIFICATION IN PROGRESS',
};

/**
 * Authentic Team Member Profile Shells
 * Sourced exclusively from authentic person photographs in 05_Team_Doctors.
 * No promotional graphics, posters, or artwork.
 * No unverified titles, responsibilities, or treatment associations.
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'physician-1',
    name: 'Physician Profile — Details To Be Confirmed',
    displayName: 'Clinic Physician',
    role: 'Clinic Team Member',
    category: 'doctors',
    photoAssetKey: 'team-doctor-portrait',
    shortIntro:
      'Professional profile details are being confirmed with Elite Aesthetics Cebu and will be published as information becomes available.',
    biography:
      'Professional profile information is currently being confirmed with Elite Aesthetics Cebu. Additional background, credentials, and professional details will be published once officially confirmed.',
    education: [],
    credentials: [],
    affiliations: [],
    specialties: [],
    responsibilities: [],
    relatedTreatmentSlugs: [],
    verificationStatus: 'pending',
    publicProfileStatus: 'coming_soon',
  },
  {
    id: 'physician-2',
    name: 'Physician Profile — Details To Be Confirmed',
    displayName: 'Clinic Physician',
    role: 'Clinic Team Member',
    category: 'doctors',
    photoAssetKey: 'team-doctor-consultation',
    shortIntro:
      'Professional profile details are being confirmed with Elite Aesthetics Cebu and will be published as information becomes available.',
    biography:
      'Professional profile information is currently being confirmed with Elite Aesthetics Cebu. Additional background, credentials, and professional details will be published once officially confirmed.',
    education: [],
    credentials: [],
    affiliations: [],
    specialties: [],
    responsibilities: [],
    relatedTreatmentSlugs: [],
    verificationStatus: 'pending',
    publicProfileStatus: 'coming_soon',
  },
];

/**
 * Authentic Group Photography & Environmental Assets
 * Neutral observational captions without unsupported operational claims.
 */
export const TEAM_GROUP_ASSETS = [
  {
    assetKey: 'team-group-primary',
    title: 'Clinic Team',
    caption: 'An authentic glimpse of the people and environment behind the Elite Aesthetics experience.',
    alt: 'Elite Aesthetics Cebu team members in clinic reception',
  },
  {
    assetKey: 'team-group-secondary',
    title: 'Team & Clinic Environment',
    caption: 'Real moments from the clinic environment at The Ridges Commercial Center.',
    alt: 'Elite Aesthetics Cebu team members in consultation environment',
  },
];

/**
 * Query Helper Utilities
 */
export function getAllTeamMembers(): TeamMember[] {
  return TEAM_MEMBERS;
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  return TEAM_MEMBERS.find((m) => m.id === id);
}

export function getTeamMembersByCategory(category: TeamCategoryKey | 'all'): TeamMember[] {
  if (category === 'all') {
    return TEAM_MEMBERS;
  }
  return TEAM_MEMBERS.filter((m) => m.category === category);
}

export function getTeamCategoryDefinition(category: TeamCategoryKey): TeamCategoryDefinition {
  return TEAM_CATEGORIES[category];
}
