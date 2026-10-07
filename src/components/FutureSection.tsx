import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

export const FutureSection = () => {
  return (
    <section className="py-32 px-6 bg-black text-center relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              opacity: Math.random() * 0.5 + 0.1,
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-white mb-8"
        >
          And This Is Only The Beginning...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl text-white/70 font-light mb-16"
        >
          We've already collected so many memories... but I believe our best chapters are still ahead of us.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {siteConfig.future.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 text-white/90 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
            >
              <Sparkles className="w-4 h-4 text-champagne" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
            Our story isn't finished. <br/>
            <span className="text-champagne italic">It's just getting started. ❤️</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
