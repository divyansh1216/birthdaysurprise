import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

export const BirthdayMessage = () => {
  return (
    <section id="personal-message" className="py-32 px-6 relative bg-wine-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="glass-panel p-8 md:p-12 rounded-2xl text-center relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">💌</div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-champagne mb-8 mt-4">
            {siteConfig.letter.title}
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-rose-100/90 font-light leading-relaxed">
            <p>{siteConfig.letter.content}</p>
            
            <p className="whitespace-pre-line font-medium text-rose-200 mt-12">
              {siteConfig.letter.closing}
            </p>
          </div>
          
          <div className="mt-16 text-right">
            <p className="font-serif text-2xl text-champagne italic">
              {siteConfig.letter.signature}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
