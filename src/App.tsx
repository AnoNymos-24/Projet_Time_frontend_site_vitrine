
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Presentation from "./pages/Presentation";
import Formation from "./pages/formation/Formation";
import LicenseCycle from "./pages/formation/LicenseCycle";
import MasterCycle from "./pages/formation/MasterCycle";
import PrepaCycle from "./pages/formation/PrepaCycle";
import EngineerCycle from "./pages/formation/EngineerCycle";
import Stages from "./pages/admission/Stages";
import ConditionsAdmission from "./pages/admission/ConditionsAdmission";
import PreInscription from "./pages/admission/PreInscription";

// Information pages
/* import Actualite from "./pages/information/Actualite";
import ArticleDetail from "./pages/information/ArticleDetail"; */
import EventDetail from "./pages/information/EventDetail";
//import Evenements from "./pages/information/Evenements";
import ServicesAcademiques from "./pages/information/ServicesAcademiques";
import VieEstudiantine from "./pages/information/VieEstudiantine";
import EtudiantsInternationaux from "./pages/information/EtudiantsInternationaux";
import MentionsLegales from "./pages/information/MentionsLegales";
import PolitiqueConfidentialite from "./pages/information/PolitiqueConfidentialite";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/presentation" element={<Presentation />} />
            
            {/* Formation Routes */}
            <Route path="/formation" element={<Formation />} />
            <Route path="/formation/license" element={<LicenseCycle />} />
            <Route path="/formation/master" element={<MasterCycle />} />
            <Route path="/formation/prepa" element={<PrepaCycle />} />
            <Route path="/formation/ingenieur" element={<EngineerCycle />} />
            
            {/* Admission Routes */}
            <Route path="/admission/stages" element={<Stages />} />
            <Route path="/admission/conditions" element={<ConditionsAdmission />} />
            <Route path="/admission/pre-inscription" element={<PreInscription />} />
            
            {/* Information Routes */}
            {/* <Route path="/information/actualite" element={<Actualite />} /> */}
{/*             <Route path="/information/actualite/:slug" element={<ArticleDetail />} />
            <Route path="/information/evenements" element={<Evenements />} /> */}
            <Route path="/information/evenements/:slug" element={<EventDetail />} />
            <Route path="/information/services-academiques" element={<ServicesAcademiques />} />
            <Route path="/information/services-academiques/:service" element={<ServicesAcademiques />} />
            <Route  path="/information/vie-estudiantine" element={<VieEstudiantine />} />
            <Route path="/information/vie-estudiantine/:section" element={<VieEstudiantine />} /> 
            <Route path="/information/etudiants-internationaux" element={<EtudiantsInternationaux />} />
            <Route path="/information/mentions-legales" element={<MentionsLegales />} />
            <Route path="/information/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
