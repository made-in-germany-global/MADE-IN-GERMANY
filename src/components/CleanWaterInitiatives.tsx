import { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Users, Award, Globe, ArrowRight, ChevronRight } from 'lucide-react';

export default function CleanWaterInitiatives() {
  const [showModal, setShowModal] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black relative z-10 py-16 px-6 md:px-12">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Clean Water Initiatives
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Unser Engagement für nachhaltige und innovative Lösungen zur Bereitstellung von sauberem Wasser in weltweit benachteiligten Regionen. Gemeinsam erschaffen wir eine Zukunft, in der jeder Mensch Zugang zu sauberem Trinkwasser hat.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
              >
                Mehr erfahren <ChevronRight size={18} />
              </motion.button>
              <motion.button
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Partner werden <Users size={18} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black relative z-10 py-8 px-6 md:px-12 rounded-2xl shadow-2xl ring-1 ring-white/20">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-20">
            <motion.h2 
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
              {...fadeInUp}
            >
              Unser Engagement für sauberes Wasser
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Als führende deutsche B2B-Plattform haben wir es uns zur Aufgabe gemacht, hochwertige und nachhaltige Wasserlösungen in Regionen zu bringen, die am stärksten von Wasserknappheit und -verschmutzung betroffen sind. Durch die Zusammenarbeit mit lokalen Gemeinschaften, NGOs und internationalen Partnern schaffen wir langfristige Lösungen, die das Leben von Tausenden von Menschen verbessern.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Droplet className="text-blue-400" size={24} />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">Wasserzugang</h3>
                <p className="text-gray-400">Wir installieren moderne Wassersysteme in abgelegenen Gemeinschaften, um zuverlässigen Zugang zu sauberem Wasser zu ermöglichen.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-blue-400" size={24} />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">Gemeinschaftstrainings</h3>
                <p className="text-gray-400">Wir schulen lokale Gemeinschaften in der Wartung und Nutzung der Wassersysteme für langfristige Nachhaltigkeit.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-blue-400" size={24} />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">Deutsche Qualität</h3>
                <p className="text-gray-400">Unsere Lösungen basieren auf deutscher Ingenieurskunst und erfüllen höchste Qualitätsstandards für Langlebigkeit.</p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-blue-400" size={24} />
                </div>
                <h3 className="font-medium text-xl text-white mb-2">Globale Reichweite</h3>
                <p className="text-gray-400">Unsere Initiativen erstrecken sich über 30+ Länder und haben bereits über 500.000 Menschen mit sauberem Wasser versorgt.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black relative z-10 py-8 px-6 md:px-12 rounded-2xl shadow-2xl ring-1 ring-white/20">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-20">
            <motion.h2 
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
              {...fadeInUp}
            >
              Unsere Auswirkungen
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <h3 className="font-medium text-xl text-white mb-4">Langfristige Vorteile</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-blue-400 min-w-6 mt-1" size={16} />
                    <span>Verbesserung der allgemeinen Gesundheit und Verringerung wasserbedingter Krankheiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-blue-400 min-w-6 mt-1" size={16} />
                    <span>Erhöhte Schulbesuchsraten, da Kinder nicht mehr für die Wasserbeschaffung zuständig sind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-blue-400 min-w-6 mt-1" size={16} />
                    <span>Wirtschaftliches Wachstum durch verbesserte Gesundheit und Zeitersparnis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="text-blue-400 min-w-6 mt-1" size={16} />
                    <span>Stärkung der Gemeinschaften durch gemeinsame Verantwortung</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="bg-blue-900 p-6 rounded-lg text-center">
                  <h4 className="text-4xl font-bold text-white mb-2">500k+</h4>
                  <p className="text-gray-300">Menschen erreicht</p>
                </div>
                <div className="bg-green-900 p-6 rounded-lg text-center">
                  <h4 className="text-4xl font-bold text-white mb-2">30+</h4>
                  <p className="text-gray-300">Länder</p>
                </div>
                <div className="bg-yellow-900 p-6 rounded-lg text-center">
                  <h4 className="text-4xl font-bold text-white mb-2">95%</h4>
                  <p className="text-gray-300">Effektivitätsrate</p>
                </div>
                <div className="bg-red-900 p-6 rounded-lg text-center">
                  <h4 className="text-4xl font-bold text-white mb-2">200+</h4>
                  <p className="text-gray-300">Partnerschaften</p>
                </div>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              Durch die Zusammenarbeit mit unseren Partnern, darunter führende NGOs und lokale Organisationen, konnten wir bereits bedeutende Fortschritte erzielen. Unsere Initiativen haben nicht nur den unmittelbaren Zugang zu sauberem Wasser verbessert, sondern auch langfristige positive Auswirkungen auf die Gesundheit, Bildung und das wirtschaftliche Wohlbefinden der Gemeinschaften.
            </motion.p>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Unsere Partner kennenlernen <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Onboarding Modal */}
      {showModal && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)}></div>
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">Clean Water Initiative</h3>
            <p className="text-gray-300 mb-6">
              Unsere Clean Water Initiative verbindet deutsche Ingenieurskunst mit lokalen Bedürfnissen, um nachhaltige Wasserlösungen zu schaffen. Durch Partnerschaften mit lokalen Gemeinschaften und NGOs stellen wir sicher, dass unsere Projekte langfristig bestehen bleiben und zur Verbesserung der Lebensqualität beitragen.
            </p>
            <p className="text-gray-300 mb-6">
              Mit Ihrer Unterstützung können wir noch mehr Menschen erreichen und ihnen Zugang zu sauberem Trinkwasser ermöglichen. Werden Sie Teil unserer Mission!
            </p>
            <div className="flex justify-end">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(false)}
              >
                Schließen
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}