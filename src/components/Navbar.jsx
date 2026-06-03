import React, { useState, useEffect } from 'react';
import { Menu, X, Trees } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'La Cabaña' },
    { id: 'features', label: 'Amenidades' },
    { id: 'gallery', label: 'Galería' },
    { id: 'contact', label: 'Reservar' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when section occupies the central 20% of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false);
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      // Fallback update active section immediately for snappier feedback
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-forest/90 backdrop-blur-md shadow-lg border-b border-forest-light/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center space-x-2 text-sand-light hover:opacity-90 transition-opacity"
        >
          <Trees className="w-8 h-8 text-terracotta" />
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wide leading-none">
              La Esperanza
            </span>
            <span className="text-[10px] uppercase tracking-widest text-pine-light font-sans font-medium">
              Mazamitla
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`font-sans font-medium text-sm tracking-wider uppercase transition-all duration-300 relative py-1 ${
                activeSection === item.id
                  ? 'text-terracotta'
                  : 'text-sand-light hover:text-sand-dark'
              }`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-terracotta transition-transform duration-300 origin-left ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-sand-light hover:text-terracotta transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-forest-dark/95 border-b border-forest-light/20 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`font-sans text-base tracking-wider uppercase py-2 border-b border-forest-light/10 transition-colors ${
                activeSection === item.id
                  ? 'text-terracotta font-semibold'
                  : 'text-sand-light hover:text-terracotta'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
