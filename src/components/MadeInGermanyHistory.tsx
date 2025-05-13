import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { 
  Clock, 
  Wrench, 
  Rocket, 
  Factory, 
  Globe, 
  Car, 
  Leaf, 
  Lightbulb, 
  Cpu, 
  Sun, 
  Users,
  Calendar,
  CheckCircle,
  ChevronRight,
  X
} from 'lucide-react';

// Define the props interface
const MadeInGermanyHistory = ({ language = 'en' }) => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  // Close onboarding modal
  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
  };

  // Auto-rotate active sections
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Translations
  const t = {
    heroTitle: "MADE IN GERMANY ©\nHow Became a Global Brand",
    heroDescription: "Discover the fascinating journey of 'MADE IN GERMANY ©'—from its origins as a British warning label in 1887 designed to deter consumers, to its transformation into a globally recognized symbol of exceptional quality, cutting-edge innovation, and unwavering trust across industries and continents.",
    section1Title: "The Beginning",
    section1SubTitle: "A British Attempt to Discourage German Goods (1887)",
    section1Description: "In the late 19th century, Germany emerged as a formidable industrial rival to Great Britain, the reigning manufacturing titan. British producers, frustrated by German competition and allegations of cheap imitations, lobbied for the Merchandise Marks Act of 1887. This law required foreign products to display their origin, aiming to alert consumers to the perceived inferiority of German goods and protect British industry. Little did they know, this move would spark a transformative legacy.",
    section2Title: "The Transformation",
    section2SubTitle: "From Warning Label to Quality Seal",
    section2Description: "Rather than retreating, German manufacturers seized the challenge as an opportunity. They invested heavily in production improvements, engineering breakthroughs, and quality assurance. By the early 20th century, companies like Bosch (automotive parts), Siemens (electrical engineering), Zeiss (optics), and Mercedes-Benz (vehicles) had not only matched but surpassed British standards. 'MADE IN GERMANY ©' evolved into a coveted mark of craftsmanship, reliability, and innovation, turning British skepticism into admiration.",
    section3Title: "Post-War Germany",
    section3SubTitle: "Strengthening the Reputation",
    section3Description: "After World War II left Germany in ruins, the nation staged an extraordinary recovery known as the 'Wirtschaftswunder' (economic miracle). Rebuilding efforts prioritized precision engineering, durability, and technological advancement. The automotive sector soared with brands like Mercedes-Benz, BMW, Volkswagen, and Audi, while innovations in medical technology, machinery, and chemicals reinforced 'MADE IN GERMANY ©' as a global gold standard. This era solidified its reputation for excellence and resilience.",
    section4Title: "'MADE IN GERMANY ©' Today",
    section4SubTitle: "A Symbol of Excellence",
    section4Description: "In the 21st century, 'MADE IN GERMANY ©' stands as a beacon of engineering excellence, cutting-edge technology, and sustainability. From luxury cars (Porsche, Audi) to pharmaceuticals (Bayer), chemicals (BASF), and renewable energy solutions, German industries lead globally. The label now embodies not just quality but also environmental responsibility and forward-thinking innovation, trusted by consumers and businesses alike across continents.",
    milestonesTitle: "Key Milestones in the Journey",
    milestone1Title: "Automotive Pioneering",
    milestone1Description: "Karl Benz's 1886 invention of the automobile ignited Germany's automotive dominance, a legacy now upheld by BMW, Audi, and others renowned for innovation and luxury.",
    milestone2Title: "Engineering Precision",
    milestone2Description: "Siemens' 19th-century electrical engineering innovations laid the foundation for Germany's leadership in automation, precision tools, and industrial technology.",
    milestone3Title: "Sustainability Leader",
    milestone3Description: "Germany's modern push into renewables—wind, solar, and hydrogen—underscores its commitment to sustainable innovation under the 'MADE IN GERMANY ©' banner.",
    roadmapTitle: "MADE IN GERMANY © Roadmap",
    roadmap1Year: "1887",
    roadmap1SubTitle: "The Origin",
    roadmap1Description: "The British Merchandise Marks Act of 1887 mandates that all imported goods, including those from Germany, bear their country of origin.",
    roadmap1Box: "Initially a mark of disdain, 'MADE IN GERMANY ©' becomes a challenge German manufacturers rise to meet, laying the groundwork for a legacy of quality and innovation.",
    roadmap2Year: "1890s-1900s",
    roadmap2SubTitle: "Industrial Awakening",
    roadmap2Description: "German industries respond with a surge of innovation. Companies like Siemens pioneer electrical engineering, BASF advances chemical production, and Zeiss revolutionizes optical technology.",
    roadmap2Box: "Investments in education, apprenticeships, and rigorous quality controls transform 'MADE IN GERMANY ©' into a badge of craftsmanship.",
    roadmap3Year: "1920s-1930s",
    roadmap3SubTitle: "Automotive Pioneering",
    roadmap3Description: "Building on Karl Benz's 1886 automobile invention, Mercedes-Benz and Porsche emerge as icons of luxury and performance.",
    roadmap3Box: "German cars and design principles gain international acclaim, showcasing engineering precision and a distinctive style.",
    roadmap4Year: "1945-1950s",
    roadmap4SubTitle: "Post-War Rebirth",
    roadmap4Description: "After WWII devastation, the 'Wirtschaftswunder' (economic miracle) begins. Volkswagen's Beetle becomes a global phenomenon.",
    roadmap4Box: "Aided by the Marshall Plan and a skilled workforce, 'MADE IN GERMANY ©' reemerges as a symbol of resilience and quality.",
    roadmap5Year: "1960s-1970s",
    roadmap5SubTitle: "Engineering Dominance",
    roadmap5Description: "Germany solidifies its reputation in precision machinery and industrial equipment with companies like Festo, Liebherr, and BMW leading with cutting-edge technology.",
    roadmap5Box: "The focus on specialized tools and robust manufacturing processes reinforces 'MADE IN GERMANY ©' as the gold standard in industrial engineering.",
    roadmap6Year: "1980s-1990s",
    roadmap6SubTitle: "Digital Transition",
    roadmap6Description: "The rise of the digital era sees Germany adapt swiftly. SAP transforms enterprise software, Siemens advances automation, and reunification in 1990 boosts economic potential.",
    roadmap6Box: "High-tech innovation and a unified Germany propel 'MADE IN GERMANY ©' into the digital age, blending tradition with futuristic technology.",
    roadmap7Year: "2000s",
    roadmap7SubTitle: "Green Innovation",
    roadmap7Description: "Germany leads the global shift to sustainability with the Energiewende policy. Siemens Energy, Enercon, and Bayer drive renewable energy and eco-friendly solutions.",
    roadmap7Box: "Investments in solar, wind, and hydrogen technologies position Germany as a pioneer in green engineering, enhancing its global reputation.",
    roadmap8Year: "2010s-Present",
    roadmap8SubTitle: "Industry 4.0 & Global Influence",
    roadmap8Description: "Germany spearheads Industry 4.0, integrating AI, IoT, and smart manufacturing. Companies like Adidas, Volkswagen, and Fraunhofer showcase a future-ready 'MADE IN GERMANY ©'.",
    roadmap8Box: "A blend of tradition, innovation, and sustainability ensures 'MADE IN GERMANY ©' remains a trusted leader in a rapidly evolving global economy.",
    conclusionTitle: "Conclusion",
    conclusionSubTitle: "A Global Brand of Trust",
    conclusionDescription: "From a forced label in 1887 to a global emblem of excellence today, 'MADE IN GERMANY ©' showcases a story of resilience, ingenuity, and unwavering quality—a trusted name that continues to shape industries worldwide.",
    onboardingTitle: "Discover the Legacy of German Engineering",
    onboardingDescription: "Explore how German manufacturing evolved from a stigmatized origin to become the global benchmark for quality and innovation.",
    onboardingButton: "Begin Journey",
    onboardingSteps: [
      "Discover the surprising origin in 1887",
      "Learn how German innovation transformed perception",
      "Explore the post-war economic miracle",
      "See how Germany leads the future of manufacturing"
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2
      }
    })
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1
      }
    })
  };

  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10 py-12 bg-[#FFFFFF] font-inter">
      {/* Onboarding Modal */}
      {showOnboarding && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl ring-1 ring-white/20 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-start mb-6">
              <motion.h2 
                className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t.onboardingTitle}
              </motion.h2>
              <button 
                onClick={handleCloseOnboarding}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Close onboarding"
              >
                <X size={24} />
              </button>
            </div>
            
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.onboardingDescription}
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t.onboardingSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                  <span>{step}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-3 rounded-lg font-medium flex items-center justify-center w-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCloseOnboarding}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {t.onboardingButton}
              <ChevronRight size={20} className="ml-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section with Grid Overlay */}
      <motion.section 
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 whitespace-pre-line"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t.heroDescription}
          </motion.p>
        </div>
      </motion.section>

      {/* Key Sections Spotlight */}
      <motion.section
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: t.section1Title, 
              subtitle: t.section1SubTitle,
              icon: <Clock size={28} />,
              isActive: activeSection === 0,
              bgClass: "bg-blue-900"
            },
            { 
              title: t.section2Title, 
              subtitle: t.section2SubTitle,
              icon: <Rocket size={28} />,
              isActive: activeSection === 1,
              bgClass: "bg-purple-900"
            },
            { 
              title: t.section3Title, 
              subtitle: t.section3SubTitle,
              icon: <Factory size={28} />,
              isActive: activeSection === 2,
              bgClass: "bg-green-900" 
            },
            { 
              title: t.section4Title, 
              subtitle: t.section4SubTitle,
              icon: <Globe size={28} />,
              isActive: activeSection === 3,
              bgClass: "bg-yellow-900"
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800/100 p-6 rounded-lg border border-gray-700 transition-all duration-300 ${section.isActive ? 'ring-2 ring-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'hover:bg-gray-800'}`}
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
              onClick={() => setActiveSection(index)}
            >
              <div className={`w-12 h-12 ${section.bgClass} rounded-full flex items-center justify-center mb-4`}>
                {section.icon}
              </div>
              <h3 className="font-medium text-lg text-white mb-2">{section.title}</h3>
              <p className="text-sm text-gray-400">{section.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Current Active Section Detail */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        key={activeSection} // Force re-render on section change
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          {activeSection === 0 && (
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center">
                  <Wrench className="mr-3 text-blue-400" size={28} /> {t.section1Title}
                </h2>
                <h3 className="font-medium text-lg text-white mb-4">{t.section1SubTitle}</h3>
                <p className="text-gray-300 leading-relaxed">{t.section1Description}</p>
              </div>
              <div className="md:w-1/2 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center mr-4">
                    <Calendar size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Key Date</span>
                    <h4 className="font-medium text-white">1887: Merchandise Marks Act</h4>
                  </div>
                </div>
                <p className="text-sm text-gray-300 italic border-l-4 border-blue-500 pl-4">
                  "All imported goods must bear a clear indication of the country in which they were manufactured or produced."
                </p>
              </div>
            </motion.div>
          )}

          {activeSection === 1 && (
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center">
                  <Rocket className="mr-3 text-blue-400" size={28} /> {t.section2Title}
                </h2>
                <h3 className="font-medium text-lg text-white mb-4">{t.section2SubTitle}</h3>
                <p className="text-gray-300 leading-relaxed">{t.section2Description}</p>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { company: "Bosch", year: "1886", icon: <Wrench size={24} /> },
                    { company: "Siemens", year: "1847", icon: <Lightbulb size={24} /> },
                    { company: "Zeiss", year: "1846", icon: <Cpu size={24} /> },
                    { company: "Mercedes-Benz", year: "1926", icon: <Car size={24} /> }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:bg-gray-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-10 h-10 bg-blue-900/50 rounded-full flex items-center justify-center mb-3">
                        {item.icon}
                      </div>
                      <h4 className="font-medium text-white">{item.company}</h4>
                      <p className="text-sm text-gray-400">Est. {item.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 2 && (
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center">
                  <Factory className="mr-3 text-blue-400" size={28} /> {t.section3Title}
                </h2>
                <h3 className="font-medium text-lg text-white mb-4">{t.section3SubTitle}</h3>
                <p className="text-gray-300 leading-relaxed">{t.section3Description}</p>
              </div>
              <div className="md:w-1/2 bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                <div className="aspect-video w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="text-center p-6">
                    <h4 className="text-2xl font-bold text-white mb-2">Wirtschaftswunder</h4>
                    <p className="text-gray-300">(Economic Miracle)</p>
                    <div className="mt-4 flex justify-center space-x-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">1948</div>
                        <div className="text-sm text-gray-400">Currency Reform</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">1955</div>
                        <div className="text-sm text-gray-400">Full Employment</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">1960s</div>
                        <div className="text-sm text-gray-400">Global Exports</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 3 && (
            <motion.div 
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 flex items-center">
                  <Globe className="mr-3 text-blue-400" size={28} /> {t.section4Title}
                </h2>
                <h3 className="font-medium text-lg text-white mb-4">{t.section4SubTitle}</h3>
                <p className="text-gray-300 leading-relaxed">{t.section4Description}</p>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Automotive Excellence", icon: <Car size={24} />, color: "bg-blue-900" },
                    { title: "Green Technology", icon: <Leaf size={24} />, color: "bg-green-900" },
                    { title: "Digital Innovation", icon: <Cpu size={24} />, color: "bg-purple-900" },
                    { title: "Renewable Energy", icon: <Sun size={24} />, color: "bg-yellow-900" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:bg-gray-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center mb-3`}>
                        {item.icon}
                      </div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Key Milestones */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
            {t.milestonesTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              variants={cardVariants}
              custom={0}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Car size={32} className="text-blue-400" />
              </div>
              <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">1</div>
              <h4 className="text-xl font-semibold text-white mb-2">{t.milestone1Title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.milestone1Description}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              variants={cardVariants}
              custom={1}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Wrench size={32} className="text-blue-400" />
              </div>
              <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">2</div>
              <h4 className="text-xl font-semibold text-white mb-2">{t.milestone2Title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.milestone2Description}
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              variants={cardVariants}
              custom={2}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
            >
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-4">
                <Leaf size={32} className="text-blue-400" />
              </div>
              <div className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4">3</div>
              <h4 className="text-xl font-semibold text-white mb-2">{t.milestone3Title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.milestone3Description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20摩托车 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 text-center">
            {t.roadmapTitle}
          </h2>
          
          <div className="space-y-12">
            {[
              { year: t.roadmap1Year, subtitle: t.roadmap1SubTitle, description: t.roadmap1Description, box: t.roadmap1Box, icon: <Clock size={28} /> },
              { year: t.roadmap2Year, subtitle: t.roadmap2SubTitle, description: t.roadmap2Description, box: t.roadmap2Box, icon: <Lightbulb size={28} /> },
              { year: t.roadmap3Year, subtitle: t.roadmap3SubTitle, description: t.roadmap3Description, box: t.roadmap3Box, icon: <Car size={28} /> },
              { year: t.roadmap4Year, subtitle: t.roadmap4SubTitle, description: t.roadmap4Description, box: t.roadmap4Box, icon: <Factory size={28} /> },
              { year: t.roadmap5Year, subtitle: t.roadmap5SubTitle, description: t.roadmap5Description, box: t.roadmap5Box, icon: <Wrench size={28} /> },
              { year: t.roadmap6Year, subtitle: t.roadmap6SubTitle, description: t.roadmap6Description, box: t.roadmap6Box, icon: <Cpu size={28} /> },
              { year: t.roadmap7Year, subtitle: t.roadmap7SubTitle, description: t.roadmap7Description, box: t.roadmap7Box, icon: <Leaf size={28} /> },
              { year: t.roadmap8Year, subtitle: t.roadmap8SubTitle, description: t.roadmap8Description, box: t.roadmap8Box, icon: <Globe size={28} /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
                variants={cardVariants}
                custom={index}
              >
                <div className="md:w-1/4">
                  <div className="bg-blue-900/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-blue-400">{item.year}</h4>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.subtitle}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <p className="text-sm text-gray-300 italic">{item.box}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Conclusion Section */}
      <motion.section
        className="max-w-7xl mx-auto w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 py-8 px-6 md:px-12 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            {t.conclusionTitle}
          </h2>
          <h3 className="text-xl font-semibold text-white mb-4">{t.conclusionSubTitle}</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.conclusionDescription}
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default MadeInGermanyHistory;