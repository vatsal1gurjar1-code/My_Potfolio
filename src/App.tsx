import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/pages/About";
import { Achievements } from "@/pages/Achievements";
import { Contact } from "@/pages/Contact";
import { Experience } from "@/pages/Experience";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { Skills } from "@/pages/Skills";

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <Navbar />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
