import { motion } from 'framer-motion';
import { siteConfig } from '../data/content';

const timelineEvents = [
  {
    date: "24 November 2020",
    title: "The Day Our Story Began",
    text: "We didn't know it that day, but simply seeing each other for the first time would become the beginning of a story that would change both of our lives.",
    image: siteConfig.images.firstMeeting
  },
  {
    date: "15 March 2021",
    title: "The Day We Became Us ❤️",
    text: "Somewhere along the way, you stopped being just someone I knew and became someone I couldn't imagine my life without.",
    image: siteConfig.images.relationship
  },
  {
    date: "3 February 2023",
    title: "A Promise For Forever 💍",
    text: "And then came the moment when our story became a promise — a promise to keep choosing each other, supporting each other, and walking through life together.",
    image: siteConfig.images.engagement
  },
  {
    date: "Today",
    title: "Still Us ❤️",
    text: "Years have passed, memories have grown, and somehow my favorite part is that our story is still being written.",
    image: siteConfig.images.current
  }
];

export const Timeline = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-wine-900 to-wine-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center text-champagne mb-24"
        >
          Our Story
        </motion.h2>

        <div className="space-y-32">
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-rose-300/10 z-10 mix-blend-overlay"></div>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="text-rose-300 font-medium mb-4 tracking-wider uppercase text-sm">
                  {event.date}
                </div>
                <h3 className="text-3xl font-serif text-champagne mb-6">
                  {event.title}
                </h3>
                <p className="text-rose-100/80 text-lg leading-relaxed font-light">
                  {event.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
