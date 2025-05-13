import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, Briefcase, TrendingUp, Users, PieChart, ShieldCheck, Scale } from 'lucide-react';

export default function PolicyAndTrade() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1
      }
    })
  };

  const policyCards = [
    {
      icon: <FileText size={24} className="text-blue-400" />,
      title: "Regulatorische Rahmenbedingungen",
      description: "Analyse von Handelsgesetzen und Regularien, die den Export deutscher Produkte beeinflussen."
    },
    {
      icon: <Briefcase size={24} className="text-blue-400" />,
      title: "Handelsabkommen",
      description: "Überblick über aktuelle und zukünftige Handelsabkommen zwischen Deutschland, der EU und globalen Partnern."
    },
    {
      icon: <TrendingUp size={24} className="text-blue-400" />,
      title: "Marktprognosen",
      description: "Analysen zu Markttrends und politischen Entwicklungen mit Auswirkungen auf Exportmöglichkeiten."
    },
    {
      icon: <Users size={24} className="text-blue-400" />,
      title: "Stakeholder-Management",
      description: "Strategien zur Zusammenarbeit mit politischen Entscheidungsträgern und Handelsorganisationen."
    },
    {
      icon: <PieChart size={24} className="text-blue-400" />,
      title: "Wirtschaftsindikatoren",
      description: "Wichtige Kennzahlen und Daten zur Bewertung von Marktpotenzialen in verschiedenen Regionen."
    },
    {
      icon: <ShieldCheck size={24} className="text-blue-400" />,
      title: "Compliance-Standards",
      description: "Unterstützung bei der Einhaltung internationaler Handelsstandards und Zertifizierungen."
    },
    {
      icon: <Scale size={24} className="text-blue-400" />,
      title: "Rechtsberatung",
      description: "Juristische Beratung zu handelsrechtlichen Fragen und internationalen Vertragsgestaltungen."
    },
    {
      icon: <Globe size={24} className="text-blue-400" />,
      title: "Globale Netzwerke",
      description: "Zugang zu einem breiten Netzwerk an Experten im Bereich internationaler Handelspolitik."
    }
  ];

  const metrics = [
    { title: "Handelsabkommen", value: "14", unit: "Aktive Partnerschaften", bg: "bg-blue-900" },
    { title: "Marktreichweite", value: "150+", unit: "Länder", bg: "bg-green-900" },
    { title: "Compliance Rate", value: "99.8%", unit: "Erfolgsquote", bg: "bg-red-900" },
    { title: "Handelsvolumen", value: "€420", unit: "Mrd. jährlich", bg: "bg-yellow-900" }
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
        <div className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-8 px-6 md:px-12">
            <div className="max-w-3xl">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-3xl font-extrabold mb-4">
                Policy and Trade
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Die Zukunft des globalen Handels gestalten
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Die politischen Rahmenbedingungen und Handelsabkommen bilden das Fundament für den erfolgreichen Export deutscher Qualitätsprodukte. Durch eine strategische Zusammenarbeit zwischen Regierungen, politischen Akteuren und Handelsorganisationen schaffen wir optimale Voraussetzungen für den internationalen Marktzugang und langfristigen Erfolg deutscher Hersteller.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                >
                  <Globe size={20} />
                  Beratung anfragen
                </motion.button>
                <motion.button 
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText size={20} />
                  Whitepaper herunterladen
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className={`${metric.bg} rounded-lg p-6 text-white shadow-lg ring-1 ring-white/10`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <h3 className="text-lg font-medium mb-2">{metric.title}</h3>
              <p className="text-4xl font-extrabold mb-1">{metric.value}</p>
              <p className="text-sm text-gray-300">{metric.unit}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-gradient-to-br from-gray-900 to-black relative rounded-2xl shadow-2xl ring-1 ring-white/20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 py-8 px-6 md:px-12">
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-3xl font-extrabold mb-6">
                Politische Rahmenbedingungen und Handelsabkommen
              </h2>
              <p className="text-lg text-gray-300">
                Erfolgreicher internationaler Handel basiert auf stabilen politischen Rahmenbedingungen und vorteilhaften Handelsabkommen. Unsere Experten unterstützen deutsche Hersteller dabei, sich in komplexen regulatorischen Landschaften zu orientieren und von bestehenden sowie zukünftigen Handelsabkommen zu profitieren.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="font-medium text-xl text-white mb-6">Unsere Leistungen im Bereich Policy and Trade</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {policyCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                    custom={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  >
                    <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h4 className="font-medium text-white mb-2">{card.title}</h4>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-medium text-xl text-white mb-6">Die Bedeutung politischer Zusammenarbeit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white mb-3">Langfristige Perspektiven</h4>
                  <p className="text-gray-300">
                    Durch die enge Zusammenarbeit mit politischen Akteuren können Handelsbarrieren abgebaut und neue Märkte erschlossen werden. Dies schafft langfristige Planungssicherheit für deutsche Exporteure und ermöglicht strategische Investitionen in internationale Märkte.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-white mb-3">Praktische Unterstützung</h4>
                  <p className="text-gray-300">
                    Unsere Experten arbeiten direkt mit Handelskammern, Botschaften und internationalen Wirtschaftsorganisationen zusammen, um deutschen Herstellern konkrete Hilfestellung bei der Erschließung neuer Märkte zu bieten und rechtliche sowie administrative Hürden zu überwinden.
                  </p>
                </div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white mb-3">Strategische Partnerschaft</h4>
                <p className="text-gray-300 mb-6">
                  Die strategische Zusammenarbeit zwischen wirtschaftlichen und politischen Akteuren ist ein entscheidender Erfolgsfaktor im internationalen Handel. Wir unterstützen Sie dabei, diese Synergiepotenziale zu erkennen und gezielt zu nutzen.
                </p>
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Jetzt Kontakt aufnehmen
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsModalOpen(false)}></div>
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl font-extrabold mb-4">
              Beratungsgespräch vereinbaren
            </h2>
            <p className="text-gray-300 mb-6">
              Sprechen Sie mit unseren Experten über Ihre spezifischen Anforderungen im Bereich Policy and Trade. Wir unterstützen Sie bei der Erschließung neuer Märkte durch optimale Nutzung politischer Rahmenbedingungen.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Unternehmen</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 text-sm">E-Mail</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 text-sm">Anliegen</label>
                <textarea 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24" 
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex-1"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Absenden
                </motion.button>
                <motion.button 
                  type="button"
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700"
                  onClick={() => setIsModalOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schließen
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}