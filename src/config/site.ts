/**
 * Site-wide contact and booking settings.
 *
 * BOOKING_URL is the only place the Google Calendar booking link should be set.
 * Until it is a real https URL, consultation CTAs keep this placeholder as their
 * href and the UI shows a non-success state instead of scheduling anything.
 */
export const BOOKING_URL = "TODO_GOOGLE_CALENDAR_BOOKING_URL";

export const CONSULTATION_CTA_LABEL = "Book a free 30-minute consultation";

/** Address already published on the contact page. No separate form inbox exists in this repo. */
export const CONTACT_EMAIL = "develop@bixory.ai";

export const CONTACT_PHONE = "+1 (408) 658-8538";

export function isBookingConfigured(url: string = BOOKING_URL): boolean {
  return /^https?:\/\//i.test(url);
}

export function buildMailto(subject: string, body: string, email: string = CONTACT_EMAIL): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
