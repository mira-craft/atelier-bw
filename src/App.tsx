import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Werke from "./pages/Werke";
import Bio from "./pages/Bio";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import Atelier from "./pages/Atelier";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/werke" element={<Werke />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/atelier" element={<Atelier />} /> 
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
