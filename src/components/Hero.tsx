import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <nav className="fixed top-0 w-full z-20 bg-[#081d2c]/90 backdrop-blur-lg py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/assets/logo.png"
              alt="Logo" 
              className="h-10 w-8 mr-2" 
            />
            <span className="text-white text-2xl font-bold">ELUMINA</span>
          </div>
          <ul className="flex space-x-6 text-white text-lg">
            <li
              className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionizing Smart Street Lighting with AI & Sustainability
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI CCTV-integrated street lights for enhanced safety and smart cities.
          </motion.p>
          
          <motion.button
            onClick={scrollToContact}
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
