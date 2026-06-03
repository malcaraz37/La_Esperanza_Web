import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const images = [
    {
      src: '/images/la_esperanza_exterior.png',
      alt: 'Fachada exterior de la cabaña rodeada de pinos y niebla',
      title: 'Fachada Exterior',
      subtitle: 'Arquitectura alpina contemporánea en armonía con el entorno.',
      colSpan: 'md:col-span-2'
    },
    {
      src: '/images/la_esperanza_interior.png',
      alt: 'Interior acogedor con chimenea de piedra y sofás de cuero',
      title: 'Sala de Estar',
      subtitle: 'Cálida chimenea de piedra natural y ventanales panorámicos.',
      colSpan: 'md:col-span-1'
    },
    {
      src: '/images/la_esperanza_kitchen.png',
      alt: 'Cocineta rústica moderna con barra de madera',
      title: 'Cocineta Equipada',
      subtitle: 'Detalles en negro mate combinados con madera natural pulida.',
      colSpan: 'md:col-span-1'
    },
    {
      src: '/images/la_esperanza_bedroom.png',
      alt: 'Cama king-size con ropa de cama acogedora y calefactor',
      title: 'Habitación Principal',
      subtitle: 'Descanso de lujo con balcón privado al bosque.',
      colSpan: 'md:col-span-1'
    },
    {
      src: '/images/la_esperanza_bathroom.png',
      alt: 'Baño de diseño con tina o regadera de lluvia con vapor caliente',
      title: 'Baño Spa',
      subtitle: 'Una experiencia de relajación total con vistas arboladas.',
      colSpan: 'md:col-span-1'
    }
  ];

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-terracotta text-sm font-sans font-bold tracking-[0.2em] uppercase block mb-3">
            Galería Visual
          </span>
          <h2 className="text-forest text-4xl md:text-5xl font-serif font-bold mb-6">
            Explora Cada Rincón de La Esperanza
          </h2>
          <div className="w-20 h-[3px] bg-terracotta rounded-full mx-auto mb-6"></div>
          <p className="text-forest-dark/80 font-sans text-sm md:text-base leading-relaxed">
            Hemos capturado la esencia del bosque y los detalles de confort de la cabaña. 
            Te invitamos a realizar un recorrido visual por las estancias diseñadas para tu deleite.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl shadow-md border-2 border-sand-light cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-terracotta/40 ${img.colSpan}`}
              onClick={() => setSelectedIdx(idx)}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[280px] md:h-[350px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 z-10" />

              {/* Icon indicator */}
              <div className="absolute top-4 right-4 bg-sand-light/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <Maximize2 className="w-4 h-4 text-sand-light" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-lg md:text-xl font-bold text-sand-light mb-1">
                  {img.title}
                </h3>
                <p className="text-sand-dark/80 font-sans text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 bg-forest-dark/95 backdrop-blur-md z-[999] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIdx(null)}
            className="absolute top-6 right-6 text-sand-light/70 hover:text-sand-light bg-forest/40 p-3 rounded-full hover:bg-forest/80 transition-colors z-50 focus:outline-none"
            aria-label="Cerrar galería"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous control */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-sand-light/70 hover:text-sand-light bg-forest/40 p-3 rounded-full hover:bg-forest/80 transition-colors z-50 focus:outline-none"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIdx].src}
              alt={images[selectedIdx].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-forest-light/20 shadow-2xl"
            />
            {/* Info display below image */}
            <div className="text-center mt-6 text-sand-light max-w-2xl px-4">
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">
                {images[selectedIdx].title}
              </h3>
              <p className="font-sans text-sm text-sand-dark/80">
                {images[selectedIdx].subtitle}
              </p>
            </div>
          </div>

          {/* Next control */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-sand-light/70 hover:text-sand-light bg-forest/40 p-3 rounded-full hover:bg-forest/80 transition-colors z-50 focus:outline-none"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
