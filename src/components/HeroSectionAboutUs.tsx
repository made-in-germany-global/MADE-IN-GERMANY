import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot'; // Assuming ChatBot is in the same directory

// Define the props interface
interface HeroSectionProps {
  language?: string; // Optional prop with default value 'en'
}

// Define translations for HeroSectionMembership content
const TRANSLATIONS: Record<string, {
  titlePart1: string;
  titlePart2Line1: string;  // First line of titlePart2
  titlePart2Line2: string;  // Second line of titlePart2
  description: string;
  buttonStartPage: string;
  buttonChatBot: string;
}> = {
  en: { // English (United Kingdom)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Showcasing German",
    titlePart2Line2: "Excellence to the World Stage",
    description: "Step into the international spotlight with 'MADE IN GERMANY © ', the premier platform showcasing German manufacturers and the nation’s excellence to the world. As your gateway to global markets, we connect you with a prestigious network, amplify your brand’s reach, and uphold a legacy of quality that defines German craftsmanship. Join us to elevate your presence and forge strategic partnerships that resonate across borders.",
    buttonStartPage: "Explore Membership",
    buttonChatBot: "Global Advisor",
  },
  de: { // Deutsch (Germany)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Deutsche Exzellenz auf der",
    titlePart2Line2: "Weltbühne Präsentieren",
    description: "Treten Sie ins internationale Rampenlicht mit 'MADE IN GERMANY © ', der führenden Plattform, die deutsche Hersteller und die Exzellenz der Nation weltweit präsentiert. Als Ihr Tor zu globalen Märkten verbinden wir Sie mit einem prestigeträchtigen Netzwerk, erweitern die Reichweite Ihrer Marke und bewahren ein Erbe der Qualität, das deutsche Handwerkskunst auszeichnet. Schließen Sie sich uns an, um Ihre Präsenz zu steigern und strategische Partnerschaften zu schmieden.",
    buttonStartPage: "Mitgliedschaft Entdecken",
    buttonChatBot: "Globaler Berater",
  },
  es: { // Español (Spain)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Mostrando la Excelencia",
    titlePart2Line2: "Alemana al Escenario Mundial",
    description: "Entra en el escenario internacional con 'MADE IN GERMANY © ', la plataforma líder que muestra a los fabricantes alemanes y la excelencia de la nación al mundo. Como tu puerta a los mercados globales, te conectamos con una red prestigiosa, amplificamos el alcance de tu marca y mantenemos un legado de calidad que define la artesanía alemana. Únete para elevar tu presencia y forjar alianzas estratégicas que trascienden fronteras.",
    buttonStartPage: "Explorar Membresía",
    buttonChatBot: "Asesor Global",
  },
  fr: { // Français (France)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Présentant l’Excellence",
    titlePart2Line2: "Allemande sur la Scène Mondiale",
    description: "Entrez sous les projecteurs internationaux avec 'MADE IN GERMANY © ', la plateforme de référence qui met en avant les fabricants allemands et l’excellence nationale à travers le monde. En tant que portail vers les marchés mondiaux, nous vous connectons à un réseau prestigieux, amplifions la portée de votre marque et perpétuons un héritage de qualité qui caractérise l’artisanat allemand. Rejoignez-nous pour élever votre présence et tisser des partenariats stratégiques au-delà des frontières.",
    buttonStartPage: "Découvrir l’Adhésion",
    buttonChatBot: "Conseiller Global",
  },
  it: { // Italiano (Italy)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Mostrando l’Eccellenza",
    titlePart2Line2: "Tedesca sul Palcoscenico Mondiale",
    description: "Sali sul palcoscenico internazionale con 'MADE IN GERMANY © ', la piattaforma leader che presenta i produttori tedeschi e l’eccellenza della nazione al mondo. Come tua porta verso i mercati globali, ti connettiamo a una rete prestigiosa, ampliamo la portata del tuo marchio e sosteniamo un’eredità di qualità che definisce l’artigianato tedesco. Unisciti a noi per elevare la tua presenza e creare partnership strategiche che attraversano i confini.",
    buttonStartPage: "Esplora Membership",
    buttonChatBot: "Consulente Globale",
  },
  nl: { // Dutch (Netherlands)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Duitse Excellentie Wereldwijd",
    titlePart2Line2: "op het Podium Tonen",
    description: "Betreed het internationale podium met 'MADE IN GERMANY © ', het toonaangevende platform dat Duitse fabrikanten en de excellentie van de natie wereldwijd presenteert. Als uw poort naar globale markte verbinden wij u met een prestigieus netwerk, vergroten we het bereik van uw merk en handhaven we een erfenis van kwaliteit die het Duitse vakmanschap kenmerkt. Sluit u aan om uw aanwezigheid te versterken en strategische partnerschappen te smeden over grenzen heen.",
    buttonStartPage: "Ontdek Lidmaatschap",
    buttonChatBot: "Globale Adviseur",
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titlePart1: "©صنع في ألمانيا",
    titlePart2Line1: "عرض التميز الألماني",
    titlePart2Line2: "على المسرح العالمي",
    description: "ادخل إلى الأضواء الدولية مع 'صنع في ألمانيا'، المنصة الرائدة التي تعرض المصنعين الألمان وتفوق الأمة للعالم. كبوابتك إلى الأسواق العالمية، نربطك بشبكة مرموقة، نعزز من وصول علامتك التجارية، ونحافظ على إرث الجودة الذي يميز الحرفية الألمانية. انضم إلينا لرفع حضورك وصيغ شراكات استراتيجية تتجاوز الحدود.",
    buttonStartPage: "استكشف العضوية",
    buttonChatBot: "مستشار عالمي",
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titlePart1: "德國製造 ©",
    titlePart2Line1: "向世界舞台展示",
    titlePart2Line2: "德國卓越成就",
    description: "通過「德國製造」踏上國際舞台，這是展示德國製造商及國家卓越成就的領先平台。作為您通往全球市場的門戶，我們將您連繫至享有盛譽的網絡，擴大您的品牌影響力，並秉承定義德國工藝的品質傳承。加入我們，提升您的存在感，並締造跨越國界的策略性夥伴關係。",
    buttonStartPage: "探索會員資格",
    buttonChatBot: "全球顧問",
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titlePart1: "德国制造 ©",
    titlePart2Line1: "向世界舞台展示",
    titlePart2Line2: "德国卓越成就",
    description: "通过“德国制造”踏上国际舞台，这是展示德国制造商及国家卓越成就的领先平台。作为您通往全球市场的门户，我们将您连接至享有盛誉的网络，扩大您的品牌影响力，并秉承定义德国工艺的品质传承。加入我们，提升您的存在感，并缔造跨越国界的策略性伙伴关系。",
    buttonStartPage: "探索会员资格",
    buttonChatBot: "全球顾问",
  },
  za: { // Afrikaans (South Africa)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Duitse Uitnemendheid",
    titlePart2Line2: "Wêreldwyd op die Verhoog",
    description: "Betree die internasionale verhoog met 'MADE IN GERMANY © ', die voorste platform wat Duitse vervaardigers en die nasie se uitnemendheid wêreldwyd vertoon. As jou poort na globale markte verbind ons jou met ’n gesogte netwerk, vergroot ons jou handelsmerk se bereik en handhaaf ’n erfenis van kwaliteit wat Duitse vakmanskap definieer. Sluit by ons aan om jou teenwoordigheid te versterk en strategiese vennootskappe oor grense heen te smee.",
    buttonStartPage: "Verken Lidmaatskap",
    buttonChatBot: "Globale Adviseur",
  },
  kr: { // 한국어 (South Korea) - Korean
    titlePart1: "메이드 인 저먼니 ©",
    titlePart2Line1: "세계 무대에 독일",
    titlePart2Line2: "우수성을 선보이다",
    description: "'메이드 인 저먼니'로 국제 무대에 오르세요. 독일 제조업체와 국가의 우수성을 세계에 알리는 선도적인 플랫폼입니다. 글로벌 시장으로의 관문으로서, 저희는 당신을 명망 있는 네트워크에 연결하고 브랜드의 도달 범위를 넓히며 독일 장인 정신을 정의하는 품질의 유산을 유지합니다. 저희와 함께하여 당신의 존재감을 높이고 국경을 초월한 전략적 파트너십을 구축하세요.",
    buttonStartPage: "멤버십 탐색",
    buttonChatBot: "글로벌 조언자",
  },
  jp: { // 日本語 (Japan) - Japanese
    titlePart1: "メイド・イン・ジャーマニー ©",
    titlePart2Line1: "世界の舞台にドイツの",
    titlePart2Line2: "卓越性を示す",
    description: "「メイド・イン・ジャーマニー」で国際舞台に立ちましょう。ドイツの製造業者と国の卓越性を世界に示すリーディングプラットフォームです。グローバル市場へのゲートウェイとして、私たちはあなたを名誉あるネットワークに結びつけ、ブランドの到達範囲を拡大し、ドイツの職人技を定義する品質の遺産を守ります。私たちに参加して、存在感を高め、国境を越えた戦略的パートナーシップを築いてください。",
    buttonStartPage: "メンバーシップを探る",
    buttonChatBot: "グローバルアドバイザー",
  },
};

const HeroSectionMembership: React.FC<HeroSectionProps> = ({ language = 'en' }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isChatBotOpen, setIsChatBotOpen] = useState<boolean>(false); // State to control chatbot visibility

  // Function to navigate to membership page
  const handleStartPageClick = () => {
    navigate('/membership'); // Adjust this path based on your routing setup
  };

  // Function to handle Global Advisor button click and open chatbot
  const handleChatBotClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChatBotOpen(true); // Open the chatbot
  };

  // Split the title into parts for coloring
  const title = TRANSLATIONS[language]?.titlePart1 || "MADE IN GERMANY © ";
  const titlePart1 = title.split(' ')[0]; // "MADE"
  const titlePart2 = title.split(' ')[1]; // "IN"
  const titlePart3 = title.split(' ').slice(2).join(' '); // "GERMANY"

  return (
    <>
      <section className="relative min-h-[25vh] w-full flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/hero/made-in-germany-membership-tier.png')] bg-cover bg-center animate-zoom" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center sm:text-left text-white space-y-6 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto sm:mx-0 space-y-6">
            {/* Main Title with German Flag Colors, split into two lines */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span style={{ color: '#FFFFFF' }}>{titlePart1}</span>{' '}
              <span style={{ color: '#DD0000' }}>{titlePart2}</span>{' '}
              <span style={{ color: '#FFCE00' }}>{titlePart3}</span>
              <br /> {/* Line break for the second part */}
              <span className="inline sm:inline lg:text-5xl" style={{ color: '#FFFFFF' }}>
                {TRANSLATIONS[language]?.titlePart2Line1 || "Showcasing German"}
              </span>
              <br /> {/* Line break between the two lines of titlePart2 */}
              <span className="inline sm:inline lg:text-5xl" style={{ color: '#FFFFFF' }}>
                {TRANSLATIONS[language]?.titlePart2Line2 || "Excellence to the World Stage"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
              {TRANSLATIONS[language]?.description ||
                "Step into the international spotlight with 'MADE IN GERMANY © ', the premier platform showcasing German manufacturers and the nation’s excellence to the world. As your gateway to global markets, we connect you with a prestigious network, amplify your brand’s reach, and uphold a legacy of quality that defines German craftsmanship. Join us to elevate your presence and forge strategic partnerships that resonate across borders."}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
              <button
                className="px-6 py-2 w-50 md:w-50 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
                onClick={handleStartPageClick} // Navigate to membership page
              >
                {TRANSLATIONS[language]?.buttonStartPage || "Explore Membership"}
              </button>

              <button
                className="px-4 py-2 w-50 md:w-50 rounded-[5px] bg-transparent text-white font-medium border border-[#FFFFFF] transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#0B111F]"
                onClick={handleChatBotClick} // Open chatbot
              >
                {TRANSLATIONS[language]?.buttonChatBot || "Global Advisor"}
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

export default HeroSectionMembership;