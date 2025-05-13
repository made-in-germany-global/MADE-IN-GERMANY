import React, { useState } from 'react';
import { X, ChevronRight, Play, Calendar, Info, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Define props interface
interface VideoSectionProps {
  language?: string;
}

// Define achievement interface
interface Achievement {
  title: string;
  year: string;
}

// Define translation interface
interface Translation {
  title: string;
  description: string;
  buttonOurPassion: string;
  buttonShowMore: string;
  buttonShowLess: string;
  expandedPara1: string;
  expandedPara2: string;
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
  valuesTitle: string;
  valuesText: string;
  achievementsTitle: string;
  achievements: Achievement[];
  manufacturerButton: string;
  buyerButton: string;
  watchVideo: string;
  engineeringExcellence: string;
  ourMission: string;
  aboutUs: string;
}

const TRANSLATIONS: Record<string, Translation> = {
  en: {
    title: "MADE IN GERMANY © : A Legacy of World-Changing Inventions",
    description: "Celebrating German Innovation: Pioneering Excellence\nExplore how German ingenuity has shaped the world with groundbreaking inventions, from the printing press to modern technology. Germany's engineering brilliance has redefined industries and set global quality standards for centuries. Today, 'MADE IN GERMANY © ' symbolizes trust and excellence, inspiring industries worldwide. Our commitment ensures this legacy drives a sustainable future.",
    buttonOurPassion: "Contact Us",
    buttonShowMore: "Show More",
    buttonShowLess: "Show Less",
    expandedPara1: "Germany's storied history of invention—from Johannes Gutenberg's printing press revolutionizing knowledge dissemination to Karl Benz's creation of the first practical automobile—reflects an unwavering commitment to precision, creativity, and transformative impact. This legacy of engineering brilliance has not only set enduring global benchmarks but continues to influence contemporary industries, from precision manufacturing to advanced technological development, reinforcing Germany's reputation as a cradle of innovation.",
    expandedPara2: "Our multidisciplinary expertise builds upon this extraordinary heritage, delivering sophisticated solutions that embody the essence of German engineering excellence. By fostering international collaboration and advancing cutting-edge applications, we honor the pioneering spirit of German inventors while addressing the complex demands of modern markets. This approach ensures that the timeless principles of quality and ingenuity remain at the forefront of global industrial progress.",
    missionTitle: "Global Inspiration",
    missionText: "To share Germany's innovative spirit with the world.",
    visionTitle: "Future Pioneering",
    visionText: "To lead global industries with timeless German excellence.",
    valuesTitle: "German Precision",
    valuesText: "Quality, ingenuity, and reliability define our legacy.",
    achievementsTitle: "Historical Milestones",
    achievements: [
      { title: "Printing Press", year: "1440" },
      { title: "X-Ray Technology", year: "1895" },
      { title: "Automobile", year: "1885" },
      { title: "Diesel Engine", year: "1892" },
      { title: "MP3 Format", year: "1980s" },
      { title: "Modern Aspirin", year: "1897" }
    ],
    manufacturerButton: "German Manufacturer",
    buyerButton: "International Buyer",
    watchVideo: "Watch Video",
    engineeringExcellence: "Engineering Excellence",
    ourMission: "Our Mission",
    aboutUs: "About Us"
  },
  de: {
    title: "MADE IN GERMANY © : Ein Erbe weltverändernder Erfindungen",
    description: "Deutsche Innovation Feiern: Exzellenz Pionieren\nEntdecken Sie, wie deutscher Erfindergeist die Welt mit bahnbrechenden Erfindungen geprägt hat, von der Druckpresse bis zur modernen Technologie. Deutschlands Ingenieurskunst hat Industrien neu definiert und globale Qualitätsstandards gesetzt. Heute steht 'MADE IN GERMANY © ' für Vertrauen und Exzellenz, inspiriert Industrien weltweit. Unser Engagement sichert dieses Erbe für eine nachhaltige Zukunft.",
    buttonOurPassion: "Kontaktieren Sie uns",
    buttonShowMore: "Mehr anzeigen",
    buttonShowLess: "Weniger anzeigen",
    expandedPara1: "Die bewegte Geschichte deutscher Erfindungen – von Johannes Gutenbergs Druckpresse, die die Verbreitung von Wissen revolutionierte, bis zu Karl Benz' Schöpfung des ersten praktikablen Automobils – spiegelt ein unerschütterliches Engagement für Präzision, Kreativität und transformative Wirkung wider. Dieses Erbe an Ingenieurskunst hat nicht nur dauerhafte globale Maßstäbe gesetzt, sondern beeinflusst weiterhin zeitgenössische Industrien, von der Präzisionsfertigung bis hin zur fortschrittlichen technologischen Entwicklung, und festigt Deutschlands Ruf als Wiege der Innovation.",
    expandedPara2: "Unsere multidisziplinäre Expertise baut auf diesem außergewöhnlichen Erbe auf und liefert anspruchsvolle Lösungen, die die Essenz deutscher Ingenieurskunst verkörpern. Durch die Förderung internationaler Zusammenarbeit und die Weiterentwicklung modernster Anwendungen ehren wir den Pioniergeist deutscher Erfinder und gehen gleichzeitig auf die komplexen Anforderungen moderner Märkte ein. Dieser Ansatz stellt sicher, dass die zeitlosen Prinzipien von Qualität und Einfallsreichtum an der Spitze des globalen industriellen Fortschritts bleiben.",
    missionTitle: "Globale Inspiration",
    missionText: "Den innovativen Geist Deutschlands mit der Welt teilen.",
    visionTitle: "Zukunft gestalten",
    visionText: "Globale Industrien mit zeitloser deutscher Exzellenz anführen.",
    valuesTitle: "Deutsche Präzision",
    valuesText: "Qualität, Einfallsreichtum und Verlässlichkeit prägen unser Erbe.",
    achievementsTitle: "Historische Meilensteine",
    achievements: [
      { title: "Buchdruck", year: "1440" },
      { title: "Röntgentechnik", year: "1895" },
      { title: "Automobil", year: "1885" },
      { title: "Dieselmotor", year: "1892" },
      { title: "MP3-Format", year: "1980er" },
      { title: "Modernes Aspirin", year: "1897" }
    ],
    manufacturerButton: "Deutscher Hersteller",
    buyerButton: "Internationaler Käufer",
    watchVideo: "Video ansehen",
    engineeringExcellence: "Technische Exzellenz",
    ourMission: "Unsere Mission",
    aboutUs: "Über Uns"
  },
};

// Mission Value component with updated styling
const MissionValueItem: React.FC<{
  title: string;
  text: string;
  icon: React.ReactNode;
}> = ({ title, text, icon }) => (
  <motion.div
    className="border-b border-gray-700 pb-4 last:border-0 last:pb-0 hover:bg-gray-800/50 p-3 -mx-3 rounded-lg transition-colors duration-300"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-2 mb-2">
      <div className="text-blue-400">{icon}</div>
      <h4 className="font-medium text-white">{title}</h4>
    </div>
    <p className="text-gray-300 text-sm pl-7">{text}</p>
  </motion.div>
);

// Modern Timeline Item component with updated styling
const TimelineItem: React.FC<{
  achievement: Achievement;
  index: number;
  hoveredItem: number | null;
  setHoveredItem: (index: number | null) => void;
}> = ({ achievement, index, hoveredItem, setHoveredItem }) => (
  <motion.div 
    className="flex items-start group py-3"
    onMouseEnter={() => setHoveredItem(index)}
    onMouseLeave={() => setHoveredItem(null)}
    whileHover={{ x: 8 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="w-16 text-sm font-mono text-gray-300 pt-1 shrink-0">
      {achievement.year}
    </div>
    <div className="flex-grow">
      <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
        {achievement.title}
      </h4>
      <div className="h-px w-full bg-gray-700 mt-2 overflow-hidden">
        <motion.div 
          className="h-full bg-blue-400"
          initial={{ width: "15%" }}
          animate={{ width: hoveredItem === index ? "100%" : "15%" }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
    <ArrowRight 
      className={`ml-2 transition-opacity duration-300 shrink-0 mt-1 text-blue-400 ${
        hoveredItem === index ? "opacity-100" : "opacity-0"
      }`}
      size={16}
    />
  </motion.div>
);

const VideoSection: React.FC<VideoSectionProps> = ({ language = 'en' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const navigate = useNavigate();

  // Get translations for current language or fallback to English
  const translations = TRANSLATIONS[language] || TRANSLATIONS.en;
  const previewImage = `/made-in-germany-preview-${language === 'de' ? 'german' : 'english'}.jpg`;
  const videoPath = "/timeline-of-inventions-by-germany.mp4";

  const handleContactClick = () => {
    navigate('/contactform');
  };

  return (
    <div className="flex justify-center">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Information Column */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-2">
                  {translations.ourMission}
                </h3>
                <div className="space-y-4">
                  <MissionValueItem 
                    title={translations.missionTitle} 
                    text={translations.missionText}
                    icon={<Info size={16} />}
                  />
                  <MissionValueItem 
                    title={translations.visionTitle} 
                    text={translations.visionText}
                    icon={<ArrowRight size={16} />}
                  />
                  <MissionValueItem 
                    title={translations.valuesTitle} 
                    text={translations.valuesText}
                    icon={<Calendar size={16} />}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-2">
                  {translations.aboutUs}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {translations.description.split('\n')[1]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactClick}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                  >
                    {translations.manufacturerButton} <ArrowRight size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactClick}
                    className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
                  >
                    {translations.buyerButton} <ArrowRight size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2 col-span-2"
                  >
                    {isExpanded ? translations.buttonShowLess : translations.buttonShowMore}
                    <ChevronRight size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                  </motion.button>
                </div>

                {isExpanded && (
                  <motion.div 
                    className="mb-4 border-l-2 border-gray-700 pl-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {translations.expandedPara1}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {translations.expandedPara2}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Video & History Column */}
            <div>
              {/* Video Box */}
              <div className="mb-8">
                <motion.div
                  className="relative rounded-lg overflow-hidden cursor-pointer group bg-gray-800/50 border border-gray-700"
                  onClick={() => setIsOpen(true)}
                  whileHover={{ scale: 1.01, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Video Preview */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={previewImage}
                      alt="Video preview"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-gray-800/50 backdrop-blur flex items-center justify-center border border-gray-700 transition-colors duration-300 group-hover:bg-gray-800/70 group-hover:border-gray-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Play size={24} className="text-blue-400 ml-1" />
                      </motion.div>
                    </div>
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1">
                        {translations.title}
                      </h3>
                      <p className="text-gray-300 text-sm hidden md:block leading-relaxed">
                        {translations.description.split('\n')[0]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-between">
                  {translations.achievementsTitle}
                  <Calendar size={20} className="text-blue-400" />
                </h3>
                <div className="border-t border-gray-700">
                  {translations.achievements.map((achievement, index) => (
                    <TimelineItem 
                      key={index}
                      achievement={achievement}
                      index={index}
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                    />
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <span className="text-gray-300 text-xs uppercase tracking-wider font-medium">
                    {translations.engineeringExcellence}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Modal */}
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) setIsOpen(false);
              }}
            >
              <motion.div 
                className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <div
                  className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
                />
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-200 hover:text-white bg-gray-800/50 backdrop-blur p-2 rounded-full border border-gray-700 transition-colors duration-300 z-10 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                  aria-label="Close video"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
                <video
                  className="w-full aspect-video"
                  controls
                  autoPlay
                  src={videoPath}
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default VideoSection;