import { useId, useState, type ReactNode } from "react";
import {
  BOOKING_URL,
  CONSULTATION_CTA_LABEL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  isBookingConfigured,
} from "@/config/site";

type ConsultationLinkProps = {
  className?: string;
  children?: ReactNode;
};

/**
 * Every free-consultation CTA goes through this link so the href is always BOOKING_URL.
 * A placeholder URL does not navigate and does not show a success state.
 */
export function ConsultationLink({ className, children }: ConsultationLinkProps) {
  const configured = isBookingConfigured();
  const [blocked, setBlocked] = useState(false);
  const noticeId = useId();

  return (
    <span className="inline-flex flex-col items-center max-w-full">
      <a
        href={BOOKING_URL}
        data-consultation-cta="true"
        className={className}
        aria-describedby={blocked ? noticeId : undefined}
        onClick={(event) => {
          if (!configured) {
            event.preventDefault();
            setBlocked(true);
          }
        }}
        {...(configured
          ? { target: "_blank", rel: "noopener noreferrer" }
          : { "aria-disabled": true })}
      >
        {children ?? CONSULTATION_CTA_LABEL}
      </a>
      {blocked && (
        <span
          id={noticeId}
          role="alert"
          className="mt-2 block max-w-sm rounded-md border border-amber-400/70 bg-amber-950 px-3 py-2 text-left text-sm font-normal leading-snug text-amber-50 normal-case"
        >
          Nothing was booked. {BOOKING_URL} is a placeholder, so this preview cannot schedule a
          consultation. Email {CONTACT_EMAIL} or call {CONTACT_PHONE}.
        </span>
      )}
    </span>
  );
}

/** Visible whenever BOOKING_URL is not a real calendar link. Not a success message. */
export function BookingPlaceholderBanner() {
  if (isBookingConfigured()) return null;

  return (
    <div
      role="status"
      className="bg-amber-950 text-amber-50 text-xs sm:text-sm text-center px-4 py-2 border-b border-amber-400/50"
    >
      Booking is not available yet. “{CONSULTATION_CTA_LABEL}” points at the placeholder{" "}
      {BOOKING_URL} and will not schedule a meeting.
    </div>
  );
}
