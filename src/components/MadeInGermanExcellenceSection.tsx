import React from 'react';
import { Check, Facebook, Instagram } from 'lucide-react';

// Define props interface for ExcellenceSection
interface ExcellenceSectionProps {
  language?: string;
}

// Define translations for ExcellenceSection content
const TRANSLATIONS: Record<string, {
  titleLines: string[];
  checklist: string[];
}> = {
  en: { // English (United Kingdom)
    titleLines: [
      "Premium MADE IN GERMANY ©  Quality Products, Global Distribution with Exceptional Standards, Bulk Excellence for International Markets."
    ],
    checklist: [
      "Superior product quality",
      "Reliable bulk supply",
      "German manufacturing expertise",
      "Worldwide delivery network",
      "Trusted industry partnerships"
    ]
  },
  de: { // Deutsch (Germany)
    titleLines: [
      "Hochwertige MADE IN GERMANY ©  Qualitätsprodukte, Globale Verteilung mit exzellenten Standards, Massenexzellenz für internationale Märkte."
    ],
    checklist: [
      "Überlegene Produktqualität",
      "Zuverlässige Massenlieferung",
      "Deutsche Fertigungsexpertise",
      "Weltweites Liefernetzwerk",
      "Vertrauensvolle Industriepartnerschaften"
    ]
  },
  es: { // Español (Spain)
    titleLines: [
      "Productos de calidad MADE IN GERMANY ©  premium, Distribución global con estándares excepcionales, Excelencia en bulk para mercados internacionales."
    ],
    checklist: [
      "Calidad superior del producto",
      "Suministro bulk confiable",
      "Experiencia en manufactura alemana",
      "Red de entrega mundial",
      "Asociaciones industriales confiables"
    ]
  },
  fr: { // Français (France)
    titleLines: [
      "Produits de qualité premium MADE IN GERMANY © , Distribution mondiale avec des normes exceptionnelles, Excellence en vrac pour les marchés internationaux."
    ],
    checklist: [
      "Qualité supérieure des produits",
      "Approvisionnement fiable en vrac",
      "Expertise en fabrication allemande",
      "Réseau de livraison mondial",
      "Partenariats industriels fiables"
    ]
  },
  it: { // Italiano (Italy)
    titleLines: [
      "Prodotti di qualità premium MADE IN GERMANY © , Distribuzione globale con standard eccezionali, Eccellenza in bulk per i mercati internazionali."
    ],
    checklist: [
      "Qualità superiore del prodotto",
      "Fornitura bulk affidabile",
      "Competenza nella produzione tedesca",
      "Rete di consegna mondiale",
      "Partnership industriali affidabili"
    ]
  },
  nl: { // Dutch (Netherlands)
    titleLines: [
      "Premium MADE IN GERMANY ©  kwaliteitsproducten, Wereldwijde distributie met uitzonderlijke normen, Bulk excellentie voor internationale markten."
    ],
    checklist: [
      "Superieure productkwaliteit",
      "Betrouwbare bulklevering",
      "Duitse productie-expertise",
      "Wereldwijd leveringsnetwerk",
      "Betrouwbare industriepartnerschappen"
    ]
  },
  sa: { // العربية (السعودية) - Arabic (Saudi Arabia)
    titleLines: [
      "منتجات عالية الجودة صنع في ألمانيا، توزيع عالمي بمعايير استثنائية، تميز بالجملة للأسواق الدولية."
    ],
    checklist: [
      "جودة منتج متفوقة",
      "توريد بالجملة موثوق",
      "خبرة التصنيع الألمانية",
      "شبكة توزيع عالمية",
      "شراكات صناعية موثوقة"
    ]
  },
  hk: { // 繁體中文 (Hong Kong) - Traditional Chinese
    titleLines: [
      "優質德國製造產品，全球分銷與卓越標準，國際市場的大宗卓越。"
    ],
    checklist: [
      "優越的產品質量",
      "可靠的大宗供應",
      "德國製造專業知識",
      "全球配送網絡",
      "可信的行業合作關係"
    ]
  },
  sg: { // 简体中文 (Singapore) - Simplified Chinese
    titleLines: [
      "优质德国制造产品，全球分销与卓越标准，国际市场的大宗卓越。"
    ],
    checklist: [
      "优越的产品质量",
      "可靠的大宗供应",
      "德国制造专业知识",
      "全球配送网络",
      "可信的行业合作关系"
    ]
  },
  za: { // Afrikaans (South Africa)
    titleLines: [
      "Premium MADE IN GERMANY ©  kwaliteit produkte, Wêreldwye verspreiding met uitsonderlike standaarde, Grootmaat uitnemendheid vir internasionale markte."
    ],
    checklist: [
      "Uitstekende produkkwaliteit",
      "Betroubare grootmaataanbod",
      "Duitse vervaardigingskundigheid",
      "Wêreldwye afleweringsnetwerk",
      "Vertroude industrievennootskappe"
    ]
  },
  kr: { // 한국어 (South Korea) - Korean
    titleLines: [
      "프리미엄 메이드 인 저머니 품질 제품, 탁월한 표준의 글로벌 유통, 국제 시장을 위한 대량 우수성."
    ],
    checklist: [
      "우수한 제품 품질",
      "신뢰할 수 있는 대량 공급",
      "독일 제조 전문성",
      "전 세계 배송 네트워크",
      "신뢰할 수 있는 산업 파트너십"
    ]
  },
  jp: { // 日本語 (Japan) - Japanese
    titleLines: [
      "プレミアムメイドインジャーマニー品質製品、卓越した基準でのグローバル流通、国際市場向けの大量優越性。"
    ],
    checklist: [
      "優れた製品品質",
      "信頼性の高い大量供給",
      "ドイツ製造の専門知識",
      "世界的な配送ネットワーク",
      "信頼できる産業パートナーシップ"
    ]
  }
};

const ExcellenceSection: React.FC<ExcellenceSectionProps> = ({ language = 'en' }) => {
  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];
  
  return (
    <div className="w-full bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat py-6 lg:py-12 px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {/* Left Content - Added padding top to push content down */}
          <div className="w-full lg:w-1/2 space-y-6 pt-8 lg:pt-0 flex flex-col justify-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white uppercase leading-tight">
                {translations.titleLines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
            </div>
            <div>
              {translations.checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white ">
                  <Check className="w-4 h-4 text-white " />
                  <span className=" text-1.5xl ">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content with Image */}
          <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center">
            <div className="relative w-1/2 h-72 lg:h-96 flex items-center justify-center">
              {/* Top Left - Yellow */}
              <div className="absolute left-0 top-0 w-1/2 h-1/2 animate-glow-tl">
                <div className="absolute inset-0 bg-gradient-radial from-yellow-400/50 to-transparent blur-md"></div>
              </div>
              
              {/* Top Right - Blue */}
              <div className="absolute right-0 top-0 w-1/2 h-1/2 animate-glow-tr">
                <div className="absolute inset-0 bg-gradient-radial from-blue-400/50 to-transparent blur-md"></div>
              </div>
              
              {/* Bottom Left - Blue */}
              <div className="absolute left-0 bottom-0 w-1/2 h-1/2 animate-glow-bl">
                <div className="absolute inset-0 bg-gradient-radial from-blue-400/50 to-transparent blur-md"></div>
              </div>
              
              {/* Bottom Right - Yellow */}
              <div className="absolute right-0 bottom-0 w-1/2 h-1/2 animate-glow-br">
                <div className="absolute inset-0 bg-gradient-radial from-yellow-400/50 to-transparent blur-md"></div>
              </div>
              
              {/* Main shadow */}
              <div className="absolute inset-0 animate-pulse-shadow rounded-full scale-90">
                <div className="absolute inset-0 bg-gradient-conic from-blue-500/40 via-yellow-400/40 to-blue-500/40 blur-xl rounded-full"></div>
              </div>
              
              <img 
                src="/made-in-germany-footer.webp"
                alt="MADE IN GERMANY © "
                className="w-full h-full object-contain relative z-10 max-w-[90%] mx-auto"
              />
            </div>
            
            {/* Social Icons */}
            <div className="flex z-50 justify-center gap-6 mb-[-30px] mt-[-30px] w-full pb-0">
              <a 
                href="https://wa.me/4915753703790" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors flex justify-center hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="text-gray-500 hover:text-white"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors flex justify-center hover:text-white"
              >
                <Facebook className="w-6 h-6 text-gray-500 hover:text-white" />
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-colors flex justify-center hover:text-white"
              >
                <Instagram className="w-6 h-6 text-gray-500 hover:text-white" />
              </a>
            </div>

            {/* Add CSS for floating animation */}
            <style jsx>{`
              @keyframes float {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-20px);
                }
                100% {
                  transform: translateY(0);
                }
              }
              .animate-float {
                animation: float 4s infinite ease-in-out;
              }
            `}</style>
          </div>
        </div>
      </div>
   
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        .animate-glow-tl {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-glow-tr {
          animation: glow 2s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-glow-bl {
          animation: glow 2s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-glow-br {
          animation: glow 2s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        @keyframes pulseShadow {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.5; transform: scale(1); }
        }
        
        .animate-pulse-shadow {
          animation: pulseShadow 4s ease-in-out infinite;
        }

        .bg-gradient-conic {
          background-image: conic-gradient(var(--tw-gradient-stops));
        }

        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default ExcellenceSection;