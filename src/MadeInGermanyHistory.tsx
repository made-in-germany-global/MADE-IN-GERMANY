import React from "react";
import MadeInGermanyhistory from './components/MadeInGermanyHistory';
import { HelmetProvider } from "react-helmet-async";
import GoUpButton from './components/GoUpButton';
// Define props interface for Crafted Excellence
interface CraftedExcellenceProps {
  language?: string; // Optional language prop with default 'en'
}

const MadeInGermanyHistory: React.FC<CraftedExcellenceProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <MadeInGermanyhistory language={language} />
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default MadeInGermanyHistory;