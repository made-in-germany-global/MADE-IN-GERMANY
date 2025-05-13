import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Truck, HeadphonesIcon, Globe, MapPin, FileText, ChevronRight } from 'lucide-react';

export default function TeamSection() {
  const [showModal, setShowModal] = useState(false);

  const competencies = [
    {
      icon: <Users size={24} className="text-blue-400" />,
      title: "Vertrieb",
      description: "Expertise in internationaler Vertriebsstrategie und Markterschließung mit lokalem Know-how."
    },
    {
      icon: <Code size={24} className="text-blue-400" />,
      title: "Technik",
      description: "Innovative Lösungsentwicklung durch erfahrene Ingenieure und Programmierer weltweit."
    },
    {
      icon: <Truck size={24} className="text-blue-400" />,
      title: "Logistik",
      description: "Effiziente Lieferketten und maßgeschneiderte Logistiklösungen für globale Anforderungen."
    },
    {
      icon: <HeadphonesIcon size={24} className="text-blue-400" />,
      title: "Kundensupport",
      description: "Mehrsprachiger Support mit 24/7-Erreichbarkeit für alle Zeitzonen."
    }
  ];

  const regions = [
    { region: "Europa", languages: "Deutsch, Englisch, Französisch, Italienisch, Spanisch" },
    { region: "Nordamerika", languages: "Englisch, Spanisch, Französisch" },
    { region: "Asien-Pazifik", languages: "Mandarin, Japanisch, Koreanisch, Englisch" },
    { region: "Naher Osten & Afrika", languages: "Arabisch, Englisch, Französisch" }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black py-8 px-6 md:px-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 ring-1 ring-white/20 rounded-xl p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unser globales Team
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl">
              Entdecken Sie die Menschen hinter unserem Erfolg – ein internationales Team von Experten, 
              die täglich daran arbeiten, Ihren Geschäftserfolg zu sichern und zu steigern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
              >
                Team kennenlernen <ChevronRight size={18} />
              </motion.button>
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Karriere <FileText size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Description */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          <div className="relative z-10 ring-1 ring-white/20 rounded-xl p-6 md:p-8">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Internationale Expertise
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Unser Team vereint Fachkräfte aus über 25 Ländern und bringt vielfältige Perspektiven in unsere 
              tägliche Arbeit ein. Diese kulturelle und fachliche Diversität ist der Schlüssel zu unserem Erfolg 
              im globalen B2B-Markt. Wir arbeiten in einem dynamischen, kollaborativen Umfeld, in dem Innovation 
              und kundenorientierte Lösungen im Mittelpunkt stehen.
            </p>
            <p className="text-lg text-gray-300">
              Durch kontinuierliche Weiterbildung und fachübergreifenden Austausch stellen wir sicher, dass 
              unser Team stets auf dem neuesten Stand der Branchenentwicklungen bleibt und proaktiv auf 
              Marktanforderungen reagieren kann.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Competencies Grid */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          <div className="relative z-10 ring-1 ring-white/20 rounded-xl p-6 md:p-8">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Kernkompetenzen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competencies.map((competency, index) => (
                <motion.div 
                  key={competency.title}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {competency.icon}
                  </div>
                  <h3 className="font-medium text-xl text-white mb-3">{competency.title}</h3>
                  <p className="text-gray-300">{competency.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Regional Teams */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          <div className="relative z-10 ring-1 ring-white/20 rounded-xl p-6 md:p-8">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Regionale Ansprechpartner
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Wir verstehen, dass globale Präsenz lokale Expertise erfordert. Daher bieten wir Ihnen spezialisierte 
              Ansprechpartner für jede Region, die mit den örtlichen Marktbedingungen, rechtlichen Anforderungen und 
              kulturellen Besonderheiten bestens vertraut sind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((region, index) => (
                <motion.div 
                  key={region.region}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700 flex"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-xl text-white mb-2">{region.region}</h3>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Globe size={16} className="mr-2" /> 
                      Sprachen:
                    </div>
                    <p className="text-gray-300">{region.languages}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Onboarding Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)}></div>
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Mit uns zusammenarbeiten
            </h2>
            <p className="text-gray-300 mb-6">
              Sie möchten mit unserem Team in Kontakt treten? Füllen Sie das Formular aus, und wir verbinden Sie mit 
              dem passenden regionalen Ansprechpartner für Ihr Anliegen.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-400 mb-1 text-sm">Region</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200">
                  <option>Bitte wählen</option>
                  <option>Europa</option>
                  <option>Nordamerika</option>
                  <option>Asien-Pazifik</option>
                  <option>Naher Osten & Afrika</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-1 text-sm">Ihr Anliegen</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200">
                  <option>Bitte wählen</option>
                  <option>Vertrieb</option>
                  <option>Technische Unterstützung</option>
                  <option>Logistik</option>
                  <option>Kundensupport</option>
                  <option>Franchise-Anfragen</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Anfrage senden
              </motion.button>
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(false)}
              >
                Abbrechen
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}