import React, { createContext, useContext, useState } from 'react';
import { mockData } from '../mock';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en'); // Default to English
  
  const switchLanguage = (lang) => {
    setCurrentLang(lang);
  };
  
  const t = (path) => {
    const keys = path.split('.');
    let value = mockData.content[currentLang];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLang, 
      switchLanguage, 
      t,
      isItalian: currentLang === 'it',
      isEnglish: currentLang === 'en'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};