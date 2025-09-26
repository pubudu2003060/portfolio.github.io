import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import lexaura from "../../assets/LUXEAURA COSMETICS - Google Chrome 2025-04-06 12-56-57.mp4";
import fuleweb from "../../assets/Pass My Fuel Admin - Google Chrome 2025-04-06 13-09-02.mp4";
import noteShareVideo from "../../assets/note-sharing-platform.mp4";
import habitTrackerVideo from "../../assets/habit-tracker.mp4";
import bookShopVideo from "../../assets/book-shop.mp4";
import terraformVideo from "../../assets/terraform-iac.mp4";
import pipelineVideo from "../../assets/production-pipeline.mp4";

const projectsData = [
  {
    id: 3,
    title: "Note Sharing Platform",
    category: "Full Stack",
    description:
      "Developed a full-stack collaborative platform enabling users to create groups, upload and share notes, past papers, and academic resources, with features for tagging and commenting to enhance collaboration. This project demonstrates my ability to build secure and interactive web applications.",
    highlights: [
      "Implemented role-based access control (admin, editor, viewer) for content management",
      "Integrated secure endpoints using JWT authentication and real-time notifications with Socket.io",
      "Handled content uploads to Cloudinary and user profile management",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT",
      "Multer",
      "Redux",
      "Socket.io",
    ],
    video: noteShareVideo,
    githubUrl: "https://github.com/pubudu2003060/NoteShare",
    liveUrl: "https://note-share-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "Book Shop Web Application",
    category: "Full Stack",
    description:
      "A modern e-commerce book shop application built with the MERN stack, featuring seamless browsing, cart management, and secure checkout processes. This project showcases end-to-end development with a focus on user experience and security.",
    highlights: [
      "E-commerce functionality including browsing, cart addition, checkout, and order cancellation",
      "Secure authentication using Auth0 OpenID Connect and state management with Redux",
      "Automated order confirmation emails via Nodemailer and responsive UI with Tailwind CSS",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "Auth0",
      "Axios",
      "Nodemailer",
    ],
    video: bookShopVideo,
    githubUrl: "https://github.com/pubudu2003060/cozy-book-shop",
    liveUrl: "https://cozy-book-shop-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "Habit Tracker",
    category: "Mobile Development",
    description:
      "Developed a cross-platform mobile app for building and maintaining habits, allowing users to add, edit, and track daily or weekly habits with progress monitoring. This project highlights my skills in mobile development and user-centric design.",
    highlights: [
      "Implemented user profile management and secure authentication with email/password and Google login via Firebase",
      "Used AsyncStorage and Firestore for data synchronization and storage",
      "Created intuitive UI for habit tracking and progress viewing",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Zustand",
      "AsyncStorage",
      "Firebase Auth",
      "Firestore",
      "Navigation",
    ],
    video: habitTrackerVideo,
    githubUrl: "https://github.com/pubudu2003060/habitapp",
    liveUrl: null,
  },
  {
    id: 2,
    title: "Fuelstation Management System",
    category: "Full Stack",
    description:
      "PassMyFuel is a full-stack fuel quota management platform designed to address fuel distribution challenges during the Sri Lankan pandemic crisis. It connects vehicle owners, fuel station operators, and administrators in a seamless digital ecosystem, reducing inefficiencies, long queues, and enhancing transparency.",
    highlights: [
      "Vehicle and station registration with live tracking of fuel quotas and balances",
      "QR code check-ins for secure fuel dispensing and automated SMS alerts via Twilio",
      "Admin dashboard for analytics, user management, and system monitoring with Flutter mobile app support",
    ],
    technologies: ["Spring Boot", "React", "MySQL"],
    video: fuleweb,
    githubUrl: "https://github.com/pubudu2003060/SENG-22212-Group-Project",
    liveUrl: null,
  },
  {
    id: 1,
    title: "Lexaura Website",
    category: "Web Development",
    description:
      "The Lexaura Website is our first group web development project, a responsive e-commerce platform for a fictional cosmetics brand. This project allowed us to apply our skills in creating a user-friendly interface, clean code, and a seamless design that adapts across devices, marking the start of our journey in practical web development.",
    highlights: [
      "Developed dynamic product listings, category browsing, and product filtering",
      "Implemented a functional checkout system and order history tracking with admin and seller dashboards",
      "Designed a modern, user-friendly UI/UX using collaborative version control with Git",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    video: lexaura,
    githubUrl: "https://github.com/Rashmika119/cosmetic-web",
    liveUrl: null,
  },
  {
    id: 6,
    title: "Terraform Infrastructure as Code",
    category: "DevOps",
    description:
      "Designed modular Terraform configurations for AWS resources including EC2, S3, and DynamoDB, with remote state management and automated deployments. This project emphasizes scalable infrastructure and collaboration in cloud environments.",
    highlights: [
      "Modular Terraform setups for AWS EC2, S3, and DynamoDB with remote backend state management",
      "Automated CI/CD deployments using GitHub Actions",
      "Deployed a sample Python application on AWS EC2",
    ],
    technologies: ["Terraform", "AWS", "GitHub Actions", "Python"],
    video: terraformVideo,
    githubUrl: "https://github.com/pubudu2003060/terraform-demo",
    liveUrl: null,
  },
  {
    id: 7,
    title: "Automated CI/CD Pipeline",
    category: "DevOps",
    description:
      "Built a fully automated CI/CD pipeline for deploying applications from GitHub to AWS EC2 using Docker and NGINX, incorporating security scans and branch protections for production-ready workflows.",
    highlights: [
      "Docker image building and pushing to AWS ECR with GitHub Actions",
      "Automatic deployment to EC2 instance running NGINX",
      "Integrated vulnerability scanning and GitHub branch protection rules",
    ],
    technologies: ["Docker", "AWS ECR", "AWS EC2", "NGINX", "GitHub Actions"],
    video: pipelineVideo,
    githubUrl: "https://github.com/pubudu2003060/bookshop-ci-cd-pipeline-ec2",
    liveUrl: null,
  },
];

function ProjectCard({ project, index }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        cardInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Category Badge */}
      <div className="absolute top-5 right-5 z-20">
        <span className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          {project.category}
        </span>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Video Section */}
        <div className="w-full md:w-2/5 bg-blue-50 relative">
          <motion.div
            className="h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <video
              src={project.video}
              autoPlay
              muted
              loop
              className="w-full h-64 md:h-full object-contain rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4 relative inline-block">
              {project.title}
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 rounded"></div>
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Project Highlights */}
            <div className="mb-6">
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center text-gray-600 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: index * 0.2 + idx * 0.1 + 0.5,
                      duration: 0.5,
                    }}
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      cardInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      delay: index * 0.2 + idx * 0.05 + 0.7,
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

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="View on GitHub"
            >
              <Github size={18} className="mr-2" />
              View on GitHub
            </motion.a>

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="View Live Demo"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              My Projects
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8">
            Explore my portfolio of projects that showcase my ability to solve
            real-world challenges using creative and innovative technologies.
            Each project is a testament to my commitment to quality and
            continuous improvement.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/pubudu2003060"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-full font-semibold text-lg hover:bg-blue-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See More Projects
            <svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
