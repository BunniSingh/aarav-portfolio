import { motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';

const Friends = () => {
  const friends = [
    { name: 'Ali', emoji: '🦁', color: 'from-amber-400 to-orange-500' },
    { name: 'Lado', emoji: '🐼', color: 'from-green-400 to-emerald-500' },
    { name: 'Gulabsa', emoji: '🌸', color: 'from-pink-400 to-rose-500' },
    { name: 'Pratick', emoji: '🚀', color: 'from-blue-400 to-indigo-500' },
    { name: 'Ashish', emoji: '⭐', color: 'from-purple-400 to-violet-500' },
  ];

  return (
    <section id="friends" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-accent/5 via-primary/5 to-secondary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            🤝
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Friends</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The awesome people I love to play and learn with!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {friends.map((friend, index) => (
            <motion.div
              key={friend.name}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -10, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="card-hover group"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${friend.color} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`} />
                
                {/* Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-xl border border-gray-100 dark:border-gray-700">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${friend.color} mb-4 shadow-lg mx-auto`}
                  >
                    <span className="text-3xl md:text-4xl">{friend.emoji}</span>
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {friend.name}
                  </h3>

                  {/* Badge */}
                  <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-full text-xs font-medium text-primary dark:text-primary-light">
                    Best Friend
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Friends message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white dark:bg-gray-800 rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="text-2xl">🎉</span>{' '}
              <span className="font-semibold">Friends make everything more fun!</span> We 
              play, study, and laugh together every day!
              <span className="text-2xl"> 🎮</span>
            </p>
          </div>
        </motion.div>

        {/* Group photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <FiUsers size={20} />
            <span className="text-sm">More fun memories coming soon!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Friends;
