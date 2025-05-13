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
    titlePart2: "Growth and Innovation",
    description: "At MADE IN GERMANY, we drive global trade and sustainable growth through innovative solutions. Our focus on quality and collaboration fosters international partnerships, delivering lasting value in a connected world.",
    buttonLearnMore: "Start Page",
    buttonContactUs: "Contact Us",
  },
  de: { // Deutsch (Germany)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Wachstum und Innovation",
    description: "Bei MADE IN GERMANY treiben wir globalen Handel und nachhaltiges Wachstum durch innovative Lösungen voran. Unser Fokus auf Qualität und Zusammenarbeit fördert internationale Partnerschaften und schafft dauerhaften Wert in einer vernetzten Welt.",
    buttonLearnMore: "Startseite",
    buttonContactUs: "Kontaktieren Sie Uns",
  },
  es: { // Español (Spain)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Crecimiento e Innovación",
    description: "En MADE IN GERMANY, impulsamos el comercio global y el crecimiento sostenible mediante soluciones innovadoras. Nuestro enfoque en calidad y colaboración fomenta asociaciones internacionales, aportando valor duradero en un mundo conectado.",
    buttonLearnMore: "Página de Inicio",
    buttonContactUs: "Contáctenos",
  },
  fr: { // Français (France)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Croissance et Innovation",
    description: "Chez MADE IN GERMANY, nous stimulons le commerce mondial et la croissance durable grâce à des solutions innovantes. Notre accent sur la qualité et la collaboration renforce les partenariats internationaux, offrant une valeur durable dans un monde connecté.",
    buttonLearnMore: "Page d’Accueil",
    buttonContactUs: "Contactez-Nous",
  },
  it: { // Italiano (Italy)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Crescita e Innovazione",
    description: "In MADE IN GERMANY, promuoviamo il commercio globale e la crescita sostenibile attraverso soluzioni innovative. Il nostro focus su qualità e collaborazione favorisce partnership internazionali, creando valore duraturo in un mondo connesso.",
    buttonLearnMore: "Pagina Iniziale",
    buttonContactUs: "Contattaci",
  },
  nl: { // Dutch (Netherlands)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Groei en Innovatie",
    description: "Bij MADE IN GERMANY stimuleren we wereldhandel en duurzame groei met innovatieve oplossingen. Onze focus op kwaliteit en samenwerking bevordert internationale partnerschappen, wat blijvende waarde oplevert in een verbonden wereld.",
    buttonLearnMore: "Startpagina",
    buttonContactUs: "Neem Contact Op",
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titlePart1: "صنع في ألمانيا ©",
    titlePart2: "النمو والابتكار",
    description: "في 'صنع في ألمانيا'، ندفع التجارة العالمية والنمو المستدام من خلال حلول مبتكرة. تركيزنا على الجودة والتعاون يعزز الشراكات الدولية، مقدمين قيمة دائمة في عالم مترابط.",
    buttonLearnMore: "الصفحة الرئيسية",
    buttonContactUs: "اتصل بنا",
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titlePart1: "德國製造 ©",
    titlePart2: "增長與創新",
    description: "喺德國製造，我哋透過創新解決方案推動全球貿易同可持續增長。我哋專注於品質同合作，促進國際夥伴關係，喺互聯世界中創造持久價值。",
    buttonLearnMore: "首頁",
    buttonContactUs: "聯繫我們",
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titlePart1: "德国制造 ©",
    titlePart2: "增长与创新",
    description: "在德国制造，我们通过创新解决方案推动全球贸易和可持续增长。我们专注于品质与合作，促进国际伙伴关系，在互联世界中创造持久价值。",
    buttonLearnMore: "首页",
    buttonContactUs: "联系我们",
  },
  za: { // Afrikaans (South Africa)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Groei en Innovasie",
    description: "By MADE IN GERMANY dryf ons globale handel en volhoubare groei deur innoverende oplossings. Ons fokus op kwaliteit en samewerking bevorder internasionale vennootskappe, wat blywende waarde lewer in 'n verbonde wêreld.",
    buttonLearnMore: "Tuisblad",
    buttonContactUs: "Kontak Ons",
  },
  kr: { // 한국어 (South Korea) - Korean
    titlePart1: "메이드 인 저먼니 ©",
    titlePart2: "성장과 혁신",
    description: "메이드 인 저먼니에서는 혁신적인 솔루션으로 글로벌 무역과 지속 가능한 성장을 촉진합니다. 품질과 협력에 중점을 두어 국제적 파트너십을 강화하며, 연결된 세계에서 지속적인 가치를 창출합니다.",
    buttonLearnMore: "시작 페이지",
    buttonContactUs: "문의하기",
  },
  jp: { // 日本語 (Japan) - Japanese
    titlePart1: "メイド・イン・ジャーマニー ©",
    titlePart2: "成長と革新",
    description: "メイド・イン・ジャーマニーでは、革新的なソリューションを通じてグローバルな貿易と持続可能な成長を推進します。品質と協力を重視し、国際的なパートナーシップを強化することで、つながった世界で永続的な価値を創出します。",
    buttonLearnMore: "スタートページ",
    buttonContactUs: "お問い合わせ",
  },
};

const HeroSectionVision: React.FC<HeroSectionProps> = ({ language = 'en' }) => {
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
        <div className="w-full h-full bg-[url('/made-in-germany-worldwide-craft.webp')] bg-cover bg-center animate-zoom" />
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
              {TRANSLATIONS[language]?.titlePart2 || "Growth and Innovation"}
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
            {TRANSLATIONS[language]?.description ||
              "At MADE IN GERMANY, we drive global trade and sustainable growth through innovative solutions. Our focus on quality and collaboration fosters international partnerships, delivering lasting value in a connected world."}
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

export default HeroSectionVision;