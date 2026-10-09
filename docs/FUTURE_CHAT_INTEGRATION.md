# Elite Aesthetics Cebu — Future Chat & Inquiry Strategy

**Feature #22: Architecture & Integration-Ready Foundation**

---

## 1. Executive Summary & Current Operational State

- **Current State:** **DISABLED** (`enabled: false`, `availability: 'disabled'`).
- **Core Principle:** Elite Aesthetics Cebu is a **consultation-first aesthetic clinic**. The website does not offer live chat, real-time messaging, AI automated responses, or 24/7 staffed chat.
- **Primary Patient Ingress:** All online inquiries, appointments, and treatment explorations are conducted via:
  1. The **Book Consultation** modal & dedicated `/book-consultation` route.
  2. The **Contact Form** on the `/contact` route.
  3. Direct clinic telephone contact (`+63 956 783 5959` / local `0956 783 5959`).
  4. In-person visits at The Ridges Commercial Center, F. Cabahug St., Mabolo, Cebu City.

---

## 2. Future Chat Modes & Proposed Workflow Considerations

When clinic management decides to commission website chat, the architecture supports three progressive integration modes (all proposed future concepts):

### Mode A: `inquiry_only` (Asynchronous Inquiry Form — Proposed Future Consideration)
- **Concept:** A lightweight inquiry interface allowing visitors to submit questions outside or during clinic hours.
- **Proposed Workflow:** Visitor submits an inquiry → Form delivers details to the clinic front-desk email/CRM inbox → Clinic staff replies via email or phone within defined business hours.
- **Future Staffing Consideration:** Low. Would operate within existing front-desk administrative duties when staffed.

### Mode B: `live_human` (Synchronous Staff Chat — Proposed Future Consideration)
- **Concept:** Direct, real-time communication between website visitors and verified Elite Aesthetics clinic receptionists or patient coordinators.
- **Proposed Workflow:** Would operate strictly during physical clinic operating hours when staffing is formally assigned. When offline, automatically switches to consultation request mode.
- **Future Staffing Consideration:** High. Would require formally assigned front-desk personnel and defined clinic response commitments. Note: No current chat staffing or response SLA exists.

### Mode C: `ai_assisted` (Hybrid Conversational Concierge — Proposed Future Consideration)
- **Concept:** An informational assistant capable of answering general clinic questions (directions, hours, treatment category summaries) with seamless escalation to human staff or direct consultation booking.
- **Proposed Workflow:** Informational AI triage → Human handoff or Consultation Booking fallback.
- **Medical Safeguards:** Under no circumstance may the AI attempt diagnosis, treatment recommendation, or clinical triage.

---

## 3. Medical, Legal, & Clinical Safety Boundaries

The clinical boundary contract (defined in `src/data/chatConfig.ts`) strictly governs all future chat implementations:

### Prohibited Scope (Zero Exceptions):
1. **Medical Diagnosis:** Chat must never attempt to diagnose skin conditions, facial anatomy, or medical indications.
2. **Prescription Advice:** Chat must never recommend prescription medications, compounding formulas, or medical dosages.
3. **Suitability Determinations:** Chat must never declare a visitor "suitable" or "cleared" for laser, injectables, or surgical treatments.
4. **Outcome Guarantees:** Chat must never promise or guarantee specific aesthetic results.
5. **Emergency Triage:** Chat must never handle acute medical emergencies. An explicit notice directing patients to the nearest hospital emergency department must always be accessible.
6. **Replacing Consultation:** All personalized plans must be explicitly deferred to an in-person clinical assessment by an Elite Aesthetics physician.

### Permitted Informational Scope:
- Clinic location, directions, and parking details at The Ridges Cebu.
- Official operating hours and holiday schedules.
- Overview descriptions of available treatment categories (e.g., Hydrafacial, CO2 Laser, Injectables, Body Sculpting).
- Explanation of the in-person consultation process.
- Directing visitors to book a consultation or call the clinic directly.

---

## 4. Human Escalation & Fallback Routing (Proposed Conceptual Architecture)

When an inquiry exceeds informational scope, the system executes an immediate escalation pathway:

```
Visitor Inquiry
     │
     ▼
Informational Assistance
     │
     ├── In-Depth Treatment Questions ──► Direct to "Book a Consultation" (/book-consultation)
     ├── Specific Medical Inquiries  ──► Direct to Clinic Phone (+63 956 783 5959)
     └── Urgent Scheduling Request    ──► Front-Desk Telephone / Consultation Booking
```

---

## 5. Privacy, Data Minimization, & Security

1. **Zero Unnecessary Data Retention:** No visitor chats, transcripts, or personal health records may be permanently retained on public front-end storage.
2. **No Health Record Storage:** Chat is NOT a patient portal. Medical histories, photographs of acute conditions, and sensitive health records must not be accepted or stored in chat data stores.
3. **No Unapproved Third-Party Trackers:** No third-party chat trackers, cookies, or telemetry scripts may be loaded without user consent and formal privacy policy updates.
4. **Credential Security:** API keys, webhook secrets, and provider credentials must remain strictly server-side; never exposed in client bundles.

---

## 6. Future Implementation Requirements (Pre-Activation Checklist)

Before activating chat in production, the following prerequisites must be fulfilled:

- [ ] **Provider Selection:** Evaluate and select an approved provider (e.g., custom lightweight inquiry backend, HIPAA-compliant patient communication tool, or enterprise CRM).
- [ ] **Clinic Staffing Decision:** Formally assign and train front-desk personnel for live chat shifts.
- [ ] **Operating Hours & SLAs:** Define realistic response windows; strictly avoid unmonitored "24/7" claims.
- [ ] **Privacy Policy Update:** Incorporate chat data processing into the clinic's privacy disclosures.
- [ ] **Safety Audit:** Verify that all medical boundary disclaimers trigger accurately on clinical keywords.
- [ ] **Accessibility (WCAG 2.1 AA):** Ensure keyboard focus trapping, screen reader announcements (`aria-live`), high-contrast modes, and reduced-motion compliance.
- [ ] **Mobile Touch UX:** Ensure the launcher and panel do not overlap bottom navigation bars, phone call CTAs, or booking buttons on small viewports.

---

## 7. Business Model & Phasing Note

Chat is scoped as a **future optional enhancement**. Implementation, vendor licensing, and dedicated staffing protocols can be separately evaluated and scheduled following the current complimentary website care period. Public-facing website copy remains 100% free of sales or pricing language.
