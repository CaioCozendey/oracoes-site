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

const Tech = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  // Conteúdo multilíngue
  const content = {
    title: {
      en: "My Tech Stack",
      pt: "Minha Stack Tecnológica"
    },
    subtitle: {
      en: "Proficiency level in each technology I use",
      pt: "Nível de domínio em cada tecnologia que utilizo"
    },
    legend: {
      en: "Experience levels",
      pt: "Legenda de níveis de experiência"
    },
    levels: {
      beginner: {
        en: "Beginner",
        pt: "Iniciante"
      },
      intermediate: {
        en: "Intermediate",
        pt: "Intermediário"
      },
      advanced: {
        en: "Advanced",
        pt: "Avançado"
      },
      expert: {
        en: "Expert",
        pt: "Especialista"
      }
    }
  };

  // Tecnologias com nomes multilíngues quando necessário
  const technologies = [
    // Automação e Data Science
    { 
      name: { en: "Python", pt: "Python" }, 
      experience: 'expert', 
      icon: SiPython, 
      color: '#3776AB' 
    },
    { 
      name: { en: "Playwright", pt: "Playwright" }, 
      experience: 'advanced', 
      icon: FaRobot, 
      color: '#2EAD33' 
    },
    { 
      name: { en: "Selenium", pt: "Selenium" }, 
      experience: 'advanced', 
      icon: SiSelenium, 
      color: '#43B02A' 
    },
    { 
      name: { en: "PyAutoGUI", pt: "PyAutoGUI" }, 
      experience: 'intermediate', 
      icon: FaRobot, 
      color: '#FFD43B' 
    },
    { 
      name: { en: "Tesseract OCR", pt: "Tesseract OCR" }, 
      experience: 'intermediate', 
      icon: FaRobot, 
      color: '#0083CA' 
    },
    { 
      name: { en: "Pandas", pt: "Pandas" }, 
      experience: 'intermediate', 
      icon: SiPandas, 
      color: '#150458' 
    },
    
    // Front-end
    { 
      name: { en: "HTML", pt: "HTML" }, 
      experience: 'expert', 
      icon: SiHtml5, 
      color: '#E34F26' 
    },
    { 
      name: { en: "CSS", pt: "CSS" }, 
      experience: 'advanced', 
      icon: SiCss3, 
      color: '#1572B6' 
    },
    { 
      name: { en: "JavaScript", pt: "JavaScript" }, 
      experience: 'advanced', 
      icon: SiJavascript, 
      color: '#F7DF1E' 
    },
    { 
      name: { en: "TypeScript", pt: "TypeScript" }, 
      experience: 'intermediate', 
      icon: SiTypescript, 
      color: '#3178C6' 
    },
    { 
      name: { en: "Tailwind CSS", pt: "Tailwind CSS" }, 
      experience: 'advanced', 
      icon: SiTailwindcss, 
      color: '#06B6D4' 
    },
    
    // Frameworks
    { 
      name: { en: "React", pt: "React" }, 
      experience: 'advanced', 
      icon: SiReact, 
      color: '#61DAFB' 
    },
    { 
      name: { en: "Next.js", pt: "Next.js" }, 
      experience: 'advanced', 
      icon: SiNextdotjs, 
      color: '#000000' 
    },
  ];

  // Função auxiliar para pegar texto com base no idioma
  const getText = (item: { en: string; pt: string }) => item[language];

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
              experience={getText(content.levels[tech.experience])}
              icon={tech.icon}
              color={tech.color}
              darkMode={darkMode}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <div className="flex flex-wrap justify-center gap-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                {getText(content.levels.beginner)}
              </span>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                {getText(content.levels.intermediate)}
              </span>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                {getText(content.levels.advanced)}
              </span>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                {getText(content.levels.expert)}
              </span>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {getText(content.legend)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;