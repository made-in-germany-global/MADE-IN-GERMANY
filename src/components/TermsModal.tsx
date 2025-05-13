import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faFileContract, faBriefcase, faHandshake, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define props interface for TermsModal
interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: string;
}

// Define the info box interface
interface InfoBox {
  icon: any;
  title: string;
  content: string;
  expandedContent: string;
}

// Define translations for TermsModal content (English only)
const TRANSLATIONS: Record<string, {
  headerTitle: string;
  introTitle: string;
  contactInfo: string;
  introImageAlt: string;
  infoBoxes: InfoBox[];
  buttonShowLess: string;
  buttonLearnMore: string;
  buttonClose: string;
  footerText: string;
}> = {
  en: {
    headerTitle: "TERMS AND CONDITIONS",
    introTitle: "Our Commitment to Clear and Fair Terms",
    contactInfo: "For optimal communication, please include a daytime contact number when emailing us at info@made-in-germany.global. We are also accessible via leading messenger services, ensuring efficient and cost-effective interaction. For the swiftest response, utilize our expertly designed contact form, a hallmark of German precision, allowing you to connect with us seamlessly via phone, email, messenger, or the form itself.",
    introImageAlt: "Terms and Conditions",
    infoBoxes: [
      {
        icon: faFileContract,
        title: "Scope of Application",
        content: "These General Terms and Conditions (hereinafter 'T&C') govern all contracts concluded between MADE-IN-GERMANY, located at Victoria House 38 Surrey Quays Road, London, England, SE16 7DX, and the customer via the website https://made-in-germany.world.",
        expandedContent: "These terms establish a clear framework for your engagement with our services, delineating the rights and obligations of both parties with the precision and reliability characteristic of German standards."
      },
      {
        icon: faBriefcase,
        title: "Subject Matter",
        content: "MADE-IN-GERMANY provides professional services in the field of remote call centers, with detailed offerings outlined on our website.",
        expandedContent: "Our service portfolio is meticulously curated to meet the highest standards, ensuring clarity and transparency in every offering, as befits the reputation of German engineering."
      },
      {
        icon: faHandshake,
        title: "Contract Conclusion",
        content: "The presentation of services on our website constitutes an invitation to submit an order, not a legally binding offer.",
        expandedContent: "The contract formation process is initiated upon submission of your order and finalized with our acceptance, ensuring a transparent and legally sound agreement that reflects our commitment to precision."
      },
      {
        icon: faMoneyBillWave,
        title: "Prices and Payment",
        content: "Service prices are clearly stated on the website and include statutory value-added tax, ensuring full transparency.",
        expandedContent: "We uphold a rigorous pricing policy, inclusive of all applicable taxes, and offer multiple secure payment methods to facilitate seamless transactions, aligning with the efficiency of German standards."
      }
    ],
    buttonShowLess: "Show Less",
    buttonLearnMore: "Learn More",
    buttonClose: "Close",
    footerText: "Committed to Excellence with German Precision"
  }
};

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, language = 'en' }) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const navigate = useNavigate();

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleContactFormClick = () => {
    onClose();
    navigate('/contactform');
    window.scrollTo(0, 0);
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

  const renderContactInfo = () => {
    const text = translations.contactInfo;
    const contactFormText = 'contact form';
    const parts = text.split(contactFormText);

    return (
      <>
        {parts[0]}
        <span
          onClick={handleContactFormClick}
          className="text-blue-400 cursor-pointer hover:underline"
        >
          {contactFormText}
        </span>
        {parts[1]}
      </>
    );
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
                .mobile-image-container {
                  height: auto !important;
                  max-height: 50vh;
                }
                .mobile-image {
                  height: auto;
                  max-height: 50vh;
                  object-fit: contain;
                }
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
                <span className="tooltip">{translations.buttonClose}</span>
              </div>
            </motion.div>

            {/* Scrollable Content with Hidden Scrollbar */}
            <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6 md:p-8">
              {/* Hero Section with Image */}
              <motion.div
                className="text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 sm:mb-6 md:mb-8"
                >
                  {translations.introTitle}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-left text-sm sm:text-base text-gray-300 leading-relaxed mb-6"
                >
                  {renderContactInfo()}
                </motion.p>

                <motion.div
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-6 overflow-hidden mobile-image-container"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src="/imprint-made-in-germany-english.webp"
                    alt={translations.introImageAlt}
                    className="w-full h-full object-contain sm:object-cover md:object-contain lg:object-contain object-center mobile-image rounded-lg"
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      opacity: imageLoaded ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Info Boxes */}
              <motion.div
                className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {translations.infoBoxes.map((box, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-4 sm:p-6 rounded-xl bg-gray-800/80 border border-gray-600 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FontAwesomeIcon
                        icon={box.icon}
                        className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                      />
                      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{box.title}</h3>
                    </div>
                    <div className="text-gray-300 space-y-3">
                      <motion.div
                        initial={false}
                        animate={{ height: 'auto' }}
                        className="text-sm sm:text-base leading-relaxed"
                      >
                        {box.content.split('\n').map((line, i) => (
                          <p key={i} className="mb-1">{line.trim()}</p>
                        ))}
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleSection(index)}
                        className="mt-4 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all duration-200 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      >
                        <span>{expandedSection === index ? translations.buttonShowLess : translations.buttonLearnMore}</span>
                      </motion.button>
                      <AnimatePresence>
                        {expandedSection === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pt-3 text-sm sm:text-base text-gray-400 leading-relaxed"
                          >
                            <p>{box.expandedContent}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
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

export default TermsModal;