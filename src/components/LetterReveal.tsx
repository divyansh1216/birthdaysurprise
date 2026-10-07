import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail } from 'lucide-react';

export const LetterReveal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fdbab3', '#fee2e2', '#fff1f2', '#f7e7ce']
    });
  };

  const messageLines = [
    "Grishma,",
    "Every day with you feels like a gift.",
    "Your presence in my life has brought so much light, warmth, and meaning.",
    "I am so deeply grateful that our paths crossed.",
    "You are my favorite thought, my favorite moment, and my favorite person."
  ];

  return (
    <section className="py-32 px-6 bg-wine-800 min-h-[80vh] flex items-center justify-center relative">
      <div className="max-w-3xl mx-auto w-full text-center relative z-10">
        
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl font-serif text-champagne mb-8">I Have Something To Tell You...</h2>
              <div className="w-64 h-48 bg-wine-700 rounded-lg relative shadow-2xl flex items-center justify-center border border-rose-300/20 mb-8 overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(253,186,179,0.1)_50%,transparent_51%)] z-0 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_49%,rgba(253,186,179,0.1)_50%,transparent_51%)] z-0 pointer-events-none" />
                <Mail className="w-16 h-16 text-rose-300/50 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="text-rose-200 mb-8 font-light text-lg">You have one more surprise waiting...</p>
              
              <button
                onClick={handleOpen}
                className="px-8 py-3 rounded-full bg-rose-300/20 text-rose-100 border border-rose-300/40 hover:bg-rose-300/30 transition-all font-medium"
              >
                Open the Letter 💌
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-10 md:p-16 rounded-xl text-left shadow-2xl relative"
            >
              <div className="space-y-6">
                {messageLines.map((line, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.8, duration: 1 }}
                    className={`text-lg md:text-xl font-light text-rose-100 ${idx === 0 ? 'font-serif text-2xl text-champagne mb-8' : ''}`}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
