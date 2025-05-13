import React from "react";
import HeroSectionHistory from './components/HeroSectionHistory';
import ImageSlider from './components/ImageSlider';
import MadeInGermanyExcellenceSection from './components/MadeInGermanExcellenceSection';
import MadeInGermanyMembershipTiers from './components/MadeInGermanyMembershipTiers';
import AdviserSection from './components/AdviserSection';
import { HelmetProvider } from "react-helmet-async";
import GoUpButton from './components/GoUpButton';
import MenuSection from './components/MenuSection';
// Define props interface for Crafted Excellence
interface CraftedExcellenceProps {
  language?: string; // Optional language prop with default 'en'
}

const MadeInGermanyMembership: React.FC<CraftedExcellenceProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <HeroSectionHistory language={language} />
        <MadeInGermanyMembershipTiers  />
        <ImageSlider language={language} />
        <AdviserSection language={language} />
        <MadeInGermanyExcellenceSection language={language} />
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default MadeInGermanyMembership;