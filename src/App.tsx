
import React, { useState, useEffect, Component, ErrorInfo } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Startpage from './components/StartPage';
import Footer from './components/Footer';
import Header from './components/Header';
import DomainSection from './components/DomainSection';
import MadeInGermanyMembership from './MadeInGermanyMembership';
import MadeInGermanyAboutUs from './MadeInGermanyAboutUs';
import Buyers from './Buyers';
import Pricing from './Pricing';
import MadeInGermanyManufacturers from './MadeInGermanyForManufacturers';
import VideoSection from './components/VideoSection';
import WelcomeSection from './components/WelcomeSection';
import MadeInGermanyCoreValues from './components/MadeInGermanyCoreValues';
import CategoryGrid from './components/CategoryGrid';
import GermanBrandsSlider from './components/GermanBrandsSlider';
import Vision from './components/Vision';
import ContactForm from './ContactForm';
import RecruitingForm from './RecruitingForm';
import Careers from './careers';
import ComingSoon from './ComingSoon';
import MadeInGermanyBread from './MadeInGermanyBread';
import MadeInGermanyHistory from './MadeInGermanyHistory';
import PressContact from './PressContact';
import LegalAndProtection from './LegalAndProtection';
import StrategicInvestments from './StrategicInvestments';
import CookieBanner from './components/CookieBanner';
import GoUpButton from './components/GoUpButton';
import SupportButton from './components/SupportButton';
import MenuSection from './components/MenuSection';
import OneHundredPercentMadeInGermany from './OneHundredPercentMadeInGermany';
import MadeInGermanyPlatform from './MadeInGermanyForBuyers';
import AudioControl from './AudioControl';
import VisionAndValues from './VisionAndValues';
import TeasersSection from './TeasersSection';
import PressAndMedia from './PressAndMedia';
import Teams from './Teams';
import BecomePartner from './BecomePartner';
import ProductCategories from './ProductCategories';
import ManufacturingExcellence from './ManufacturingExcellence';
import ImBuyer from './ImBuyer';
import BusinessEnquiry from './BusinessEnquiry';
import SampleOrders from './SampleOrders';
import ContainerOption from './ContainerOption';
import ShippingProcess from './ShippingProcess';
import WarehousingInGermany from './WarehousingInGermany';
import CleanWaterInitiatives from './CleanWaterInitiatives';
import EnvironmentalProjects from './EnvironmentalProjects';
import FutureGeneration from './FutureGeneration';
import OurImpactVision from './OurImpactVision';
import ForChambers from './ForChambers';
import EducationalResearchSection from './EducationalAndResearch';
import PolicyAndTrade from './PolicyTrade';
import Cooperation from './Cooperation';
import AboutUs from './AboutUs';
import ClaritySection from './ClaritySection';
import TalentAcquisitionPage from './components/TalentAcquisition';
import FranchiseSystemPage from './FranchiseSystemPage';

interface HeaderProps {
  onLanguageChange: (languageCode: string) => void;
}

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  language: string;
  canonical?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-lg mb-4">{this.state.error?.message || 'An unexpected error occurred.'}</p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, language, canonical }) => {
  const hreflangLinks = [
    { code: 'en', href: window.location.origin + window.location.pathname },
    { code: 'de', href: window.location.origin + window.location.pathname },
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Made in Germany" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {hreflangLinks.map((link) => (
        <link
          key={link.code}
          rel="alternate"
          hrefLang={link.code}
          href={link.href}
        />
      ))}
      <html lang={language} />
    </Helmet>
  );
};

const PreloaderText: React.FC<{ year: string }> = ({ year }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <motion.div 
        className="space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wider">
          MADE IN
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          GERMANY
        </div>
      </motion.div>
      
      <LoadingBar />
      
      <motion.div 
        className="flex items-center space-x-2 text-sm md:text-base font-medium tracking-widest whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <span className="text-white">THE FUTURE IS MADE IN GERMANY © </span>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.7)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center"
        >
          <span className="text-black">FOR</span>
          <span className="text-[#DD0000] mx-1">THE</span>
          <span className="text-[#FFCE00]">WORLD</span>
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="text-sm md:text-base text-gray-400 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        OVER 100 YEARS OF PREMIUM QUALITY
      </motion.div>
    </div>
  );
};

const LoadingBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="w-full max-w-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden ring-1 ring-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-gray-400 text-sm">QUALITÄT LADEN</span>
        <span className="text-blue-400 text-sm font-medium">{progress}%</span>
      </div>
    </motion.div>
  );
};

// New NotFound component for handling invalid routes
const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">The page you are looking for does not exist.</p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Return to Home
      </a>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [year] = useState(new Date().getFullYear().toString());
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const location = useLocation();

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  useEffect(() => {
    console.log('App is rendering, loading state:', loading);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const getSEOConfig = () => {
    const baseUrl = window.location.origin;
    switch (location.pathname) {
      case '/':
        return {
          title: 'Made in Germany - Premium German Products',
          description: 'Discover the diversity and quality of premium German products with Made in Germany.',
          keywords: 'Made in Germany, German products, premium quality, German craftsmanship',
          canonical: `${baseUrl}/`,
        };
      case '/membership':
        return {
          title: 'Membership - Made in Germany',
          description: 'Join the Made in Germany membership for exclusive access to premium German products.',
          keywords: 'Made in Germany membership, premium products, German quality',
          canonical: `${baseUrl}/membership`,
        };
      case '/madeingermanyaboutus':
        return {
          title: 'About Us - History of Made in Germany',
          description: 'Learn about the vision, values, and history behind Made in Germany.',
          keywords: 'Made in Germany about us, German history, premium quality',
          canonical: `${baseUrl}/madeingermanyaboutus`,
        };
      case '/buyers':
        return {
          title: 'For Buyers - Premium German Products',
          description: 'Global buyers, discover exclusively high-quality products from Germany.',
          keywords: 'Made in Germany buyers, German products, premium quality',
          canonical: `${baseUrl}/buyers`,
        };
      case '/pricing':
        return {
          title: 'Pricing - Made in Germany',
          description: 'Explore pricing plans for accessing premium German products and services.',
          keywords: 'Made in Germany pricing, premium products, German quality',
          canonical: `${baseUrl}/pricing`,
        };
      case '/madeingermanyformanufacturers':
        return {
          title: 'German Excellence - For Manufacturers',
          description: 'Join German Excellence for manufacturers of premium products.',
          keywords: 'Made in Germany manufacturers, German excellence, premium quality',
          canonical: `${baseUrl}/madeingermanyformanufacturers`,
        };
      case '/contactform':
        return {
          title: 'Contact Us - Made in Germany',
          description: 'Get in touch with Made in Germany for inquiries and support.',
          keywords: 'Made in Germany contact, premium products, German quality',
          canonical: `${baseUrl}/contactform`,
        };
      case '/recruitingform':
        return {
          title: 'Recruiting - Made in Germany',
          description: 'Join our team at Made in Germany. Submit your application today.',
          keywords: 'Made in Germany recruiting, careers, German quality',
          canonical: `${baseUrl}/recruitingform`,
        };
      case '/careers':
        return {
          title: 'Careers - Made in Germany',
          description: 'Explore career opportunities with Made in Germany.',
          keywords: 'Made in Germany careers, jobs, German quality',
          canonical: `${baseUrl}/careers`,
        };
      case '/comingsoon':
        return {
          title: 'Coming Soon - Made in Germany',
          description: 'Exciting new features and products are coming soon to Made in Germany.',
          keywords: 'Made in Germany coming soon, premium products, German quality',
          canonical: `${baseUrl}/comingsoon`,
        };
      case '/madeingermanyhistory':
        return {
          title: 'History - Made in Germany',
          description: 'Discover the rich history of Made in Germany and its commitment to quality.',
          keywords: 'Made in Germany history, German craftsmanship, premium quality',
          canonical: `${baseUrl}/madeingermanyhistory`,
        };
      case '/presscontact':
        return {
          title: 'Press Contact - Made in Germany',
          description: 'Contact our press team for media inquiries and information.',
          keywords: 'Made in Germany press, media contact, German quality',
          canonical: `${baseUrl}/presscontact`,
        };
      case '/legalandprotection':
        return {
          title: 'Legal & Protection - Made in Germany',
          description: 'Learn about our legal policies and data protection practices.',
          keywords: 'Made in Germany legal, data protection, German quality',
          canonical: `${baseUrl}/legalandprotection`,
        };
      case '/strategicinvestments':
        return {
          title: 'Strategic Investments - Made in Germany',
          description: 'Explore strategic investment opportunities with Made in Germany.',
          keywords: 'Made in Germany investments, strategic partnerships, German quality',
          canonical: `${baseUrl}/strategicinvestments`,
        };
      case '/madeingermanybread':
        return {
          title: 'Bread & Soul - Made in Germany',
          description: 'Explore the soul of German craftsmanship with Bread & Soul.',
          keywords: 'Made in Germany bread, German craftsmanship, premium quality',
          canonical: `${baseUrl}/madeingermanybread`,
        };
      case '/onehundredpercentmadeingermany':
        return {
          title: '100% Made in Germany - Quality and Innovation',
          description: 'Experience the highest quality and innovation with 100% Made in Germany products.',
          keywords: '100% Made in Germany, premium quality, German innovation',
          canonical: `${baseUrl}/onehundredpercentmadeingermany`,
        };
      case '/madeingermanyforbuyers':
        return {
          title: 'Made in Germany Platform for Buyers',
          description: 'Discover the Made in Germany platform for global buyers seeking premium products.',
          keywords: 'Made in Germany platform, buyers, premium German products',
          canonical: `${baseUrl}/madeingermanyforbuyers`,
        };
      default:
        return {
          title: 'Made in Germany',
          description: 'Made in Germany offers premium German products with unmatched quality.',
          keywords: 'Made in Germany, German products, premium quality',
          canonical: `${baseUrl}${location.pathname}`,
        };
    }
  };

  const seoConfig = getSEOConfig();

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen bg-white font-inter">
          <SEO
            title={seoConfig.title}
            description={seoConfig.description}
            keywords={seoConfig.keywords}
            language={selectedLanguage}
            canonical={seoConfig.canonical}
          />
          {loading ? (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
              <motion.div 
                className="relative w-full max-w-xl mx-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl ring-1 ring-white/20 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"
                  ></div>
                  
                  <div className="relative z-10">
                    <PreloaderText year={year} />
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <>
              <CookieBanner />
              <AudioControl />
              <SupportButton />
              <GoUpButton />
              <Header onLanguageChange={handleLanguageChange} />
              <MenuSection />
              <div className="flex-grow">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Startpage />
                        <WelcomeSection />
                        <VideoSection language={selectedLanguage} />
                        <MadeInGermanyCoreValues />
                        <Vision />
                        <DomainSection language={selectedLanguage} />
                        <CategoryGrid />
                        <TeasersSection />
                        <GermanBrandsSlider />
                      </>
                    }
                  />
                  <Route
                    path="/membership"
                    element={<MadeInGermanyMembership language={selectedLanguage} />}
                  />
                  <Route
                    path="/madeingermanyaboutus"
                    element={<MadeInGermanyAboutUs language={selectedLanguage} />}
                  />
                  <Route path="/buyers" element={<Buyers language={selectedLanguage} />} />
                  <Route path="/pricing" element={<Pricing language={selectedLanguage} />} />
                  <Route
                    path="/madeingermanyformanufacturers"
                    element={<MadeInGermanyManufacturers language={selectedLanguage} />}
                  />
                  <Route
                    path="/contactform"
                    element={<ContactForm language={selectedLanguage} />}
                  />
                  <Route
                    path="/recruitingform"
                    element={<RecruitingForm language={selectedLanguage} />}
                  />
                  <Route path="/careers" element={<Careers language={selectedLanguage} />} />
                  <Route
                    path="/comingsoon"
                    element={<ComingSoon language={selectedLanguage} />}
                  />
                  <Route
                    path="/madeingermanyhistory"
                    element={<MadeInGermanyHistory language={selectedLanguage} />}
                  />
                  <Route
                    path="/presscontact"
                    element={<PressContact language={selectedLanguage} />}
                  />
                  <Route
                    path="/legalandprotection"
                    element={<LegalAndProtection language={selectedLanguage} />}
                  />
                  <Route
                    path="/strategicinvestments"
                    element={<StrategicInvestments language={selectedLanguage} />}
                  />
                  <Route
                    path="/madeingermanybread"
                    element={<MadeInGermanyBread language={selectedLanguage} />}
                  />
                  <Route
                    path="/onehundredpercentmadeingermany"
                    element={<OneHundredPercentMadeInGermany language={selectedLanguage} />}
                  />
                  <Route
                    path="/madeingermanyforbuyers"
                    element={<MadeInGermanyPlatform language={selectedLanguage} />}
                  />
                  <Route
                    path="/visionandvalues"
                    element={<VisionAndValues language={selectedLanguage} />}
                  />
                  <Route
                    path="/teams"
                    element={<Teams language={selectedLanguage} />}
                  />
                  <Route
                    path="/pressandmedia"
                    element={<PressAndMedia language={selectedLanguage} />}
                  />
                  <Route
                    path="/becomepartner"
                    element={<BecomePartner />}
                  />
                  <Route
                    path="/productcategories"
                    element={<ProductCategories />}
                  />
                  <Route
                    path="/manufacturingexcellence"
                    element={<ManufacturingExcellence />}
                  />
                  <Route
                    path="/imbuyer"
                    element={<ImBuyer />}
                  />
                  <Route
                    path="/businessenquiry"
                    element={<BusinessEnquiry />}
                  />
                  <Route
                    path="/sampleorders"
                    element={<SampleOrders />}
                  />
                  <Route
                    path="/containeroption"
                    element={<ContainerOption />}
                  />
                  <Route
                    path="/shippingprocess"
                    element={<ShippingProcess />}
                  />
                  <Route
                    path="/warehousingingermany"
                    element={<WarehousingInGermany />}
                  />
                  <Route
                    path="/cleanwaterinitiatives"
                    element={<CleanWaterInitiatives />}
                  />
                  <Route
                    path="/environmentalprojects"
                    element={<EnvironmentalProjects />}
                  />
                  <Route
                    path="/futuregeneration"
                    element={<FutureGeneration />}
                  />
                  <Route
                    path="/ourimpactvision"
                    element={<OurImpactVision />}
                  />
                  <Route
                    path="/forchambers"
                    element={<ForChambers />}
                  />
                  <Route
                    path="/educational"
                    element={<EducationalResearchSection />}
                  />
                  <Route
                    path="/policytrade"
                    element={<PolicyAndTrade />}
                  />
                  <Route
                    path="/cooperation"
                    element={<Cooperation />}
                  />
                  <Route
                    path="/aboutus"
                    element={<AboutUs />}
                  />
                  <Route
                    path="/clarity"
                    element={<ClaritySection />}
                  />
                  <Route
                    path="/talentacquisition"
                    element={<TalentAcquisitionPage />}
                  />
                  <Route
                    path="/franchise"
                    element={<FranchiseSystemPage />}
                  />
                  {/* Catch-all route for 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer onLanguageChange={handleLanguageChange} />
            </>
          )}
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

const tailwindConfig = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out',
        gradient: 'gradient 8s ease infinite',
      },
      colors: {
        'german-black': '#000000',
        'german-red': '#DE0000',
        'german-gold': '#FFCC00',
      },
    },
  },
};