import { motion, type Variants } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
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

  // Entrance animations variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  // Respect reduced motion
  const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-end md:justify-center overflow-hidden pb-24 md:pb-0">
      {/* Background Image: Full screen, object-cover, preserves faces */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={siteConfig.images.hero} 
          alt="Happy Birthday" 
          className="w-full h-full object-cover object-[center_top] md:object-center"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      {/* Global subtle warm tint */}
      <div className="absolute inset-0 z-0 bg-wine-900/10 mix-blend-color pointer-events-none" />
      
      {/* Top soft gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-wine-900/30 via-transparent to-transparent pointer-events-none" />
      
      {/* Bottom strong gradient for text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-wine-900/95 via-wine-900/70 to-transparent pointer-events-none" />
      
      {/* Soft vignette for depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      {/* Floating Particles / Hearts */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => {
            const startX = Math.random() * 100;
            return (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  opacity: 0, 
                  y: '100svh',
                  x: `${startX}vw`,
                  scale: Math.random() * 0.2 + 0.1
                }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  y: '-10svh',
                  x: `${startX + (Math.random() * 10 - 5)}vw`
                }}
                transition={{
                  duration: Math.random() * 10 + 15,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              >
                <Heart className="text-rose-200/50 w-6 h-6" fill="currentColor" />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Content Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full mt-auto md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Element */}
        <motion.div variants={itemVariants} className="mb-6">
          <Sparkles className="w-5 h-5 text-champagne/60 animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] text-rose-50 mb-6 drop-shadow-lg tracking-tight"
        >
          {siteConfig.hero.title}
        </motion.h1>
        
        {/* Short Message */}
        <motion.p 
          variants={itemVariants}
          className="font-sans text-[clamp(1rem,2vw,1.25rem)] text-rose-100/90 mb-8 max-w-[600px] mx-auto font-light leading-relaxed drop-shadow-md"
        >
          {siteConfig.hero.subtitle}
        </motion.p>
        
        {/* Date */}
        <motion.div 
          variants={itemVariants}
          className="text-[clamp(0.75rem,1.5vw,0.875rem)] font-sans text-champagne/70 mb-12 tracking-[0.2em] uppercase"
        >
          {siteConfig.hero.dateText}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={handleOpenSurprise}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-sans text-lg tracking-wide
                   shadow-[0_4px_20px_rgba(0,0,0,0.2),inset_0_0_15px_rgba(253,186,179,0.1)] transition-colors duration-500
                   hover:bg-white/10 hover:border-white/30 hover:shadow-[0_8px_30px_rgba(253,186,179,0.2),inset_0_0_20px_rgba(253,186,179,0.2)]
                   overflow-hidden focus:outline-none focus:ring-2 focus:ring-rose-300/50"
          aria-label="Open your birthday surprise"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          <span className="relative z-10 flex items-center gap-2 font-medium">
            {siteConfig.hero.buttonText}
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};
