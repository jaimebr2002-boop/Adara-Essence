import { motion } from 'motion/react';

const gallery = [
  { id: 1, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998093/652818707_18084927689244684_113036024309759234_n._j9csod.jpg', title: 'Trabajo Adara Essence' },
  { id: 2, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998093/652767001_18123844222605678_3073032407319576455_n._pfveom.jpg', title: 'Trabajo Adara Essence' },
  { id: 3, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998093/654019138_18103924249704380_3482008937977516547_n._eqbdll.jpg', title: 'Trabajo Adara Essence' },
  { id: 4, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998093/649182366_18064161785661951_3703057956142079913_n._jm5c4k.jpg', title: 'Trabajo Adara Essence' },
  { id: 5, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998093/623370503_18088113590039748_4456802571868726191_n._nxaqli.jpg', title: 'Trabajo Adara Essence' },
  { id: 6, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998092/616213857_18040651010741266_3532863180470655992_n._rucddb.jpg', title: 'Trabajo Adara Essence' },
  { id: 7, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998092/274078991_502172948249507_5691925772158682403_n._k3ifmk.jpg', title: 'Trabajo Adara Essence' },
  { id: 8, src: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1774998092/560534883_18377057548182679_6268127940033841134_n._vdvujn.jpg', title: 'Trabajo Adara Essence' },
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="bg-noise"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium mb-4 block">Nuestro Trabajo</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark leading-tight mb-8">
              Así quedas con <span className="italic text-primary font-light">nosotras</span>
            </h2>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group rounded-sm shadow-sm"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-secondary font-display text-2xl">{item.title}</h3>
              </div>
            </motion.div>
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
            href="https://www.instagram.com/adara_essence/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-primary text-dark hover:bg-primary hover:text-secondary transition-all duration-300 font-medium tracking-widest uppercase text-sm rounded-sm"
          >
            Síguenos en Instagram @adara_essence
          </a>
        </motion.div>
      </div>
    </section>
  );
}
