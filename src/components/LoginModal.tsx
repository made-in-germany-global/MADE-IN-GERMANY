import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Factory,
  Globe,
  Briefcase,
  Phone,
  Store,
  DollarSign,
  Users,
  Truck,
  Code,
  X,
} from 'lucide-react';

const TRANSLATIONS = {
  de: {
    welcome: "Willkommen – Bitte wählen Sie Ihren Login-Bereich aus:",
    germanManufacturers: "Deutsche Hersteller",
    internationalBuyers: "Internationale Käufer",
    salesFieldService: "Vertriebspartner Außendienst",
    salesOfficeService: "Vertriebspartner Innendienst",
    franchisePartners: "Franchise-Partner",
    investors: "Investoren / Beteiligte",
    internalStaff: "Interne Mitarbeiter",
    logisticsPartners: "Speditions-/Logistikpartner",
    technicalServiceProviders: "Technische Dienstleister",
    noAccess: "Sie haben noch keinen Zugang? Kontaktieren Sie unser Support-Team.",
    germanManufacturersDesc: "Für Hersteller, die ihre in Deutschland hergestellten Produkte präsentieren möchten.",
    internationalBuyersDesc: "Für globale Käufer, die deutsche Produkte entdecken möchten.",
    salesFieldServiceDesc: "Für Außendienstmitarbeiter, die Kunden direkt betreuen.",
    salesOfficeServiceDesc: "Für Innendienstmitarbeiter, die den Verkauf unterstützen.",
    franchisePartnersDesc: "Für Franchise-Partner und Ländervertretungen.",
    investorsDesc: "Für Investoren und Beteiligte an der Plattform.",
    internalStaffDesc: "Für das Backoffice-Team und interne Mitarbeiter.",
    logisticsPartnersDesc: "Für Partner, die Logistik und Transport abwickeln.",
    technicalServiceProvidersDesc: "Für Entwickler und technische Dienstleister.",
    username: "Benutzername",
    password: "Passwort",
    back: "Zurück",
    continue: "Weiter",
    languageGerman: "Deutsch",
    languageEnglish: "Englisch",
    forgotPassword: "Passwort vergessen?",
    signUp: "Registrieren",
  },
  en: {
    welcome: "Welcome – Please select your login area:",
    germanManufacturers: "German Manufacturers",
    internationalBuyers: "International Buyers",
    salesFieldService: "Sales Field Service",
    salesOfficeService: "Sales Office Service",
    franchisePartners: "Franchise Partners",
    investors: "Investors / Stakeholders",
    internalStaff: "Internal Staff",
    logisticsPartners: "Logistics Partners",
    technicalServiceProviders: "Technical Service Providers",
    noAccess: "Don’t have access yet? Contact our support team.",
    germanManufacturersDesc: "For manufacturers showcasing their German-made products.",
    internationalBuyersDesc: "For global buyers discovering German products.",
    salesFieldServiceDesc: "For field service staff directly supporting customers.",
    salesOfficeServiceDesc: "For office staff supporting sales operations.",
    franchisePartnersDesc: "For franchise partners and country representatives.",
    investorsDesc: "For investors and stakeholders in the platform.",
    internalStaffDesc: "For back-office teams and internal staff.",
    logisticsPartnersDesc: "For partners handling logistics and transportation.",
    technicalServiceProvidersDesc: "For developers and technical service providers.",
    username: "Username",
    password: "Password",
    back: "Back",
    continue: "Continue",
    languageGerman: "German",
    languageEnglish: "English",
    forgotPassword: "Forgot Password?",
    signUp: "Sign Up",
  },
};

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  if (hasError) {
    return (
      <div className="text-white text-center p-6">
        Something went wrong. Please refresh the page.
      </div>
    );
  }
  return children;
};

const LoginModal = ({ language = "de", onLanguageChange, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const t = TRANSLATIONS[language];

  const loginOptions = [
    {
      title: t.germanManufacturers,
      icon: Factory,
      description: t.germanManufacturersDesc,
    },
    {
      title: t.internationalBuyers,
      icon: Globe,
      description: t.internationalBuyersDesc,
    },
    {
      title: t.salesFieldService,
      icon: Briefcase,
      description: t.salesFieldServiceDesc,
    },
    {
      title: t.salesOfficeService,
      icon: Phone,
      description: t.salesOfficeServiceDesc,
    },
    {
      title: t.franchisePartners,
      icon: Store,
      description: t.franchisePartnersDesc,
    },
    {
      title: t.investors,
      icon: DollarSign,
      description: t.investorsDesc,
    },
    {
      title: t.internalStaff,
      icon: Users,
      description: t.internalStaffDesc,
    },
    {
      title: t.logisticsPartners,
      icon: Truck,
      description: t.logisticsPartnersDesc,
    },
    {
      title: t.technicalServiceProviders,
      icon: Code,
      description: t.technicalServiceProvidersDesc,
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  const handleLanguageChange = (lang) => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  return (
    <ErrorBoundary>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes gridPulse {
            0% { opacity: 0.2; }
            50% { opacity: 0.4; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          {/* Background with Blur Effect */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(8px)',
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-2 ring-blue-500/50 w-full max-w-4xl p-8 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none animate-[gridPulse_5s_ease-in-out_infinite]"
            />
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(59,130,246,0.7)" }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg"
            >
              <X size={24} />
            </motion.button>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <img
                  src="/made-in-germany-logo-english-white.png"
                  alt="Made in Germany Logo"
                  className="h-12"
                />
              </div>
              <h2 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {t.welcome}
              </h2>

              {!selectedOption ? (
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto scrollbar-hide">
                    {loginOptions.map((option, index) => (
                      <motion.div
                        key={option.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.7)" }}
                        className="bg-gray-800/70 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 border border-gray-600 cursor-pointer shadow-lg backdrop-blur-md flex flex-col items-center"
                        onClick={() => handleOptionSelect(option)}
                      >
                        <option.icon className="w-12 h-12 text-blue-400 mb-4" />
                        <h3 className="font-semibold text-xl text-white text-center">{option.title}</h3>
                        <p className="text-gray-300 text-sm text-center mt-2">{option.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col items-center">
                    <p className="text-gray-400 text-sm mb-4">{t.noAccess}</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleLanguageChange('de')}
                        className={`text-sm ${language === 'de' ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-400 transition-colors`}
                      >
                        [{t.languageGerman}]
                      </button>
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`text-sm ${language === 'en' ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-400 transition-colors`}
                      >
                        [{t.languageEnglish}]
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold text-2xl text-white mb-4 text-center">{selectedOption.title}</h3>
                  <p className="text-gray-300 text-base mb-8 text-center">{selectedOption.description}</p>
                  <div className="space-y-8 max-w-md mx-auto">
                    <div>
                      <label htmlFor="username" className="block text-gray-300 text-lg mb-2">
                        {t.username}
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                        placeholder={t.username}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-gray-300 text-lg mb-2">
                        {t.password}
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                        placeholder={t.password}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors">
                        {t.forgotPassword}
                      </button>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors">
                        {t.signUp}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
                    <motion.button
                      onClick={handleBack}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(107,114,128,0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 text-lg"
                    >
                      {t.back}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.7)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] text-lg"
                    >
                      {t.continue}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
};

export default LoginModal;