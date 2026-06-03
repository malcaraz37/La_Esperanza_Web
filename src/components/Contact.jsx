import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Users, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  // Get today's date formatted as YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  // Real-time validations
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'El nombre es obligatorio.';
        } else if (value.trim().length < 3) {
          error = 'El nombre debe tener al menos 3 caracteres.';
        }
        break;
      case 'email':
        if (!value) {
          error = 'El correo electrónico es obligatorio.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'El formato del correo electrónico no es válido.';
        }
        break;
      case 'phone':
        const cleanPhone = value.replace(/\D/g, '');
        if (!value) {
          error = 'El número de teléfono es obligatorio.';
        } else if (cleanPhone.length !== 10) {
          error = 'El teléfono debe constar de 10 dígitos numéricos.';
        }
        break;
      case 'checkIn':
        if (!value) {
          error = 'La fecha de llegada es obligatoria.';
        } else if (value < todayStr) {
          error = 'La fecha no puede estar en el pasado.';
        }
        break;
      case 'checkOut':
        if (!value) {
          error = 'La fecha de salida es obligatoria.';
        } else if (formData.checkIn && value <= formData.checkIn) {
          error = 'La salida debe ser posterior a la fecha de llegada.';
        }
        break;
      case 'guests':
        const num = parseInt(value, 10);
        if (!value || isNaN(num)) {
          error = 'El número de huéspedes es obligatorio.';
        } else if (num < 1 || num > 10) {
          error = 'Capacidad de cabaña es de 1 a 10 personas.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    
    // Set all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid! Simulate API request
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: 2,
      message: ''
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-sand-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Info card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-terracotta text-sm font-sans font-bold tracking-[0.2em] uppercase block mb-3">
                Contacto & Ubicación
              </span>
              <h2 className="text-forest text-4xl md:text-5xl font-serif font-bold mb-6">
                Planea tu Próxima Escapada
              </h2>
              <div className="w-20 h-[3px] bg-terracotta rounded-full mb-8"></div>
              
              <p className="text-forest-dark/85 font-sans text-sm md:text-base leading-relaxed mb-8">
                Estamos listos para recibirte en la tranquilidad del bosque. Completa el formulario de reserva 
                y nuestro equipo se pondrá en contacto contigo en menos de 24 horas para finalizar tu reserva.
              </p>

              {/* Contact Icons */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pine/10 p-3 rounded-lg text-pine">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-forest text-sm uppercase tracking-wider">Llámanos o escríbenos</h4>
                    <p className="font-sans text-forest-dark/80 text-sm mt-1">+52 (33) 9876 5432</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pine/10 p-3 rounded-lg text-pine">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-forest text-sm uppercase tracking-wider">Correo de atención</h4>
                    <p className="font-sans text-forest-dark/80 text-sm mt-1">reservaciones@laesperanzamazamitla.com</p>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/Y3X1Vr2BpzQ46Vmc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="bg-pine/10 p-3 rounded-lg text-pine group-hover:bg-terracotta group-hover:text-sand-light transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-forest text-sm uppercase tracking-wider group-hover:text-terracotta transition-colors duration-300">Ubicación</h4>
                    <p className="font-sans text-forest-dark/80 text-sm mt-1 leading-relaxed">
                      19°54'56.7"N 103°02'39.8"W<br />
                      WX84+865 La Cofradía, 49513 Jal.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Stylized Mock Map with Google Maps link */}
            <a
              href="https://maps.app.goo.gl/Y3X1Vr2BpzQ46Vmc9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 overflow-hidden rounded-2xl border border-sand-dark shadow-md relative h-48 bg-pine-dark/10 flex items-center justify-center group cursor-pointer block"
            >
              {/* Forest Silhouette placeholder map */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/images/la_esperanza_exterior.png')", filter: "blur(2px) brightness(0.4)" }} />
              <div className="relative z-10 text-center text-sand-light p-4">
                <MapPin className="w-8 h-8 text-terracotta mx-auto mb-2 animate-bounce" />
                <span className="font-serif font-semibold text-sm block group-hover:text-terracotta transition-colors duration-300">Ver en Google Maps</span>
                <span className="font-sans text-xs text-sand-dark/85">19°54'56.7"N 103°02'39.8"W</span>
              </div>
            </a>

          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="bg-sand p-8 md:p-12 rounded-3xl shadow-xl border border-sand-dark/50">
              
              {isSubmitted ? (
                /* Success Screen */
                <div className="text-center py-12 space-y-6 animate-fade-up">
                  <div className="inline-flex bg-forest/10 p-5 rounded-full text-forest mb-4">
                    <CheckCircle2 className="w-16 h-16" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-forest">
                    ¡Solicitud Recibida!
                  </h3>
                  <p className="text-forest-dark/80 font-sans text-sm md:text-base max-w-md mx-auto leading-relaxed">
                    Hemos registrado tu solicitud de reservación para **{formData.name}** del **{formData.checkIn}** al **{formData.checkOut}** para **{formData.guests}** personas. 
                    Te enviaremos una confirmación de disponibilidad a **{formData.email}** a la brevedad.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="bg-forest hover:bg-forest-dark text-sand-light px-8 py-3 rounded-lg font-sans font-semibold uppercase tracking-wider text-sm transition-colors duration-300"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-forest mb-4">
                    Formulario de Reservación
                  </h3>
                  
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-sans font-semibold text-xs uppercase tracking-wider text-forest/80 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Ej. Juan Pérez"
                      className={`bg-sand-light border px-4 py-3 rounded-lg text-sm text-forest-dark placeholder-forest-dark/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        touched.name && errors.name
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-sand-dark focus:border-pine focus:ring-pine/20'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <span className="text-red-500 text-xs font-sans mt-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-sans font-semibold text-xs uppercase tracking-wider text-forest/80 mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="ejemplo@correo.com"
                        className={`bg-sand-light border px-4 py-3 rounded-lg text-sm text-forest-dark placeholder-forest-dark/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          touched.email && errors.email
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-sand-dark focus:border-pine focus:ring-pine/20'
                        }`}
                      />
                      {touched.email && errors.email && (
                        <span className="text-red-500 text-xs font-sans mt-1">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-sans font-semibold text-xs uppercase tracking-wider text-forest/80 mb-2">
                        Teléfono (10 dígitos)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Ej. 3312345678"
                        className={`bg-sand-light border px-4 py-3 rounded-lg text-sm text-forest-dark placeholder-forest-dark/30 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          touched.phone && errors.phone
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-sand-dark focus:border-pine focus:ring-pine/20'
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <span className="text-red-500 text-xs font-sans mt-1">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Dates Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Check In */}
                    <div className="flex flex-col">
                      <label htmlFor="checkIn" className="font-sans font-semibold text-xs uppercase tracking-wider text-forest/80 mb-2 flex items-center">
                        <Calendar className="w-3.5 h-3.5 text-terracotta mr-1" />
                        Llegada
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        min={todayStr}
                        value={formData.checkIn}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-sand-light border px-4 py-3 rounded-lg text-sm text-forest-dark focus:outline-none focus:ring-2 transition-all duration-300 ${
                          touched.checkIn && errors.checkIn
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-sand-dark focus:border-pine focus:ring-pine/20'
                        }`}
                      />
                      {touched.checkIn && errors.checkIn && (
                        <span className="text-red-500 text-xs font-sans mt-1">{errors.checkIn}</span>
                      )}
                    </div>

                    {/* Check Out */}
                    <div className="flex flex-col">
                      <label htmlFor="checkOut" className="font-sans font-semibold text-xs uppercase tracking-wider text-forest/80 mb-2 flex items-center">
                        <Calendar className="w-3.5 h-3.5 text-terracotta mr-1" />
                        Salida
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        min={formData.checkIn || todayStr}
                        value={formData.checkOut}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-sand-light border px-4 py-3 rounded-lg text-sm text-forest-dark focus:outline-none focus:ring-2 transition-all duration-300 ${
                          touched.checkOut && errors.checkOut
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-sand-dark focus:border-pine focus:ring-pine/20'
                        }`}
                      />
                      {touched.checkOut && errors.checkOut && (
                        <span className="text-red-500 text-xs font-sans mt-1">{errors.checkOut}</span>
                      )}
                    </div>

                    {/* Guests */}
                    <div className="flex flex-col">
                      <label htmlFor="guests" className="font-sans font-semibold text-xs uppercase tracking-wider text-forest/80 mb-2 flex items-center">
                        <Users className="w-3.5 h-3.5 text-terracotta mr-1" />
                        Huéspedes
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        max="10"
                        value={formData.guests}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-sand-light border px-4 py-3 rounded-lg text-sm text-forest-dark focus:outline-none focus:ring-2 transition-all duration-300 ${
                          touched.guests && errors.guests
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-sand-dark focus:border-pine focus:ring-pine/20'
                        }`}
                      />
                      {touched.guests && errors.guests && (
                        <span className="text-red-500 text-xs font-sans mt-1">{errors.guests}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-sans font-semibold text-xs uppercase tracking-wider text-forest/80 mb-2">
                      Mensaje / Requerimientos Especiales
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ej. Viajo con niños, ¿cuentan con asador extra? / Solicito toallas extra."
                      className="bg-sand-light border border-sand-dark px-4 py-3 rounded-lg text-sm text-forest-dark placeholder-forest-dark/30 focus:outline-none focus:border-pine focus:ring-2 focus:ring-pine/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-terracotta hover:bg-terracotta-dark text-sand-light py-4 rounded-lg font-sans font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Reserva</span>
                  </button>

                </form>
              )}
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
