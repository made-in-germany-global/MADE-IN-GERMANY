import React, { useState } from "react";
import CategoryGrid from './components/CategoryGrid';
import DomainSection from './components/DomainSection';
import { HelmetProvider } from "react-helmet-async";
import Imbuyer from './components/ImBuyer';
import GoUpButton from './components/GoUpButton';
// Define props interface for ImBuyer
interface ImBuyerProps {
  language?: string; // Optional language prop with default 'en'
}

const ImBuyer: React.FC<ImBuyerProps> = ({ language = 'en' }) => {
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
        <Imbuyer  />
          <CategoryGrid language={selectedLanguage} />
          <DomainSection language={selectedLanguage} />
         <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default ImBuyer;