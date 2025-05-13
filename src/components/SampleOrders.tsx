import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, FileText, MessageCircle, ChevronRight, Check, Info } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

export default function SampleOrderSection() {
  const [showModal, setShowModal] = useState(false);

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

  const benefitsList = [
    {
      id: 1,
      icon: <Package />,
      title: "Produktqualität prüfen",
      description: "Erleben Sie unsere Qualitätsstandards hautnah durch physische Produktmuster."
    },
    {
      id: 2,
      icon: <Truck />,
      title: "Lieferprozess testen",
      description: "Bewerten Sie unseren gesamten Logistik- und Lieferprozess unter realen Bedingungen."
    },
    {
      id: 3,
      icon: <FileText />,
      title: "Dokumentation überprüfen",
      description: "Erhalten Sie Einblick in unsere vollständige Produktdokumentation und technische Unterlagen."
    },
    {
      id: 4,
      icon: <MessageCircle />,
      title: "Feedback geben",
      description: "Teilen Sie Ihre Erfahrungen mit uns, um unseren Service kontinuierlich zu verbessern."
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Muster auswählen",
      description: "Wählen Sie aus unserem Katalog oder geben Sie spezifische Anforderungen an."
    },
    {
      id: 2,
      title: "Anfrage stellen",
      description: "Füllen Sie das Anfrageformular mit Ihren Kontakt- und Lieferdaten aus."
    },
    {
      id: 3,
      title: "Kostenübersicht erhalten",
      description: "Erhalten Sie eine transparente Aufstellung aller Kosten vor der Bestellung."
    },
    {
      id: 4,
      title: "Muster erhalten",
      description: "Erwarten Sie Ihre Muster innerhalb von 7-14 Werktagen mit Tracking-Informationen."
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
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 py-8 px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Musterbestellung
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Überzeugen Sie sich selbst von unserer Qualität und Service, bevor Sie eine größere Bestellung aufgeben. 
              Unsere Musterbestellungen ermöglichen es Ihnen, unsere Produkte und Prozesse risikofrei zu testen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
              >
                Muster bestellen <ChevronRight size={18} />
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
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Vorteile von Musterbestellungen
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Musterbestellungen bieten Ihnen die Möglichkeit, unsere Produkte und Serviceleistungen 
            vor einer größeren Investition zu bewerten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4 text-blue-400">
                {benefit.icon}
              </div>
              <h3 className="font-medium text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 py-8 px-6 md:px-12">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 text-center">
              So funktioniert der Bestellprozess
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  className="flex gap-4 items-start"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Details Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Costs Information */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden relative"
            variants={cardVariants}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 py-8 px-6 md:px-12">
              <h3 className="font-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                Kostenübersicht
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Musterkosten abhängig von Produkttyp und Menge</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Transparente Versandkosten basierend auf Gewicht und Zielort</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Vollständige Kostenaufstellung vor Bestellabschluss</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Mögliche Anrechnung der Musterkosten bei Folgebestellungen</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-blue-900/30 p-4 rounded-lg border border-blue-800">
                <div className="flex items-start gap-2">
                  <Info className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <p className="text-gray-300 text-sm">
                    Bei größeren Mengen oder speziellen Anforderungen erstellen wir Ihnen gerne ein 
                    individuelles Angebot. Kontaktieren Sie uns für Details.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Shipping Information */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden relative"
            variants={cardVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 py-8 px-6 md:px-12">
              <h3 className="font-medium text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                Versanddetails
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Standardlieferzeit für Muster: 7-14 Werktage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Express-Option für dringende Anfragen verfügbar</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Sendungsverfolgung für alle Musterbestellungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-300">Weltweiter Versand in über 80 Länder</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-green-900/30 p-4 rounded-lg border border-green-800">
                <div className="flex items-start gap-2">
                  <Info className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <p className="text-gray-300 text-sm">
                    Alle Sendungen werden sorgfältig verpackt und versichert. Bei speziellen 
                    Versandanforderungen stehen wir Ihnen gerne zur Verfügung.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feedback Section */}
      <motion.section 
        className="w-full max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 py-8 px-6 md:px-12 text-center">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Ihre Meinung zählt
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Nach Erhalt Ihrer Muster möchten wir von Ihren Erfahrungen hören. Ihre Rückmeldung hilft uns, 
              unsere Produkte und Dienstleistungen kontinuierlich zu verbessern.
            </p>
            
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
            >
              Muster bestellen
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Onboarding Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} />
          
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Musterbestellung starten
            </h2>
            
            <p className="text-gray-300 mb-6">
              Füllen Sie das untenstehende Formular aus, um Ihre Musterbestellung zu beginnen. 
              Unser Team wird sich innerhalb eines Werktages mit Ihnen in Verbindung setzen.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="company">Unternehmen</label>
                <input 
                  type="text" 
                  id="company"
                  className="bg-gray-800 border border-gray-700 rounded-lg p-2 w-full text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Ihre Firma GmbH"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="bg-gray-800 border border-gray-700 rounded-lg p-2 w-full text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Max Mustermann"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="email">E-Mail</label>
                <input 
                  type="email" 
                  id="email"
                  className="bg-gray-800 border border-gray-700 rounded-lg p-2 w-full text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="product">Produktinteresse</label>
                <select 
                  id="product"
                  className="bg-gray-800 border border-gray-700 rounded-lg p-2 w-full text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Bitte wählen Sie</option>
                  <option value="product1">Produktkategorie 1</option>
                  <option value="product2">Produktkategorie 2</option>
                  <option value="product3">Produktkategorie 3</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="message">Nachricht</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-2 w-full text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Beschreiben Sie Ihre spezifischen Anforderungen..."
                />
              </div>
              
              <div className="flex items-start gap-2 pt-2">
                <input 
                  type="checkbox" 
                  id="privacy"
                  className="mt-1"
                />
                <label className="text-gray-400 text-sm" htmlFor="privacy">
                  Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                </label>
              </div>
              
              <div className="flex justify-end gap-4 pt-4">
                <motion.button
                  type="button"
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-2 rounded-lg font-medium hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                >
                  Abbrechen
                </motion.button>
                
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Anfrage senden
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Tooltip */}
      <Tooltip id="info-tooltip" />
    </div>
  );
}