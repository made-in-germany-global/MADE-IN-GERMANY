import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faDatabase, faUserTie, faLock, faShield, faUserCheck, faBell, faCopyright, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define props interface for DataProtectionModal
interface DataProtectionModalProps {
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
    headerTitle: "DATA PROTECTION",
    introTitle: "Safeguarding Your Privacy with Precision",
    contactInfo: "For optimal communication, please include a daytime contact number when emailing us at info@made-in-germany.global. We are also accessible via leading messenger services, ensuring efficient and cost-effective interaction. For the swiftest response, utilize our expertly designed contact form, a hallmark of German precision, allowing you to connect with us seamlessly via phone, email, messenger, or the form itself.",
    introImageAlt: "Data Protection",
    infoBoxes: [
      {
        icon: faShield,
        title: "Introduction",
        content: "MADE-IN-GERMANY is committed to the highest standards of personal data protection. We handle your personal data with the utmost confidentiality, adhering strictly to applicable data protection laws and this privacy policy.",
        expandedContent: "This privacy policy provides detailed insights into the nature, scope, and purpose of personal data collection and usage on our website. Our goal is to ensure a secure and trustworthy digital experience, reflecting the precision and reliability synonymous with German engineering."
      },
      {
        icon: faUserTie,
        title: "Responsible Party",
        content: "The entity responsible for data processing on this website, in accordance with the General Data Protection Regulation (GDPR), is MADE-IN-GERMANY, represented by Andreas Thommen. Contact: Phone: +49 (0) 40 55123-10, Email: info@made-in-germany.global, Address: Victoria House 38 Surrey Quays Road, London, England, SE16 7DX.",
        expandedContent: "For inquiries regarding data protection, our dedicated Data Protection Officer is available to assist. This officer oversees compliance with data protection regulations and is committed to addressing your concerns with professionalism and expertise."
      },
      {
        icon: faDatabase,
        title: "Data Collection",
        content: "Upon visiting our website, data is automatically transmitted to our server and temporarily stored. This includes the IP address, date and time of access, accessed files, and additional technical information essential for operation.",
        expandedContent: "These data are processed to ensure a stable connection, optimize user experience, and maintain system security and stability—standards upheld with the meticulous care characteristic of German craftsmanship."
      },
      {
        icon: faLock,
        title: "Data Disclosure",
        content: "Your personal data is disclosed only in compliance with legal requirements, such as fulfilling contractual obligations or meeting regulatory mandates.",
        expandedContent: "Data sharing with third parties occurs solely when necessary for contract fulfillment or with your explicit consent. MADE-IN-GERMANY guarantees that no data will be shared without your prior approval, ensuring trust and transparency."
      },
      {
        icon: faUserCheck,
        title: "Your Rights",
        content: "You are entitled to request information, correction, deletion, and restriction of the processing of your personal data, in line with GDPR provisions.",
        expandedContent: "You may revoke consent to data processing at any time. Additionally, you have the right to data portability and the ability to file a complaint with a supervisory authority if a data protection breach is suspected, reflecting our commitment to your control over your information."
      },
      {
        icon: faBell,
        title: "Right of Objection",
        content: "You may object to the processing of your data if it is based on legitimate interests, provided there are no overriding justifiable grounds.",
        expandedContent: "Objections can be submitted via email or letter to MADE-IN-GERMANY. Upon receipt, we will cease processing the data unless compelling legitimate reasons for continued processing can be demonstrated, ensuring your preferences are respected."
      },
      {
        icon: faCopyright,
        title: "Data Security",
        content: "MADE-IN-GERMANY employs state-of-the-art security measures to protect your data from unauthorized access, loss, or misuse.",
        expandedContent: "Our robust security framework includes advanced encryption technologies and regular system audits, embodying the precision and reliability of German engineering to safeguard your information at all times."
      },
      {
        icon: faFile,
        title: "Updates & Changes",
        content: "This privacy policy is subject to periodic updates to reflect evolving legal standards or enhancements to our services. Please review the latest version on our website.",
        expandedContent: "We reserve the right to amend this policy to comply with new regulations or service improvements. The most current version is always accessible on our website, ensuring ongoing transparency and alignment with best practices."
      }
    ],
    buttonShowLess: "Show Less",
    buttonLearnMore: "Learn More",
    buttonClose: "Close",
    footerText: "Committed to Your Privacy with German Precision"
  }
};

const DataProtectionModal: React.FC<DataProtectionModalProps> = ({ isOpen, onClose, language = 'en' }) => {
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
                className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
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
             
             export default DataProtectionModal;