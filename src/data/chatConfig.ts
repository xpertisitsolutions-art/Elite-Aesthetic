/**
 * Elite Aesthetics Cebu — Chat & Online Inquiry Configuration Architecture
 * Feature #22: Future Chat Strategy & Integration-Ready Foundation
 *
 * IMPORTANT CLINICAL & ARCHITECTURAL DIRECTIVE:
 * - Elite Aesthetics Cebu does NOT currently offer live chat, real-time online support,
 *   AI chat, or 24/7 instant messaging.
 * - There is currently NO confirmed chat provider, NO confirmed chat platform, and
 *   NO confirmed clinic staffing workflow for website chat.
 * - This configuration establishes the data structures, types, and boundary contracts
 *   for a future chat/inquiry feature without introducing active UI or external dependencies.
 * - The active production state is strictly DISABLED (enabled: false, availability: 'disabled').
 */

export type ChatAvailability =
  | 'disabled'
  | 'inquiry_only'
  | 'live_human'
  | 'ai_assisted';

export type ChatProviderType =
  | 'none'
  | 'custom_inquiry'
  | 'third_party_vendor'
  | 'hospitality_crm';

export interface ChatOperationalHours {
  timezone: string;
  daysActive: string[];
  openTime: string;
  closeTime: string;
  holidayNotice?: string;
}

export interface ChatSafetyBoundary {
  allowMedicalDiagnosis: false;
  allowPrescriptionAdvice: false;
  allowOutcomeGuarantees: false;
  allowSuitabilityDetermination: false;
  emergencyDisclaimer: string;
  consultationRedirectNotice: string;
}

export interface ChatEscalationConfig {
  enabled: boolean;
  handoffToHumanEnabled: boolean;
  fallbackToConsultationBooking: boolean;
  fallbackPhone: string;
  fallbackRoute: string;
}

export interface ChatConfig {
  /** Master kill-switch. When false, no chat UI renders anywhere on the site. */
  enabled: boolean;
  /** Current operational availability mode. */
  availability: ChatAvailability;
  /** Future external provider identifier (e.g., custom_inquiry, third_party). */
  provider: ChatProviderType;
  /** Public display label for the inquiry window when active in future. */
  displayName: string;
  /** Response time expectation text (e.g., "Inquiries answered within clinic hours"). */
  responseExpectation: string;
  /** Operating schedule for live staffing in future states. */
  operatingHours?: ChatOperationalHours;
  /** Safety and clinical boundary rules. */
  clinicalSafety: ChatSafetyBoundary;
  /** Human escalation and consultation fallback routing. */
  escalation: ChatEscalationConfig;
}

/**
 * CURRENT PRODUCTION STATE:
 * Chat is strictly disabled.
 * Zero live chat widgets, zero AI chatbots, zero simulated conversations.
 */
export const DEFAULT_CHAT_CONFIG: Readonly<ChatConfig> = Object.freeze({
  enabled: false,
  availability: 'disabled',
  provider: 'none',
  displayName: 'Elite Aesthetics Inquiry',
  responseExpectation: 'Website inquiries are handled via scheduled in-clinic consultation requests.',
  clinicalSafety: Object.freeze({
    allowMedicalDiagnosis: false,
    allowPrescriptionAdvice: false,
    allowOutcomeGuarantees: false,
    allowSuitabilityDetermination: false,
    emergencyDisclaimer:
      'Online inquiries cannot address medical emergencies. In urgent medical situations, seek immediate hospital care.',
    consultationRedirectNotice:
      'All clinical assessments, personalized treatment suitability, and treatment plans require in-person consultation with a qualified medical professional at Elite Aesthetics Cebu.',
  }),
  escalation: Object.freeze({
    enabled: false,
    handoffToHumanEnabled: false,
    fallbackToConsultationBooking: true,
    fallbackPhone: '+63 956 783 5959',
    fallbackRoute: '/contact',
  }),
});

/**
 * Future Analytics Event Taxonomy (Architectural specification only — no active tracking calls)
 */
export type FutureChatAnalyticsEvent =
  | 'chat_launcher_opened'
  | 'chat_started'
  | 'chat_message_sent'
  | 'chat_handoff_requested'
  | 'chat_consultation_requested'
  | 'chat_safety_boundary_triggered'
  | 'chat_session_ended';
