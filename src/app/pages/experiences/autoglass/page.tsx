// app/experience/tech-solutions/page.tsx
'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { useLanguage } from '@/app/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import BackParticles from '@/components/ParticleBackground/main';
import { formatExperiencePeriod } from '@/utils/date/dataUtils';

// Multilingual content
const content = {
  en: {
    name: "AutoGlass Group",
    title: 'AutoGlass Group | RPA Developer Experience',
    position: 'RPA Developer',
    period: formatExperiencePeriod(
      '2025-03-16', {
      isCurrent: true,
      language: 'en'
    }),
    achievements: 'Achievements',
    achievementsList: [
      "-",
      "-",
      "-",
      "-",
    ],
    responsibilities: 'Key Responsibilities',
    responsibilitiesList: [
      'Design, develop, and maintain RPA solutions for various departments',
      'Analyze business processes to identify automation potential',
      'Create technical documentation and user guides',
      'Monitor and troubleshoot automated workflows',
      'Mentor junior team members in RPA best practices'
    ],
    technologies: 'Technologies Used',
    metrics: 'Key Metrics',
    metricsList: {
      processes: 'Processes Automated',
      timeSavings: 'Time Savings',
      errorReduction: 'Error Reduction',
    },
    back: '← Back to Experience'
  },
  pt: {
    name: "Grupo AutoGlass",
    title: 'AutoGlass Group | Experiência como Desenvolvedor RPA',
    position: 'Desenvolvedor RPA',
    period: formatExperiencePeriod(
      '2025-03-16', {
      isCurrent: true,
      language: 'pt'
    }),
    achievements: 'Conquistas',
    achievementsList: [
      '-',
      '-',
      '-',
      '-',
    ],
    responsibilities: 'Responsabilidades',
    responsibilitiesList: [
      'Projetar, desenvolver e manter soluções RPA para diversos departamentos',
      'Analisar processos de negócios para identificar potencial de automação',
      'Criar documentação técnica e manuais de usuário',
      'Monitorar e solucionar problemas em fluxos de trabalho automatizados',
      'Orientar membros juniores da equipe em melhores práticas de RPA'
    ],
    technologies: 'Tecnologias Utilizadas',
    metrics: 'Métricas Principais',
    metricsList: {
      processes: 'Processos Automatizados',
      timeSavings: 'Redução de Tempo',
      errorReduction: 'Redução de Erros',
    },
    back: '← Voltar para Experiências'
  }
};

// Technology data with official links
const technologies = [
  { name: 'Python', url: 'https://www.python.org' },
  { name: 'Playwright', url: 'https://playwright.dev' },
  { name: 'Selenium', url: 'https://www.selenium.dev' },
  { name: 'Pandas', url: 'https://pandas.pydata.org' },
  { name: 'Bitbucket', url: 'https://bitbucket.org' },
  { name: 'Git', url: 'https://git-scm.com' },
  { name: 'SQL & No SQL' },
];

const Autoglass = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className={`min-h-screen ${darkMode ? 'text-gray-200' : ' text-gray-900'}`}>
      <BackParticles />
      <div className={`max-w-4xl mx-auto px-4 py-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>

        {/* Back button at the top */}
        <div className="mb-6">
          <Link
            href="/pages/experiences"
            className={`inline-flex items-center text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
          >
            {t.back}
          </Link>
        </div>

        {/* Header */}
        <header className={`flex flex-col md:flex-row gap-6 items-start md:items-center mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
            <Image
              src="/icons/logo/autoglass.png"
              alt="AutoGlass Group Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{t.name}</h1>
            <h2 className={`text-xl font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {t.position}
            </h2>
            <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
              {t.period}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {t.achievements}
              </h3>
              <ul className={`space-y-3 list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.achievementsList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {t.responsibilities}
              </h3>
              <ul className={`space-y-3 list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.responsibilitiesList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Technologies Section with Links */}
            <section className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {t.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-600 text-blue-400 hover:bg-gray-500' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'} transition-colors`}
                  >
                    {tech.name}
                  </a>
                ))}
              </div>
            </section>

            <section className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {t.metrics}
              </h3>
              <div className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p><span className="font-medium">{t.metricsList.processes}:</span> 1+</p>
                <p><span className="font-medium">{t.metricsList.timeSavings}:</span> 60%</p>
                <p><span className="font-medium">{t.metricsList.errorReduction}:</span> 50%</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autoglass;