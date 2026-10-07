import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '../data/content';

export const LoveCards = () => {
  return (
    <section className="py-32 px-6 bg-wine-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-rose-300)_0%,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center text-champagne mb-20"
        >
          A Few Things I Love About You
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {siteConfig.thingsILove.map((thing, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 15px 30px rgba(253, 186, 179, 0.15)"
              }}
              className="glass-panel px-6 py-4 rounded-full flex items-center gap-3"
            >
              <Heart className="w-5 h-5 text-rose-300" fill="currentColor" />
              <span className="text-rose-100 font-medium tracking-wide">{thing}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
