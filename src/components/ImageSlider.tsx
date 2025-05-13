import React, { useState, useEffect } from 'react';

// Define props interface for ImageSlider
interface ImageSliderProps {
  language?: string;
}

// Define the slider item interface
interface SliderItem {
  id: number;
  content: string;
  image: string;
  caption: string;
  alt: string;
}

// Define translations for ImageSlider content
const TRANSLATIONS: Record<string, SliderItem[]> = {
  en: [
    {
      id: 0,
      content: "Exemplifying German engineering precision through advanced robotic systems",
      image: "/hero/made-in-germany-box.webp",
      caption: "Engineering Precision",
      alt: "Robotic arm handling a box with MADE IN GERMANY ©  label"
    },
    {
      id: 1,
      content: "Showcasing German craftsmanship in the production of resilient materials",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "Craftsmanship Excellence",
      alt: "Stack of colorful shipping containers"
    },
    {
      id: 2,
      content: "Highlighting German ingenuity in designing state-of-the-art production facilities",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "Facility Ingenuity",
      alt: "Modern warehouse with MADE IN GERMANY ©  signage"
    },
    {
      id: 3,
      content: "Demonstrating German industrial leadership in world-renowned manufacturing plants",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "Industrial Leadership",
      alt: "Large industrial facility with MADE IN GERMANY ©  branding"
    }
  ],
  de: [
    {
      id: 0,
      content: "Beispielhafte Präzision des deutschen Ingenieurwesens durch fortschrittliche Robotersysteme",
      image: "/hero/made-in-germany-box.webp",
      caption: "Ingenieurpräzision",
      alt: "Roboterarm, der eine Box mit MADE IN GERMANY © -Aufschrift handhabt"
    },
    {
      id: 1,
      content: "Vorstellung deutschen Handwerks bei der Herstellung widerstandsfähiger Materialien",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "Handwerkskunst",
      alt: "Stapel bunter Versandcontainer"
    },
    {
      id: 2,
      content: "Hervorhebung deutscher Ingeniosität bei der Gestaltung moderner Produktionsanlagen",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "Anlagen-Ingeniosität",
      alt: "Modernes Lager mit MADE IN GERMANY © -Schild"
    },
    {
      id: 3,
      content: "Demonstration deutscher Industrieführerschaft in weltbekannten Fertigungsstätten",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "Industrieführung",
      alt: "Große Industrieanlage mit MADE IN GERMANY © -Marke"
    }
  ],
  es: [
    {
      id: 0,
      content: "Ejemplo de precisión de la ingeniería alemana a través de sistemas robóticos avanzados",
      image: "/hero/made-in-germany-box.webp",
      caption: "Precisión en Ingeniería",
      alt: "Brazo robótico manejando una caja con etiqueta MADE IN GERMANY © "
    },
    {
      id: 1,
      content: "Destacando la artesanía alemana en la producción de materiales resistentes",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "Excelencia Artesanal",
      alt: "Pila de contenedores de envío coloridos"
    },
    {
      id: 2,
      content: "Resaltando la ingeniosidad alemana en el diseño de instalaciones de producción de vanguardia",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "Ingenio en Instalaciones",
      alt: "Almacén moderno con señalización MADE IN GERMANY © "
    },
    {
      id: 3,
      content: "Demostrando el liderazgo industrial alemán en plantas de fabricación de renombre mundial",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "Liderazgo Industrial",
      alt: "Gran instalación industrial con marca MADE IN GERMANY © "
    }
  ],
  fr: [
    {
      id: 0,
      content: "Exemple de précision de l'ingénierie allemande grâce à des systèmes robotiques avancés",
      image: "/hero/made-in-germany-box.webp",
      caption: "Précision en Ingénierie",
      alt: "Bras robotique manipulant une boîte avec étiquette MADE IN GERMANY © "
    },
    {
      id: 1,
      content: "Mise en avant de l'artisanat allemand dans la production de matériaux résistants",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "Excellence Artisanale",
      alt: "Pile de conteneurs d'expédition colorés"
    },
    {
      id: 2,
      content: "Mise en lumière de l'ingéniosité allemande dans la conception d'installations de production modernes",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "Ingéniosité des Installations",
      alt: "Entrepôt moderne avec signalétique MADE IN GERMANY © "
    },
    {
      id: 3,
      content: "Démonstration du leadership industriel allemand dans des usines de fabrication renommées mondialement",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "Leadership Industriel",
      alt: "Grande installation industrielle avec marque MADE IN GERMANY © "
    }
  ],
  it: [
    {
      id: 0,
      content: "Esempio di precisione dell'ingegneria tedesca attraverso sistemi robotici avanzati",
      image: "/hero/made-in-germany-box.webp",
      caption: "Precisione in Ingegneria",
      alt: "Braccio robotico che maneggia una scatola con etichetta MADE IN GERMANY © "
    },
    {
      id: 1,
      content: "Valorizzazione dell'artigianato tedesco nella produzione di materiali resistenti",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "Eccellenza Artigianale",
      alt: "Pila di container di spedizione colorati"
    },
    {
      id: 2,
      content: "Sottolineatura dell'ingegnosità tedesca nella progettazione di impianti di produzione all'avanguardia",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "Ingegno negli Impianti",
      alt: "Magazzino moderno con segnaletica MADE IN GERMANY © "
    },
    {
      id: 3,
      content: "Dimostrazione della leadership industriale tedesca in stabilimenti di produzione di fama mondiale",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "Leadership Industriale",
      alt: "Grande impianto industriale con marchio MADE IN GERMANY © "
    }
  ],
  nl: [
    {
      id: 0,
      content: "Voorbeeld van Duitse ingenieurskunst precisie door middel van geavanceerde robotsystemen",
      image: "/hero/made-in-germany-box.webp",
      caption: "Ingenieursprecisie",
      alt: "Robotarm die een doos met MADE IN GERMANY © -label hanteert"
    },
    {
      id: 1,
      content: "Toonbeeld van Duits vakmanschap in de productie van duurzame materialen",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "Vakmanschap Uitmuntendheid",
      alt: "Stapel kleurrijke verzendcontainers"
    },
    {
      id: 2,
      content: "Benadrukking van Duitse vindingrijkheid in het ontwerpen van ultramoderne productie-installaties",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "Installatie-Ingeniositeit",
      alt: "Modern magazijn met MADE IN GERMANY © -bord"
    },
    {
      id: 3,
      content: "Demonstratie van Duits industrieel leiderschap in wereldberoemde productieplants",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "Industrieel Leiderschap",
      alt: "Grote industriële faciliteit met MADE IN GERMANY © -merk"
    }
  ],
  sa: [
    {
      id: 0,
      content: "مثال على دقة الهندسة الألمانية من خلال أنظمة روبوتية متطورة",
      image: "/hero/made-in-germany-box.webp",
      caption: "دقة الهندسة",
      alt: "ذراع روبوتي يتعامل مع صندوق تحمل علامة MADE IN GERMANY © "
    },
    {
      id: 1,
      content: "عرض المهارة الألمانية في تصنيع المواد القوية",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "تميز المهارة",
      alt: "كومة من الحاويات الملونة للشحن"
    },
    {
      id: 2,
      content: "إبراز الابتكار الألماني في تصميم منشآت إنتاج حديثة",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "ابتكار المنشآت",
      alt: "مستودع حديث بلافتة MADE IN GERMANY © "
    },
    {
      id: 3,
      content: "إظهار القيادة الصناعية الألمانية في مصانع الإنتاج العالمية المعروفة",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "القيادة الصناعية",
      alt: "منشأة صناعية كبيرة تحمل علامة MADE IN GERMANY © "
    }
  ],
  hk: [
    {
      id: 0,
      content: "通過先進機械系統展示德國工程的精確性",
      image: "/hero/made-in-germany-box.webp",
      caption: "工程精確性",
      alt: "機械手臂處理帶有MADE IN GERMANY © 標籤的箱子"
    },
    {
      id: 1,
      content: "展示德國工藝在製造耐用材料方面的卓越",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "工藝卓越",
      alt: "色彩繽紛的貨運集裝箱堆疊"
    },
    {
      id: 2,
      content: "突出德國在設計尖端生產設施方面的智慧",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "設施智慧",
      alt: "現代倉庫帶有MADE IN GERMANY © 標誌"
    },
    {
      id: 3,
      content: "展示德國在世界知名製造廠中的工業領導地位",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "工業領導",
      alt: "大型工業設施帶有MADE IN GERMANY © 品牌"
    }
  ],
  sg: [
    {
      id: 0,
      content: "通过先进机器人系统展示德国工程的精确性",
      image: "/hero/made-in-germany-box.webp",
      caption: "工程精确性",
      alt: "机器人手臂处理带有MADE IN GERMANY © 标签的箱子"
    },
    {
      id: 1,
      content: "展示德国工艺在制造耐用材料方面的卓越",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "工艺卓越",
      alt: "色彩缤纷的货运集装箱堆叠"
    },
    {
      id: 2,
      content: "突出德国在设计尖端生产设施方面的智慧",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "设施智慧",
      alt: "现代仓库带有MADE IN GERMANY © 标志"
    },
    {
      id: 3,
      content: "展示德国在世界知名制造厂中的工业领导地位",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "工业领导",
      alt: "大型工业设施带有MADE IN GERMANY © 品牌"
    }
  ],
  za: [
    {
      id: 0,
      content: "Voorbeeld van Duitse ingenieurskuns presisie deur geavanceerde robotsisteme",
      image: "/hero/made-in-germany-box.webp",
      caption: "Ingenieurs Presisie",
      alt: "Robotarm wat ’n boks met MADE IN GERMANY © -etiket hanteer"
    },
    {
      id: 1,
      content: "Vertoon van Duitse vakmanskap in die vervaardiging van blywende materiale",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "Vakmanskap Uitnemendheid",
      alt: "Stapel kleurvolle versendingscontainers"
    },
    {
      id: 2,
      content: "Beklemtoning van Duitse vernuf in die ontwerp van ultramoderne produksiefasiliteite",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "Fasiliteit Vernuf",
      alt: "Moderne pakhuis met MADE IN GERMANY © -bord"
    },
    {
      id: 3,
      content: "Demonstrasie van Duitse industriële leierskap in wêreldbekende produksieplante",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "Industriële Leierskap",
      alt: "Groot industriële fasiliteit met MADE IN GERMANY © -merk"
    }
  ],
  kr: [
    {
      id: 0,
      content: "고급 로봇 시스템을 통해 독일 공학의 정밀성을 보여줍니다",
      image: "/hero/made-in-germany-box.webp",
      caption: "공학 정밀도",
      alt: "로봇 팔이 MADE IN GERMANY ©  라벨이 붙은 상자를 처리"
    },
    {
      id: 1,
      content: "내구성 있는 재료 생산에서 독일 장인 정신을 보여줍니다",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "장인 정신 우수성",
      alt: "색색의 선적 컨테이너 더미"
    },
    {
      id: 2,
      content: "최첨단 생산 시설 설계에서 독일의 독창성을 강조합니다",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "시설 독창성",
      alt: "MADE IN GERMANY ©  표지판이 있는 현대적인 창고"
    },
    {
      id: 3,
      content: "세계적으로 유명한 제조 공장에서 독일 산업 리더십을 보여줍니다",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "산업 리더십",
      alt: "MADE IN GERMANY ©  브랜드가 있는 대형 산업 시설"
    }
  ],
  jp: [
    {
      id: 0,
      content: "先進的なロボットシステムを通じてドイツの工学の精度を示しています",
      image: "/hero/made-in-germany-box.webp",
      caption: "工学の精度",
      alt: "ロボットアームがMADE IN GERMANY © ラベル付きの箱を扱う"
    },
    {
      id: 1,
      content: "耐久性のある素材の生産におけるドイツの職人技を披露",
      image: "/hero/made-in-germany-small-container.webp",
      caption: "職人技の卓越性",
      alt: "カラフルな輸送コンテナの積み重ね"
    },
    {
      id: 2,
      content: "最先端の生産施設の設計におけるドイツの独創性を強調",
      image: "/hero/made-in-germany-warehouse.webp",
      caption: "施設の独創性",
      alt: "MADE IN GERMANY © の看板がある近代的な倉庫"
    },
    {
      id: 3,
      content: "世界的に有名な製造プラントにおけるドイツの産業リーダーシップを示します",
      image: "/hero/made-in-gemany-warehouse.webp",
      caption: "産業リーダーシップ",
      alt: "MADE IN GERMANY © ブランドを持つ大規模産業施設"
    }
  ]
};

const ImageSlider: React.FC<ImageSliderProps> = ({ language = 'en' }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const sliderItems = TRANSLATIONS[language] || TRANSLATIONS['en'];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setActiveSlide((current) => (current + 1) % sliderItems.length);
        setIsChanging(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderItems.length]);

  const handleSlideClick = (id: number) => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveSlide(id);
      setIsChanging(false);
    }, 300);
  };

  return (
    <div className="w-full flex justify-center items-center bg-white px-0 sm:px-2 md:px-5 py-2 md:py-4 box-border font-sans">
      <div className="text-center w-full max-w-[1350px] bg-white rounded-none sm:rounded-lg p-2 sm:p-4 md:p-8">
        <div className="relative mb-4 md:mb-8 rounded-none sm:rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(253,197,0,0.2)]">
          <img 
            src={sliderItems[activeSlide].image}
            alt={sliderItems[activeSlide].alt}
            className={`w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover transition-all duration-700 ease-in-out ${
              isChanging ? 'scale-105 blur-sm' : 'scale-100 blur-0'
            }`}
          />
          <div className={`absolute bottom-[20px] sm:bottom-[30px] md:bottom-[50px] left-1/2 -translate-x-1/2 
            bg-[rgba(26,26,26,0.9)] text-white px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6 
            rounded-lg sm:rounded-xl text-lg sm:text-2xl md:text-4xl transition-all duration-500 
            w-[95%] sm:w-[80%] md:min-w-[60%] text-center border-2 border-[#FFFFFF] 
            backdrop-blur-sm ${isChanging ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
            <span className="block w-8 sm:w-12 md:w-16 h-[3px] md:h-[4px] bg-[#FFFFFF] mx-auto mb-2 sm:mb-3 md:mb-4 animate-pulse" />
            {sliderItems[activeSlide].content}
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3 md:gap-5 justify-start md:justify-center mt-4 md:mt-8 p-3 sm:p-4 md:p-5 
          bg-[#0B111F] rounded-none sm:rounded-2xl overflow-x-auto w-full">
          {sliderItems.map((item) => (
            <div
              key={item.id}
              className={`group relative min-w-[200px] sm:min-w-[220px] md:min-w-[280px] 
                h-[120px] sm:h-[130px] md:h-[160px] rounded-lg sm:rounded-xl overflow-hidden 
                cursor-pointer transition-all duration-300 shadow-md 
                ${activeSlide === item.id ? 'border-[3px] border-[#FFFFFF] -translate-y-2' : ''}`}
              onClick={() => handleSlideClick(item.id)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(26,26,26,0.9)] 
                to-transparent text-[#FFFFFF] py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base 
                font-semibold tracking-wider transform translate-y-full transition-all duration-300 
                group-hover:translate-y-0 backdrop-blur-sm">
                <div className="animate-fadeIn">
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;