import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import {Award, Globe, Leaf, Users, Zap  } from 'lucide-react'; // Added Bread icon for the new box
import { ArrowRight, History, ShoppingBag, Book } from 'lucide-react';

interface CulturePoint {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const culturePoints: CulturePoint[] = [
  {
    title: 'Kulturgut & Identität',
    description:
      'Brot ist mehr als ein Lebensmittel – es ist ein UNESCO-Weltkulturerbe. Mit über 3.200 Brotsorten steht es für deutsche Identität, Handwerk und Geschichte.',
    icon: Award,
  },
  {
    title: 'Universelle Anziehung',
    description:
      'Brot spricht weltweit an, doch deutsches Brot ist einzigartig in Textur, Geschmack und Vielfalt. Es ist alltagstauglich, aber mit Charakter und Tiefgang.',
    icon: Globe,
  },
  {
    title: 'Emotionale Verbindung',
    description:
      'Der Duft von frischem Sauerteigbrot weckt Heimatgefühle – in Kairo, Rio oder Hanoi. Es spricht Bauch und Herz an, unabhängig von Herkunft.',
    icon: Users,
  },
  {
    title: 'Symbol für Werte',
    description:
      'Handwerk, Echtheit, regionale Zutaten, Verlässlichkeit – Brot steht für „MADE IN GERMANY ©“: Kultur, Seele und Ehrlichkeit.',
    icon: Leaf,
  },
  {
    title: 'Türöffner für Mehr',
    description:
      'Deutsches Brot öffnet Wege zu Leberwurst, Maschinen, Handwerkstradition und Werten im Wirtschaften. Es ist der Einstieg in eine größere Welt.',
    icon: Zap,
  },
  {
    title: 'Nachhaltige Tradition',
    description:
      'Deutsches Brot verbindet Nachhaltigkeit mit Tradition. Regionale Zutaten und handwerkliche Prozesse fördern eine umweltbewusste Kultur.',
    icon: Zap, // New icon for the sixth box
  },
];
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    } 
  }
};
const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0 0 15px rgba(59,130,246,0.7)'
  },
  tap: {
    scale: 0.95
  },
  pulse: {
    boxShadow: [
      '0 0 10px rgba(59,130,246,0.5)',
      '0 0 15px rgba(59,130,246,0.7)',
      '0 0 10px rgba(59,130,246,0.5)'
    ],
    transition: {
      repeat: Infinity,
      duration: 2
    }
  }
};

const SectionWrapper: React.FC<SectionProps> = ({ title, subtitle, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
    <div className="relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      {children}
    </div>
  </motion.section>
);

const CulturePointCard: React.FC<CulturePoint & { index: number }> = React.memo(({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 flex flex-col items-center text-center shadow-[0_0_10px_rgba(59,130,246,0.3)] z-20"
    data-tooltip-id={`culture-point-${index}`}
    data-tooltip-content={title}
    whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} className="text-blue-600" />
    </div>
    <span className="bg-blue-900 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mb-2">
      {index + 1}
    </span>
    <h3 className="font-semibold text-xl text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
));

const HeroSection: React.FC = () => (
  <motion.section 
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="max-w-7xl bg-gradient-to-br from-gray-900 to-black rounded-2xl w-full text-white py-8 px-6 md:px-12 mx-auto shadow-2xl ring-1 ring-white/20 relative overflow-hidden my-8"
    >
      <div className="relative h-screen max-h-[600px] flex items-center overflow-hidden">
        {/* Video background with overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            className="absolute inset-0 w-full h-full object-cover opacity-50" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <source src="made-in-germany-original-bread.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            DEUTSCHE BROTKULTUR
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-4 font-light text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ein Symbol für Tradition, Qualität und Seele
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Die deutsche Brotkultur, seit 2014 UNESCO-Weltkulturerbe, verkörpert Handwerk, Vielfalt und emotionale Tiefe. Sie ist ein Botschafter für „MADE IN GERMANY ©" – authentisch, universell und kraftvoll.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20"
              aria-label="Brotkultur entdecken"
              whileHover="hover"
              whileTap="tap"
              animate="pulse"
              variants={buttonVariants}
            >
              BROTKULTUR ENTDECKEN
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
            
            <motion.button
              className="border border-gray-600 bg-gray-800 text-gray-200 px-8 py-3 rounded-lg hover:bg-gray-700 font-medium transition duration-300 shadow-[0_0_10px_rgba(107,114,128,0.3)] z-20"
              aria-label="Mehr über Made in Germany erfahren"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              MEHR ÜBER „MADE IN GERMANY" ERFAHREN
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Feature badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 z-10 relative pb-4">
        <motion.div 
          className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}
        >
          <Award className="text-blue-400" size={24} />
          <span className="text-sm font-medium text-gray-200">UNESCO Weltkulturerbe</span>
        </motion.div>
        
        <motion.div
          className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}
        >
          <History className="text-blue-400" size={24} />
          <span className="text-sm font-medium text-gray-200">Über 3.000 Brotsorten</span>
        </motion.div>
        
        <motion.div
          className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}
        >
          <ShoppingBag className="text-blue-400" size={24} />
          <span className="text-sm font-medium text-gray-200">Handwerkliche Qualität</span>
        </motion.div>
        
        <motion.div
          className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}
        >
          <Book className="text-blue-400" size={24} />
          <span className="text-sm font-medium text-gray-200">Jahrhundertealte Tradition</span>
        </motion.div>
      </div>
    </motion.section>
);

const GermanBreadCulture: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full px-4 space-y-10  bg-[#FFFFF] font-inter ">
      <HeroSection />

      <SectionWrapper
        title="WARUM DEUTSCHE BROTKULTUR?"
        subtitle="Brot ist mehr als ein Lebensmittel – es ist ein Symbol für deutsche Werte, Handwerk und Identität. Als UNESCO-Weltkulturerbe steht es für Tradition, Authentizität und eine universelle Sprache, die weltweit verbindet."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {culturePoints.map((point, index) => (
            <CulturePointCard key={point.title} {...point} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="UNESCO-WELTKULTURERBE"
        subtitle="Seit 2014 ist die deutsche Brotkultur Teil des immateriellen Kulturerbes der UNESCO. Es geht um weit mehr als Brot – es geht um Tradition, Vielfalt und Gemeinschaft."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
          >
            <h3 className="font-semibold text-xl mb-3 text-white">Was bedeutet das?</h3>
            <p className="text-gray-300 leading-relaxed">Die Anerkennung durch die UNESCO würdigt:</p>
            <ul className="text-gray-300 leading-relaxed list-disc pl-6 mt-2">
              <li>Die Vielfalt mit über 3.000 Brotsorten</li>
              <li>Die Tradition des Backhandwerks</li>
              <li>Die Wissensweitergabe von Generation zu Generation</li>
              <li>Die regionale Verbundenheit</li>
              <li>Die Rolle in der Alltagskultur (Abendbrot, Bäckereien als Treffpunkte)</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
          >
            <h3 className="font-semibold text-xl mb-3 text-white">Originalbegründung der UNESCO</h3>
            <p className="text-gray-300 leading-relaxed">
              „Die deutsche Brotkultur ist weltweit einzigartig und ein lebendiges Element des Alltagslebens in Deutschland. Bäckerinnen und Bäcker leisten durch ihr Wissen und ihre Kreativität einen bedeutenden Beitrag zum Erhalt dieser Kulturform.“<br />
              <span className="text-sm">– Deutsche UNESCO-Kommission</span>
            </p>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-300 leading-relaxed mb-6">
            Mit jedem Brot tragen Sie zum Erhalt dieses Weltkulturerbes bei – und machen es international erlebbar.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center mx-auto transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20"
            aria-label="Mehr über die Brotkultur erfahren"
            data-tooltip-id="unesco-button"
            data-tooltip-content="Tauche tiefer in die Welt der deutschen Brotkultur ein"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
            animate={{ boxShadow: ['0 0 10px rgba(59,130,246,0.5)', '0 0 15px rgba(59,130,246,0.7)', '0 0 10px rgba(59,130,246,0.5)'] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Mehr über die Brotkultur erfahren
          </motion.button>
        </div>
      </SectionWrapper>
      <SectionWrapper 
  title="DIE SYMBOLKRAFT DES BROTS"
  subtitle="Brot ist genial – es ist Tradition, Heimat, Authentizität. Es spricht Menschen weltweit an und trägt die Werte „MADE IN GERMANY ©“ in die Welt."
>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <motion.div
      className="group bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] z-20"
      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
      data-tooltip-id="symbol-1"
      data-tooltip-content="Globale Sehnsucht nach Echtheit"
    >
      <h3 className="font-semibold text-xl mb-3 text-white">Globale Sehnsucht nach Echtheit</h3>
      <p className="text-gray-300 leading-relaxed">
        In einer Welt voller Massenproduktion suchen Menschen Authentizität. Deutsches Brot – echt, handwerklich, „MADE IN GERMANY ©“ – spricht Kulturliebhaber, Foodies und Gourmets weltweit an.
      </p>
    </motion.div>
    <motion.div
      className="group bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] z-20"
      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
      data-tooltip-id="symbol-2"
      data-tooltip-content="Kulturelle Exzellenz"
    >
      <h3 className="font-semibold text-xl mb-3 text-white">Kulturelle Exzellenz</h3>
      <p className="text-gray-300 leading-relaxed">
        Brot ist ein Erlebnis, ein kulturelles Gut. Wie Italiener Pasta oder Franzosen Wein verkaufen, kann Deutschland Brot und Leberwurst als Symbol für Exzellenz nutzen.
      </p>
    </motion.div>
    <motion.div
      className="group bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] z-20"
      whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
      data-tooltip-id="symbol-3"
      data-tooltip-content="Einfach, aber wirkungsvoll"
    >
      <h3 className="font-semibold text-xl mb-3 text-white">Einfach, aber wirkungsvoll</h3>
      <p className="text-gray-300 leading-relaxed">
        Produktion in Deutschland, zentralisierte Logistik, klare Botschaft, emotionale Verbindung – Brot ist einfach, aber trägt immense Symbolkraft.
      </p>
    </motion.div>
  </div>
  <div className="mt-12 text-center">
    <p className="text-gray-300 leading-relaxed mb-6">
      Nutzen Sie die Kraft des Brots, um Ihre Geschichte zu erzählen und „MADE IN GERMANY ©“ weltweit zu präsentieren.
    </p>
    <motion.button
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center mx-auto transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20"
      aria-label="Jetzt starten"
      data-tooltip-id="symbol-button"
      data-tooltip-content="Starte jetzt und nutze die Symbolkraft des Brots"
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
      animate={{ boxShadow: ['0 0 10px rgba(59,130,246,0.5)', '0 0 15px rgba(59,130,246,0.7)', '0 0 10px rgba(59,130,246,0.5)'] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      Jetzt starten
    </motion.button>
  </div>
</SectionWrapper>
<div className="h-2"></div> {/* Adds a 10px vertical gap */}

      <Tooltip
        id="hero-button-1"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="hero-button-1"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
      <Tooltip
        id="hero-button-2"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="hero-button-2"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
      <Tooltip
        id="unesco-button"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="unesco-button"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
      <Tooltip
        id="symbol-button"
        place="top"
        effect="solid"
        className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
        style={{ transform: 'translateX(-50%)' }}
        afterShow={() => {
          const tooltip = document.querySelector('[data-tooltip-id="symbol-button"]');
          if (tooltip) {
            tooltip.insertAdjacentHTML(
              'beforeend',
              '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
            );
          }
        }}
      />
      {culturePoints.map((_, index) => (
        <Tooltip
          key={index}
          id={`culture-point-${index}`}
          place="top"
          effect="solid"
          className="relative w-64 rounded-md bg-gray-800 border border-gray-700 shadow-xl p-2 text-sm text-gray-300 transition-all duration-300 ease-in-out z-50"
          style={{ transform: 'translateX(-50%)' }}
          afterShow={() => {
            const tooltip = document.querySelector(`[data-tooltip-id="culture-point-${index}"]`);
            if (tooltip) {
              tooltip.insertAdjacentHTML(
                'beforeend',
                '<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-700"></div>'
              );
            }
          }}
        />
      ))}
      {['symbol-1', 'symbol-2', 'symbol-3'].map((id, index) => (
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
  );
};

export default GermanBreadCulture;