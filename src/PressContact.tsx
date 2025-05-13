import React from "react";
import Presscontact from './components/PressContact';
import MadeInGermanyExcellenceSection from './components/MadeInGermanyExcellenceSection';
import { HelmetProvider } from "react-helmet-async";
import GoUpButton from './components/GoUpButton';
// Define props interface for ContactForm
interface ContactFormProps {
  language?: string; // Optional language prop with default 'en'
}

const PressContact: React.FC<ContactFormProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <Presscontact language={language} />
       
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default PressContact;