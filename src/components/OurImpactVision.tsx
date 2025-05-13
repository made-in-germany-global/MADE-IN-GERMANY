import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Leaf, Users, TrendingUp, Award, ShieldCheck } from 'lucide-react';

export default function ImpactVision() {
  const [showModal, setShowModal] = useState(false);
  
  const impactCards = [
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Globale Reichweite",
      description: "Wir verbinden deutsche Qualitätsprodukte mit internationalen Märkten und fördern nachhaltigen Handel über Grenzen hinweg."
    },
    {
      icon: <Leaf className="w-8 h-8 text-blue-400" />,
      title: "Ökologische Verantwortung",
      description: "Unsere Plattform priorisiert umweltfreundliche Produkte und unterstützt Unternehmen bei der Reduzierung ihres ökologischen Fußabdrucks."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Soziale Wertschöpfung",
      description: "Wir fördern faire Arbeitsbedingungen und soziale Projekte, die die Lebensqualität in den Produktionsgemeinschaften verbessern."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Nachhaltige Innovation",
      description: "Durch die Förderung innovativer Lösungen treiben wir die Entwicklung zukunftsfähiger Produkte und Prozesse voran."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "Qualitätsstandards",
      description: "Wir setzen Maßstäbe für Exzellenz und Nachhaltigkeit und heben die besten deutschen Herstellerpraktiken hervor."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
      title: "Transparente Lieferketten",
      description: "Unsere Plattform fördert Transparenz vom Hersteller bis zum Endkunden und stärkt verantwortungsvolle Beschaffungspraktiken."
    }
  ];

  const metrics = [
    { title: "Reduzierte CO₂-Emissionen", value: "48%", bg: "bg-green-900" },
    { title: "Nachhaltige Partner", value: "320+", bg: "bg-blue-900" },
    { title: "Recycelte Materialien", value: "75%", bg: "bg-purple-900" },
    { title: "Wasser eingespart", value: "12M L", bg: "bg-yellow-900" }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative z-10 w-full max-w-7xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black py-12 px-6 md:px-12 lg:py-20 relative z-10">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unsere Vision für nachhaltige Wirkung
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Wir verbinden deutsche Qualität mit globaler Verantwortung und gestalten eine Zukunft, in der wirtschaftlicher Erfolg und ökologische Nachhaltigkeit Hand in Hand gehen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
              >
                Mehr erfahren
              </motion.button>
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Kontakt aufnehmen
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vision Statement */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unsere Vision für Nachhaltigkeit
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Als führende B2B-Plattform für deutsche Produkte setzen wir uns für eine Wirtschaft ein, die sowohl Menschen als auch den Planeten respektiert. Wir glauben an die Kraft deutscher Ingenieurskunst und Qualität, um globale Herausforderungen zu meistern und eine nachhaltigere Zukunft zu gestalten.
            </p>
            <p className="text-lg text-gray-300">
              Unsere Vision ist es, eine Brücke zwischen innovativen deutschen Herstellern und internationalen Partnern zu schlagen, die gemeinsam an nachhaltigen Lösungen arbeiten. Durch die Förderung umweltfreundlicher Praktiken, fairer Arbeitsbedingungen und transparenter Lieferketten treiben wir positive Veränderungen in der globalen Wirtschaftslandschaft voran.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Impact Metrics */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
          Unsere Nachhaltigkeitsbilanz
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`${metric.bg} rounded-lg p-6 text-center shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
              <p className="text-gray-200 font-medium">{metric.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Areas */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
          Unsere Wirkungsbereiche
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-medium text-xl text-white mb-3">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Commitment Statement */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unser Bekenntnis zur Verantwortung
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Wir verpflichten uns, als verantwortungsbewusster Akteur auf dem internationalen Markt zu handeln. Unsere Strategie ist darauf ausgerichtet, nicht nur wirtschaftlichen Erfolg zu erzielen, sondern auch einen positiven Beitrag zur globalen Gesellschaft zu leisten.
            </p>
            <p className="text-lg text-gray-300">
              Durch die Förderung nachhaltiger Produkte und Projekte übernehmen wir sowohl wirtschaftliche als auch ökologische Verantwortung. Unser Ziel ist es, die Lebensqualität zu verbessern und gleichzeitig unseren Planeten zu schützen – heute und für kommende Generationen.
            </p>
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
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} />
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Unsere Nachhaltigkeitsmission
            </h3>
            <p className="text-gray-300 mb-4">
              Erfahren Sie mehr über unsere Bemühungen, eine nachhaltigere Zukunft zu gestalten. Wir verbinden deutsche Ingenieurskunst mit globaler Verantwortung.
            </p>
            <p className="text-gray-300 mb-6">
              Unsere Plattform unterstützt deutsche Hersteller dabei, ihre nachhaltigen Produkte einem weltweiten Publikum zugänglich zu machen und trägt so zu einer positiven Veränderung bei.
            </p>
            <div className="flex justify-end">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(false)}
              >
                Verstanden
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}