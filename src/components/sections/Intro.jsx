import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Monitor,
  Cloud,
  Users,
  Wrench,
  Layers,
  Smartphone,
} from "lucide-react";

const skillsData = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "Developing end-to-end applications using frontend technologies like React.js and backend frameworks like Node.js, Express.js, and Spring Boot, with databases such as MongoDB and MySQL.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications with React Native and Flutter, including features like user authentication, data synchronization, and real-time notifications.",
    gradient: "from-blue-500 to-violet-500",
  },
  {
    icon: Users,
    title: "Project Management",
    description:
      "Collaborating and delivering projects from idea to launch. I ensure effective communication and streamline workflows to achieve success.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Wrench,
    title: "DevOps Engineering",
    description:
      "Automating workflows and bridging dev and ops for smoother software delivery. I'm passionate about creating reliable pipelines that reduce manual overhead.",
    gradient: "from-purple-500 to-pink-500",
  },
];

function SkillCard({ skill, index }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 border-t-4 border-cyan-500 group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        cardInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Icon with gradient background */}
      <motion.div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 5 }}
      >
        <skill.icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Title with underline effect */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white mb-2 relative inline-block group-hover:text-cyan-300 transition-colors duration-300">
          {skill.title}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"
            initial={{ width: "50%" }}
            whileInView={{ width: "100%" }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </h3>
      </div>

      {/* Description */}
      <motion.p
        className="text-slate-400 text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
      >
        {skill.description}
      </motion.p>
    </motion.div>
  );
}

function Intro() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="intro"
      className="py-20 bg-slate-900"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to my <span className="gradient-text">Digital Space</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <p className="text-lg font-medium text-slate-300 mb-4 leading-relaxed">
            My mission is to transform challenges into innovative, user-centric
            applications. I strive to blend technical expertise with creative
            solutions that bring ideas to life.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            I thrive on turning complexity into simplicity through cutting-edge
            technology and relentless curiosity. Here you'll find a showcase of
            my skills, projects, and insights.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/20 cursor-pointer transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const aboutSection = document.querySelector("#about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore My Journey
            <motion.svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-violet-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
