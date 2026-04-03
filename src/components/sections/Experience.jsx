import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import "../../../styles/experience.css";

const experienceData = [
  {
    company: "TorchLabs (Pvt) Ltd",
    role: "Software Engineering Intern",
    period: "Oct 2025 – Apr 2026",
    location: "Hybrid",
    description:
      "Designed and built a production-grade distributed proxy network platform from the ground up, working across the full stack — from low-level networking protocols to cloud deployment pipelines.",
    responsibilities: [
      "Designed and built a production-grade distributed proxy network platform orchestrating a fleet of worker nodes from a central Captain server, with multi-provider upstream routing and real-time monitoring.",
      "Implemented the Captain server in Go (Chi) with a RESTful API, WebSocket-based worker orchestration, OTP node authentication, and type-safe SQL via sqlc; built the Worker engine supporting HTTP/HTTPS CONNECT and SOCKS5 protocols with weighted upstream selection across multiple providers.",
      "Engineered a dual-database analytics pipeline using PostgreSQL for transactional state and ClickHouse for high-performance OLAP analytics, visualized through Grafana dashboards.",
      "Implemented end-to-end CI/CD pipelines with GitHub Actions, Docker, and Ansible for automated multi-node deployment, with Nginx handling TLS termination and reverse proxying.",
    ],
    techStack: [
      "Go",
      "Chi",
      "PostgreSQL",
      "ClickHouse",
      "WebSocket",
      "Docker",
      "GitHub Actions",
      "Ansible",
      "Nginx",
      "Grafana",
      "sqlc",
      "Swagger",
    ],
  },
];

function ExperienceCard({ experience, index }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      className="experience-card glass-card rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ delay: index * 0.3, duration: 0.8 }}
    >
      {/* Card Header */}
      <div className="experience-card-header">
        <div className="experience-header-content">
          <div className="experience-icon-wrapper">
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <div className="experience-header-text">
            <h3 className="text-2xl font-bold text-white mb-1">
              {experience.role}
            </h3>
            <p className="text-cyan-300 text-lg font-semibold">
              {experience.company}
            </p>
          </div>
        </div>

        <div className="experience-meta">
          <div className="experience-meta-item">
            <Calendar className="w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          <div className="experience-meta-item">
            <MapPin className="w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-8">
        <p className="text-slate-300 leading-relaxed mb-8 text-lg">
          {experience.description}
        </p>

        {/* Responsibilities */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mr-3"></span>
            Key Contributions
          </h4>
          <ul className="space-y-4">
            {experience.responsibilities.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start text-slate-300"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  delay: index * 0.3 + idx * 0.15 + 0.4,
                  duration: 0.5,
                }}
              >
                <ChevronRight className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mr-3"></span>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                className="bg-slate-800 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-900/50 hover:bg-cyan-900/30 hover:text-white transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  cardInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  delay: index * 0.3 + idx * 0.05 + 0.8,
                  duration: 0.4,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional{" "}
              <span className="gradient-text-cyan">Experience</span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
          </div>

          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mt-8">
            Building production-grade systems and gaining real-world engineering
            experience through hands-on internship work.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
