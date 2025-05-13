import React, { useState } from "react";
import CategoryGrid from './components/CategoryGrid';
import DomainSection from './components/DomainSection';
import { HelmetProvider } from "react-helmet-async";
import VisionAndValues from './components/VisionAndValues';
import GoUpButton from './components/GoUpButton';
// Define props interface for Values
interface ValuesProps {
  language?: string; // Optional language prop with default 'en'
}

const Values: React.FC<ValuesProps> = ({ language = 'en' }) => {
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
        <VisionAndValues  />
          <CategoryGrid language={selectedLanguage} />
          <DomainSection language={selectedLanguage} />
         <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default Values;