import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Products />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;