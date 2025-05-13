import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Globe, ShoppingCart, Truck, BarChart, Languages, Shield, Mail } from "lucide-react";

export default function BecomePartnerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: <Globe className="text-blue-400" size={24} />,
      title: "Weltweite Reichweite",
      description: "Erschließen Sie globale Märkte und erreichen Sie internationale Kunden, die speziell nach deutschen Qualitätsprodukten suchen."
    },
    {
      icon: <ShoppingCart className="text-blue-400" size={24} />,
      title: "Zentrale Auftragsabwicklung",
      description: "Profitieren Sie von unserer effizienten Plattform zur Verwaltung aller Bestellungen und Kundenanfragen an einem Ort."
    },
    {
      icon: <Truck className="text-blue-400" size={24} />,
      title: "Logistischer Support",
      description: "Unser Expertenteam unterstützt Sie bei allen Aspekten der internationalen Logistik und Lieferkette."
    },
    {
      icon: <BarChart className="text-blue-400" size={24} />,
      title: "Internationale Vermarktung",
      description: "Nutzen Sie unsere gezielten Marketingkampagnen, um Ihre Produkte auf internationalen Märkten zu bewerben."
    },
    {
      icon: <Languages className="text-blue-400" size={24} />,
      title: "Mehrsprachiger Service",
      description: "Ihre Produkte werden in mehreren Sprachen präsentiert, um Sprachbarrieren zu überwinden und lokale Märkte zu erschließen."
    },
    {
      icon: <Shield className="text-blue-400" size={24} />,
      title: "Made in Germany Qualitätssiegel",
      description: "Profitieren Sie vom weltweiten Vertrauen in deutsche Qualität und Ingenieurskunst durch unser Qualitätssiegel."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Kontakt aufnehmen",
      description: "Füllen Sie das Anmeldeformular aus oder kontaktieren Sie unser Partnermanagement-Team direkt."
    },
    {
      number: 2,
      title: "Onboarding-Gespräch",
      description: "In einem persönlichen Gespräch analysieren wir gemeinsam Ihre Bedürfnisse und Ziele."
    },
    {
      number: 3,
      title: "Produktkatalog einrichten",
      description: "Unser Team unterstützt Sie beim Einrichten Ihres digitalen Produktkatalogs mit allen wichtigen Informationen."
    },
    {
      number: 4,
      title: "Go-Live & Support",
      description: "Nach der Freischaltung steht Ihnen unser Support-Team jederzeit zur Verfügung."
    }
  ];

  const metrics = [
    { label: "Internationale Kunden", value: "100+", color: "bg-blue-900" },
    { label: "Deutsche Partner", value: "250+", color: "bg-green-900" },
    { label: "Exportländer", value: "45+", color: "bg-red-900" },
    { label: "Umsatzsteigerung", value: "35%", color: "bg-yellow-900" }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-white font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black w-full h-full absolute inset-0 z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 py-16 px-6 md:px-12 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Werden Sie Partner der führenden „Made in Germany" Plattform
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Erschließen Sie neue internationale Märkte und profitieren Sie vom weltweiten Vertrauen in deutsche Qualitätsprodukte. Unsere B2B-Plattform verbindet führende deutsche Hersteller mit Käufern aus aller Welt.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              <Mail size={20} />
              Jetzt Partner werden
            </motion.button>
            
            <motion.button
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr erfahren
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="relative w-full max-w-7xl mx-auto py-8 px-6 md:px-12 rounded-2xl shadow-2xl ring-1 ring-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black w-full h-full absolute inset-0 z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">Ihre Vorteile als Partner</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
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
        </div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section
        className="relative w-full max-w-7xl mx-auto py-8 px-6 md:px-12 rounded-2xl shadow-2xl ring-1 ring-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black w-full h-full absolute inset-0 z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">Unsere Erfolge in Zahlen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className={`${metric.color} p-6 rounded-lg text-center`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <p className="text-4xl font-extrabold text-white mb-2">{metric.value}</p>
                <p className="text-gray-200">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="relative w-full max-w-7xl mx-auto py-8 px-6 md:px-12 rounded-2xl shadow-2xl ring-1 ring-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black w-full h-full absolute inset-0 z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">So werden Sie Partner</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="font-medium text-xl text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="relative w-full max-w-7xl mx-auto py-8 px-6 md:px-12 rounded-2xl shadow-2xl ring-1 ring-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="bg-gradient-to-br from-gray-900 to-black w-full h-full absolute inset-0 z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">Bereit, Ihr Geschäft international zu skalieren?</h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Treten Sie unserem exklusiven Netzwerk deutscher Qualitätshersteller bei und erschließen Sie neue Märkte weltweit. Unser Expertenteam steht Ihnen bei jedem Schritt zur Seite.
          </p>
          
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            Jetzt bewerben
          </motion.button>
        </div>
      </motion.section>

      {/* Onboarding Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsModalOpen(false)}></div>
          
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Werden Sie Partner
            </h3>
            
            <p className="text-gray-300 mb-6">
              Füllen Sie das Formular aus, und unser Team wird sich innerhalb von 24 Stunden mit Ihnen in Verbindung setzen.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="company">Unternehmen</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ihr Unternehmen"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ihr Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1 text-sm" htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-4 mt-6">
                <motion.button
                  type="button"
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-2 rounded-lg font-medium hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(false)}
                >
                  Abbrechen
                </motion.button>
                
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Absenden
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}