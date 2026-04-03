import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import FloatingElements from "../three/FloatingElements";
import myImage from "../../assets/WhatsApp Image 2025-04-02 at 18.57.22_f2dd64ce.jpg";

function HeroContent() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.5 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-20">
      {/* Text Content */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          variants={textVariants}
        >
          Hi, I'm <span className="gradient-text">Pubudu Madushan</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed"
          variants={textVariants}
        >
          Final-year Software Engineering undergraduate with hands-on production
          experience in distributed systems, full-stack web and mobile
          development, and cloud infrastructure. Proficient in Go, React.js,
          Node.js, and Spring Boot, with practical DevOps expertise using Docker,
          GitHub Actions, Ansible, and AWS.
        </motion.p>

        <motion.p
          className="text-xl gradient-text-cyan font-semibold mb-4"
          variants={textVariants}
        >
          Coding the future, one innovative idea at a time.
        </motion.p>

        <motion.p
          className="text-base text-slate-400 mb-8 italic"
          variants={textVariants}
        >
          Discover how my work transforms challenges into cutting-edge digital
          solutions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            title="Let's get in touch"
          >
            Get In Touch
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#projects")}
            className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            title="See my projects"
          >
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Profile Image with 3D Effects */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="relative">
          {/* Animated Glow Effect */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl animate-pulse" />
          
          {/* Profile Image */}
          <motion.div
            className="relative w-80 h-80 rounded-full overflow-hidden gradient-border shadow-2xl bg-slate-900"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={myImage}
              alt="Pubudu Madushan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden"
    >
      {/* Three.js Background Animation */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingElements />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#06b6d4" />
        </Canvas>
      </div>

      {/* Background Pattern SVG */}
      <div className="absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex items-center min-h-screen pt-20">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
