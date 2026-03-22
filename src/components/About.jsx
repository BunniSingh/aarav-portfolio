import { motion } from 'framer-motion';
import { FiBook, FiUser, FiAward, FiHeart } from 'react-icons/fi';

const About = () => {
  const details = [
    { icon: FiUser, label: 'Name', value: 'Aarav Kumar Singh', color: 'text-primary' },
    { icon: FiBook, label: 'Class', value: 'Third A', color: 'text-secondary' },
    { icon: FiAward, label: 'School', value: 'PM Shri Kendriya Vidyalaya BSF Camp, Chhawla, New Delhi', color: 'text-accent' },
    { icon: FiHeart, label: 'Class Teacher', value: 'Depanshi Ma\'am', color: 'text-primary' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-4xl mb-4"
          >
            🎓
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about the curious learner behind this portfolio!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              className="relative w-full max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-9xl mb-4"
                  >
                    👨‍🎓
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Aarav Kumar Singh
                  </h3>
                  <p className="text-primary font-semibold text-lg">Class 3rd Student</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-3xl"
                    >
                      📖
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-3xl"
                    >
                      ✏️
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-3xl"
                    >
                      🎒
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-3xl"
                    >
                      🏆
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="card-hover bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 ${detail.color}`}>
                    <detail.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {detail.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {detail.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-3xl p-8 max-w-3xl">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-3xl">🌟</span>{' '}
              <span className="font-semibold">I'm a fun-loving student</span> who enjoys 
              learning and exploring new things every day! I love asking questions, 
              solving problems, and making new friends. My favorite subjects are 
              <span className="text-primary font-bold"> Math</span> and 
              <span className="text-secondary font-bold"> English</span>, and I dream 
              of becoming something amazing when I grow up!
              <span className="text-3xl"> 🚀</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
