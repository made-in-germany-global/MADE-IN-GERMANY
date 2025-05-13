import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

// Define domain interface
interface Domain {
  url: string;
  flag: string;
  country: string;
}

// Define props interface
interface DomainsModalProps {
  isOpen: boolean;
  onClose: () => void;
  regionaleDomains: Domain[];
  subdomainsEuropa: Domain[];
  subdomainsAmerika: Domain[];
  subdomainsAsien: Domain[];
  subdomainsNahost: Domain[];
  subdomainsAfrika: Domain[];
}

// Define translations for DomainsModal content (English only)
const TRANSLATIONS = {
  en: {
    modalTitle: "Global Domain Network",
    heroTitle: "Explore Our Global Domains",
    closeModal: "Close",
    domainSections: [
      {
        title: "Regional & Market-Relevant Domains",
        description: "Strategically selected domains representing key global markets."
      },
      {
        title: "Europe",
        description: "Localized subdomains for major European countries."
      },
      {
        title: "Americas",
        description: "Subdomains connecting North, Central, and South American markets."
      },
      {
        title: "Asia",
        description: "Subdomains for key Asian markets, ensuring seamless access."
      },
      {
        title: "Middle East",
        description: "Subdomains tailored for the Middle East region."
      },
      {
        title: "Africa",
        description: "Subdomains supporting growing African markets."
      }
    ]
  }
};

// Define flag mappings
const DOMAIN_FLAG: Record<string, string> = {
  "made-in-germany.world": '/flag/world.gif',
  "made-in-germany-first.com": '/flag/germany.gif',
  "made-in-germany.asia": '/flag/singapore.gif',
  "made-in-germany.africa": '/flag/south-africa.gif',
  "made-in-germany.lat": '/flag/spain.gif',
  "made-in-germany-arab.com": '/flag/arab-league.gif',
  "made-in-germany-arabia.com": '/flag/arab-league.gif',
  "made-in-germany.my": '/flag/malaysia.gif',
  "made-in-germany.com.in": '/flag/india.gif',
  "madeingermany.in": '/flag/india.gif',
  "made-in-germany.china": '/flag/china.gif',
  "made-in-germany.global/de": '/flag/germany.gif',
  "made-in-germany.global/fr": '/flag/french.gif',
  "made-in-germany.global/es": '/flag/spain.gif',
  "made-in-germany.global/it": '/flag/italy.gif',
  "made-in-germany.global/nl": '/flag/netherlands.gif',
  "made-in-germany.global/pl": '/flag/poland.gif',
  "made-in-germany.global/se": '/flag/sweden.gif',
  "made-in-germany.global/ch": '/flag/switzerland.gif',
  "made-in-germany.global/at": '/flag/austria.gif',
  "made-in-germany.global/uk": '/flag/uk.gif',
  "made-in-germany.global/fi": '/flag/finland.gif',
  "made-in-germany.global/ir": '/flag/ireland.gif',
  "made-in-germany.global/us": '/flag/united-states.gif',
  "made-in-germany.global/ca": '/flag/canada.gif',
  "made-in-germany.global/mx": '/flag/mexico.gif',
  "made-in-germany.global/br": '/flag/brazil.gif',
  "made-in-germany.global/ar": '/flag/argentina.gif',
  "made-in-germany.global/co": '/flag/colombia.gif',
  "made-in-germany.global/cn": '/flag/china.gif',
  "made-in-germany.global/in": '/flag/india.gif',
  "made-in-germany.global/jp": '/flag/japan.gif',
  "made-in-germany.global/kr": '/flag/south-korea.gif',
  "made-in-germany.global/id": '/flag/indonesia.gif',
  "made-in-germany.global/th": '/flag/thailand.gif',
  "made-in-germany.global/vn": '/flag/vietnam.gif',
  "made-in-germany.global/ph": '/flag/philippines.gif',
  "made-in-germany.global/sg": '/flag/singapore.gif',
  "made-in-germany.global/ae": '/flag/arab.gif',
  "made-in-germany.global/sa": '/flag/saudi.gif',
  "made-in-germany.global/eg": '/flag/egypt.gif',
  "made-in-germany.global/qa": '/flag/qatar.gif',
  "made-in-germany.global/kw": '/flag/kuwait.gif',
  "made-in-germany.global/om": '/flag/oman.gif',
  "made-in-germany.global/za": '/flag/south-africa.gif',
  "made-in-germany.global/ng": '/flag/niger.gif',
  "made-in-germany.global/ma": '/flag/morocco.gif',
  "made-in-germany.global/ke": '/flag/kenya.gif',
  "made-in-germany.global/gh": '/flag/ghana.gif',
  "made-in-germany.global/ci": '/flag/chile.gif',
};

// Define country mappings
const DOMAIN_COUNTRIES: Record<string, string> = {
  "made-in-germany.world": "Global",
  "made-in-germany-first.com": "Germany",
  "made-in-germany.asia": "Asia (Singapore)",
  "made-in-germany.africa": "Africa (South Africa)",
  "made-in-germany.lat": "Latin America (Spain)",
  "made-in-germany-arab.com": "Arab League",
  "made-in-germany-arabia.com": "Arab League",
  "made-in-germany.my": "Malaysia",
  "made-in-germany.com.in": "India",
  "madeingermany.in": "India",
  "made-in-germany.china": "China",
  "made-in-germany.global/de": "Germany",
  "made-in-germany.global/fr": "France",
  "made-in-germany.global/es": "Spain",
  "made-in-germany.global/it": "Italy",
  "made-in-germany.global/nl": "Netherlands",
  "made-in-germany.global/pl": "Poland",
  "made-in-germany.global/se": "Sweden",
  "made-in-germany.global/ch": "Switzerland",
  "made-in-germany.global/at": "Austria",
  "made-in-germany.global/uk": "United Kingdom",
  "made-in-germany.global/fi": "Finland",
  "made-in-germany.global/ir": "Ireland",
  "made-in-germany.global/us": "United States",
  "made-in-germany.global/ca": "Canada",
  "made-in-germany.global/mx": "Mexico",
  "made-in-germany.global/br": "Brazil",
  "made-in-germany.global/ar": "Argentina",
  "made-in-germany.global/co": "Colombia",
  "made-in-germany.global/cn": "China",
  "made-in-germany.global/in": "India",
  "made-in-germany.global/jp": "Japan",
  "made-in-germany.global/kr": "South Korea",
  "made-in-germany.global/id": "Indonesia",
  "made-in-germany.global/th": "Thailand",
  "made-in-germany.global/vn": "Vietnam",
  "made-in-germany.global/ph": "Philippines",
  "made-in-germany.global/sg": "Singapore",
  "made-in-germany.global/ae": "United Arab Emirates",
  "made-in-germany.global/sa": "Saudi Arabia",
  "made-in-germany.global/eg": "Egypt",
  "made-in-germany.global/qa": "Qatar",
  "made-in-germany.global/kw": "Kuwait",
  "made-in-germany.global/om": "Oman",
  "made-in-germany.global/za": "South Africa",
  "made-in-germany.global/ng": "Nigeria",
  "made-in-germany.global/ma": "Morocco",
  "made-in-germany.global/ke": "Kenya",
  "made-in-germany.global/gh": "Ghana",
  "made-in-germany.global/ci": "Ivory Coast",
};

const DomainsModal: React.FC<DomainsModalProps> = ({
  isOpen,
  onClose,
  regionaleDomains,
  subdomainsEuropa,
  subdomainsAmerika,
  subdomainsAsien,
  subdomainsNahost,
  subdomainsAfrika,
}) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0); // Set first section expanded by default
  const translations = TRANSLATIONS['en'];

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
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

  const domainGroups = [
    { title: translations.domainSections[0].title, domains: regionaleDomains || [], description: translations.domainSections[0].description },
    { title: translations.domainSections[1].title, domains: subdomainsEuropa || [], description: translations.domainSections[1].description },
    { title: translations.domainSections[2].title, domains: subdomainsAmerika || [], description: translations.domainSections[2].description },
    { title: translations.domainSections[3].title, domains: subdomainsAsien || [], description: translations.domainSections[3].description },
    { title: translations.domainSections[4].title, domains: subdomainsNahost || [], description: translations.domainSections[4].description },
    { title: translations.domainSections[5].title, domains: subdomainsAfrika || [], description: translations.domainSections[5].description }
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden font-inter"
      onClick={handleBackdropClick}
    >
      <style jsx>{`
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
        .tooltip-section {
          top: auto;
          bottom: 100%;
          right: 50%;
          transform: translateX(50%);
        }
        .tooltip-container:hover .tooltip {
          visibility: visible;
          opacity: 1;
        }
        .domain-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 100%;
        }
      `}</style>
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
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Modal Content with Scroll and Grid Background */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl ring-2 ring-blue-500/50 w-full max-w-[95%] sm:max-w-4xl md:max-w-6xl mx-4 my-8 overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
          style={{ animation: 'gridPulse 5s ease-in-out infinite' }}
        />
        {/* Sticky Header */}
        <motion.div
          className="sticky top-0 z-20 flex flex-col gap-2 p-4 sm:p-6 bg-gradient-to-br from-gray-900 to-black border-b border-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between items-center">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              {translations.modalTitle}
            </motion.h2>
            <div className="relative tooltip-container">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-lg"
                aria-label="Close"
              >
                <X size={24} />
              </motion.button>
              <span className="tooltip">{translations.closeModal}</span>
            </div>
          </div>
          <motion.h3
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {translations.heroTitle}
          </motion.h3>
        </motion.div>

        {/* Scrollable Content with Full Background Overlay */}
        <div
          className="relative z-10 flex-1 overflow-y-auto scrollbar-hide"
        >
          {/* Background container with dark overlay */}
          <div className="absolute inset-0 z-0">
            <div 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=60')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
              }}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          
          {/* Content Container */}
          <div className="relative z-20 p-4 sm:p-6 md:p-8 min-h-full">
            {/* Domain Sections */}
            <div className="space-y-4">
              {domainGroups.map((group, index) => (
                <div
                  key={index}
                  className="relative tooltip-container"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-800/80 border border-gray-600 hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6 text-blue-400" />
                      <span className="text-base font-medium text-white">{group.title}</span>
                    </div>
                    {expandedSection === index ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </button>
                  <span className="tooltip tooltip-section">{`View ${group.title}`}</span>
                  
                  {/* Expanded Content */}
                  {expandedSection === index && (
                    <div className="pt-4 overflow-visible">
                      <p className="text-sm text-gray-300 mb-4">{group.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-[100px]">
                        {group.domains.length > 0 ? (
                          group.domains.map((domain, idx) => (
                            <div
                              key={idx}
                              className="relative tooltip-container"
                            >
                              <a
                                href={`https://${domain.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/80 border border-gray-600 hover:bg-gray-700 transition-all duration-300"
                              >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-gray-700">
                                  <img
                                    src={DOMAIN_FLAG[domain.url] || '/flag/default.gif'}
                                    alt={`${DOMAIN_COUNTRIES[domain.url] || domain.country} flag`}
                                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-200"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = '/flag/default.gif';
                                    }}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-base font-medium text-white block domain-text">{domain.url}</span>
                                  <span className="text-sm text-gray-300">{DOMAIN_COUNTRIES[domain.url] || domain.country}</span>
                                </div>
                              </a>
                              <span className="tooltip tooltip-section">{`Visit ${domain.url}`}</span>
                            </div>
                          ))
                        ) : (
                          <div className="col-span-full text-center p-6 text-gray-400">
                            No domains available in this section
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Add extra padding at the bottom for better scrolling experience */}
            <div className="h-16"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DomainsModal;