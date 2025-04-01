// app/pages/techs/page.tsx
'use client';

import {
  SiPython,
  SiSelenium,
  SiPandas,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import TechCard from '@/components/cards/TechCard';
import BackParticles from '@/components/ParticleBackground/main';
import { useTheme } from '@/app/context/ThemeContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { TechItem } from '@/utils/types/tech';

const Tech = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const content = {
    title: {
      en: "My Tech Stack",
      pt: "Minha Stack Tecnológica"
    },
    subtitle: {
      en: "Technologies I work with and their applications",
      pt: "Tecnologias que utilizo e suas aplicações"
    }
  };

  const technologies: TechItem[] = [
    {
      name: { en: "Python", pt: "Python" },
      description: {
        en: "Versatile language for automation, data analysis and backend",
        pt: "Linguagem versátil para automação, análise de dados e backend"
      },
      icon: SiPython,
      color: '#3776AB',
      tag: 'RPA'
    },
    {
      name: { en: "Playwright", pt: "Playwright" },
      description: {
        en: "Modern browser automation for testing and scraping",
        pt: "Automação moderna de navegadores para testes e scraping"
      },
      icon: FaRobot,
      color: '#2EAD33',
      tag: 'RPA'
    },
    {
      name: { en: "Selenium", pt: "Selenium" },
      description: {
        en: "Browser automation framework for testing",
        pt: "Framework para automação de navegadores e testes"
      },
      icon: SiSelenium,
      color: '#43B02A',
      tag: 'RPA'
    },
    {
      name: { en: "Pandas", pt: "Pandas" },
      description: {
        en: "Powerful data analysis and manipulation library for Python",
        pt: "Biblioteca poderosa para análise e manipulação de dados em Python"
      },
      icon: SiPandas,
      color: '#3178C6'
    },
    {
      name: { en: "PyAutoGUI", pt: "PyAutoGUI" },
      description: {
        en: "Cross-platform GUI automation for mouse/keyboard control",
        pt: "Automação multiplataforma de GUI para controle de mouse/teclado"
      },
      icon: FaRobot,
      color: '#FFD43B',
      tag: 'RPA'
    },
    {
      name: { en: "Roberty Studio", pt: "Roberty Studio" },
      description: {
        en: "Comprehensive platform for building RPA robots",
        pt: "Plataforma completa para desenvolvimento de robôs voltados para RPA"
      },
      icon: "/icons/logo/roberty-studio.png",
      color: '#FF6B35',
      tag: 'RPA'
    },
    {
      name: { en: "HTML", pt: "HTML" },
      description: {
        en: "Markup language for structuring web content",
        pt: "Linguagem de marcação para estruturação de conteúdo web"
      },
      icon: SiHtml5,
      color: '#E34F26',
      tag: 'Frontend'
    },
    {
      name: { en: "CSS", pt: "CSS" },
      description: {
        en: "Styling language for web design and layout",
        pt: "Linguagem de estilização para design e layout web"
      },
      icon: SiCss3,
      color: '#1572B6',
      tag: 'Frontend'
    },
    {
      name: { en: "Tailwind CSS", pt: "Tailwind CSS" },
      description: {
        en: "Utility-first CSS framework for rapid UI development",
        pt: "Framework CSS utility-first para desenvolvimento rápido de interfaces"
      },
      icon: SiTailwindcss,
      color: '#06B6D4',
      tag: 'Frontend'
    },
    {
      name: { en: "JavaScript", pt: "JavaScript" },
      description: {
        en: "Dynamic programming language for interactive websites",
        pt: "Linguagem de programação dinâmica para sites interativos"
      },
      icon: SiJavascript,
      color: '#F7DF1E',
      tag: 'Frontend'
    },
    {
      name: { en: "TypeScript", pt: "TypeScript" },
      description: {
        en: "Typed JavaScript superset for scalable application development",
        pt: "Superconjunto tipado do JavaScript para desenvolvimento escalável"
      },
      icon: SiTypescript,
      color: '#3178C6',
      tag: 'Frontend'
    },
    {
      name: { en: "React", pt: "React" },
      description: {
        en: "Library for building user interfaces with components",
        pt: "Biblioteca para construção de interfaces com componentes"
      },
      icon: SiReact,
      color: '#61DAFB',
      tag: 'Frontend'
    },
    {
      name: { en: "Next.js", pt: "Next.js" },
      description: {
        en: "React framework for server-rendered applications",
        pt: "Framework React para aplicações renderizadas no servidor"
      },
      icon: SiNextdotjs,
      color: '#ffffff',
      tag: 'Frontend'
    },
  ];

  const getText = <T extends { en: string; pt: string }>(item: T): string => item[language];

  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <BackParticles />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {getText(content.title)}
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {getText(content.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              name={getText(tech.name)}
              description={getText(tech.description)}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;