import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '../data/content';

export const Hero = () => {
  const handleOpenSurprise = () => {
    // Start music if available
    if (typeof (window as any).startMusic === 'function') {
      (window as any).startMusic();
    }
    
    // Scroll to next section
    document.getElementById('personal-message')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Blurred */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center blur-2xl"
        style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
      />
      {/* Background Image - Clear and Fit */}
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteConfig.images.hero})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#2d0a12]/80 via-[#2d0a12]/50 to-[#2d0a12]/90" />

      {/* Floating Particles/Hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              opacity: 0, 
              y: '100vh',
              x: `${Math.random() * 100}vw`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: '-10vh',
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <Heart className="text-rose-300/40 w-6 h-6" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 relative"
          >
             <Heart className="w-16 h-16 text-rose-300 mx-auto" fill="currentColor" />
             <motion.div 
               className="absolute inset-0 blur-xl bg-rose-300/50 rounded-full"
               animate={{ opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-rose-100 drop-shadow-lg">
            {siteConfig.hero.title}
          </h1>
          
          <p className="text-lg md:text-2xl text-rose-200/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          
          <div className="text-xl md:text-2xl font-serif text-champagne mb-12 tracking-wide">
            {siteConfig.hero.dateText}
          </div>

          <motion.button
            onClick={handleOpenSurprise}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass-panel text-white font-medium text-lg tracking-wider
                     hover:bg-rose-300/20 transition-all duration-300 border-rose-300/30
                     shadow-[0_0_20px_rgba(253,186,179,0.2)] hover:shadow-[0_0_30px_rgba(253,186,179,0.4)]"
          >
            {siteConfig.hero.buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
