import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Clara Fernández Rivera",
    rating: 5,
    text: "El mejor salón de uñas de todo Oviedo. Andrea y Karen además de ser super amables y cercanas ofrecen una profesionalidad incomparable. Confío en ellas todos los meses para mis uñas y además he realizado microblading con Karen."
  },
  {
    name: "Lucia Menendez",
    rating: 5,
    text: "Increíble! Las manos de Karen y Andrea son únicas tanto para cejas, manicura, pedicura... todo. Son muchos años ya y no las cambio por nada."
  },
  {
    name: "Carmen Alcázar",
    rating: 5,
    text: "Me hice la micropigmentación de cejas y el resultado magnífico. Trato de 10, mucha profesionalidad y muy agradable el sitio. Muy recomendable."
  },
  {
    name: "Covadonga De La Hera",
    rating: 5,
    text: "Karen es una gran profesional. Mejor sitio para hacer microblading!! 100% recomendable!! Y ahora hago también manicura y pedicura y estoy encantada."
  },
  {
    name: "Olaya D.",
    rating: 5,
    text: "La calidad-precio es inmejorable, el trato por parte de las trabajadoras es buenísimo. Siempre que tengo eventos voy directamente porque confío en su trabajo."
  },
  {
    name: "Barbara MA",
    rating: 5,
    text: "Voy habitualmente a Adara Essence para el diseño de cejas con Karen y siempre salgo encantada. Es profesional, cuidadosa y deja las cejas perfectas cada vez."
  },
  {
    name: "Arancha Hernandez",
    rating: 5,
    text: "Si necesitas una atención profesional, dedicada y con una sonrisa... este es tu sitio. Tanto Karen (es una TOP) como su equipo... 100x100 recomendable."
  },
  {
    name: "Lu Sua",
    rating: 5,
    text: "Excelentes, profesionales... llevo 5 años y estoy encantada. Son unas nenas encantadoras, cariñosas, atentas."
  },
  {
    name: "Núria Gironès",
    rating: 5,
    text: "Marta y su equipo son unas cracks! Dan una muy buena atención, muy atentas y amables. Los servicios son inmejorables en calidad-precio."
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="resenas" className="py-24 md:py-32 bg-dark text-secondary relative overflow-hidden">
      <div className="bg-noise"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">Testimonios</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-4">
            Lo que dicen de <span className="italic text-primary font-light">nosotras</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-16">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-secondary/80 font-light tracking-wide">5.0 · Más de 39 clientas satisfechas</span>
          </div>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/10 w-32 h-32 -z-10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="px-8 md:px-16"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-display font-light leading-relaxed text-secondary/90 mb-8 italic">
                "{reviews[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <span className="text-primary font-medium tracking-widest uppercase text-sm">{reviews[currentIndex].name}</span>
                <div className="flex text-accent mt-2">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-secondary/50 hover:text-primary transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-secondary/50 hover:text-primary transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <a
            href="https://www.google.com/maps/place/Adara+Essence/@43.3674682,-5.8492761,17z/data=!3m1!5s0xd368cfa111c1671:0x590cca932835e296!4m8!3m7!1s0xd368cfa6d624791:0x6a9aa291a376c4c0!8m2!3d43.3674643!4d-5.8467012!9m1!1b1!16s%2Fg%2F11c6pqdbz4?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-primary text-secondary hover:bg-primary hover:text-dark transition-all duration-300 font-medium tracking-widest uppercase text-sm rounded-sm"
          >
            Deja tu reseña en Google ❤️
          </a>
        </motion.div>
      </div>
    </section>
  );
}
