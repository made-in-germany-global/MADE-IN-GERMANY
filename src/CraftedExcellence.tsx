import React from "react";
import HeroSectionCraftedExcellence from './components/HeroSectionCraftedExcellence';
import FeatureSections from './components/FeatureSections';
import InfoSection from './components/InfoSection';
import ImageSlider from './components/ImageSlider';
import MadeInGermanyExcellenceSection from './components/MadeInGermanyExcellenceSection';
import AdviserSection from './components/AdviserSection';
import { HelmetProvider } from "react-helmet-async";
// Define props interface for Crafted Excellence
interface CraftedExcellenceProps {
  language?: string; // Optional language prop with default 'en'
}

const CraftedExcellence: React.FC<CraftedExcellenceProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <HeroSectionCraftedExcellence language={language} />
        <FeatureSections language={language} />
        <InfoSection language={language} />
        <ImageSlider language={language} />
        <AdviserSection language={language} />
        <MadeInGermanyExcellenceSection language={language} />
  </HelmetProvider>
      </main>
    </div>
  );
};

export default CraftedExcellence;