import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

// Components
import SplashScreen from "./components/SplashScreen";
import WaveDivider from "./components/WaveDivider";

// Three.js
import ParticleSystem from "./components/three/ParticleSystem";

// Initialize EmailJS
emailjs.init("d8eG9GfvXDYoTRI_p");

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      <div className="min-h-screen bg-slate-950">
        {/* Background Particle System */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticleSystem />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Header />

          <main>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showSplash ? 0 : 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Hero />

              <WaveDivider fromColor="#0f172a" toColor="#0f172a" />
              <Intro />
              
              <WaveDivider fromColor="#0f172a" toColor="#020617" />
              <About />

              <WaveDivider fromColor="#020617" toColor="#0f172a" flip />
              <Experience />

              <WaveDivider fromColor="#0f172a" toColor="#0f172a" />
              <Projects />

              <WaveDivider fromColor="#0f172a" toColor="#020617" />
              <Blog />

              <WaveDivider fromColor="#020617" toColor="#0f172a" flip />
              <Contact />
            </motion.div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
