import React from "react";
import HeroSectionVision from './components/HeroSectionVision';
import WorldwideCrafts from './components/WorldwideCraft';
import InfoSection from './components/InfoSection';
import ImageSlider from './components/ImageSlider';
import MadeInGermanyExcellenceSection from './components/MadeInGermanyExcellenceSection';
import AdviserSection from './components/AdviserSection';
import { HelmetProvider } from "react-helmet-async";
// Define props interface for worldwidecraft
interface worldwidecraftProps {
  language?: string; // Optional language prop with default 'en'
}

const worldwidecraft: React.FC<worldwidecraftProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <HeroSectionVision language={language} />
        <WorldwideCrafts language={language}/>
        <InfoSection language={language} />
        <ImageSlider language={language} />
        <AdviserSection language={language} />
        <MadeInGermanyExcellenceSection language={language} />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default worldwidecraft;