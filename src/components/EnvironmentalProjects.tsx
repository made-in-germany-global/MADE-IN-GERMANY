import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Wind, Droplets, Shield, Globe } from 'lucide-react';

export default function EnvironmentalProjects() {
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

  // Environmental projects data
  const projects = [
    {
      id: 1,
      icon: <Recycle size={24} />,
      title: "Recycling-Initiativen",
      description: "Unsere umfassenden Recycling-Programme reduzieren Abfall und fördern die Kreislaufwirtschaft durch innovative Verfahren zur Materialrückgewinnung."
    },
    {
      id: 2,
      icon: <Wind size={24} />,
      title: "Erneuerbare Energien",
      description: "Wir investieren in Wind-, Solar- und Wasserkraftprojekte, um unseren Betrieb mit 100% erneuerbarer Energie zu versorgen."
    },
    {
      id: 3,
      icon: <Droplets size={24} />,
      title: "Wasserschutz",
      description: "Unsere Wasserschutzinitiativen reduzieren den Verbrauch und reinigen Abwasser, um lokale Wasserressourcen zu schützen."
    },
    {
      id: 4,
      icon: <Shield size={24} />,
      title: "Biodiversität",
      description: "Wir engagieren uns für den Schutz der lokalen Ökosysteme durch Wiederaufforstung und gezielte Renaturierungsprojekte."
    }
  ];

  // Metrics data
  const metrics = [
    {
      id: 1,
      value: "72%",
      label: "CO₂-Reduktion",
      color: "bg-blue-900"
    },
    {
      id: 2,
      value: "85%",
      label: "Recycling-Quote",
      color: "bg-green-900"
    },
    {
      id: 3,
      value: "46%",
      label: "Weniger Wasserverbrauch",
      color: "bg-red-900"
    },
    {
      id: 4,
      value: "12+",
      label: "Umweltprojekte",
      color: "bg-yellow-900"
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="bg-gradient-to-br from-gray-900 to-black py-8 px-6 md:px-12 relative z-10">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
            
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="font-medium text-xl text-gray-300">Unsere Mission</h3>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                Umweltprojekte
              </h1>

              <p className="text-lg text-gray-300 mb-8">
                Entdecken Sie unsere nachhaltigen Umweltprojekte, die den ökologischen Fußabdruck minimieren und die Umwelt schützen. Als führende deutsche B2B-Plattform für nachhaltige Produkte setzen wir neue Maßstäbe für Umweltverantwortung in der globalen Geschäftswelt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe size={20} />
                  Mehr erfahren
                </motion.button>
                <motion.button 
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Partner werden
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Environmental Commitment Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unser Umweltengagement
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Nachhaltigkeit ist mehr als ein Schlagwort – es ist ein zentraler Bestandteil unserer Unternehmenswerte. Unsere Umweltprojekte spiegeln unser tiefes Engagement wider, positive Veränderungen für den Planeten zu bewirken und gleichzeitig innovative Lösungen für unsere Partner zu entwickeln.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric) => (
                <motion.div 
                  key={metric.id}
                  className={`${metric.color} rounded-lg p-6 text-center`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={metric.id - 1}
                >
                  <h3 className="text-3xl font-extrabold text-white mb-2">{metric.value}</h3>
                  <p className="text-sm text-gray-300">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-base text-gray-400">
              Unsere Umweltinitiativen haben seit 2020 messbare Ergebnisse erzielt. Wir arbeiten kontinuierlich an der Verbesserung dieser Kennzahlen durch neue Technologien und strategische Partnerschaften.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unsere Hauptinitiativen
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Wir fokussieren unsere Anstrengungen auf vier Schlüsselbereiche, die den größten Einfluss auf unsere Umwelt haben. Durch gezielte Maßnahmen in diesen Bereichen schaffen wir nachhaltige Veränderungen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {project.icon}
                  </div>
                  <h3 className="font-medium text-xl text-gray-200 mb-3">{project.title}</h3>
                  <p className="text-base text-gray-400">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Detailed Description Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Globale Umweltverantwortung
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-xl text-gray-300 mb-4">Lokale Maßnahmen, globale Wirkung</h3>
                <p className="text-base text-gray-400 mb-6">
                  Unsere Umweltinitiativen beginnen lokal an unseren Standorten in Deutschland, entfalten aber eine globale Wirkung durch unsere internationale Lieferkette und Partnerschaft mit Umweltorganisationen weltweit.
                </p>
                <p className="text-base text-gray-400 mb-6">
                  Durch die Integration nachhaltiger Praktiken in jeden Aspekt unseres Geschäftsmodells – von der Produktentwicklung bis zur Lieferung – setzen wir neue Standards für umweltbewusstes Unternehmertum in der B2B-Welt.
                </p>
                <p className="text-base text-gray-400">
                  Alle unsere Partner profitieren von unserem Umweltengagement durch reduzierte Betriebskosten, verbesserte Markenreputation und Zugang zu einem wachsenden Markt umweltbewusster Kunden.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-xl text-gray-300 mb-4">Zukunftsorientierte Strategien</h3>
                <p className="text-base text-gray-400 mb-6">
                  Wir setzen nicht nur auf bewährte Umweltschutzmaßnahmen, sondern investieren kontinuierlich in die Erforschung und Entwicklung neuer Technologien zur weiteren Reduzierung unseres ökologischen Fußabdrucks.
                </p>
                <p className="text-base text-gray-400 mb-6">
                  Unsere Experten arbeiten eng mit führenden Forschungseinrichtungen zusammen, um innovative Lösungen für die drängendsten Umweltprobleme unserer Zeit zu finden und zu implementieren.
                </p>
                <p className="text-base text-gray-400">
                  Durch regelmäßige Umweltaudits und transparente Berichterstattung stellen wir sicher, dass wir unsere ambitionierten Nachhaltigkeitsziele erreichen und kontinuierlich verbessern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Werden Sie Teil unserer Umweltmission
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Gemeinsam können wir einen positiven Einfluss auf unseren Planeten ausüben. Entdecken Sie, wie Ihre Organisation von unseren Umweltinitiativen profitieren und gleichzeitig zur Nachhaltigkeit beitragen kann.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Kontakt aufnehmen
              </motion.button>
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Broschüre herunterladen
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}