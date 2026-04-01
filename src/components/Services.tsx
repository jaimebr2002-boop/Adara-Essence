import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, Eye, Droplet, Star, ChevronDown } from 'lucide-react';

const services = [
  {
    category: "Manicura",
    icon: <Droplet className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    items: [
      { name: "Esmaltado Semipermanente", price: "desde 25€", duration: "1h" },
      { name: "Semipermanente con Refuerzo", price: "30€", duration: "1h 15min" },
      { name: "Manicura Tradicional", price: "desde 15€", duration: "" },
    ]
  },
  {
    category: "Uñas de Gel / Acrygel",
    icon: <Star className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    items: [
      { name: "Uñas de Gel Talla S", price: "35€", duration: "1h 30min" },
      { name: "Uñas de Gel Talla M", price: "40€", duration: "1h 30min" },
      { name: "Uñas de Gel Talla L", price: "45€", duration: "1h 30min" },
      { name: "Alargamientos Gel S/M/L", price: "desde 45€", duration: "" },
      { name: "Brillo de Gel Color", price: "28€", duration: "" },
    ]
  },
  {
    category: "Decoración",
    icon: <Sparkles className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    items: [
      { name: "Baby Boomer / Degradados", price: "5€", duration: "" },
      { name: "Cat Eye / Ojo de Gato", price: "5€", duration: "" },
      { name: "Efecto Perla o Metalizado", price: "5€", duration: "" },
      { name: "Encapsulados", price: "5€", duration: "" },
      { name: "Decoración Simple por uña", price: "1€", duration: "" },
      { name: "Decoración Elaborada por uña", price: "2,50€", duration: "" },
    ]
  },
  {
    category: "Pedicura",
    icon: <Droplet className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    items: [
      { name: "Pedicura Express + Semipermanente", price: "28€", duration: "45min" },
      { name: "Pedicura Spa Completa + Semipermanente", price: "35€", duration: "1h" },
      { name: "Pedicura Spa Completa + Esmalte Tradicional", price: "28€", duration: "45min" },
      { name: "Esmaltado Semipermanente Pies", price: "25€", duration: "30min" },
    ]
  },
  {
    category: "Cejas & Pestañas",
    icon: <Eye className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    items: [
      { name: "Diseño de Cejas", price: "20€", duration: "30min" },
      { name: "Diseño + Tinte", price: "25€", duration: "30min" },
      { name: "Diseño + Henna", price: "35€", duration: "1h" },
      { name: "Laminado Pestañas + Tinte", price: "45€", duration: "1h" },
      { name: "Laminado y Diseño Cejas + Tinte", price: "45€", duration: "1h" },
      { name: "Laminado y Diseño Cejas + Henna", price: "55€", duration: "1h" },
    ]
  },
  {
    category: "Depilación",
    icon: <Scissors className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    items: [
      { name: "Labio", price: "4€", duration: "" },
      { name: "Mentón", price: "5€", duration: "" },
      { name: "Axilas", price: "10€", duration: "" },
      { name: "Medias Piernas", price: "15€", duration: "" },
      { name: "Piernas Enteras", price: "25€", duration: "" },
      { name: "Brazos", price: "15€", duration: "" },
      { name: "Espalda/Pecho", price: "15€", duration: "" },
    ]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-secondary/5 border border-primary/20 rounded-sm overflow-hidden flex flex-col"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 hover:bg-secondary/10 transition-colors duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-primary/10 rounded-full">
            {service.icon}
          </div>
          <h3 className="text-2xl font-display tracking-wide">{service.category}</h3>
        </div>
        <ChevronDown 
          className={`w-6 h-6 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-5 px-6 pb-6">
              {service.items.map((item, i) => (
                <li key={i} className="flex justify-between items-baseline border-b border-secondary/10 pb-2 last:border-0">
                  <div className="flex flex-col">
                    <span className="text-secondary/90 font-light tracking-wide">{item.name}</span>
                    {item.duration && <span className="text-xs text-secondary/50 uppercase tracking-widest mt-1">{item.duration}</span>}
                  </div>
                  <span className="text-primary font-medium whitespace-nowrap ml-4">{item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-dark text-secondary relative overflow-hidden">
      <div className="bg-noise"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">Nuestros Servicios</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
              Todo lo que <span className="italic text-primary font-light">mereces</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.category} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="https://booksy.com/es-es/119556_adara-essence_salon-de-unas_79758_oviedo#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-primary text-dark hover:bg-accent transition-all duration-300 font-medium tracking-widest uppercase text-sm rounded-sm shadow-lg"
          >
            Ver todos los servicios y reservar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
