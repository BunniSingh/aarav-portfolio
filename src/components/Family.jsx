import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import father from '../assets/father.png';
import mother from '../assets/mother.png';
import uncle from '../assets/uncle.png';
import grand_mother from '../assets/grand_mother.png';
import grand_father from '../assets/grand_father.png';
import big_grand_father from '../assets/big_grand_father.png';
import big_grand_mother from '../assets/big_grand_mother.png';

const Family = () => {
  const familyMembers = [
    {
      name: 'Santosh Kr. Singh',
      originalName: 'Santosh Kumar Singh',
      role: 'Father',
      emoji: '👨',
      gradient: 'from-blue-400 to-blue-600',
      description: 'My superhero and role model',
      image: father,
      relationship: 'Dad | My Hero',
    },
    {
      name: 'Sonika Kr. Singh',
      originalName: 'Sonika Kumari Singh',
      role: 'Mother',
      emoji: '👩',
      gradient: 'from-pink-400 to-pink-600',
      description: 'My loving guardian angel',
      image: mother,
      relationship: 'Mom | My Angel',
    },
    {
      name: 'Banti Kr. Singh',
      originalName: 'Banti Kumar Singh',
      role: 'Uncle',
      emoji: '🧑',
      gradient: 'from-purple-400 to-purple-600',
      description: 'My fun-loving uncle',
      image: uncle,
      relationship: 'Chacha | Fun Partner',
    },
    {
      name: 'Sunita Devi',
      originalName: 'Sunita Devi',
      role: 'Grandmother',
      emoji: '👵',
      gradient: 'from-rose-400 to-rose-600',
      description: 'My caring grandmother',
      image: grand_mother,
      relationship: 'Dadi | Love & Care',
    },
    {
      name: 'Sanjeev Kr. Singh',
      originalName: 'Sanjeev Kumar Singh',
      role: 'Grandfather',
      emoji: '👴',
      gradient: 'from-indigo-400 to-indigo-600',
      description: 'My wise grandfather',
      image: grand_father,
      relationship: 'Dada | Wisdom',
    },
    {
      name: 'Sugriw Singh',
      originalName: 'Sugriw Singh',
      role: 'Great Grandfather',
      emoji: '👴',
      gradient: 'from-amber-400 to-amber-600',
      description: 'My beloved great grandfather',
      image: big_grand_father,
      relationship: 'Great Dada | Blessings',
    },
    {
      name: 'Sampati Devi',
      originalName: 'Sampati Devi',
      role: 'Great Grandmother',
      emoji: '👵',
      gradient: 'from-teal-400 to-teal-600',
      description: 'My beloved great grandmother',
      image: big_grand_mother,
      relationship: 'Great Dadi | Blessings',
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {familyMembers.map((member, index) => (
            <motion.div
              key={member.originalName}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-hover relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`} />
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                {/* Horizontal layout: image on left, details on right */}
                <div className="flex items-center gap-4 p-4 md:p-5">
                  {/* Left: Avatar Image */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    className="flex-shrink-0"
                  >
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 shadow-md`}>
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Right: Name, Relationship, Description */}
                  <div className="flex-1 min-w-0">
                    {/* Name with Kr. abbreviation */}
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate flex items-center gap-1">
                      {member.name}
                      {member.role === 'Father' && <span className="text-blue-500 text-sm">👨</span>}
                      {member.role === 'Mother' && <span className="text-pink-500 text-sm">👩</span>}
                      {member.role === 'Uncle' && <span className="text-purple-500 text-sm">🧑</span>}
                      {member.role === 'Grandmother' && <span className="text-rose-500 text-sm">👵</span>}
                      {member.role === 'Grandfather' && <span className="text-indigo-500 text-sm">👴</span>}
                    </h3>
                    
                    {/* Relationship badge */}
                    <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                      <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${member.gradient} text-white shadow-sm`}>
                        {member.role}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {member.relationship}
                      </span>
                    </div>

                    {/* Short description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-2">
                      {member.description}
                    </p>

                    {/* Love indicator - subtle and compact */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
                      className="inline-flex items-center gap-1.5 text-red-500 dark:text-red-400 text-xs"
                    >
                      <FiHeart size={14} fill="currentColor" />
                      <span className="font-medium">Loves me lots!</span>
                    </motion.div>
                  </div>
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