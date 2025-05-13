import React, { useMemo, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// Define brand interface
interface Brand {
  name: string;
  logo: string;
}

// Define props interface
interface GermanBrandsSliderProps {
  language?: string;
}

// Define translations
const TRANSLATIONS: Record<string, {
  headline: string;
  subheadlineLine1: string;
  subheadlineLine2: string;
}> = {
  de: {
    headline: 'Premium Deutsche Marken',
    subheadlineLine1: 'Entdecken Sie die Exzellenz deutscher Handwerkskunst',
    subheadlineLine2: 'durch unsere Auswahl an Premium-Marken.',
  },
  en: {
    headline: 'Premium German Brands',
    subheadlineLine1: 'Discover the excellence of German craftsmanship',
    subheadlineLine2: 'through our selection of premium brands.',
  },
  es: {
    headline: 'Marcas Alemanas Premium',
    subheadlineLine1: 'Descubre la excelencia de la artesanía alemana',
    subheadlineLine2: 'a través de nuestra selección de marcas premium.',
  },
  fr: {
    headline: 'Marques Allemandes Premium',
    subheadlineLine1: 'Découvrez l’excellence de l’artisanat allemand',
    subheadlineLine2: 'à travers notre sélection de marques premium.',
  },
  it: {
    headline: 'Marchi Tedeschi Premium',
    subheadlineLine1: 'Scopri l’eccellenza dell’artigianato tedesco',
    subheadlineLine2: 'attraverso la nostra selezione di marchi premium.',
  },
  nl: {
    headline: 'Premium Duitse Merken',
    subheadlineLine1: 'Ontdek de excellentie van Duits vakmanschap',
    subheadlineLine2: 'via onze selectie van premium merken.',
  },
  sa: {
    headline: 'العلامات التجارية الألمانية المميزة',
    subheadlineLine1: 'اكتشف تميز الصناعة الألمانية',
    subheadlineLine2: 'من خلال اختيارنا للعلامات التجارية المميزة.',
  },
  hk: {
    headline: '優質德國品牌',
    subheadlineLine1: '探索德國工藝的卓越',
    subheadlineLine2: '通過我們挑選的優質品牌。',
  },
  sg: {
    headline: '优质德国品牌',
    subheadlineLine1: '探索德国工艺的卓越',
    subheadlineLine2: '通过我们精选的优质品牌。',
  },
  za: {
    headline: 'Premium Duitse Handelsmerke',
    subheadlineLine1: 'Ontdek die uitnemendheid van Duitse vakmanskap',
    subheadlineLine2: 'deur ons keuse van premium handelsmerke.',
  },
  kr: {
    headline: '프리미엄 독일 브랜드',
    subheadlineLine1: '독일 장인정신의 우수성을 발견하세요',
    subheadlineLine2: '우리의 프리미엄 브랜드 선택을 통해.',
  },
  jp: {
    headline: 'プレミアムドイツブランド',
    subheadlineLine1: 'ドイツの職人技の卓越性を発見',
    subheadlineLine2: '私たちのプレミアムブランドの選択を通じて。',
  },
};

const GermanBrandsSlider: React.FC<GermanBrandsSliderProps> = ({ language = 'de' }) => {
  const translations = TRANSLATIONS[language] || TRANSLATIONS['de'];
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize brands data
  const brands: Brand[] = useMemo(
    () => [
      { name: 'Mercedes-Benz', logo: '/germanlogo/mercedes.svg' },
      { name: 'BMW', logo: '/germanlogo/bmw.svg' },
      { name: 'Adidas', logo: '/germanlogo/adidas.png' },
      { name: 'Siemens', logo: '/germanlogo/siemens.png' },
      { name: 'Porsche', logo: '/germanlogo/porsche.png' },
      { name: 'Audi', logo: '/germanlogo/audi.png' },
      { name: 'Volkswagen', logo: '/germanlogo/volkswagen.png' },
      { name: 'Bosch', logo: '/germanlogo/bosch.png' },
      { name: 'DHL', logo: '/germanlogo/dhl.png' },
      { name: 'Deutsche Bahn', logo: '/germanlogo/deutsche-bahn.png' },
      { name: 'Lufthansa Cargo', logo: '/germanlogo/lufthansa-cargo.png' },
      { name: 'Bayer', logo: '/germanlogo/bayer.png' },
    ],
    []
  );

  // Duplicate brands for seamless looping
  const doubledBrands = useMemo(() => [...brands, ...brands], [brands]);

  // Animation setup for marquee (right to left)
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: { repeat: Infinity, repeatType: 'loop', duration: 24, ease: 'linear' },
        },
      });
    };
    startAnimation();

    return () => controls.stop();
  }, [controls]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative max-w-7xl mx-auto mb-10"
      aria-label="Premium German Brands Slider"
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
        />
        {/* Content */}
        <div className="py-12 px-6 relative z-10">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {translations.headline}
          </motion.h2>
          {/* Subheadline */}
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

          {/* Infinite Slider Container */}
          <div className="relative w-full">
            <motion.div
              ref={containerRef}
              animate={controls}
              className="flex space-x-4 py-8 w-max"
            >
              {doubledBrands.map((brand, index) => (
                <motion.div
                  key={`brand-${brand.name}-${index}`}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-none w-[200px]"
                >
                  <div
                    className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    role="img"
                    aria-label={`${brand.name} brand logo`}
                  >
                    <div className="relative h-[100px] mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-600 to-gray-700">
                      <img
                        src={brand.logo || '/germanlogo/fallback.png'}
                        alt={`${brand.name} brand logo`}
                        className="w-full h-full object-contain p-4 relative z-10"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-gray-200 font-semibold text-base text-center truncate relative z-10">
                      {brand.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GermanBrandsSlider;