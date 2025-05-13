import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from "../SEO";

// Define the props interface
interface HeroSectionProps {
  language?: string; // Optional prop with default value 'en'
}

// Define translations for HeroSection content
const TRANSLATIONS: Record<string, {
  titlePart1: string;
  titlePart2: string;
  description: string;
  buttonLearnMore: string;
  buttonContactUs: string;
}> = {
  en: { // English (United Kingdom)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Crafted Excellence",
    description: "At MADE IN GERMANY, we blend precision engineering with cutting-edge innovation to deliver tailored global solutions. Our commitment to quality fosters international partnerships, ensuring sustainable growth and enduring value across diverse markets.",
    buttonLearnMore: "Start Page",
    buttonContactUs: "Contact Us",
  },
  de: { // Deutsch (Germany)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Meisterhafte Exzellenz",
    description: "Bei MADE IN GERMANY vereinen wir Präzisionstechnik mit innovativer Spitzentechnologie, um maßgeschneiderte globale Lösungen zu bieten. Unser Qualitätsanspruch fördert internationale Partnerschaften und sichert nachhaltiges Wachstum sowie dauerhaften Wert in vielfältigen Märkten.",
    buttonLearnMore: "Startseite",
    buttonContactUs: "Kontaktieren Sie Uns",
  },
  es: { // Español (Spain)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Excelencia Forjada",
    description: "En MADE IN GERMANY, combinamos ingeniería de precisión con innovación de vanguardia para ofrecer soluciones globales a medida. Nuestro compromiso con la calidad impulsa asociaciones internacionales, garantizando crecimiento sostenible y valor duradero en mercados diversos.",
    buttonLearnMore: "Página de Inicio",
    buttonContactUs: "Contáctenos",
  },
  fr: { // Français (France)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Excellence Forgée",
    description: "Chez MADE IN GERMANY, nous associons l’ingénierie de précision à une innovation de pointe pour proposer des solutions globales sur mesure. Notre engagement qualité renforce les partenariats internationaux, garantissant une croissance durable et une valeur pérenne sur divers marchés.",
    buttonLearnMore: "Page d’Accueil",
    buttonContactUs: "Contactez-Nous",
  },
  it: { // Italiano (Italy)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Eccellenza Forgiata",
    description: "In MADE IN GERMANY, uniamo ingegneria di precisione e innovazione all’avanguardia per offrire soluzioni globali personalizzate. Il nostro impegno per la qualità promuove partnership internazionali, garantendo crescita sostenibile e valore duraturo in mercati diversificati.",
    buttonLearnMore: "Pagina Iniziale",
    buttonContactUs: "Contattaci",
  },
  nl: { // Dutch (Netherlands)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Vakmanschap en Excellentie",
    description: "Bij MADE IN GERMANY combineren we precisietechniek met geavanceerde innovatie om op maat gemaakte wereldwijde oplossingen te bieden. Onze toewijding aan kwaliteit versterkt internationale samenwerkingen, wat duurzame groei en blijvende waarde in diverse markten waarborgt.",
    buttonLearnMore: "Startpagina",
    buttonContactUs: "Neem Contact Op",
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titlePart1: "صنع في ألمانيا ©",
    titlePart2: "التميز المصنوع",
    description: "في 'صنع في ألمانيا'، نجمع بين الهندسة الدقيقة والابتكار المتطور لتقديم حلول عالمية مخصصة. التزامنا بالجودة يعزز الشراكات الدولية، مما يضمن نموًا مستدامًا وقيمة دائمة عبر أسواق متنوعة.",
    buttonLearnMore: "الصفحة الرئيسية",
    buttonContactUs: "اتصل بنا",
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titlePart1: "德國製造 ©",
    titlePart2: "精湛卓越",
    description: "喺德國製造，我哋將精密工程同尖端創新相結合，提供量身定制嘅全球解決方案。我哋對品質嘅承諾促進國際合作，確保喺多元市場中實現可持續增長同持久價值。",
    buttonLearnMore: "首頁",
    buttonContactUs: "聯繫我們",
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titlePart1: "德国制造 ©",
    titlePart2: "精湛卓越",
    description: "在德国制造，我们将精密工程与尖端创新相结合，提供量身定制的全球解决方案。我们对品质的承诺促进国际合作，确保在多元市场中实现可持续增长和持久价值。",
    buttonLearnMore: "首页",
    buttonContactUs: "联系我们",
  },
  za: { // Afrikaans (South Africa)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Vakmanskap en Uitnemendheid",
    description: "By MADE IN GERMANY kombineer ons presisietegniek met voorpunt-innovasie om wêreldwye oplossings op maat te lewer. Ons toewyding aan kwaliteit bevorder internasionale vennootskappe, wat volhoubare groei en blywende waarde in diverse markte verseker.",
    buttonLearnMore: "Tuisblad",
    buttonContactUs: "Kontak Ons",
  },
  kr: { // 한국어 (South Korea) - Korean
    titlePart1: "메이드 인 저먼니 ©",
    titlePart2: "정교함과 탁월함",
    description: "메이드 인 저먼니에서는 정밀 엔지니어링과 최첨단 혁신을 결합하여 맞춤형 글로벌 솔루션을 제공합니다. 품질에 대한 우리의 헌신은 국제적 파트너십을 강화하며, 다양한 시장에서 지속 가능한 성장과 지속적인 가치를 보장합니다.",
    buttonLearnMore: "시작 페이지",
    buttonContactUs: "문의하기",
  },
  jp: { // 日本語 (Japan) - Japanese
    titlePart1: "メイド・イン・ジャーマニー ©",
    titlePart2: "精緻な卓越性",
    description: "メイド・イン・ジャーマニーでは、精密工学と最先端の革新を融合させ、カスタマイズされたグローバルソリューションを提供します。品質への私たちの取り組みは国際的なパートナーシップを強化し、多様な市場で持続可能な成長と永続的な価値を保証します。",
    buttonLearnMore: "スタートページ",
    buttonContactUs: "お問い合わせ",
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ language = 'en' }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to navigate to home page
  const handleLearnMoreClick = () => {
    navigate('/');
  };

  // Function to navigate to contact page
  const handleContactUsClick = () => {
    navigate('/contactform');
  };

  // Split the title into three parts for coloring
  const title = TRANSLATIONS[language]?.titlePart1 || "MADE IN GERMANY ©";
  const titlePart1 = title.split(' ')[0]; // "MADE"
  const titlePart2 = title.split(' ')[1]; // "IN"
  const titlePart3 = title.split(' ').slice(2).join(' '); // "GERMANY ©"

  return (
    <section className="relative min-h-[25vh] w-full flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/made-in-germany-crafted-excellence.webp')] bg-cover bg-center animate-zoom" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <SEO
        title="MADE IN GERMANY © – High-Quality German Products for Global Markets"
        description="Explore the best MADE IN GERMANY © products. Connect with top German manufacturers and suppliers for premium quality goods."
        keywords="MADE IN GERMANY ©, German products, German manufacturers, premium quality, German engineering, B2B products"
        url="https://made-in-germany.uk"
        image="https://made-in-germany.uk/static/images/hero-image.webp"
      />
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center sm:text-left text-white space-y-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto sm:mx-0 space-y-6">
          {/* Main Title with German Flag Colors */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span style={{ color: '#FFFFFF' }}>{titlePart1}</span>{' '}
            <span style={{ color: '#DD0000' }}>{titlePart2}</span>{' '}
            <span style={{ color: '#FFCE00' }}>{titlePart3}</span>
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-4" style={{ color: '#FFFFFF' }}>
              {TRANSLATIONS[language]?.titlePart2 || "Crafted Excellence"}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
            {TRANSLATIONS[language]?.description ||
              "At MADE IN GERMANY, we blend precision engineering with cutting-edge innovation to deliver tailored global solutions. Our commitment to quality fosters international partnerships, ensuring sustainable growth and enduring value across diverse markets."}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
            <button
              className="px-6 py-2 w-50 md:w-50 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
              onClick={handleLearnMoreClick} // Navigate to home page
            >
              {TRANSLATIONS[language]?.buttonLearnMore || "Learn More"}
            </button>

            <button
              className="px-4 py-2 w-50 md:w-50 rounded-[5px] bg-transparent text-white font-medium border border-[#FFFFFF] transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#0B111F]"
              onClick={handleContactUsClick} // Navigate to contact page
            >
              {TRANSLATIONS[language]?.buttonContactUs || "Contact Us"}
            </button>
          </div>
        </div>
      </div>

      {/* Add CSS for zoom animation */}
      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoom {
          animation: zoom 10s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;