import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FinalSurprise = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-32 px-6 bg-[#1a050a] min-h-screen flex items-center justify-center relative overflow-hidden text-center">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(102,26,46,0.2)_0%,transparent_80%)]" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-2xl md:text-3xl font-light text-rose-100/70 mb-12 tracking-widest">
                One Last Thing...
              </h2>
              
              <button
                onClick={() => setRevealed(true)}
                className="px-10 py-5 rounded-full bg-rose-900/40 text-rose-100 text-xl md:text-2xl font-serif tracking-wider
                         border border-rose-300/30 hover:bg-rose-900/60 hover:border-rose-300/60 transition-all duration-500
                         shadow-[0_0_30px_rgba(253,186,179,0.1)] hover:shadow-[0_0_50px_rgba(253,186,179,0.25)] group"
              >
                Open My Heart <span className="inline-block group-hover:scale-125 transition-transform duration-300 ml-2">❤️</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="px-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                className="space-y-8 text-xl md:text-2xl lg:text-3xl font-serif text-rose-100/90 leading-relaxed max-w-3xl mx-auto"
              >
                <p>Grishma,</p>
                <p>from the first time I saw you on 24 November 2020,</p>
                <p>to becoming us on 15 March 2021,</p>
                <p>to promising forever on 3 February 2023,</p>
                <p>every chapter has brought me closer to you.</p>
                
                <div className="py-8">
                  <p className="text-champagne italic">And today, on your birthday, I just want you to know...</p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5, duration: 1 }}
                  className="space-y-4"
                >
                  <p>I would choose you again.</p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.5, duration: 1 }}>And again.</motion.p>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 8, duration: 1 }}>And again.</motion.p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 10, duration: 2 }}
                  className="pt-12"
                >
                  <p className="text-3xl md:text-5xl text-champagne mb-8">Happy Birthday, my love. ❤️</p>
                  
                  <div className="text-lg md:text-xl text-rose-200/80 font-light space-y-2 mb-16">
                    <p>Here's to us —</p>
                    <p>to our memories,</p>
                    <p>to our dreams,</p>
                    <p>to our future,</p>
                    <p>and to all the birthdays we still have to celebrate together.</p>
                  </div>
                  
                  <p className="text-4xl md:text-6xl text-rose-300 font-serif tracking-widest drop-shadow-[0_0_15px_rgba(253,186,179,0.3)]">
                    I love you. ❤️
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 13, duration: 2 }}
                  className="pt-24 pb-12"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide uppercase font-sans">Happy Birthday, Grishma ❤️</h1>
                  <p className="text-2xl md:text-3xl font-serif text-champagne italic">Forever & Always</p>
                </motion.div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
