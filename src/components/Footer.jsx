import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:singh.aarav@gmail.com', label: 'Email' },
  ];

  const quickLinks = ['Home', 'About', 'Family', 'Favorites', 'Friends', 'Contact'];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Aarav <span className="text-2xl">✨</span>
              </motion.a>
              <p className="text-white/80 text-base mb-4">
                A Curious Young Learner 🚀
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Exploring the world one day at a time. 
                Dreaming big and learning something new every day!
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact & Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-right"
            >
              <h4 className="text-white font-semibold text-lg mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:singh.aarav@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-center md:justify-end gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <FiMail size={16} />
                  <span className="text-sm">singh.aarav@gmail.com</span>
                </motion.a>
                <div className="flex items-center justify-center md:justify-end gap-2 text-white/80">
                  <FiMapPin size={16} />
                  <span className="text-sm">New Delhi, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/20 mb-6" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm text-center md:text-left"
            >
              © {currentYear} Aarav Kumar Singh. All rights reserved.
            </motion.p>

            {/* Made with Love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-white/80 text-sm"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <FiHeart size={16} fill="currentColor" className="text-red-500" />
              </motion.span>
              <span>for Aarav</span>
            </motion.div>

            {/* Back to Top */}
            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all border border-white/20"
            >
              ↑ Back to Top
            </motion.a>
          </div>

          {/* Decorative Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-3"
          >
            {[...Array(9)].map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-lg"
              >
                {['⭐', '🌟', '✨', '💫', '🌠', '💫', '✨', '🌟', '⭐'][i]}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave Decoration on Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-20">
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
