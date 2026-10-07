import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { siteConfig } from '../data/content';

const calculateTime = (startDateStr: string) => {
  const start = new Date(startDateStr);
  const now = new Date();
  
  let years = differenceInYears(now, start);
  let tempDate = new Date(start);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  
  let months = differenceInMonths(now, tempDate);
  tempDate.setMonth(tempDate.getMonth() + months);
  
  let days = differenceInDays(now, tempDate);
  tempDate.setDate(tempDate.getDate() + days);
  
  let hours = differenceInHours(now, tempDate);
  tempDate.setHours(tempDate.getHours() + hours);
  
  let minutes = differenceInMinutes(now, tempDate);
  tempDate.setMinutes(tempDate.getMinutes() + minutes);
  
  let seconds = differenceInSeconds(now, tempDate);

  return { years, months, days, hours, minutes, seconds };
};

export const TimeTogether = () => {
  const [firstSaw, setFirstSaw] = useState(calculateTime(siteConfig.dates.firstSaw));
  const [becameUs, setBecameUs] = useState(calculateTime(siteConfig.dates.relationship));
  const [engagement, setEngagement] = useState(calculateTime(siteConfig.dates.engagement));

  useEffect(() => {
    const timer = setInterval(() => {
      setFirstSaw(calculateTime(siteConfig.dates.firstSaw));
      setBecameUs(calculateTime(siteConfig.dates.relationship));
      setEngagement(calculateTime(siteConfig.dates.engagement));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const CounterBox = ({ title, time, dateLabel }: { title: string, time: any, dateLabel: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel p-6 md:p-8 rounded-2xl w-full max-w-md mx-auto"
    >
      <h3 className="text-xl md:text-2xl font-serif text-champagne mb-1">{title}</h3>
      <p className="text-rose-300/80 text-sm mb-6">{dateLabel}</p>
      
      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          { label: 'Years', val: time.years },
          { label: 'Months', val: time.months },
          { label: 'Days', val: time.days },
          { label: 'Hours', val: time.hours },
          { label: 'Mins', val: time.minutes },
          { label: 'Secs', val: time.seconds }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-3xl md:text-4xl font-light text-rose-100 font-mono tracking-wider">{item.val.toString().padStart(2, '0')}</span>
            <span className="text-xs text-rose-200/60 uppercase tracking-widest mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-wine-800 to-wine-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-champagne mb-20"
        >
          Look How Far We've Come...
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <CounterBox 
            title="Since We First Saw Each Other" 
            dateLabel="24 November 2020"
            time={firstSaw} 
          />
          <CounterBox 
            title="Since We Became Us" 
            dateLabel="15 March 2021"
            time={becameUs} 
          />
          <CounterBox 
            title="Since Our Engagement" 
            dateLabel="3 February 2023"
            time={engagement} 
          />
        </div>
      </div>
    </section>
  );
};
