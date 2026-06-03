import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/la_esperanza_exterior.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark tint overlay with rich forest green color */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/40 to-forest-dark/50 z-10" />

      {/* Main Text Content */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center animate-fade-up">
        <span className="text-terracotta text-sm md:text-base font-sans font-semibold tracking-[0.3em] uppercase mb-4">
          Un refugio exclusivo en la sierra
        </span>
        <h1 className="text-sand-light text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight drop-shadow-md">
          Cabaña La Esperanza
        </h1>
        <p className="text-sand-dark text-lg md:text-xl font-sans font-light max-w-2xl mb-10 leading-relaxed">
          Descubre el verdadero significado de la tranquilidad. Un escape de lujo rodeado de altos pinos y la magia del bosque templado de Mazamitla, Jalisco.
        </p>

        {/* Call to Action Button */}
        <a
          href="#contact"
          onClick={handleScrollToContact}
          className="group flex items-center space-x-3 bg-terracotta hover:bg-terracotta-dark text-sand-light px-8 py-4 rounded-lg font-sans font-semibold uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-terracotta/20 hover:shadow-terracotta/40"
        >
          <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          <span>Reserva tu estancia</span>
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-sand-light/65 hover:text-sand-light cursor-pointer transition-colors duration-300">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('about');
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth',
              });
            }
          }}
          className="flex flex-col items-center space-y-1"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans">Deslizar</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
