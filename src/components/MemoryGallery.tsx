import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/content';

export const MemoryGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = siteConfig.images.gallery;

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-32 px-6 bg-wine-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-champagne mb-4">
            Little Pieces of Us
          </h2>
          <p className="text-rose-200/80 font-light">Every picture tells our story</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedImage(idx)}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-lg group"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.caption}
                className="w-full h-full object-contain bg-black/60 transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-4"
              onClick={handleNext}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div 
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].caption}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-[-40px] left-0 right-0 text-center text-rose-100/90 text-lg">
                {images[selectedImage].caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
