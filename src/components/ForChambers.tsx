import { useState } from 'react';
import { ArrowRight, Building2, Globe, Users, Handshake, Award, BookOpen, PieChart, BarChartBig } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChambersAssociationsNetworks() {
  const [showModal, setShowModal] = useState(false);
  
  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Globale Reichweite",
      description: "Erweitern Sie Ihre internationale Präsenz durch strategische Partnerschaften mit deutschen Herstellern."
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-400" />,
      title: "Institutionelle Unterstützung",
      description: "Bieten Sie Ihren Mitgliedern direkten Zugang zu hochwertigen deutschen Produkten und Dienstleistungen."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Netzwerkerweiterung",
      description: "Schaffen Sie wertvolle Verbindungen zwischen Ihren Mitgliedern und führenden deutschen Herstellern."
    },
    {
      icon: <Handshake className="w-6 h-6 text-blue-400" />,
      title: "Strategische Kooperationen",
      description: "Entwickeln Sie gemeinsame Initiativen, die den Handel und Wissensaustausch fördern."
    }
  ];

  const cooperationAreas = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-400" />,
      title: "Wissensaustausch",
      description: "Gemeinsame Webinare, Workshops und Bildungsprogramme zur Förderung des Verständnisses deutscher Industriestandards."
    },
    {
      icon: <PieChart className="w-6 h-6 text-blue-400" />,
      title: "Marktanalysen",
      description: "Teilen Sie Einblicke und Daten zu Markttrends, um fundierte Geschäftsentscheidungen zu ermöglichen."
    },
    {
      icon: <BarChartBig className="w-6 h-6 text-blue-400" />,
      title: "Wirtschaftliche Zusammenarbeit",
      description: "Identifizieren Sie Wachstumspotenziale durch gezielte Kooperationen zwischen Ihren Mitgliedern und deutschen Herstellern."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "Qualitätssicherung",
      description: "Profitieren Sie von deutschen Qualitätsstandards und übertragen Sie Best Practices auf Ihre Mitgliedsunternehmen."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="py-8 px-6 md:px-12 z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Für Kammern, Verbände & Netzwerke
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Entdecken Sie die Vorteile von Partnerschaften mit deutschen Herstellern. Durch die Zusammenarbeit mit unserer Plattform können Sie den internationalen Handel fördern, Wissen austauschen und neue Geschäftsmöglichkeiten für Ihre Mitglieder erschließen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
              >
                Partnerschaft anfragen <ArrowRight className="w-5 h-5 ml-1" />
              </motion.button>
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Mehr erfahren
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="w-full max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Vorteile der Zusammenarbeit
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Unsere Partnerschaften mit Kammern, Verbänden und Netzwerken schaffen eine Win-Win-Situation für alle Beteiligten und fördern nachhaltiges Wachstum im internationalen Handel.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-medium text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Cooperation Areas Section */}
      <section className="w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="py-8 px-6 md:px-12 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Bereiche der Zusammenarbeit
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Entdecken Sie die vielfältigen Möglichkeiten der Kooperation, die zur Stärkung Ihrer globalen Präsenz und zur Förderung des internationalen Handels beitragen.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cooperationAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700 flex"
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {area.icon}
                </div>
                <div>
                  <h3 className="font-medium text-xl text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
          Werden Sie Teil unseres globalen Netzwerks
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Stärken Sie Ihre internationale Präsenz und eröffnen Sie Ihren Mitgliedern neue Möglichkeiten durch eine strategische Partnerschaft mit deutschen Herstellern.
        </p>
        <motion.button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] inline-flex items-center justify-center"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
        >
          Kontakt aufnehmen <ArrowRight className="w-5 h-5 ml-1" />
        </motion.button>
      </motion.section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)}></div>
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Partnerschaft anfragen
            </h3>
            <p className="text-gray-300 mb-6">
              Füllen Sie das Formular aus, um eine Partnerschaft mit uns zu beginnen. Unser Team wird sich innerhalb von 48 Stunden mit Ihnen in Verbindung setzen.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Organisation</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Name Ihrer Organisation"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 text-sm">E-Mail</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Nachricht</label>
                <textarea 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24"
                  placeholder="Wie können wir zusammenarbeiten?"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <motion.button 
                  type="button"
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-2 rounded-lg font-medium hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                >
                  Abbrechen
                </motion.button>
                <motion.button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Senden
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}