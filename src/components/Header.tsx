import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HelpCircle, Factory, Users, User, Sun, Moon, Award, Home, ShoppingBag, BookOpen, MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageModal from './LanguageModal';
import LogoModal from './LogoModal'; // Corrected import name
import LoginModal from './LoginModal';

import './scrollbar.css';

interface HeaderProps {
  onLanguageChange: (languageCode: string) => void;
  language?: string;
}

const FLAGS = [
  { code: 'de', country: 'Germany', path: '/flag/germany.gif' },
  { code: 'it', country: 'Italy', path: '/flag/italy.gif' },
  { code: 'fr', country: 'France', path: '/flag/french.gif' },
  { code: 'es', country: 'Spain', path: '/flag/spain.gif' },
  { code: 'hk', country: 'Hong Kong', path: '/flag/hong-kong.gif' },
  { code: 'tw', country: 'Taiwan', path: '/flag/taiwan.gif' },
  { code: 'sg', country: 'Singapore', path: '/flag/singapore.gif' },
  { code: 'za', country: 'South Africa', path: '/flag/south-africa.gif' },
  { code: 'sa', country: 'Saudi Arabia', path: '/flag/saudi.gif' },
  { code: 'nl', country: 'Netherlands', path: '/flag/netherlands.gif' },
  { code: 'en', country: 'United Kingdom', path: '/flag/uk.gif' },
  { code: 'kr', country: 'South Korea', path: '/flag/south-korea.gif' },
  { code: 'jp', country: 'Japan', path: '/flag/japan.gif' },
];

const TRANSLATIONS = {
  de: {
    'Clarity': 'KLARHEIT',
    'About Us': 'GESCHICHTE DER HERKUNFT',
    'About': 'ÜBER UNS',
    'German Excellence': 'DEUTSCHE EXZELLENZ',
    'Buyers': 'KÄUFER',
    'Login': 'ANMELDEN',
    'Home': 'STARTSEITE',
    'BreadAndSoul': 'BROT & SEELE',
    'SearchPlaceholder': 'Suche nach Premium-Produkten aus Deutschland...',
    'HomeTip': 'Startseite von Made in Germany – Ihr Einstiegspunkt für Kooperationen, Produktvielfalt und zuverlässige Geschäftsbeziehungen.',
    'MadeInGermanyTip': 'Unsere Garantie für höchste Qualität und Innovation – 100% Made in Germany, weltweit geschätzt.',
    'BreadAndSoulTip': 'Wo Tradition und Leidenschaft aufeinandertreffen – Die Seele des deutschen Handwerks.',
    'AboutUsTip': 'Erfahren Sie mehr über unsere Vision, Werte und die Geschichte hinter Made in Germany.',
    'AboutTip': 'Sagen Sie Über zu unserer Gemeinschaft – Verbinden Sie sich mit uns und erfahren Sie mehr über Made in Germany.',
    'ClarityTip': 'Verstehen Sie unser Engagement für Transparenz und Qualität in jedem Produkt.',
    'GermanExcellenceTip': 'Exzellenz, die inspiriert – Made in Germany steht für Perfektion in Design und Funktion.',
    'BuyersTip': 'Für globale Käufer – Entdecken Sie exklusiv hochwertige Produkte aus Deutschland.',
    'LoginTip': 'Willkommen zurück – Melden Sie sich an, um auf Ihre Bestellungen und exklusiven Angebote zuzugreifen.',
    'ThemeToggleTip': 'Passen Sie das Erscheinungsbild der Seite an Ihre Vorlieben an – Hell- oder Dunkelmodus.',
    'LanguageTip': 'Wählen Sie Ihre Sprache und erleben Sie Made in Germany in Ihrer bevorzugten Sprache.'
  },
  en: {
    'Clarity': 'CLARITY',
    'About Us': 'HISTORY OF ORIGIN',
    'About': 'ABOUT US',
    'German Excellence': 'GERMAN EXCELLENCE',
    'Buyers': 'BUYERS',
    'Login': 'LOGIN',
    'Home': 'HOME',
    'BreadAndSoul': 'BREAD & SOUL',
    'SearchPlaceholder': 'Search premium German products...',
    'HomeTip': 'Startseite von Made in Germany – Ihr Einstiegspunkt für Kooperationen, Produktvielfalt und zuverlässige Geschäftsbeziehungen.',
    'MadeInGermanyTip': 'Our guarantee for the highest quality and innovation – 100% Made in Germany, globally appreciated.',
    'BreadAndSoulTip': 'Where tradition and passion meet – The soul of German craftsmanship.',
    'AboutUsTip': 'Learn more about our vision, values, and the history behind Made in Germany.',
    'AboutTip': 'Say About to our community – Connect with us and explore more about Made in Germany.',
    'ClarityTip': 'Understand our commitment to transparency and quality in every product.',
    'GermanExcellenceTip': 'Excellence that inspires – Made in Germany stands for perfection in design and function.',
    'BuyersTip': 'For global buyers – Discover exclusively high-quality products from Germany.',
    'LoginTip': 'Welcome back – Log in to access your orders and exclusive offers.',
    'ThemeToggleTip': 'Customize the appearance of the page to your preferences – Light or Dark mode.',
    'LanguageTip': 'Choose your language and experience Made in Germany in your preferred language.'
  }
};

const EnhancedTooltip = ({ content, isVisible, isDarkTheme, parentRect }) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isVisible && tooltipRef.current && parentRect) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      let left = parentRect.left + (parentRect.width / 2) - (tooltipRect.width / 2);
      const top = parentRect.bottom + 8;

      if (left + tooltipRect.width > viewportWidth - 10) {
        left = viewportWidth - tooltipRect.width - 10;
      }
      if (left < 10) {
        left = 10;
      }

      setPosition({ top, left });
    }
  }, [isVisible, parentRect]);

  if (!isVisible) return null;

  return (
    <div
      ref={tooltipRef}
      className={`fixed z-[1000] px-4 py-2 rounded-xl shadow-2xl
        bg-gray-900/90 text-gray-300 border border-blue-500/30
        w-max max-w-40 transition-all duration-200 ease-in-out backdrop-blur-sm
        transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        animation: 'tooltipFadeIn 0.2s ease-out',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)',
      }}
    >
      <div className="text-xs font-light leading-tight">{content}</div>
      <div
        className={`absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0
          border-l-[6px] border-l-transparent
          border-r-[6px] border-r-transparent
          border-b-[6px] border-b-gray-900/90`}
      ></div>
      <div
        className={`absolute inset-0 rounded-xl bg-blue-500/10
          opacity-20 blur-md -z-10 animate-[pulse_2s_ease-in-out_infinite]`}
      ></div>
    </div>
  );
};

const FlagButton = ({ onClick, onMouseEnter, onMouseLeave, tooltip, isDarkTheme }) => {
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlagIndex((prevIndex) =>
        prevIndex === FLAGS.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center justify-center h-8 w-8 rounded-full bg-gray-800/50 border border-gray-700 transition-all duration-200 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
        type="button"
      >
        <img src={FLAGS[currentFlagIndex].path} alt={FLAGS[currentFlagIndex].country} className="h-5 w-5 hover:opacity-80" />
      </button>
      <EnhancedTooltip
        content={tooltip}
        isVisible={showTooltip}
        isDarkTheme={isDarkTheme}
        parentRect={buttonRef.current?.getBoundingClientRect()}
      />
    </div>
  );
};

const globalStyles = `
@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-5px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes pulse {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.2;
  }
}
`;

const Header = ({ onLanguageChange, language = 'en' }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [germanActive, setGermanActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [tooltips, setTooltips] = useState({
    home: false,
    madeInGermany: false,
    breadAndSoul: false,
    engagement: false,
    aboutUs: false,
    About: false,
    clarity: false,
    germanExcellence: false,
    buyers: false,
    login: false,
    theme: false,
    language: false
  });
  const buttonRefs = {
    home: useRef(null),
    madeInGermany: useRef(null),
    breadAndSoul: useRef(null),
    engagement: useRef(null),
    aboutUs: useRef(null),
    About: useRef(null),
    clarity: useRef(null),
    germanExcellence: useRef(null),
    buyers: useRef(null),
    login: useRef(null),
    theme: useRef(null),
  };
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = globalStyles;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSearchFocus = (isFocused) => setIsSearchFocused(isFocused);
  const handleLanguageModalToggle = () => setShowLanguageModal((prev) => !prev);

  const handleThemeToggle = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const showTooltip = (name) => {
    setTooltips(prev => ({ ...prev, [name]: true }));
  };

  const hideTooltip = (name) => {
    setTooltips(prev => ({ ...prev, [name]: false }));
  };

  const handleHomeClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleMadeInGermanyClick = () => {
    setGermanActive(true);
    navigate('/onehundredpercentmadeingermany');
    setIsMobileMenuOpen(false);
  };

  const handleBreadAndSoulClick = () => {
    navigate('/madeingermanybread');
    setIsMobileMenuOpen(false);
  };

  const handleEngagementClick = () => {
    navigate('/engagement');
    setIsMobileMenuOpen(false);
  };
  
  const handleAboutUsClick = () => {
    navigate('/madeingermanyaboutus');
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/aboutus');
    setIsMobileMenuOpen(false);
  };
  
  const handleClarityClick = () => {
    navigate('/clarity');
    setIsMobileMenuOpen(false);
  };
  
  const handleGermanExcellenceClick = () => {
    navigate('/madeingermanyformanufacturers');
    setIsMobileMenuOpen(false);
  };
  
  const handleBuyersClick = () => {
    navigate('/madeingermanyforbuyers');
    setIsMobileMenuOpen(false);
  };
  
  const handleLoginClick = () => {
    setShowLoginModal(true);
    setIsMobileMenuOpen(false);
  };

  const handleCloseLoginModal = useCallback(() => {
    setShowLoginModal(false);
  }, []);

  const handleLogoHover = () => {
    if (window.innerWidth >= 768) {
      setShowLogoModal(true);
    }
  };

  const handleLogoClick = () => {
    if (window.innerWidth < 768) {
      setShowLogoModal(true);
    }
  };

  const handleCloseLogoModal = () => setShowLogoModal(false);

  const handleSelectLanguage = (languageCode) => {
    onLanguageChange(languageCode);
    setShowLanguageModal(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isHomeActive = location.pathname === '/';
  const isMadeInGermanyActive = location.pathname === '/onehundredpercentmadeingermany';
  const isBreadAndSoulActive = location.pathname === '/madeingermanybread';
  const isEngagementActive = location.pathname === '/engagement';
  const isAboutUsActive = location.pathname === '/madeingermanyaboutus';
  const isAboutActive = location.pathname === '/aboutus';
  const isClarityActive = location.pathname === '/clarity';
  const isGermanExcellenceActive = location.pathname === '/madeingermanyformanufacturers';
  const isBuyersActive = location.pathname === '/madeingermanyforbuyers';
  const isLoginActive = location.pathname === '/login';

  const logoSrc = isDarkTheme ? '/made-in-germany-logo-english-white.png' : '/made-in-germany-logo-english-black.png';

  const activeButtonStyle = (isActive, isDarkTheme, isSpecialButton = false, buttonType = '') => {
    const baseStyle = `flex items-center gap-1 px-1 py-1 sm:px-2 md:px-3 sm:py-2 rounded-lg border border-gray-700 text-gray-200 font-semibold text-[0.65rem] sm:text-xs md:text-xs whitespace-nowrap transition-all duration-200`;
    const activeStyle = isActive
      ? `bg-gradient-to-r from-blue-600 to-purple-600 scale-105 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`
      : `hover:bg-gray-700 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]`;
    const defaultStyle = `bg-gray-800/50`;
    
    if (isSpecialButton && buttonType === 'germanExcellence') {
      return `${baseStyle} bg-[#DD0000] ${isActive ? 'bg-[#DD0000]' : 'hover:bg-[#E60000]'}`;
    }
    if (isSpecialButton && buttonType === 'buyers') {
      return `${baseStyle} bg-[#FFCE00] text-gray-800 ${isActive ? ' bg-[#FFCE00]' : 'hover:bg-opacity-80'}`;
    }
    return `${baseStyle} ${defaultStyle} ${activeStyle}`;
  };

  // Ensure modal state is reset after rendering
  useEffect(() => {
    if (!showLoginModal) {
      setTimeout(() => {}, 0);
    }
  }, [showLoginModal]);

  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 right-0 shadow-lg backdrop-blur-sm'
            : 'relative'
        } bg-gradient-to-br from-gray-900 to-black ring-1 ring-white/20`}
      >
        <div className="max-w-[100rem] mx-auto min-w-[320px] px-2 sm:px-4">
          <div className="relative flex items-center justify-between py-2 h-16 sm:h-20">
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
            />
            <div className="relative flex-shrink-0 ml-1 sm:ml-2">
              <img
                src={logoSrc}
                alt="MADE IN GERMANY ©"
                className="h-8 sm:h-10 md:h-12"
                onMouseEnter={handleLogoHover}
                onClick={handleLogoClick}
              />
              <LogoModal
                isVisible={showLogoModal}
                onClose={handleCloseLogoModal}
                language={language}
              />
            </div>

            <button 
              className="lg:hidden flex items-center p-2 rounded-full bg-gray-800/50 border border-gray-700 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] mr-2"
              onClick={toggleMobileMenu}
            >
              <svg 
                className={`w-6 h-6 text-gray-300`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            <div className="hidden lg:flex items-center justify-end flex-grow ml-4 space-x-2">
              <div className="relative">
                <button
                  ref={buttonRefs.home}
                  type="button"
                  className={activeButtonStyle(isHomeActive, isDarkTheme)}
                  onClick={handleHomeClick}
                  onMouseEnter={() => showTooltip('home')}
                  onMouseLeave={() => hideTooltip('home')}
                >
                  <Home className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                  <span>{TRANSLATIONS[language]['Home']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['HomeTip']} 
                  isVisible={tooltips.home} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.home.current?.getBoundingClientRect()}
                />
              </div>
              <div className="relative">
                <button
                  ref={buttonRefs.About}
                  type="button"
                  className={activeButtonStyle(isAboutActive, isDarkTheme)}
                  onClick={handleAboutClick}
                  onMouseEnter={() => showTooltip('About')}
                  onMouseLeave={() => hideTooltip('About')}
                >
                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                  <span>{TRANSLATIONS[language]['About']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['AboutTip']} 
                  isVisible={tooltips.About} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.About.current?.getBoundingClientRect()}
                />
              </div>
              <div className="relative">
                <button
                  ref={buttonRefs.clarity}
                  type="button"
                  className={activeButtonStyle(isClarityActive, isDarkTheme)}
                  onClick={handleClarityClick}
                  onMouseEnter={() => showTooltip('clarity')}
                  onMouseLeave={() => hideTooltip('clarity')}
                >
                  <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                  <span>{TRANSLATIONS[language]['Clarity']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['ClarityTip']} 
                  isVisible={tooltips.clarity} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.clarity.current?.getBoundingClientRect()}
                />
              </div>
              
              <div className="relative">
                <button
                  ref={buttonRefs.breadAndSoul}
                  type="button"
                  className={activeButtonStyle(isBreadAndSoulActive, isDarkTheme)}
                  onClick={handleBreadAndSoulClick}
                  onMouseEnter={() => showTooltip('breadAndSoul')}
                  onMouseLeave={() => hideTooltip('breadAndSoul')}
                >
                  <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                  <span>{TRANSLATIONS[language]['BreadAndSoul']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['BreadAndSoulTip']} 
                  isVisible={tooltips.breadAndSoul} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.breadAndSoul.current?.getBoundingClientRect()}
                />
              </div>
              
              <div className="relative">
                <button
                  ref={buttonRefs.aboutUs}
                  type="button"
                  className={activeButtonStyle(isAboutUsActive, isDarkTheme)}
                  onClick={handleAboutUsClick}
                  onMouseEnter={() => showTooltip('aboutUs')}
                  onMouseLeave={() => hideTooltip('aboutUs')}
                >
                  <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                  <span>{TRANSLATIONS[language]['About Us']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['AboutUsTip']} 
                  isVisible={tooltips.aboutUs} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.aboutUs.current?.getBoundingClientRect()}
                />
              </div>
              
              <div className="relative">
                <button
                  ref={buttonRefs.germanExcellence}
                  type="button"
                  className={activeButtonStyle(isGermanExcellenceActive, isDarkTheme, true, 'germanExcellence')}
                  onClick={handleGermanExcellenceClick}
                  onMouseEnter={() => showTooltip('germanExcellence')}
                  onMouseLeave={() => hideTooltip('germanExcellence')}
                >
                  <Factory className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                  <span>{TRANSLATIONS[language]['German Excellence']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['GermanExcellenceTip']} 
                  isVisible={tooltips.germanExcellence} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.germanExcellence.current?.getBoundingClientRect()}
                />
              </div>
              
              <div className="relative">
                <button
                  ref={buttonRefs.buyers}
                  type="button"
                  className={activeButtonStyle(isBuyersActive, isDarkTheme, true, 'buyers')}
                  onClick={handleBuyersClick}
                  onMouseEnter={() => showTooltip('buyers')}
                  onMouseLeave={() => hideTooltip('buyers')}
                >
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 text-gray-800" />
                  <span>{TRANSLATIONS[language]['Buyers']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['BuyersTip']} 
                  isVisible={tooltips.buyers} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.buyers.current?.getBoundingClientRect()}
                />
              </div>
              
              <div className="relative">
                <button
                  ref={buttonRefs.login}
                  type="button"
                  className={activeButtonStyle(isLoginActive, isDarkTheme)}
                  onClick={handleLoginClick}
                  onMouseEnter={() => showTooltip('login')}
                  onMouseLeave={() => hideTooltip('login')}
                >
                  <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                  <span>{TRANSLATIONS[language]['Login']}</span>
                </button>
                <EnhancedTooltip 
                  content={TRANSLATIONS[language]['LoginTip']} 
                  isVisible={tooltips.login} 
                  isDarkTheme={isDarkTheme}
                  parentRect={buttonRefs.login.current?.getBoundingClientRect()}
                />
              </div>
              
              <div className="flex items-center space-x-3 ml-2">
                <div className="relative">
                  <FlagButton 
                    onClick={handleLanguageModalToggle} 
                    onMouseEnter={() => showTooltip('language')}
                    onMouseLeave={() => hideTooltip('language')}
                    tooltip={TRANSLATIONS[language]['LanguageTip']}
                    isDarkTheme={isDarkTheme}
                  />
                </div>
                
                <div className="relative">
                  <button
                    ref={buttonRefs.theme}
                    onClick={handleThemeToggle}
                    onMouseEnter={() => showTooltip('theme')}
                    onMouseLeave={() => hideTooltip('theme')}
                    className={`p-1.5 sm:p-2 rounded-full bg-gray-800/50 border border-gray-700 transition-all duration-200 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                  >
                    {isDarkTheme ? (
                      <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
                    ) : (
                      <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-300" />
                    )}
                  </button>
                  <EnhancedTooltip 
                    content={TRANSLATIONS[language]['ThemeToggleTip']} 
                    isVisible={tooltips.theme} 
                    isDarkTheme={isDarkTheme}
                    parentRect={buttonRefs.theme.current?.getBoundingClientRect()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      {isMobileMenuOpen && (
          <div className={`lg:hidden p-2 bg-gradient-to-br from-gray-900 to-black border-t border-white/20 relative`}>
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
            />
            <div className="flex flex-col space-y-2 py-2">
              <button
                type="button"
                className={activeButtonStyle(isHomeActive, isDarkTheme)}
                onClick={handleHomeClick}
              >
                <Home className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['Home']}</span>
              </button>
              
              <button
                type="button"
                className={activeButtonStyle(isAboutUsActive, isDarkTheme)}
                onClick={handleAboutUsClick}
              >
                <HelpCircle className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['About Us']}</span>
              </button>
              <button
                type="button"
                className={activeButtonStyle(isClarityActive, isDarkTheme)}
                onClick={handleClarityClick}
              >
                <BookOpen className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['Clarity']}</span>
              </button>
              <button
                type="button"
                className={activeButtonStyle(isMadeInGermanyActive, isDarkTheme)}
                onClick={handleMadeInGermanyClick}
              >
                <Award className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['MadeInGermany100percent']}</span>
              </button>

              <button
                type="button"
                className={activeButtonStyle(isBreadAndSoulActive, isDarkTheme)}
                onClick={handleBreadAndSoulClick}
              >
                <ShoppingBag className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['BreadAndSoul']}</span>
              </button>

              <button
                type="button"
                className={activeButtonStyle(isAboutActive, isDarkTheme)}
                onClick={handleAboutClick}
              >
                <MessageSquare className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['About']}</span>
              </button>

              <button
                type="button"
                className={activeButtonStyle(isGermanExcellenceActive, isDarkTheme, true, 'germanExcellence')}
                onClick={handleGermanExcellenceClick}
              >
                <Factory className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['German Excellence']}</span>
              </button>

              <button
                type="type"
                className={activeButtonStyle(isBuyersActive, isDarkTheme, true, 'buyers')}
                onClick={handleBuyersClick}
              >
                <Users className="h-4 w-4 text-gray-800" />
                <span>{TRANSLATIONS[language]['Buyers']}</span>
              </button>

              <button
                type="button"
                className={activeButtonStyle(isLoginActive, isDarkTheme)}
                onClick={handleLoginClick}
              >
                <User className="h-4 w-4 text-gray-300" />
                <span>{TRANSLATIONS[language]['Login']}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {showLanguageModal && (
        <LanguageModal
          onClose={handleLanguageModalToggle}
          onSelectLanguage={handleSelectLanguage}
        />
      )}

      {showLoginModal && (
        <LoginModal
          language={language}
          onClose={handleCloseLoginModal}
        />
      )}
    </>
  );
};

export default Header;