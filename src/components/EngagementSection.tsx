import { motion } from 'framer-motion';

export const EngagementSection = () => {
  return (
    <section className="py-32 px-6 relative bg-wine-900 overflow-hidden flex items-center justify-center min-h-[70vh]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] pointer-events-none" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-champagne rounded-full"
          initial={{
            opacity: 0,
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100 - 10}vh`],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="text-6xl md:text-8xl mb-6">💍</div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-champagne mb-4"
        >
          The Day We Said Forever
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-rose-300 font-medium tracking-widest uppercase mb-10"
        >
          3 February 2023
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-rose-100/90 font-light leading-relaxed italic"
        >
          "Before we knew exactly what the future would look like, we knew who we wanted beside us."
        </motion.p>
      </div>
    </section>
  );
};
