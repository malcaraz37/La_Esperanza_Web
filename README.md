# Cabin "La Esperanza" - Mazamitla

A sleek, modern, and interactive single-page portfolio website for reserving and displaying a fictional luxury alpine cabin in Mazamitla, Jalisco. 

---

## 🇺🇸 English Version

### 🌟 Key Features
* **Dynamic & Glassmorphic Navbar**: The navigation bar smoothly transitions from transparent to a blur glassmorphism style upon scrolling, dynamically highlighting the active section using `IntersectionObserver`.
* **Smooth Scrolling**: Enjoy seamless glide animations when clicking on any menu navigation link.
* **Interactive Lightbox Gallery**: Showcases 5 high-fidelity images of the cabin. Clicking any image opens a full-screen modal with slider controls (previous/next).
* **Scroll-Reveal Animations**: Sections slide up and fade in elegantly as the user scrolls them into the viewport.
* **Booking Form with Real-Time Validation**:
  * Mandatory field checking and length requirements.
  * Validates email format and Mexican phone numbers (10 digits).
  * Past dates are locked out for Check-In and Check-Out.
  * Exit date validation (Check-Out must be after Check-In).
  * Maximum capacity control (1-10 guests based on the cabin's 6 beds).
  * Animated success banner upon valid submission.
* **Integrated Interactive Maps**: Dynamic coordinates link to exact locations in La Cofradía, Jalisco on Google Maps.
* **Aesthetics & Styling**: Colors inspired by Mazamitla's pine woods, using deep forest greens, warm terracottas/ambers, and premium typography (`Playfair Display` + `Montserrat`).

### 🛠️ Tech Stack
* **React** (v19)
* **TailwindCSS** (v3) - Responsive layout and custom color variables.
* **Lucide React** - Modern vector iconography.
* **Vite** - High-speed bundler.

### 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/malcaraz37/La_Esperanza_Web.git
   cd La_Esperanza_Web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173](http://localhost:5173) (or the alternative port shown in terminal) in your browser.*

4. **Build for production**:
   ```bash
   npm run build
   ```


---

## 🇪🇸 Versión en Español

# Cabaña "La Esperanza" - Mazamitla

Un sitio web de una sola página (Single-Page App) elegante, moderno e interactivo para la reserva y exhibición de una cabaña alpina de lujo en Mazamitla, Jalisco. 

### 🌟 Características Principales
* **Navegación Dinámica y Fluida**: El menú de navegación (Navbar) transita de transparente a un efecto de desenfoque de fondo (*glassmorphism*) al deslizar la página. Rastrea la sección activa automáticamente en pantalla mediante `IntersectionObserver`.
* **Desplazamiento Suave (*Smooth Scroll*)**: Transiciones suaves al navegar entre las distintas secciones al hacer clic en los enlaces del menú.
* **Galería con Visor de Diapositivas (*Lightbox*)**: Muestra 5 imágenes realistas de la cabaña Al hacer clic en cualquiera de ellas, se abre un visor a pantalla completa con navegación de diapositiva (anterior/siguiente).
* **Animaciones al Deslizar (*Scroll Reveal*)**: Los componentes de la página aparecen deslizándose suavemente desde abajo hacia arriba a medida que entran en la pantalla del usuario.
* **Formulario de Reserva con Validaciones en Tiempo Real**: 
  * Validación de campos obligatorios y longitudes mínimas.
  * Formato de correo electrónico y de teléfono (10 dígitos).
  * Bloqueo de fechas pasadas para llegada (*Check-In*) y salida (*Check-Out*).
  * Validación lógica de fechas (la salida debe ser posterior a la llegada).
  * Capacidad máxima controlada (de 1 a 10 huéspedes basados en las 6 camas de la cabaña).
  * Pantalla de confirmación de éxito animada.
* **Ubicación Integrada**: Enlaces directos e interactivos con Google Maps que redirigen a coordenadas exactas en La Cofradía, Jalisco.
* **Diseño e Identidad Visual**: Inspirado en los bosques templados de Mazamitla, combinando una paleta de colores verdes pino/bosque y terracotas cálidos, emparejados con las tipografías elegantes `Playfair Display` y `Montserrat`.

### 🛠️ Tecnologías Utilizadas
* **React** (v19)
* **TailwindCSS** (v3) - Diseño adaptivo y variables de color personalizadas.
* **Lucide React** - Iconos vectoriales limpios y modernos.
* **Vite** - Herramienta de compilación rápida.

### 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/malcaraz37/La_Esperanza_Web.git
   cd La_Esperanza_Web
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   *Abre [http://localhost:5173](http://localhost:5173) (o el puerto alternativo indicado por la terminal) en tu navegador.*

4. **Compilar para producción**:
   ```bash
   npm run build
   ```


