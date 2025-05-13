import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot'; // Assuming ChatBot is in the same directory
import SEO from "../SEO";

// Define the props interface
interface HeroSectionProps {
  language?: string; // Optional prop with default value 'en'
}

// Define translations for HeroSection content tailored for the recruiting page
const TRANSLATIONS: Record<string, {
  titlePart1: string;
  titlePart2: string;
  description: string;
  buttonStartPage: string;
  buttonChatBot: string; // Changed from buttonContactUs to buttonChatBot
}> = {
  en: { // English (United Kingdom)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Join Our Excellence",
    description: "At MADE IN GERMANY, become part of a global leader in precision engineering and innovation. Advance your career with opportunities to shape sustainable industrial solutions and uphold our legacy of quality and excellence.",
    buttonStartPage: "Start Page",
    buttonChatBot: "Business Assistant",
  },
  de: { // Deutsch (Germany)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Werden Sie Teil unserer Exzellenz",
    description: "Bei MADE IN GERMANY werden Sie Teil eines globalen Führers in Präzisionstechnik und Innovation. Fördern Sie Ihre Karriere mit Chancen, nachhaltige Industrielösungen zu gestalten und unser Erbe an Qualität zu bewahren.",
    buttonStartPage: "Startseite",
    buttonChatBot: "Geschäftsassistent",
  },
  es: { // Español (Spain)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Únase a nuestra Excelencia",
    description: "En MADE IN GERMANY, forme parte de un líder global en ingeniería de precisión e innovación. Desarrolle su carrera con oportunidades para crear soluciones industriales sostenibles y preservar nuestro legado de calidad.",
    buttonStartPage: "Página de Inicio",
    buttonChatBot: "Asistente de Negocios",
  },
  fr: { // Français (France)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Rejoignez notre Excellence",
    description: "Chez MADE IN GERMANY, intégrez un leader mondial en ingénierie de précision et innovation. Faites progresser votre carrière en contribuant à des solutions industrielles durables et en préservant notre héritage de qualité.",
    buttonStartPage: "Page d’Accueil",
    buttonChatBot: "Assistant Commercial",
  },
  it: { // Italiano (Italy)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Unisciti alla nostra Eccellenza",
    description: "In MADE IN GERMANY, diventa parte di un leader globale in ingegneria di precisione e innovazione. Avanza nella tua carriera contribuendo a soluzioni industriali sostenibili e preservando il nostro patrimonio di qualità.",
    buttonStartPage: "Pagina Iniziale",
    buttonChatBot: "Assistente Aziendale",
  },
  nl: { // Dutch (Netherlands)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Word deel van onze Uitmuntendheid",
    description: "Bij MADE IN GERMANY word u deel van een wereldleider in precisietechniek en innovatie. Ontwikkel uw carrière met kansen om duurzame industriële oplossingen te creëren en ons kwaliteitserfgoed te behouden.",
    buttonStartPage: "Startpagina",
    buttonChatBot: "Bedrijfsassistent",
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titlePart1: "صنع في ألمانيا ©",
    titlePart2: "انضموا إلى تميزنا",
    description: "في 'صنع في ألمانيا'، انضموا إلى قائد عالمي في الهندسة الدقيقة والابتكار. طوروا مسيرتكم المهنية بفرص لخلق حلول صناعية مستدامة وصون تراثنا في الجودة.",
    buttonStartPage: "الصفحة الرئيسية",
    buttonChatBot: "مساعد الأعمال",
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titlePart1: "德國製造 ©",
    titlePart2: "加入我哋嘅卓越",
    description: "喺德國製造，成為全球精密工程同創新領導者嘅一份子。透過參與可持續工業解決方案嘅創造，享受職業提升，延續我哋嘅品質傳統。",
    buttonStartPage: "首頁",
    buttonChatBot: "商業助理",
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titlePart1: "德国制造 ©",
    titlePart2: "加入我们的卓越",
    description: "在德国制造，成为全球精密工程和创新领导者的一部分。参与可持续工业解决方案的创造，享受职业提升，延续我们的品质传统。",
    buttonStartPage: "首页",
    buttonChatBot: "商业助理",
  },
  za: { // Afrikaans (South Africa)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Word deel van ons Uitnemendheid",
    description: "By MADE IN GERMANY word u deel van 'n wêreldleier in presisietegnologie en innovasie. Ontwikkel u loopbaan met geleenthede om volhoubare industriële oplossings te skep en ons kwaliteitserfgoed te handhaaf.",
    buttonStartPage: "Beginsblad",
    buttonChatBot: "Besigheidsassistent",
  },
  kr: { // 한국어 (South Korea) - Korean
    titlePart1: "메이드 인 저먼니 ©",
    titlePart2: "우리의 우수함에 합류하세요",
    description: "메이드 인 저먼니에서 정밀 공학 및 혁신의 글로벌 리더가 되세요. 지속 가능한 산업 솔루션을 창출하며 경력을 발전시키고, 품질의 유산을 계승할 기회를 잡으세요.",
    buttonStartPage: "시작 페이지",
    buttonChatBot: "비즈니스 조수",
  },
  jp: { // 日本語 (Japan) - Japanese
    titlePart1: "メイド・イン・ジャーマニー ©",
    titlePart2: "私たちの卓越性に参加",
    description: "メイド・イン・ジャーマニーで、精密工学と革新のグローバルリーダーになりましょう。持続可能な産業ソリューションを創出し、キャリアを向上させ、品質の遺産を継承する機会を手にしてください。",
    buttonStartPage: "スタートページ",
    buttonChatBot: "ビジネスアシスタント",
  },
};

const HeroSectionRecruiting: React.FC<HeroSectionProps> = ({ language = 'en' }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isChatBotOpen, setIsChatBotOpen] = useState<boolean>(false); // State to control chatbot visibility

  // Function to navigate to home page
  const handleStartPageClick = () => {
    navigate('/');
  };

  // Function to handle Business Assistant button click and open chatbot
  const handleChatBotClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChatBotOpen(true); // Open the chatbot
  };

  // Split the title into three parts for coloring
  const title = TRANSLATIONS[language]?.titlePart1 || "MADE IN GERMANY ©";
  const titlePart1 = title.split(' ')[0]; // "MADE"
  const titlePart2 = title.split(' ')[1]; // "IN"
  const titlePart3 = title.split(' ').slice(2).join(' '); // "GERMANY ©"

  return (
    <>
      <SEO
        title="MADE IN GERMANY © – High-Quality German Products for Global Markets"
        description="Explore the best MADE IN GERMANY © products. Connect with top German manufacturers and suppliers for premium quality goods."
        keywords="MADE IN GERMANY ©, German products, German manufacturers, premium quality, German engineering, B2B products"
        url="https://made-in-germany.uk"
        image="https://made-in-germany.uk/static/images/hero-image.webp"
      />
      <section className="relative min-h-[25vh] w-full flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/made-in-germany-recruiting.webp')] bg-cover bg-center animate-zoom" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

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
                {TRANSLATIONS[language]?.titlePart2 || "Join Our Excellence"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
              {TRANSLATIONS[language]?.description ||
                "At MADE IN GERMANY, become part of a global leader in precision engineering and innovation. Advance your career with opportunities to shape sustainable industrial solutions and uphold our legacy of quality and excellence."}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
              <button
                className="px-6 py-2 w-50 md:w-50 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
                onClick={handleStartPageClick} // Navigate to home page
              >
                {TRANSLATIONS[language]?.buttonStartPage || "Start Page"}
              </button>

              <button
                className="px-4 py-2 w-50 md:w-50 rounded-[5px] bg-transparent text-white font-medium border border-[#FFFFFF] transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#0B111F]"
                onClick={handleChatBotClick} // Open chatbot
              >
                {TRANSLATIONS[language]?.buttonChatBot || "Business Assistant"}
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

      {/* ChatBot Component */}
      <ChatBot
        isOpen={isChatBotOpen}
        onClose={() => setIsChatBotOpen(false)} // Close the chatbot
        language={language}
      />
    </>
  );
};

export default HeroSectionRecruiting;