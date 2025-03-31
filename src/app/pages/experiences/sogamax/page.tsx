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
    name: "Sogamax Distribuidora",
    title: 'Sogamax Distribuidora | IT Intern',
    position: 'IT Intern',
    period: formatExperiencePeriod(
      '2023-09-05', {
      isCurrent: false,
      language: 'en',
      endDate: '2023-10-10'
    }),
    achievements: 'Achievements',
    achievementsList: [
      'Developed and performed maintenance on web applications for integration with other automations.',
      'Collaborated with multidisciplinary teams to identify automation opportunities',
      'Reduced process execution time from hours to minutes',
    ],
    responsibilities: 'Responsibilities',
    responsibilitiesList: [
      'Design, develop and maintain RPA solutions for various departments',
      'Analyze business processes to identify automation potential',
      'Develop and maintain web applications',
      'Monitor and troubleshoot automated workflows',
    ],
    technologies: 'Technologies Used',
    metrics: 'Key Metrics',
    metricsList: {
      processes: 'Automated Processes',
      timeSavings: 'Time Reduction',
      errorReduction: 'Error Reduction',
    },
    back: '← Back to Experiences'
  },
  pt: {
    name: "Sogamax Distribuidora",
    title: 'Sogamax Distribuidora | Estagiário de TI',
    position: 'Estagiário de TI',
    period: formatExperiencePeriod(
      '2023-09-05', {
      isCurrent: false,
      language: 'pt',
      endDate: '2023-10-10'
    }),
    achievements: 'Conquistas',
    achievementsList: [
      'Desenvolvi e realizei manunteções em aplicações Web para integração com outras automações.',
      'Colaborei com equipes multidisciplinares para identificar oportunidades de automação',
      'Reduzi tempo de execução de processos de horas para minutos',
    ],
    responsibilities: 'Responsabilidades',
    responsibilitiesList: [
      'Projetar, desenvolver e manter soluções RPA para diversos departamentos',
      'Analisar processos de negócios para identificar potencial de automação',
      'Desenvolver e fazer manutenção em aplicações Web',
      'Monitorar e solucionar problemas em fluxos de trabalho automatizados',
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
  { name: 'Selenium', url: 'https://www.selenium.dev' },
  { name: 'Pandas', url: 'https://pandas.pydata.org' },
  { name: 'Nextjs', url: 'https://nextjs.org/' },
  { name: 'Typescript', url: 'https://www.typescriptlang.org/' },
  { name: 'Tailwind', url: 'https://tailwindcss.com/' },
  { name: 'Git', url: 'https://git-scm.com' },
  { name: 'SQL & No SQL' },
];

const Sogamax = () => {
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
              src="/icons/logo/sogamax.png"
              alt="Sogamax Logo"
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
                <p><span className="font-medium">{t.metricsList.processes}:</span> 2+</p>
                <p><span className="font-medium">{t.metricsList.timeSavings}:</span> 25% - 50%</p>
                <p><span className="font-medium">{t.metricsList.errorReduction}:</span> - 50%</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sogamax;