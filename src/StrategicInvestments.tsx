import React from "react";
import Strategicinvestments from './components/StrategicInvestments';
import MadeInGermanyExcellenceSection from './components/MadeInGermanyExcellenceSection';
import { HelmetProvider } from "react-helmet-async";
import GoUpButton from './components/GoUpButton';
// Define props interface for ContactForm
interface ContactFormProps {
  language?: string; // Optional language prop with default 'en'
}

const StrategicInvestments: React.FC<ContactFormProps> = ({ language = 'en' }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HelmetProvider>
        <Strategicinvestments language={language} />
        <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default StrategicInvestments;