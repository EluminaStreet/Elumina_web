import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Hero() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Smooth scroll helper
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <nav className="fixed top-0 w-full z-20 bg-[#081d2c]/90 backdrop-blur-lg py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="h-10 w-8 mr-2" />
            <span className="text-white text-2xl font-bold">ELUMINA</span>
          </div>

          <ul className="hidden md:flex space-x-6 text-white text-lg">
            {['about', 'services', 'contact'].map((sec) => (
              <li
                key={sec}
                className="cursor-pointer hover:text-yellow-300 transition-colors duration-300"
                onClick={() => scrollTo(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white fixed top-4 right-4 z-40"
            onClick={() => setSidebarOpen((o) => !o)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: sidebarOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-[#081d2c] z-30 shadow-lg md:hidden"
      >
        {/* Close button inside the sidebar */}
        <button
          className="text-white absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={24} />
        </button>

        <ul className="flex flex-col mt-20 space-y-6 px-6 text-white text-xl">
          {['about', 'services', 'contact'].map((sec) => (
            <li
              key={sec}
              className="cursor-pointer hover:text-yellow-300 transition-colors"
              onClick={() => {
                scrollTo(sec);
                setSidebarOpen(false);
              }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </ul>
      </motion.div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80)',
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
            onClick={() => scrollTo('contact')}
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
            onClick={() => scrollTo('about')}
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
