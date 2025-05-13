import React, { useState } from "react";
import HeroSectionHistory from './components/HeroSectionHistory';
import ImageSlider from './components/ImageSlider';
import MadeInGermanyExcellenceSection from './components/MadeInGermanExcellenceSection';
import Pricing from './components/Pricing';
import AdviserSection from './components/AdviserSection';
import { HelmetProvider } from "react-helmet-async";
import Header from './components/Header';
import HeroSectionCertificate from './components/HeroSectionCertificate';
import GoUpButton from './components/GoUpButton';
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
        <HeroSectionCertificate />
        <Pricing  />
        <ImageSlider language={language} />
        <AdviserSection language={language} />
        <MadeInGermanyExcellenceSection language={language} />
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default StartPage;