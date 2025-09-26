import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import java from "../../assets/Java-Logo.png";
import javaScript from "../../assets/JavaScript-logo.png";
import typescript from "../../assets/typescript-logo.png";
import php from "../../assets/php-logo.svg";
import c from "../../assets/C_Logo.png";
import mysql from "../../assets/mysql-logo.png";
import mongodb from "../../assets/mongodb-logo.png";
import html from "../../assets/HTML5_Badge.svg";
import css from "../../assets/css-logo.png";
import springBoot from "../../assets/Springboot.jpg";
import react from "../../assets/React-icon.svg";
import reactNative from "../../assets/react-native.png";
import tailwind from "../../assets/Tailwind_CSS_Logo.svg";
import node from "../../assets/Node.js_logo.svg";
import express from "../../assets/express-logo.png";
import aws from "../../assets/Amazon_Web_Services_Logo.svg";
import docker from "../../assets/Docker_(container_engine)_logo.svg";
import terraform from "../../assets/terraform-logo.png";
import githubActions from "../../assets/github-actions.png";
import git from "../../assets/git-logo.png";

const skillsData = {
  languages: {
    title: "Programming Languages & Databases",
    description:
      "These languages and databases form the foundation of my technical expertise, enabling me to solve a variety of complex challenges.",
    subsections: [
      {
        title: "Programming Languages",
        skills: [
          { name: "Java", icon: java },
          { name: "JavaScript", icon: javaScript },
          { name: "TypeScript", icon: typescript },
          { name: "PHP", icon: php },
          { name: "C", icon: c },
        ],
      },
      {
        title: "Databases",
        skills: [
          { name: "MySQL", icon: mysql },
          { name: "MongoDB", icon: mongodb },
        ],
      },
    ],
  },
  frameworks: {
    title: "Frameworks & Libraries",
    description:
      "I utilize robust frameworks and libraries to accelerate development and build responsive, modern applications.",
    subsections: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML", icon: html },
          { name: "CSS", icon: css },
          { name: "React.js", icon: react },
          { name: "React Native", icon: reactNative },
          { name: "Tailwind CSS", icon: tailwind },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Spring Boot", icon: springBoot },
          { name: "Node.js", icon: node },
          { name: "Express.js", icon: express },
        ],
      },
    ],
  },
  devops: {
    title: "Cloud & DevOps",
    description:
      "Bridging development and operations, I leverage cloud platforms and automation tools to streamline workflows.",
    skills: [
      { name: "AWS", icon: aws },
      { name: "Docker", icon: docker },
      { name: "Terraform", icon: terraform },
      { name: "Git & GitHub", icon: git },
      { name: "GitHub Actions", icon: githubActions },
    ],
  },
  education: {
    title: "Education",
    description:
      "Grounded in both theory and hands-on practice, my education shapes my perspective and fuels my drive for innovation.",
    items: [
      {
        school: "University of Kelaniya",
        degree: "BSc(Hons) Software Engineering",
        date: "July 2023 - Present • Current GPA: 3.56/4.0",
      },
      {
        school: "B/Orubandiwewa S.S",
        degree: "GCE(AL) - Combined Maths (A), Chemistry (A), Physics (A)",
        date: "2019 - 2022",
      },
    ],
    certifications: [
      {
        title: "Diploma in Application Development Using PHP and MySQL",
        provider: "Alison",
        link: "https://alison.com/certification/check/2y10GN1yYWW7JgpAuz9AgYv3cebz3p1PtiatYGpz410e0cItXf53YG#google_vignette",
      },
      {
        title: "Diploma in C Programming",
        provider: "Alison",
        link: "https://alison.com/certification/check/2y108zkG7Lq9sYRZWKSdTmAFOOYXdo4l81DlwBxjd2YhcNNCbWkIw9hC",
      },
      {
        title: "Learning Git and GitHub",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/4037274072f5a561ca447a41d22e6e39357990f745266ad4b8850691676590c4",
      },
      {
        title: "Learning Cloud Computing",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/dc15f3687c75d98fd93818c1cb6c16c4312cf7a1b2ddc01a7f315a9aac787a5e",
      },
      {
        title: "Creating Spring Boot Microservices",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/889dbf9938f6e6afa7f316637274afdbc003f22632a48e3110cbc9ee6ace11cb",
      },
      {
        title: "Spring Boot 3 Essential Training",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/af3d4a06f1114fcd62d4e176d8e81d195b334cab340486bdc09ad98ac53ce26e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BIW5EKTTGRry7ORBKLugY0w%3D%3D",
      },
      {
        title: "AWS Educate Introduction to Cloud 101",
        provider: "AWS",
        link: "https://www.credly.com/badges/62c1bcb0-e1a5-4d39-b512-fbfe89ed5dad/linked_in_profile",
      },
      {
        title: "Kubernetes from 10000 Feet",
        provider: "CoDeKu DevOps Academy",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7329578100730556416/",
      },
    ],
  },
};

function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="flex items-center bg-blue-800 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <img
        src={skill.icon}
        alt={`${skill.name} Logo`}
        className="w-12 h-12 object-contain mr-3"
      />
      <span className="text-white font-semibold">{skill.name}</span>
    </motion.div>
  );
}

function TabButton({ id, label, isActive, onClick }) {
  return (
    <motion.button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        isActive
          ? "bg-white text-blue-800 border-2 border-blue-600 shadow-lg"
          : "bg-gray-200 text-gray-600 hover:bg-blue-100 hover:text-blue-800"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.button>
  );
}

function About() {
  const [activeTab, setActiveTab] = useState("languages");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const tabs = [
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "devops", label: "DevOps & Cloud" },
    { id: "education", label: "Education" },
  ];

  const renderTabContent = () => {
    const data = skillsData[activeTab];

    return (
      <motion.div
        key={activeTab}
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 relative inline-block">
            {data.title}
            <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 rounded"></div>
          </h3>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{data.description}</p>

        {activeTab === "education" ? (
          <div>
            {data.items.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-6 mb-6 last:border-b-0 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h4 className="text-xl font-bold text-blue-800 mb-2">
                  {item.school}
                </h4>
                <p className="text-gray-700 font-medium mb-1">{item.degree}</p>
                <p className="text-gray-500 text-sm">{item.date}</p>
              </motion.div>
            ))}

            <div className="mt-8">
              <h4 className="text-lg font-bold text-blue-800 mb-4">
                Relevant Coursework
              </h4>
              <div className="space-y-3">
                {data.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (data.items.length + index) * 0.1,
                      duration: 0.5,
                    }}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-800 hover:text-blue-600 transition-colors duration-200"
                    >
                      {cert.title} - {cert.provider}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://www.linkedin.com/in/pubudu-madhushan-0b0621292/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More
                <svg
                  className="ml-2 w-4 h-4"
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
            </div>
          </div>
        ) : data.subsections ? (
          <div className="space-y-8">
            {data.subsections.map((subsection, subIndex) => (
              <div key={subIndex}>
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  {subsection.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subsection.skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
              About Me
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-600 rounded"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8">
            I'm a dedicated software engineering undergraduate fueled by passion
            for technology and innovation. Through hands-on projects, continued
            learning, and real-world challenges, I strive to create practical
            solutions that make a difference in the digital world.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={setActiveTab}
            />
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
