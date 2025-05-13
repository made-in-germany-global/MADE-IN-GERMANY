// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  changeLanguage: (languageCode: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'en';
  });

  // Update localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (languageCode: string) => {
    setLanguage(languageCode);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};