import React from 'react';
import { motion } from 'framer-motion';
import { Award, Facebook, Instagram, Globe, ArrowRight } from 'lucide-react';

// Define translations within the component
const translations = {
  founderTitle: "About the Founder",
  founderDescription: "Andreas Thommen, born in 1972 in Bremen, is an entrepreneur and visionary, leading this platform to connect German industry with global customers.",
  founderQuote: "Our mission is to make German quality accessible to every corner of the globe, empowering businesses with excellence.",
  founderAchievements: [
    "Founded multiple successful manufacturing ventures",
    "Awarded Bremen Entrepreneur of the Year 2018",
    "Pioneered global supply chain innovations"
  ],
  founderLocation: "Bremen, Germany",
  connect: "Connect"
};

// No props needed since translations are internal
const FounderSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="max-w-7xl mb-10 bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
          MEET OUR FOUNDER
        </h2>
        <motion.div variants={textVariants} className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.03 }} className="relative">
              <div className="w-56 h-56 rounded-lg overflow-hidden border border-gray-700 bg-gray-800">
                <img
                  src="/founder-from-made-in-germany-andreas-thommen.jpg"
                  alt="Founder Andreas Thommen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={textVariants} className="flex items-center justify-center mt-6 space-x-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/andreasxthommen" },
                { Icon: Instagram, href: "https://www.instagram.com/andreasxthommen" },
                { Icon: Globe, href: "https://www.made-in-germany.uk" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <motion.div variants={textVariants}>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 mb-4 inline-block">
                {translations.founderTitle}
              </span>
              <h3 className="text-3xl font-bold mb-6 text-white">Andreas Thommen</h3>
            </motion.div>
            <motion.p variants={textVariants} className="text-gray-300 mb-6 leading-relaxed text-lg">
              {translations.founderDescription}
            </motion.p>
            <motion.blockquote variants={textVariants} className="text-gray-200 italic mb-6 border-l-4 border-blue-400 pl-4">
              "{translations.founderQuote}"
            </motion.blockquote>
            <motion.ul variants={textVariants} className="text-gray-300 mb-6 list-disc list-inside">
              {translations.founderAchievements.map((achievement, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-blue-400" /> {achievement}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={textVariants} className="flex items-center text-gray-400 mb-8 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{translations.founderLocation}</span>
            </motion.div>
            <motion.div variants={textVariants}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                {translations.connect} <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FounderSection;