import { motion } from 'framer-motion';
import { FiMonitor, FiActivity, FiBookOpen, FiPenTool } from 'react-icons/fi';

const Favorites = () => {
  const favorites = [
    {
      icon: FiMonitor,
      title: 'Computer',
      emoji: '💻',
      description: 'I love exploring technology and learning to code!',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: FiActivity,
      title: 'Playing',
      emoji: '⚽',
      description: 'Sports and outdoor games keep me active and happy!',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      icon: FiBookOpen,
      title: 'Study',
      emoji: '📚',
      description: 'Math & English are my favorite subjects!',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: FiPenTool,
      title: 'Drawing',
      emoji: '🎨',
      description: 'I love creating art and expressing my imagination!',
      gradient: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
  ];

  return (
    <section id="favorites" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent dark:via-secondary/10" />
      
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
            ⭐
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Favorites</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Things that make me happy and keep me excited!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="card-hover group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
              
              <div className={`relative ${item.bgColor} dark:border-0 rounded-3xl p-6 md:p-8 text-center border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-600 transition-all h-full`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} mb-4 shadow-lg`}
                >
                  <item.icon size={32} className="text-white" />
                </motion.div>

                {/* Emoji */}
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                  className="text-4xl md:text-5xl block mb-4"
                >
                  {item.emoji}
                </motion.span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  {item.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-4 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-3xl p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="text-2xl">🌈</span>{' '}
              <span className="font-semibold">I believe in trying new things!</span> Every 
              day is a chance to discover something amazing!
              <span className="text-2xl"> ✨</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Favorites;
