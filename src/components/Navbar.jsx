import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Family', href: '#family' },
    { name: 'Favorites', href: '#favorites' },
    { name: 'Friends', href: '#friends' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl md:text-3xl font-bold gradient-text"
          >
            Aarav ✨
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light font-medium rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light hover:bg-primary/20 dark:hover:bg-primary/30 transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              whileTap={{ scale: 0.98 }}
              className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light font-medium rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
