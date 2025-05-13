import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Globe, Clock, CheckCircle, BarChart3, Building, ArrowRight } from 'lucide-react';

export default function WarehouseGermany() {
  const benefits = [
    {
      icon: <Clock size={24} className="text-blue-400" />,
      title: "Kürzere Lieferzeiten",
      description: "Zentrale Lage in Europa ermöglicht schnellere Lieferungen in alle EU-Länder mit optimierten Transportwegen."
    },
    {
      icon: <CheckCircle size={24} className="text-blue-400" />,
      title: "Deutsche Qualitätsstandards",
      description: "Profitieren Sie von erstklassiger Infrastruktur und strengen Qualitätskontrollen nach deutschen Standards."
    },
    {
      icon: <BarChart3 size={24} className="text-blue-400" />,
      title: "Kosteneffizienz",
      description: "Reduzierte Logistikkosten durch Bündelung von Warenströmen und optimierte Distributionsnetzwerke."
    },
    {
      icon: <Globe size={24} className="text-blue-400" />,
      title: "Strategischer Standort",
      description: "Idealer Ausgangspunkt für den europäischen Markt mit exzellenter Anbindung an internationale Handelsrouten."
    }
  ];

  const services = [
    {
      icon: <Package size={28} className="text-blue-400" />,
      title: "Kommissionierung",
      description: "Professionelle Zusammenstellung von Aufträgen nach Kundenbedarf mit modernster Lagertechnologie."
    },
    {
      icon: <Building size={28} className="text-blue-400" />,
      title: "Zwischenlagerung",
      description: "Flexible Lagerkapazitäten für kurz- und langfristige Bedarfe mit vollständiger Bestandsverwaltung."
    },
    {
      icon: <Truck size={28} className="text-blue-400" />,
      title: "Internationaler Transport",
      description: "Nahtlose Weitertransporte ins Ausland mit zuverlässigen Partnernetzwerken und Zollabwicklung."
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
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto relative overflow-hidden rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black relative overflow-hidden rounded-2xl ring-1 ring-white/20">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 py-8 px-6 md:px-12 md:py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Lagerhaltung in Deutschland
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Entdecken Sie die strategischen Vorteile eines zentralen Lagers in Deutschland für Ihr internationales Geschäft. Mit optimaler Infrastruktur, kürzeren Lieferzeiten und höchsten Qualitätsstandards bieten wir die perfekte Lösung für Ihre europäische Logistik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Beratung anfragen <ArrowRight size={18} />
                </motion.button>
                <motion.button 
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mehr erfahren
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Vorteile der Lagerhaltung in Deutschland
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Deutschland bietet als Logistikstandort einzigartige Vorzüge für internationale Unternehmen durch seine zentrale Lage und hervorragende Infrastruktur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              variants={itemVariants}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-medium text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black relative rounded-2xl shadow-2xl ring-1 ring-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
        
        <div className="relative z-10 py-8 px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Unsere Logistikservices
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Wir bieten maßgeschneiderte Logistiklösungen, die perfekt auf Ihre geschäftlichen Anforderungen abgestimmt sind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-medium text-xl text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Warum Deutschland als Logistikstandort?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Deutschland zeichnet sich durch seine zentrale Lage in Europa aus, die optimale Voraussetzungen für eine effiziente Logistik bietet. Mit einem der dichtesten Autobahn- und Schienennetze Europas sowie mehreren internationalen Flughäfen und Seehäfen ermöglicht der Standort Deutschland schnelle Lieferungen in alle EU-Länder.
            </p>
            <p>
              Durch die Nutzung deutscher Lagerhaltung profitieren Sie von kürzeren Lieferzeiten, reduzierten Transportkosten und einer verbesserten Lieferzuverlässigkeit. Die strategische Platzierung Ihrer Waren in Deutschland minimiert die Anzahl der Umschlagpunkte und optimiert Ihre gesamte Lieferkette.
            </p>
            <p>
              Unsere modernen Logistikzentren bieten maßgeschneiderte Services wie professionelle Kommissionierung, flexible Zwischenlagerung und nahtlosen Weitertransport ins Ausland. Mit unserem erfahrenen Team und modernster Technologie garantieren wir höchste Qualitätsstandards bei allen logistischen Prozessen.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black relative rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 py-8 px-6 md:px-12 text-center">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Bereit für optimierte Logistik?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für eine individuelle Beratung zu Ihren Logistikanforderungen und erfahren Sie, wie wir Ihre Lieferkette effizienter gestalten können.
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