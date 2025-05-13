import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageModalProps {
  onClose: () => void;
  onSelectLanguage: (code: string) => void;
}

const LANGUAGES: Language[] = [
  { code: 'de', name: 'Deutsch', flag: '/flag/germany.gif' },
  { code: 'en', name: 'English', flag: '/flag/uk.gif' },
  { code: 'es', name: 'Español', flag: '/flag/spain.gif' },
  { code: 'fr', name: 'Français', flag: '/flag/french.gif' },
  { code: 'it', name: 'Italiano', flag: '/flag/italy.gif' },
  { code: 'nl', name: 'Dutch', flag: '/flag/netherlands.gif' },
  { code: 'sa', name: 'العربية (السعودية)', flag: '/flag/saudi.gif' },
  { code: 'hk', name: '繁體中文', flag: '/flag/hong-kong.gif' },
  { code: 'sg', name: '简体中文', flag: '/flag/singapore.gif' },
  { code: 'za', name: 'Afrikaans', flag: '/flag/south-africa.gif' },
  { code: 'kr', name: '한국어', flag: '/flag/south-korea.gif' },
  { code: 'jp', name: '日本語', flag: '/flag/japan.gif' },
];

// Translation object for modal text
const TRANSLATIONS: Record<string, { selectLanguage: string; chooseLanguage: string; close: string; select: string }> = {
  de: {
    selectLanguage: 'SPRACHE WÄHLEN',
    chooseLanguage: 'Wählen Sie Ihre bevorzugte Sprache',
    close: 'Schließen',
    select: 'Auswählen',
  },
  en: {
    selectLanguage: 'SELECT LANGUAGE',
    chooseLanguage: 'Choose your preferred language',
    close: 'Close',
    select: 'Select',
  },
  es: {
    selectLanguage: 'SELECCIONAR IDIOMA',
    chooseLanguage: 'Elige tu idioma preferido',
    close: 'Cerrar',
    select: 'Seleccionar',
  },
  fr: {
    selectLanguage: 'SÉLECTIONNER LA LANGUE',
    chooseLanguage: 'Choisissez votre langue préférée',
    close: 'Fermer',
    select: 'Sélectionner',
  },
  it: {
    selectLanguage: 'SELEZIONA LINGUA',
    chooseLanguage: 'Scegli la tua lingua preferita',
    close: 'Chiudi',
    select: 'Seleziona',
  },
  nl: {
    selectLanguage: 'TAAL SELECTEREN',
    chooseLanguage: 'Kies uw voorkeurstaal',
    close: 'Sluiten',
    select: 'Selecteren',
  },
  sa: {
    selectLanguage: 'اختر اللغة',
    chooseLanguage: 'اختر لغتك المفضلة',
    close: 'إغلاق',
    select: 'اختر',
  },
  hk: {
    selectLanguage: '選擇語言',
    chooseLanguage: '選擇您偏好的語言',
    close: '關閉',
    select: '選擇',
  },
  sg: {
    selectLanguage: '选择语言',
    chooseLanguage: '选择您偏好的语言',
    close: '关闭',
    select: '选择',
  },
  za: {
    selectLanguage: 'KIES TAAL',
    chooseLanguage: 'Kies jou voorkeurtaal',
    close: 'Sluit',
    select: 'Kies',
  },
  kr: {
    selectLanguage: '언어 선택',
    chooseLanguage: '원하는 언어를 선택하세요',
    close: '닫기',
    select: '선택',
  },
  jp: {
    selectLanguage: '言語を選択',
    chooseLanguage: '希望する言語を選択してください',
    close: '閉じる',
    select: '選択',
  },
};

const LanguageModal: React.FC<LanguageModalProps> = ({ onClose, onSelectLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default to English

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLanguageSelect = (code: string) => {
    setCurrentLanguage(code);
    onSelectLanguage(code);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en; // Fallback to English

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden font-inter"
        onClick={handleBackdropClick}
      >
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .animate-fade-in {
              animation: fadeIn 0.3s ease-in;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes gridPulse {
              0% { opacity: 0.2; }
              50% { opacity: 0.4; }
              100% { opacity: 0.2; }
            }
            @media (max-width: 640px) {
              .mobile-close-button {
                position: absolute;
                top: 0.25rem;
                right: 0.5rem;
                padding: 0.25rem 0.5rem;
                font-size: 0.75rem;
              }
              .mobile-header-title {
                margin-top: 2rem;
              }
            }
            .tooltip {
              visibility: hidden;
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
              position: absolute;
              top: 100%;
              right: 0;
              background-color: #1f2937;
              color: #fff;
              text-align: center;
              padding: 5px 10px;
              border-radius: 6px;
              font-size: 0.875rem;
              white-space: nowrap;
              z-index: 10;
            }
            .tooltip-language {
              top: auto;
              bottom: 100%;
              right: 50%;
              transform: translateX(50%);
            }
            .tooltip-container:hover .tooltip {
              visibility: visible;
              opacity: 1;
            }
          `}
        </style>
        {/* Fixed Background with Image */}
        <div className="fixed inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              filter: 'blur(8px)',
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        {/* Modal Content with Scroll and Grid Background */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.6, bounce: 0.3 }}
          className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-2 ring-blue-500/50 w-full max-w-[95%] sm:max-w-4xl md:max-w-6xl mx-4 my-8 overflow-hidden flex flex-col max-h-[90vh]"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none animate-[gridPulse_5s_ease-in-out_infinite]"
          />
          {/* Sticky Header */}
          <motion.div
            className="sticky top-0 z-20 flex flex-col gap-2 p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-black border-b border-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-center">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              >
                {t.selectLanguage}
              </motion.h2>
              <div className="relative tooltip-container">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg"
                  aria-label={t.close}
                >
                  <X size={24} />
                </motion.button>
                <span className="tooltip">{t.close}</span>
              </div>
            </div>
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              {t.chooseLanguage}
            </motion.h3>
          </motion.div>

          {/* Scrollable Content with Hidden Scrollbar */}
          <motion.div
            className="relative z-10 flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6 md:p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Language Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {LANGUAGES.map((language) => (
                <motion.div
                  key={language.code}
                  variants={itemVariants}
                  className="relative tooltip-container"
                >
                  <motion.button
                    onClick={() => handleLanguageSelect(language.code)}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="w-full flex items-center gap-4 p-4 rounded-lg bg-gray-800/80 border border-gray-600 hover:bg-gray-800 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={language.flag}
                        alt={`${language.name} flag`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <span className="text-base font-medium text-gray-300 truncate">{language.name}</span>
                  </motion.button>
                  <span className="tooltip tooltip-language">{`${t.select} ${language.name}`}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageModal;