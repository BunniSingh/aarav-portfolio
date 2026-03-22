import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Family from './components/Family';
import Favorites from './components/Favorites';
import Friends from './components/Friends';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Family />
        <Favorites />
        <Friends />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
