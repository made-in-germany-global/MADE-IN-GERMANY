import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Calendar, Phone, FileText, Image, Mic, Users, ArrowRight, ExternalLink } from 'lucide-react';

export default function PressMediaSection() {
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
      transition: { delay: 0.4 + i * 0.1, duration: 0.5 }
    })
  };

  // Mock press releases data
  const pressReleases = [
    {
      id: 1,
      title: "Deutsche Industrieprodukte expandieren in neue internationale Märkte",
      date: "28.04.2025",
      excerpt: "Unser Portal verzeichnet einen Anstieg von 42% bei internationalen Anfragen für deutsche Industrieprodukte..."
    },
    {
      id: 2,
      title: "Neue Nachhaltigkeitskriterien für gelistete Hersteller implementiert",
      date: "15.03.2025",
      excerpt: "Ab sofort müssen alle auf unserem Portal gelisteten Hersteller strengere Umwelt- und Sozialstandards erfüllen..."
    },
    {
      id: 3,
      title: "Digitalisierungsinitiative für mittelständische Industrieunternehmen",
      date: "02.02.2025",
      excerpt: "In Kooperation mit dem Bundesministerium für Wirtschaft starten wir ein neues Programm zur Digitalisierung..."
    }
  ];

  // Media resources
  const mediaResources = [
    {
      id: 1,
      title: "Unternehmenslogos",
      icon: <Image className="text-blue-400" size={24} />,
      description: "Hochauflösende Logos in verschiedenen Formaten (PNG, SVG, EPS)"
    },
    {
      id: 2,
      title: "Pressemappe",
      icon: <FileText className="text-blue-400" size={24} />,
      description: "Umfassendes Informationspaket mit Fakten, Geschichte und Kennzahlen"
    },
    {
      id: 3,
      title: "Bildmaterial",
      icon: <Image className="text-blue-400" size={24} />,
      description: "Produktbilder und Fotos von Messen und Veranstaltungen"
    },
    {
      id: 4,
      title: "Executive Bios",
      icon: <Users className="text-blue-400" size={24} />,
      description: "Profile und Fotos der Geschäftsführung und des Managementteams"
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black py-16 px-6 md:px-12 relative z-10">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Presse & Medien
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mb-8">
              Willkommen im Pressebereich des führenden Handelsportals für deutsche Industrieprodukte. Hier finden Sie die neuesten Informationen, Pressemitteilungen und Medienressourcen. Unser Ziel ist es, Journalisten und Medienvertretern alle notwendigen Materialien bereitzustellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Medienanfrage stellen
              </motion.button>
              <motion.button 
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Pressemappe herunterladen
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Media Contact Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0.2}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Medienkontakt
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="font-medium text-xl text-white mb-4">Presseanfragen</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-blue-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300">E-Mail</p>
                      <p className="text-gray-200 font-medium">info@made-in-germany.global</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-blue-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300">Telefon (Whatsapp Only)</p>
                      <p className="text-gray-200 font-medium">+49 15753703790</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-blue-400 mt-1" size={20} />
                    <div>
                      <p className="text-gray-300">Reaktionszeit</p>
                      <p className="text-gray-200">Wir bemühen uns, alle Presseanfragen innerhalb von 24 Stunden zu beantworten.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="font-medium text-xl text-white mb-4">Interviewanfragen</h3>
                <p className="text-gray-300 mb-4">
                  Experten aus unserem Unternehmen stehen für Interviews zu den Themen internationale Handelsbeziehungen, deutsche Industrieprodukte und digitale Transformation zur Verfügung.
                </p>
                <div className="flex items-start gap-3 mb-4">
                  <Mic className="text-blue-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300">Kontakt für Interviews</p>
                    <p className="text-gray-200 font-medium">interview@deutscheindustrie-portal.de</p>
                  </div>
                </div>
                <motion.button 
                  className="w-full border border-gray-600 bg-gray-800 text-gray-200 px-6 py-2 rounded-lg font-medium hover:bg-gray-700 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(107,114,128,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Interviewanfrage stellen
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Press Releases Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0.4}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Aktuelle Pressemitteilungen
              </h2>
              <motion.button 
                className="hidden md:flex border border-gray-600 bg-gray-800 text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-700 items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(107,114,128,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Alle Pressemitteilungen
                <ArrowRight size={16} />
              </motion.button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-blue-400" size={16} />
                    <p className="text-sm text-gray-400">{release.date}</p>
                  </div>
                  <h3 className="font-medium text-lg text-white mb-2">{release.title}</h3>
                  <p className="text-gray-300 mb-4">{release.excerpt}</p>
                  <motion.button 
                    className="flex items-center text-blue-400 font-medium gap-1 hover:text-blue-300"
                    whileHover={{ x: 5 }}
                  >
                    Weiterlesen <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              className="mt-6 w-full md:hidden border border-gray-600 bg-gray-800 text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-700 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, boxShadow: '0 0 10px rgba(107,114,128,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Alle Pressemitteilungen
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Media Resources Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0.6}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Medienressourcen
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mb-8">
              Die folgenden Materialien stehen Ihnen für Ihre Berichterstattung zur Verfügung. Für den Zugriff auf hochauflösende Bilder und Logos kontaktieren Sie bitte unser Presseteam.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="font-medium text-lg text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <motion.button 
                    className="flex items-center text-blue-400 font-medium gap-1 hover:text-blue-300"
                    whileHover={{ x: 5 }}
                  >
                    Anfordern <Download size={16} />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Company Background Section */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0.8}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Unternehmensprofil
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-xl text-white mb-4">Über das Deutsche Industrie-Portal</h3>
                <p className="text-gray-300 mb-4">
                  Das Deutsche Industrie-Portal ist die führende digitale Plattform für den internationalen Handel mit deutschen Industrieprodukten. Seit 2010 verbinden wir Hersteller aus Deutschland mit Käufern aus über 120 Ländern und fördern nachhaltigen, innovativen Handel.
                </p>
                <p className="text-gray-300 mb-4">
                  Mit mehr als 5.000 gelisteten Unternehmen und über 50.000 Produkten bieten wir einen umfassenden Marktplatz für Qualitätsprodukte "Made in Germany". Unsere Plattform unterstützt besonders den Mittelstand dabei, internationale Märkte zu erschließen.
                </p>
                <motion.button 
                  className="flex items-center text-blue-400 font-medium gap-1 hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Mehr über uns erfahren <ArrowRight size={16} />
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-4xl font-bold text-blue-400 mb-2">5.000+</p>
                  <p className="text-gray-300">Gelistete Unternehmen</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-4xl font-bold text-blue-400 mb-2">120+</p>
                  <p className="text-gray-300">Länder erreicht</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-4xl font-bold text-blue-400 mb-2">50.000+</p>
                  <p className="text-gray-300">Industrieprodukte</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-4xl font-bold text-blue-400 mb-2">2010</p>
                  <p className="text-gray-300">Seit über 15 Jahren</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={1.0}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                Bleiben Sie auf dem Laufenden
              </h2>
              <p className="text-lg text-gray-300">
                Abonnieren Sie unseren Presse-Newsletter für die neuesten Updates.
              </p>
            </div>
            
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 w-full md:w-auto"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Newsletter abonnieren
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}