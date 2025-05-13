import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Handshake, ArrowRight, Users, Building, TrendingUp, MessageSquare, ShieldCheck } from 'lucide-react';

export default function CooperationSection() {
  const benefitCards = [
    {
      id: 1,
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Globale Marktpräsenz",
      description: "Erweitern Sie Ihre Reichweite auf internationale Märkte durch strategische Partnerschaften mit etablierten lokalen Unternehmen."
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Fachwissen & Know-how",
      description: "Profitieren Sie vom Austausch spezialisierter Kenntnisse und Fähigkeiten für Innovation und Problemlösung."
    },
    {
      id: 3,
      icon: <Building className="w-6 h-6 text-blue-400" />,
      title: "Ressourcenoptimierung",
      description: "Teilen Sie Produktionskapazitäten, Lieferketten und Technologien für maximale Effizienz und Kostenvorteile."
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Wachstumschancen",
      description: "Erschließen Sie neue Geschäftsfelder und Kundensegmente durch komplementäre Stärken der Partnerschaft."
    },
    {
      id: 5,
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      title: "Kultureller Austausch",
      description: "Gewinnen Sie wertvolle Einblicke in lokale Geschäftspraktiken und Kundenbedürfnisse verschiedener Märkte."
    },
    {
      id: 6,
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: "Risikominimierung",
      description: "Reduzieren Sie Markteintrittshürden und teilen Sie Geschäftsrisiken durch gemeinsame Investitionen und Engagement."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10 py-8 px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                  Starke Kooperationen
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Wir verbinden deutsche Hersteller mit internationalen Partnern für nachhaltige und erfolgreiche Geschäftsbeziehungen, die auf gemeinsamen Werten und Zielen basieren.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner finden <ArrowRight className="w-4 h-4 ml-1" />
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
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Handshake className="w-48 h-48 md:w-64 md:h-64 text-blue-400 opacity-90" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 py-8 px-6 md:px-12">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Langfristige Partnerschaften für gemeinsamen Erfolg
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              Erfolgreiche internationale Geschäftsbeziehungen basieren auf Vertrauen, Verständnis und gemeinsamen Zielen. Wir unterstützen deutsche Hersteller dabei, langfristige und fruchtbare Kooperationen mit internationalen Partnern aufzubauen und zu pflegen.
            </p>
            
            <p className="text-lg">
              Durch strategische Zusammenarbeit können Unternehmen ihre Stärken kombinieren, Ressourcen effizient nutzen und gemeinsam neue Märkte erschließen. Vom Technologieaustausch bis zur geteilten Marktexpertise – Kooperationen schaffen Mehrwert für alle Beteiligten.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
          Vorteile der Zusammenarbeit
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-medium text-xl text-white mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Cooperation Process Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 py-8 px-6 md:px-12">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
            Unser Kooperationsprozess
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                number: "01",
                title: "Partneridentifikation",
                description: "Wir analysieren Ihre Geschäftsziele und identifizieren potenzielle Partner, die Ihre Werte und Vision teilen."
              },
              {
                number: "02",
                title: "Kontaktanbahnung",
                description: "Wir stellen den ersten Kontakt her und unterstützen bei der effektiven Kommunikation Ihrer Wertangebote."
              },
              {
                number: "03",
                title: "Kooperationsdesign",
                description: "Gemeinsam entwickeln wir ein maßgeschneidertes Kooperationsmodell, das die Stärken beider Unternehmen optimal nutzt."
              },
              {
                number: "04",
                title: "Langfristige Betreuung",
                description: "Wir begleiten die Partnerschaft kontinuierlich und unterstützen bei der Weiterentwicklung der Zusammenarbeit."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-medium text-xl text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="w-full max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
          Bereit für neue Partnerschaften?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Entdecken Sie das Potenzial internationaler Kooperationen und erschließen Sie gemeinsam mit starken Partnern neue Geschäftsmöglichkeiten.
        </p>
        <motion.button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] inline-flex items-center"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
          whileTap={{ scale: 0.95 }}
        >
          Kontakt aufnehmen <ArrowRight className="w-4 h-4 ml-2" />
        </motion.button>
      </motion.section>
    </div>
  );
}