import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Award, Leaf, Eye, Globe, Briefcase } from 'lucide-react';

export default function VisionValues() {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariant = {
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

  const valueCards = [
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Kompromisslose Qualität",
      description: "Wir setzen höchste Standards für alle Produkte und Dienstleistungen, die über unsere Plattform angeboten werden. Jeder Hersteller durchläuft einen strengen Qualifizierungsprozess, um das Prädikat 'Made in Germany' zu tragen."
    },
    {
      icon: <Leaf className="w-8 h-8 text-blue-400" />,
      title: "Nachhaltige Zukunft",
      description: "Nachhaltigkeit ist nicht nur ein Trend, sondern unsere Verpflichtung. Wir fördern umweltbewusste Produktionsmethoden und transparente Lieferketten, die den Planeten für kommende Generationen schützen."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      title: "Vollständige Transparenz",
      description: "Von der Herstellung bis zur Lieferung - wir bieten vollständige Einblicke in jeden Schritt. Diese Transparenz schafft Vertrauen und ermöglicht fundierte Geschäftsentscheidungen für alle Beteiligten."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Globale Partnerschaften",
      description: "Wir verbinden deutsche Qualitätshersteller mit internationalen Märkten und schaffen dabei wertvolle, langfristige Geschäftsbeziehungen, die auf gegenseitigem Respekt und Fairness basieren."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Unsere Vision & Werte
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Wir verbinden deutsche Ingenieurskunst mit der Welt und schaffen einen vertrauenswürdigen Marktplatz, der für Exzellenz, Innovation und Zuverlässigkeit steht.
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Compass className="w-5 h-5" />
                Unsere Geschichte
              </motion.button>
              
              <motion.button
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase className="w-5 h-5" />
                Partner werden
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Vision Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 py-8 px-6 md:px-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unsere Vision
            </h2>
            
            <p className="text-lg text-gray-300 mb-6">
              Wir streben danach, die führende globale Plattform für deutsche Qualitätsprodukte zu sein, die Maßstäbe in Bezug auf Exzellenz und Zuverlässigkeit setzt. Unser Ziel ist es, internationale Märkte mit der Präzision und Innovation deutscher Ingenieurskunst zu verbinden und dabei nachhaltige Geschäftspraktiken zu fördern.
            </p>
            
            <p className="text-lg text-gray-300">
              Als vertrauenswürdige Brücke zwischen deutschen Herstellern und globalen Käufern schaffen wir ein Ökosystem, das auf gegenseitigem Erfolg basiert. Wir ermöglichen es mittelständischen Unternehmen, ihre internationale Präsenz zu stärken und gleichzeitig Käufern weltweit Zugang zu erstklassigen Produkten zu bieten.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Values Grid Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 py-8 px-6 md:px-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
              Unsere Kernwerte
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueCards.map((card, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-medium text-xl text-white mb-3">{card.title}</h3>
                  <p className="text-gray-300">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Implementation Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 py-8 px-6 md:px-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Werte in der Praxis
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Qualitätssicherung im Tagesgeschäft</h3>
                <p className="text-gray-300">Jeder Hersteller durchläuft einen umfassenden Zertifizierungsprozess, bevor er auf unserer Plattform gelistet wird. Regelmäßige Audits und Kundenbewertungen stellen sicher, dass unsere hohen Qualitätsstandards kontinuierlich erfüllt werden.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Nachhaltigkeitsmaßnahmen</h3>
                <p className="text-gray-300">Wir fördern CO2-neutrale Lieferketten und umweltfreundliche Produktionsmethoden. Unser Nachhaltigkeits-Dashboard ermöglicht es Käufern, den ökologischen Fußabdruck ihrer Einkäufe zu überwachen und bewusste Entscheidungen zu treffen.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Transparente Prozesse</h3>
                <p className="text-gray-300">Unsere Plattform bietet vollständige Einblicke in Herkunft, Produktionsbedingungen und Lieferketten. Durch den Einsatz von Blockchain-Technologie garantieren wir die Unveränderlichkeit dieser Informationen und schaffen so eine vertrauenswürdige Grundlage für Geschäftsbeziehungen.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg text-white mb-2">Partnerschaftliche Zusammenarbeit</h3>
                <p className="text-gray-300">Wir verstehen uns als aktiver Partner für alle Beteiligten. Durch regelmäßige Networking-Events, Schulungsprogramme und personalisierte Beratungsangebote unterstützen wir das kontinuierliche Wachstum unserer Gemeinschaft.</p>
              </div>
            </div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Mehr über unsere Standards erfahren
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}