import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, User, Globe, Facebook, Instagram, Mail, ArrowRight, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Props interface
interface ComingSoonProps {
  language?: string;
}

// Single language implementation
const translations = {
  mainHeadingPart1: "Discover ",
  mainHeadingPart2: "German Excellence",
  subHeading: "Connecting Global Markets with Premium Quality",
  introParagraph: "Join a revolutionary platform that brings German-engineered products to the world, built on precision, quality, and innovation.",
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  countdownTagline: "Get ready to launch your business with world-class German quality!",
  feature1Title: "German Engineering",
  feature1Description: "Premium quality products with renowned reliability and precision engineered in Germany, trusted by industries worldwide for over a century.",
  feature2Title: "Innovative System",
  feature2Description: "Benefit from our cutting-edge business model, proven operational methodology, and seamless integration with global supply chains.",
  feature3Title: "Comprehensive Support",
  feature3Description: "Ongoing training, marketing assistance, and expert support from our experienced team to ensure your success in every market.",
  feature4Title: "Global Reach",
  feature4Description: "Access a network of international partners and markets, enabling you to scale your business with German quality at its core.",
  newsletterTitle: "Join Our Exclusive Launch List",
  newsletterDescription: "Be among the first to receive our franchise information package and early access opportunities.",
  privacyAssurance: "We value your privacy. Your email will only be used to send launch updates and exclusive offers.",
  emailPlaceholder: "Enter your email address",
  notifyMe: "Notify Me",
  thankYouMessage: "Thank you for your interest! We'll notify you when we launch.",
  founderTitle: "About the Founder",
  founderDescription: "Andreas Thommen, born in 1972 in Bremen, is an entrepreneur and visionary, leading this platform to connect German industry with global customers.",
  founderQuote: "Our mission is to make German quality accessible to every corner of the globe, empowering businesses with excellence.",
  founderAchievements: [
    "Founded multiple successful manufacturing ventures",
    "Awarded Bremen Entrepreneur of the Year 2018",
    "Pioneered global supply chain innovations"
  ],
  founderLocation: "Bremen, Germany",
  connect: "Connect",
  contactEmail: "info@made-in-germany.global",
  sendEmail: "Send Email",
  learnMore: "Learn More",
  joinNow: "Join Now"
};

// Utility to generate meta description
const getMetaDescription = (translations) => {
  const description = `${translations.subHeading} ${translations.feature1Description}`;
  return description.length > 160 ? description.slice(0, 157) + '...' : description;
};

const ComingSoon: React.FC<ComingSoonProps> = ({ language = 'en' }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const launchDate = new Date('2025-07-18T00:00:00');
  const totalDays = Math.floor((launchDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) + 30;
  const progress = Math.min(100, ((30 - days) / 30) * 100);

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) clearInterval(countdown);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  const franchiseText = translations.mainHeadingPart1;
  const systemText = translations.mainHeadingPart2;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{`${franchiseText}${systemText} | ${translations.subHeading}`}</title>
        <meta name="description" content={getMetaDescription(translations)} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="German franchise, quality products, bulk orders, global markets" />
        <link rel="canonical" href="https://made-in-germany.global" />
        <meta property="og:title" content={`${franchiseText}${systemText}`} />
        <meta property="og:description" content={getMetaDescription(translations)} />
        <meta property="og:url" content="https://made-in-germany.global" />
        <meta property="og:image" content="https://made-in-germany.global/og-image.webp" />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
        {/* Hero Section */}
        <motion.section
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl w-full text-left">
            <motion.div variants={textVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {franchiseText}{systemText}
              </h1>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
                {translations.subHeading}
              </p>
              <p className="text-md text-gray-400 mb-8 max-w-2xl leading-relaxed">
                {translations.introParagraph}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] w-full sm:w-auto"
                >
                  {translations.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 bg-gray-800 hover:bg-gray-700 text-gray-200 px-10 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 w-full sm:w-auto"
                >
                  {translations.joinNow} <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Countdown Section */}
        <motion.section
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
              LAUNCH COUNTDOWN
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">{translations.countdownTagline}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { value: days, label: translations.days },
                { value: hours, label: translations.hours },
                { value: minutes, label: translations.minutes },
                { value: seconds, label: translations.seconds },
              ].map((item, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center"
                >
                  <span className="text-4xl md:text-5xl font-bold text-white">{item.value}</span>
                  <span className="text-gray-400 font-medium mt-1 block uppercase tracking-wider text-sm">{item.label}</span>
                </motion.article>
              ))}
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
              WHY CHOOSE US
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
                  title: translations.feature1Title,
                  description: translations.feature1Description,
                },
                {
                  icon: <Zap className="h-6 w-6 text-blue-400" />,
                  title: translations.feature2Title,
                  description: translations.feature2Description,
                },
                {
                  icon: <Users className="h-6 w-6 text-blue-400" />,
                  title: translations.feature3Title,
                  description: translations.feature3Description,
                },
                {
                  icon: <Globe className="h-6 w-6 text-blue-400" />,
                  title: translations.feature4Title,
                  description: translations.feature4Description,
                },
              ].map((feature, index) => (
                <motion.article
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                >
                  <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About the Founder Section */}
        <motion.section
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
              MEET OUR FOUNDER
            </h2>
            <motion.div variants={textVariants} className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-shrink-0">
                <motion.div whileHover={{ scale: 1.03 }} className="relative">
                  <div className="w-56 h-56 rounded-lg overflow-hidden border border-gray-700 bg-gray-800">
                    <img
                      src="/founder-from-made-in-germany-andreas-thommen.jpg"
                      alt="Founder Andreas Thommen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div variants={textVariants} className="flex items-center justify-center mt-6 space-x-4">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/andreasxthommen" },
                    { Icon: Instagram, href: "https://www.instagram.com/andreasxthommen" },
                    { Icon: Globe, href: "https://www.made-in-germany.uk" },
                  ].map(({ Icon, href }, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      href={href}
                      className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <motion.div variants={textVariants}>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 mb-4 inline-block">
                    {translations.founderTitle}
                  </span>
                  <h3 className="text-3xl font-bold mb-6 text-white">Andreas Thommen</h3>
                </motion.div>
                <motion.p variants={textVariants} className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {translations.founderDescription}
                </motion.p>
                <motion.blockquote variants={textVariants} className="text-gray-200 italic mb-6 border-l-4 border-blue-400 pl-4">
                  "{translations.founderQuote}"
                </motion.blockquote>
                <motion.ul variants={textVariants} className="text-gray-300 mb-6 list-disc list-inside">
                  {translations.founderAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-blue-400" /> {achievement}
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={textVariants} className="flex items-center text-gray-400 mb-8 justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{translations.founderLocation}</span>
                </motion.div>
                <motion.div variants={textVariants}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  >
                    {translations.connect} <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div variants={textVariants}>
              <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {translations.newsletterTitle}
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">{translations.newsletterDescription}</p>
              <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">{translations.privacyAssurance}</p>
              <div className="flex flex-col items-center gap-4 w-full max-w-lg mx-auto">
                <p className="text-white text-lg font-medium">{translations.contactEmail}</p>
                <motion.a
                  href={`mailto:${translations.contactEmail}`}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-1 transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                >
                  <Mail className="h-5 w-5 mr-2" /> {translations.sendEmail}
                </motion.a>
                <div className="flex items-center justify-center mt-4 space-x-4">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/madeingermany" },
                    { Icon: Instagram, href: "https://www.instagram.com/madeingermany" },
                    { Icon: Globe, href: "https://www.made-in-germany.uk" },
                  ].map(({ Icon, href }, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.2, boxShadow: '0 0 10px rgba(59,130,246,0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      href={href}
                      className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-blue-900/20 text-green-300 rounded-lg border border-green-500/20"
                  role="alert"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {translations.thankYouMessage}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ComingSoon;