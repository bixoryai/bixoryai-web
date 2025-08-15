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

// Simple HTML sanitization function
function sanitizeHtml(html: string): string {
  // Remove script tags and their content
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove potentially dangerous attributes
  html = html.replace(/\s(on\w+)=["'][^"']*["']/gi, '');
  html = html.replace(/\sjavascript:/gi, '');
  
  // Remove form elements
  html = html.replace(/<form\b[^>]*>/gi, '');
  html = html.replace(/<\/form>/gi, '');
  html = html.replace(/<input\b[^>]*>/gi, '');
  html = html.replace(/<textarea\b[^>]*>/gi, '');
  html = html.replace(/<\/textarea>/gi, '');
  
  return html;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client first to validate admin access
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Validate admin access using JWT from Authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: "Authentication required" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Verify the user has admin role
    const { data: isAdmin, error: adminError } = await supabase
      .rpc('validate_admin_newsletter_access');

    if (adminError || !isAdmin) {
      console.error('Admin validation failed:', adminError);
      return new Response(
        JSON.stringify({ error: "Admin access required" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { subject, content, htmlContent }: NewsletterRequest = await req.json();

    // Input validation and sanitization
    if (!subject || subject.trim().length === 0 || subject.length > 200) {
      return new Response(
        JSON.stringify({ error: "Valid subject is required (max 200 characters)" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!content || content.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Newsletter content is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const sanitizedSubject = subject.trim();
    const sanitizedContent = content.trim();
    const sanitizedHtmlContent = htmlContent ? sanitizeHtml(htmlContent) : null;

    console.log(`Sending newsletter: "${sanitizedSubject}" to active subscribers`);

    // Get all active subscribers
    const { data: subscribers, error } = await supabase
      .from('newsletter_subscribers')
      .select('email, id')
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

    // Create email HTML content with personalized unsubscribe links
    const createEmailHtml = (subscriberEmail: string, subscriberId: string) => {
      const unsubscribeUrl = `https://mccpdsucnpvelrwoduhg.supabase.co/functions/v1/unsubscribe?email=${encodeURIComponent(subscriberEmail)}&token=${subscriberId}`;
      
      return sanitizedHtmlContent || `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #FF4D00; font-size: 28px; margin: 0;">BIXORY AI</h1>
          </div>
          
          <div style="color: #333; font-size: 16px; line-height: 1.6;">
            ${sanitizedContent.replace(/\n/g, '<br>')}
          </div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #666; font-size: 14px;">
              Thank you for being part of the BIXORY AI community!
            </p>
            <p style="color: #666; font-size: 12px;">
              You can <a href="${unsubscribeUrl}" style="color: #FF4D00; text-decoration: underline;">unsubscribe</a> at any time.
            </p>
          </div>
        </div>
      `;
    };

    // Send emails to all subscribers with personalized unsubscribe links
    const emailPromises = subscribers.map(subscriber => 
      resend.emails.send({
        from: "BIXORY AI <newsletter@resend.dev>",
        to: [subscriber.email],
        subject: sanitizedSubject,
        html: createEmailHtml(subscriber.email, subscriber.id),
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