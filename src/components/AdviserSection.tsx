import React from 'react';
import { Briefcase, DollarSign, Lock, MapPin, Target, Wallet } from 'lucide-react';
import { FaHome, FaGlobe } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
// Define props interface for AdviserSection
interface AdviserSectionProps {
  language?: string;
}

// Define translations for AdviserSection content
const TRANSLATIONS: Record<string, {
  title: string;
  subtitleGerman: string;
  descriptionGerman: string;
  subtitleInternational: string;
  descriptionInternational: string;
  boxGerman1Title: string;
  boxGerman1Content: string;
  boxGerman2Title: string;
  boxGerman2Content: string;
  boxGerman3Title: string;
  boxGerman3Content: string;
  boxInternational1Title: string;
  boxInternational1Content: string;
  boxInternational2Title: string;
  boxInternational2Content: string;
  boxInternational3Title: string;
  boxInternational3Content: string;
  footer: string;
}> = {
  en: {
    title: "MADE IN GERMANY © ",
    subtitleGerman: "PARTNERING WITH GERMAN INDUSTRY",
    descriptionGerman: "Collaborate with top German manufacturers and wholesalers to supply premium products for global markets.",
    subtitleInternational: "GLOBAL DISTRIBUTION EXCELLENCE",
    descriptionInternational: "Access German-quality goods delivered worldwide through advanced transport solutions for partners in Asia, Africa, the Arab world, and beyond.",
    boxGerman1Title: "SHOWCASE GERMAN EXCELLENCE",
    boxGerman1Content: "Partner with us to bring your high-quality products to international markets with unmatched reliability.",
    boxGerman2Title: "EXPAND YOUR REACH",
    boxGerman2Content: "Leverage our global logistics network to distribute your goods efficiently to Asia, Africa, and the Arab world.",
    boxGerman3Title: "RELIABLE COLLABORATION",
    boxGerman3Content: "Work with a trusted partner to ensure your products meet the demands of wealthy and emerging markets worldwide.",
    boxInternational1Title: "PREMIUM GERMAN QUALITY",
    boxInternational1Content: "Import superior German products tailored to your market, delivered via train, ship, and cargo.",
    boxInternational2Title: "PROFITABLE PARTNERSHIPS",
    boxInternational2Content: "Maximize your business potential with German goods, distributed reliably across Asia, Africa, and the Arab world.",
    boxInternational3Title: "GLOBAL ACCESS",
    boxInternational3Content: "Benefit from our advanced logistics to bring German excellence to your clients, wherever they are.",
    footer: "MADE IN GERMANY © "
  },
  de: {
    title: "MADE IN GERMANY © ",
    subtitleGerman: "ZUSAMMENARBEIT MIT DER DEUTSCHEN INDUSTRIE",
    descriptionGerman: "Kooperieren Sie mit führenden deutschen Herstellern und Großhändlern, um Premiumprodukte für globale Märkte zu liefern.",
    subtitleInternational: "WELTWEITE VERTEILUNGSEXZELLENZ",
    descriptionInternational: "Zugang zu deutschen Qualitätsprodukten, weltweit geliefert durch fortschrittliche Transportlösungen für Partner in Asien, Afrika, der arabischen Welt und darüber hinaus.",
    boxGerman1Title: "DEUTSCHE EXZELLENZ PRÄSENTIEREN",
    boxGerman1Content: "Arbeiten Sie mit uns zusammen, um Ihre hochwertigen Produkte mit unübertroffener Zuverlässigkeit auf internationale Märkte zu bringen.",
    boxGerman2Title: "IHRE REICHWEITE ERWEITERN",
    boxGerman2Content: "Nutzen Sie unser globales Logistiknetzwerk, um Ihre Waren effizient nach Asien, Afrika und die arabische Welt zu verteilen.",
    boxGerman3Title: "ZUVERLÄSSIGE ZUSAMMENARBEIT",
    boxGerman3Content: "Arbeiten Sie mit einem vertrauenswürdigen Partner, um sicherzustellen, dass Ihre Produkte die Anforderungen wohlhabender und aufstrebender Märkte weltweit erfüllen.",
    boxInternational1Title: "PREMIUM-DEUTSCHE QUALITÄT",
    boxInternational1Content: "Importieren Sie überlegene deutsche Produkte, die auf Ihren Markt zugeschnitten sind, geliefert per Zug, Schiff und Fracht.",
    boxInternational2Title: "PROFITABLE PARTNERSCHAFTEN",
    boxInternational2Content: "Maximieren Sie Ihr Geschäftspotenzial mit deutschen Waren, zuverlässig verteilt in Asien, Afrika und der arabischen Welt.",
    boxInternational3Title: "GLOBALER ZUGANG",
    boxInternational3Content: "Profitieren Sie von unserer fortschrittlichen Logistik, um deutsche Exzellenz zu Ihren Kunden zu bringen, egal wo sie sind.",
    footer: "MADE IN GERMANY © "
  },
  fr: {
    title: "FABRIQUÉ EN ALLEMAGNE",
    subtitleGerman: "PARTENARIAT AVEC L'INDUSTRIE ALLEMANDE",
    descriptionGerman: "Collaborez avec les meilleurs fabricants et grossistes allemands pour fournir des produits haut de gamme aux marchés mondiaux.",
    subtitleInternational: "EXCELLENCE DE LA DISTRIBUTION MONDIALE",
    descriptionInternational: "Accédez à des produits de qualité allemande livrés dans le monde entier grâce à des solutions de transport avancées pour les partenaires en Asie, en Afrique, dans le monde arabe et au-delà.",
    boxGerman1Title: "METTRE EN VALEUR L'EXCELLENCE ALLEMANDE",
    boxGerman1Content: "Associez-vous à nous pour présenter vos produits de haute qualité sur les marchés internationaux avec une fiabilité inégalée.",
    boxGerman2Title: "ÉLARGIR VOTRE PORTÉE",
    boxGerman2Content: "Utilisez notre réseau logistique mondial pour distribuer vos produits efficacement en Asie, en Afrique et dans le monde arabe.",
    boxGerman3Title: "COLLABORATION FIABLE",
    boxGerman3Content: "Travaillez avec un partenaire de confiance pour garantir que vos produits répondent aux besoins des marchés riches et émergents du monde entier.",
    boxInternational1Title: "QUALITÉ ALLEMANDE PREMIUM",
    boxInternational1Content: "Importez des produits allemands supérieurs adaptés à votre marché, livrés par train, bateau et fret.",
    boxInternational2Title: "PARTENARIATS RENTABLES",
    boxInternational2Content: "Maximisez votre potentiel commercial avec des produits allemands, distribués de manière fiable en Asie, en Afrique et dans le monde arabe.",
    boxInternational3Title: "ACCÈS MONDIAL",
    boxInternational3Content: "Bénéficiez de notre logistique avancée pour apporter l'excellence allemande à vos clients, où qu'ils soient.",
    footer: "FABRIQUÉ EN ALLEMAGNE"
  },
  es: {
    title: "HECHO EN ALEMANIA",
    subtitleGerman: "ASOCIACIÓN CON LA INDUSTRIA ALEMANA",
    descriptionGerman: "Colabore con los principales fabricantes y mayoristas alemanes para suministrar productos premium a los mercados globales.",
    subtitleInternational: "EXCELENCIA EN DISTRIBUCIÓN GLOBAL",
    descriptionInternational: "Acceda a productos de calidad alemana entregados en todo el mundo a través de soluciones de transporte avanzadas para socios en Asia, África, el mundo árabe y más allá.",
    boxGerman1Title: "DESTACAR LA EXCELENCIA ALEMANA",
    boxGerman1Content: "Asóciese con nosotros para llevar sus productos de alta calidad a los mercados internacionales con una confiabilidad inigualable.",
    boxGerman2Title: "AMPLIAR SU ALCANCE",
    boxGerman2Content: "Aproveche nuestra red logística global para distribuir sus productos de manera eficiente en Asia, África y el mundo árabe.",
    boxGerman3Title: "COLABORACIÓN CONFIABLE",
    boxGerman3Content: "Trabaje con un socio de confianza para asegurar que sus productos satisfagan las demandas de mercados ricos y emergentes en todo el mundo.",
    boxInternational1Title: "CALIDAD ALEMANA PREMIUM",
    boxInternational1Content: "Importe productos alemanes superiores adaptados a su mercado, entregados por tren, barco y carga.",
    boxInternational2Title: "ASOCIACIONES RENTABLES",
    boxInternational2Content: "Maximice su potencial de negocio con productos alemanes, distribuidos de manera confiable en Asia, África y el mundo árabe.",
    boxInternational3Title: "ACCESO GLOBAL",
    boxInternational3Content: "Benefíciese de nuestra logística avanzada para llevar la excelencia alemana a sus clientes, estén donde estén.",
    footer: "HECHO EN ALEMANIA"
  },
  it: {
    title: "FATTO IN GERMANIA",
    subtitleGerman: "PARTNERSHIP CON L'INDUSTRIA TEDESCA",
    descriptionGerman: "Collabora con i principali produttori e grossisti tedeschi per fornire prodotti premium ai mercati globali.",
    subtitleInternational: "ECCELLENZA NELLA DISTRIBUZIONE GLOBALE",
    descriptionInternational: "Accedi a prodotti di qualità tedesca consegnati in tutto il mondo tramite soluzioni di trasporto avanzate per partner in Asia, Africa, mondo arabo e oltre.",
    boxGerman1Title: "MOSTRARE L'ECCELLENZA TEDESCA",
    boxGerman1Content: "Collabora con noi per portare i tuoi prodotti di alta qualità sui mercati internazionali con affidabilità senza pari.",
    boxGerman2Title: "ESPANDERE LA TUA PORTATA",
    boxGerman2Content: "Sfrutta la nostra rete logistica globale per distribuire i tuoi prodotti in modo efficiente in Asia, Africa e mondo arabo.",
    boxGerman3Title: "COLLABORAZIONE AFFIDABILE",
    boxGerman3Content: "Lavora con un partner fidato per garantire che i tuoi prodotti soddisfino le esigenze dei mercati ricchi ed emergenti in tutto il mondo.",
    boxInternational1Title: "QUALITÀ TEDESCA PREMIUM",
    boxInternational1Content: "Importa prodotti tedeschi superiori personalizzati per il tuo mercato, consegnati tramite treno, nave e cargo.",
    boxInternational2Title: "PARTNERSHIP PROFICUE",
    boxInternational2Content: "Massimizza il tuo potenziale di business con prodotti tedeschi, distribuiti affidabilmente in Asia, Africa e mondo arabo.",
    boxInternational3Title: "ACCESSO GLOBALE",
    boxInternational3Content: "Approfitta della nostra logistica avanzata per portare l'eccellenza tedesca ai tuoi clienti, ovunque si trovino.",
    footer: "FATTO IN GERMANIA"
  },
  pt: {
    title: "FEITO NA ALEMANHA",
    subtitleGerman: "PARCERIA COM A INDÚSTRIA ALEMÃ",
    descriptionGerman: "Colabore com os principais fabricantes e atacadistas alemães para fornecer produtos premium aos mercados globais.",
    subtitleInternational: "EXCELÊNCIA NA DISTRIBUIÇÃO GLOBAL",
    descriptionInternational: "Acesse produtos de qualidade alemã entregues mundialmente por meio de soluções avançadas de transporte para parceiros na Ásia, África, mundo árabe e além.",
    boxGerman1Title: "DESTACAR A EXCELÊNCIA ALEMÃ",
    boxGerman1Content: "Parceria conosco para levar seus produtos de alta qualidade aos mercados internacionais com confiabilidade incomparável.",
    boxGerman2Title: "EXPANDIR SEU ALCANCE",
    boxGerman2Content: "Aproveite nossa rede logística global para distribuir seus produtos eficientemente na Ásia, África e mundo árabe.",
    boxGerman3Title: "COLABORAÇÃO CONFIÁVEL",
    boxGerman3Content: "Trabalhe com um parceiro confiável para garantir que seus produtos atendam às demandas de mercados ricos e emergentes em todo o mundo.",
    boxInternational1Title: "QUALIDADE ALEMÃ PREMIUM",
    boxInternational1Content: "Importe produtos alemães superiores adaptados ao seu mercado, entregues por trem, navio e carga.",
    boxInternational2Title: "PARCERIAS LUCRATIVAS",
    boxInternational2Content: "Maximize seu potencial de negócios com produtos alemães, distribuídos de forma confiável na Ásia, África e mundo árabe.",
    boxInternational3Title: "ACESSO GLOBAL",
    boxInternational3Content: "Beneficie-se de nossa logística avançada para levar a excelência alemã aos seus clientes, onde quer que estejam.",
    footer: "FEITO NA ALEMANHA"
  },
  sa: { // Arabic (Saudi Arabia)
    title: "صنع في ألمانيا",
    subtitleGerman: "الشراكة مع الصناعة الألمانية",
    descriptionGerman: "تعاون مع كبار المصنعين وتجار الجملة الألمان لتوفير منتجات متميزة للأسواق العالمية.",
    subtitleInternational: "التميز في التوزيع العالمي",
    descriptionInternational: "الوصول إلى منتجات ذات جودة ألمانية يتم تسليمها عالميًا من خلال حلول نقل متقدمة للشركاء في آسيا وأفريقيا والعالم العربي وما وراء ذلك.",
    boxGerman1Title: "عرض التميز الألماني",
    boxGerman1Content: "تعاون معنا لتقديم منتجاتك عالية الجودة إلى الأسواق الدولية بموثوقية لا مثيل لها.",
    boxGerman2Title: "توسيع نطاق وصولك",
    boxGerman2Content: "استفد من شبكتنا اللوجستية العالمية لتوزيع منتجاتك بكفاءة في آسيا وأفريقيا والعالم العربي.",
    boxGerman3Title: "شراكة موثوقة",
    boxGerman3Content: "اعمل مع شريك موثوق لضمان تلبية منتجاتك لمتطلبات الأسواق الغنية والناشئة في جميع أنحاء العالم.",
    boxInternational1Title: "جودة ألمانية متميزة",
    boxInternational1Content: "استورد منتجات ألمانية فائقة مصممة خصيصًا لسوقك، يتم تسليمها عبر القطارات والسفن والشحن.",
    boxInternational2Title: "شراكات مربحة",
    boxInternational2Content: "عزز إمكانات عملك مع منتجات ألمانية، يتم توزيعها بموثوقية في آسيا وأفريقيا والعالم العربي.",
    boxInternational3Title: "وصول عالمي",
    boxInternational3Content: "استفد من لوجستياتنا المتقدمة لجلب التميز الألماني إلى عملائك، أينما كانوا.",
    footer: "صنع في ألمانيا"
  },
  hk: { // Traditional Chinese (Hong Kong)
    title: "德國製造",
    subtitleGerman: "與德國工業合作",
    descriptionGerman: "與德國頂級製造商和批發商合作，為全球市場供應優質產品。",
    subtitleInternational: "全球分銷卓越",
    descriptionInternational: "通過先進的運輸解決方案，為亞洲、非洲、阿拉伯世界及其他地區的合作夥伴提供德國品質產品。",
    boxGerman1Title: "展示德國卓越",
    boxGerman1Content: "與我們合作，以無與倫比的可靠性將您的高品質產品帶入國際市場。",
    boxGerman2Title: "擴大您的覆蓋範圍",
    boxGerman2Content: "利用我們的全球物流網絡，將您的產品高效分銷至亞洲、非洲和阿拉伯世界。",
    boxGerman3Title: "可靠的合作",
    boxGerman3Content: "與值得信賴的合作夥伴一起工作，確保您的產品滿足全球富裕和新興市場的需求。",
    boxInternational1Title: "優質德國品質",
    boxInternational1Content: "進口適合您市場的優質德國產品，通過火車、船舶和貨運交付。",
    boxInternational2Title: "有利可圖的夥伴關係",
    boxInternational2Content: "通過德國產品最大化您的商業潛力，可靠分銷至亞洲、非洲和阿拉伯世界。",
    boxInternational3Title: "全球訪問",
    boxInternational3Content: "利用我們的先進物流，將德國卓越帶給您的客戶，無論他們身在何處。",
    footer: "德國製造"
  },
  sg: { // Simplified Chinese (Singapore)
    title: "德国制造",
    subtitleGerman: "与德国工业合作",
    descriptionGerman: "与德国顶级制造商和批发商合作，为全球市场供应优质产品。",
    subtitleInternational: "全球分销卓越",
    descriptionInternational: "通过先进的运输解决方案，为亚洲、非洲、阿拉伯世界及其他地区的合作伙伴提供德国品质产品。",
    boxGerman1Title: "展示德国卓越",
    boxGerman1Content: "与我们合作，以无与伦比的可靠性将您的高品质产品带入国际市场。",
    boxGerman2Title: "扩大您的覆盖范围",
    boxGerman2Content: "利用我们的全球物流网络，将您的产品高效分销至亚洲、非洲和阿拉伯世界。",
    boxGerman3Title: "可靠的合作",
    boxGerman3Content: "与值得信赖的合作伙伴一起工作，确保您的产品满足全球富裕和新兴市场的需求。",
    boxInternational1Title: "优质德国品质",
    boxInternational1Content: "进口适合您市场的优质德国产品，通过火车、船舶和货运交付。",
    boxInternational2Title: "有利可图的伙伴关系",
    boxInternational2Content: "通过德国产品最大化您的商业潜力，可靠分销至亚洲、非洲和阿拉伯世界。",
    boxInternational3Title: "全球访问",
    boxInternational3Content: "利用我们的先进物流，将德国卓越带给您的客户，无论他们身在何处。",
    footer: "德国制造"
  },
  za: { // Afrikaans
    title: "GEMAAK IN DUITSLAND",
    subtitleGerman: "SAMEWERKING MET DIE DUITSE INDUSTRIE",
    descriptionGerman: "Werk saam met toonaangewende Duitse vervaardigers en groothandelaars om premium produkte aan wêreldmarkte te lewer.",
    subtitleInternational: "UITSTEKENDHEID IN WÊRELDELIKE DISTRIBUSIE",
    descriptionInternational: "Kry toegang tot Duitse kwaliteitsprodukte wat wêreldwyd gelewer word via gevorderde vervoeroplossings vir vennote in Asië, Afrika, die Arabiese wêreld en verder.",
    boxGerman1Title: "TOON DUITSE UITSTEKENDHEID",
    boxGerman1Content: "Werk saam met ons om u hoëgehalte produkte met ongeëwenaarde betroubaarheid na internasionale markte te bring.",
    boxGerman2Title: "VERGROOT U BEREIK",
    boxGerman2Content: "Benut ons globale logistieke netwerk om u goedere doeltreffend na Asië, Afrika en die Arabiese wêreld te versprei.",
    boxGerman3Title: "BETROUWBARE SAMEWERKING",
    boxGerman3Content: "Werk met 'n betroubare vennoot om te verseker dat u produkte voldoen aan die vereistes van welvarende en opkomende markte wêreldwyd.",
    boxInternational1Title: "PREMIUM DUITSE KWALITEIT",
    boxInternational1Content: "Voer voortreflike Duitse produkte in wat aangepas is vir u mark, gelewer via trein, skip en vrag.",
    boxInternational2Title: "WINSGEWENDE VENNOOTSKAPPE",
    boxInternational2Content: "Maksimeer u besigheidspotensiaal met Duitse goedere, betroubaar versprei oor Asië, Afrika en die Arabiese wêreld.",
    boxInternational3Title: "WÊRELDWYE TOEGANG",
    boxInternational3Content: "Gebruik ons gevorderde logistiek om Duitse uitnemendheid na u kliënte te bring, waar hulle ook al is.",
    footer: "GEMAAK IN DUITSLAND"
  },
  kr: { // Korean
    title: "독일 제조",
    subtitleGerman: "독일 산업과의 파트너십",
    descriptionGerman: "독일의 최고 제조업체 및 도매업체와 협력하여 글로벌 시장에 프리미엄 제품을 공급합니다.",
    subtitleInternational: "글로벌 유통 우수성",
    descriptionInternational: "아시아, 아프리카, 아랍 세계 및 그 외 지역의 파트너를 위해 첨단 운송 솔루션을 통해 독일 품질의 제품을 전 세계에 제공합니다.",
    boxGerman1Title: "독일 우수성 보여주기",
    boxGerman1Content: "저희와 협력하여 비교할 수 없는 신뢰성으로 고품질 제품을 국제 시장에 선보이세요.",
    boxGerman2Title: "도달 범위 확장",
    boxGerman2Content: "저희 글로벌 물류 네트워크를 활용하여 아시아, 아프리카, 아랍 세계에 효율적으로 제품을 유통하세요.",
    boxGerman3Title: "신뢰할 수 있는 협력",
    boxGerman3Content: "신뢰할 수 있는 파트너와 협력하여 부유하고 신흥 시장의 요구를 충족하는 제품을 보장하세요.",
    boxInternational1Title: "프리미엄 독일 품질",
    boxInternational1Content: "귀하의 시장에 맞춘 우수한 독일 제품을 기차, 선박, 화물로 수입하세요.",
    boxInternational2Title: "수익성 있는 파트너십",
    boxInternational2Content: "독일 제품으로 비즈니스 잠재력을 극대화하며, 아시아, 아프리카, 아랍 세계에 안정적으로 유통하세요.",
    boxInternational3Title: "글로벌 접근",
    boxInternational3Content: "저희 첨단 물류를 활용하여 고객이 어디에 있든 독일의 우수성을 제공하세요.",
    footer: "독일 제조"
  },
  jp: { // Japanese
    title: "メイド・イン・ジャーマニー",
    subtitleGerman: "ドイツ産業とのパートナーシップ",
    descriptionGerman: "ドイツのトップメーカーや卸売業者と協力し、グローバル市場にプレミアム製品を供給します。",
    subtitleInternational: "グローバル流通の卓越性",
    descriptionInternational: "アジア、アフリカ、アラブ世界、その他の地域のパートナー向けに、先進的な輸送ソリューションを通じてドイツ品質の製品を提供します。",
    boxGerman1Title: "ドイツの卓越性を示す",
    boxGerman1Content: "私たちと協力して、比類のない信頼性で高品質な製品を国際市場に届けます。",
    boxGerman2Title: "リーチの拡大",
    boxGerman2Content: "当社のグローバル物流ネットワークを活用し、アジア、アフリカ、アラブ世界に効率的に製品を流通させます。",
    boxGerman3Title: "信頼できる協力",
    boxGerman3Content: "信頼できるパートナーと連携し、富裕層や新興市場のニーズを満たす製品を保証します。",
    boxInternational1Title: "プレミアムドイツ品質",
    boxInternational1Content: "貴社の市場に合わせた優れたドイツ製品を、列車、船舶、貨物で輸入します。",
    boxInternational2Title: "収益性の高いパートナーシップ",
    boxInternational2Content: "ドイツ製品でビジネスの可能性を最大化し、アジア、アフリカ、アラブ世界に確実に流通させます。",
    boxInternational3Title: "グローバルアクセス",
    boxInternational3Content: "当社の先進的な物流を活用して、どこにいてもお客様にドイツの卓越性を提供します。",
    footer: "メイド・イン・ジャーマニー"
  }
};

const AdviserSection: React.FC<AdviserSectionProps> = ({ language = 'en' }) => {
  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];

  const boxIconsAndColors = [
    { icon: <Target className="w-6 h-6 text-white" />, bgColor: "bg-[#1a2435]" },
    { icon: <DollarSign className="w-6 h-6 text-white" />, bgColor: "bg-red-600" },
    { icon: <Lock className="w-6 h-6 text-white" />, bgColor: "bg-yellow-500" },
    { icon: <Briefcase className="w-6 h-6 text-white" />, bgColor: "bg-[#1a2435]" },
    { icon: <Wallet className="w-6 h-6 text-white" />, bgColor: "bg-red-600" },
    { icon: <MapPin className="w-6 h-6 text-white" />, bgColor: "bg-yellow-500" }
  ];

  const boxesGerman = [
    { title: translations.boxGerman1Title, content: translations.boxGerman1Content, ...boxIconsAndColors[0] },
    { title: translations.boxGerman2Title, content: translations.boxGerman2Content, ...boxIconsAndColors[1] },
    { title: translations.boxGerman3Title, content: translations.boxGerman3Content, ...boxIconsAndColors[2] }
  ];

  const boxesInternational = [
    { title: translations.boxInternational1Title, content: translations.boxInternational1Content, ...boxIconsAndColors[3] },
    { title: translations.boxInternational2Title, content: translations.boxInternational2Content, ...boxIconsAndColors[4] },
    { title: translations.boxInternational3Title, content: translations.boxInternational3Content, ...boxIconsAndColors[5] }
  ];
 
    return (
      
      <div className="max-w-7xl mx-auto mb-10 p-8 bg-[#0B111F] rounded-[20px]">
        {/* Optimized Header Section */}
        <div className="text-white mb-12 animate-fadeIn">
          <h1 className="text-3xl font-bold text-center mb-6">{translations.title}</h1>
          
          {/* Redesigned subtitle section to match box styles and colors */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full md:w-1/2 bg-[#141c2f]/50 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-[#1a2435] transition-all duration-500 hover:translate-x-2 hover:bg-[#1a2435]/50 group animate-slideLeft">
              <div className="flex items-center gap-4">
                <div className="bg-[#1a2435] w-12 h-12 flex items-center justify-center rounded-lg shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  <FaHome className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold mb-2">{translations.subtitleGerman}</h2>
                  <p className="text-gray-300 text-sm">{translations.descriptionGerman}</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-[#141c2f]/50 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-[#1a2435] transition-all duration-500 hover:-translate-x-2 hover:bg-[#1a2435]/50 group animate-slideRight">
              <div className="flex items-center gap-4">
                <div className="bg-[#1a2435] w-12 h-12 flex items-center justify-center rounded-lg shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  <FaGlobe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold mb-2">{translations.subtitleInternational}</h2>
                  <p className="text-gray-300 text-sm">{translations.descriptionInternational}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
  
          {/* Left Boxes (German Manufacturers/Wholesalers) */}
          <div className="w-full md:w-1/3 space-y-4">
            {boxesGerman.map((box, index) => (
              <div 
                key={index} 
                className="bg-[#141c2f]/50 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-[#1a2435] transition-all duration-500 hover:translate-x-2 hover:bg-[#1a2435]/50 group animate-slideLeft"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`${box.bgColor} w-12 h-12 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg`}>
                    {box.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{box.title}</h3>
                    <p className="text-gray-300 text-sm">{box.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Center Image with MADE IN GERMANY ©  Logo */}
          <div className="w-full md:w-1/3 animate-fadeIn" style={{ animationDelay: '600ms' }}>
            <div className="bg-[#141c2f]/50 backdrop-blur-lg p-4 rounded-lg shadow-2xl border border-[#1a2435] flex flex-col items-center">
              <img 
                src="/women.webp" 
                alt="German manufacturing excellence" 
                className="w-full max-w-md mx-auto rounded-lg mb-2"
              />
              <img 
                src="/made-in-germany-logo-english-black.png" 
                alt="MADE IN GERMANY ©  Logo" 
                className="w-40 h-auto bg-white p-1 rounded-lg"
              />
            </div>
          </div>
  
          {/* Right Boxes (International Clients/Distributors) */}
          <div className="w-full md:w-1/3 space-y-4">
            {boxesInternational.map((box, index) => (
              <div 
                key={index} 
                className="bg-[#141c2f]/50 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-[#1a2435] transition-all duration-500 hover:-translate-x-2 hover:bg-[#1a2435]/50 group animate-slideRight"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`${box.bgColor} w-12 h-12 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-lg`}>
                    {box.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{box.title}</h3>
                    <p className="text-gray-300 text-sm">{box.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideLeft {
            from { opacity: 0; transform: translateX(-100px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-slideLeft {
            animation: slideLeft 1s ease-out forwards;
          }
          
          .animate-slideRight {
            animation: slideRight 1s ease-out forwards;
          }
        `}</style>
      </div>
    );
  };
  
  export default AdviserSection;