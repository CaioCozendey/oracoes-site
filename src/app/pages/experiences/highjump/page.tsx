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
    name: "High Jump",
    title: 'High Jump | RPA Intern',
    position: 'RPA Intern',
    period: formatExperiencePeriod(
      '2022-08-01', {
      isCurrent: false,
      language: 'en',
      endDate: '2023-04-15'
    }),
    achievements: 'Achievements',
    achievementsList: [
      'Developed and maintained RPA solutions using Roberty Studio (an internal RPA platform).',
      'Created automation scripts with JavaScript (Language used in Roberty) to enhance workflow efficiency.',
      'Collaborated with cross-functional teams to identify and implement automation opportunities.',
      'Reduced manual processing time by 95% through optimized automation flows.',
    ],
    responsibilities: 'Responsibilities',
    responsibilitiesList: [
      'Design, develop, and maintain RPA bots using Roberty Studio.',
      'Write and debug JavaScript code for automation scripts.',
      'Analyze business processes to identify automation potential.',
      'Monitor and troubleshoot automated workflows to ensure reliability.',
    ],
    technologies: 'Technologies Used',
    technologiesList: ['Roberty Studio', 'JavaScript'],
    metrics: 'Key Metrics',
    metricsList: {
      processes: 'Automated Processes',
      timeSavings: 'Time Reduction (70% faster)',
      errorReduction: 'Error Reduction',
    },
    back: '← Back to Experiences'
  },
  pt: {
    name: "High Jump",
    title: 'High Jump | Estagiário de RPA',
    position: 'Estagiário de RPA',
    period: formatExperiencePeriod(
      '2022-08-01', {
      isCurrent: false,
      language: 'pt',
      endDate: '2023-04-15'
    }),
    achievements: 'Conquistas',
    achievementsList: [
      'Desenvolvi e mantive soluções de RPA utilizando Roberty Studio (plataforma Automação).',
      'Criei scripts de automação em JavaScript (Linguagem utilizada em Roberty) para melhorar a eficiência dos processos.',
      'Colaborei com equipes multidisciplinares para identificar e implementar automações.',
      'Reduzi o tempo de processamento manual em 95% com fluxos de automação otimizados.',
    ],
    responsibilities: 'Responsabilidades',
    responsibilitiesList: [
      'Projetar, desenvolver e manter bots de RPA usando Roberty Studio.',
      'Escrever e depurar código JavaScript para automações.',
      'Analisar processos de negócios para identificar oportunidades de automação.',
      'Monitorar e solucionar problemas em fluxos automatizados.',
    ],
    technologies: 'Tecnologias Utilizadas',
    technologiesList: ['Roberty Studio', 'JavaScript'],
    metrics: 'Métricas Principais',
    metricsList: {
      processes: 'Processos Automatizados',
      timeSavings: 'Redução de Tempo (70% mais rápido)',
      errorReduction: 'Redução de Erros',
    },
    back: '← Voltar para Experiências'
  }
};

// Technology data with official links
const technologies = [
  { name: 'Roberty Studio', url: 'https://www.roberty.app/' },
  { name: 'Javascript', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
  { name: 'SQL' },
  { name: 'NoSQL'},
];

const Highjump = () => {
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
        <header className={`flex flex-col md:flex-row gap-6 items-start md:items-center mb-8 p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <Image
              src="/icons/logo/highjump.png"
              alt="High Jump Logo"
              width={120}
              height={120}
              className="object-contain w-30 h-30"
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
                <p><span className="font-medium">{t.metricsList.processes}:</span> 4+</p>
                <p><span className="font-medium">{t.metricsList.timeSavings}:</span> 75% - 95%</p>
                <p><span className="font-medium">{t.metricsList.errorReduction}:</span> - 99%</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highjump;