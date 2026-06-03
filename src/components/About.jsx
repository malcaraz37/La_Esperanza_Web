import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-sand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Section */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-terracotta text-sm font-sans font-bold tracking-[0.2em] uppercase block">
              Bienvenido a La Esperanza
            </span>
            <h2 className="text-forest text-4xl md:text-5xl font-serif font-bold leading-tight">
              Una simbiosis perfecta entre confort moderno y la calidez del bosque.
            </h2>
            <div className="w-20 h-[3px] bg-terracotta rounded-full"></div>
            
            <p className="text-forest-dark/80 font-sans text-base md:text-lg leading-relaxed pt-2">
              Ubicada a solo unos minutos del pueblo mágico de Mazamitla, la cabaña 
              <strong className="text-forest font-semibold"> La Esperanza</strong> ha sido diseñada como un santuario 
              exclusivo de desconexión. Combina la arquitectura alpina clásica con detalles contemporáneos, 
              creando un espacio que se siente lujoso y a la vez entrañablemente acogedor.
            </p>
            
            <p className="text-forest-dark/75 font-sans text-sm md:text-base leading-relaxed">
              Equipada para recibir cómodamente desde <strong>6 hasta 10 huéspedes</strong>, es el destino ideal para 
              reuniones familiares inolvidables o escapadas tranquilas en grupo. Aquí, el susurro del viento entre los 
              pinos y el crepitar de la chimenea son las únicas melodías que interrumpirán tu día.
            </p>
            
            {/* Quick Specs Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-sand p-4 rounded-xl border border-sand-dark/30 text-center">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-forest">10</span>
                <span className="text-[10px] md:text-xs font-sans text-forest-dark/70 uppercase tracking-widest">Huéspedes máx.</span>
              </div>
              <div className="bg-sand p-4 rounded-xl border border-sand-dark/30 text-center">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-forest">6</span>
                <span className="text-[10px] md:text-xs font-sans text-forest-dark/70 uppercase tracking-widest">Camas</span>
              </div>
              <div className="bg-sand p-4 rounded-xl border border-sand-dark/30 text-center">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-forest">2</span>
                <span className="text-[10px] md:text-xs font-sans text-forest-dark/70 uppercase tracking-widest">Baños</span>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-pine-light/10 rounded-2xl -rotate-2 -z-10" />
            <div className="absolute -inset-2 bg-terracotta/5 rounded-2xl rotate-1 -z-10" />
            
            <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-sand-light transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="/images/la_esperanza_interior.png" 
                alt="Interior de Cabaña La Esperanza" 
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating forest label */}
            <div className="absolute bottom-6 -left-6 bg-forest text-sand-light p-4 rounded-xl shadow-xl hidden md:block max-w-[200px]">
              <p className="font-serif text-sm font-semibold italic">"El lugar perfecto para avivar la fogata de la amistad y el descanso familiar."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
