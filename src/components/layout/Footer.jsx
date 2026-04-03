import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  BookOpen,
  ChevronRight,
} from "lucide-react";

function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#intro", label: "Intro" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pubudu-madhushan-0b0621292",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/pubudu2003060",
      label: "GitHub",
    },
    {
      icon: BookOpen,
      href: "https://medium.com/@madushanp835",
      label: "Medium",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "madhushanpubudu2@gmail.com",
    },
    {
      icon: MapPin,
      text: "No 11/13 Hunupitiya, Kelaniya, Sri Lanka",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Pubudu <span className="text-cyan-400">Madushan</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Software Engineering Student passionate about creating innovative
              solutions and exploring cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  title={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ChevronRight size={16} className="mr-2 text-cyan-600" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <item.icon
                    size={18}
                    className="text-cyan-400 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-slate-400">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pubudu Madushan. All rights reserved.
          </p>
          
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg text-sm hover:bg-slate-700 hover:text-white transition-colors duration-300 border border-slate-700"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
