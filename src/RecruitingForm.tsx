import React from "react";
import HeroSectionRecruiting from './components/HeroSectionRecruiting';
import Recruitingform from './components/Recruitingform';
import MadeInGermanyExcellenceSection from './components/MadeInGermanyExcellenceSection';
import AdviserSection from './components/AdviserSection';
import InfoSection from './components/InfoSection';
import ImageSlider from './components/ImageSlider';
import GoUpButton from './components/GoUpButton';
// Define props interface for ContactForm
interface RecruitingFormProps {
  language?: string; // Optional language prop with default 'en'
}
import { HelmetProvider } from "react-helmet-async";
const RecruitingForm: React.FC<RecruitingFormProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <HeroSectionRecruiting language={language} />
        <Recruitingform language={language} />
        <InfoSection language={language} />
        <ImageSlider language={language} />
        <AdviserSection language={language} />
        <MadeInGermanyExcellenceSection language={language} />
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default RecruitingForm;



