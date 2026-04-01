import { motion } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
          alt="Nails and Beauty Salon"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-dark/30"></div>
        <div className="bg-noise"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <h2 className="text-secondary/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light">
            Nails · Beauty · Brows — Oviedo, Asturias
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-secondary font-display font-medium leading-tight mb-8 drop-shadow-lg">
            Donde cada detalle <br className="hidden md:block" />
            <span className="italic text-secondary/90 font-light">te hace brillar.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <a
              href="https://booksy.com/es-es/119556_adara-essence_salon-de-unas_79758_oviedo#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-secondary text-dark hover:bg-primary hover:text-secondary transition-all duration-500 font-medium tracking-widest uppercase text-sm rounded-sm shadow-xl"
            >
              Reserva tu cita
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-secondary/80 text-sm font-light tracking-wide">
              5.0 · Más de 39 reseñas en Booksy + Google
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#nosotras"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-secondary/70 hover:text-secondary transition-colors z-10"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-light">Descubre nuestros servicios</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.a>
    </section>
  );
}
