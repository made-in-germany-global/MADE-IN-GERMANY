import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Award, TrendingUp, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// Define props interface for MadeInGermanySection
interface MadeInGermanySectionProps {
  language?: string;
}

// Define translations interface
interface Translation {
  qualityLabel: string;
  title: string;
  introText: string;
  b2bText: string;
  platformText: string;
  showMoreTitle: string;
  showMoreIntro: string;
  showMoreVision: string;
  showMoreGlobal: string;
  founderTitle: string;
  founderText: string;
  founderLocation: string;
  manufacturerButton: string;
  buyerButton: string;
  toggleButtonMore: string;
  toggleButtonLess: string;
  globeTitle: string;
  globeText: string;
  milestonesTitle: string;
  milestone1: string;
  milestone2: string;
  milestone3: string;
}

// Define translations object
const TRANSLATIONS: Record<string, Translation> = {
  en: {
    qualityLabel: "QUALITY CONNECTS",
    title: "MADE IN GERMANY ©",
    introText: " is not just a portal – it is a vision. Born from the ambition to make the outstanding quality and innovation of German products accessible to the world – transparently, directly, and with genuine passion.",
    b2bText: "As the leading B2B portal for German products and technologies, we connect traders, entrepreneurs, and institutions worldwide who rely on the highest quality and trust.",
    platformText: "Our platform simplifies processes, builds trust, and represents a new kind of global networking – reimagined, boldly executed, and ready to conquer the world.",
    showMoreTitle: "Welcome to MADE IN GERMANY © – The Start of a New Era",
    showMoreIntro: "MADE IN GERMANY © is not just a portal – it is a vision. Born from the ambition to make the outstanding quality and innovation of German products accessible to the world – transparently, directly, and with genuine passion.",
    showMoreVision: "As the founder of this project, I work with my team daily to build the leading B2B portal for German products and technologies – reliable, targeted, and future-oriented.",
    showMoreGlobal: "For the first time, MADE IN GERMANY © is globally accessible: For traders, entrepreneurs, institutions, and all those who value the highest quality and trust.",
    founderTitle: "About the Founder",
    founderText: "Andreas Thommen, born in 1972 in the Hanseatic city of Bremen, entrepreneur, creative visionary, and operator of this international platform, works daily with his team to connect German industry with global customers.",
    founderLocation: "Bremen, Germany",
    manufacturerButton: "I'm a German Manufacturer",
    buyerButton: "I'm an International Buyer",
    toggleButtonMore: "Show More",
    toggleButtonLess: "Show Less",
    globeTitle: "Global Networking",
    globeText: "German quality products worldwide – simple and reliable. We connect manufacturers with partners for efficient, trustworthy business relationships.",
    milestonesTitle: "Key Milestones",
    milestone1: "500+ Global Partners",
    milestone2: "100+ Years of Excellence",
    milestone3: "50+ Industries Served"
  },
  de: {
    qualityLabel: "QUALITÄT VERBINDET",
    title: "MADE IN GERMANY ©",
    introText: " ist nicht nur ein Portal – es ist eine Vision. Geboren aus dem Anspruch, die herausragende Qualität und Innovation deutscher Produkte weltweit zugänglich zu machen – transparent, direkt und mit echter Leidenschaft.",
    b2bText: "Als führendes B2B-Portal für deutsche Produkte und Technologien verbinden wir Händler, Unternehmer und Institutionen weltweit, die auf höchste Qualität und Vertrauen setzen.",
    platformText: "Unsere Plattform vereinfacht Prozesse, schafft Vertrauen und repräsentiert eine neue Art des globalen Netzwerkens – neu gedacht, mutig umgesetzt und bereit, die Welt zu erobern.",
    showMoreTitle: "Willkommen bei MADE IN GERMANY © – Der Beginn einer neuen Ära",
    showMoreIntro: "MADE IN GERMANY © ist nicht nur ein Portal – es ist eine Vision. Geboren aus dem Anspruch, die herausragende Qualität und Innovation deutscher Produkte weltweit zugänglich zu machen – transparent, direkt und mit echter Leidenschaft.",
    showMoreVision: "Als Gründer dieses Projekts arbeite ich mit meinem Team täglich daran, das führende B2B-Portal für deutsche Produkte und Technologien aufzubauen – zuverlässig, zielgerichtet und zukunftsorientiert.",
    showMoreGlobal: "Zum ersten Mal ist MADE IN GERMANY © global zugänglich: Für Händler, Unternehmer, Institutionen und alle, die höchste Qualität und Vertrauen schätzen.",
    founderTitle: "Über den Gründer",
    founderText: "Andreas Thommen, geboren 1972 in der Hansestadt Bremen, Unternehmer, kreativer Visionär und Betreiber dieser internationalen Plattform, arbeitet täglich mit seinem Team daran, die deutsche Industrie mit globalen Kunden zu verbinden.",
    founderLocation: "Bremen, Deutschland",
    manufacturerButton: "Ich bin ein deutscher Hersteller",
    buyerButton: "Ich bin ein internationaler Käufer",
    toggleButtonMore: "Mehr anzeigen",
    toggleButtonLess: "Weniger anzeigen",
    globeTitle: "Globales Netzwerken",
    globeText: "Deutsche Qualitätsprodukte weltweit – einfach und zuverlässig. Wir verbinden Hersteller mit Partnern für effiziente, vertrauensvolle Geschäftsbeziehungen.",
    milestonesTitle: "Wichtige Meilensteine",
    milestone1: "500+ Globale Partner",
    milestone2: "100+ Jahre Exzellenz",
    milestone3: "50+ Branchen bedient"
  }
};

// Milestone Item component
const MilestoneItem: React.FC<{
  icon: React.ReactNode;
  text: string;
}> = ({ icon, text }) => (
  <motion.div
    className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
    whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
  >
    <div className="text-blue-400">{icon}</div>
    <p className="text-gray-300 text-sm">{text}</p>
  </motion.div>
);

const MadeInGermanySection = ({ language = 'en' }: MadeInGermanySectionProps) => {
  const [showMore, setShowMore] = useState(false);
  const [animateGlobe, setAnimateGlobe] = useState(true);
  const translations = TRANSLATIONS[language] || TRANSLATIONS.en;

  useEffect(() => {
    const resetAnimation = () => {
      setAnimateGlobe(false);
      setTimeout(() => setAnimateGlobe(true), 50);
    };
    
    document.addEventListener('globe-reset', resetAnimation);
    return () => document.removeEventListener('globe-reset', resetAnimation);
  }, []);

  return (
    <div className="w-full px-4 py-8 md:py-12">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-10 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Left Column: Information */}
            <div className="md:w-1/2 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-gray-200 bg-gray-800/50 rounded-full mb-3 border border-gray-700">
                  {translations.qualityLabel}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {translations.title}
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <motion.div
                  className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <p>
                    <strong>{translations.title}</strong>{translations.introText}
                  </p>
                </motion.div>
                
                <motion.div
                  className="flex items-start gap-3 bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <Award className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <p>{translations.b2bText}</p>
                </motion.div>
                
                <motion.div
                  className="flex items-start gap-3 bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <TrendingUp className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <p>{translations.platformText}</p>
                </motion.div>
              </div>

              {/* Expandable content with smooth animation */}
              <motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: showMore ? 'auto' : 0, opacity: showMore ? 1 : 0 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="space-y-6 overflow-hidden"
>
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      {translations.showMoreTitle}
    </h3>
    <div className="space-y-4 text-gray-300">
      <p>{translations.showMoreIntro}</p>
      <p>{translations.showMoreVision}</p>
      <p>{translations.showMoreGlobal}</p>
    </div>
  </div>
  
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      {translations.founderTitle}
    </h3>
    <div className="flex items-start gap-5">
      <div className="h-24 w-24 rounded-full flex-shrink-0 border border-gray-700 shadow-[0_0_10px_rgba(59,130,246,0.5)] overflow-hidden">
        <img 
          src="/founder-from-made-in-germany-andreas-thommen.jpg" 
          alt="Andreas Thommen" 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="mb-3 text-gray-300">{translations.founderText}</p>
        <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full w-fit border border-gray-700">
          <MapPin size={14} /> {translations.founderLocation}
        </div>
      </div>
    </div>
  </div>
</motion.div>

              {/* Call to action buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                >
                  {translations.manufacturerButton}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
                >
                  {translations.buyerButton}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMore(!showMore)}
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2 col-span-2"
                >
                  {showMore ? translations.toggleButtonLess : translations.toggleButtonMore}
                  {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </motion.button>
              </div>
            </div>
            
            {/* Right Column: Visual and Milestones */}
            <div className="md:w-5/12 w-full mt-8 md:mt-0 flex flex-col min-h-full justify-center">
              <div className="flex flex-col gap-6 mt-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: animateGlobe ? 1 : 0, scale: animateGlobe ? 1 : 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[300px] w-full overflow-hidden rounded-lg group bg-gray-800/50 border border-gray-700 shadow-2xl"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  {/* Main image with overlay effects */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/made-in-germany-welcome.png" 
                      alt="MADE IN GERMANY © Welcome"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/40 mix-blend-overlay z-10"></div>
                    {/* Grid effect overlay */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 z-20" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                    {/* Accent element */}
                    <div className="absolute top-4 left-4 right-4 flex justify-center z-30">
                      <div className="h-2 w-12 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.7)]"></div>
                    </div>
                    {/* Information card */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 z-30"
                      whileHover={{ translateY: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg p-5">
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                          {translations.globeTitle}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{translations.globeText}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Milestones Section */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {translations.milestonesTitle}
                  </h3>
                  <div className="space-y-3">
                    <MilestoneItem
                      icon={<Globe size={20} />}
                      text={translations.milestone1}
                    />
                    <MilestoneItem
                      icon={<Award size={20} />}
                      text={translations.milestone2}
                    />
                    <MilestoneItem
                      icon={<TrendingUp size={20} />}
                      text={translations.milestone3}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MadeInGermanySection;