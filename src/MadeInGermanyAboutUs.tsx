import React from "react";
import MadeInGermanyaboutUs from './components/MadeInGermanyAboutUs';
import CategoryGrid from './components/CategoryGrid';
import DomainSection from './components/DomainSection';
import { HelmetProvider } from "react-helmet-async";
import GoUpButton from './components/GoUpButton';

// Define props interface for Crafted Excellence
interface CraftedExcellenceProps {
  language?: string; // Optional language prop with default 'en'
}

const MadeInGermanyAboutUs: React.FC<CraftedExcellenceProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <MadeInGermanyaboutUs  />
        <CategoryGrid />
        <DomainSection  />
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default MadeInGermanyAboutUs;