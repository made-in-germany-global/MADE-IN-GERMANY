import React, { useState } from "react";
import CategoryGrid from './components/CategoryGrid';
import DomainSection from './components/DomainSection';
import { HelmetProvider } from "react-helmet-async";
import TeaserSection from './components/TeaserSection';
import Header from './components/Header';
import GoUpButton from './components/GoUpButton';
import MenuSection from './components/MenuSection';
// Define props interface for StartPage
interface StartPageProps {
  language?: string; // Optional language prop with default 'en'
}

const StartPage: React.FC<StartPageProps> = ({ language = 'en' }) => {
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
        <TeaserSection  />
          <CategoryGrid language={selectedLanguage} />
          <DomainSection language={selectedLanguage} />
         <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default StartPage;