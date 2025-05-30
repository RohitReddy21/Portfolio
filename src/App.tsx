import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import ThemeProvider from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading ? (
          <div key="loader\" className="fixed inset-0 flex items-center justify-center bg-violet-950">
            <div className="text-white text-2xl font-bold">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-white">Loading...</p>
              </div>
            </div>
          </div>
        ) : (
          <div key="content" className="relative overflow-hidden">
            <Cursor />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;