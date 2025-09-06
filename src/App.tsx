import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rituals from "./pages/Rituals";
import RitualProduct from "./pages/RitualProduct";
import SubmitCase from "./pages/SubmitCase";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import Gallery from "./pages/Gallery";
import MapPage from "./pages/MapPage";
import Diary from "./pages/Diary";
import Community from "./pages/Community";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <main className="pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rituals" element={<Rituals />} />
              <Route path="/rituals/:id" element={<RitualProduct />} />
              <Route path="/submit" element={<SubmitCase />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/cases/:id" element={<CaseDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/diary" element={<Diary />} />
              <Route path="/community" element={<Community />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
