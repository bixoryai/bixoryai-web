import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  subject: string;
  content: string;
  htmlContent?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subject, content, htmlContent }: NewsletterRequest = await req.json();

    if (!subject || !content) {
      return new Response(
        JSON.stringify({ error: "Subject and content are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get all active subscribers
    const { data: subscribers, error } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('status', 'active');

    if (error) {
      throw error;
    }

    if (!subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ message: "No active subscribers found" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Prepare email content
    const emailHtml = htmlContent || `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #FF4D00; font-size: 28px; margin: 0;">BIXORY AI</h1>
        </div>
        
        <div style="color: #333; font-size: 16px; line-height: 1.6;">
          ${content.replace(/\n/g, '<br>')}
        </div>
        
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
          <p style="color: #666; font-size: 14px;">
            Thank you for being part of the BIXORY AI community!
          </p>
          <p style="color: #666; font-size: 12px;">
            You can unsubscribe at any time by clicking <a href="#" style="color: #FF4D00;">here</a>.
          </p>
        </div>
      </div>
    `;

    // Send emails to all subscribers
    const emailPromises = subscribers.map(subscriber => 
      resend.emails.send({
        from: "BIXORY AI <newsletter@resend.dev>",
        to: [subscriber.email],
        subject: subject,
        html: emailHtml,
      })
    );

    const results = await Promise.allSettled(emailPromises);
    
    const successful = results.filter(result => result.status === 'fulfilled').length;
    const failed = results.filter(result => result.status === 'rejected').length;

    console.log(`Newsletter sent: ${successful} successful, ${failed} failed out of ${subscribers.length} total`);

    return new Response(
      JSON.stringify({ 
        message: `Newsletter sent successfully!`,
        stats: {
          total: subscribers.length,
          successful,
          failed
        }
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error in send-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);