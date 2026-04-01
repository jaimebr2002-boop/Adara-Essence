import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary py-16 md:py-24 border-t border-primary/20 relative overflow-hidden">
      <div className="bg-noise"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-start">
            <a href="#inicio" className="mb-6">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998092/57118335_322972001628802_1497119406319206400_n._lmllmw.jpg" 
                alt="Adara Essence Logo" 
                className="h-16 w-auto object-contain rounded-full border border-primary/20"
              />
            </a>
            <p className="text-secondary/60 font-light leading-relaxed mb-8 max-w-xs">
              Salón especializado en uñas, cejas y belleza en el corazón de Oviedo.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/adara_essence/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/adaraessence/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-primary uppercase tracking-widest text-sm font-medium mb-6">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-secondary/70 hover:text-primary transition-colors font-light">Inicio</a></li>
              <li><a href="#nosotras" className="text-secondary/70 hover:text-primary transition-colors font-light">Nosotras</a></li>
              <li><a href="#servicios" className="text-secondary/70 hover:text-primary transition-colors font-light">Servicios</a></li>
              <li><a href="#resultados" className="text-secondary/70 hover:text-primary transition-colors font-light">Resultados</a></li>
              <li><a href="#resenas" className="text-secondary/70 hover:text-primary transition-colors font-light">Reseñas</a></li>
              <li><a href="#visitanos" className="text-secondary/70 hover:text-primary transition-colors font-light">Visítanos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="text-primary uppercase tracking-widest text-sm font-medium mb-6">Contacto</h4>
            <ul className="space-y-4 text-secondary/70 font-light">
              <li>C. Llano Ponte, 7, BAJO 5</li>
              <li>33011 Oviedo, Asturias</li>
              <li><a href="tel:+34747780035" className="hover:text-primary transition-colors">747 78 00 35</a></li>
              <li className="pt-2">
                <span className="text-primary text-xs uppercase tracking-widest block mb-1">Horario</span>
                Lunes - Viernes: 09:00 - 20:00
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/40 font-light tracking-wide uppercase">
          <p>© {new Date().getFullYear()} Adara Essence · Todos los derechos reservados</p>
          <p>Diseñado con ❤️ en Oviedo</p>
        </div>
      </div>
    </footer>
  );
}
