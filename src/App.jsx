import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -12% 0px', // Triggers slightly before the element occupies the viewport
      threshold: 0.08, // Triggers when at least 8% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-sand-light text-forest-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Features />
        </div>
        <div className="reveal">
          <Gallery />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
