import React, { useState } from "react";
import CategoryGrid from './components/CategoryGrid';
import DomainSection from './components/DomainSection';
import { HelmetProvider } from "react-helmet-async";
import Businessenquiry from './components/BusinessEnquiry';
import GoUpButton from './components/GoUpButton';
// Define props interface for BusinessEnquiry
interface BusinessEnquiryProps {
  language?: string; // Optional language prop with default 'en'
}

const BusinessEnquiry: React.FC<BusinessEnquiryProps> = ({ language = 'en' }) => {
  // Add state for language management
  const [selectedLanguage, setSelectedLanguage] = useState<string>(language);

  // Language change handler
  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider> 
        <Businessenquiry  />
          <CategoryGrid language={selectedLanguage} />
          <DomainSection language={selectedLanguage} />
         <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default BusinessEnquiry;