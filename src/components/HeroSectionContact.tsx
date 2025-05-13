import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot'; // Assuming ChatBot is in the same directory
import SEO from "../SEO";

// Define the props interface
interface HeroSectionProps {
  language?: string; // Optional prop with default value 'en'
}

// Define translations for HeroSection content tailored for the contact page
const TRANSLATIONS: Record<string, {
  titlePart1: string;
  titlePart2: string;
  description: string;
  buttonStartPage: string;
  buttonChatBot: string;
}> = {
  en: { // English (United Kingdom)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Connect with Us",
    description: "At MADE IN GERMANY, our expert team delivers precision-engineered solutions tailored to your business needs. Contact us to explore how our commitment to quality can enhance your success in a competitive global market.",
    buttonStartPage: "Start Page",
    buttonChatBot: "Business Assistant",
  },
  de: { // Deutsch (Germany)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Kontaktaufnahme",
    description: "Bei MADE IN GERMANY bietet unser Expertenteam präzise maßgeschneiderte Lösungen für Ihre Geschäftsanforderungen. Kontaktieren Sie uns, um zu erfahren, wie unser Qualitätsversprechen Ihren Erfolg in einem wettbewerbsintensiven globalen Markt steigern kann.",
    buttonStartPage: "Startseite",
    buttonChatBot: "Geschäftsassistent",
  },
  es: { // Español (Spain)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Conéctese con nosotros",
    description: "En MADE IN GERMANY, nuestro equipo de expertos ofrece soluciones de ingeniería de precisión adaptadas a sus necesidades empresariales. Contáctenos para descubrir cómo nuestro compromiso con la calidad puede impulsar su éxito en un mercado global competitivo.",
    buttonStartPage: "Página de Inicio",
    buttonChatBot: "Asistente de Negocios",
  },
  fr: { // Français (France)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Contactez-nous",
    description: "Chez MADE IN GERMANY, notre équipe d’experts propose des solutions d’ingénierie de précision adaptées à vos besoins professionnels. Contactez-nous pour explorer comment notre engagement qualité peut booster votre succès sur un marché mondial compétitif.",
    buttonStartPage: "Page d’Accueil",
    buttonChatBot: "Assistant Commercial",
  },
  it: { // Italiano (Italy)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Contattaci",
    description: "In MADE IN GERMANY, il nostro team di esperti offre soluzioni di ingegneria di precisione su misura per le tue esigenze aziendali. Contattaci per scoprire come il nostro impegno per la qualità può migliorare il tuo successo in un mercato globale competitivo.",
    buttonStartPage: "Pagina Iniziale",
    buttonChatBot: "Assistente Aziendale",
  },
  nl: { // Dutch (Netherlands)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Neem contact met ons op",
    description: "Bij MADE IN GERMANY biedt ons expertteam precisie-oplossingen op maat voor uw bedrijfsbehoeften. Neem contact met ons op om te ontdekken hoe onze kwaliteitsfocus uw succes kan vergroten in een competitieve wereldmarkt.",
    buttonStartPage: "Startpagina",
    buttonChatBot: "Bedrijfsassistent",
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titlePart1: "صنع في ألمانيا ©",
    titlePart2: "تواصلوا معنا",
    description: "في 'صنع في ألمانيا'، يقدم فريقنا المتخصص حلولاً هندسية دقيقة مصممة خصيصاً لاحتياجات عملك. تواصلوا معنا لاستكشاف كيف يمكن التزامنا بالجودة تعزيز نجاحكم في سوق عالمي تنافسي.",
    buttonStartPage: "الصفحة الرئيسية",
    buttonChatBot: "مساعد الأعمال",
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titlePart1: "德國製造 ©",
    titlePart2: "聯繫我們",
    description: "喺德國製造，我哋嘅專家團隊提供精準工程解決方案，量身定制以配合您嘅業務需求。聯繫我哋，探索我哋對品質嘅承諾如何提升您喺競爭激烈嘅全球市場中嘅成功。",
    buttonStartPage: "首頁",
    buttonChatBot: "商業助理",
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titlePart1: "德国制造 ©",
    titlePart2: "联系我们",
    description: "在德国制造，我们的专家团队提供量身定制的精密工程解决方案，满足您的业务需求。联系我们，探索我们对品质的承诺如何提升您在竞争激烈的全球市场中的成功。",
    buttonStartPage: "首页",
    buttonChatBot: "商业助理",
  },
  za: { // Afrikaans (South Africa)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Kontak Ons",
    description: "By MADE IN GERMANY bied ons kundigspan presisie-oplossings op maat vir u besigheidsbehoeftes. Kontak ons om te ontdek hoe ons kwaliteitstoewyding u sukses kan verbeter in 'n mededingende wêreldmark.",
    buttonStartPage: "Beginsblad",
    buttonChatBot: "Besigheidsassistent",
  },
  kr: { // 한국어 (South Korea) - Korean
    titlePart1: "메이드 인 저먼니 ©",
    titlePart2: "저희와 연락하세요",
    description: "메이드 인 저먼니에서는 전문 팀이 귀사의 비즈니스 요구에 맞춘 정밀 엔지니어링 솔루션을 제공합니다. 저희에게 연락하여 품질에 대한 우리의 헌신이 경쟁적인 글로벌 시장에서 성공을 어떻게 높일 수 있는지 알아보세요.",
    buttonStartPage: "시작 페이지",
    buttonChatBot: "비즈니스 조수",
  },
  jp: { // 日本語 (Japan) - Japanese
    titlePart1: "メイド・イン・ジャーマニー ©",
    titlePart2: "お問い合わせ",
    description: "メイド・イン・ジャーマニーでは、専門チームが貴社のビジネスニーズに合わせた精密工学ソリューションを提供します。お問い合わせいただき、品質への取り組みが競争の激しいグローバル市場で成功を高める方法をご確認ください。",
    buttonStartPage: "スタートページ",
    buttonChatBot: "ビジネスアシスタント",
  },
};

const HeroSectionContact: React.FC<HeroSectionProps> = ({ language = 'en' }) => {
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
      <section className="relative min-h-[25vh] w-full flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/made-in-germany-contact.webp')] bg-cover bg-center animate-zoom" />
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
                {TRANSLATIONS[language]?.titlePart2 || "Connect with Us"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
              {TRANSLATIONS[language]?.description ||
                "At MADE IN GERMANY, our expert team delivers precision-engineered solutions tailored to your business needs. Contact us to explore how our commitment to quality can enhance your success in a competitive global market."}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
              <button
                className="px-11 py-2 w-50 md:w-50 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
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

export default HeroSectionContact;