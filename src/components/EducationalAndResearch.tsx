import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, ChevronRight, Users, Building, Database, Lightbulb } from 'lucide-react';

export default function EducationalResearchSection() {
  const [activeTab, setActiveTab] = useState('benefits');

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.5
      }
    })
  };

  const benefitCards = [
    {
      icon: <BookOpen size={24} className="text-blue-400" />,
      title: "Wissensaustausch",
      description: "Profitieren Sie vom akademischen Know-how und den neuesten Forschungsergebnissen, um Ihre Produktentwicklung zu beschleunigen."
    },
    {
      icon: <Globe size={24} className="text-blue-400" />,
      title: "Forschungskooperationen",
      description: "Gemeinsame Forschungsprojekte ermöglichen innovative Lösungsansätze und eröffnen neue technologische Möglichkeiten."
    },
    {
      icon: <Users size={24} className="text-blue-400" />,
      title: "Talentakquise",
      description: "Knüpfen Sie frühzeitig Kontakte zu aufstrebenden Fachkräften und sichern Sie sich qualifizierte Mitarbeiter."
    },
    {
      icon: <Globe size={24} className="text-blue-400" />,
      title: "Internationale Reichweite",
      description: "Erweitern Sie Ihr globales Netzwerk und erschließen Sie neue Märkte durch akademische Partnerschaften weltweit."
    }
  ];

  const partnerCards = [
    {
      icon: <Building size={24} className="text-blue-400" />,
      title: "Universitäten",
      description: "Kooperieren Sie mit führenden technischen Universitäten und Hochschulen im In- und Ausland."
    },
    {
      icon: <Database size={24} className="text-blue-400" />,
      title: "Forschungsinstitute",
      description: "Nutzen Sie die Expertise spezialisierter Forschungseinrichtungen für angewandte Entwicklungsprojekte."
    },
    {
      icon: <Lightbulb size={24} className="text-blue-400" />,
      title: "Innovationszentren",
      description: "Beteiligen Sie sich an Innovationshubs und Technologiezentren für branchenübergreifende Zusammenarbeit."
    },
    {
      icon: <BookOpen size={24} className="text-blue-400" />,
      title: "Akademische Netzwerke",
      description: "Werden Sie Teil akademischer Netzwerke und erweitern Sie Ihre fachspezifischen Kontakte."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-16 px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Für Bildungs- und Forschungseinrichtungen
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Entdecken Sie, wie deutsche Hersteller mit Bildungs- und Forschungseinrichtungen weltweit zusammenarbeiten, um Innovationen zu fördern und technologische Entwicklungen voranzutreiben. Diese Partnerschaften bilden das Fundament für zukunftsweisende Lösungen und nachhaltige Erfolge im globalen Markt.
              </p>
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Partnerschaft anfragen <ChevronRight size={18} className="ml-1" />
                </motion.button>
                <motion.button 
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fallstudien anzeigen
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-8 px-6 md:px-12">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-3xl font-extrabold mb-4">
                Innovationen durch Zusammenarbeit
              </h2>
              <p className="text-lg text-gray-300">
                Die Kooperation zwischen deutschen Herstellern und Bildungseinrichtungen fördert nicht nur den Wissensaustausch, sondern trägt maßgeblich zur Weiterentwicklung neuer Produkte und Lösungen bei. Durch die Verbindung von akademischer Forschung und industrieller Anwendung entstehen Synergien, die internationalen Erfolg ermöglichen.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700 pb-4">
              <button 
                className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'benefits' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setActiveTab('benefits')}
              >
                Vorteile
              </button>
              <button 
                className={`px-4 py-2 rounded-t-lg font-medium ${activeTab === 'partners' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'}`}
                onClick={() => setActiveTab('partners')}
              >
                Partnertypen
              </button>
            </div>

            {/* Cards Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${activeTab !== 'benefits' && 'hidden'}`}>
              {benefitCards.map((card, index) => (
                <motion.div
                  key={`benefit-${index}`}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-medium text-xl text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </motion.div>
              ))}
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${activeTab !== 'partners' && 'hidden'}`}>
              {partnerCards.map((card, index) => (
                <motion.div
                  key={`partner-${index}`}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-medium text-xl text-white mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-8 px-6 md:px-12">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-3xl font-extrabold mb-8 text-center">
              Erfolgsgeschichten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                variants={cardVariants}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-xl text-white mb-2">TU München & Siemens</h3>
                <p className="text-gray-300 mb-4">
                  Gemeinsame Entwicklung eines KI-gestützten Fertigungsprozesses, der die Produktionseffizienz um 35% steigerte und in über 20 Ländern implementiert wurde.
                </p>
                <div className="flex justify-end">
                  <button className="text-blue-400 hover:text-blue-300 flex items-center font-medium">
                    Mehr erfahren <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </motion.div>
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                variants={cardVariants}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-xl text-white mb-2">RWTH Aachen & Bosch</h3>
                <p className="text-gray-300 mb-4">
                  Forschungskooperation zur Batterietechnologie führte zu einem Patent für nachhaltige Energiespeicherlösungen mit internationaler Markteinführung.
                </p>
                <div className="flex justify-end">
                  <button className="text-blue-400 hover:text-blue-300 flex items-center font-medium">
                    Mehr erfahren <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center">
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Alle Erfolgsgeschichten ansehen
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-12 px-6 md:px-12 text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-3xl font-extrabold mb-4">
              Gemeinsam die Zukunft gestalten
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Nutzen Sie die Chance, durch strategische Partnerschaften mit Bildungs- und Forschungseinrichtungen Ihre Innovationskraft zu stärken und gleichzeitig zur Förderung des akademischen Nachwuchses beizutragen.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt aufnehmen
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}