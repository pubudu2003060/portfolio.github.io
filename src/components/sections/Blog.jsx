import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";

const blogData = [
  {
    id: 5,
    title: "Building a Secure MERN Application",
    category: "Web Development",
    description:
      "A personal journey of building a cozy bookshop web application with the MERN stack, focusing on integrating OpenID Connect (OIDC) using Auth0 for secure authentication. This post explores the setup, challenges, and lessons learned in securing a modern web app.",
    image: b5,
    date: "Sep 7, 2025",
    readTime: "4 min read",
    url: "https://medium.com/@madushanp835/building-a-secure-mern-application-1bed83d48064",
    categoryColor: "from-indigo-500 to-purple-400",
  },
  {
    id: 6,
    title: "From Docker to Kubernetes",
    category: "DevOps",
    description:
      "Tracing the evolution from Docker to Kubernetes, this post explains how container orchestration became essential for managing complex, scalable applications. It covers the problems solved, key features, and the future impact on software deployment.",
    image: b6,
    date: "May 27, 2025",
    readTime: "5 min read",
    url: "https://medium.com/@madushanp835/from-docker-to-kubernetes-7dc1519924d6",
    categoryColor: "from-teal-500 to-green-400",
  },
  {
    id: 1,
    title: "From Virtual Machines to Containers",
    category: "Cloud Computing",
    description:
      "Exploring the evolution of infrastructure from traditional virtual machines to modern containerized environments. This post details the benefits of containerization and real-world use cases that enhance scalability and performance.",
    image: b1,
    date: "Mar 18, 2025",
    readTime: "6 min read",
    url: "https://medium.com/@madushanp835/from-virtual-machines-to-containers-6d0bee648b93",
    categoryColor: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "The Rise of Multi-Cloud Strategies",
    category: "Cloud Strategy",
    description:
      "A deep dive into how businesses are leveraging multiple cloud platforms for flexibility and enhanced resilience. This post breaks down the strategic advantages and challenges of adopting a multi-cloud approach.",
    image: b2,
    date: "Nov 16, 2024",
    readTime: "7 min read",
    url: "https://medium.com/@madushanp835/the-rise-of-multi-cloud-strategies-a4f815d17e81",
    categoryColor: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "Why Businesses Are Shifting to the Cloud",
    category: "Cloud Adoption",
    description:
      "Discussing the key benefits of cloud computing and why businesses are increasingly moving away from traditional IT infrastructures. Learn about cost efficiency, scalability, and the competitive edge offered by cloud solutions.",
    image: b3,
    date: "Nov 16, 2024",
    readTime: "5 min read",
    url: "https://medium.com/@madushanp835/why-businesses-are-shifting-to-the-cloud-d09f515ef280",
    categoryColor: "from-green-500 to-teal-400",
  },
  {
    id: 4,
    title: "CIA Triad in Cyber Security",
    category: "Cyber Security",
    description:
      "Understanding the fundamental principles of Confidentiality, Integrity, and Availability in cybersecurity. Explore practical applications of the CIA triad and how organizations can safeguard their digital assets effectively.",
    image: b4,
    date: "Sep 29, 2023",
    readTime: "2 min read",
    url: "https://medium.com/@madushanp835/cia-triad-in-cyber-security-ee606a2eabb",
    categoryColor: "from-red-500 to-orange-400",
  },
];

function BlogCard({ blog, index }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={cardRef}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        cardInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ delay: index * 0.15, duration: 0.8 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${blog.categoryColor} shadow-lg`}
          >
            {blog.category}
          </span>
        </div>

        {/* Overlay on hover */}
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col h-64">
        <div className="flex-grow">
          <motion.h3
            className="text-xl font-bold text-blue-800 mb-3 line-clamp-2 group-hover:text-blue-900 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
          >
            {blog.title}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 rounded mt-1"
              initial={{ width: "0%" }}
              whileInView={{ width: "70%" }}
              transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.h3>

          <motion.p
            className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
          >
            {blog.description}
          </motion.p>
        </div>

        {/* Footer */}
        <motion.div
          className="flex justify-between items-center pt-4 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
        >
          {/* Meta Information */}
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Read More Link */}
          <motion.a
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition-colors duration-300 font-medium text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Read the full post"
          >
            Read More
            <ExternalLink
              size={14}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  );
}

function Blog() {
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
    <section id="blog" className="py-20 bg-blue-50">
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              Latest Insights
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded"></div>
          </div>

          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8"
            variants={itemVariants}
          >
            Welcome to my blog — your go-to spot for in-depth explorations on
            technology, cloud computing, cybersecurity, and modern digital
            strategies. Dive in to discover insights, practical tips, and
            thought-provoking analyses that keep you ahead of the curve.
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          variants={itemVariants}
        >
          {blogData.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.div className="text-center" variants={itemVariants}>
          <motion.a
            href="https://medium.com/@madushanp835"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-full font-semibold text-lg hover:bg-blue-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 20px 40px rgba(30, 64, 175, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            title="Visit my Medium profile for more articles"
          >
            Read More Articles
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
          </motion.a>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-8 w-24 h-24 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-8 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Blog;
