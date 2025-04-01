"use client";

import { useTheme } from "@/app/context/ThemeContext";
import CodeBlock from "@/components/CodeBlock/code01";
import Loading from "@/components/loading/loading-01";
import { useState } from "react";

const ComponentView = ({ activeComponent }: { activeComponent: string | null }) => {
  const { darkMode } = useTheme(); // Obtenha o estado do dark mode
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <div className="ml-0 md:ml-36 flex-1 backdrop-blur-md p-4 rounded-lg">
      {activeComponent === 'loading-01' && (
        <div className="flex flex-col items-center space-y-8 p-2 md:p-6">
          {/* Cabeçalho */}
          <div className="text-center space-y-2 w-full px-2">
            <h2 className="text-xl md:text-2xl font-bold dark:text-white">Loading Spinner</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
              Componente de carregamento animado com suporte a múltiplos tamanhos
            </p>
          </div>

          {/* Documentação */}
          <div className="w-full max-w-3/3 space-y-6 px-2">
            <div>
              <div className={`flex flex-row justify-center gap-4 items-center mx-auto w-full sm:w-48 h-20 sm:h-24 border-2 rounded-md border-gray-600 ${darkMode} 'bg-gray-800' : 'bg-white'`}>
                <Loading size="sm" />
                <Loading size="md" />
                <Loading size="lg" />
              </div>

              <h3 className="text-lg md:text-xl font-semibold dark:text-white ml-4 my-4 mx-auto">Código do Componente</h3>
              <div className="overflow-x-auto">
                <CodeBlock
                  className="mx-auto"
                  code={`const Loading = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-3',
    lg: 'h-8 w-8 border-4'
  };

  return (
    <div 
      className={\`inline-block animate-spin rounded-full \${sizeClasses[size]}\`}
      style={{ animationDuration: '0.8s' }} 
    />
  );
};

export default Loading;`}
                  language="typescript"
                />
              </div>

              <div className="space-y-4 mt-4">
                <h3 className="text-lg md:text-xl font-semibold dark:text-white m-4">Como Usar</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium dark:text-gray-200 m-4">Uso Básico</h4>
                    <CodeBlock
                      className="mx-auto"
                      code={`<Loading />`}
                      language="typescript"
                    />
                  </div>

                  <div>
                    <h4 className="font-medium dark:text-gray-200 m-4">Com Tamanho Personalizado</h4>
                    <CodeBlock
                      className="mx-auto"
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
      )}
    </div>
  );
};

export default ComponentView;