import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Calendar } from 'lucide-react';
import {
  Heart,
  Globe,
  Shield,
  Zap,
  Users,
  MessageCircle,
  FileText,
  ExternalLink,
  User,
  Mail,
  Award,
  Clock,
  ArrowRight,
} from 'lucide-react';

// Interfaces
interface Tab {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface Commitment {
  text: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface Audience {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface Translations {
  heroTitle: string;
  heroSubtitle1: string;
  heroSubtitle2: string;
  meetTeam: string;
  contact: string;
  aboutUs: string;
  values: string;
  valuesDesc: string;
  mission: string;
  missionTitle: string;
  missionDesc1: string;
  missionDesc2: string;
  whyWeDo: string;
  whyWeDoTitle: string;
  whyWeDoPoints: string[];
  whyWeDoQuote: string;
  forWhom: string;
  forWhomTitle: string;
  founder: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaJoin: string;
  ctaContact: string;
  ctaFooter: string;
  testimonials: string;
  watchVideo: string;
}

// Static Translations
const TRANSLATIONS: Record<string, Translations> = {
  de: {
    heroTitle: 'MADE IN GERMANY © – MEHR ALS EIN MARKTPLATZ. EINE HALTUNG.',
    heroSubtitle1: 'Willkommen bei MADE IN GERMANY © – einer Plattform,',
    heroSubtitle2: 'die deutsche Exzellenz, Verantwortung und Innovationskraft vereint.',
    meetTeam: 'Unser Team kennenlernen',
    contact: 'Kontakt aufnehmen',
    aboutUs: 'ÜBER UNS',
    values: 'UNSERE WERTE',
    valuesDesc:
      'MADE IN GERMANY © ist unser Beitrag zu einer Welt, in der wirtschaftlicher Erfolg mit ethischem Handeln Hand in Hand geht.',
    mission: 'Unsere Mission',
    missionTitle: 'Unsere Mission',
    missionDesc1: 'Unsere Mission ist es, Deutschlands wirtschaftliche Stärke in eine globale, faire und nachhaltige Zukunft zu übersetzen.',
    missionDesc2:
      'Wir bieten nicht nur Produkte – wir bieten Vertrauen, Zuverlässigkeit, Transparenz und echte Verbindung. Jeder, der bei uns mitmacht – ob Hersteller, Käufer oder Unterstützer – wird Teil einer Bewegung.',
    whyWeDo: 'Warum wir tun, was wir tun',
    whyWeDoTitle: 'Warum wir tun, was wir tun',
    whyWeDoPoints: [
      'Weil wir daran glauben, dass Exzellenz nicht am Werkstor endet.',
      'Weil wir die Geschichten hinter den Produkten sichtbar machen wollen.',
      'Weil wir Verantwortung ernst nehmen – für Menschen, Umwelt und Zukunft.',
    ],
    whyWeDoQuote:
      'MADE IN GERMANY © ist unser Beitrag zu einer Welt, in der wirtschaftlicher Erfolg mit ethischem Handeln Hand in Hand geht.',
    forWhom: 'Für wen wir da sind',
    forWhomTitle: 'Für wen wir da sind',
    founder: 'DER GRÜNDER',
    ctaTitle: 'Lust, Teil der Veränderung zu sein?',
    ctaDesc: 'Ob als Produzent, Käufer oder Unterstützer – bei uns findest du deinen Platz.',
    ctaJoin: 'Jetzt mitmachen',
    ctaContact: 'Kontakt aufnehmen',
    ctaFooter: 'Sei Teil der Zukunft des „MADE IN GERMANY ©“',
    testimonials: 'STIMMEN AUS UNSERER GEMEINSCHAFT',
    watchVideo: 'Video ansehen',
  },
  en: {
    heroTitle: 'MADE IN GERMANY © – MORE THAN A MARKETPLACE. A COMMITMENT.',
    heroSubtitle1: 'Welcome to MADE IN GERMANY © – a platform',
    heroSubtitle2: 'that unites German excellence, responsibility, and innovation.',
    meetTeam: 'Meet Our Team',
    contact: 'Get in Touch',
    aboutUs: 'ABOUT US',
    values: 'OUR VALUES',
    valuesDesc:
      'MADE IN GERMANY © is our contribution to a world where economic success goes hand in hand with ethical action.',
    mission: 'Our Mission',
    missionTitle: 'Our Mission',
    missionDesc1: 'Our mission is to translate Germany’s economic strength into a global, fair, and sustainable future.',
    missionDesc2:
      'We don’t just offer products – we offer trust, reliability, transparency, and genuine connection. Everyone who joins us – whether manufacturer, buyer, or supporter – becomes part of a movement.',
    whyWeDo: 'Why We Do What We Do',
    whyWeDoTitle: 'Why We Do What We Do',
    whyWeDoPoints: [
      'Because we believe excellence doesn’t end at the factory gate.',
      'Because we want to make the stories behind the products visible.',
      'Because we take responsibility seriously – for people, the environment, and the future.',
    ],
    whyWeDoQuote:
      'MADE IN GERMANY © is our contribution to a world where economic success goes hand in hand with ethical action.',
    forWhom: 'Who We Are Here For',
    forWhomTitle: 'Who We Are Here For',
    founder: 'THE FOUNDER',
    ctaTitle: 'Ready to Be Part of the Change?',
    ctaDesc: 'Whether as a producer, buyer, or supporter – you’ll find your place with us.',
    ctaJoin: 'Join Now',
    ctaContact: 'Get in Touch',
    ctaFooter: 'Be part of the future of “MADE IN GERMANY ©”',
    testimonials: 'VOICES FROM OUR COMMUNITY',
    watchVideo: 'Watch Video',
  },
};

// AboutUsSection Component
const AboutUsSection: React.FC<{ language?: string }> = ({ language = 'de' }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const translations = TRANSLATIONS[language] || TRANSLATIONS['de'];

  const tabs: Tab[] = useMemo(
    () => [
      { name: translations.mission, icon: Globe },
      { name: translations.whyWeDo, icon: Heart },
      { name: translations.forWhom, icon: Users },
    ],
    [translations]
  );

  const commitments: Commitment[] = useMemo(
    () => [
      { text: language === 'de' ? '100% Transparenz' : '100% Transparency', icon: Shield },
      { text: language === 'de' ? '100% MADE IN GERMANY ©' : '100% MADE IN GERMANY ©', icon: Award },
      { text: language === 'de' ? '100% Haltung' : '100% Commitment', icon: Zap },
    ],
    [language]
  );

  const audiences: Audience[] = useMemo(
    () => [
      {
        title: language === 'de' ? 'Für Hersteller' : 'For Manufacturers',
        description:
          language === 'de'
            ? 'Sichtbarkeit, Vertrauen, neue Märkte – mit einer Plattform, die eure Geschichte würdigt.'
            : 'Visibility, trust, new markets – with a platform that honors your story.',
        icon: FileText,
      },
      {
        title: language === 'de' ? 'Für Einkäufer weltweit' : 'For Global Buyers',
        description:
          language === 'de'
            ? 'Zugang zu geprüften Produkten, klare Prozesse, echte Ansprechpartner – alles an einem Ort.'
            : 'Access to verified products, clear processes, real contacts – all in one place.',
        icon: Globe,
      },
      {
        title: language === 'de' ? 'Für NGOs und Unterstützer' : 'For NGOs and Supporters',
        description:
          language === 'de'
            ? 'Gemeinsam setzen wir Zeichen. Ob beim Thema Wasser, Bildung oder Umwelt – wir öffnen unsere Plattform für Projekte mit Sinn.'
            : 'Together, we make a difference. Whether it’s water, education, or the environment – we open our platform to meaningful projects.',
        icon: MessageCircle,
      },
    ],
    [language]
  );

  const handleTabChange = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  // Handle video loading errors
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video failed to load:', e);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center w-full space-y-16 py-12 px-4 bg-[#FFFFFF] font-inter"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2 autemx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-5" />
        <div className="relative z-10 h-screen max-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0 bg-[#0B111F]">
            {/* Placeholder for background image/video */}
          </div>
          <div className="absolute inset-0 bg-black/40 z-2"></div>
          <div className="z-10 flex flex-col justify-center items-start text-left max-w-3xl mx-0 ml-6 md:ml-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              {translations.heroTitle}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl mb-4 font-light text-gray-300"
            >
              {translations.heroSubtitle1}
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl mb-8 font-light text-gray-300"
            >
              {translations.heroSubtitle2}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                aria-label={translations.meetTeam}
              >
                <User size={16} />
                {translations.meetTeam}
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                aria-label={translations.contact}
              >
                <Mail size={16} />
                {translations.contact}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-0" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.aboutUs}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 mb-4">
                  {language === 'de'
                    ? 'Wir stehen für Qualität, aber auch für Haltung.\nFür Präzision, aber auch für Mitgefühl.\nFür Fortschritt, aber nie auf Kosten anderer.'
                    : 'We stand for quality, but also for commitment.\nFor precision, but also for compassion.\nFor progress, but never at the expense of others.'}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {language === 'de'
                    ? 'MADE IN GERMANY © ist weit mehr als ein Gütesiegel – es ist ein Versprechen. Wir verbinden Menschen, Märkte und Ideen weltweit. Mit unserer Plattform machen wir die Kraft deutscher Produkte sichtbar – und zeigen gleichzeitig: Wir stehen für eine neue Ära unternehmerischer Verantwortung.'
                    : 'MADE IN GERMANY © is far more than a quality seal – it’s a promise. We connect people, markets, and ideas worldwide. With our platform, we make the strength of German products visible – and show at the same time: We stand for a new era of entrepreneurial responsibility.'}
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700"
                whileHover={{ scale: 1.01, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    {...(isVideoPlaying ? { controls: true, autoPlay: true } : {})}
                    src="/made-in-germany-video-history.mp4"
                    onEnded={() => setIsVideoPlaying(false)}
                    onError={handleVideoError}
                    muted={!isVideoPlaying}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {!isVideoPlaying && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.button
                          className="w-16 h-16 rounded-full bg-gray-800/50 backdrop-blur flex items-center justify-center border border-gray-700 transition-colors duration-300 hover:bg-gray-800/70 hover:border-gray-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                          onClick={() => setIsVideoPlaying(true)}
                          aria-label="Play video"
                        >
                          <Play size={24} className="text-blue-400 ml-1" />
                        </motion.button>
                      </div>
                    </>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1">
                      {translations.aboutUs}
                    </h3>
                    <p className="text-gray-300 text-sm hidden md:block leading-relaxed">
                      {language === 'de' ? 'Unsere Geschichte – Video' : 'Our Story – Video'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission and Values Tabs Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-0" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center mb-10"
          >
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.values}
            </h2>
            <p className="text-lg text-center max-w-3xl text-gray-300 leading-relaxed mb-4">
              {translations.valuesDesc}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTabChange(index)}
                className={`flex items-center gap-2 py-3 px-6 rounded-lg transition-all font-medium ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'border border-gray-600 bg-gray-800 text-gray-200 hover:bg-gray-700'
                }`}
                aria-label={tab.name}
              >
                <tab.icon size={18} />
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
          >
            {activeTab === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {translations.missionTitle}
                </h3>
                <p className="text-xl text-gray-300 mb-4">{translations.missionDesc1}</p>
                <p className="text-lg text-gray-300 leading-relaxed">{translations.missionDesc2}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {commitments.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="flex flex-col items-center text-center bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <div className="w-12 h-12 mb-4 bg-blue-900/50 rounded-full flex items-center justify-center">
                        <item.icon size={24} className="text-blue-400" />
                      </div>
                      <p className="text-xl font-bold text-white">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {translations.whyWeDoTitle}
                </h3>
                <div className="space-y-4">
                  {translations.whyWeDoPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 mt-1 flex items-center justify-center bg-blue-900/50 rounded-full flex-shrink-0">
                        <Zap size={16} className="text-blue-400" />
                      </div>
                      <p className="text-lg text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative mt-8 p-8 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 text-4xl text-gray-500">"</div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 text-4xl text-gray-500">"</div>
                  <p className="text-lg italic text-gray-300 leading-relaxed">{translations.whyWeDoQuote}</p>
                </motion.div>
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {translations.forWhomTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {audiences.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="flex flex-col bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <div className="w-12 h-12 mb-4 bg-blue-900/50 rounded-full flex items-center justify-center">
                        <item.icon size={24} className="text-blue-400" />
                      </div>
                      <h4 className="font-medium text-xl mb-3 text-white">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-0" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center mb-10"
          >
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.founder}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="md:col-span-4 flex flex-col items-center"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-600">
                <img
                  src="/founder-from-made-in-germany-andreas-thommen.jpg"
                  alt="Founder Andreas Thommen"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="md:col-span-8"
            >
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <p className="text-xl text-gray-300 leading-relaxed italic mb-6">
                  {language === 'de'
                    ? '„Ich habe MADE IN GERMANY © gegründet, weil ich überzeugt bin, dass wir mehr können – als nur verkaufen. Wir können inspirieren, verbinden, aufbauen und gestalten. Diese Plattform ist unser gemeinsames Projekt. Für Deutschland. Für die Welt.“'
                    : '“I founded MADE IN GERMANY © because I’m convinced we can do more than just sell. We can inspire, connect, build, and shape. This platform is our shared project. For Germany. For the world.”'}
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-bold text-white">– Andreas Thommen</p>
                    <p className="text-gray-300 text-sm">
                      {language === 'de' ? 'Gründer von MADE IN GERMANY ©' : 'Founder of MADE IN GERMANY ©'}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-auto">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-full hover:bg-gray-700 transition-all border border-gray-600"
                      aria-label="External Link"
                    >
                      <ExternalLink size={14} className="text-gray-300" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href="#"
                      className="w-8 h-8 flex items-center justify-center bg-gray-800/50 rounded-full hover:bg-gray-700 transition-all border border-gray-600"
                      aria-label="Email"
                    >
                      <Mail size={14} className="text-gray-300" />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <p className="text-2xl font-bold text-white">2023</p>
                  <p className="text-gray-300 text-sm">{language === 'de' ? 'Gründungsjahr' : 'Founded'}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <p className="text-2xl font-bold text-white">50,000+</p>
                  <p className="text-gray-300 text-sm">{language === 'de' ? 'Hersteller' : 'Manufacturers'}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="bg-gray-800/50 p-4 rounded-lg text-center border border-gray-700"
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                >
                  <p className="text-2xl font-bold text-white">{language === 'de' ? 'Global' : 'Global'}</p>
                  <p className="text-gray-300 text-sm">{language === 'de' ? 'Reichweite' : 'Reach'}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-0" />
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {translations.testimonials}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: language === 'de'
                  ? 'Als Distributor in Japan war es immer schwierig, Hersteller zu finden, die ihre Qualitätsversprechen wirklich einhalten. Die MADE IN GERMANY © Plattform hat unseren Beschaffungsprozess revolutioniert.'
                  : 'As a distributor in Japan, finding manufacturers who truly deliver on their quality promises has always been challenging. The MADE IN GERMANY © platform has transformed our procurement process.',
                name: 'Takashi M.',
                role: language === 'de' ? 'Technologie-Distributor, Tokio' : 'Technology Distributor, Tokyo',
              },
              {
                quote: language === 'de'
                  ? 'Unser Familienunternehmen stellt seit drei Generationen Präzisionswerkzeuge her. Diese Plattform hat uns mit globalen Partnern verbunden, die unsere Qualitätswerte schätzen.'
                  : 'Our family business has been crafting precision tools for three generations. This platform has connected us with global partners who truly value our commitment to quality.',
                name: 'Klaus W.',
                role: language === 'de' ? 'Werkzeughersteller, Bayern' : 'Tool Manufacturer, Bavaria',
              },
              {
                quote: language === 'de'
                  ? 'Der Fokus auf Nachhaltigkeit neben Qualität macht diese Plattform besonders. Als verantwortungsbewusster Einkäufer finde ich hier Produkte, die unseren Anforderungen entsprechen.'
                  : 'The emphasis on sustainability alongside quality makes this platform special. As a responsible buyer, I can find products that meet our specifications.',
                name: 'Sarah L.',
                role: language === 'de' ? 'Einkaufsdirektorin, Kanada' : 'Procurement Director, Canada',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700"
                whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none z-0" />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center"
          >
            {translations.ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl text-center mx-auto"
          >
            {translations.ctaDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              aria-label={translations.ctaJoin}
            >
              <Users size={16} />
              {translations.ctaJoin}
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
              aria-label={translations.ctaContact}
            >
              <Mail size={16} />
              {translations.ctaContact}
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex items-center justify-center"
          >
            <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700">
              <Clock size={16} className="text-gray-300 mr-2" />
              <p className="text-gray-300 text-sm">{translations.ctaFooter}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUsSection;