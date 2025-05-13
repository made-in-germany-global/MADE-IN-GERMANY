import React from 'react';
import { Globe, CheckCircle, Zap, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

// Define props interface
interface MadeInGermanySectionProps {
  language?: string;
}

// Define translations interface
interface Translation {
  coreValuesTitle: string;
  precisionTitle: string;
  precisionText: string;
  innovationTitle: string;
  innovationText: string;
  sustainabilityTitle: string;
  sustainabilityText: string;
  globalReachTitle: string;
  globalReachText: string;
  manufacturerButton: string;
  buyerButton: string;
  taglineTitle: string;
  taglineSubtitle: string;
  partnersTitle: string;
}

// Define translations object
const TRANSLATIONS: Record<string, Translation> = {
  de: {
    coreValuesTitle: "Unsere Kernwerte",
    precisionTitle: "Präzision",
    precisionText: "Deutsche Ingenieurskunst steht für höchste Präzision und Zuverlässigkeit. Wir garantieren erstklassige Produkte, die strengsten Qualitätskontrollen standhalten.",
    innovationTitle: "Innovation",
    innovationText: "Wir fördern technologische Durchbrüche und zukunftsweisende Lösungen. Unser Netzwerk verbindet die innovativsten Unternehmen Deutschlands.",
    sustainabilityTitle: "Nachhaltigkeit",
    sustainabilityText: "Umweltbewusstsein und soziale Verantwortung sind fest in unserer DNA verankert. Wir setzen auf nachhaltige Prozesse und ressourcenschonende Technologien.",
    globalReachTitle: "Globale Reichweite",
    globalReachText: "Mit strategischen Partnerschaften in mehr als 50 Ländern bieten wir deutschen Herstellern direkten Zugang zu den wichtigsten Märkten weltweit. Unsere spezialisierten Teams unterstützen bei allen Aspekten der internationalen Geschäftsentwicklung.",
    manufacturerButton: "Ich bin ein deutscher Hersteller",
    buyerButton: "Käufer International",
    taglineTitle: "Eine neue Ära der globalen Vernetzung",
    taglineSubtitle: "deutscher Qualitätsprodukte",
    partnersTitle: "Unsere Partner"
  },
  en: {
    coreValuesTitle: "Our Core Values",
    precisionTitle: "Precision",
    precisionText: "German engineering stands for the highest precision and reliability. We guarantee top-quality products that withstand the strictest quality controls.",
    innovationTitle: "Innovation",
    innovationText: "We promote technological breakthroughs and forward-thinking solutions. Our network connects Germany's most innovative companies.",
    sustainabilityTitle: "Sustainability",
    sustainabilityText: "Environmental awareness and social responsibility are deeply embedded in our DNA. We focus on sustainable processes and resource-efficient technologies.",
    globalReachTitle: "Global Reach",
    globalReachText: "With strategic partnerships in over 50 countries, we provide German manufacturers direct access to the world's key markets. Our specialized teams support all aspects of international business development.",
    manufacturerButton: "I'm a German Manufacturer",
    buyerButton: "I'm an International Buyer",
    taglineTitle: "A New Era of Global Networking",
    taglineSubtitle: "for German quality products",
    partnersTitle: "Our Partners"
  }
};

const MadeInGermanySection: React.FC<MadeInGermanySectionProps> = ({ language = 'de' }) => {
  const partners = Array(6).fill(0);
  const translations = TRANSLATIONS[language] || TRANSLATIONS.de;

  return (
    <div className="flex justify-center w-full px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white overflow-hidden shadow-2xl ring-1 ring-white/20 relative"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
            {/* Content Column */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center">
                  {translations.coreValuesTitle}
                </h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex gap-4 bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  >
                    <CheckCircle className="text-blue-400 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-lg text-white">{translations.precisionTitle}</h4>
                      <p className="text-gray-300 mt-1">{translations.precisionText}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex gap-4 bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  >
                    <Zap className="text-blue-400 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-lg text-white">{translations.innovationTitle}</h4>
                      <p className="text-gray-300 mt-1">{translations.innovationText}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="flex gap-4 bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  >
                    <Leaf className="text-blue-400 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-lg text-white">{translations.sustainabilityTitle}</h4>
                      <p className="text-gray-300 mt-1">{translations.sustainabilityText}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="text-blue-400" size={20} />
                  <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {translations.globalReachTitle}
                  </h3>
                </div>
                <p className="text-gray-300">{translations.globalReachText}</p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-row flex-nowrap gap-4 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex-1 max-w-[50%] whitespace-normal break-words"
                >
                  {translations.manufacturerButton}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex-1 max-w-[50%] whitespace-normal break-words"
                >
                  {translations.buyerButton}
                </motion.button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative space-y-6">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.7)]"></div>
              
              {/* Main image */}
              <motion.div
                className="relative h-80 w-full rounded-lg overflow-hidden group bg-gray-800/50 border border-gray-700"
                whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/40 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img
                  src="/made-in-germany-core-values.png"
                  alt="MADE IN GERMANY"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}>
                </div>
                {/* Tagline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800/50 border-t border-gray-700"
                  whileHover={{ translateY: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {translations.taglineTitle}
                  </div>
                  <div className="text-gray-300 text-sm">{translations.taglineSubtitle}</div>
                </motion.div>
              </motion.div>
              
              {/* Partners section */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-center font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-gray-600"></span>
                  {translations.partnersTitle}
                  <span className="h-px w-8 bg-gray-600"></span>
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {partners.map((_, index) => (
                    <motion.div
                      key={index}
                      className="aspect-video bg-gray-700/50 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer group border border-gray-700"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 group-hover:scale-110 transition-transform"></div>
                    </motion.div>
                  ))}
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