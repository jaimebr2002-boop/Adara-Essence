import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visitanos" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="bg-noise"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">Ubicación</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark leading-tight mb-8">
              Ven a <span className="italic text-primary font-light">conocernos</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-primary/10 rounded-full text-primary shrink-0">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-display text-dark mb-2">Dirección</h3>
                <p className="text-dark/70 font-light leading-relaxed">
                  C. Llano Ponte, 7, BAJO 5<br />
                  33011 Oviedo, Asturias
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-primary/10 rounded-full text-primary shrink-0">
                <Phone size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-display text-dark mb-2">Teléfono</h3>
                <a href="tel:+34747780035" className="text-dark/70 font-light hover:text-primary transition-colors">
                  747 78 00 35
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-primary/10 rounded-full text-primary shrink-0">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-display text-dark mb-2">Horario</h3>
                <ul className="text-dark/70 font-light space-y-1">
                  <li className="flex justify-between w-48">
                    <span>Lunes a Viernes:</span>
                    <span>9:00 – 20:00</span>
                  </li>
                  <li className="flex justify-between w-48 text-primary">
                    <span>Sábado y Domingo:</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
                <p className="text-xs text-dark/50 mt-4 italic">
                  * El horario puede cambiar, consultar disponibilidad al reservar.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] w-full rounded-sm overflow-hidden shadow-xl border border-primary/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.427951590483!2d-5.849276123308985!3d43.3674681711181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cfa6d624791%3A0x6a9aa291a376c4c0!2sAdara%20Essence!5e0!3m2!1ses!2ses!4v1711924567890!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Adara Essence"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
