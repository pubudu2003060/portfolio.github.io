import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.5 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(30, 64, 175, 0.3)",
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
          Hi, I'm Pubudu Madushan
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-blue-100 mb-4 leading-relaxed"
          variants={textVariants}
        >
          I'm a Third-year Software Engineering undergraduate fascinated by
          continuous learning and accepting challenges. Passionate about web
          development and full-stack technologies, with hands-on experience in
          React.js, Node.js, Express.js, MongoDB, Spring boot and MySQL. I love
          crafting seamless user experiences and building robust backend
          solutions.
        </motion.p>

        <motion.p
          className="text-xl text-yellow-300 font-semibold mb-4"
          variants={textVariants}
        >
          Coding the future, one innovative idea at a time.
        </motion.p>

        <motion.p
          className="text-base text-blue-200 mb-8 italic"
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
            className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            title="Let's get in touch"
          >
            Get In Touch
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("#projects")}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
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
          {/* Profile Image */}
          <motion.div
            className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={myImage}
              alt="Pubudu Madushan"
              className="w-full h-full object-cover"
            />

            {/* Animated Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-yellow-300/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: "blur(20px)", zIndex: -1 }}
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
      className="relative min-h-screen bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Three.js Background Animation */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingElements />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
        </Canvas>
      </div>

      {/* Background Pattern SVG */}
      <div className="absolute inset-0 z-10 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q25 25, 50 50 T100 50"
                stroke="white"
                fill="none"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center min-h-screen pt-20">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
