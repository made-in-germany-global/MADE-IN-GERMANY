import React, { useState } from "react";
import CategoryGrid from './components/CategoryGrid';
import DomainSection from './components/DomainSection';
import { HelmetProvider } from "react-helmet-async";
import TalentAcquisition from './components/TalentAcquisition';
import GoUpButton from './components/GoUpButton';
// Define props interface for PressAndMedia
interface PressAndMediaProps {
  language?: string; // Optional language prop with default 'en'
}

const TalentAcquisitionPage: React.FC<PressAndMediaProps> = ({ language = 'en' }) => {
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
        <TalentAcquisition  />
          <CategoryGrid language={selectedLanguage} />
          <DomainSection language={selectedLanguage} />
         <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default TalentAcquisitionPage;