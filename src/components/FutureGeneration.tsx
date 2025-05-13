import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, GraduationCap, Heart, Globe, ArrowRight, ChevronRight } from 'lucide-react';

// Future Generation Section Component
export default function FutureGeneration() {
  const [activeTab, setActiveTab] = useState('initiatives');

  // Animation variants
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
      transition: { delay: 0.4 + i * 0.1 }
    })
  };

  // Cards data
  const initiativeCards = [
    {
      icon: <Lightbulb size={24} />,
      title: "Bildungsinitiativen",
      description: "Wir unterstützen Schulen und Universitäten mit modernen Lernmaterialien und Technologien für eine zukunftsorientierte Ausbildung.",
      color: "bg-blue-900/50"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Ausbildungsprogramme",
      description: "Unser duales Ausbildungssystem fördert junge Talente und vermittelt praktische Fähigkeiten für die Industrie von morgen.",
      color: "bg-green-900/50"
    },
    {
      icon: <Heart size={24} />,
      title: "Soziale Verantwortung",
      description: "Wir engagieren uns für soziale Gerechtigkeit und gleiche Bildungschancen für alle Kinder und Jugendlichen.",
      color: "bg-red-900/50"
    },
    {
      icon: <Globe size={24} />,
      title: "Globale Partnerschaften",
      description: "Durch internationale Kooperationen fördern wir den kulturellen Austausch und globale Lösungsansätze.",
      color: "bg-yellow-900/50"
    }
  ];

  const projectCards = [
    {
      number: "01",
      title: "Green Technology Lab",
      description: "Ein Innovationslabor für Studierende zur Entwicklung nachhaltiger Technologien und Lösungen.",
      color: "bg-blue-900"
    },
    {
      number: "02",
      title: "Digital Skills Academy",
      description: "Digitale Kompetenzförderung für Jugendliche aus benachteiligten Regionen.",
      color: "bg-green-900"
    },
    {
      number: "03",
      title: "Sustainable Design Challenge",
      description: "Jährlicher Wettbewerb für innovative, umweltfreundliche Produktdesigns.",
      color: "bg-red-900"
    },
    {
      number: "04",
      title: "Future Leaders Program",
      description: "Mentoring-Programm für junge Führungskräfte mit Fokus auf nachhaltige Unternehmensführung.",
      color: "bg-yellow-900"
    }
  ];

  // Common background and grid style
  const sectionStyle = "relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden";
  const gridOverlay = (
    <div 
      className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
    />
  );

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <motion.section 
        className={`relative w-full max-w-7xl mx-auto overflow-hidden ${sectionStyle}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {gridOverlay}
        <div className="relative z-10 py-8 px-6 md:px-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Future Generation
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Wir übernehmen Verantwortung für kommende Generationen durch nachhaltige Produkte, Dienstleistungen und Bildungsinitiativen. Gemeinsam gestalten wir eine bessere Zukunft, in der Innovation und Nachhaltigkeit Hand in Hand gehen.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Mehr erfahren <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                className="flex items-center justify-center gap-1 border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Kontakt aufnehmen <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className={`w-full max-w-7xl mx-auto ${sectionStyle}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {gridOverlay}
        <div className="relative z-10 py-8 px-6 md:px-12">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Unsere Zukunftsinitiativen
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Als führendes deutsches Unternehmen sind wir bestrebt, die nächste Generation zu unterstützen und eine nachhaltige Zukunft zu gestalten. Entdecken Sie unsere vielfältigen Programme und Initiativen.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            variants={itemVariants}
          >
            <button 
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'initiatives' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('initiatives')}
            >
              Bildungsinitiativen
            </button>
            <button 
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'projects' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
              onClick={() => setActiveTab('projects')}
            >
              Zukunftsprojekte
            </button>
          </motion.div>

          {/* Initiatives Grid */}
          {activeTab === 'initiatives' && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {initiativeCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  custom={index}
                  variants={cardVariants}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className="font-medium text-xl mb-2 text-gray-200">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Projects Grid */}
          {activeTab === 'projects' && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {projectCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  custom={index}
                  variants={cardVariants}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className={`flex items-center justify-center w-8 h-8 ${card.color} rounded-full mb-4 text-white text-sm font-bold`}>
                    {card.number}
                  </div>
                  <h3 className="font-medium text-xl mb-2 text-gray-200">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section 
        className={`w-full max-w-7xl mx-auto ${sectionStyle}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {gridOverlay}
        <div className="relative z-10 py-8 px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                Verantwortung für die Zukunft
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Unsere Verantwortung erstreckt sich weit über die Gegenwart hinaus. Wir entwickeln nachhaltige Produkte und Dienstleistungen, die eine bessere Zukunft für junge Menschen und kommende Generationen sichern.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Durch unsere Bildungsinitiativen, Ausbildungsprogramme und strategischen Partnerschaften fördern wir Innovation und nachhaltige Entwicklung. Wir investieren in die Fähigkeiten und das Wissen junger Menschen, um sie auf die Herausforderungen von morgen vorzubereiten.
              </p>
              <p className="text-lg text-gray-300">
                Das deutsche Qualitätsversprechen bedeutet für uns nicht nur erstklassige Produkte heute, sondern auch Verantwortung für die Welt von morgen.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="bg-blue-900/30 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-white mb-2">87%</div>
                <p className="text-gray-300">Nachhaltige Materialien</p>
              </div>
              <div className="bg-green-900/30 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <p className="text-gray-300">Geförderte Studierende</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <p className="text-gray-300">Forschungsprojekte</p>
              </div>
              <div className="bg-red-900/30 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-white mb-2">35%</div>
                <p className="text-gray-300">CO₂-Reduzierung</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.section 
        className={`w-full max-w-7xl mx-auto ${sectionStyle}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {gridOverlay}
        <div className="relative z-10 py-8 px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Gestalten Sie mit uns die Zukunft
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Werden Sie Teil unserer Mission für eine nachhaltige Zukunft. Ob als Partner, Investor oder Mitarbeiter – gemeinsam können wir etwas bewegen.
            </p>
            <motion.button 
              className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] mx-auto"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt mitmachen <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}