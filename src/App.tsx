
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIEmpowerment from "./pages/AIEmpowerment";
import KnowledgeBase from "./pages/KnowledgeBase";
import AIGettingStartedGuide from "./pages/AIGettingStartedGuide";
import AITools from "./pages/AITools";
import Projects from "./pages/Projects";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import JobApplication from "./pages/JobApplication";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/knowledge-base/getting-started-ai-development" element={<AIGettingStartedGuide />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/job-application" element={<JobApplication />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
