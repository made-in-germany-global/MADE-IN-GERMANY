import React from 'react';
import { motion } from 'framer-motion';
import { Container, Ship, Truck, Clock, Euro, ThermometerSnowflake, Package, Warehouse } from 'lucide-react';

export default function ContainerOptionsSection() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.5
      }
    })
  };

  const containerTypes = [
    {
      icon: <Container size={24} />,
      title: "Standard Container",
      description: "20ft und 40ft Container für allgemeine Fracht. Ideal für die meisten Produkte ohne spezielle Anforderungen.",
      details: ["20ft: 33,2 m³", "40ft: 67,7 m³", "High Cube: +8% Volumen"]
    },
    {
      icon: <ThermometerSnowflake size={24} />,
      title: "Kühlcontainer",
      description: "Temperaturgesteuerte Container für empfindliche Waren wie Pharmazeutika, Lebensmittel oder Chemikalien.",
      details: ["Temperaturbereich: -30°C bis +30°C", "Konstante Überwachung", "Verfügbar in 20ft und 40ft"]
    },
    {
      icon: <Truck size={24} />,
      title: "Spezialcontainer",
      description: "Maßgeschneiderte Lösungen für Übergrößen, Schwerlast oder besonders empfindliche deutsche Maschinenbauprodukte.",
      details: ["Open Top", "Flat Rack", "Extra Height/Width", "Projektspezifische Lösungen"]
    },
    {
      icon: <Package size={24} />,
      title: "LCL Versand",
      description: "Less than Container Load für kleinere Sendungen. Teilen Sie Container mit anderen Exporteuren und zahlen nur für Ihren Platz.",
      details: ["Kostengünstig für kleinere Mengen", "Flexible Versandgrößen", "Konsolidierter Transport"]
    }
  ];

  const benefits = [
    {
      icon: <Euro size={24} />,
      title: "Kosteneffizienz",
      description: "Optimieren Sie Versandkosten durch die richtige Containerwahl. FCL für große Mengen, LCL für kleinere Sendungen."
    },
    {
      icon: <Ship size={24} />,
      title: "Globale Kompatibilität",
      description: "Deutsche Container entsprechen internationalen ISO-Standards und gewährleisten nahtlosen Transport weltweit."
    },
    {
      icon: <Clock size={24} />,
      title: "Schnellere Abfertigung",
      description: "Standardisierte Container beschleunigen Hafenabfertigungen und Zollverfahren für deutsche Exportgüter."
    },
    {
      icon: <Warehouse size={24} />,
      title: "Lagersicherheit",
      description: "Geschützt vor Witterung, Diebstahl und Beschädigung während des gesamten Transportwegs."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <motion.div 
        className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 md:p-16 relative z-10">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="max-w-4xl">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Containerlösungen für Deutschen Exporterfolg
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Entdecken Sie optimale Containerlösungen für den internationalen Transport deutscher Qualitätsprodukte. Von Standardcontainern bis hin zu spezialisierten Optionen – wir bieten effiziente Lösungen für Ihren globalen Handelserfolg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Container size={20} />
                Containeroptionen erkunden
              </motion.button>
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Ship size={20} />
                Beratung anfordern
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Container Types Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0.3}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl md:text-3xl font-extrabold mb-8 text-center">
            Containertypen für Internationalen Handel
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {containerTypes.map((container, index) => (
              <motion.div
                key={container.title}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4 text-blue-400">
                  {container.icon}
                </div>
                <h3 className="font-medium text-xl text-white mb-3">{container.title}</h3>
                <p className="text-gray-300 mb-4">{container.description}</p>
                <ul className="text-gray-400 text-sm space-y-2">
                  {container.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 text-lg">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FCL vs LCL Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0.6}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl md:text-3xl font-extrabold mb-8 text-center">
            FCL vs. LCL: Die richtige Wahl für Ihren Bedarf
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              variants={cardVariants}
              custom={0}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                  FCL
                </div>
                <h3 className="font-medium text-xl text-white">Full Container Load</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Exklusiver Zugang zu einem vollständigen Container für Ihre Waren. Ideal für große Sendungen oder sensible Produkte, die Isolation erfordern.
              </p>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Direkte Transportwege ohne Umladung
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Geringeres Beschädigungsrisiko
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Kosteneffizient für größere Volumen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Verbesserte Sicherheit und Kontrolle
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              variants={cardVariants}
              custom={1}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center text-white font-bold">
                  LCL
                </div>
                <h3 className="font-medium text-xl text-white">Less than Container Load</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Teilen Sie Containerplatz mit anderen Exporteuren und zahlen nur für den Raum, den Ihre Waren benötigen. Perfekt für kleinere Sendungen.
              </p>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Kostengünstig für kleine bis mittlere Sendungen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Flexible Versandgrößen und -mengen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Häufigere Abfahrten und kürzere Wartezeiten
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span> Ideal für Markteintritt und Testphasen
                </li>
              </ul>
            </motion.div>
          </div>
          
          <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-800/50 text-center">
            <p className="text-gray-200 font-medium">
              Unsere Logistikexperten beraten Sie individuell zur optimalen Containerwahl für Ihre spezifischen Exportbedürfnisse.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0.9}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl md:text-3xl font-extrabold mb-8 text-center">
            Vorteile für deutsche Exporteure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                custom={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4 text-blue-400">
                  {benefit.icon}
                </div>
                <h3 className="font-medium text-lg text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={1.2}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative z-10 text-center">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-2xl md:text-3xl font-extrabold mb-4">
            Optimieren Sie Ihren Internationalen Transport
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Steigern Sie die Effizienz Ihrer Exportlogistik mit passenden Containerlösungen für deutsche Qualitätsprodukte.
          </p>
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] mx-auto"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            Containerberatung starten
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}