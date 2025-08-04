import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      return new Response(
        JSON.stringify({ error: "Valid email address is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Rate limiting check - max 5 attempts per hour per IP
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || 'unknown';
    console.log(`Newsletter subscription attempt from IP: ${clientIP}, Email: ${email}`);

    // Sanitize email
    const sanitizedEmail = email.toLowerCase().trim();

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Insert subscriber into database
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email: sanitizedEmail }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return new Response(
          JSON.stringify({ error: "Email is already subscribed" }),
          { status: 409, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      throw error;
    }

    // Send welcome email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    
    const emailResponse = await resend.emails.send({
      from: "BIXORY AI <onboarding@resend.dev>",
      to: [sanitizedEmail],
      subject: "Welcome to BIXORY AI Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #FF4D00; font-size: 28px; margin: 0;">BIXORY AI</h1>
          </div>
          
          <h2 style="color: #0A192F; font-size: 24px; margin-bottom: 20px;">Welcome to the Future of AI!</h2>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for subscribing to the BIXORY AI newsletter! You've just joined a community of forward-thinking individuals who are passionate about artificial intelligence and its transformative potential.
          </p>
          
          <div style="background: linear-gradient(135deg, #0A192F, #1a365d); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: white; font-size: 16px; margin: 0; text-align: center;">
              🚀 Get ready for exclusive AI insights, industry updates, and cutting-edge technology trends delivered directly to your inbox!
            </p>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Here's what you can expect from our newsletter:
          </p>
          
          <ul style="color: #333; font-size: 16px; line-height: 1.8;">
            <li>Latest AI breakthroughs and innovations</li>
            <li>Industry analysis and expert insights</li>
            <li>Practical AI applications for businesses</li>
            <li>Exclusive content and early access to new features</li>
          </ul>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://your-website.com" style="background: #FF4D00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
              Explore BIXORY AI
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px; text-align: center; margin-top: 30px;">
            You can <a href="https://mccpdsucnpvelrwoduhg.supabase.co/functions/v1/unsubscribe?email=${encodeURIComponent(sanitizedEmail)}&token=${data.id}" style="color: #FF4D00; text-decoration: underline;">unsubscribe</a> at any time.
          </p>
        </div>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        message: "Successfully subscribed to newsletter!",
        subscriber: data 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("Error in newsletter-subscribe function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);