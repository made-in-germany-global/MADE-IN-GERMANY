import React from "react";
import ComingSoon from './components/ComingSoon';
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
        <ComingSoon language={language} />
       <GoUpButton />
        </HelmetProvider>
      </main>
    </div>
  );
};

export default ContactForm;