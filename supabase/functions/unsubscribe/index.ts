import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const email = url.searchParams.get('email');
    const token = url.searchParams.get('token');

    if (!email || !token) {
      return new Response(`
        <html>
          <head><title>Invalid Unsubscribe Link</title></head>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
            <h1 style="color: #FF4D00;">Invalid Unsubscribe Link</h1>
            <p>This unsubscribe link is invalid or malformed. Please contact support if you need assistance.</p>
          </body>
        </html>
      `, {
        status: 400,
        headers: { "Content-Type": "text/html", ...corsHeaders }
      });
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Verify token matches subscriber ID and update status
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .update({ 
        status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString()
      })
      .eq('email', email.toLowerCase().trim())
      .eq('id', token)
      .eq('status', 'active')
      .select()
      .single();

    if (error || !data) {
      console.log(`Unsubscribe attempt failed for email: ${email}, token: ${token}`);
      return new Response(`
        <html>
          <head><title>Unsubscribe Failed</title></head>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
            <h1 style="color: #FF4D00;">Unsubscribe Failed</h1>
            <p>We couldn't find an active subscription with this email address, or you may have already unsubscribed.</p>
            <p>If you continue to receive emails, please contact our support team.</p>
          </body>
        </html>
      `, {
        status: 404,
        headers: { "Content-Type": "text/html", ...corsHeaders }
      });
    }

    console.log(`Successfully unsubscribed: ${email}`);

    return new Response(`
      <html>
        <head><title>Successfully Unsubscribed</title></head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <div style="text-align: center;">
            <h1 style="color: #0A192F; margin-bottom: 20px;">Successfully Unsubscribed</h1>
            <div style="background: linear-gradient(135deg, #0A192F, #1a365d); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="color: white; font-size: 16px; margin: 0;">
                You have been successfully unsubscribed from BIXORY AI newsletter.
              </p>
            </div>
            <p style="color: #333; font-size: 16px; margin-top: 20px;">
              You will no longer receive newsletter emails from us. We're sorry to see you go!
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              If you unsubscribed by mistake, you can always subscribe again on our website.
            </p>
          </div>
        </body>
      </html>
    `, {
      status: 200,
      headers: { "Content-Type": "text/html", ...corsHeaders }
    });

  } catch (error: any) {
    console.error("Error in unsubscribe function:", error);
    return new Response(`
      <html>
        <head><title>Error</title></head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1 style="color: #FF4D00;">Error</h1>
          <p>An error occurred while processing your unsubscribe request. Please try again later or contact support.</p>
        </body>
      </html>
    `, {
      status: 500,
      headers: { "Content-Type": "text/html", ...corsHeaders }
    });
  }
};

serve(handler);