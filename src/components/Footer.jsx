import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Aarav ✨
          </motion.a>

          {/* Tagline */}
          <p className="text-white/80 text-lg mb-6">
            A Curious Young Learner 🚀
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Home', 'About', 'Family', 'Favorites', 'Friends', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-white mb-4"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <FiHeart size={20} fill="currentColor" className="text-red-500" />
            </motion.span>
            <span>for Aarav</span>
          </motion.div>

          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Aarav Kumar Singh. All rights reserved.
          </p>

          {/* Decorative elements */}
          <div className="mt-6 flex justify-center gap-4">
            {[...Array(7)].map((_, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.15, 
                  repeat: Infinity 
                }}
                className="text-xl"
              >
                {['⭐', '🌟', '✨', '💫', '⭐', '🌟', '✨'][i]}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-gray-50 dark:fill-gray-950"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
