import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Zap, Globe, Truck, Users, Play } from 'lucide-react';

interface PlatformSectionProps {
  language?: string;
}

interface Translation {
  title: string;
  subtitle: string;
  description: string;
  benefits: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  callToAction: string;
  centralPlatformTitle: string;
  centralPlatformText: string;
  centralPlatformItems: string[];
  qualityExcellenceTitle: string;
  qualityExcellenceText: string;
  qualityExcellenceItems: string[];
}

const TRANSLATIONS: Record<string, Translation> = {
  en: {
    title: "MADE IN GERMANY ©",
    subtitle: "Connecting German Quality with Global Demand",
    description: "MADE IN GERMANY © connects German quality with global demand through a central platform. Finally, MADE IN GERMANY © becomes accessible to all - transparent, direct, and with real added value for manufacturers and buyers.",
    benefits: {
      title: "Platform Benefits",
      items: [
        {
          icon: "check",
          title: "Transparency",
          description: "Clear origin verification and quality standards"
        },
        {
          icon: "zap",
          title: "Direct Access",
          description: "Connect directly with German manufacturers"
        },
        {
          icon: "globe",
          title: "Global Reach",
          description: "Access international markets seamlessly"
        },
        {
          icon: "truck",
          title: "Streamlined Logistics",
          description: "Efficient shipping and delivery solutions"
        },
        {
          icon: "users",
          title: "Community",
          description: "Join a network of quality-focused businesses"
        }
      ]
    },
    callToAction: "Explore the Platform",
    centralPlatformTitle: "Central Platform",
    centralPlatformText: "Our innovative platform connects German manufacturers directly with international buyers, creating a transparent ecosystem for high-quality products from Germany. No intermediaries, no compromises – just genuine German quality.",
    centralPlatformItems: [
      "Verified German manufacturers with highest quality standards",
      "Intelligent matching between supply and demand",
      "Data security and transparency through modern technology",
      "Streamlined collaboration for efficient partnerships"
    ],
    qualityExcellenceTitle: "Quality Excellence",
    qualityExcellenceText: "German manufacturers are renowned for their commitment to excellence, delivering products that set global benchmarks for quality and innovation.",
    qualityExcellenceItems: [
      "Unmatched precision in engineering and production",
      "Durability and reliability built into every product",
    ]
  }
};

const PlatformSection: React.FC<PlatformSectionProps> = ({ language = 'en' }) => {
  const translations = TRANSLATIONS.en;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'check': return <CheckCircle className="w-8 h-8 text-blue-400" />;
      case 'zap': return <Zap className="w-8 h-8 text-blue-400" />;
      case 'globe': return <Globe className="w-8 h-8 text-blue-400" />;
      case 'truck': return <Truck className="w-8 h-8 text-blue-400" />;
      case 'users': return <Users className="w-8 h-8 text-blue-400" />;
      default: return <CheckCircle className="w-8 h-8 text-blue-400" />;
    }
  };

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-center mb-10">
      <section className="max-w-7xl w-full">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-gray-900 to-black text-white rounded-t-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
          />
          <div className="relative px-8 py-16 z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="md:w-1/2 max-w-3xl"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {translations.title}
                </h2>
                <div className="h-1 w-24 bg-blue-400 mb-6 shadow-[0_0_10px_rgba(59,130,246,0.7)]"></div>
                <h3 className="text-xl md:text-2xl font-medium mb-6 text-white">
                  {translations.subtitle}
                </h3>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                  {translations.description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2 h-80 relative rounded-lg overflow-hidden group bg-gray-800/50 border border-gray-700"
                whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              >
                <img
                  src="/made-in-germany-vision.png"
                  alt="MADE IN GERMANY © Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black/40 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div
                  className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
              </motion.div>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              >
                I'm a German Manufacturer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
              >
                I'm an International Buyer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2 col-span-2"
              >
                {translations.callToAction}
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Platform Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-16 px-8 rounded-b-2xl shadow-2xl text-white bg-gradient-to-br from-gray-900 to-black ring-1 ring-white/20"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {translations.benefits.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {translations.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 0 15px rgba(59,130,246,0.5)'
                  }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 flex flex-col items-center text-center transition-all duration-300"
                >
                  <div className="bg-gray-700/50 p-4 rounded-full mb-4 border border-gray-600">
                    {getIcon(benefit.icon)}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h4>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              >
                I'm a German Manufacturer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2"
              >
                I'm an International Buyer
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Feature Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
          />
          <div className="relative grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <motion.div
                className="relative rounded-lg overflow-hidden cursor-pointer group bg-gray-800/50 border border-gray-700"
                onClick={handleVideoToggle}
                whileHover={{ boxShadow: '0 0 20px rgba(59,130,246,0.7)', filter: 'brightness(1.05)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <video
                    ref={videoRef}
                    src="/made-in-germany-video-welcome-english.mp4"
                    className="w-full h-full object-cover"
                    muted={false}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                  {!isPlaying && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gray-800/50 backdrop-blur flex items-center justify-center border border-gray-700 transition-colors duration-300 group-hover:bg-gray-800/70 group-hover:border-gray-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      >
                        <Play size={24} className="text-blue-400 ml-1" />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <div className="p-8 md:p-12 bg-gray-800/50 border-t border-gray-700">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                  {translations.qualityExcellenceTitle}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {translations.qualityExcellenceText}
                </p>
                <div className="space-y-4">
                  {translations.qualityExcellenceItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <div className="bg-gray-700/50 rounded-full p-1 mt-0.5 border border-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                      </div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-800/50 border-l border-gray-700">
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                  {translations.centralPlatformTitle}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {translations.centralPlatformText}
                </p>
                <div className="space-y-4">
                  {translations.centralPlatformItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                      whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    >
                      <div className="bg-gray-700/50 rounded-full p-1 mt-0.5 border border-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                      </div>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
                  >
                    German Manufacturer
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-gray-600 bg-gray-800 text-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] flex items-center justify-center gap-2 col-span-2"
                  >
                    International Buyer
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PlatformSection;