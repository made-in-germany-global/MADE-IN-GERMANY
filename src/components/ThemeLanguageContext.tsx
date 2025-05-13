import React, { createContext, useState, ReactNode } from 'react';

interface ThemeLanguageContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  selectedLanguage: string;
  setLanguage: (languageCode: string) => void;
}

export const ThemeLanguageContext = createContext<ThemeLanguageContextType>({
  isDarkTheme: true,
  toggleTheme: () => {},
  selectedLanguage: 'en',
  setLanguage: () => {},
});

interface ThemeLanguageProviderProps {
  children: ReactNode;
}

export const ThemeLanguageProvider: React.FC<ThemeLanguageProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const setLanguage = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  return (
    <ThemeLanguageContext.Provider value={{ isDarkTheme, toggleTheme, selectedLanguage, setLanguage }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};