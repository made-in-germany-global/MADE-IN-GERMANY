import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Scale, 
  AlertTriangle, 
  Flag, 
  Mail, 
  Info, 
  Phone, 
  Globe, 
  MapPin, 
  ExternalLink, 
  BookOpen, 
  X 
} from 'lucide-react';

// Define the props interface
interface LegalAndProtectionProps {
  language?: string;
}

const LegalAndProtection: React.FC<LegalAndProtectionProps> = ({ language = 'de' }) => {
  const [reportModalOpen, setReportModalOpen] = useState(false);

  // Translations
  const t = {
    heroTitle: "Rechtliche Grundlagen & Schutz",
    heroDescription: "Bei Made in Germany sind wir bestrebt, eine rechtlich einwandfreie und sichere Geschäftsumgebung für alle unsere Nutzer zu schaffen – Hersteller, Distributoren und Käufer weltweit.",
    section1Title: "Schutzmaßnahmen",
    section1SubTitle: "Sicherheit und Vertrauen für alle",
    section1Description: "Unsere Plattform bietet umfassenden Schutz für Käufer und Verkäufer durch klare vertragliche Rahmenbedingungen, strenge Datensicherheitsmaßnahmen, vollständige rechtliche Compliance und robuste Anti-Betrugsmechanismen. Jede Transaktion ist durch transparente Bedingungen abgesichert, Benutzerdaten werden auf verschlüsselten Servern in der Schweiz gespeichert, und wir entsprechen allen relevanten Gesetzen, einschließlich DSGVO. Betrug, Fälschungen und Missbrauch werden aktiv überwacht und sofort geahndet.",
    section2Title: "Meldung und Durchsetzung",
    section2SubTitle: "Null Toleranz für Verstöße",
    section2Description: "Wir nehmen Verstöße gegen unsere Nutzungsbedingungen, Gesetze oder geistige Eigentumsrechte ernst. Unser Team überwacht aktiv gefälschte Produkte und betrügerische Aktivitäten, entfernt diese umgehend und verhängt rechtliche Konsequenzen. Benutzer können verdächtiges Verhalten vertraulich melden, und unser Rechtsteam prüft jeden Fall sorgfältig, um die Integrität der Plattform zu gewährleisten.",
    section3Title: "Unser Rechtspartner",
    section3SubTitle: "Kanzlei Bernd Fiessler",
    section3Description: "Für alle rechtlichen Angelegenheiten arbeiten wir eng mit der Kanzlei Bernd Fiessler zusammen, die auf internationales Handelsrecht und E-Commerce spezialisiert ist. Die Kanzlei unterstützt uns bei der Sicherstellung unserer Compliance und berät bei der Beilegung von rechtlichen Streitigkeiten.",
    section4Title: "Haftungsausschluss",
    section4SubTitle: "Rechtliche Orientierung",
    section4Description: "Obwohl wir keine formelle Rechtsberatung anbieten, unterstützen wir unsere Nutzer mit zuverlässigen rechtlichen Rahmenbedingungen und bieten Orientierungshilfe im operativen Rahmen unserer Plattform. Bei komplexen Rechtsstreitigkeiten oder länderspezifischen Vorschriften empfehlen wir, einen qualifizierten Anwalt zu konsultieren.",
    protectionCard1Title: "Käufer- und Verkäuferschutz",
    protectionCard1Description: "Unsere Prozesse schützen sowohl Käufer als auch Verkäufer. Jede Transaktion ist durch klare Bedingungen und vertragliche Rahmenbedingungen abgesichert.",
    protectionCard2Title: "Datensicherheit",
    protectionCard2Description: "Alle Benutzerdaten werden sicher auf verschlüsselten Servern gespeichert, die hauptsächlich in der Schweiz gehostet werden, bekannt für ihre strengen Datenschutzgesetze.",
    protectionCard3Title: "Rechtliche Compliance",
    protectionCard3Description: "Alle über unsere Plattform durchgeführten Aktivitäten entsprechen den geltenden nationalen und internationalen Gesetzen, einschließlich DSGVO und Handelsstandards.",
    protectionCard4Title: "Anti-Betrug und Durchsetzung",
    protectionCard4Description: "Wir nehmen Betrug, Missbrauch, Fälschungen und Verletzungen des geistigen Eigentums ernst und ergreifen sofortige Maßnahmen.",
    reportModalTitle: "Verstoß oder Missbrauch melden",
    reportModalDescription: "Wenn Sie vermuten, dass ein Nutzer, ein Produkt oder eine Dienstleistung gegen unsere Nutzungsbedingungen, Gesetze oder Rechte verstößt, können Sie dies hier vertraulich melden. Unser Team wird den Fall umgehend prüfen.",
    reportModalButton: "Meldung absenden",
    reportModalCancel: "Abbrechen"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1
      }
    })
  };

  // Protection cards data
  const protectionCards = [
    {
      title: t.protectionCard1Title,
      description: t.protectionCard1Description,
      icon: <Shield size={28} />,
      bgClass: "bg-blue-900"
    },
    {
      title: t.protectionCard2Title,
      description: t.protectionCard2Description,
      icon: <Lock size={28} />,
      bgClass: "bg-purple-900"
    },
    {
      title: t.protectionCard3Title,
      description: t.protectionCard3Description,
      icon: <Scale size={28} />,
      bgClass: "bg-green-900"
    },
    {
      title: t.protectionCard4Title,
      description: t.protectionCard4Description,
      icon: <AlertTriangle size={28} />,
      bgClass: "bg-yellow-900"
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Report Modal */}
      {reportModalOpen && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-6">
              <motion.h2 
                className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t.reportModalTitle}
              </motion.h2>
              <button 
                onClick={() => setReportModalOpen(false)}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.reportModalDescription}
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="reportType">Art des Verstoßes</label>
                <select 
                  id="reportType"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="counterfeit">Produktfälschung</option>
                  <option value="fraud">Betrug/Täuschung</option>
                  <option value="ip">Verletzung geistigen Eigentums</option>
                  <option value="misrepresentation">Falschdarstellung</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="reportDescription">Beschreibung</label>
                <textarea 
                  id="reportDescription"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-32"
                  placeholder="Bitte beschreiben Sie den Verstoß so detailliert wie möglich..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="reportContact">Ihre Kontaktdaten (optional)</label>
                <input 
                  type="email"
                  id="reportContact"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@beispiel.de"
                />
              </div>
            </motion.div>
            
            <motion.div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center w-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Mail size={20} className="mr-1" />
                {t.reportModalButton}
              </motion.button>
              
              <motion.button
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium flex items-center justify-center w-full shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setReportModalOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {t.reportModalCancel}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section 
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 whitespace-pre-line"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t.heroDescription}
          </motion.p>
        </div>
      </motion.section>

      {/* Schutzmaßnahmen Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center">
                <Shield className="mr-3 text-blue-400" size={28} /> {t.section1Title}
              </h2>
              <h3 className="font-medium text-lg text-white mb-4">{t.section1SubTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{t.section1Description}</p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {protectionCards.map((card, idx) => (
                  <motion.div 
                    key={idx}
                    className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:bg-gray-800"
                    variants={cardVariants}
                    custom={idx}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  >
                    <div className={`w-10 h-10 ${card.bgClass} rounded-full flex items-center justify-center mb-3`}>
                      {card.icon}
                    </div>
                    <h4 className="font-medium text-white">{card.title}</h4>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Meldung und Durchsetzung Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center">
                <Flag className="mr-3 text-blue-400" size={28} /> {t.section2Title}
              </h2>
              <h3 className="font-medium text-lg text-white mb-4">{t.section2SubTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{t.section2Description}</p>
              <motion.button
                className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setReportModalOpen(true)}
              >
                <Flag size={20} className="mr-1" />
                Verstoß melden
              </motion.button>
            </div>
            <div className="md:w-1/2 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-900/50 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle size={20} className="text-purple-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-400">Schlüsselmaßnahme</span>
                  <h4 className="font-medium text-white">Sofortige Durchsetzung</h4>
                </div>
              </div>
              <p className="text-sm text-gray-300 italic border-l-4 border-purple-500 pl-4">
                "Jeder Versuch, Teilnehmer zu täuschen, führt zu sofortiger Suspendierung und rechtlichen Konsequenzen."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Unser Rechtspartner Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/3">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 overflow-hidden">
                <img 
                  src="/made-in-germany-bernd-fiessler.jpg" 
                  alt="Rechtsanwalt Bernd Fiessler" 
                  className="w-full h-auto rounded object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center">
                <Scale className="mr-3 text-blue-400" size={28} /> {t.section3Title}
              </h2>
              <h3 className="font-medium text-lg text-white mb-4">{t.section3SubTitle}</h3>
              <p className="text-gray-300 leading-relaxed">{t.section3Description}</p>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300">Langener Landstr. 171</p>
                      <p className="text-gray-300">27580 Bremerhaven - Lehe</p>
                      <p className="text-gray-300">Germany</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="text-green-400">
                        <Phone size={20} />
                      </div>
                      <a href="tel:+4947198125024" className="text-gray-300 hover:text-green-400 transition-colors">
                        +49 471/9812502
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-400">
                        <Phone size={20} />
                      </div>
                      <a href="tel:+494745931393" className="text-gray-300 hover:text-green-400 transition-colors">
                        +49 4745/931393
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-400">
                        <BookOpen size={20} />
                      </div>
                      <span className="text-gray-300">0471/9812541</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-400">
                        <Mail size={20} />
                      </div>
                      <a href="mailto:info@fiessler-rechtsanwaelte.de" className="text-gray-300 hover:text-green-400 transition-colors">
                        info@fiessler-rechtsanwaelte.de
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-400">
                        <Globe size={20} />
                      </div>
                      <a href="http://www.fiessler-rechtsanwaelte.de" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-1">
                        www.fiessler-rechtsanwaelte.de
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Haftungsausschluss Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center justify-center">
            <Info className="mr-3 text-blue-400" size={28} /> {t.section4Title}
          </h2>
          <h3 className="text-xl font-semibold text-white mb-4">{t.section4SubTitle}</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">{t.section4Description}</p>
        </div>
      </motion.section>
    </div>
  );
};

export default LegalAndProtection;