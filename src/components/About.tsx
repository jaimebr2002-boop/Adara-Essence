import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotras" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="bg-noise"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Nuestra Esencia</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark mb-8 leading-tight">
              Un espacio donde te sientes <span className="italic text-primary font-light">como en casa</span>
            </h2>
            
            <div className="space-y-6 text-dark/80 font-light leading-relaxed text-lg">
              <p>
                Karen y su equipo llevan años haciendo que las mujeres de Oviedo se sientan únicas y cuidadas. 
                En Adara Essence, no solo ofrecemos tratamientos de belleza; creamos momentos de desconexión y mimo.
              </p>
              <p>
                Somos especialistas en nails, diseño de cejas y beauty con técnicas premium. 
                Cada servicio está diseñado para realzar tu belleza natural con la máxima profesionalidad, 
                confianza y atención al detalle.
              </p>
              <p className="font-medium text-dark">
                Porque la verdadera belleza reside en los detalles, y tú mereces brillar en cada uno de ellos.
              </p>
            </div>

            <div className="mt-10 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-display text-primary">5+</span>
                <span className="text-xs uppercase tracking-widest text-dark/60 mt-1">Años de experiencia</span>
              </div>
              <div className="w-px h-12 bg-dark/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-display text-primary">100%</span>
                <span className="text-xs uppercase tracking-widest text-dark/60 mt-1">Atención personalizada</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-primary/10 -translate-x-6 translate-y-6 rounded-sm"></div>
              <img
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998092/57118335_322972001628802_1497119406319206400_n._lmllmw.jpg"
                alt="Adara Essence Logo"
                className="relative z-10 w-full h-full object-contain rounded-sm shadow-2xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 z-20 bg-secondary p-4 rounded-full shadow-xl border border-primary/20">
                <Sparkles className="text-primary w-8 h-8" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
