import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import ParticleSystem from "./components/three/ParticleSystem";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    // Initialize EmailJS
    if (window.emailjs) {
      window.emailjs.init("d8eG9GfvXDYoTRI_p");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Particle System */}
      <div className="fixed inset-0 z-0">
        <ParticleSystem />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />

        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <Intro />
            <About />
            <Projects />
            <Blog />
            <Contact />
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
