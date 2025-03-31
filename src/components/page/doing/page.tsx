'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { FaHardHat, FaTools } from 'react-icons/fa';

const UnderConstruction = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Page Under Construction',
      message: 'We\'re working hard to build this section. Please check back soon!',
      icon1: <FaHardHat className="text-yellow-500 text-4xl animate-bounce" />,
      icon2: <FaTools className="text-blue-500 text-4xl animate-pulse" />
    },
    pt: {
      title: 'Página em Construção',
      message: 'Estamos trabalhando duro para finalizar esta seção. Volte em breve!',
      icon1: <FaHardHat className="text-yellow-500 text-4xl animate-bounce" />,
      icon2: <FaTools className="text-blue-500 text-4xl animate-pulse" />
    }
  };

  const t = content[language];

  return (
    <div className={`flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 text-center rounded-lg`}>
      <div className="flex items-center justify-center gap-4 mb-6">
        {t.icon1}
        {t.icon2}
      </div>
      <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        {t.title}
      </h2>
      <p className={`text-lg mb-8 max-w-md mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {t.message}
      </p>
      <div className={`w-full max-w-sm h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-blue-500 animate-progress"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;