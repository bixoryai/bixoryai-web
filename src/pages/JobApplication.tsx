
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Upload, FileText } from "lucide-react";
import { CONTACT_EMAIL, buildMailto } from "@/config/site";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
  linkedIn: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
  availability: z.string().min(1, "Please select your availability"),
  consent: z.boolean().refine(val => val === true, "You must consent to data processing"),
});

type FormData = z.infer<typeof formSchema>;

const JobApplication = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resume, setResume] = useState<File | null>(null);
  const [deliveryNote, setDeliveryNote] = useState<string | null>(null);

  // Get the job title from the URL state if available
  const selectedPosition = location.state?.position || "";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: selectedPosition,
      experience: "",
      coverLetter: "",
      linkedIn: "",
      portfolio: "",
      availability: "",
      consent: false,
    },
  });

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setResume(file);
      toast({
        title: "Resume selected on this device",
        description: `${file.name} is not uploaded. You will need to attach it to an email yourself.`,
      });
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!resume) {
      toast({
        title: "Resume required",
        description: "Select a resume on this device before opening the email draft. It is not uploaded.",
        variant: "destructive",
      });
      return;
    }

    const mailto = buildMailto(
      `Job application: ${data.position} — ${data.firstName} ${data.lastName}`,
      [
        `Name: ${data.firstName} ${data.lastName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Position: ${data.position}`,
        `Experience: ${data.experience}`,
        `Availability: ${data.availability}`,
        `LinkedIn: ${data.linkedIn || "—"}`,
        `Portfolio: ${data.portfolio || "—"}`,
        "",
        "Cover letter:",
        data.coverLetter,
        "",
        `Resume selected in the browser (not uploaded): ${resume.name}`,
        "Attach that file to this email before sending.",
        "",
        "The bixory.ai careers form did not submit this application.",
      ].join("\n"),
    );

    setDeliveryNote(
      `This application was not submitted. There is no application inbox connected to the form. An email draft to ${CONTACT_EMAIL} should have opened. Attach ${resume.name} to that draft and send it yourself.`,
    );
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-slate-900 to-blue-950">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary via-slate-800 to-blue-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <Button
              variant="ghost"
              onClick={() => navigate("/careers")}
              className="mb-6 text-white hover:text-accent hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Careers
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apply for Position
            </h1>
            <p className="text-lg text-gray-300">
              Join our team and help shape the future of AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-primary to-slate-800 relative">
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary/20 to-accent/20 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-primary/90 backdrop-blur-sm border-gray-600 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Application Form</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the required fields and select a resume. This website does not store or email applications. The button opens a draft to {CONTACT_EMAIL}; attach the resume and send it yourself.
                </CardDescription>
                <p role="note" className="mt-4 rounded-md border border-amber-400/60 bg-amber-950 px-4 py-3 text-sm text-amber-50">
                  There is no careers form endpoint in this project. Nothing you type here is delivered until you send the email draft.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                            <FormLabel className="text-white">First Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your first name" 
                                className="bg-white/10 border-white/20 focus:border-accent text-white placeholder:text-gray-400 transition-all duration-300 hover:bg-white/15 focus:bg-white/15"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            <FormLabel className="text-white">Last Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your last name" 
                                className="bg-white/10 border-white/20 focus:border-accent text-white placeholder:text-gray-400 transition-all duration-300 hover:bg-white/15 focus:bg-white/15"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                            <FormLabel className="text-white">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-white/10 border-white/20 focus:border-accent text-white placeholder:text-gray-400 transition-all duration-300 hover:bg-white/15 focus:bg-white/15"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                            <FormLabel className="text-white">Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your phone number" 
                                className="bg-white/10 border-white/20 focus:border-accent text-white placeholder:text-gray-400 transition-all duration-300 hover:bg-white/15 focus:bg-white/15"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Position and Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                            <FormLabel className="text-white">Position *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/10 border-white/20 focus:border-accent text-white transition-all duration-300 hover:bg-white/15">
                                  <SelectValue placeholder="Select a position" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Senior AI Engineer">Senior AI Engineer</SelectItem>
                                <SelectItem value="AI Trainer & Educator">AI Trainer & Educator</SelectItem>
                                <SelectItem value="AI Solutions Consultant">AI Solutions Consultant</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                            <FormLabel className="text-white">Experience Level *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-white/10 border-white/20 focus:border-accent text-white transition-all duration-300 hover:bg-white/15">
                                  <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Entry Level (0-2 years)">Entry Level (0-2 years)</SelectItem>
                                <SelectItem value="Mid Level (3-5 years)">Mid Level (3-5 years)</SelectItem>
                                <SelectItem value="Senior Level (5+ years)">Senior Level (5+ years)</SelectItem>
                                <SelectItem value="Lead/Management (8+ years)">Lead/Management (8+ years)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-2 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                      <Label className="text-white">Resume Upload *</Label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300 hover:bg-white/5 hover:scale-[1.02]">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeUpload}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="cursor-pointer flex flex-col items-center space-y-2 transition-all duration-300 hover:scale-105"
                        >
                          {resume ? (
                            <>
                              <FileText className="w-8 h-8 text-accent animate-pulse" />
                              <span className="text-white font-medium">{resume.name}</span>
                              <span className="text-gray-400 text-sm">Click to replace</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-8 h-8 text-gray-400 animate-float" />
                              <span className="text-white">Click to upload your resume</span>
                              <span className="text-gray-400 text-sm">PDF, DOC, DOCX (max 5MB)</span>
                            </>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="linkedIn"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '1.0s' }}>
                            <FormLabel className="text-white">LinkedIn Profile</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://linkedin.com/in/yourprofile" 
                                className="bg-white/10 border-white/20 focus:border-accent text-white placeholder:text-gray-400 transition-all duration-300 hover:bg-white/15 focus:bg-white/15"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="portfolio"
                        render={({ field }) => (
                          <FormItem className="animate-fadeInUp" style={{ animationDelay: '1.1s' }}>
                            <FormLabel className="text-white">Portfolio/Website</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://yourportfolio.com" 
                                className="bg-white/10 border-white/20 focus:border-accent text-white placeholder:text-gray-400 transition-all duration-300 hover:bg-white/15 focus:bg-white/15"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="availability"
                      render={({ field }) => (
                        <FormItem className="animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
                          <FormLabel className="text-white">Availability *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/10 border-white/20 focus:border-accent text-white transition-all duration-300 hover:bg-white/15">
                                <SelectValue placeholder="When can you start?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Immediately">Immediately</SelectItem>
                              <SelectItem value="2 weeks notice">2 weeks notice</SelectItem>
                              <SelectItem value="1 month notice">1 month notice</SelectItem>
                              <SelectItem value="2+ months">2+ months</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Cover Letter */}
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem className="animate-fadeInUp" style={{ animationDelay: '1.3s' }}>
                          <FormLabel className="text-white">Cover Letter *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                              className="bg-white/10 border-white/20 focus:border-accent text-white placeholder:text-gray-400 min-h-[120px] transition-all duration-300 hover:bg-white/15 focus:bg-white/15"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Consent */}
                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 animate-fadeInUp" style={{ animationDelay: '1.4s' }}>
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-white/20 data-[state=checked]:bg-accent data-[state=checked]:border-accent transition-all duration-300 hover:scale-110"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-white">
                              I consent to the processing of my personal data *
                            </FormLabel>
                            <p className="text-sm text-gray-400">
                              By checking this box, you agree to our privacy policy and allow us to process your application data.
                            </p>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
                      <Button 
                        type="submit" 
                        className="w-full bg-secondary hover:bg-secondary/90 text-white py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Email this application
                      </Button>
                      {deliveryNote && (
                        <p role="alert" className="mt-4 rounded-md border border-amber-400/60 bg-amber-950 px-4 py-3 text-sm text-amber-50">
                          {deliveryNote}
                        </p>
                      )}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobApplication;
