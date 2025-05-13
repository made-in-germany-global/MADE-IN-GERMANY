import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHandshake, faPlane, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { X, Search, ChevronRight, MessageCircle, Truck, Package, Briefcase, MapPin, Users, Clock, Globe2, BarChart, Settings, Factory, Shield, DollarSign, CheckCircle, Star, Share2, Lock, Award, Handshake, Leaf, Languages, Building, Plane, Wrench } from 'lucide-react';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  language?: string;
}

interface Question {
  question: string;
  answer: string;
  icon: JSX.Element;
}

interface Section {
  title: string;
  icon: JSX.Element;
  questions: Question[];
}

const TRANSLATIONS: Record<string, {
  headerTitle: string;
  headerSubtitle: string;
  searchPlaceholder: string;
  footerText: string;
  sections: Section[];
}> = {
  en: {
    headerTitle: "MADE IN GERMANY ©  Business Assistant",
    headerSubtitle: "Online and ready to assist with your global trade needs",
    searchPlaceholder: "Ask your question...",
    footerText: "Ask your question or browse the topics",
    sections: [
      {
        title: "General Questions about MADE IN GERMANY ©  Exports",
        icon: <FontAwesomeIcon icon={faGlobe} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" />,
        questions: [
          { question: "What makes MADE IN GERMANY ©  products unique?", answer: "MADE IN GERMANY ©  products are renowned for their precision, quality, and innovation, backed by a long tradition of engineering excellence.", icon: <Award className="text-blue-400" size={20} /> },
          { question: "Why should companies import MADE IN GERMANY ©  products?", answer: "These products offer reliability, durability, and advanced technology, making them highly sought after in global markets.", icon: <Star className="text-blue-400" size={20} /> },
          { question: "How do we ensure timely delivery worldwide?", answer: "We use a robust global logistics network including trains, ships, and cargo planes to deliver German products efficiently.", icon: <Truck className="text-blue-400" size={20} /> },
          { question: "Which markets are key for MADE IN GERMANY ©  exports?", answer: "Asia, Africa, the Arab world, and wealthy nations like the USA and EU are prime markets for German goods.", icon: <MapPin className="text-blue-400" size={20} /> },
          { question: "What types of products do we export?", answer: "We export automotive parts, machinery, electronics, pharmaceuticals, and more, all adhering to German quality standards.", icon: <Package className="text-blue-400" size={20} /> },
          { question: "How do we support small businesses with exports?", answer: "We offer tailored logistics and competitive pricing to help small businesses access global markets with German products.", icon: <Users className="text-blue-400" size={20} /> },
          { question: "What is the history behind MADE IN GERMANY © ?", answer: "The label originated in the late 19th century as a mark of quality, evolving into a global symbol of excellence.", icon: <Clock className="text-blue-400" size={20} /> },
          { question: "How do German exports impact the global economy?", answer: "German exports drive economic growth by supplying high-quality goods to industries worldwide.", icon: <Globe2 className="text-blue-400" size={20} /> },
          { question: "What are the most popular German export categories?", answer: "Automotive, machinery, and chemical products lead, followed by electronics and pharmaceuticals.", icon: <BarChart className="text-blue-400" size={20} /> },
          { question: "How do we adapt to different market demands?", answer: "We customize products and logistics ладto meet the specific needs of each region.", icon: <Settings className="text-blue-400" size={20} /> },
          { question: "Why is Germany a leader in manufacturing?", answer: "Germany excels due to its skilled workforce, advanced infrastructure, and focus on innovation.", icon: <Factory className="text-blue-400" size={20} /> },
          { question: "What role does technology play in our exports?", answer: "Cutting-edge technology ensures our products remain competitive and meet modern demands.", icon: <Wrench className="text-blue-400" size={20} /> },
          { question: "How do we handle export regulations?", answer: "We comply with international trade laws and assist clients with regulatory requirements.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "What is the volume of German exports annually?", answer: "Germany exports over €1.5 trillion worth of goods yearly, a significant global share.", icon: <DollarSign className="text-blue-400" size={20} /> },
          { question: "How do we ensure product authenticity?", answer: "We source directly from certified German manufacturers to guarantee authenticity.", icon: <CheckCircle className="text-blue-400" size={20} /> },
          { question: "What are the benefits of exporting German goods?", answer: "Exporters gain access to premium markets and enhance their brand reputation.", icon: <Star className="text-blue-400" size={20} /> },
          { question: "How do we promote German exports globally?", answer: "Through trade fairs, partnerships, and digital marketing, we showcase German quality worldwide.", icon: <Share2 className="text-blue-400" size={20} /> },
          { question: "What challenges do we face in exporting?", answer: "Tariffs, trade barriers, and logistics costs are managed with strategic planning.", icon: <Lock className="text-blue-400" size={20} /> },
          { question: "How do we support export growth?", answer: "We invest in logistics infrastructure and market research to expand our reach.", icon: <Plane className="text-blue-400" size={20} /> },
          { question: "What is the future of MADE IN GERMANY ©  exports?", answer: "Sustainability and digitalization will drive future growth in German exports.", icon: <Leaf className="text-blue-400" size={20} /> },
          { question: "How do we handle customer inquiries about exports?", answer: "Our multilingual team provides prompt, detailed responses to all inquiries.", icon: <MessageCircle className="text-blue-400" size={20} /> },
          { question: "What sets German exports apart from competitors?", answer: "Superior quality, precision engineering, and a trusted brand reputation distinguish us.", icon: <Award className="text-blue-400" size={20} /> },
          { question: "How do we ensure export scalability?", answer: "We scale operations with flexible logistics and partnerships to meet demand.", icon: <BarChart className="text-blue-400" size={20} /> },
          { question: "What role do trade agreements play in our exports?", answer: "Trade agreements reduce barriers and open new markets for German goods.", icon: <Handshake className="text-blue-400" size={20} /> },
          { question: "How do we address currency fluctuations in exports?", answer: "We use hedging strategies and flexible pricing to mitigate currency risks.", icon: <DollarSign className="text-blue-400" size={20} /> }
        ]
      },
      {
        title: "Distribution and Partnership Opportunities",
        icon: <FontAwesomeIcon icon={faHandshake} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" />,
        questions: [
          { question: "How can companies partner with us for distribution?", answer: "We collaborate with global distributors to bring MADE IN GERMANY ©  products to their markets, offering tailored logistics and support.", icon: <Briefcase className="text-blue-400" size={20} /> },
          { question: "What benefits do distributors gain from us?", answer: "Distributors enjoy access to premium German products, competitive pricing, and our extensive logistics network.", icon: <DollarSign className="text-blue-400" size={20} /> },
          { question: "Can we import products to Germany for distribution?", answer: "Yes, we facilitate imports from global companies to Germany, ensuring they meet our quality standards for distribution.", icon: <Package className="text-blue-400" size={20} /> },
          { question: "What support do we provide to new partners?", answer: "New partners receive training, marketing support, and logistics coordination to ensure successful distribution.", icon: <CheckCircle className="text-blue-400" size={20} /> },
          { question: "How do we ensure fair pricing for distributors?", answer: "We negotiate directly with manufacturers to secure competitive prices, passing savings onto our distributors.", icon: <BarChart className="text-blue-400" size={20} /> },
          { question: "What types of partnerships do we offer?", answer: "We provide exclusive, non-exclusive, and regional distribution agreements based on partner needs.", icon: <Handshake className="text-blue-400" size={20} /> },
          { question: "How do we select our distribution partners?", answer: "We choose partners based on market reach, reliability, and alignment with our quality standards.", icon: <Users className="text-blue-400" size={20} /> },
          { question: "What is the process to become a distributor?", answer: "Interested companies submit an application, followed by a review and agreement process.", icon: <Settings className="text-blue-400" size={20} /> },
          { question: "How do we train our distribution partners?", answer: "We offer product knowledge sessions, logistics training, and ongoing support.", icon: <Wrench className="text-blue-400" size={20} /> },
          { question: "What marketing support do we provide?", answer: "We supply promotional materials, digital campaigns, and co-branding opportunities.", icon: <Share2 className="text-blue-400" size={20} /> },
          { question: "Can distributors sell online?", answer: "Yes, we support e-commerce distribution with logistics and digital tools.", icon: <Globe2 className="text-blue-400" size={20} /> },
          { question: "How do we handle distributor disputes?", answer: "We mediate fairly with clear communication and contractual guidelines.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "What are the financial benefits for partners?", answer: "Partners gain high margins due to the premium value of German products.", icon: <DollarSign className="text-blue-400" size={20} /> },
          { question: "How do we ensure partner exclusivity?", answer: "Exclusive partners receive protected territories and priority supply.", icon: <Lock className="text-blue-400" size={20} /> },
          { question: "What logistics support do partners receive?", answer: "We provide end-to-end shipping, tracking, and customs assistance.", icon: <Truck className="text-blue-400" size={20} /> },
          { question: "How do we evaluate partner performance?", answer: "We track sales, customer feedback, and market penetration metrics.", icon: <BarChart className="text-blue-400" size={20} /> },
          { question: "Can partners distribute multiple product lines?", answer: "Yes, partners can handle diverse German product categories based on capacity.", icon: <Package className="text-blue-400" size={20} /> },
          { question: "What is the minimum order for distributors?", answer: "Minimums vary by product but are designed to be accessible for all partners.", icon: <CheckCircle className="text-blue-400" size={20} /> },
          { question: "How do we onboard new distributors?", answer: "We guide them through contracts, training, and initial shipments seamlessly.", icon: <Star className="text-blue-400" size={20} /> },
          { question: "What role do partners play in branding?", answer: "Partners co-promote the MADE IN GERMANY ©  brand while building their own reputation.", icon: <Award className="text-blue-400" size={20} /> },
          { question: "How do we support partner growth?", answer: "We offer scalability options and market expansion strategies.", icon: <Plane className="text-blue-400" size={20} /> },
          { question: "Can partners suggest new products?", answer: "Yes, we welcome feedback to expand our offerings based on market needs.", icon: <MessageCircle className="text-blue-400" size={20} /> },
          { question: "What is the duration of partnership agreements?", answer: "Agreements typically last 1-3 years, renewable based on performance.", icon: <Clock className="text-blue-400" size={20} /> },
          { question: "How do we protect partner investments?", answer: "We ensure stable supply chains and fair terms to safeguard investments.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "What incentives do top distributors receive?", answer: "Top performers get priority pricing, bonuses, and exclusive opportunities.", icon: <DollarSign className="text-blue-400" size={20} /> }
        ]
      },
      {
        title: "Logistics and Global Trade",
        icon: <FontAwesomeIcon icon={faPlane} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" />,
        questions: [
          { question: "How do we handle international shipping challenges?", answer: "Our advanced logistics solutions address customs, tariffs, and transportation hurdles to ensure smooth delivery.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "What role does sustainability play in our logistics?", answer: "We prioritize eco-friendly shipping methods and packaging to reduce our carbon footprint.", icon: <Leaf className="text-blue-400" size={20} /> },
          { question: "How do time zones affect our operations?", answer: "We operate with flexible schedules and digital tools to coordinate across global time zones effectively.", icon: <Clock className="text-blue-400" size={20} /> },
          { question: "What languages do we support for global trade?", answer: "We provide multilingual support including English, German, Arabic, Chinese, and more to facilitate smooth communication.", icon: <Languages className="text-blue-400" size={20} /> },
          { question: "How do we ensure secure shipments?", answer: "We use encrypted tracking systems and trusted carriers to protect shipments worldwide.", icon: <Lock className="text-blue-400" size={20} /> },
          { question: "What shipping methods do we use?", answer: "We utilize air, sea, rail, and road transport based on efficiency and cost.", icon: <Truck className="text-blue-400" size={20} /> },
          { question: "How do we calculate shipping costs?", answer: "Costs are based on distance, weight, and transport mode, with transparent pricing.", icon: <DollarSign className="text-blue-400" size={20} /> },
          { question: "What is our average delivery time?", answer: "Delivery times vary by region, typically 3-14 days depending on the destination.", icon: <Clock className="text-blue-400" size={20} /> },
          { question: "How do we track shipments?", answer: "Clients receive real-time updates via our encrypted tracking platform.", icon: <MapPin className="text-blue-400" size={20} /> },
          { question: "What happens if a shipment is delayed?", answer: "We investigate, communicate updates, and expedite solutions promptly.", icon: <Plane className="text-blue-400" size={20} /> },
          { question: "How do we handle customs clearance?", answer: "Our team manages documentation and compliance for seamless customs processing.", icon: <CheckCircle className="text-blue-400" size={20} /> },
          { question: "What is our logistics capacity?", answer: "We handle thousands of shipments monthly with scalable infrastructure.", icon: <Plane className="text-blue-400" size={20} /> },
          { question: "How do we optimize shipping routes?", answer: "We use AI-driven logistics to select the fastest and most cost-effective routes.", icon: <Settings className="text-blue-400" size={20} /> },
          { question: "What insurance options do we offer?", answer: "We provide comprehensive shipment insurance for full protection.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "How do we reduce logistics costs?", answer: "Bulk shipping, route optimization, and partnerships lower overall costs.", icon: <BarChart className="text-blue-400" size={20} /> },
          { question: "What role does technology play in logistics?", answer: "Automation and tracking tech enhance efficiency and transparency.", icon: <Globe2 className="text-blue-400" size={20} /> },
          { question: "How do we manage peak shipping seasons?", answer: "We scale capacity and prioritize shipments during high-demand periods.", icon: <Star className="text-blue-400" size={20} /> },
          { question: "Can we ship to remote areas?", answer: "Yes, our network reaches even the most challenging destinations.", icon: <MapPin className="text-blue-400" size={20} /> },
          { question: "How do we ensure cold chain logistics?", answer: "We use refrigerated transport for temperature-sensitive goods like pharmaceuticals.", icon: <Package className="text-blue-400" size={20} /> },
          { question: "What is our return policy for shipments?", answer: "Returns are processed efficiently with clear guidelines for partners.", icon: <Truck className="text-blue-400" size={20} /> },
          { question: "How do we handle fragile goods?", answer: "Special packaging and handling ensure fragile items arrive intact.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "What certifications do our logistics hold?", answer: "We comply with ISO and international shipping standards.", icon: <Award className="text-blue-400" size={20} /> },
          { question: "How do we support urgent deliveries?", answer: "Express air shipping options are available for time-critical needs.", icon: <Plane className="text-blue-400" size={20} /> },
          { question: "What is our global trade compliance strategy?", answer: "We stay updated on trade laws to ensure full compliance.", icon: <Lock className="text-blue-400" size={20} /> },
          { question: "How do we adapt logistics for emergencies?", answer: "We activate contingency plans for rapid response in crises.", icon: <Plane className="text-blue-400" size={20} /> }
        ]
      },
      {
        title: "Quality and Standards",
        icon: <FontAwesomeIcon icon={faBuilding} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" />,
        questions: [
          { question: "How do we maintain German quality standards?", answer: "We work with certified German manufacturers and conduct rigorous quality checks on all products.", icon: <Wrench className="text-blue-400" size={20} /> },
          { question: "What industries do we serve with German products?", answer: "We distribute products for automotive, machinery, technology, healthcare, and more, all MADE IN GERMANY © .", icon: <Factory className="text-blue-400" size={20} /> },
          { question: "Why is German engineering trusted worldwide?", answer: "German engineering is synonymous with precision, innovation, and reliability, built over decades of expertise.", icon: <Award className="text-blue-400" size={20} /> },
          { question: "How do we certify imported products?", answer: "Imported products undergo strict testing to meet German safety and quality regulations before distribution.", icon: <Settings className="text-blue-400" size={20} /> },
          { question: "What role does innovation play in our offerings?", answer: "We focus on cutting-edge German technology to provide innovative solutions to global markets.", icon: <Star className="text-blue-400" size={20} /> },
          { question: "What quality certifications do we hold?", answer: "Our products meet DIN, ISO, and CE standards, ensuring top-tier quality.", icon: <CheckCircle className="text-blue-400" size={20} /> },
          { question: "How do we test product durability?", answer: "We conduct stress tests and long-term simulations to ensure durability.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "What is our quality control process?", answer: "Every production stage is monitored, with final inspections before shipping.", icon: <Wrench className="text-blue-400" size={20} /> },
          { question: "How do we ensure consistency in quality?", answer: "Standardized processes and regular audits maintain consistent quality.", icon: <BarChart className="text-blue-400" size={20} /> },
          { question: "What materials do we use for German products?", answer: "We use high-grade materials sourced from trusted suppliers.", icon: <Package className="text-blue-400" size={20} /> },
          { question: "How do we handle defective products?", answer: "Defective items are replaced promptly with full transparency.", icon: <Truck className="text-blue-400" size={20} /> },
          { question: "What is the lifespan of our products?", answer: "German products are designed for longevity, often exceeding industry norms.", icon: <Clock className="text-blue-400" size={20} /> },
          { question: "How do we ensure safety standards?", answer: "Products are tested for safety compliance with global regulations.", icon: <Lock className="text-blue-400" size={20} /> },
          { question: "What role does R&D play in quality?", answer: "Research and development drive continuous improvement in our offerings.", icon: <Star className="text-blue-400" size={20} /> },
          { question: "How do we train manufacturers?", answer: "We provide guidelines and audits to ensure adherence to our standards.", icon: <Users className="text-blue-400" size={20} /> },
          { question: "What is our warranty policy?", answer: "We offer comprehensive warranties tailored to each product category.", icon: <Shield className="text-blue-400" size={20} /> },
          { question: "How do we address quality complaints?", answer: "We investigate and resolve issues quickly to maintain customer trust.", icon: <MessageCircle className="text-blue-400" size={20} /> },
          { question: "What makes our quality checks rigorous?", answer: "Multiple testing phases and expert oversight ensure no compromises.", icon: <CheckCircle className="text-blue-400" size={20} /> },
          { question: "How do we stay ahead in quality standards?", answer: "We adopt the latest industry advancements and exceed expectations.", icon: <Award className="text-blue-400" size={20} /> },
          { question: "What is the role of precision in our products?", answer: "Precision engineering ensures flawless performance and reliability.", icon: <Wrench className="text-blue-400" size={20} /> },
          { question: "How do we ensure eco-friendly production?", answer: "We integrate sustainable practices into manufacturing processes.", icon: <Leaf className="text-blue-400" size={20} /> },
          { question: "What testing facilities do we use?", answer: "State-of-the-art labs in Germany verify product quality.", icon: <Factory className="text-blue-400" size={20} /> },
          { question: "How do we certify supplier quality?", answer: "Suppliers are audited regularly to meet our stringent criteria.", icon: <Settings className="text-blue-400" size={20} /> },
          { question: "What is our approach to continuous improvement?", answer: "Feedback and innovation keep our standards evolving.", icon: <Wrench className="text-blue-400" size={20} /> },
          { question: "How do we guarantee customer satisfaction?", answer: "High-quality products and responsive support ensure satisfaction.", icon: <Star className="text-blue-400" size={20} /> }
        ]
      }
    ]
  }
};

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose, language = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const filterSections = (query: string) => {
    return translations.sections.map(section => ({
      ...section,
      questions: section.questions.filter(q =>
        q.question.toLowerCase().includes(query.toLowerCase()) ||
        q.answer.toLowerCase().includes(query.toLowerCase())
      )
    })).filter(section => section.questions.length > 0);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
          onClick={handleBackdropClick}
        >
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .animate-fade-in {
                animation: fadeIn 0.3s ease-in;
              }
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes gridPulse {
                0% { opacity: 0.2; }
                50% { opacity: 0.4; }
                100% { opacity: 0.2; }
              }
              @media (max-width: 640px) {
                .mobile-close-button {
                  position: absolute;
                  top: 0.25rem;
                  right: 0.5rem;
                  padding: 0.25rem 0.5rem;
                  font-size: 0.75rem;
                }
                .mobile-header-title {
                  margin-top: 2rem;
                }
              }
              .tooltip {
                visibility: hidden;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
                position: absolute;
                top: 100%;
                right: 0;
                background-color: #1f2937;
                color: #fff;
                text-align: center;
                padding: 5px 10px;
                border-radius: 6px;
                font-size: 0.875rem;
                white-space: nowrap;
                z-index: 10;
              }
              .tooltip-container:hover .tooltip {
                visibility: visible;
                opacity: 1;
              }
            `}
          </style>
          {/* Fixed Background with Image */}
          <div className="fixed inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                filter: 'blur(8px)',
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />
          </div>
          {/* Modal Content with Scroll and Grid Background */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-2 ring-blue-500/50 w-full max-w-[95%] sm:max-w-4xl md:max-w-6xl lg:max-w-8xl mx-4 my-8 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none animate-[gridPulse_5s_ease-in-out_infinite]"
            />
            {/* Sticky Header */}
            <motion.div
              className="sticky top-0 z-20 flex justify-between items-center p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-black border-b border-gray-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              >
                {translations.headerTitle}
              </motion.h2>
              <div className="relative tooltip-container">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(59,130,246,0.7)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg"
                  aria-label="Close"
                >
                  <X size={24} />
                </motion.button>
                <span className="tooltip">Close</span>
              </div>
            </motion.div>

            {/* Scrollable Content with Hidden Scrollbar */}
            <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6 md:p-8">
              {/* Search Bar */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder={translations.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm sm:text-base"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5" />
                </div>
              </motion.div>

              {/* Sections and Questions */}
              <motion.div
                className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filterSections(searchQuery).map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    variants={itemVariants}
                    className="p-4 sm:p-6 rounded-xl bg-gray-800/80 border border-gray-600"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6">{section.icon}</div>
                      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{section.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {section.questions.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="rounded-lg bg-gray-900/50 border border-gray-600 transition-all duration-300"
                          layout
                        >
                          <button
                            onClick={() => setExpandedQuestion(expandedQuestion === item.question ? null : item.question)}
                            className="w-full p-4 flex items-center justify-between text-left text-gray-300 hover:text-white transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-1.5">{item.icon}</div>
                              <span className="text-sm sm:text-base">{item.question}</span>
                            </div>
                            <ChevronRight
                              className={`w-5 h-5 transition-transform duration-300 ${expandedQuestion === item.question ? 'rotate-90' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedQuestion === item.question && (
                              <motion.div
                                layout
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="border-t border-gray-600 bg-gray-900/50 p-4 text-gray-400 text-sm sm:text-base leading-relaxed overflow-hidden"
                              >
                                {item.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <motion.div
                className="mt-8 border-t border-gray-600 pt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {translations.footerText}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;