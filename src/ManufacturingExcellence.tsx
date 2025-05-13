import React, { useState } from "react";
import CategoryGrid from './components/CategoryGrid';
import DomainSection from './components/DomainSection';
import { HelmetProvider } from "react-helmet-async";
import Manufacturingexcellence from './components/ManufacturingExcellence';
import GoUpButton from './components/GoUpButton';
// Define props interface for Values
interface ManufacturingExcellenceProps {
  language?: string; // Optional language prop with default 'en'
}

const ManufacturingExcellence: React.FC<ManufacturingExcellenceProps> = ({ language = 'en' }) => {
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
        <Manufacturingexcellence  />
          <CategoryGrid language={selectedLanguage} />
          <DomainSection language={selectedLanguage} />
         <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default ManufacturingExcellence;