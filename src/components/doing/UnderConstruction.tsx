'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { FaHardHat, FaTools } from 'react-icons/fa';
import Loading from '@/components/loading/loading-01';

const UnderConstruction = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Page Under Construction',
      message: 'We\'re working hard to build this section. Please check back soon!',
    },
    pt: {
      title: 'Página em Construção',
      message: 'Estamos trabalhando duro para finalizar esta seção. Volte em breve!',
    }
  };

  const t = content[language];

  return (
    <div className="relative min-h-screen">
      {/* Container principal com altura total da tela */}
      <div className={`flex flex-col items-center justify-center min-h-screen py-12 px-4 text-center relative z-10`}>
        <div className="flex items-center justify-center gap-4 mb-6">
          <FaHardHat className="text-yellow-500 text-4xl animate-bounce" />
          <FaTools className="text-blue-500 text-4xl animate-pulse" />
        </div>
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {t.title}
        </h2>
        <p className={`text-lg mb-8 max-w-md mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {t.message}
        </p>
        <Loading />
      </div>
    </div>
  );
};

export default UnderConstruction;