import React from "react";
import HeroSectionCareers from './components/HeroSectionCareers';
import CareerPage from './components/CareerPage';
import InfoSection from './components/InfoSection';
import ImageSlider from './components/ImageSlider';
import MadeInGermanyExcellenceSection from './components/MadeInGermanyExcellenceSection';
import AdviserSection from './components/AdviserSection';
import { HelmetProvider } from "react-helmet-async";
import GoUpButton from './components/GoUpButton';

// Define props interface for worldwidecraft
interface CareersProps {
  language?: string; // Optional language prop with default 'en'
}

const Careers: React.FC<CareersProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
         <HelmetProvider>
        <CareerPage language={language}/>
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default Careers;