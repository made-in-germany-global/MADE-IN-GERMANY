import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define translations within the component
const translations = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  countdownTagline: "Get ready to launch your business with world-class German quality!"
};

// No props needed since translations are internal
const CountdownSection: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const launchDate = new Date('2025-07-18T00:00:00');
  const totalDays = Math.floor((launchDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) + 30;
  const progress = Math.min(100, ((30 - days) / 30) * 100);

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) clearInterval(countdown);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  return (
    <motion.section
      className="max-w-7xl mb-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
          LAUNCH COUNTDOWN
        </h2>
        <p className="text-lg text-gray-300 mb-8 text-center">{translations.countdownTagline}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { value: days, label: translations.days },
            { value: hours, label: translations.hours },
            { value: minutes, label: translations.minutes },
            { value: seconds, label: translations.seconds },
          ].map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-white">{item.value}</span>
              <span className="text-gray-400 font-medium mt-1 block uppercase tracking-wider text-sm">{item.label}</span>
            </motion.article>
          ))}
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2.5">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CountdownSection;