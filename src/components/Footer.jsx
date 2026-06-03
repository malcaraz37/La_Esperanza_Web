import React from 'react';
import { Trees, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-forest-dark text-sand-dark pt-16 pb-8 border-t border-forest-light/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">

          {/* Logo and Brand message */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 text-sand-light">
              <Trees className="w-8 h-8 text-terracotta" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide leading-none">
                  La Esperanza
                </span>
                <span className="text-[9px] uppercase tracking-widest text-pine-light font-sans font-medium">
                  Mazamitla
                </span>
              </div>
            </div>
            <p className="font-sans text-xs md:text-sm text-sand-dark/70 leading-relaxed max-w-sm">
              Tu escape ideal a las montañas de Jalisco. Vive el equilibrio perfecto entre
              la belleza natural de la sierra y las comodidades de un hospedaje de primer nivel.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sand-light text-sm uppercase tracking-wider">Enlaces Rápidos</h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a href="#hero" className="hover:text-terracotta transition-colors duration-200">Inicio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-terracotta transition-colors duration-200">La Cabaña</a>
              </li>
              <li>
                <a href="#features" className="hover:text-terracotta transition-colors duration-200">Amenidades</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-terracotta transition-colors duration-200">Galería</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-terracotta transition-colors duration-200">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Social and Disclaimer */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sand-light text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-forest/50 hover:bg-terracotta p-3 rounded-lg text-sand-light transition-all duration-300 transform hover:-translate-y-1" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="bg-forest/50 hover:bg-terracotta p-3 rounded-lg text-sand-light transition-all duration-300 transform hover:-translate-y-1" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="bg-forest/50 hover:bg-terracotta p-3 rounded-lg text-sand-light transition-all duration-300 transform hover:-translate-y-1" aria-label="Correo">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2 space-y-3">
              <div>
                <span className="block text-[10px] uppercase font-sans tracking-widest text-terracotta font-semibold">Aviso de Privacidad</span>
                <p className="font-sans text-[11px] text-sand-dark/50 leading-relaxed mt-1">
                </p>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-sans tracking-widest text-terracotta font-semibold">Aviso de Privacidad</span>
                <p className="font-sans text-[11px] text-sand-dark/50 leading-relaxed mt-1">
                  Los datos personales recabados a través del formulario de reservación serán tratados de manera confidencial y con el único fin de procesar la solicitud de estancia, verificar disponibilidad de fechas y contactarle para el seguimiento de su solicitud.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="pt-8 border-t border-forest-light/10 flex flex-col md:flex-row justify-between items-center text-xs text-sand-dark/65 space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Cabaña La Esperanza. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
