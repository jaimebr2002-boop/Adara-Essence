import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotras', href: '#nosotras' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Visítanos', href: '#visitanos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img 
            src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998092/57118335_322972001628802_1497119406319206400_n._lmllmw.jpg" 
            alt="Adara Essence Logo" 
            className="h-12 w-auto object-contain rounded-full border border-primary/20"
          />
          <span className="text-xl font-display font-medium tracking-wide text-dark hidden sm:block">
            adara <span className="text-primary font-light">|</span> essence
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-dark/80 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://booksy.com/es-es/119556_adara-essence_salon-de-unas_79758_oviedo#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-dark text-secondary text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300 rounded-sm"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-secondary shadow-lg lg:hidden"
          >
            <ul className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-display text-dark hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="https://booksy.com/es-es/119556_adara-essence_salon-de-unas_79758_oviedo#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 bg-dark text-secondary text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300 rounded-sm"
                >
                  Reservar Cita
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
