import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, TrendingUp, Shield, Settings, Clock, Leaf, Globe, ChevronRight } from 'lucide-react';

export default function ManufacturingExcellence() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + custom * 0.1, duration: 0.5 }
    })
  };

  // Features data
  const excellenceFeatures = [
    {
      icon: <Award className="text-blue-400" />,
      title: "Präzision",
      description: "Unübertroffene Genauigkeit in jedem Herstellungsprozess, die weltweit als Maßstab gilt."
    },
    {
      icon: <CheckCircle className="text-blue-400" />,
      title: "Zuverlässigkeit",
      description: "Produkte, die für ihre Langlebigkeit und konstante Leistung unter allen Betriebsbedingungen bekannt sind."
    },
    {
      icon: <Settings className="text-blue-400" />,
      title: "Innovationskraft",
      description: "Kontinuierliche Entwicklung fortschrittlicher Fertigungstechnologien und Prozessverbesserungen."
    },
    {
      icon: <Shield className="text-blue-400" />,
      title: "Qualitätsstandards",
      description: "Einhaltung und Übertreffung internationaler Normen, einschließlich ISO-Zertifizierungen."
    },
    {
      icon: <TrendingUp className="text-blue-400" />,
      title: "Technologischer Vorsprung",
      description: "Integration modernster Technologien für Effizienz und überlegene Produktqualität."
    },
    {
      icon: <Clock className="text-blue-400" />,
      title: "Termintreue",
      description: "Zuverlässige Lieferketten und präzise Zeitplanung für optimale Geschäftsprozesse."
    },
    {
      icon: <Leaf className="text-blue-400" />,
      title: "Nachhaltigkeit",
      description: "Umweltbewusste Produktionsmethoden mit reduziertem ökologischen Fußabdruck."
    },
    {
      icon: <Globe className="text-blue-400" />,
      title: "Globale Anerkennung",
      description: "Weltweites Vertrauen in die Exzellenz deutscher Fertigungsprozesse und -produkte."
    }
  ];

  // Certification data
  const certifications = [
    { name: "ISO 9001", value: "Qualitätsmanagement" },
    { name: "ISO 14001", value: "Umweltmanagement" },
    { name: "ISO 50001", value: "Energiemanagement" },
    { name: "ISO/TS 16949", value: "Automobilindustrie" }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Manufacturing Excellence
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Deutsche Fertigungsexzellenz – ein Synonym für Präzision, Innovation und unübertroffene Qualität. 
            Entdecken Sie, warum führende Unternehmen weltweit auf deutsche Ingenieurskunst und Produktionsstandards vertrauen.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr erfahren <ChevronRight size={16} />
            </motion.button>
            
            <motion.button 
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Kontakt aufnehmen
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 p-6 md:p-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              German Engineering – Ein globaler Maßstab
            </h2>
            
            <div className="text-gray-300 space-y-4 mb-12">
              <p className="text-lg">
                Die deutsche Fertigungsindustrie ist weltweit für ihre außergewöhnliche Qualität, Zuverlässigkeit und technologische Innovation bekannt. 
                "Made in Germany" steht für einen kompromisslosen Ansatz bei Design, Materialauswahl und Präzisionsfertigung.
              </p>
              
              <p className="text-lg">
                Mit Jahrzehnten kontinuierlicher Verbesserung haben deutsche Hersteller Standards gesetzt, die weltweit als Maßstab für Exzellenz gelten. 
                Unsere Unternehmen vereinen traditionelles Handwerk mit modernster Technologie, um Produkte zu schaffen, die durch überragende Leistung und Langlebigkeit überzeugen.
              </p>
              
              <p className="text-lg">
                Vertrauen Sie auf die Expertise, die internationale Marktführer wählen – von präzisen Maschinenbaukomponenten bis hin zu komplexen Automatisierungssystemen. 
                Deutsche Fertigungsexzellenz bedeutet zuverlässige Qualität, auf die Sie sich verlassen können.
              </p>
            </div>

            {/* Features Grid */}
            <h3 className="font-medium text-xl text-gray-200 mb-6">Merkmale deutscher Fertigungsexzellenz</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {excellenceFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-medium text-gray-200 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications Section */}
            <h3 className="font-medium text-xl text-gray-200 mb-6">Internationale Zertifizierungen</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 flex flex-col"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 8}
                >
                  <div className="text-2xl font-bold text-blue-400 mb-2">{cert.name}</div>
                  <div className="text-sm text-gray-400">{cert.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-medium text-xl text-gray-200 mb-2">Entdecken Sie deutsche Fertigungsexzellenz</h3>
                  <p className="text-sm text-gray-400">Kontaktieren Sie uns, um mehr über unsere Qualitätsstandards und maßgeschneiderten Lösungen zu erfahren.</p>
                </div>
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Jetzt anfragen <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 p-6 md:p-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-10 text-center">
              Deutsche Fertigungsexzellenz in Zahlen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-blue-900 bg-opacity-50 p-6 rounded-lg text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <div className="text-4xl font-bold text-white mb-2">99.8%</div>
                <div className="text-sm text-gray-300 font-medium">Fehlerfreie Produktion</div>
              </motion.div>
              
              <motion.div 
                className="bg-green-900 bg-opacity-50 p-6 rounded-lg text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-sm text-gray-300 font-medium">Reduktion des CO₂-Fußabdrucks</div>
              </motion.div>
              
              <motion.div 
                className="bg-yellow-900 bg-opacity-50 p-6 rounded-lg text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-sm text-gray-300 font-medium">Internationale Auszeichnungen</div>
              </motion.div>
              
              <motion.div 
                className="bg-red-900 bg-opacity-50 p-6 rounded-lg text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
              >
                <div className="text-4xl font-bold text-white mb-2">130+</div>
                <div className="text-sm text-gray-300 font-medium">Länder vertrauen auf unsere Produkte</div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}