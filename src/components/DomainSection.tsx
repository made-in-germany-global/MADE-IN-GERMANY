import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DomainsModal from './DomainsModal'; // Import the external DomainsModal

// Define domain interface
interface Domain {
  url: string;
  flag: string;
  country: string;
}

// Define props interface
interface GermanBrandsSliderProps {
  language?: string;
}

// Define domain data
const DOMAINS: {
  main: Domain[];
  europe: Domain[];
  americas: Domain[];
  asia: Domain[];
  middleEast: Domain[];
  africa: Domain[];
} = {
  main: [
    { url: 'made-in-germany.world', flag: '/flag/world.gif', country: 'Global' },
    { url: 'made-in-germany-first.com', flag: '/flag/germany.gif', country: 'Deutschland' },
    { url: 'made-in-germany.asia', flag: '/flag/singapore.gif', country: 'Asien (Singapur)' },
    { url: 'made-in-germany.africa', flag: '/flag/south-africa.gif', country: 'Afrika (Südafrika)' },
    { url: 'made-in-germany.lat', flag: '/flag/spain.gif', country: 'Lateinamerika (Spanien)' },
    { url: 'made-in-germany-arab.com', flag: '/flag/arab-league.gif', country: 'Arabische Liga' },
    { url: 'made-in-germany-arabia.com', flag: '/flag/arab-league.gif', country: 'Arabische Liga' },
    { url: 'made-in-germany.my', flag: '/flag/malaysia.gif', country: 'Malaysia' },
    { url: 'made-in-germany.com.in', flag: '/flag/india.gif', country: 'Indien' },
    { url: 'madeingermany.in', flag: '/flag/india.gif', country: 'Indien' },
    { url: 'made-in-germany.china', flag: '/flag/china.gif', country: 'China' },
  ],
  europe: [
    { url: 'made-in-germany.global/de', flag: '/flag/germany.gif', country: 'Deutschland' },
    { url: 'made-in-germany.global/fr', flag: '/flag/france.gif', country: 'Frankreich' },
    { url: 'made-in-germany.global/es', flag: '/flag/spain.gif', country: 'Spanien' },
    { url: 'made-in-germany.global/it', flag: '/flag/italy.gif', country: 'Italien' },
    { url: 'made-in-germany.global/nl', flag: '/flag/netherlands.gif', country: 'Niederlande' },
    { url: 'made-in-germany.global/pl', flag: '/flag/poland.gif', country: 'Polen' },
    { url: 'made-in-germany.global/se', flag: '/flag/sweden.gif', country: 'Schweden' },
    { url: 'made-in-germany.global/ch', flag: '/flag/switzerland.gif', country: 'Schweiz' },
    { url: 'made-in-germany.global/at', flag: '/flag/austria.gif', country: 'Österreich' },
    { url: 'made-in-germany.global/uk', flag: '/flag/uk.gif', country: 'Vereinigtes Königreich' },
    { url: 'made-in-germany.global/fi', flag: '/flag/finland.gif', country: 'Finnland' },
    { url: 'made-in-germany.global/ir', flag: '/flag/ireland.gif', country: 'Irland' },
  ],
  americas: [
    { url: 'made-in-germany.global/us', flag: '/flag/united-states.gif', country: 'Vereinigte Staaten' },
    { url: 'made-in-germany.global/ca', flag: '/flag/canada.gif', country: 'Kanada' },
    { url: 'made-in-germany.global/mx', flag: '/flag/mexico.gif', country: 'Mexiko' },
    { url: 'made-in-germany.global/br', flag: '/flag/brazil.gif', country: 'Brasilien' },
    { url: 'made-in-germany.global/ar', flag: '/flag/argentina.gif', country: 'Argentinien' },
    { url: 'made-in-germany.global/co', flag: '/flag/colombia.gif', country: 'Kolumbien' },
  ],
  asia: [
    { url: 'made-in-germany.global/cn', flag: '/flag/china.gif', country: 'China' },
    { url: 'made-in-germany.global/in', flag: '/flag/india.gif', country: 'Indien' },
    { url: 'made-in-germany.global/jp', flag: '/flag/japan.gif', country: 'Japan' },
    { url: 'made-in-germany.global/kr', flag: '/flag/south-korea.gif', country: 'Südkorea' },
    { url: 'made-in-germany.global/id', flag: '/flag/indonesia.gif', country: 'Indonesien' },
    { url: 'made-in-germany.global/th', flag: '/flag/thailand.gif', country: 'Thailand' },
    { url: 'made-in-germany.global/vn', flag: '/flag/vietnam.gif', country: 'Vietnam' },
    { url: 'made-in-germany.global/ph', flag: '/flag/philippines.gif', country: 'Philippinen' },
    { url: 'made-in-germany.global/sg', flag: '/flag/singapore.gif', country: 'Singapur' },
  ],
  middleEast: [
    { url: 'made-in-germany.global/ae', flag: '/flag/uae.gif', country: 'Vereinigte Arabische Emirate' },
    { url: 'made-in-germany.global/sa', flag: '/flag/saudi-arabia.gif', country: 'Saudi-Arabien' },
    { url: 'made-in-germany.global/eg', flag: '/flag/egypt.gif', country: 'Ägypten' },
    { url: 'made-in-germany.global/qa', flag: '/flag/qatar.gif', country: 'Katar' },
    { url: 'made-in-germany.global/kw', flag: '/flag/kuwait.gif', country: 'Kuwait' },
    { url: 'made-in-germany.global/om', flag: '/flag/oman.gif', country: 'Oman' },
  ],
  africa: [
    { url: 'made-in-germany.global/za', flag: '/flag/south-africa.gif', country: 'Südafrika' },
    { url: 'made-in-germany.global/ng', flag: '/flag/nigeria.gif', country: 'Nigeria' },
    { url: 'made-in-germany.global/ma', flag: '/flag/morocco.gif', country: 'Marokko' },
    { url: 'made-in-germany.global/ke', flag: '/flag/kenya.gif', country: 'Kenia' },
    { url: 'made-in-germany.global/gh', flag: '/flag/ghana.gif', country: 'Ghana' },
    { url: 'made-in-germany.global/ci', flag: '/flag/ivory-coast.gif', country: 'Elfenbeinküste' },
  ],
};

// Define translations
const TRANSLATIONS: Record<string, {
  headline: string;
  subheadlineLine1: string;
  subheadlineLine2: string;
  viewMore: string;
}> = {
  de: {
    headline: 'Unsere Domains des globalen Netzwerks',
    subheadlineLine1: 'Erfahren Sie mehr über die weltweite Präsenz von MADE IN GERMANY ©',
    subheadlineLine2: 'durch unser strategisch aufgebautes Domain-Netzwerk.',
    viewMore: 'Mehr Domains anzeigen',
  },
  en: {
    headline: 'Our Domains of Global Network',
    subheadlineLine1: 'Explore the worldwide presence of MADE IN GERMANY ©',
    subheadlineLine2: 'through our strategically established domain network.',
    viewMore: 'View More Domains',
  },
  es: {
    headline: 'Nuestros dominios de la red global',
    subheadlineLine1: 'Explore la presencia mundial de MADE IN GERMANY ©',
    subheadlineLine2: 'a través de nuestra red de dominios estratégicamente establecida.',
    viewMore: 'Ver más dominios',
  },
  fr: {
    headline: 'Nos domaines du réseau mondial',
    subheadlineLine1: 'Découvrez la présence mondiale de MADE IN GERMANY ©',
    subheadlineLine2: 'grâce à notre réseau de domaines stratégiquement établi.',
    viewMore: 'Voir plus de domaines',
  },
  it: {
    headline: 'I nostri domini della rete globale',
    subheadlineLine1: 'Esplora la presenza mondiale di MADE IN GERMANY ©',
    subheadlineLine2: 'attraverso la nostra rete di domini strategicamente stabilita.',
    viewMore: 'Visualizza altri domini',
  },
  nl: {
    headline: 'Onze domeinen van het wereldwijde netwerk',
    subheadlineLine1: 'Ontdek de wereldwijde aanwezigheid van MADE IN GERMANY ©',
    subheadlineLine2: 'via ons strategisch opgebouwde domeinnetwerk.',
    viewMore: 'Meer domeinen bekijken',
  },
  sa: {
    headline: 'مجالاتنا في الشبكة العالمية',
    subheadlineLine1: 'استكشف الوجود العالمي لـ MADE IN GERMANY ©',
    subheadlineLine2: 'من خلال شبكة المجالات التي أنشأناها استراتيجًا.',
    viewMore: 'عرض المزيد من المجالات',
  },
  hk: {
    headline: '我們的全球網絡域名',
    subheadlineLine1: '探索 MADE IN GERMANY © 的全球影響力',
    subheadlineLine2: '通過我們階段性建立的域名網絡。',
    viewMore: '查看更多域名',
  },
  sg: {
    headline: '我们的全球网络域名',
    subheadlineLine1: '探索 MADE IN GERMANY © 的全球影响力',
    subheadlineLine2: '通过我们策略性建立的域名网络。',
    viewMore: '查看更多域名',
  },
  za: {
    headline: 'Ons domeine van die wêreldwye netwerk',
    subheadlineLine1: 'Ontdek die wêreldwye teenwoordigheid van MADE IN GERMANY ©',
    subheadlineLine2: 'deur ons strategies opgestelde domeinnetwerk.',
    viewMore: 'Bekyk meer domeine',
  },
  kr: {
    headline: '우리의 글로벌 네트워크 도메인',
    subheadlineLine1: 'MADE IN GERMANY © 의 전 세계적 입지를 알아보세요',
    subheadlineLine2: '전략적으로 구축된 도메인 네트워크를 통해.',
    viewMore: '더 많은 도메인 보기',
  },
  jp: {
    headline: '我々のグローバルネットワークのドメイン',
    subheadlineLine1: 'MADE IN GERMANY © の世界的な存在感をご覧ください',
    subheadlineLine2: '戦略的に構築されたドメインネットワークを通じて。',
    viewMore: 'さらにドメインを表示',
  },
};

// GermanBrandsSlider Component
const GermanBrandsSlider: React.FC<GermanBrandsSliderProps> = ({ language = 'de' }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const translations = TRANSLATIONS[language] || TRANSLATIONS['de'];
  const mainDomains = useMemo(() => [...DOMAINS.main, { url: 'VIEW_MORE_BUTTON', flag: '', country: '' }], []);
  const totalSlides = Math.ceil(mainDomains.length / 12);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const getCurrentDomains = useMemo(() => {
    const start = currentSlide * 12;
    const end = start + 12;
    return mainDomains.slice(start, end);
  }, [currentSlide, mainDomains]);

  return (
    <div className="relative max-w-7xl mx-auto mb-10">
      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden"
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        {/* Content */}
        <div className="py-12 px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {translations.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-gray-300 text-center mb-10 leading-relaxed font-light"
          >
            {translations.subheadlineLine1}
            <br />
            {translations.subheadlineLine2}
          </motion.p>

          {/* Domain Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {getCurrentDomains.map((item, index) =>
                item.url === 'VIEW_MORE_BUTTON' ? (
                  <motion.button
                    key={`view-more-${index}`}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(107,114,128,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setModalOpen(true)}
                    className="flex items-center justify-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700 shadow-[0_0_10px_rgba(107,114,128,0.3)]"
                    aria-label={translations.viewMore}
                  >
                    <span className="text-base text-gray-200 font-semibold">{translations.viewMore}</span>
                  </motion.button>
                ) : (
                  <motion.a
                    key={`domain-${item.url}-${index}`}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://${item.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    aria-label={`Visit ${item.url}`}
                  >
                    <span className="text-sm text-gray-400 font-medium mb-2">{item.country}</span>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden shadow-md shadow-black/50">
                        <img
                          src={item.flag || '/flag/default.gif'}
                          alt={`${item.country} Flag`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-base text-gray-200 font-semibold truncate">{item.url}</span>
                    </div>
                  </motion.a>
                )
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center items-center gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                aria-label="Previous Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <span className="text-gray-200 text-sm font-medium">
                {currentSlide + 1} / {totalSlides}
              </span>
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                aria-label="Next Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <DomainsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        language={language}
        regionaleDomains={DOMAINS.main.filter((d) => d.url !== 'made-in-germany.world' && d.url !== 'made-in-germany-first.com')}
        subdomainsEuropa={DOMAINS.europe}
        subdomainsAmerika={DOMAINS.americas}
        subdomainsAsien={DOMAINS.asia}
        subdomainsNahost={DOMAINS.middleEast}
        subdomainsAfrika={DOMAINS.africa}
      />
    </div>
  );
};

export default GermanBrandsSlider;