"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import TechCard from "@/components/cards/TechCard";
import CodeBlock from "@/components/CodeBlock/code01"
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

const LoadingView = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  const techCardCode = `'use client';

import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface TechCardProps {
  name: string;
  description: string;
  icon?: IconType | string;
  color?: string;
  tag?: 'RPA' | 'Frontend';
  addClass?: string;
}

const TechCard = ({
  name,
  description,
  color = '#3B82F6',
  icon,
  addClass
}: TechCardProps) => {

  const isImageIcon = (icon: IconType | string): icon is string => {
    return typeof icon === 'string' &&
      (icon.startsWith('/') ||
        /\\.(png|jpg|jpeg|gif|svg|webp)$/i.test(icon));
  };

  return (
    <div
      className={\`\${addClass}
        rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-900 
        backdrop-blur-xs flex flex-col transition-transform duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-lg
      \`}
    >
      <div className="relative">
        <div className='flex items-center gap-4'>
          {icon && (
            <div
              className="p-2 rounded-md flex-shrink-0"
              style={{
                backgroundColor: \`\${color}20\`,
                color: color
              }}
            >
              {isImageIcon(icon) ? (
                <div className="w-5 h-5 relative">
                  <Image
                    src={icon}
                    alt={name}
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized={icon.startsWith('/icons')}
                  />
                </div>
              ) : (
                React.createElement(icon, { size: 20 })
              )}
            </div>
          )}
          <div className="flex-1">
            <h3 className={\`font-medium text-gray-800\`}>
              {name}
            </h3>
            <p className={\`text-sm mt-1 text-gray-600\`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;`;

  const experienceCardCode = `'use client';

import React from 'react';
import Image from 'next/image';
import { IconType } from 'react-icons';
import isImageIcon from '@/utils/images/isImagesOrIcon';

interface ExperienceCardProps {
  company: string;
  position: string;
  period?: string;
  description?: string;
  icon?: IconType | string;
  href?: string;
  logoClass?: string;
}

const ExperienceCard = ({
  company,
  position,
  period = '',
  description = '',
  icon,
  href,
  logoClass = ''
}: ExperienceCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0">
            {isImageIcon(icon) ? (
              <div className="w-10 h-10 relative">
                <Image
                  src={icon}
                  alt={\`\${company} logo\`}
                  fill
                  className="object-contain"
                  unoptimized={typeof icon === 'string' && icon.startsWith('/icons')}
                />
              </div>
            ) : (
              <div className={\`text-3xl \${logoClass}\`}>
                {React.createElement(icon, { size: 24 })}
              </div>
            )}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold dark:text-white">
                {company}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {position}
              </p>
            </div>
            {period && (
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full whitespace-nowrap">
                {period}
              </span>
            )}
          </div>

          {description && (
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              {description}
            </p>
          )}

          {href && (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Visitar site →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center space-y-8 py-6">
        {/* Cabeçalho */}
        <div className="text-center w-full max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">Cards</h2>
          <div className="border-t border-gray-800 mt-16">
            <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-200 mt-4">
              {language === 'pt' ? 'Card para Stacks Tecnológica' : 'Card for Tech Stacks'}
            </p>
          </div>
        </div>

        {/* Container dos TechCards */}
        <div className={`w-full max-w-4xl rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
          }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard
              name={"Reactjs"}
              description={"Library for building user interfaces with components"}
              icon={SiReact}
              color="#61DAFB"
              addClassDark='bg-gray-900'
            />
            <TechCard
              name={"Javascript"}
              description={"Dynamic programming language for interactive websites"}
              icon={SiJavascript}
              color="#F7DF1E"
              addClassDark='bg-gray-900'
            />
            <TechCard
              name={"Tailwind"}
              description={"Utility-first CSS framework for rapid UI development"}
              icon={SiTailwindcss}
              color="#06B6D4"
              addClassDark='bg-gray-900'
            />
          </div>
        </div>

        {/* Seção de Código */}
        <div className="w-full max-w-4xl space-y-6">
          <h3 className="text-xl font-semibold dark:text-white ml-2">{language === 'pt' ? 'Código do Componente' : 'Component Code'}</h3>
          <div className="overflow-x-auto">
            <CodeBlock
              code={techCardCode}
              language="typescript"
            />
          </div>

          {/* Seção de Como Usar */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold ml-2 dark:text-white">{language === 'pt' ? 'Como Usar' : 'How to Use'}</h3>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold dark:text-white">
                {language === 'pt' ? 'Propriedades do Componente' : 'Component Properties'}
              </h3>

              {/* Container principal - dark mode corrigido */}
              <div className={`rounded-lg p-4 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="flex items-start mb-2">
                  <div className={`rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    }`}>
                    <span className="text-sm font-bold">i</span>
                  </div>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {language === 'pt'
                      ? 'Todas as props são opcionais, exceto '
                      : 'All props are optional except '}
                    <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>name</code> {language === 'pt' ? 'e' : 'and'} <code className={`px-1 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>description</code>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {/* Prop name - dark mode corrigido */}
                  <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                    }`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <code className={`font-mono text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>name</code>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                        }`}>
                        {language === 'pt' ? 'obrigatório' : 'required'}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {language === 'pt'
                        ? 'Nome exibido no topo do Card'
                        : 'Name displayed at the top of the Card'}
                    </p>
                  </div>

                  {/* Prop description - dark mode corrigido */}
                  <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                    }`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <code className={`font-mono text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>description</code>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                        }`}>
                        {language === 'pt' ? 'obrigatório' : 'required'}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {language === 'pt'
                        ? 'Descrição exibida abaixo do nome'
                        : 'Description displayed below the name'}
                    </p>
                  </div>

                  {/* Prop icon - dark mode corrigido */}
                  <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                    }`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <code className={`font-mono text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>icon</code>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {language === 'pt' ? 'opcional' : 'optional'}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {language === 'pt'
                        ? 'Ícone (react-icons ou caminho para imagem em '
                        : 'Icon (react-icons or image path in '}
                      <code className={`px-1 rounded text-xs ${darkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>public/</code>)
                    </p>
                  </div>

                  {/* Prop color - dark mode corrigido */}
                  <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                    }`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <code className={`font-mono text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>color</code>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {language === 'pt' ? 'opcional' : 'optional'}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {language === 'pt'
                        ? 'Cor de fundo do ícone (formato HEX)'
                        : 'Icon background color (HEX format)'}
                    </p>
                    <div className="flex space-x-2 mt-2">
                      <div className={`w-4 h-4 rounded-full bg-blue-500 border ${darkMode ? 'border-gray-500' : 'border-gray-300'
                        }`}></div>
                      <div className={`w-4 h-4 rounded-full bg-green-500 border ${darkMode ? 'border-gray-500' : 'border-gray-300'
                        }`}></div>
                      <div className={`w-4 h-4 rounded-full bg-red-500 border ${darkMode ? 'border-gray-500' : 'border-gray-300'
                        }`}></div>
                      <div className={`w-4 h-4 rounded-full bg-yellow-500 border ${darkMode ? 'border-gray-500' : 'border-gray-300'
                        }`}></div>
                    </div>
                  </div>

                  {/* Prop addClass - dark mode corrigido */}
                  <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                    }`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <code className={`font-mono text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>addClass</code>
                      <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {language === 'pt' ? 'opcional' : 'optional'}
                      </span>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {language === 'pt'
                        ? 'Classes CSS adicionais para estilização na div principal do Card'
                        : 'Additional CSS classes for styling the main Card div'}
                    </p>
                    <div className="mt-2">
                      <code className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                        bg-gray-900 text-white
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium dark:text-gray-200 mb-2 ml-2">Uso Básico</h4>
                <CodeBlock
                  code={`<TechCard \n  name="React"\n  description=""\n  icon={SiReact}\n  color="#61DAFB"\n/>`}
                  language="typescript"
                />
              </div>

              <div>
                <h4 className="font-medium dark:text-gray-200 mb-2 ml-2">Com Classe Adicional</h4>
                <CodeBlock
                  code={`<TechCard \n  name="React"\n  description="JavaScript"\n  icon={SiReact}\n  color="#61DAFB"\n  addClass="bg-gray-900"\n/>`}
                  language="typescript"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8">
        {/* Header */}
        <div className="text-center w-full max-w-3xl space-y-2">
          <div className="border-t border-gray-800 mt-16">
            <p className={`text-sm sm:text-lg mt-4 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
              Cards for use in your professional experience
            </p>
            <p className={`text-md sm:text-md mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              (All data is fictitious)
            </p>
          </div>
        </div>

        {/* ExperienceCards Container */}
        <div className={`w-full max-w-4xl rounded-xl p-6 ${darkMode ? 'bg-gray-900' : 'bg-white shadow-md'}`}>
          <div className="grid grid-cols-1 gap-6">
            <ExperienceCard
              icon={FcGoogle}
              company={"Google"}
              period={"Jun 2020 - Present"}
              position={"Senior Software Engineer"}
              description={
                "Development and maintenance of large-scale search systems. " +
                "Optimization of ranking algorithms to improve result relevance. " +
                "Technical leadership of a squad of 5 engineers. " +
                "Contributions to the Angular framework used in Google products."
              }
              href={"https://www.google.com"}
              logoClass={"text-red-500"}
            />

            <ExperienceCard
              icon={FaApple}
              company={"Apple"}
              period={"Jan 2018 - May 2020"}
              position={"iOS Engineer Lead"}
              description={
                "Development of critical components for iOS 13 and 14. " +
                "App Store performance optimization. " +
                "Architecture of data privacy solutions. " +
                "Mentorship for junior developers in the team."
              }
              href={"https://www.apple.com"}
              logoClass={`${darkMode ? "text-gray-200" : "text-gray-800"}`}
            />

            <ExperienceCard
              icon={FaMicrosoft}
              company={"Microsoft"}
              period={"Aug 2015 - Dec 2017"}
              position={"Software Development Engineer II"}
              description={
                "Contributions to Windows 10 core. " +
                "API development for Azure platform. " +
                "Feature implementation in Visual Studio Code. " +
                "Collaboration with distributed teams in Redmond and Bangalore."
              }
              href={"https://www.microsoft.com"}
              logoClass={"text-blue-500"}
            />
          </div>
        </div>

        {/* Code Section */}
        <div className="w-full max-w-4xl space-y-6">
          <h3 className="text-xl font-semibold dark:text-white ml-2">
            Component Code
          </h3>
          <div className="overflow-x-auto">
            <CodeBlock
              code={experienceCardCode}
              language="typescript"
            />
          </div>

          {/* Usage Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold ml-2 dark:text-white">
              Component Properties
            </h3>

            <div className={`rounded-lg p-4 shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                {/* Prop company */}
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <code className={`font-mono text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>company</code>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                      required
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                      type: string
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Company name
                  </p>
                </div>

                {/* Prop position */}
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <code className={`font-mono text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>position</code>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                      required
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                      type: string
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Job position title
                  </p>
                </div>

                {/* Prop period */}
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <code className={`font-mono text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>period</code>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                      optional
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                      type: string
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Employment period (e.g.: Jan 2020 - Dec 2022)
                  </p>
                </div>

                {/* Prop description */}
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <code className={`font-mono text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>description</code>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                      optional
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                      type: string
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Detailed description of job responsibilities
                  </p>
                </div>

                {/* Company Icon */}
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <code className={`font-mono text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>icon</code>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                      required
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                      type: icon | image
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Company icon - You can use the libs react-icons or lucide and images
                  </p>
                </div>

                {/* href */}
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <code className={`font-mono text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>icon</code>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                      required
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                      type: string
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Website link
                  </p>
                </div>

                {/* Prop logoClass */}
                <div className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <code className={`font-mono text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>logoClass</code>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                      optional
                    </span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                      type: string
                    </span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    CSS classes for icon styling
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Exemple:
                    </p>
                    <code className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>text-red-500</code>
                    <code className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>text-blue-600</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Examples */}
            <div className="space-y-6">

              <div>
                <h4 className="font-medium dark:text-gray-200 mb-2 ml-2">
                  With Detailed Description
                </h4>
                <CodeBlock
                  code={`<ExperienceCard \n  company="Apple"\n  position="iOS Developer"\n  period="2018-2020"\n  description="Native iOS app development using SwiftUI and UIKit..."\n  icon={FaApple}\n  logoClass="text-gray-800"\n/>`}
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