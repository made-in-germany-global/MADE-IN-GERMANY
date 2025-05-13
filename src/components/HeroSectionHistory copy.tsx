import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBot'; // Assuming ChatBot is in the same directory
import SEO from "../SEO";

// Define the props interface
interface HeroSectionProps {
  language?: string; // Optional prop with default value 'en'
}

// Define translations for HeroSectionHistory content
const TRANSLATIONS: Record<string, {
  titlePart1: string;
  titlePart2: string;
  description: string;
  buttonStartPage: string;
  buttonChatBot: string;
}> = {
  en: { // English (United Kingdom)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "A Legacy of Quality",
    description: "Discover how a once-critical label, imposed by Britain in 1887 to deter consumers from German goods, evolved into a globally respected symbol of trust and excellence. What began as an attempt to undermine German industry ignited a remarkable transformation, driven by relentless innovation, superior craftsmanship, and an unwavering commitment to precision. Over decades, companies like Siemens, Bosch, and Mercedes-Benz turned adversity into opportunity, setting new benchmarks that reshaped global standards and earned 'MADE IN GERMANY ©' its prestigious reputation.",
    buttonStartPage: "Start Page",
    buttonChatBot: "History Assistant",
  },
  de: { // Deutsch (Germany)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Ein Erbe der Qualität",
    description: "Erfahren Sie, wie ein einst kritisches Etikett, das 1887 von Großbritannien eingeführt wurde, um Verbraucher von deutschen Waren abzuhalten, zu einem weltweit respektierten Symbol für Vertrauen und Exzellenz wurde. Was als Versuch begann, die deutsche Industrie zu schwächen, entfachte eine bemerkenswerte Wende, geprägt von unermüdlicher Innovation, überlegener Handwerkskunst und einem unerschütterlichen Streben nach Präzision. Über Jahrzehnte hinweg setzten Firmen wie Siemens, Bosch und Mercedes-Benz neue Maßstäbe, die globale Standards neu definierten und 'MADE IN GERMANY ©' seinen angesehenen Ruf sicherten.",
    buttonStartPage: "Startseite",
    buttonChatBot: "Geschichtsassistent",
  },
  es: { // Español (Spain)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Un Legado de Calidad",
    description: "Descubra cómo una etiqueta crítica, impuesta por Gran Bretaña en 1887 para disuadir a los consumidores de productos alemanes, se convirtió en un símbolo mundialmente respetado de confianza y excelencia. Lo que empezó como un esfuerzo por debilitar la industria alemana desencadenó una transformación notable, impulsada por la innovación constante, la artesanía superior y un compromiso firme con la precisión. A lo largo de décadas, empresas como Siemens, Bosch y Mercedes-Benz convirtieron la adversidad en oportunidad, estableciendo nuevos estándares que redefinieron las normas globales y aseguraron la prestigiosa reputación de 'MADE IN GERMANY ©'.",
    buttonStartPage: "Página de Inicio",
    buttonChatBot: "Asistente de Historia",
  },
  fr: { // Français (France)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Un Héritage de Qualité",
    description: "Découvrez comment une étiquette critique, imposée par la Grande-Bretagne en 1887 pour décourager les consommateurs d’acheter des produits allemands, est devenue un symbole mondialement respecté de confiance et d’excellence. Ce qui débuta comme une tentative de nuire à l’industrie allemande déclencha une transformation remarquable, portée par une innovation incessante, un artisanat supérieur et un engagement inébranlable envers la précision. Pendant des décennies, des entreprises comme Siemens, Bosch et Mercedes-Benz ont transformé l’adversité en opportunité, établissant de nouvelles normes qui ont redéfini les standards mondiaux et assuré la réputation prestigieuse de 'MADE IN GERMANY ©'.",
    buttonStartPage: "Page d’Accueil",
    buttonChatBot: "Assistant Historique",
  },
  it: { // Italiano (Italy)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Un’Eredità di Qualità",
    description: "Scopri come un’etichetta critica, imposta dalla Gran Bretagna nel 1887 per scoraggiare i consumatori dai prodotti tedeschi, si è evoluta in un simbolo rispettato a livello globale di fiducia ed eccellenza. Quello che iniziò come un tentativo di indebolire l’industria tedesca scatenò una trasformazione straordinaria, guidata da un’innovazione incessante, un’artigianalità superiore e un impegno costante per la precisione. Nel corso dei decenni, aziende come Siemens, Bosch e Mercedes-Benz hanno trasformato le difficoltà in opportunità, stabilendo nuovi standard che hanno ridefinito le norme globali e consolidato la rinomata reputazione di 'MADE IN GERMANY ©'.",
    buttonStartPage: "Pagina Iniziale",
    buttonChatBot: "Assistente Storico",
  },
  nl: { // Dutch (Netherlands)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "Een Erfgoed van Kwaliteit",
    description: "Ontdek hoe een ooit kritisch label, opgelegd door Groot-Brittannië in 1887 om consumenten af te schrikken van Duitse goederen, uitgroeide tot een wereldwijd gerespecteerd symbool van vertrouwen en uitmuntendheid. Wat begon als een poging om de Duitse industrie te ondermijnen, ontketende een opmerkelijke omwenteling, gedreven door onophoudelijke innovatie, superieur vakmanschap en een niet-aflatende toewijding aan precisie. Door de decennia heen hebben bedrijven zoals Siemens, Bosch en Mercedes-Benz tegenspoed omgezet in kansen, nieuwe normen gesteld die wereldwijde standaarden herdefinieerden en de prestigieuze reputatie van 'MADE IN GERMANY ©' verankerd.",
    buttonStartPage: "Startpagina",
    buttonChatBot: "Geschiedenisassistent",
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titlePart1: "©صنع في ألمانيا",
    titlePart2: "إرث الجودة",
    description: "اكتشف كيف تحولت علامة نقدية، فرضتها بريطانيا في عام 1887 لردع المستهلكين عن السلع الألمانية، إلى رمز موثوق وموقر عالميًا للثقة والتميز. ما بدأ كمحاولة لتقويض الصناعة الألمانية أشعل تحولًا مذهلاً، مدفوعًا بالابتكار المستمر، والحرفية المتفوقة، والالتزام الثابت بالدقة. على مدى عقود، حولت شركات مثل سيمنز وبوش ومرسيدس-بنز التحديات إلى فرص، ووضعت معايير جديدة أعادت تشكيل المعايير العالمية وأكدت السمعة المرموقة لـ 'صنع في ألمانيا'.",
    buttonStartPage: "الصفحة الرئيسية",
    buttonChatBot: "مساعد التاريخ",
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titlePart1: "德國製造 ©",
    titlePart2: "品質傳承",
    description: "了解一個喺1887年由英國強加嘅批判性標籤點樣演變成全球受尊敬嘅信任同卓越象徵。原本意圖阻嚇消費者購買德國貨嘅舉動，點燃咗一場非凡嘅轉變，由無止境嘅創新、卓越嘅工藝同對精準嘅堅定承諾所推動。幾十年來，西門子、博世同埋平治等公司將逆境化為機遇，訂立新標準，重塑全球標準，並確立咗「德國製造」嘅崇高聲譽。",
    buttonStartPage: "首頁",
    buttonChatBot: "歷史助理",
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titlePart1: "德国制造 ©",
    titlePart2: "品质传承",
    description: "了解一个在1887年由英国强加的批判性标签如何演变为全球受尊敬的信任与卓越象征。原本意在阻止消费者购买德国货的举措，点燃了一场非凡的转变，由不断的创新、卓越的工艺和对精准的坚定承诺所推动。几十年来，西门子、博世和奔驰等公司将逆境转化为机遇，制定新标准，重塑全球规范，并确立了“德国制造”的崇高声誉。",
    buttonStartPage: "首页",
    buttonChatBot: "历史助理",
  },
  za: { // Afrikaans (South Africa)
    titlePart1: "MADE IN GERMANY ©",
    titlePart2: "’n Erfenis van Kwaliteit",
    description: "Ontdek hoe ’n eens kritiese etiket, wat in 1887 deur Brittanje opgelê is om verbruikers af te skrik van Duitse goedere, ontwikkel het tot ’n wêreldwyd gerespekteerde simbool van vertroue en uitnemendheid. Wat begin het as ’n poging om die Duitse industrie te ondermyn, het ’n merkwaardige omwenteling ontketen, aangedryf deur onophoudelike innovasie, voortreflike vakmanskap en ’n onwrikbare verbintenis tot presisie. Oor dekades heen het maatskappye soos Siemens, Bosch en Mercedes-Benz teëspoed in geleenthede omskep, nuwe standaarde gestel wat wêreldnorme herdefinieer het en die gesogte reputasie van 'MADE IN GERMANY ©' gevestig.",
    buttonStartPage: "Beginsblad",
    buttonChatBot: "Geskiedenisassistent",
  },
  kr: { // 한국어 (South Korea) - Korean
    titlePart1: "메이드 인 저먼니 ©",
    titlePart2: "품질의 유산",
    description: "1887년 영국이 소비자들로 하여금 독일 제품을 기피하게 하려던 비판적 라벨이 어떻게 세계적으로 존경받는 신뢰와 우수성의 상징으로 진화했는지 알아보세요. 독일 산업을 약화시키려는 시도로 시작된 것이 끝없는 혁신, 뛰어난 장인 정신, 그리고 정밀함에 대한 확고한 헌신으로 놀라운 변화를 일으켰습니다. 수십 년에 걸쳐 지멘스, 보쉬, 메르세데스-벤츠와 같은 회사들이 역경을 기회로 바꾸며 새로운 기준을 세웠고, 이는 글로벌 표준을 재정의하며 '메이드 인 저먼니'의 명성을 확립했습니다.",
    buttonStartPage: "시작 페이지",
    buttonChatBot: "역사 조수",
  },
  jp: { // 日本語 (Japan) - Japanese
    titlePart1: "メイド・イン・ジャーマニー ©",
    titlePart2: "品質の遺産",
    description: "1887年に英国が消費者をドイツ製品から遠ざけるために課した批判的なラベルが、どのように世界的に尊敬される信頼と卓越のシンボルへと進化したかをご覧ください。ドイツ産業を弱体化させようとする試みから始まったものが、絶え間ない革新、優れた職人技、そして精度への揺るぎない取り組みによって驚くべき変革を引き起こしました。数十年間にわたり、シーメンス、ボッシュ、メルセデス・ベンツなどの企業が逆境をチャンスに変え、新たな基準を設けて世界基準を再定義し、『メイド・イン・ジャーマニー』の名高い評判を確立しました。",
    buttonStartPage: "スタートページ",
    buttonChatBot: "歴史アシスタント",
  },
};

const HeroSectionHistory: React.FC<HeroSectionProps> = ({ language = 'en' }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [isChatBotOpen, setIsChatBotOpen] = useState<boolean>(false); // State to control chatbot visibility

  // Function to navigate to home page
  const handleStartPageClick = () => {
    navigate('/');
  };

  // Function to handle History Assistant button click and open chatbot
  const handleChatBotClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChatBotOpen(true); // Open the chatbot
  };

  // Split the title into two parts for coloring
  const title = TRANSLATIONS[language]?.titlePart1 || "MADE IN GERMANY";
  const titlePart1 = title.split(' ')[0]; // "MADE"
  const titlePart2 = title.split(' ')[1]; // "IN"
  const titlePart3 = title.split(' ').slice(2).join(' '); // "GERMANY"

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
          <div className="w-full h-full bg-[url('/hero/made-in-germany-history.webp')] bg-cover bg-center animate-zoom" />
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
                {TRANSLATIONS[language]?.titlePart2 || "A Legacy of Quality"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto sm:mx-0">
              {TRANSLATIONS[language]?.description ||
                "Discover how a once-critical label, imposed by Britain in 1887 to deter consumers from German goods, evolved into a globally respected symbol of trust and excellence. What began as an attempt to undermine German industry ignited a remarkable transformation, driven by relentless innovation, superior craftsmanship, and an unwavering commitment to precision. Over decades, companies like Siemens, Bosch, and Mercedes-Benz turned adversity into opportunity, setting new benchmarks that reshaped global standards and earned 'MADE IN GERMANY ©' its prestigious reputation."}
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
                {TRANSLATIONS[language]?.buttonChatBot || "History Assistant"}
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

export default HeroSectionHistory;