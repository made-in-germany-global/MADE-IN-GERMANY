import React, { useMemo, useCallback, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import {
  Globe, FileText, User, ArrowUp, Zap, Shield, Award, Search, BarChart2, Server, Users, Lock, Package, Link, Leaf, UserPlus, MessageCircle, Truck, ArrowRight, Info, Upload, ShoppingCart, Star, AlertCircle, ChevronDown
} from 'lucide-react';

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white">
          <p>Something went wrong. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Interfaces
interface Faq {
  question: string;
  answer: string;
  icon: typeof Globe;
}

interface Benefit {
  title: string;
  description: string;
  icon: typeof Globe;
}

interface Translations {
  community: string;
  platform: string;
  whyJoin: string;
  whyJoinDesc: string;
  ourValues: string;
  ourValuesDesc: string;
  platformFeatures: string;
  platformFeaturesDesc: string;
  ourStory: string;
  ourStoryDesc: string;
  faq: string;
  faqDesc: string;
  callToAction: string;
  callToActionDesc: string;
  joinButton: string;
  exploreButton: string;
  dashboard: string;
  uploadProduct: string;
  viewOrders: string;
  security: string;
  securityDesc: string;
}

// Static Translations
const TRANSLATIONS: Record<string, Translations> = {
  de: {
    community: 'WERTEGEMEINSCHAFT',
    platform: 'MADE IN GERMANY © – Wo Werte uns verbinden',
    whyJoin: 'WARUM MITMACHEN?',
    whyJoinDesc:
      'MADE IN GERMANY © ist mehr als eine Plattform – es ist ein Bekenntnis zu Exzellenz, Nachhaltigkeit und Zusammenarbeit. Wir sind eine Gemeinschaft, die mit Stolz deutsche Werte vertritt und die Zukunft der Fertigung gestaltet. Wer in Deutschland produziert, gehört dazu – ganz selbstverständlich.',
    ourValues: 'UNSERE WERTE',
    ourValuesDesc:
      'Unsere Werte sind das Fundament der Wertegemeinschaft MADE IN GERMANY ©. Sie verbinden uns als stolze deutsche Hersteller, die mit Leidenschaft für Qualität, Verantwortung und Innovation arbeiten. Gemeinsam schaffen wir eine Zukunft, die unsere Werte weltweit trägt.',
    platformFeatures: 'PLATTFORMFUNKTIONEN',
    platformFeaturesDesc:
      'Unsere Plattform bietet innovative Werkzeuge, die deutsche Hersteller befähigen, ihre Werte weltweit zu präsentieren. Von globaler Reichweite über nahtlose Integration bis hin zu höchster Datensicherheit – wir unterstützen Sie, Ihre Exzellenz zu zeigen und zukunftssicher zu bleiben.',
    ourStory: 'UNSERE GESCHICHTE',
    ourStoryDesc:
      'Tauchen Sie ein in die Geschichte der Wertegemeinschaft MADE IN GERMANY © – eine Bewegung, die von leidenschaftlichen deutschen Herstellern getragen wird. Gemeinsam vereinen wir Tradition und Innovation, um Qualität, Verantwortung und Exzellenz weltweit zu repräsentieren.',
    faq: 'HÄUFIG GESTELLTE FRAGEN',
    faqDesc:
      'Entdecken Sie, wie Sie Teil der Wertegemeinschaft MADE IN GERMANY © werden können – eine Bewegung, die deutsche Hersteller vereint, um Qualität, Nachhaltigkeit und Innovation weltweit zu fördern.',
    callToAction: 'Die Zukunft mit MADE IN GERMANY © gestalten',
    callToActionDesc:
      'Werden Sie Teil einer Gemeinschaft, die deutsche Qualität, Nachhaltigkeit und Innovation weltweit vertritt. Ihre Reise beginnt hier.',
    joinButton: 'UNSERE GEMEINSCHAFT BEITRETEN',
    exploreButton: 'DIE PLATTFORM ENTDECKEN',
    dashboard: 'DASHBOARD',
    uploadProduct: 'Jetzt Produkt hochladen',
    viewOrders: 'Bestellungen einsehen',
    security: 'SICHERHEIT & DATENSCHUTZ',
    securityDesc:
      'Ihre Daten sind bei uns sicher. Wir verwenden Ende-zu-Ende-Verschlüsselung und speichern alle Daten in DSGVO-konformen europäischen Rechenzentren.',
  },
  en: {
    community: 'VALUE COMMUNITY',
    platform: 'MADE IN GERMANY © – Where Values Connect Us',
    whyJoin: 'WHY JOIN?',
    whyJoinDesc:
      'MADE IN GERMANY © is more than a platform – it’s a commitment to excellence, sustainability, and collaboration. We are a community that proudly upholds German values and shapes the future of manufacturing. If you produce in Germany, you belong here – naturally.',
    ourValues: 'OUR VALUES',
    ourValuesDesc:
      'Our values are the foundation of the MADE IN GERMANY © value community. They unite us as proud German manufacturers who work with passion for quality, responsibility, and innovation. Together, we create a future that carries our values worldwide.',
    platformFeatures: 'PLATFORM FEATURES',
    platformFeaturesDesc:
      'Our platform offers innovative tools that empower German manufacturers to showcase their values globally. From global reach to seamless integration and top-tier data security, we support you in displaying your excellence and staying future-proof.',
    ourStory: 'OUR STORY',
    ourStoryDesc:
      'Dive into the story of the MADE IN GERMANY © value community – a movement driven by passionate German manufacturers. Together, we blend tradition and innovation to represent quality, responsibility, and excellence worldwide.',
    faq: 'FREQUENTLY ASKED QUESTIONS',
    faqDesc:
      'Discover how you can become part of the MADE IN GERMANY © value community – a movement that unites German manufacturers to promote quality, sustainability, and innovation worldwide.',
    callToAction: 'Shaping the Future with MADE IN GERMANY ©',
    callToActionDesc:
      'Join a community that represents German quality, sustainability, and innovation worldwide. Your journey starts here.',
    joinButton: 'JOIN OUR COMMUNITY',
    exploreButton: 'EXPLORE THE PLATFORM',
    dashboard: 'DASHBOARD',
    uploadProduct: 'Upload Product Now',
    viewOrders: 'View Orders',
    security: 'SECURITY & PRIVACY',
    securityDesc:
      'Your data is safe with us. We use end-to-end encryption and store all data in GDPR-compliant European data centers.',
  },
};

// Onboarding Steps
const ONBOARDING_STEPS = [
  {
    title: 'Registrieren',
    desc: 'Erstellen Sie Ihr Herstellerkonto in wenigen Minuten.',
    icon: UserPlus,
  },
  {
    title: 'Produkte hochladen',
    desc: 'Laden Sie Ihren Produktkatalog über CSV, XML, JSON oder API hoch.',
    icon: Upload,
  },
  {
    title: 'Bestellungen verwalten',
    desc: 'Verfolgen und bearbeiten Sie Bestellungen in Echtzeit.',
    icon: ShoppingCart,
  },
];

// ManufacturersSection Component
const ManufacturersSection = ({ language = 'de' }) => {
  const navigate = useNavigate();
  const translations = TRANSLATIONS[language] || TRANSLATIONS['de'];
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isUserBuyer, setIsUserBuyer] = useState(false);

  const faqs = useMemo(
    () => [
      {
        question: language === 'de' ? 'Was bedeutet es, Teil der Wertegemeinschaft zu sein?' : 'What does it mean to be part of the value community?',
        answer:
          language === 'de'
            ? 'Mitglied der Wertegemeinschaft MADE IN GERMANY © zu sein, bedeutet, sich einem Netzwerk anzuschließen, das für höchste Qualität, nachhaltige Verantwortung und unermüdliche Exzellenz steht.'
            : 'Being a member of the MADE IN GERMANY © value community means joining a network that stands for the highest quality, sustainable responsibility, and relentless excellence.',
        icon: Users,
      },
      {
        question: language === 'de' ? 'Wie kann ich meine Produkte auf der Plattform präsentieren?' : 'How can I showcase my products on the platform?',
        answer:
          language === 'de'
            ? 'Mit unserer benutzerfreundlichen Plattform können Sie Ihren Produktkatalog über Formate wie CSV, XML, JSON oder unsere API hochladen.'
            : 'With our user-friendly platform, you can upload your product catalog via formats like CSV, XML, JSON, or our API.',
        icon: Package,
      },
      {
        question: language === 'de' ? 'Wie werden die Daten meines Unternehmens geschützt?' : 'How is my company’s data protected?',
        answer:
          language === 'de'
            ? 'Datensicherheit ist ein Kernprinzip von MADE IN GERMANY ©. Wir verwenden Ende-zu-Ende-Verschlüsselung und speichern alle Daten in DSGVO-konformen europäischen Rechenzentren.'
            : 'Data security is a core principle of MADE IN GERMANY ©. We use end-to-end encryption and store all data in GDPR-compliant European data centers.',
        icon: Lock,
      },
      {
        question: language === 'de' ? 'Kann ich meine bestehenden Systeme mit der Plattform verbinden?' : 'Can I connect my existing systems to the platform?',
        answer:
          language === 'de'
            ? 'Ja, die Plattform von MADE IN GERMANY © integriert sich nahtlos in führende ERP-Systeme wie SAP, Oracle oder individuelle Lösungen.'
            : 'Yes, the MADE IN GERMANY © platform seamlessly integrates with leading ERP systems like SAP, Oracle, or custom solutions.',
        icon: Link,
      },
      {
        question: language === 'de' ? 'Wie unterstützt die Plattform Nachhaltigkeit?' : 'How does the platform support sustainability?',
        answer:
          language === 'de'
            ? 'MADE IN GERMANY © fördert nachhaltige Praktiken, indem wir Hersteller unterstützen, die umweltfreundliche Produktionsmethoden und ethische Arbeitsstandards einhalten.'
            : 'MADE IN GERMANY © promotes sustainable practices by supporting manufacturers who adhere to eco-friendly production methods and ethical labor standards.',
        icon: Leaf,
      },
      {
        question: language === 'de' ? 'Wer kann Mitglied der Wertegemeinschaft werden?' : 'Who can become a member of the value community?',
        answer:
          language === 'de'
            ? 'Jeder Hersteller, der in Deutschland produziert und unsere Werte von Exzellenz, Verantwortung, Zusammenarbeit und Zukunftsorientierung teilt, kann Mitglied von MADE IN GERMANY © werden.'
            : 'Any manufacturer producing in Germany and sharing our values of excellence, responsibility, collaboration, and future orientation can become a member of MADE IN GERMANY ©.',
        icon: UserPlus,
      },
      {
        question: language === 'de' ? 'Wie unterstützt die Plattform die Kommunikation in der Frachtindustrie?' : 'How does the platform support communication in the freight industry?',
        answer:
          language === 'de'
            ? 'MADE IN GERMANY © bietet eine integrierte Messaging-Funktion für die Frachtindustrie, die Echtzeit-Updates zu Sendungsstatus, Zollbestimmungen und Logistikkoordination liefert.'
            : 'MADE IN GERMANY © offers an integrated messaging feature for the freight industry, providing real-time updates on shipment status, customs regulations, and logistics coordination.',
        icon: MessageCircle,
      },
      {
        question: language === 'de' ? 'Wie hilft die Plattform bei der Optimierung von Frachtkosten?' : 'How does the platform help optimize freight costs?',
        answer:
          language === 'de'
            ? 'MADE IN GERMANY © bietet Tools zur Analyse und Optimierung von Frachtkosten, einschließlich Vergleichen von Logistikdienstleistern und KI-gestützten Empfehlungen.'
            : 'MADE IN GERMANY © provides tools for analyzing and optimizing freight costs, including comparisons of logistics providers and AI-supported recommendations.',
        icon: Truck,
      },
    ],
    [language]
  );

  const benefits = useMemo(
    () => [
      {
        title: language === 'de' ? 'Globale Reichweite' : 'Global Reach',
        description:
          language === 'de'
            ? 'Erreichen Sie Kunden weltweit mit mehrsprachiger Unterstützung und SEO-optimierten Produktpräsentationen.'
            : 'Reach customers worldwide with multilingual support and SEO-optimized product presentations.',
        icon: Globe,
      },
      {
        title: language === 'de' ? 'Qualität & Nachhaltigkeit' : 'Quality & Sustainability',
        description:
          language === 'de'
            ? 'Präsentieren Sie umweltfreundliche Praktiken und Qualitätszertifikate, um Vertrauen zu schaffen.'
            : 'Showcase eco-friendly practices and quality certifications to build trust.',
        icon: Award,
      },
      {
        title: language === 'de' ? 'Logistische Effizienz' : 'Logistical Efficiency',
        description:
          language === 'de'
            ? 'Optimieren Sie Lieferketten mit Echtzeit-Updates und Tools zur Frachtkostenanalyse.'
            : 'Optimize supply chains with real-time updates and freight cost analysis tools.',
        icon: Truck,
      },
      {
        title: language === 'de' ? 'Datensicherheit' : 'Data Security',
        description:
          language === 'de'
            ? 'Schützen Sie Ihre Daten mit Ende-zu-Ende-Verschlüsselung und DSGVO-konformen Rechenzentren.'
            : 'Protect your data with end-to-end encryption and GDPR-compliant data centers.',
        icon: Lock,
      },
    ],
    [language]
  );

  const handleNavigation = useCallback(
    (path) => () => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [navigate]
  );

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, ONBOARDING_STEPS.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const closeOnboarding = () => setIsOnboardingOpen(false);
  const toggleFaq = (id) => setExpandedFaq(expandedFaq === id ? null : id);

  return (
    <ErrorBoundary>
      <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
        {/* Onboarding Modal */}
        {isOnboardingOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60')] bg-cover bg-center bg-no-repeat"
              style={{ filter: 'blur(8px)' }}
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {language === 'de' ? 'Willkommen bei MADE IN GERMANY ©' : 'Welcome to MADE IN GERMANY ©'}
                </h2>
                <div className="flex items-start mb-6">
  {(() => {
    const Icon = ONBOARDING_STEPS[currentStep].icon;
    return <Icon size={28} className="mr-4 text-blue-400" />;
  })()}
  <div>
    <h3 className="text-xl font-semibold text-white">{ONBOARDING_STEPS[currentStep].title}</h3>
    <p className="text-gray-300 mt-2">{ONBOARDING_STEPS[currentStep].desc}</p>
  </div>
</div>
                <div className="flex justify-between items-center">
                  <motion.button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="px-6 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                    data-tooltip-id="back-tooltip"
                    data-tooltip-content={language === 'de' ? 'Zurück zum vorherigen Schritt' : 'Go to previous step'}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {language === 'de' ? 'Zurück' : 'Back'}
                  </motion.button>
                  {currentStep < ONBOARDING_STEPS.length - 1 ? (
                    <motion.button
                      onClick={nextStep}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      data-tooltip-id="next-tooltip"
                      data-tooltip-content={language === 'de' ? 'Zum nächsten Schritt' : 'Go to next step'}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language === 'de' ? 'Weiter' : 'Next'}
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={closeOnboarding}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      data-tooltip-id="finish-tooltip"
                      data-tooltip-content={language === 'de' ? 'Onboarding abschließen' : 'Complete onboarding'}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language === 'de' ? 'Fertig' : 'Finish'}
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex space-x-2 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-l-lg ${!isUserBuyer ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'border border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
                  onClick={() => setIsUserBuyer(false)}
                >
                  I'm a Manufacturer
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-r-lg ${isUserBuyer ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'border border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
                  onClick={handleNavigation('/madeingermanyforbuyers')}
                >
                  I'm a Buyer
                </motion.button>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {translations.community}
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4 font-light text-gray-300">{translations.platform}</h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl text-gray-300 leading-relaxed">
                {language === 'de'
                  ? 'Schließen Sie sich einer Gemeinschaft deutscher Hersteller an, die durch Verantwortung, Qualität und eine gemeinsame Vision für die Zukunft verbunden sind.'
                  : 'Join a community of German manufacturers connected by responsibility, quality, and a shared vision for the future.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavigation('/madeingermanyjoin')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  data-tooltip-id="join-button"
                  data-tooltip-content={translations.joinButton}
                >
                  {translations.joinButton} <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavigation('/explore')}
                  className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                  data-tooltip-id="explore-button"
                  data-tooltip-content={translations.exploreButton}
                >
                  {translations.exploreButton}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Dashboard Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.dashboard}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Verkaufszahlen', value: '€1.2M', icon: BarChart2, color: 'bg-blue-900' },
                { title: 'Bestellungen', value: '245', icon: ShoppingCart, color: 'bg-green-900' },
                { title: 'Rücksendungen', value: '12', icon: AlertCircle, color: 'bg-red-900' },
                { title: 'Bewertungen', value: '4.8/5', icon: Star, color: 'bg-yellow-900' },
              ].map((metric) => (
                <motion.div
                  key={metric.title}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  className="bg-gray-800/50 rounded-lg p-6 flex items-center hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  data-tooltip-id={`metric-${metric.title}`}
                  data-tooltip-content={metric.title}
                >
                  <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center mr-4`}>
                    <metric.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">{metric.title}</p>
                    <p className="text-xl font-bold text-white">{metric.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="font-medium mb-4 text-white">Verkaufstrends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                  [Placeholder: Sales Chart]
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="font-medium mb-4 text-white">Lagerbestände</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                  [Placeholder: Inventory Chart]
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigation('/upload')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                data-tooltip-id="upload-button"
                data-tooltip-content={translations.uploadProduct}
              >
                <Upload size={16} /> {translations.uploadProduct}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigation('/orders')}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                data-tooltip-id="orders-button"
                data-tooltip-content={translations.viewOrders}
              >
                <ShoppingCart size={16} /> {translations.viewOrders}
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Security Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.security}
            </h2>
            <div className="bg-gray-800/50 rounded-lg p-6 flex items-center border border-gray-700">
              <Lock size={24} className="mr-4 text-blue-400" />
              <div>
                <p className="text-gray-300 mb-2">{translations.securityDesc}</p>
                <p className="text-sm text-gray-400">
                  {language === 'de'
                    ? 'Zugriffssteuerung: Nur autorisierte Benutzer können auf Ihre Daten zugreifen.'
                    : 'Access Control: Only authorized users can access your data.'}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Join Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.whyJoin}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.whyJoinDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: User,
                  number: 1,
                  title: language === 'de' ? 'Teil der Gemeinschaft werden' : 'Join the Community',
                  desc:
                    language === 'de'
                      ? 'Registrieren Sie Ihr Unternehmen und werden Sie Teil eines Netzwerks, das Ihre Werte von Qualität, Verantwortung und Stolz auf deutsches Handwerk teilt.'
                      : 'Register your company and join a network that shares your values of quality, responsibility, and pride in German craftsmanship.',
                },
                {
                  icon: ArrowUp,
                  number: 2,
                  title: language === 'de' ? 'Ihre Exzellenz präsentieren' : 'Showcase Your Excellence',
                  desc:
                    language === 'de'
                      ? 'Laden Sie Ihre Produkte, Zertifizierungen und Geschichten hoch, um die unvergleichliche Qualität und das Handwerk von MADE IN GERMANY zu zeigen.'
                      : 'Upload your products, certifications, and stories to showcase the unparalleled quality and craftsmanship of MADE IN GERMANY.',
                },
                {
                  icon: Globe,
                  number: 3,
                  title: language === 'de' ? 'Global vernetzen' : 'Connect Globally',
                  desc:
                    language === 'de'
                      ? 'Erreichen Sie qualitätsbewusste Käufer weltweit, ohne Ihre Werte zu kompromittieren.'
                      : 'Reach quality-conscious buyers worldwide without compromising your values.',
                },
                {
                  icon: Users,
                  number: 4,
                  title: language === 'de' ? 'Die Zukunft gestalten' : 'Shape the Future',
                  desc:
                    language === 'de'
                      ? 'Werden Sie Teil einer Bewegung, die die Zukunft der Fertigung definiert.'
                      : 'Become part of a movement that defines the future of manufacturing.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  data-tooltip-id={`why-join-${index}`}
                  data-tooltip-content={item.title}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <item.icon size={32} className="text-blue-400" />
                  </div>
                  <span className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-2">
                    {item.number}
                  </span>
                  <h3 className="font-medium text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.ourValues}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.ourValuesDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: language === 'de' ? 'Exzellenz' : 'Excellence',
                  desc:
                    language === 'de'
                      ? 'Wir setzen Maßstäbe, indem wir in jedem Produkt, jedem Prozess und jeder Partnerschaft höchste Qualität anstreben.'
                      : 'We set standards by striving for the highest quality in every product, process, and partnership.',
                },
                {
                  icon: Shield,
                  title: language === 'de' ? 'Verantwortung' : 'Responsibility',
                  desc:
                    language === 'de'
                      ? 'Nachhaltigkeit und Fairness sind unser Antrieb.'
                      : 'Sustainability and fairness drive us.',
                },
                {
                  icon: Globe,
                  title: language === 'de' ? 'Zusammenarbeit' : 'Collaboration',
                  desc:
                    language === 'de'
                      ? 'Unsere Stärke liegt in der Gemeinschaft.'
                      : 'Our strength lies in community.',
                },
                {
                  icon: Zap,
                  title: language === 'de' ? 'Zukunftsorientierung' : 'Future Orientation',
                  desc:
                    language === 'de'
                      ? 'Wir blicken nach vorn, indem wir Innovationen vorantreiben.'
                      : 'We look forward by driving innovation.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  data-tooltip-id={`value-${index}`}
                  data-tooltip-content={item.title}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="font-medium text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigation('/madeingermanyjoin')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                data-tooltip-id="join-values"
                data-tooltip-content={language === 'de' ? 'Jetzt beitreten' : 'Join Now'}
              >
                {language === 'de' ? 'Jetzt beitreten' : 'Join Now'} <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Platform Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.platformFeatures}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.platformFeaturesDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BarChart2,
                  title: language === 'de' ? 'Globale Sichtbarkeit' : 'Global Visibility',
                  desc:
                    language === 'de'
                      ? 'Erreichen Sie internationale Märkte mit mehrsprachiger Unterstützung.'
                      : 'Reach international markets with multilingual support.',
                },
                {
                  icon: FileText,
                  title: language === 'de' ? 'Nahtlose Integration' : 'Seamless Integration',
                  desc:
                    language === 'de'
                      ? 'Verbinden Sie Ihre ERP-Systeme wie SAP, Oracle oder individuelle Lösungen.'
                      : 'Connect your ERP systems like SAP, Oracle, or custom solutions.',
                },
                {
                  icon: Server,
                  title: language === 'de' ? 'Industrie 4.0-fähig' : 'Industry 4.0 Ready',
                  desc:
                    language === 'de'
                      ? 'Nutzen Sie Echtzeit-Produktionsdaten und KI-gestützte Analysen.'
                      : 'Leverage real-time production data and AI-supported analytics.',
                },
                {
                  icon: Lock,
                  title: language === 'de' ? 'Datensicherheit & Vertrauen' : 'Data Security & Trust',
                  desc:
                    language === 'de'
                      ? 'Schützen Sie Ihre Daten mit Ende-zu-Ende-Verschlüsselung.'
                      : 'Protect your data with end-to-end encryption.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  data-tooltip-id={`feature-${index}`}
                  data-tooltip-content={item.title}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="font-medium text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigation('/explore')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                data-tooltip-id="explore-features"
                data-tooltip-content={language === 'de' ? 'Plattform erkunden' : 'Explore Platform'}
              >
                {language === 'de' ? 'Plattform erkunden' : 'Explore Platform'} <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Our Story Section */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.2 }}
  className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
>
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
  <div className="relative z-10">
    <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      {translations.ourStory}
    </h2>
    <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.ourStoryDesc}</p>
    <div className="bg-gray-800/50 rounded-lg overflow-hidden mb-6 border border-gray-700">
      <div className="relative aspect-video bg-gray-700 flex items-center justify-center">
        <video
          src="/made-in-germany-for-manufacturers.mp4"
          controls
          className="w-full h-full object-cover"
          aria-label="MADE IN GERMANY Story Video"
        >
          <track kind="captions" srcLang="en" label="English" />
          <track kind="captions" srcLang="de" label="Deutsch" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <p className="text-center text-lg text-gray-300 mb-6">
      {language === 'de'
        ? 'Video: „MADE IN GERMANY © – Werte, die uns verbinden“'
        : 'Video: “MADE IN GERMANY © – Values That Connect Us”'}
    </p>
    <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
      {language === 'de'
        ? 'MADE IN GERMANY © ist mehr als ein Siegel – es ist eine Verpflichtung.'
        : 'MADE IN GERMANY © is more than a seal – it’s a commitment.'}
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNavigation('/stories')}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        data-tooltip-id="stories-button"
        data-tooltip-content={language === 'de' ? 'Weitere Geschichten entdecken' : 'Discover More Stories'}
      >
        <Search size={16} /> {language === 'de' ? 'Weitere Geschichten entdecken' : 'Discover More Stories'}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNavigation('/share-story')}
        className="border border-gray-600 bg-gray-800 text-gray-200 px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
        data-tooltip-id="share-story-button"
        data-tooltip-content={language === 'de' ? 'Ihre Geschichte teilen' : 'Share Your Story'}
      >
        <Users size={16} /> {language === 'de' ? 'Ihre Geschichte teilen' : 'Share Your Story'}
      </motion.button>
    </div>
  </div>
</motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.faq}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">{translations.faqDesc}</p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  data-tooltip-id={`faq-${index}`}
                  data-tooltip-content={faq.question}
                >
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={expandedFaq === index}
                  >
                    <div className="flex items-center">
                      <faq.icon size={20} className="text-blue-400 mr-2" />
                      <span className="font-medium text-white">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="mt-2 text-gray-300">{faq.answer}</div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 bg-blue-900/20 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center border border-gray-700">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-xl font-medium text-white">
                  {language === 'de' ? 'Weitere Fragen?' : 'More Questions?'}
                </h3>
                <p className="text-gray-300">
                  {language === 'de'
                    ? 'Kontaktieren Sie unser Support-Team für weitere Unterstützung.'
                    : 'Contact our support team for further assistance.'}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigation('/contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                data-tooltip-id="contact-button"
                data-tooltip-content={language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
              >
                {language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'} <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {translations.callToAction}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">{translations.callToActionDesc}</p>
              </div>
              <div className="max-w-md text-center md:text-right">
                <p className="text-lg font-semibold mb-2 text-white">
                  {language === 'de' ? 'Schließen Sie sich 50000+ Herstellern an' : 'Join 50,000+ Manufacturers'}
                </p>
                <p className="text-gray-300">
                  {language === 'de'
                    ? 'Treten Sie einem wachsenden Netzwerk bei, das Ihre Produkte global präsentiert.'
                    : 'Join a growing network that showcases your products globally.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                  data-tooltip-id={`benefit-${index}`}
                  data-tooltip-content={benefit.title}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="font-medium text-lg mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigation('/start')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                data-tooltip-id="start-button"
                data-tooltip-content={language === 'de' ? 'Ihre Reise beginnen' : 'Start Your Journey'}
              >
                <ArrowRight size={16} /> {language === 'de' ? 'Ihre Reise beginnen' : 'Start Your Journey'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigation('/learn-more')}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                data-tooltip-id="learn-more-button"
                data-tooltip-content={language === 'de' ? 'Erfahren Sie mehr' : 'Learn More'}
              >
                <Info size={16} /> {language === 'de' ? 'Erfahren Sie mehr' : 'Learn More'}
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Tooltips */}
        {[
          'join-button', 'explore-button', 'upload-button', 'orders-button', 'join-values',
          'explore-features', 'stories-button', 'share-story-button', 'contact-button',
          'start-button', 'learn-more-button', 'back-tooltip', 'next-tooltip', 'finish-tooltip',
        ].map((id) => (
          <Tooltip
            key={id}
            id={id}
            place="top"
            effect="solid"
            className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
            style={{ transform: 'translateX(-50%)' }}
            afterShow={() => {
              const tooltip = document.querySelector(`[data-tooltip-id="${id}"]`);
              if (tooltip) {
                tooltip.insertAdjacentHTML(
                  'beforeend',
                  '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
                );
              }
            }}
          />
        ))}
        {benefits.map((_, index) => (
          <Tooltip
            key={`benefit-${index}`}
            id={`benefit-${index}`}
            place="top"
            effect="solid"
            className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
            style={{ transform: 'translateX(-50%)' }}
            afterShow={() => {
              const tooltip = document.querySelector(`[data-tooltip-id="benefit-${index}"]`);
              if (tooltip) {
                tooltip.insertAdjacentHTML(
                  'beforeend',
                  '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
                );
              }
            }}
          />
        ))}
        {faqs.map((_, index) => (
          <Tooltip
            key={`faq-${index}`}
            id={`faq-${index}`}
            place="top"
            effect="solid"
            className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
            style={{ transform: 'translateX(-50%)' }}
            afterShow={() => {
              const tooltip = document.querySelector(`[data-tooltip-id="faq-${index}"]`);
              if (tooltip) {
                tooltip.insertAdjacentHTML(
                  'beforeend',
                  '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
                );
              }
            }}
          />
        ))}
        {['Verkaufszahlen', 'Bestellungen', 'Rücksendungen', 'Bewertungen'].map((title) => (
          <Tooltip
            key={`metric-${title}`}
            id={`metric-${title}`}
            place="top"
            effect="solid"
            className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
            style={{ transform: 'translateX(-50%)' }}
            afterShow={() => {
              const tooltip = document.querySelector(`[data-tooltip-id="metric-${title}"]`);
              if (tooltip) {
                tooltip.insertAdjacentHTML(
                  'beforeend',
                  '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
                );
              }
            }}
          />
        ))}
        {['why-join-0', 'why-join-1', 'why-join-2', 'why-join-3'].map((id) => (
          <Tooltip
            key={id}
            id={id}
            place="top"
            effect="solid"
            className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
            style={{ transform: 'translateX(-50%)' }}
            afterShow={() => {
              const tooltip = document.querySelector(`[data-tooltip-id="${id}"]`);
              if (tooltip) {
                tooltip.insertAdjacentHTML(
                  'beforeend',
                  '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
                );
              }
            }}
          />
        ))}
        {['value-0', 'value-1', 'value-2', 'value-3'].map((id) => (
          <Tooltip
            key={id}
            id={id}
            place="top"
            effect="solid"
            className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
            style={{ transform: 'translateX(-50%)' }}
            afterShow={() => {
              const tooltip = document.querySelector(`[data-tooltip-id="${id}"]`);
              if (tooltip) {
                tooltip.insertAdjacentHTML(
                  'beforeend',
                  '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
                );
              }
            }}
          />
        ))}
        {['feature-0', 'feature-1', 'feature-2', 'feature-3'].map((id) => (
          <Tooltip
            key={id}
            id={id}
            place="top"
            effect="solid"
            className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
            style={{ transform: 'translateX(-50%)' }}
            afterShow={() => {
              const tooltip = document.querySelector(`[data-tooltip-id="${id}"]`);
              if (tooltip) {
                tooltip.insertAdjacentHTML(
                  'beforeend',
                  '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
                );
              }
            }}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default ManufacturersSection;