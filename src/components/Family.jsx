import { motion } from 'framer-motion';
import { FiUser, FiHeart } from 'react-icons/fi';

const Family = () => {
  const familyMembers = [
    {
      name: 'Santosh Kumar Singh',
      role: 'Father',
      emoji: '👨',
      gradient: 'from-blue-400 to-blue-600',
      description: 'My superhero and role model',
    },
    {
      name: 'Sonika Kumari Singh',
      role: 'Mother',
      emoji: '👩',
      gradient: 'from-pink-400 to-pink-600',
      description: 'My loving guardian angel',
    },
  ];

  return (
    <section id="family" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-block text-4xl mb-4"
          >
            👨‍👩‍👦
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Family</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The people who love me the most and support me every day!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {familyMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-hover relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`} />
              
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Background pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.gradient} opacity-10 rounded-bl-full`} />
                
                <div className="text-center">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${member.gradient} mb-6 shadow-lg`}
                  >
                    <span className="text-5xl md:text-6xl">{member.emoji}</span>
                  </motion.div>

                  {/* Role Badge */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${member.gradient} mb-4`}
                  >
                    {member.role}
                  </motion.span>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {member.description}
                  </p>

                  {/* Love indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-flex items-center gap-2 text-red-500"
                  >
                    <FiHeart size={20} fill="currentColor" />
                    <span className="font-medium">Loves me lots!</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="text-2xl">💝</span>{' '}
              <span className="font-semibold">My family is my strength!</span> They always 
              encourage me to dream big and work hard.
              <span className="text-2xl"> 🏠</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Family;
