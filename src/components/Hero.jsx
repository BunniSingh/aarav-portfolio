import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import aarav_1 from '../assets/aarav_1.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob w-96 h-96 bg-primary/30 dark:bg-primary/20 -top-20 -left-20" />
        <div className="blob w-80 h-80 bg-secondary/30 dark:bg-secondary/20 top-1/2 -right-20" style={{ animationDelay: '2s' }} />
        <div className="blob w-72 h-72 bg-accent/30 dark:bg-accent/20 -bottom-20 left-1/3" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full"
            >
              <span className="text-primary dark:text-primary-light font-semibold text-sm md:text-base">
                👋 Welcome to my world!
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Aarav</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-6 h-12">
              <span className="gradient-text">
                <Typewriter
                  words={['A Curious Young Learner 🚀', 'Future Coder 💻', 'Little Artist 🎨', 'Math Whiz 🔢']}
                  loop={0}
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
            >
              I'm an 8-year-old explorer who loves discovering new things, 
              solving puzzles, and creating amazing stuff!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Learn More About Me
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-primary dark:text-primary-light font-bold rounded-full shadow-lg hover:shadow-xl border-2 border-primary dark:border-primary-light transition-all"
              >
                Say Hello 👋
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl scale-110" />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    {/* Avatar Placeholder */}
                    <div className="text-center">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-8xl sm:text-9xl"
                      >
                        <img src={aarav_1} alt="Aarav" />
                      </motion.span>
                      <p className="text-gray-400 dark:text-gray-500 text-sm mt-4 font-medium">
                        Aarav's Photo
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 text-4xl"
              >
                🚀
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 text-4xl"
              >
                ⭐
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 -right-8 text-3xl"
              >
                🎨
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity }}
                className="absolute top-1/4 -left-8 text-3xl"
              >
                📚
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-600 text-2xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
