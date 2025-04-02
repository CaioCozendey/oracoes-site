"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext";
import CodeBlock from "@/components/CodeBlock/code01";
import Loading from "@/components/loading/loading-01";

const LoadingView = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  const loadingCode = `'use client';

import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loading = ({ size = 'md' }: LoadingProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-3',
    lg: 'h-8 w-8 border-4'
  };
  
  return (
    <div 
      className={\"inline-block animate-spin rounded-full border-current border-t-transparent \${sizeClasses[size]}\"}
      style={{ animationDuration: '0.8s' }} 
    />
  );
};

export default Loading;`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-8 py-6">
        {/* Header */}
        <div className="text-center w-full max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">
            {language === 'pt' ? 'Componente de Loading' : 'Loading Component'}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {language === 'pt' 
              ? 'Spinner de carregamento animado com múltiplos tamanhos' 
              : 'Animated loading spinner with multiple sizes'}
          </p>
        </div>

        {/* Demo Container */}
        <div className={`w-full max-w-4xl rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <div className="flex justify-center gap-8 py-8">
            <Loading size="sm" />
            <Loading size="md" />
            <Loading size="lg" />
          </div>
        </div>

        {/* Code Section */}
        <div className="w-full max-w-4xl space-y-6">
          <h3 className="text-xl font-semibold dark:text-white ml-2">
            {language === 'pt' ? 'Código do Componente' : 'Component Code'}
          </h3>
          <div className="overflow-x-auto">
            <CodeBlock
              code={loadingCode}
              language="typescript"
            />
          </div>

          {/* Usage Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold ml-2 dark:text-white">
              {language === 'pt' ? 'Como Usar' : 'How to Use'}
            </h3>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold dark:text-white">
                {language === 'pt' ? 'Propriedades do Componente' : 'Component Properties'}
              </h3>

              {/* Properties Container */}
              <div className={`rounded-lg p-4 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="flex items-start mb-2">
                  <div className={`rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                    <span className="text-sm font-bold">i</span>
                  </div>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {language === 'pt'
                      ? 'Todas as props são opcionais'
                      : 'All props are optional'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
                  {/* Size Prop */}
                  <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <code className={`font-mono text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>size</code>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                        {language === 'pt' ? 'opcional' : 'optional'}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {language === 'pt'
                        ? 'Tamanho do spinner (sm, md, lg)'
                        : 'Spinner size (sm, md, lg)'}
                    </p>
                    <div className="mt-2">
                      <code className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                        `sm` | `md` | `lg`
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium dark:text-gray-200 mb-2 ml-2">
                  {language === 'pt' ? 'Uso Básico' : 'Basic Usage'}
                </h4>
                <CodeBlock
                  code={`<Loading />`}
                  language="typescript"
                />
              </div>

              <div>
                <h4 className="font-medium dark:text-gray-200 mb-2 ml-2">
                  {language === 'pt' ? 'Com Tamanho Personalizado' : 'With Custom Size'}
                </h4>
                <CodeBlock
                  code={`<Loading size="sm" />
<Loading size="md" />
<Loading size="lg" />`}
                  language="typescript"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingView;