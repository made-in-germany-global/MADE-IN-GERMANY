import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot'; // Assuming ChatBot is in the same directory

// Define the props interface
interface HeroSectionProps {
  language?: string; // Optional prop with default value 'en'
}

// Define translations for HeroSectionCertificates content
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
    titlePart2Line1: "Certified Excellence",
    titlePart2Line2: "in Global Standards",
    description: "Discover the pinnacle of quality with 'MADE IN GERMANY © ' certifications, including TÜV, CE, DIN, ISO, GS, and EMC. These prestigious standards reflect Germany’s unwavering commitment to precision, safety, and reliability. As your trusted partner, we highlight these certifications to elevate your brand’s credibility, ensuring global recognition and compliance with the highest industry benchmarks. Explore how these marks of excellence can empower your success.",
    buttonStartPage: "View Certifications",
    buttonChatBot: "Quality Advisor",
  },
  de: { // Deutsch (Germany)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Zertifizierte Exzellenz",
    titlePart2Line2: "in Globalen Standards",
    description: "Entdecken Sie die Spitze der Qualität mit den 'MADE IN GERMANY © '-Zertifizierungen, einschließlich TÜV, CE, DIN, ISO, GS und EMC. Diese renommierten Standards spiegeln Deutschlands unerschütterliches Engagement für Präzision, Sicherheit und Zuverlässigkeit wider. Als Ihr vertrauensvoller Partner heben wir diese Zertifizierungen hervor, um die Glaubwürdigkeit Ihrer Marke zu steigern und weltweite Anerkennung sowie die Einhaltung höchster Branchenstandards zu gewährleisten.",
    buttonStartPage: "Zertifizierungen Ansehen",
    buttonChatBot: "Qualitätsberater",
  },
  es: { // Español (Spain)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Excelencia Certificada",
    titlePart2Line2: "en Estándares Globales",
    description: "Descubre el máximo nivel de calidad con las certificaciones 'MADE IN GERMANY © ', que incluyen TÜV, CE, DIN, ISO, GS y EMC. Estos prestigiosos estándares reflejan el compromiso inquebrantable de Alemania con la precisión, la seguridad y la fiabilidad. Como tu socio de confianza, destacamos estas certificaciones para elevar la credibilidad de tu marca, asegurando reconocimiento global y cumplimiento con los más altos estándares de la industria.",
    buttonStartPage: "Ver Certificaciones",
    buttonChatBot: "Asesor de Calidad",
  },
  fr: { // Français (France)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Excellence Certifiée",
    titlePart2Line2: "aux Normes Mondiales",
    description: "Découvrez le summum de la qualité avec les certifications 'MADE IN GERMANY © ', incluant TÜV, CE, DIN, ISO, GS et EMC. Ces normes prestigieuses reflètent l’engagement indéfectible de l’Allemagne envers la précision, la sécurité et la fiabilité. En tant que partenaire de confiance, nous mettons en avant ces certifications pour renforcer la crédibilité de votre marque, garantissant une reconnaissance mondiale et le respect des plus hauts standards industriels.",
    buttonStartPage: "Voir les Certifications",
    buttonChatBot: "Conseiller Qualité",
  },
  it: { // Italiano (Italy)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Eccellenza Certificata",
    titlePart2Line2: "negli Standard Globali",
    description: "Scopri il vertice della qualità con le certificazioni 'MADE IN GERMANY © ', che includono TÜV, CE, DIN, ISO, GS ed EMC. Questi prestigiosi standard riflettono l’impegno costante della Germania per precisione, sicurezza e affidabilità. Come partner di fiducia, evidenziamo queste certificazioni per elevare la credibilità del tuo marchio, garantendo riconoscimento globale e conformità ai più alti standard industriali.",
    buttonStartPage: "Visualizza Certificazioni",
    buttonChatBot: "Consulente Qualità",
  },
  nl: { // Dutch (Netherlands)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Gecertificeerde Excellentie",
    titlePart2Line2: "in Wereldwijde Normen",
    description: "Ontdek het toppunt van kwaliteit met 'MADE IN GERMANY © '-certificeringen, waaronder TÜV, CE, DIN, ISO, GS en EMC. Deze prestigieuze normen weerspiegelen de onwrikbare toewijding van Duitsland aan precisie, veiligheid en betrouwbaarheid. Als uw vertrouwde partner benadrukken wij deze certificeringen om de geloofwaardigheid van uw merk te versterken, met wereldwijde erkenning en naleving van de hoogste industrienormen.",
    buttonStartPage: "Bekijk Certificeringen",
    buttonChatBot: "Kwaliteitsadviseur",
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titlePart1: "©صنع في ألمانيا",
    titlePart2Line1: "التميز المعتمد",
    titlePart2Line2: "في المعايير العالمية",
    description: "اكتشف قمة الجودة مع شهادات 'صنع في ألمانيا'، التي تشمل TÜV، CE، DIN، ISO، GS، وEMC. تعكس هذه المعايير المرموقة التزام ألمانيا الثابت بالدقة، السلامة، والموثوقية. كشريك موثوق، نحن نسلط الضوء على هذه الشهادات لتعزيز مصداقية علامتك التجارية، مضمونين الاعتراف العالمي والالتزام بأعلى معايير الصناعة.",
    buttonStartPage: "عرض الشهادات",
    buttonChatBot: "مستشار الجودة",
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titlePart1: "德國製造 ©",
    titlePart2Line1: "認證卓越",
    titlePart2Line2: "全球標準",
    description: "探索「德國製造」認證的品質巔峰，包括TÜV、CE、DIN、ISO、GS和EMC。這些享有盛譽的標準反映了德國對精確、安全和可靠性的堅定承諾。作為您值得信賴的合作夥伴，我們強調這些認證以提升您品牌的信譽，確保全球認可並符合最高的行業標準。",
    buttonStartPage: "查看認證",
    buttonChatBot: "品質顧問",
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titlePart1: "德国制造 ©",
    titlePart2Line1: "认证卓越",
    titlePart2Line2: "全球标准",
    description: "探索“德国制造”认证的品质巅峰，包括TÜV、CE、DIN、ISO、GS和EMC。这些享有盛誉的标准反映了德国对精确、安全和可靠性的坚定承诺。作为您值得信赖的合作伙伴，我们强调这些认证以提升您品牌的信誉，确保全球认可并符合最高的行业标准。",
    buttonStartPage: "查看认证",
    buttonChatBot: "品质顾问",
  },
  za: { // Afrikaans (South Africa)
    titlePart1: "MADE IN GERMANY ©  ©",
    titlePart2Line1: "Gesertifiseerde Uitnemendheid",
    titlePart2Line2: "in Globale Standaarde",
    description: "Ontdek die toppunt van kwaliteit met 'MADE IN GERMANY © '-sertifisering, insluitend TÜV, CE, DIN, ISO, GS en EMC. Hierdie gesogte standaarde weerspieël Duitsland se onwrikbare toewyding aan presisie, veiligheid en betroubaarheid. As u betroubare vennoot beklemtoon ons hierdie sertifisering om u handelsmerk se geloofwaardigheid te versterk, met wêreldwye erkenning en nakoming van die hoogste industriestandaarde.",
    buttonStartPage: "Besigtig Sertifisering",
    buttonChatBot: "Kwaliteitadviseur",
  },
  kr: { // 한국어 (South Korea) - Korean
    titlePart1: "메이드 인 저먼니 ©",
    titlePart2Line1: "인증된 우수성",
    titlePart2Line2: "글로벌 표준",
    description: "TÜV, CE, DIN, ISO, GS, EMC를 포함한 '메이드 인 저먼니' 인증으로 품질의 정점을 발견하세요. 이 권위 있는 표준들은 독일의 정밀성, 안전성, 신뢰성에 대한 확고한 헌신을 반영합니다. 신뢰할 수 있는 파트너로서, 우리는 이러한 인증을 강조하여 브랜드의 신뢰도를 높이고 글로벌 인정과 최고의 산업 표준 준수를 보장합니다.",
    buttonStartPage: "인증 보기",
    buttonChatBot: "품질 조언자",
  },
  jp: { // 日本語 (Japan) - Japanese
    titlePart1: "メイド・イン・ジャーマニー ©",
    titlePart2Line1: "認定された卓越性",
    titlePart2Line2: "グローバル基準",
    description: "TÜV、CE、DIN、ISO、GS、EMCを含む「メイド・イン・ジャーマニ」の認証で、品質の頂点を発見してください。これらの名誉ある基準は、ドイツの精度、安全性、信頼性に対する揺るぎない取り組みを反映しています。信頼できるパートナーとして、これらの認証を強調し、ブランドの信頼性を高め、グローバルな認知と最高の業界基準への準拠を保証します。",
    buttonStartPage: "認証を見る",
    buttonChatBot: "品質アドバイザー",
  },
};

const HeroSectionCertificates: React.FC<HeroSectionProps> = ({ language = 'en' }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isChatBotOpen, setIsChatBotOpen] = useState<boolean>(false); // State to control chatbot visibility

  // Function to navigate to certifications page
  const handleStartPageClick = () => {
    navigate('/certifications'); // Adjust this path based on your routing setup
  };

  // Function to handle Quality Advisor button click and open chatbot
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
          <div className="w-full h-full bg-[url('/hero/made-in-germany-certificates.png')] bg-cover bg-center animate-zoom" />
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
                {TRANSLATIONS[language]?.titlePart2Line1 || "Certified Excellence"}
              </span>
              <br /> {/* Line break between the two lines of titlePart2 */}
              <span className="inline sm:inline lg:text-5xl" style={{ color: '#FFFFFF' }}>
                {TRANSLATIONS[language]?.titlePart2Line2 || "in Global Standards"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
              {TRANSLATIONS[language]?.description ||
                "Discover the pinnacle of quality with 'MADE IN GERMANY © ' certifications, including TÜV, CE, DIN, ISO, GS, and EMC. These prestigious standards reflect Germany’s unwavering commitment to precision, safety, and reliability. As your trusted partner, we highlight these certifications to elevate your brand’s credibility, ensuring global recognition and compliance with the highest industry benchmarks. Explore how these marks of excellence can empower your success."}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6">
              <button
                className="px-6 py-2 w-50 md:w-50 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
                onClick={handleStartPageClick} // Navigate to certifications page
              >
                {TRANSLATIONS[language]?.buttonStartPage || "View Certifications"}
              </button>

              <button
                className="px-4 py-2 w-50 md:w-50 rounded-[5px] bg-transparent text-white font-medium border border-[#FFFFFF] transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#0B111F]"
                onClick={handleChatBotClick} // Open chatbot
              >
                {TRANSLATIONS[language]?.buttonChatBot || "Quality Advisor"}
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

export default HeroSectionCertificates;