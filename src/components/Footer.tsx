import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Youtube, Shield, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../SEO';
import ChatBot from './ChatBot';
import DataProtectionModal from './DataProtectionModal';
import ImprintModal from './ImprintModal';
import DomainsModal from './DomainsModal';
import LanguageModal from './LanguageModal';
import TermsModal from './TermsModal';
import ValuesModal from './ValuesModal';

const germanTubeBuyersImage = '/made-in-germany-germantube-buyers.png';
const germanAIBuyersImage = '/made-in-germany-ai-buyers.png';
const germanForumBuyersImage = '/made-in-germany-forum-buyers.png';
const germanTubeManufacturersImage = '/made-in-germany-tube-manufacturers.png';
const germanAIManufacturersImage = '/made-in-germany-ai-manufacturers.png';
const germanForumManufacturersImage = '/made-in-germany-forum-manufacturers.png';
const footerIcon = '/made-in-germany-footer.webp';

interface Flag {
  code: string;
  country: string;
  path: string;
}

interface Domain {
  url: string;
  flag: string;
  country: string;
}

interface Translations {
  imprint: string;
  dataProtection: string;
  termsAndConditions: string;
  businessAssistant: string;
  madeInGermanyHistory: string;
  careers: string;
  valuecode: string;
  franchiseSystem: string;
  legalAndProtection: string;
  MadeInGermany100percent: string;
  pressContact: string;
  strategicInvestments: string;
  talentAcquisition: string;
  privacyChoices: string;
  copyright: string;
}

interface FooterProps {
  onLanguageChange: (languageCode: string) => void;
  language?: string;
}

const FLAGS: Flag[] = [
  { code: 'de', country: 'Germany', path: '/flag/germany.gif' },
  { code: 'en', country: 'United Kingdom', path: '/flag/uk.gif' },
];

const DOMAINS: { main: Domain[] } = {
  main: [
    { url: 'made-in-germany.world', flag: '/flag/world.gif', country: 'Global' },
    { url: 'made-in-germany-first.com', flag: '/flag/germany.gif', country: 'Deutschland' },
  ],
};

const TRANSLATIONS: Record<string, Translations> = {
  en: {
    imprint: 'IMPRINT',
    dataProtection: 'DATA PROTECTION',
    termsAndConditions: 'TERMS AND CONDITIONS',
    businessAssistant: 'BUSINESS ASSISTANT',
    madeInGermanyHistory: 'MADE-IN-GERMANY-HISTORY',
    careers: 'CAREERS',
    valuecode: 'VALUE CODE',
    franchiseSystem: 'FRANCHISE-SYSTEM',
    legalAndProtection: 'LEGAL AND PROTECTION',
    MadeInGermany100percent: '100% MADE IN GERMANY',
    pressContact: 'PRESS CONTACT',
    strategicInvestments: 'STRATEGIC INVESTMENTS',
    talentAcquisition: 'TALENT ACQUISITION',
    privacyChoices: 'YOUR PRIVACY CHOICES',
    copyright: 'MADE-IN-GERMANY © - Available Worldwide - Over 100 years of Premium Quality',
  },
  de: {
    imprint: 'IMPRESSUM',
    dataProtection: 'DATENSCHUTZ',
    termsAndConditions: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
    businessAssistant: 'GESCHÄFTSASSISTENT',
    madeInGermanyHistory: 'MADE-IN-GERMANY-GESCHICHTE',
    careers: 'KARRIERE',
    valuecode: 'WERTECODE',
    franchiseSystem: 'FRANCHISE-SYSTEM',
    legalAndProtection: 'RECHTLICHES UND SCHUTZ',
    MadeInGermany100percent: '100% MADE IN GERMANY',
    pressContact: 'PRESSEKONTAKT',
    strategicInvestments: 'STRATEGISCHE INVESTITIONEN',
    talentAcquisition: 'TALENTAKQUISE',
    privacyChoices: 'IHRE DATENSCHUTZOPTIONEN',
    copyright: '',
  },
};

const PrivacyChoicesModal: React.FC<{ isOpen: boolean; onClose: () => void; language: string }> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;
  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl max-w-md w-full ring-1 ring-white/20"
      >
        <h2 className="text-lg font-semibold text-white mb-4">{translations.privacyChoices}</h2>
        <p className="text-sm text-gray-300 mb-4">
          Manage your privacy settings here. You can control how we collect, use, and share your personal information.
        </p>
        <div className="space-y-4">
          <label className="flex items-center text-sm text-gray-200">
            <input type="checkbox" className="mr-2 accent-gray-600" />
            Allow personalized ads
          </label>
          <label className="flex items-center text-sm text-gray-200">
            <input type="checkbox" className="mr-2 accent-gray-600" />
            Share data with third parties
          </label>
          <label className="flex items-center text-sm text-gray-200">
            <input type="checkbox" className="mr-2 accent-gray-600" />
            Enable analytics cookies
          </label>
        </div>
        <button onClick={onClose} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded w-full hover:bg-gray-600">
          Save and Close
        </button>
      </motion.div>
    </motion.div>
  );
};

const FlagButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlagIndex((prevIndex) => (prevIndex === FLAGS.length - 1 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center border border-gray-700 rounded-lg px-2 py-1 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 w-36 shadow-sm"
      type="button"
      aria-label="Choose your language"
    >
      <motion.img
        key={FLAGS[currentFlagIndex].path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={FLAGS[currentFlagIndex].path}
        alt={FLAGS[currentFlagIndex].country}
        className="h-8 w-auto mr-2"
      />
      <span className="text-xs font-medium text-gray-200">CHOOSE YOUR LANGUAGE</span>
    </motion.button>
  );
};


const Footer: React.FC<FooterProps> = ({ onLanguageChange, language = 'en' }) => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showDomainsModal, setShowDomainsModal] = useState(false);
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isDataProtectionOpen, setIsDataProtectionOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyChoicesOpen, setIsPrivacyChoicesOpen] = useState(false);
  const [isValuesOpen, setIsValuesOpen] = useState(false);
  const [isChatBotOpen, setIsChatbotOpen] = useState(false);
  const navigate = useNavigate();
  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];

  const memoizedDomains = useMemo(
    () => ({
      regionaleDomains: DOMAINS.main,
      subdomainsEuropa: [],
      subdomainsAmerika: [],
      subdomainsAsien: [],
      subdomainsNahost: [],
      subdomainsAfrika: [],
    }),
    []
  );

  const handleSelectLanguage = useCallback(
    (languageCode: string) => {
      onLanguageChange(languageCode);
      setShowLanguageModal(false);
    },
    [onLanguageChange]
  );

  const handleNavigation = useCallback(
    (path: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [navigate]
  );

  const handleSocialClick = useCallback((platform: string) => () => {
    const urls: Record<string, string> = {
      facebook: 'https://facebook.com',
      twitter: 'https://x.com',
      linkedin: 'https://linkedin.com',
      youtube: 'https://youtube.com',
    };
    window.open(urls[platform], '_blank');
  }, []);

  return (
    <>
      <style>
        {`
          .footer-box {
            background-color: #1f3b2c;
            border: 1px solid #374151;
            border-radius: 0.75rem;
            padding: 1rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1rem;
            height: 208px;
          }
          .inspiration-box {
            background: #000A00;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(55, 65, 81, 0.5);
            border-radius: 0.75rem;
            padding: 1.5rem;
            width: 100%;
            max-width: 448px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1rem;
            height: 208px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .inspiration-box:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }
          .inspiration-box h4 {
            font-size: 1rem;
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            margin-bottom: 0.75rem;
          }
          .inspiration-box .icon {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
            color: #60A5FA;
          }
          .inspiration-box p {
            font-size: 0.875rem;
            color: #D1D5DB;
            margin-bottom: 1rem;
            text-align: center;
          }
          .learn-more-link {
            font-size: 0.875rem;
            color: #60A5FA;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: color 0.2s ease;
          }
          .learn-more-link:hover {
            color: #93C5FD;
          }
        
        `}
      </style>
      <SEO
        title="Made in Germany - Premium German Products for Global Markets"
        description="Discover top-quality Made in Germany products. Connect with leading German manufacturers and suppliers for premium goods."
        keywords="Made in Germany, German products, German manufacturers, premium quality, German engineering, B2B solutions"
        url="https://made-in-germany.global"
        image="https://made-in-germany.global/static/images/hero-image.webp"
      />
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full bg-gradient-to-br from-gray-900 to-black pt-6 pb-3 px-4 sm:px-6 lg:px-8 box-border overflow-x-hidden"
      >
       
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none overflow-hidden" />
        <div className="w-full max-w-full relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center justify-between w-full md:w-auto">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 md:mb-0"
              >
                Verlässlichkeit, die verbindet – weltweit.
              </motion.h2>
              <div className="flex gap-3 md:hidden">
                {[
                  { icon: Facebook, platform: 'facebook', label: 'Facebook' },
                  { icon: Twitter, platform: 'twitter', label: 'Twitter' },
                  { icon: Linkedin, platform: 'linkedin', label: 'LinkedIn' },
                  { icon: Youtube, platform: 'youtube', label: 'YouTube' },
                ].map(({ icon: Icon, platform, label }) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(59,130,246,0.3)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSocialClick(platform)}
                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
                    aria-label={`Visit our ${label} page`}
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-3">
                {[
                  { icon: Facebook, platform: 'facebook', label: 'Facebook' },
                  { icon: Twitter, platform: 'twitter', label: 'Twitter' },
                  { icon: Linkedin, platform: 'linkedin', label: 'LinkedIn' },
                  { icon: Youtube, platform: 'youtube', label: 'YouTube' },
                ].map(({ icon: Icon, platform, label }) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(59,130,246,0.3)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSocialClick(platform)}
                    className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
                    aria-label={`Visit our ${label} page`}
                  >
                    <Icon className="w-5 h-5 text-gray-400" />
                  </motion.button>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPrivacyChoicesOpen(true)}
                className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition"
                aria-label={translations.privacyChoices}
              >
                <Shield className="w-4 h-4 mr-1" />
                {translations.privacyChoices}
              </motion.button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-full">
                {[
                  {
                    title: 'MADE IN GERMANY © FORUM FOR BUYERS',
                    image: germanForumBuyersImage,
                    desc: [
                      'Join discussions on global sourcing.',
                      'Share insights with buyers.',
                      'Access expert trade advice.',
                    ],
                    onClick: () => navigate('/forum-buyers'),
                  },
                  {
                    title: 'MADE IN GERMANY © TUBE - GLOBAL BUYERS',
                    image: germanTubeBuyersImage,
                    desc: [
                      'Discover high-quality German products.',
                      'Connect with trusted manufacturers.',
                      'Source seamlessly for global trade.',
                    ],
                    onClick: () => navigate('/tube-buyers'),
                  },
                  {
                    title: 'MADE IN GERMANY © AI FOR BUYERS',
                    image: germanAIBuyersImage,
                    desc: [
                      'Optimize sourcing with AI tools.',
                      'Analyze market trends instantly.',
                      'Enhance purchasing decisions.',
                    ],
                    onClick: () => navigate('/ai-buyers'),
                  },
                  {
                    title: 'MADE IN GERMANY © FORUM MANUFACTURERS',
                    image: germanForumManufacturersImage,
                    desc: [
                      'Collaborate with industry peers.',
                      'Discuss manufacturing trends.',
                      'Enhance production strategies.',
                    ],
                    onClick: () => navigate('/forum-manufacturers'),
                  },
                  {
                    title: 'MADE IN GERMANY © TUBE - MANUFACTURERS',
                    image: germanTubeManufacturersImage,
                    desc: [
                      'Showcase products to global buyers.',
                      'Expand with our network.',
                      'Gain international market expertise.',
                    ],
                    onClick: () => navigate('/tube-manufacturers'),
                  },
                  {
                    title: 'MADE IN GERMANY © AI FOR MANUFACTURERS',
                    image: germanAIManufacturersImage,
                    desc: [
                      'Streamline production with AI.',
                      'Predict market demands accurately.',
                      'Boost operational efficiency.',
                    ],
                    onClick: () => navigate('/ai-manufacturers'),
                  },
                ].map((item, index) => {
                  const [beforeCopyright, afterCopyright] = item.title.split(' © ');
                  return (
                    <motion.button
                      key={item.title}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={item.onClick}
                      className="bg-gray-800/50 hover:bg-gray-800 rounded-xl p-4 transition duration-300 border border-gray-700 shadow-[0_0_10px_rgba(59,130,246,0.3)] text-left backdrop-blur-sm w-full h-[208px]"
                      aria-label={item.title}
                    >
                      <div className="flex items-center mb-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-contain mr-2"
                          loading="lazy"
                        />
                        <div className="flex flex-col">
                          <span className="text-base font-semibold text-gray-200">{beforeCopyright} ©</span>
                          <span className="text-base font-semibold text-gray-200">{afterCopyright}</span>
                        </div>
                      </div>
                      {item.desc.map((text, i) => (
                        <p key={i} className="text-xs text-gray-400 leading-relaxed mb-1 font-light">
                          {text}
                        </p>
                      ))}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700 w-full h-[208px] flex flex-row justify-between items-center">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                    GLOBAL ACCESS
                  </h3>
                  <FlagButton onClick={() => setShowLanguageModal(true)} />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowDomainsModal(true)}
                    className="flex items-center border border-gray-700 rounded-lg px-2 py-1 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 w-36 shadow-sm"
                    aria-label="Choose your country"
                  >
                    <img
                      src="/flag/world.gif"
                      alt="Select Country"
                      className="h-8 w-auto mr-2"
                      loading="lazy"
                    />
                    <span className="text-xs font-medium text-gray-200">CHOOSE YOUR COUNTRY</span>
                  </motion.button>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={footerIcon}
                    alt="MADE IN GERMANY © Footer Icon"
                    className="h-[160px] w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="inspiration-box"
              >
                <h4>
                  <Sparkles className="icon" /> Innovationen & Visionen
                </h4>
                <p>
                  Germany for Future treibt nachhaltige Lösungen und visionäre Ideen voran, in Partnerschaft mit Made in Germany’s Qualitätsversprechen.
                </p>
                <a
                  href="https://germany-for-future.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-more-link"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border-t border-gray-800 pt-6"
          >
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mb-4">
                {[
                  { label: translations.imprint, onClick: () => setIsImprintOpen(true) },
                  { label: translations.dataProtection, onClick: () => setIsDataProtectionOpen(true) },
                  { label: translations.termsAndConditions, onClick: () => setIsTermsOpen(true) },
                  { label: translations.businessAssistant, onClick: () => setIsChatbotOpen(true) },
                  { label: translations.valuecode, onClick: () => setIsValuesOpen(true) },
                  { label: translations.madeInGermanyHistory, onClick: handleNavigation('/madeingermanyhistory') },
                ].map((item, index) => (
                  <React.Fragment key={item.label}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={item.onClick}
                      className="text-xs font-light text-gray-300 hover:text-white transition"
                      aria-label={item.label}
                    >
                      {item.label}
                    </motion.button>
                    {index < 5 && <span className="text-gray-500">||</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mb-4">
                {[
                  { label: translations.MadeInGermany100percent, onClick: handleNavigation('/onehundredpercentmadeingermany'), highlighted: true },
                  { label: translations.careers, onClick: handleNavigation('/careers') },
                  { label: translations.legalAndProtection, onClick: handleNavigation('/legalandprotection') },
                  { label: translations.pressContact, onClick: handleNavigation('/presscontact') },
                  { label: translations.talentAcquisition, onClick: handleNavigation('/talentacquisition') },
                  { label: translations.strategicInvestments, onClick: handleNavigation('/strategicinvestments'), highlighted: true },
                  { label: translations.franchiseSystem, onClick: handleNavigation('/franchise'), highlighted: true },
                ].map((item, index) => (
                  <React.Fragment key={item.label}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={item.onClick}
                      className={`text-xs font-light transition ${
                        item.highlighted
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded hover:from-blue-700 hover:to-purple-700'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      aria-label={item.label}
                    >
                      {item.label}
                    </motion.button>
                    {index < 6 && <span className="text-gray-500">||</span>}
                  </React.Fragment>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-center text-xs text-gray-400 font-light"
              >
                {translations.copyright}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.footer>
      <AnimatePresence>
        {showLanguageModal && (
          <LanguageModal
            onClose={() => setShowLanguageModal(false)}
            onSelectLanguage={handleSelectLanguage}
            language={language}
          />
        )}
        {showDomainsModal && (
          <DomainsModal
            isOpen={showDomainsModal}
            onClose={() => setShowDomainsModal(false)}
            language={language}
            regionaleDomains={memoizedDomains.regionaleDomains}
            subdomainsEuropa={memoizedDomains.subdomainsEuropa}
            subdomainsAmerika={memoizedDomains.subdomainsAmerika}
            subdomainsAsien={memoizedDomains.subdomainsAsien}
            subdomainsNahost={memoizedDomains.subdomainsNahost}
            subdomainsAfrika={memoizedDomains.subdomainsAfrika}
          />
        )}
        <ImprintModal isOpen={isImprintOpen} onClose={() => setIsImprintOpen(false)} language={language} />
        <DataProtectionModal
          isOpen={isDataProtectionOpen}
          onClose={() => setIsDataProtectionOpen(false)}
          language={language}
        />
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} language={language} />
        <PrivacyChoicesModal
          isOpen={isPrivacyChoicesOpen}
          onClose={() => setIsPrivacyChoicesOpen(false)}
          language={language}
        />
        <ValuesModal isOpen={isValuesOpen} onClose={() => setIsValuesOpen(false)} language={language} />
        <ChatBot isOpen={isChatBotOpen} onClose={() => setIsChatbotOpen(false)} language={language} />
      </AnimatePresence>
    </>
  );
};

export default Footer;