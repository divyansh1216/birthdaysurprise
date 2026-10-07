import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const BirthdaySurprise = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlowCandles = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#fdbab3', '#fee2e2', '#d4af37']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#fdbab3', '#fee2e2', '#d4af37']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-32 px-6 bg-wine-900 flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden">
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-champagne mb-16"
        >
          Today Is Your Day, Grishma 🎂
        </motion.h2>

        <div className="relative mb-16 inline-block cursor-pointer group" onClick={handleBlowCandles}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-9xl"
          >
            🎂
          </motion.div>
          
          <AnimatePresence>
            {!candlesBlown && (
              <motion.div 
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 flex justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-4 h-6 bg-yellow-400 rounded-full blur-sm"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {!candlesBlown && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-rose-300/80 text-sm font-light animate-pulse group-hover:text-rose-300 transition-colors">
              Tap to blow out the candles
            </div>
          )}
        </div>

        <AnimatePresence>
          {candlesBlown && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-rose-100">
                Make a wish, birthday girl... ✨
              </h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.5 }}
                className="glass-panel p-8 rounded-xl text-xl text-champagne font-light mt-8 inline-block"
              >
                "My wish is simple: I hope I get to celebrate countless more birthdays with you. ❤️"
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};
