-- Appointment requests keep using the public.inquiries table.
-- The requested local date/time is a preference, not a reserved or confirmed slot.
alter table public.inquiries
  add column if not exists preferred_date date,
  add column if not exists preferred_time time without time zone;

comment on column public.inquiries.preferred_date is
  'Visitor preferred appointment date in the clinic local timezone (Asia/Manila); subject to clinic confirmation.';

comment on column public.inquiries.preferred_time is
  'Visitor preferred appointment time in the clinic local timezone (Asia/Manila); subject to clinic confirmation.';

create index if not exists inquiries_preferred_appointment_idx
  on public.inquiries (preferred_date, preferred_time)
  where preferred_date is not null;
