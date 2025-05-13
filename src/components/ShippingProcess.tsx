import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, FileCheck, Globe, Clock, Shield, Search, ArrowRight } from 'lucide-react';

const ShippingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Auftragserteilung",
      icon: <FileCheck className="text-blue-400" size={24} />,
      description: "Bestellen Sie einfach über unser Portal. Wir bestätigen Ihren Auftrag umgehend und beginnen mit der Bearbeitung."
    },
    {
      title: "Vorbereitung & Dokumentation",
      icon: <Package className="text-blue-400" size={24} />,
      description: "Wir bereiten alle notwendigen Zolldokumente vor und verpacken Ihre Produkte sicher für den internationalen Transport."
    },
    {
      title: "Versand & Tracking",
      icon: <Truck className="text-blue-400" size={24} />,
      description: "Ihre Sendung wird mit einem der führenden Logistikpartner auf den Weg gebracht. Sie erhalten einen Tracking-Code zur lückenlosen Verfolgung."
    },
    {
      title: "Zollabwicklung",
      icon: <Globe className="text-blue-400" size={24} />,
      description: "Unsere Experten kümmern sich um die komplette Zollabwicklung. Sie werden über jeden Schritt informiert und müssen sich um nichts kümmern."
    },
    {
      title: "Zustellung",
      icon: <Clock className="text-blue-400" size={24} />,
      description: "Nach der Zollfreigabe wird Ihr Paket direkt zu Ihnen geliefert - pünktlich und in einwandfreiem Zustand."
    }
  ];

  const benefits = [
    {
      title: "Transportversicherung",
      icon: <Shield className="text-blue-400" size={24} />,
      description: "Jede Sendung ist vollständig versichert. Im unwahrscheinlichen Fall einer Beschädigung übernehmen wir die komplette Abwicklung."
    },
    {
      title: "Echtzeit-Tracking",
      icon: <Search className="text-blue-400" size={24} />,
      description: "Verfolgen Sie Ihre Sendung in Echtzeit über unser Kundenportal oder per mobiler App - von der Abholung bis zur Zustellung."
    },
    {
      title: "Transparente Kosten",
      icon: <FileCheck className="text-blue-400" size={24} />,
      description: "Keine versteckten Gebühren. Alle Kosten inklusive Zoll und Steuern werden vorab transparent aufgeschlüsselt."
    },
    {
      title: "Support in Ihrer Sprache",
      icon: <Globe className="text-blue-400" size={24} />,
      description: "Unser mehrsprachiges Team beantwortet alle Ihre Fragen zum Versandprozess in Ihrer Landessprache."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Hero Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-0"></div>
        
        <div className="relative z-10 py-8 px-6 md:px-12 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Internationaler Versandprozess
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Entdecken Sie, wie einfach der Import deutscher Qualitätsprodukte mit unserem transparenten und effizienten Versandsystem ist. Von der Bestellung bis zur Lieferung - wir begleiten Sie bei jedem Schritt.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Versand anfragen <ArrowRight size={16} />
            </motion.button>
            
            <motion.button 
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Mehr erfahren
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Steps Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
        
        <div className="relative z-10">
          <motion.h2 
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Unser Versandprozess
          </motion.h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className="flex justify-between w-full max-w-3xl mb-8 relative">
              {steps.map((_, index) => (
                <div key={`step-dot-${index}`} className="relative">
                  <motion.div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${activeStep >= index ? 'bg-blue-600' : 'bg-gray-700'}`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActiveStep(index)}
                  >
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className={`absolute top-4 h-0.5 w-full right-0 -translate-y-1/2 ${activeStep > index ? 'bg-blue-600' : 'bg-gray-700'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={`step-${index}`}
                className={`bg-gray-800/50 p-6 rounded-lg border ${activeStep === index ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-gray-700'} hover:bg-gray-800 transition-all duration-300 cursor-pointer`}
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="font-medium text-xl text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Grid Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
        
        <div className="relative z-10">
          <motion.h2 
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Unsere Versandvorteile
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={`benefit-${index}`}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-medium text-lg text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative w-full max-w-7xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>
        
        <div className="relative z-10">
          <motion.h2 
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Bereit für Ihren ersten Import?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Unser Team steht Ihnen für alle Fragen zur Verfügung. Starten Sie jetzt Ihren Versandprozess und profitieren Sie von der deutschen Qualität.
          </motion.p>
          
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Jetzt Kontakt aufnehmen <ArrowRight size={16} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ShippingProcess;