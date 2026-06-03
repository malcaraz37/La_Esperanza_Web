import React from 'react';
import { 
  Bath, 
  BedDouble, 
  Flame, 
  Wifi, 
  Wind, 
  UtensilsCrossed, 
  ThermometerSun, 
  Sparkles,
  TreePine
} from 'lucide-react';

const Features = () => {
  const amenities = [
    {
      icon: <BedDouble className="w-8 h-8 text-terracotta" />,
      title: "6 Camas Confortables",
      desc: "Distribuidas en habitaciones espaciosas con ropa de cama premium, perfectas para un descanso reparador."
    },
    {
      icon: <Bath className="w-8 h-8 text-terracotta" />,
      title: "2 Baños Completos",
      desc: "Diseños de lujo con acabados en piedra natural y toallas suaves para todos los huéspedes."
    },
    {
      icon: <ThermometerSun className="w-8 h-8 text-terracotta" />,
      title: "Calefactor de Alta Potencia",
      desc: "Mantén el ambiente perfectamente cálido durante las noches frías y neblinosas de la sierra."
    },
    {
      icon: <Wind className="w-8 h-8 text-terracotta" />,
      title: "Aire Acondicionado",
      desc: "Control de clima de última generación para asegurar tu comodidad en cualquier temporada."
    },
    {
      icon: <Wifi className="w-8 h-8 text-terracotta" />,
      title: "Conexión WiFi Veloz",
      desc: "Internet de banda ancha estable para trabajar a distancia o reproducir tus contenidos favoritos."
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-terracotta" />,
      title: "Cocineta Equipada",
      desc: "Cafetera, parrilla, refrigerador y utensilios básicos listos para preparar tus desayunos o cenas."
    },
    {
      icon: <Flame className="w-8 h-8 text-terracotta" />,
      title: "Regaderas Calientes",
      desc: "Agua caliente con excelente presión a cualquier hora del día para reconfortarte tras un paseo."
    },
    {
      icon: <TreePine className="w-8 h-8 text-terracotta" />,
      title: "Terraza Privada",
      desc: "Un deck exterior amueblado y rodeado de árboles, ideal para tomar el café matutino o ver el atardecer."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-terracotta" />,
      title: "Zona de Fogata",
      desc: "Espacio exterior seguro en el jardín diseñado para encender una fogata y asar bombones bajo las estrellas."
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-forest text-sand-light relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pine-light/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-terracotta text-sm font-sans font-bold tracking-[0.2em] uppercase block mb-3">
            Todo lo que necesitas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Amenidades de Lujo en Plena Naturaleza
          </h2>
          <div className="w-20 h-[3px] bg-terracotta rounded-full mx-auto mb-6"></div>
          <p className="text-sand-dark/80 font-sans text-sm md:text-base leading-relaxed">
            Equipamos "La Esperanza" pensando en cada detalle para hacer tu estadía perfecta. 
            Disfruta de la atmósfera rústica de la montaña sin renunciar a ninguna comodidad moderna.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-forest-dark/50 border border-forest-light/20 p-8 rounded-2xl hover:border-terracotta/40 hover:bg-forest-dark/80 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex flex-col h-full"
            >
              <div className="bg-forest/60 p-4 rounded-xl w-fit mb-6 group-hover:bg-forest/80 transition-colors duration-300 group-hover:scale-110 transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-sand-light group-hover:text-terracotta transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sand-dark/70 font-sans text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
