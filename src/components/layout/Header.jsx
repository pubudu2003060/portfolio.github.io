import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home", title: "Home" },
    {
      href: "#intro",
      label: "Intro",
      title: "Intro - Welcome to my Digital Space",
    },
    {
      href: "#about",
      label: "About",
      title: "About - Learn my journey and skills",
    },
    {
      href: "#projects",
      label: "Projects",
      title: "Projects - Check out my work",
    },
    {
      href: "#blog",
      label: "Blog",
      title: "Blog - Read my latest tech insights",
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-50/80 backdrop-blur-md shadow-sm"
          : "bg-blue-50/95 backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-blue-800 tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            Pubudu Madushan
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-blue-800 font-medium transition-colors duration-200"
                title={link.title}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:block bg-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-900 transition-colors duration-200"
            title="Contact - Let's connect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-800"
            title="Menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
          initial={false}
          animate={{
            maxHeight: isMenuOpen ? 384 : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 bg-blue-100/50 rounded-lg mb-4">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-200/50 rounded-md transition-colors duration-200"
                title={link.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="block w-full text-left px-4 py-3 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-900 transition-colors duration-200"
              title="Contact - Let's connect"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              Contact
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
