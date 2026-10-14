
import { supabase } from "./supabase";

export interface InquiryInput {
  source: "contact" | "book-consultation" | "modal";
  full_name: string;
  phone: string;
  email?: string;
  interest?: string;
  message?: string;
  preferred_contact_method?: string;
  preferred_timing?: string;
  preferred_date?: string;
  preferred_time?: string;
}

export async function submitInquiry(
  input: InquiryInput
): Promise<{ ok: boolean }> {
  try {
    const payload = {
      source: input.source,
      full_name: input.full_name.trim(),
      phone: input.phone.trim(),
      email: input.email?.trim() || null,
      interest: input.interest?.trim() || null,
      message: input.message?.trim() || null,
      preferred_contact_method:
        input.preferred_contact_method?.trim() || null,
      preferred_timing:
        input.preferred_timing?.trim() || null,
      preferred_date: input.preferred_date?.trim() || null,
      preferred_time: input.preferred_time?.trim() || null,
    };

    const { error } = await supabase
      .from("inquiries")
      .insert(payload);

    if (error) {
      console.error("Inquiry submission failed:", error.message);
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    console.error("Inquiry request failed:", error);
    return { ok: false };
  }
}
