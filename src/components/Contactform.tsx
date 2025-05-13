import React, { useState } from 'react';
import { Mail, Building2, Users, Phone, MessageSquare, Send, ChevronDown, Factory, ShoppingCart } from 'lucide-react';

// Define props interface for ContactForm
interface ContactFormProps {
  language?: string;
}

interface ManufacturerFormData {
  companyName: string;
  industry: string;
  productionCapacity: string;
  preferredLanguage: string;
  companySize: string;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  privacyConsent: boolean;
}

interface CustomerFormData {
  companyName: string;
  productCategories: string;
  targetMarkets: string;
  preferredLanguage: string;
  companySize: string;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  privacyConsent: boolean;
}

// Define translations for ContactForm content
const TRANSLATIONS: Record<string, {
  headerTitle: string;
  headerSubtitle: string;
  companyInfoSection: string;
  companyNameLabel: string;
  companyNamePlaceholder: string;
  industryLabel: string;
  industryPlaceholder: string;
  industries: string[];
  productionCapacityLabel: string;
  productionCapacityPlaceholder: string;
  productCategoriesLabel: string;
  productCategoriesPlaceholder: string;
  productCategories: string[];
  targetMarketsLabel: string;
  targetMarketsPlaceholder: string;
  targetMarkets: string[];
  preferredLanguageLabel: string;
  preferredLanguagePlaceholder: string;
  companySizeLabel: string;
  companySizePlaceholder: string;
  companySizes: string[];
  contactPersonSection: string;
  salutationLabel: string;
  salutationPlaceholder: string;
  salutationOptions: string[];
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messageSection: string;
  messageLabel: string;
  messagePlaceholder: string;
  privacyConsentLabel: string;
  privacyPolicyLink: string;
  sendButton: string;
  manufacturerText: string;
  manufacturerButton: string;
  customerText: string;
  customerButton: string;
}> = {
  en: {
    headerTitle: "Forge New Paths with",
    headerSubtitle: "Made-in-Germany Excellence",
    companyInfoSection: "Company Information",
    companyNameLabel: "Company Name",
    companyNamePlaceholder: "Enter company name",
    industryLabel: "Industry",
    industryPlaceholder: "Select industry",
    industries: [
      "Technology", "Healthcare", "Manufacturing", "Financial Services", "Retail",
      "Education", "Construction", "Transportation", "Energy", "Other"
    ],
    productionCapacityLabel: "Production Capacity (Units per Year)",
    productionCapacityPlaceholder: "Enter production capacity",
    productCategoriesLabel: "Product Categories of Interest",
    productCategoriesPlaceholder: "Select product categories",
    productCategories: [
      "Electronics", "Automotive", "Machinery", "Pharmaceuticals", "Textiles", "Other"
    ],
    targetMarketsLabel: "Target Markets",
    targetMarketsPlaceholder: "Select target markets",
    targetMarkets: [
      "North America", "Europe", "Asia", "Africa", "South America", "Australia"
    ],
    preferredLanguageLabel: "Preferred Language",
    preferredLanguagePlaceholder: "Select your preferred language",
    companySizeLabel: "Company Size",
    companySizePlaceholder: "Select company size",
    companySizes: [
      "1-10 employees", "11-50 employees", "51-200 employees", "200+ employees"
    ],
    contactPersonSection: "Contact Person Details",
    salutationLabel: "Salutation",
    salutationPlaceholder: "Select",
    salutationOptions: ["Mr.", "Ms.", "Other"],
    firstNameLabel: "First Name",
    firstNamePlaceholder: "Enter first name",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "Enter last name",
    emailLabel: "Email Address",
    emailPlaceholder: "name@company.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (555) 000-0000",
    messageSection: "Your Message",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
    privacyConsentLabel: "I agree to the Privacy Policy and consent to the processing of my personal data",
    privacyPolicyLink: "Privacy Policy",
    sendButton: "Send Message",
    manufacturerText: "Are you a manufacturer\ninterested in promoting\nand selling high-quality German products globally?",
    manufacturerButton: "Manufacturers from Germany",
    customerText: "Are you a client seeking\nto source premium German goods\nand unlock new markets?",
    customerButton: "Customers Worldwide"
  },
  de: {
    headerTitle: "Bahnen Sie neue Wege",
    headerSubtitle: "mit Made-in-Germany-Exzellenz",
    companyInfoSection: "Unternehmensinformationen",
    companyNameLabel: "Firmenname",
    companyNamePlaceholder: "Geben Sie den Firmennamen ein",
    industryLabel: "Branche",
    industryPlaceholder: "Branche auswählen",
    industries: [
      "Technologie", "Gesundheitswesen", "Fertigung", "Finanzdienstleistungen", "Einzelhandel",
      "Bildung", "Bauwesen", "Transport", "Energie", "Andere"
    ],
    productionCapacityLabel: "Produktionskapazität (Einheiten pro Jahr)",
    productionCapacityPlaceholder: "Geben Sie die Produktionskapazität ein",
    productCategoriesLabel: "Interessante Produktkategorien",
    productCategoriesPlaceholder: "Produktkategorien auswählen",
    productCategories: [
      "Elektronik", "Automobil", "Maschinenbau", "Pharmazeutika", "Textilien", "Andere"
    ],
    targetMarketsLabel: "Zielmärkte",
    targetMarketsPlaceholder: "Zielmärkte auswählen",
    targetMarkets: [
      "Nordamerika", "Europa", "Asien", "Afrika", "Südamerika", "Australien"
    ],
    preferredLanguageLabel: "Bevorzugte Sprache",
    preferredLanguagePlaceholder: "Wählen Sie Ihre bevorzugte Sprache",
    companySizeLabel: "Unternehmensgröße",
    companySizePlaceholder: "Unternehmensgröße auswählen",
    companySizes: [
      "1-10 Mitarbeiter", "11-50 Mitarbeiter", "51-200 Mitarbeiter", "200+ Mitarbeiter"
    ],
    contactPersonSection: "Details der Kontaktperson",
    salutationLabel: "Anrede",
    salutationPlaceholder: "Auswählen",
    salutationOptions: ["Herr", "Frau", "Andere"],
    firstNameLabel: "Vorname",
    firstNamePlaceholder: "Geben Sie den Vornamen ein",
    lastNameLabel: "Nachname",
    lastNamePlaceholder: "Geben Sie den Nachnamen ein",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "name@firma.de",
    phoneLabel: "Telefonnummer",
    phonePlaceholder: "+49 (0) 123 456789",
    messageSection: "Ihre Nachricht",
    messageLabel: "Nachricht",
    messagePlaceholder: "Wie können wir Ihnen helfen?",
    privacyConsentLabel: "Ich stimme der Datenschutzerklärung zu und erlaube die Verarbeitung meiner persönlichen Daten",
    privacyPolicyLink: "Datenschutzerklärung",
    sendButton: "Nachricht Senden",
    manufacturerText: "Sind Sie ein Hersteller,\nder daran interessiert ist,\nhochwertige deutsche Produkte global zu vermarkten und zu verkaufen?",
    manufacturerButton: "Hersteller aus Deutschland",
    customerText: "Sind Sie ein Kunde,\nder hochwertige deutsche Waren beschaffen\nund neue Märkte erschließen möchte?",
    customerButton: "Kunden weltweit"
  },
  es: {
    headerTitle: "Forja Nuevos Caminos",
    headerSubtitle: "con la Excelencia Made-in-Germany",
    companyInfoSection: "Información de la Empresa",
    companyNameLabel: "Nombre de la Empresa",
    companyNamePlaceholder: "Ingresa el nombre de la empresa",
    industryLabel: "Industria",
    industryPlaceholder: "Selecciona industria",
    industries: [
      "Tecnología", "Cuidado de la Salud", "Manufactura", "Servicios Financieros", "Comercio Minorista",
      "Educación", "Construcción", "Transporte", "Energía", "Otro"
    ],
    productionCapacityLabel: "Capacidad de Producción (Unidades por Año)",
    productionCapacityPlaceholder: "Ingresa la capacidad de producción",
    productCategoriesLabel: "Categorías de Productos de Interés",
    productCategoriesPlaceholder: "Selecciona categorías de productos",
    productCategories: [
      "Electrónica", "Automotriz", "Maquinaria", "Farmacéutica", "Textiles", "Otro"
    ],
    targetMarketsLabel: "Mercados Objetivo",
    targetMarketsPlaceholder: "Selecciona mercados objetivo",
    targetMarkets: [
      "América del Norte", "Europa", "Asia", "África", "América del Sur", "Australia"
    ],
    preferredLanguageLabel: "Idioma Preferido",
    preferredLanguagePlaceholder: "Selecciona tu idioma preferido",
    companySizeLabel: "Tamaño de la Empresa",
    companySizePlaceholder: "Selecciona el tamaño de la empresa",
    companySizes: [
      "1-10 empleados", "11-50 empleados", "51-200 empleados", "200+ empleados"
    ],
    contactPersonSection: "Detalles de la Persona de Contacto",
    salutationLabel: "Saludo",
    salutationPlaceholder: "Seleccionar",
    salutationOptions: ["Sr.", "Sra.", "Otro"],
    firstNameLabel: "Nombre",
    firstNamePlaceholder: "Ingresa el nombre",
    lastNameLabel: "Apellido",
    lastNamePlaceholder: "Ingresa el apellido",
    emailLabel: "Dirección de Correo Electrónico",
    emailPlaceholder: "nombre@empresa.com",
    phoneLabel: "Número de Teléfono",
    phonePlaceholder: "+34 123 456 789",
    messageSection: "Tu Mensaje",
    messageLabel: "Mensaje",
    messagePlaceholder: "¿Cómo podemos ayudarte?",
    privacyConsentLabel: "Acepto la Política de Privacidad y consiento el procesamiento de mis datos personales",
    privacyPolicyLink: "Política de Privacidad",
    sendButton: "Enviar Mensaje",
    manufacturerText: "¿Es usted un fabricante\ninteresado en promover\ny vender productos alemanes de alta calidad a nivel global?",
    manufacturerButton: "Fabricantes de Alemania",
    customerText: "¿Es usted un cliente que busca\nobtener productos alemanes premium\ny desbloquear nuevos mercados?",
    customerButton: "Clientes en todo el mundo"
  },
  fr: {
    headerTitle: "Tracez de Nouvelles Voies",
    headerSubtitle: "avec l’Excellence Made-in-Germany",
    companyInfoSection: "Informations sur l'Entreprise",
    companyNameLabel: "Nom de l'Entreprise",
    companyNamePlaceholder: "Entrez le nom de l'entreprise",
    industryLabel: "Industrie",
    industryPlaceholder: "Sélectionnez l'industrie",
    industries: [
      "Technologie", "Soins de Santé", "Fabrication", "Services Financiers", "Commerce de Détail",
      "Éducation", "Construction", "Transport", "Énergie", "Autre"
    ],
    productionCapacityLabel: "Capacité de Production (Unités par An)",
    productionCapacityPlaceholder: "Entrez la capacité de production",
    productCategoriesLabel: "Catégories de Produits d'Intérêt",
    productCategoriesPlaceholder: "Sélectionnez les catégories de produits",
    productCategories: [
      "Électronique", "Automobile", "Machinerie", "Pharmaceutique", "Textiles", "Autre"
    ],
    targetMarketsLabel: "Marchés Cibles",
    targetMarketsPlaceholder: "Sélectionnez les marchés cibles",
    targetMarkets: [
      "Amérique du Nord", "Europe", "Asie", "Afrique", "Amérique du Sud", "Australie"
    ],
    preferredLanguageLabel: "Langue Préférée",
    preferredLanguagePlaceholder: "Sélectionnez votre langue préférée",
    companySizeLabel: "Taille de l'Entreprise",
    companySizePlaceholder: "Sélectionnez la taille de l'entreprise",
    companySizes: [
      "1-10 employés", "11-50 employés", "51-200 employés", "200+ employés"
    ],
    contactPersonSection: "Détails de la Personne de Contact",
    salutationLabel: "Salutation",
    salutationPlaceholder: "Sélectionner",
    salutationOptions: ["M.", "Mme", "Autre"],
    firstNameLabel: "Prénom",
    firstNamePlaceholder: "Entrez le prénom",
    lastNameLabel: "Nom de Famille",
    lastNamePlaceholder: "Entrez le nom de famille",
    emailLabel: "Adresse Email",
    emailPlaceholder: "nom@entreprise.fr",
    phoneLabel: "Numéro de Téléphone",
    phonePlaceholder: "+33 1 23 45 67 89",
    messageSection: "Votre Message",
    messageLabel: "Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    privacyConsentLabel: "J'accepte la Politique de Confidentialité et consens au traitement de mes données personnelles",
    privacyPolicyLink: "Politique de Confidentialité",
    sendButton: "Envoyer le Message",
    manufacturerText: "Êtes-vous un fabricant\nintéressé à promouvoir\net vendre des produits allemands de haute qualité à l'échelle mondiale ?",
    manufacturerButton: "Fabricants d'Allemagne",
    customerText: "Êtes-vous un client cherchant\nà vous procurer des produits allemands premium\net à explorer de nouveaux marchés ?",
    customerButton: "Clients dans le monde entier"
  },
  it: {
    headerTitle: "Apri Nuove Strade",
    headerSubtitle: "con l’Eccellenza Made-in-Germany",
    companyInfoSection: "Informazioni sull'Azienda",
    companyNameLabel: "Nome dell'Azienda",
    companyNamePlaceholder: "Inserisci il nome dell'azienda",
    industryLabel: "Settore",
    industryPlaceholder: "Seleziona il settore",
    industries: [
      "Tecnologia", "Sanità", "Manifattura", "Servizi Finanziari", "Commercio al Dettaglio",
      "Istruzione", "Costruzione", "Trasporti", "Energia", "Altro"
    ],
    productionCapacityLabel: "Capacità di Produzione (Unità all'Anno)",
    productionCapacityPlaceholder: "Inserisci la capacità di produzione",
    productCategoriesLabel: "Categorie di Prodotti di Interesse",
    productCategoriesPlaceholder: "Seleziona le categorie di prodotti",
    productCategories: [
      "Elettronica", "Automobilistico", "Macchinari", "Farmaceutico", "Tessile", "Altro"
    ],
    targetMarketsLabel: "Mercati di Interesse",
    targetMarketsPlaceholder: "Seleziona i mercati di interesse",
    targetMarkets: [
      "Nord America", "Europa", "Asia", "Africa", "Sud America", "Australia"
    ],
    preferredLanguageLabel: "Lingua Preferita",
    preferredLanguagePlaceholder: "Seleziona la tua lingua preferita",
    companySizeLabel: "Dimensioni dell'Azienda",
    companySizePlaceholder: "Seleziona le dimensioni dell'azienda",
    companySizes: [
      "1-10 dipendenti", "11-50 dipendenti", "51-200 dipendenti", "200+ dipendenti"
    ],
    contactPersonSection: "Dettagli della Persona di Contatto",
    salutationLabel: "Saluto",
    salutationPlaceholder: "Seleziona",
    salutationOptions: ["Sig.", "Sig.ra", "Altro"],
    firstNameLabel: "Nome",
    firstNamePlaceholder: "Inserisci il nome",
    lastNameLabel: "Cognome",
    lastNamePlaceholder: "Inserisci il cognome",
    emailLabel: "Indirizzo Email",
    emailPlaceholder: "nome@azienda.it",
    phoneLabel: "Numero di Telefono",
    phonePlaceholder: "+39 123 456 7890",
    messageSection: "Il Tuo Messaggio",
    messageLabel: "Messaggio",
    messagePlaceholder: "Come possiamo aiutarti?",
    privacyConsentLabel: "Accetto la Politica sulla Privacy e consento il trattamento dei miei dati personali",
    privacyPolicyLink: "Politica sulla Privacy",
    sendButton: "Invia Messaggio",
    manufacturerText: "Sei un produttore\ninteressato a promuovere\ne vendere prodotti tedeschi di alta qualità a livello globale?",
    manufacturerButton: "Produttori dalla Germania",
    customerText: "Sei un cliente che desidera\nacquistare beni tedeschi di qualità premium\ne sbloccare nuovi mercati?",
    customerButton: "Clienti in tutto il mondo"
  },
  nl: {
    headerTitle: "Ban Nieuwe Wegen",
    headerSubtitle: "met Made-in-Germany Excellentie",
    companyInfoSection: "Bedrijfsinformatie",
    companyNameLabel: "Bedrijfsnaam",
    companyNamePlaceholder: "Voer de bedrijfsnaam in",
    industryLabel: "Industrie",
    industryPlaceholder: "Selecteer industrie",
    industries: [
      "Technologie", "Gezondheidszorg", "Productie", "Financiële Diensten", "Detailhandel",
      "Onderwijs", "Bouw", "Vervoer", "Energie", "Andere"
    ],
    productionCapacityLabel: "Productiecapaciteit (Eenheden per Jaar)",
    productionCapacityPlaceholder: "Voer de productiecapaciteit in",
    productCategoriesLabel: "Geïnteresseerde Productcategorieën",
    productCategoriesPlaceholder: "Selecteer productcategorieën",
    productCategories: [
      "Elektronica", "Automobiel", "Machines", "Farmaceutica", "Textiel", "Andere"
    ],
    targetMarketsLabel: "Doelmarkten",
    targetMarketsPlaceholder: "Selecteer doelmarkten",
    targetMarkets: [
      "Noord-Amerika", "Europa", "Azië", "Afrika", "Zuid-Amerika", "Australië"
    ],
    preferredLanguageLabel: "Voorkeurtaal",
    preferredLanguagePlaceholder: "Selecteer uw voorkeurstaal",
    companySizeLabel: "Bedrijfsgrootte",
    companySizePlaceholder: "Selecteer bedrijfsgrootte",
    companySizes: [
      "1-10 medewerkers", "11-50 medewerkers", "51-200 medewerkers", "200+ medewerkers"
    ],
    contactPersonSection: "Gegevens Contactpersoon",
    salutationLabel: "Aanhef",
    salutationPlaceholder: "Selecteer",
    salutationOptions: ["Dhr.", "Mevr.", "Anders"],
    firstNameLabel: "Voornaam",
    firstNamePlaceholder: "Voer de voornaam in",
    lastNameLabel: "Achternaam",
    lastNamePlaceholder: "Voer de achternaam in",
    emailLabel: "E-mailadres",
    emailPlaceholder: "naam@bedrijf.nl",
    phoneLabel: "Telefoonnummer",
    phonePlaceholder: "+31 6 1234 5678",
    messageSection: "Uw Bericht",
    messageLabel: "Bericht",
    messagePlaceholder: "Hoe kunnen we u helpen?",
    privacyConsentLabel: "Ik ga akkoord met het Privacybeleid en geef toestemming voor de verwerking van mijn persoonlijke gegevens",
    privacyPolicyLink: "Privacybeleid",
    sendButton: "Bericht Verzenden",
    manufacturerText: "Bent u een fabrikant\ndie geïnteresseerd is in het promoten\nen verkopen van hoogwaardige Duitse producten wereldwijd?",
    manufacturerButton: "Fabrikanten uit Duitsland",
    customerText: "Bent u een klant die op zoek is\nnaar hoogwaardige Duitse goederen\nen nieuwe markten wil ontsluiten?",
    customerButton: "Klanten wereldwijd"
  },
  sa: {
    headerTitle: "شق طرقًا جديدة",
    headerSubtitle: "مع التميز Made-in-Germany",
    companyInfoSection: "معلومات الشركة",
    companyNameLabel: "اسم الشركة",
    companyNamePlaceholder: "أدخل اسم الشركة",
    industryLabel: "الصناعة",
    industryPlaceholder: "اختر الصناعة",
    industries: [
      "التكنولوجيا", "الرعاية الصحية", "التصنيع", "الخدمات المالية", "التجزئة",
      "التعليم", "البناء", "النقل", "الطاقة", "أخرى"
    ],
    productionCapacityLabel: "الطاقة الإنتاجية (وحدات في السنة)",
    productionCapacityPlaceholder: "أدخل الطاقة الإنتاجية",
    productCategoriesLabel: "فئات المنتجات المهتم بها",
    productCategoriesPlaceholder: "اختر فئات المنتجات",
    productCategories: [
      "الإلكترونيات", "السيارات", "الآلات", "الأدوية", "المنسوجات", "أخرى"
    ],
    targetMarketsLabel: "الأسواق المستهدفة",
    targetMarketsPlaceholder: "اختر الأسواق المستهدفة",
    targetMarkets: [
      "أمريكا الشمالية", "أوروبا", "آسيا", "أفريقيا", "أمريكا الجنوبية", "أستراليا"
    ],
    preferredLanguageLabel: "اللغة المفضلة",
    preferredLanguagePlaceholder: "اختر لغتك المفضلة",
    companySizeLabel: "حجم الشركة",
    companySizePlaceholder: "اختر حجم الشركة",
    companySizes: [
      "1-10 موظفين", "11-50 موظف", "51-200 موظف", "200+ موظف"
    ],
    contactPersonSection: "تفاصيل الشخص المسؤول عن الاتصال",
    salutationLabel: "التحية",
    salutationPlaceholder: "اختر",
    salutationOptions: ["السيد", "السيدة", "أخرى"],
    firstNameLabel: "الاسم الأول",
    firstNamePlaceholder: "أدخل الاسم الأول",
    lastNameLabel: "اسم العائلة",
    lastNamePlaceholder: "أدخل اسم العائلة",
    emailLabel: "عنوان البريد الإلكتروني",
    emailPlaceholder: "name@company.com",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "+966 5 1234 5678",
    messageSection: "رسالتك",
    messageLabel: "الرسالة",
    messagePlaceholder: "كيف يمكننا مساعدتك؟",
    privacyConsentLabel: "أوافق على سياسة الخصوصية وأسمح بمعالجة بياناتي الشخصية",
    privacyPolicyLink: "سياسة الخصوصية",
    sendButton: "إرسال الرسالة",
    manufacturerText: "هل أنت مصنّع\nمهتم بالترويج\nوبيع المنتجات الألمانية عالية الجودة عالميًا؟",
    manufacturerButton: "المصنعون من ألمانيا",
    customerText: "هل أنت عميل يسعى\nللحصول على بضائع ألمانية مميزة\nوفتح أسواق جديدة؟",
    customerButton: "العملاء في جميع أنحاء العالم"
  },
  hk: {
    headerTitle: "開闢新路",
    headerSubtitle: "以 Made-in-Germany 卓越品質",
    companyInfoSection: "公司資訊",
    companyNameLabel: "公司名稱",
    companyNamePlaceholder: "輸入公司名稱",
    industryLabel: "行業",
    industryPlaceholder: "選擇行業",
    industries: [
      "科技", "醫療", "製造", "金融服務", "零售",
      "教育", "建築", "運輸", "能源", "其他"
    ],
    productionCapacityLabel: "生產能力（每年單位數）",
    productionCapacityPlaceholder: "輸入生產能力",
    productCategoriesLabel: "感興趣的產品類別",
    productCategoriesPlaceholder: "選擇產品類別",
    productCategories: [
      "電子產品", "汽車", "機械", "製藥", "紡織", "其他"
    ],
    targetMarketsLabel: "目標市場",
    targetMarketsPlaceholder: "選擇目標市場",
    targetMarkets: [
      "北美", "歐洲", "亞洲", "非洲", "南美", "澳洲"
    ],
    preferredLanguageLabel: "首選語言",
    preferredLanguagePlaceholder: "選擇您的首選語言",
    companySizeLabel: "公司規模",
    companySizePlaceholder: "選擇公司規模",
    companySizes: [
      "1-10名員工", "11-50名員工", "51-200名員工", "200+名員工"
    ],
    contactPersonSection: "聯繫人詳情",
    salutationLabel: "稱呼",
    salutationPlaceholder: "選擇",
    salutationOptions: ["先生", "女士", "其他"],
    firstNameLabel: "名",
    firstNamePlaceholder: "輸入名字",
    lastNameLabel: "姓",
    lastNamePlaceholder: "輸入姓氏",
    emailLabel: "電子郵件地址",
    emailPlaceholder: "name@company.com",
    phoneLabel: "電話號碼",
    phonePlaceholder: "+852 1234 5678",
    messageSection: "您的訊息",
    messageLabel: "訊息",
    messagePlaceholder: "我們如何幫您？",
    privacyConsentLabel: "我同意隱私政策並允許處理我的個人數據",
    privacyPolicyLink: "隱私政策",
    sendButton: "發送訊息",
    manufacturerText: "您是製造商，\n有興趣推廣\n和銷售高品質德國產品到全球嗎？",
    manufacturerButton: "來自德國的製造商",
    customerText: "您是客戶，\n希望採購優質德國商品\n並開拓新市場嗎？",
    customerButton: "全球客戶"
  },
  sg: {
    headerTitle: "开辟新路",
    headerSubtitle: "以 Made-in-Germany 卓越品质",
    companyInfoSection: "公司信息",
    companyNameLabel: "公司名称",
    companyNamePlaceholder: "输入公司名称",
    industryLabel: "行业",
    industryPlaceholder: "选择行业",
    industries: [
      "科技", "医疗", "制造", "金融服务", "零售",
      "教育", "建筑", "运输", "能源", "其他"
    ],
    productionCapacityLabel: "生产能力（每年单位数）",
    productionCapacityPlaceholder: "输入生产能力",
    productCategoriesLabel: "感兴趣的产品类别",
    productCategoriesPlaceholder: "选择产品类别",
    productCategories: [
      "电子产品", "汽车", "机械", "制药", "纺织", "其他"
    ],
    targetMarketsLabel: "目标市场",
    targetMarketsPlaceholder: "选择目标市场",
    targetMarkets: [
      "北美", "欧洲", "亚洲", "非洲", "南美", "澳洲"
    ],
    preferredLanguageLabel: "首选语言",
    preferredLanguagePlaceholder: "选择您的首选语言",
    companySizeLabel: "公司规模",
    companySizePlaceholder: "选择公司规模",
    companySizes: [
      "1-10名员工", "11-50名员工", "51-200名员工", "200+名员工"
    ],
    contactPersonSection: "联系人详情",
    salutationLabel: "称呼",
    salutationPlaceholder: "选择",
    salutationOptions: ["先生", "女士", "其他"],
    firstNameLabel: "名字",
    firstNamePlaceholder: "输入名字",
    lastNameLabel: "姓氏",
    lastNamePlaceholder: "输入姓氏",
    emailLabel: "电子邮件地址",
    emailPlaceholder: "name@company.com",
    phoneLabel: "电话号码",
    phonePlaceholder: "+65 1234 5678",
    messageSection: "您的消息",
    messageLabel: "消息",
    messagePlaceholder: "我们如何帮您？",
    privacyConsentLabel: "我同意隐私政策并允许处理我的个人数据",
    privacyPolicyLink: "隐私政策",
    sendButton: "发送消息",
    manufacturerText: "您是制造商，\n有兴趣推广\n和销售高品质德国产品到全球吗？",
    manufacturerButton: "来自德国的制造商",
    customerText: "您是客户，\n希望采购优质德国商品\n并开拓新市场吗？",
    customerButton: "全球客户"
  },
  za: {
    headerTitle: "Baan Nuwe Weë",
    headerSubtitle: "met Made-in-Germany Uitnemendheid",
    companyInfoSection: "Maatskappy Inligting",
    companyNameLabel: "Maatskappy Naam",
    companyNamePlaceholder: "Voer maatskappy naam in",
    industryLabel: "Nywerheid",
    industryPlaceholder: "Kies nywerheid",
    industries: [
      "Tegnologie", "Gesondheidsorg", "Vervaardiging", "Finansiële Dienste", "Kleinhandel",
      "Onderwys", "Konstruksie", "Vervoer", "Energie", "Ander"
    ],
    productionCapacityLabel: "Produksiekapasiteit (Eenhede per Jaar)",
    productionCapacityPlaceholder: "Voer produksiekapasiteit in",
    productCategoriesLabel: "Produkkategorieë van Belang",
    productCategoriesPlaceholder: "Kies produkkategorieë",
    productCategories: [
      "Elektronika", "Motorvoertuie", "Masjinerie", "Farmaseutiese", "Tekstiele", "Ander"
    ],
    targetMarketsLabel: "Teikenmarkte",
    targetMarketsPlaceholder: "Kies teikenmarkte",
    targetMarkets: [
      "Noord-Amerika", "Europa", "Asië", "Afrika", "Suid-Amerika", "Australië"
    ],
    preferredLanguageLabel: "Voorkeurtaal",
    preferredLanguagePlaceholder: "Kies jou voorkeurtaal",
    companySizeLabel: "Maatskappy Grootte",
    companySizePlaceholder: "Kies maatskappy grootte",
    companySizes: [
      "1-10 werknemers", "11-50 werknemers", "51-200 werknemers", "200+ werknemers"
    ],
    contactPersonSection: "Kontakpersoon Besonderhede",
    salutationLabel: "Aanspreekvorm",
    salutationPlaceholder: "Kies",
    salutationOptions: ["Mnr.", "Mev.", "Ander"],
    firstNameLabel: "Voornaam",
    firstNamePlaceholder: "Voer voornaam in",
    lastNameLabel: "Van",
    lastNamePlaceholder: "Voer van in",
    emailLabel: "E-posadres",
    emailPlaceholder: "naam@maatskappy.co.za",
    phoneLabel: "Telefoonnommer",
    phonePlaceholder: "+27 12 345 6789",
    messageSection: "Jou Boodskap",
    messageLabel: "Boodskap",
    messagePlaceholder: "Hoe kan ons jou help?",
    privacyConsentLabel: "Ek stem saam met die Privaatheidsbeleid en gee toestemming vir die verwerking van my persoonlike data",
    privacyPolicyLink: "Privaatheidsbeleid",
    sendButton: "Stuur Boodskap",
    manufacturerText: "Is jy 'n vervaardiger\nwat belangstel om\nhoë kwaliteit Duitse produkte wêreldwyd te bevorder en te verkoop?",
    manufacturerButton: "Vervaardigers uit Duitsland",
    customerText: "Is jy 'n kliënt wat\nop soek is na premium Duitse goedere\nen nuwe markte wil ontsluit?",
    customerButton: "Kliënte Wêreldwyd"
  },
  kr: {
    headerTitle: "새로운 길을 개척하세요",
    headerSubtitle: "Made-in-Germany의 우수함으로",
    companyInfoSection: "회사 정보",
    companyNameLabel: "회사 이름",
    companyNamePlaceholder: "회사 이름을 입력하세요",
    industryLabel: "산업",
    industryPlaceholder: "산업을 선택하세요",
    industries: [
      "기술", "의료", "제조", "금융 서비스", "소매",
      "교육", "건설", "운송", "에너지", "기타"
    ],
    productionCapacityLabel: "생산 능력 (연간 단위)",
    productionCapacityPlaceholder: "생산 능력을 입력하세요",
    productCategoriesLabel: "관심 있는 제품 카테고리",
    productCategoriesPlaceholder: "제품 카테고리를 선택하세요",
    productCategories: [
      "전자제품", "자동차", "기계", "제약", "텍스타일", "기타"
    ],
    targetMarketsLabel: "타겟 시장",
    targetMarketsPlaceholder: "타겟 시장을 선택하세요",
    targetMarkets: [
      "북미", "유럽", "아시아", "아프리카", "남미", "호주"
    ],
    preferredLanguageLabel: "선호 언어",
    preferredLanguagePlaceholder: "선호하는 언어를 선택하세요",
    companySizeLabel: "회사 규모",
    companySizePlaceholder: "회사 규모를 선택하세요",
    companySizes: [
      "1-10명 직원", "11-50명 직원", "51-200명 직원", "200+명 직원"
    ],
    contactPersonSection: "연락 담당자 세부 사항",
    salutationLabel: "인사",
    salutationPlaceholder: "선택",
    salutationOptions: ["Mr.", "Ms.", "기타"],
    firstNameLabel: "이름",
    firstNamePlaceholder: "이름을 입력하세요",
    lastNameLabel: "성",
    lastNamePlaceholder: "성을 입력하세요",
    emailLabel: "이메일 주소",
    emailPlaceholder: "name@company.com",
    phoneLabel: "전화번호",
    phonePlaceholder: "+82 10-1234-5678",
    messageSection: "귀하의 메시지",
    messageLabel: "메시지",
    messagePlaceholder: "어떻게 도와드릴까요?",
    privacyConsentLabel: "개인정보 보호정책에 동의하며 개인 데이터 처리에 동의합니다",
    privacyPolicyLink: "개인정보 보호정책",
    sendButton: "메시지 보내기",
    manufacturerText: "당신은 제조업체로서\n고품질 독일 제품을 전 세계적으로\n홍보하고 판매하는 데 관심이 있습니까?",
    manufacturerButton: "독일 제조업체",
    customerText: "당신은 프리미엄 독일 상품을\n소싱하여 새로운 시장을\n개척하려는 고객입니까?",
    customerButton: "전 세계 고객"
  },
  jp: {
    headerTitle: "新たな道を切り開く",
    headerSubtitle: "Made-in-Germanyの卓越性とともに",
    companyInfoSection: "企業情報",
    companyNameLabel: "会社名",
    companyNamePlaceholder: "会社名を入力してください",
    industryLabel: "業界",
    industryPlaceholder: "業界を選択してください",
    industries: [
      "テクノロジー", "ヘルスケア", "製造業", "金融サービス", "小売業",
      "教育", "建設", "輸送", "エネルギー", "その他"
    ],
    productionCapacityLabel: "生産能力（年間単位）",
    productionCapacityPlaceholder: "生産能力を入力してください",
    productCategoriesLabel: "興味のある製品カテゴリ",
    productCategoriesPlaceholder: "製品カテゴリを選択してください",
    productCategories: [
      "電子機器", "自動車", "機械", "医薬品", "繊維", "その他"
    ],
    targetMarketsLabel: "ターゲット市場",
    targetMarketsPlaceholder: "ターゲット市場を選択してください",
    targetMarkets: [
      "北アメリカ", "ヨーロッパ", "アジア", "アフリカ", "南アメリカ", "オーストラリア"
    ],
    preferredLanguageLabel: "優先言語",
    preferredLanguagePlaceholder: "優先言語を選択してください",
    companySizeLabel: "会社規模",
    companySizePlaceholder: "会社規模を選択してください",
    companySizes: [
      "1-10人", "11-50人", "51-200人", "200人以上"
    ],
    contactPersonSection: "連絡先詳細",
    salutationLabel: "敬称",
    salutationPlaceholder: "選択",
    salutationOptions: ["様", "さん", "その他"],
    firstNameLabel: "名前",
    firstNamePlaceholder: "名前を入力してください",
    lastNameLabel: "姓",
    lastNamePlaceholder: "姓を入力してください",
    emailLabel: "メールアドレス",
    emailPlaceholder: "name@company.com",
    phoneLabel: "電話番号",
    phonePlaceholder: "+81 3-1234-5678",
    messageSection: "あなたのメッセージ",
    messageLabel: "メッセージ",
    messagePlaceholder: "どのようにお手伝いしましょうか？",
    privacyConsentLabel: "プライバシーポリシーに同意し、個人データの処理に同意します",
    privacyPolicyLink: "プライバシーポリシー",
    sendButton: "メッセージを送信",
    manufacturerText: "あなたは製造業者で、\n高品質なドイツ製品を\nグローバルに宣伝・販売することに興味がありますか？",
    manufacturerButton: "ドイツからの製造業者",
    customerText: "あなたはプレミアムなドイツ製品を\n調達し、新しい市場を\n開拓したいクライアントですか？",
    customerButton: "世界中の顧客"
  }
};

const ContactForm: React.FC<ContactFormProps> = ({ language = 'en' }) => {
  const [manufacturerFormData, setManufacturerFormData] = useState<ManufacturerFormData>({
    companyName: '',
    industry: '',
    productionCapacity: '',
    preferredLanguage: '',
    companySize: '',
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacyConsent: false
  });

  const [customerFormData, setCustomerFormData] = useState<CustomerFormData>({
    companyName: '',
    productCategories: '',
    targetMarkets: '',
    preferredLanguage: '',
    companySize: '',
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacyConsent: false
  });

  const [isManufacturerFormOpen, setIsManufacturerFormOpen] = useState(false);
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);

  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];

  const handleManufacturerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setManufacturerFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCustomerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setCustomerFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleManufacturerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(manufacturerFormData);
    setManufacturerFormData({
      companyName: '',
      industry: '',
      productionCapacity: '',
      preferredLanguage: '',
      companySize: '',
      salutation: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      privacyConsent: false
    });
    setIsManufacturerFormOpen(false);
  };

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(customerFormData);
    setCustomerFormData({
      companyName: '',
      productCategories: '',
      targetMarkets: '',
      preferredLanguage: '',
      companySize: '',
      salutation: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      privacyConsent: false
    });
    setIsCustomerFormOpen(false);
  };

  const languageOptions = [
    { code: 'de', name: 'Deutsch', flag: '/flag/germany.gif' },
    { code: 'en', name: 'English', flag: '/flag/uk.gif' },
    { code: 'es', name: 'Español', flag: '/flag/spain.gif' },
    { code: 'fr', name: 'Français', flag: '/flag/french.gif' },
    { code: 'it', name: 'Italiano', flag: '/flag/italy.gif' },
    { code: 'nl', name: "Dutch", flag: '/flag/netherlands.gif' },
    { code: 'sa', name: 'العربية (السعودية)', flag: '/flag/saudi.gif' },
    { code: 'hk', name: '繁體中文', flag: '/flag/hong-kong.gif' },
    { code: 'sg', name: '简体中文', flag: '/flag/singapore.gif' },
    { code: 'za', name: 'Afrikaans', flag: '/flag/south-africa.gif' },
    { code: 'kr', name: '한국어', flag: '/flag/south-korea.gif' },
    { code: 'jp', name: '日本語', flag: '/flag/japan.gif' }
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-10">
      <div className="space-y-8 bg-[#0B111F] p-8 rounded-2xl backdrop-blur-sm border border-[#0B111F]/10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">{translations.headerTitle}</h1>
          <h2 className="text-5xl font-bold text-white">
            {translations.headerSubtitle.split('Made-in-Germany')[0]}
            <span className="inline-block">
              <span className="text-white">Made</span>
              <span className="text-red-600">-</span>
              <span className="text-red-600">in</span>
              <span className="text-red-600">-</span>
              <span className="text-yellow-400">Germany</span>
            </span>
          </h2>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
          {/* Manufacturer Section */}
          <div className="space-y-4 text-center">
            <p className="text-lg whitespace-pre-line">
              {translations.manufacturerText}
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setIsManufacturerFormOpen(!isManufacturerFormOpen);
                  setIsCustomerFormOpen(false); // Close customer form if open
                }}
                className="flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                {translations.manufacturerButton}
                <ChevronDown
                  className={`ml-2 h-5 w-5 transform transition-transform ${
                    isManufacturerFormOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Customer Section */}
          <div className="space-y-4 text-center">
            <p className="text-lg whitespace-pre-line">
              {translations.customerText}
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setIsCustomerFormOpen(!isCustomerFormOpen);
                  setIsManufacturerFormOpen(false); // Close manufacturer form if open
                }}
                className="flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                {translations.customerButton}
                <ChevronDown
                  className={`ml-2 h-5 w-5 transform transition-transform ${
                    isCustomerFormOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Manufacturer Form */}
        {isManufacturerFormOpen && (
          <form onSubmit={handleManufacturerSubmit} className="space-y-8">
            {/* Company Information Section */}
            <div className="space-y-6">
              <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">
                {translations.companyInfoSection}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.companyNameLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="companyName"
                      value={manufacturerFormData.companyName}
                      onChange={handleManufacturerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.companyNamePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.industryLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="industry"
                      value={manufacturerFormData.industry}
                      onChange={handleManufacturerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-4 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    >
                      <option value="">{translations.industryPlaceholder}</option>
                      {translations.industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.productionCapacityLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <Factory className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="productionCapacity"
                      value={manufacturerFormData.productionCapacity}
                      onChange={handleManufacturerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.productionCapacityPlaceholder}
                    />
                  </div>
                </div>

                {/* Updated Row: Company Size and Preferred Language */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {translations.companySizeLabel}
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="companySize"
                        value={manufacturerFormData.companySize}
                        onChange={handleManufacturerChange}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.companySizePlaceholder}</option>
                        {translations.companySizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {translations.preferredLanguageLabel}
                    </label>
                    <div className="relative">
                      <select
                        name="preferredLanguage"
                        value={manufacturerFormData.preferredLanguage}
                        onChange={handleManufacturerChange}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-4 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.preferredLanguagePlaceholder}</option>
                        {languageOptions.map((lang) => (
                          <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Person Section */}
            <div className="space-y-6">
              <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">
                {translations.contactPersonSection}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.salutationLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <select
                    name="salutation"
                    value={manufacturerFormData.salutation}
                    onChange={handleManufacturerChange}
                    required
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                  >
                    <option value="">{translations.salutationPlaceholder}</option>
                    {translations.salutationOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.firstNameLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={manufacturerFormData.firstName}
                    onChange={handleManufacturerChange}
                    required
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    placeholder={translations.firstNamePlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.lastNameLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={manufacturerFormData.lastName}
                    onChange={handleManufacturerChange}
                    required
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    placeholder={translations.lastNamePlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.emailLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="email"
                      name="email"
                      value={manufacturerFormData.email}
                      onChange={handleManufacturerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.phoneLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="tel"
                      name="phone"
                      value={manufacturerFormData.phone}
                      onChange={handleManufacturerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.phonePlaceholder}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="space-y-6">
              <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">
                {translations.messageSection}
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {translations.messageLabel} <span className="text-[#0B111F]">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#FFFFFF]" />
                  <textarea
                    name="message"
                    value={manufacturerFormData.message}
                    onChange={handleManufacturerChange}
                    required
                    rows={6}
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none resize-y"
                    placeholder={translations.messagePlaceholder}
                  />
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={manufacturerFormData.privacyConsent}
                onChange={handleManufacturerChange}
                required
                className="mt-1 h-4 w-4 rounded border-gray-700 bg-[#121A2A] text-[#0B111F] focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
              />
              <label className="text-sm text-gray-300">
                {translations.privacyConsentLabel.split(translations.privacyPolicyLink)[0]}
                <a href="#" className="text-[#FFFFFF] hover:underline">
                  {translations.privacyPolicyLink}
                </a>
                {translations.privacyConsentLabel.split(translations.privacyPolicyLink)[1] || ''}
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex px-4 py-2 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
              >
                <Send className="mr-2 h-5 w-5" />
                {translations.sendButton}
              </button>
            </div>
          </form>
        )}

        {/* Customer Form */}
        {isCustomerFormOpen && (
          <form onSubmit={handleCustomerSubmit} className="space-y-8">
            {/* Company Information Section */}
            <div className="space-y-6">
              <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">
                {translations.companyInfoSection}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.companyNameLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="companyName"
                      value={customerFormData.companyName}
                      onChange={handleCustomerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.companyNamePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.productCategoriesLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <ShoppingCart className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <select
                      name="productCategories"
                      value={customerFormData.productCategories}
                      onChange={handleCustomerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    >
                      <option value="">{translations.productCategoriesPlaceholder}</option>
                      {translations.productCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.targetMarketsLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="targetMarkets"
                      value={customerFormData.targetMarkets}
                      onChange={handleCustomerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-4 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    >
                      <option value="">{translations.targetMarketsPlaceholder}</option>
                      {translations.targetMarkets.map((market) => (
                        <option key={market} value={market}>{market}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                  </div>
                </div>

                {/* Updated Row: Company Size and Preferred Language */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {translations.companySizeLabel}
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="companySize"
                        value={customerFormData.companySize}
                        onChange={handleCustomerChange}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.companySizePlaceholder}</option>
                        {translations.companySizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      {translations.preferredLanguageLabel}
                    </label>
                    <div className="relative">
                      <select
                        name="preferredLanguage"
                        value={customerFormData.preferredLanguage}
                        onChange={handleCustomerChange}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-4 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.preferredLanguagePlaceholder}</option>
                        {languageOptions.map((lang) => (
                          <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Person Section */}
            <div className="space-y-6">
              <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">
                {translations.contactPersonSection}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.salutationLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <select
                    name="salutation"
                    value={customerFormData.salutation}
                    onChange={handleCustomerChange}
                    required
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                  >
                    <option value="">{translations.salutationPlaceholder}</option>
                    {translations.salutationOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.firstNameLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={customerFormData.firstName}
                    onChange={handleCustomerChange}
                    required
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    placeholder={translations.firstNamePlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.lastNameLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={customerFormData.lastName}
                    onChange={handleCustomerChange}
                    required
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    placeholder={translations.lastNamePlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.emailLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="email"
                      name="email"
                      value={customerFormData.email}
                      onChange={handleCustomerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {translations.phoneLabel} <span className="text-[#0B111F]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="tel"
                      name="phone"
                      value={customerFormData.phone}
                      onChange={handleCustomerChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.phonePlaceholder}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="space-y-6">
              <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">
                {translations.messageSection}
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {translations.messageLabel} <span className="text-[#0B111F]">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#FFFFFF]" />
                  <textarea
                    name="message"
                    value={customerFormData.message}
                    onChange={handleCustomerChange}
                    required
                    rows={6}
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none resize-y"
                    placeholder={translations.messagePlaceholder}
                  />
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={customerFormData.privacyConsent}
                onChange={handleCustomerChange}
                required
                className="mt-1 h-4 w-4 rounded border-gray-700 bg-[#121A2A] text-[#0B111F] focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
              />
              <label className="text-sm text-gray-300">
                {translations.privacyConsentLabel.split(translations.privacyPolicyLink)[0]}
                <a href="#" className="text-[#FFFFFF] hover:underline">
                  {translations.privacyPolicyLink}
                </a>
                {translations.privacyConsentLabel.split(translations.privacyPolicyLink)[1] || ''}
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex px-4 py-2 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
              >
                <Send className="mr-2 h-5 w-5" />
                {translations.sendButton}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;