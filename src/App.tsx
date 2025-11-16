
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminRoute from "@/components/layout/AdminRoute";
import Index from "./pages/Index";
import AIEmpowerment from "./pages/AIEmpowerment";
import KnowledgeBase from "./pages/KnowledgeBase";
import AIGettingStartedGuide from "./pages/AIGettingStartedGuide";
import AdvancedPromptEngineering from "./pages/AdvancedPromptEngineering";
import MCPExplained from "./pages/MCPExplained";
import LatestMLTrends from "./pages/LatestMLTrends";
import UnderstandingRAG from "./pages/UnderstandingRAG";
import AIEthicsAndResponsibleDevelopment from "./pages/AIEthicsAndResponsibleDevelopment";
import AIDevEnvironmentTutorial from "./pages/AIDevEnvironmentTutorial";
import BuildingFirstNeuralNetwork from "./pages/BuildingFirstNeuralNetwork";
import AIEvolutionTimeline from "./pages/AIEvolutionTimeline";
import TypesOfAI from "./pages/TypesOfAI";
import WhatIsAIModel from "./pages/WhatIsAIModel";
import MachineLearningFundamentals from "./pages/MachineLearningFundamentals";
import LargeLanguageModels from "./pages/LargeLanguageModels";
import ThreeTypesOfML from "./pages/ThreeTypesOfML";
import AITools from "./pages/AITools";
import Projects from "./pages/Projects";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import JobApplication from "./pages/JobApplication";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminTest from "./pages/AdminTest";
import AdminTools from "./pages/AdminTools";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import AIStrategyConsulting from "./pages/AIStrategyConsulting";
import AIDataSolutions from "./pages/AIDataSolutions";
import CustomAIDevelopment from "./pages/CustomAIDevelopment";
import AIIntegrationSupport from "./pages/AIIntegrationSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter basename={typeof window !== 'undefined' && window.location.pathname.startsWith('/bixoryai-web') ? '/bixoryai-web' : '/'}>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/knowledge-base/getting-started-ai-development" element={<AIGettingStartedGuide />} />
          <Route path="/knowledge-base/advanced-prompt-engineering" element={<AdvancedPromptEngineering />} />
          <Route path="/knowledge-base/mcp-explained" element={<MCPExplained />} />
          <Route path="/knowledge-base/latest-ml-trends" element={<LatestMLTrends />} />
          <Route path="/knowledge-base/understanding-rag" element={<UnderstandingRAG />} />
          <Route path="/knowledge-base/ai-ethics-responsible-development" element={<AIEthicsAndResponsibleDevelopment />} />
          <Route path="/knowledge-base/ai-dev-environment-setup" element={<AIDevEnvironmentTutorial />} />
          <Route path="/knowledge-base/building-first-neural-network" element={<BuildingFirstNeuralNetwork />} />
          <Route path="/knowledge-base/ai-evolution-timeline" element={<AIEvolutionTimeline />} />
          <Route path="/knowledge-base/types-of-ai" element={<TypesOfAI />} />
          <Route path="/knowledge-base/what-is-ai-model" element={<WhatIsAIModel />} />
          <Route path="/knowledge-base/machine-learning-fundamentals" element={<MachineLearningFundamentals />} />
          <Route path="/knowledge-base/large-language-models" element={<LargeLanguageModels />} />
          <Route path="/knowledge-base/three-types-of-machine-learning" element={<ThreeTypesOfML />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/ai-strategy-consulting" element={<AIStrategyConsulting />} />
        <Route path="/solutions/ai-data-solutions" element={<AIDataSolutions />} />
        <Route path="/solutions/custom-ai-development" element={<CustomAIDevelopment />} />
        <Route path="/solutions/ai-integration-support" element={<AIIntegrationSupport />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/job-application" element={<JobApplication />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/admin-tools" element={<AdminRoute><AdminTools /></AdminRoute>} />
        <Route path="/admin-test" element={<AdminTest />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
