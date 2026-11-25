import { supabase } from "@/integrations/supabase/client";

export type SubscribeResult = { ok: true } | { ok: false; message: string };

/**
 * Confirmed only when the newsletter-subscribe function accepts the address.
 * Callers must not show a success message unless ok is true.
 */
export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  try {
    const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
      body: { email },
    });

    if (error) {
      return {
        ok: false,
        message: error.message || "The newsletter service did not accept this address.",
      };
    }

    if (data && typeof data === "object" && "error" in data && (data as { error?: unknown }).error) {
      return { ok: false, message: String((data as { error: unknown }).error) };
    }

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("bixory:newsletter-subscribed"));
    }

    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "The newsletter service could not be reached.";
    return { ok: false, message };
  }
}
