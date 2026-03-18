import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2 ml-4">
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded ${i18n.resolvedLanguage === 'en' ? 'bg-cyan-600 text-white' : 'text-zinc-600 dark:text-zinc-300 hover:text-cyan-600'}`}
      >
        EN
      </button>
      <span className="text-zinc-400">|</span>
      <button 
        onClick={() => changeLanguage('de')}
        className={`px-2 py-1 text-sm rounded ${i18n.resolvedLanguage === 'de' ? 'bg-cyan-600 text-white' : 'text-zinc-600 dark:text-zinc-300 hover:text-cyan-600'}`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
