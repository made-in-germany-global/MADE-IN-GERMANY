import React from "react";
import HeroSectionContact from './components/HeroSectionContact';
import Contactform from './components/Contactform';
import MadeInGermanyExcellenceSection from './components/MadeInGermanyExcellenceSection';
import AdviserSection from './components/AdviserSection';
import InfoSection from './components/InfoSection';
import ImageSlider from './components/ImageSlider';
import { HelmetProvider } from "react-helmet-async";
import GoUpButton from './components/GoUpButton';
// Define props interface for ContactForm
interface ContactFormProps {
  language?: string; // Optional language prop with default 'en'
}

const ContactForm: React.FC<ContactFormProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <HeroSectionContact language={language} />
        <Contactform language={language} />
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

export default ContactForm;