"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext"; // Importe o ThemeContext
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import BackParticles from "@/components/ParticleBackground/main";
import { formatExperiencePeriod } from "@/utils/date/dataUtils";

const Experiences = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme(); // Obtenha o estado do dark mode

  // Dados dos cards

  // Dados constantes
  const commonExperienceProps = {
    autoGlass: {
      logo: "/icons/logo/autoglass.png",
      skills: ["Python", "Selenium", "PlayWright", "Pandas", "Git"],
      href: "/pages/experiences/autoglass",
      logoClass: "bg-gray-200 max-w-24"
    },
    treeInova: {
      logo: "/icons/logo/treeinova.png",
      skills: ["Python", "Selenium", "Tesseract", "Pyautogui", "Pandas", "Git", "Roberty Studio"],
      href: "/pages/experiences/treeinova",
      logoClass: "bg-gray-200 max-w-24"
    },
    sogamax: {
      logo: "/icons/logo/sogamax.png",
      skills: ["Python", "Selenium", "Pandas", "Reactjs", "Tailwind", "Typescript"],
      href: "/pages/experiences/sogamax",
      logoClass: "bg-gray-200 max-w-24"
    },
    highJump: {
      logo: "/icons/logo/highjump.png",
      skills: ["Javascript", "Roberty Studio", "RPA"],
      href: "/pages/experiences/highjump",
      logoClass: "bg-gray-200 max-w-24"
    },
    simplea: {
      logo: "/icons/logo/simplea.png",
      skills: ["Javascript", "Roberty Studio", "RPA", "SQL", "HTML5"],
      href: "/pages/experiences/simplea",
      logoClass: "bg-gray-200 max-w-24"
    },
  };

  // Dados variaveis
  const experiences = {
    en: [
      {
        ...commonExperienceProps.autoGlass,
        company: "AutoGlass Group",
        period: formatExperiencePeriod('2025-03-16',{
          language: 'en'
        }),
        position: "RPA Developer",
        description: "Automated business processes using Python and Playwright, reducing manual workload by 60% and improving operational efficiency.",
      },
      {
        ...commonExperienceProps.simplea,
        company: "Simplea",
        period: formatExperiencePeriod('2025-03-31',{
          language: 'en'
        }),
        position: "RPA Developer",
        description: "Automated business processes using Roberty Studio (A Low Code RPA Plataform) and Javascript, reducing manual workload by 60% and improving operational efficiency.",
      },
      {
        ...commonExperienceProps.treeInova,
        company: "Tree Iova",
        period: formatExperiencePeriod(
          '2023-10-05', {
          isCurrent: false,
          language: 'en',
          endDate: '2025-01-24'
        }),
        position: "RPA Developer",
        description: "Automated business processes using Python, Selenium and Pyautogui, reducing manual workload by 60% and improving operational efficiency.",
      },
      {
        ...commonExperienceProps.sogamax,
        company: "Sogamax Distribuidora",
        period: formatExperiencePeriod(
          '2023-09-05', {
          isCurrent: false,
          language: 'en',
          endDate: '2023-10-10'
        }),
        position: "IT Intern",
        description: "Developed automation solutions with Python and Selenium while contributing to web development projects using React. Enhanced operational efficiency by 40% through RPA bots and improved user interfaces.",
      },
      {
        ...commonExperienceProps.highJump,
        company: "High Jump",
        period: formatExperiencePeriod(
          '2022-08-01', {
          isCurrent: false,
          language: 'en',
          endDate: '2023-04-15'
        }),
        position: "IT Intern",
        description: "Automated business processes using Roberty Studio (A Low Code RPA Plataform) and Javascript, reducing manual workload by 60% and improving operational efficiency.",
      }
    ],
    pt: [
      {
        ...commonExperienceProps.autoGlass,
        company: "Grupo AutoGlass",
        period: formatExperiencePeriod('2025-03-16',{
          language: 'pt'
        }),
        position: "Desenvolvedor RPA",
        description: "Automatizei processos empresariais utilizando Python e Playwright, reduzindo a carga de trabalho manual em 60% e melhorando a eficiência operacional.",
      },
      {
        ...commonExperienceProps.simplea,
        company: "Simplea",
        period: formatExperiencePeriod('2025-03-31',{
          language: 'pt'
        }),
        position: "Desenvolvedor RPA",
        description: "Automatizei processos empresariais utilizando Roberty Studio (Uma plataforma Low code RPA) e Javascript, reduzindo a carga de trabalho manual em 60% e melhorando a eficiência operacional.",
      },
      {
        ...commonExperienceProps.treeInova,
        company: "Tree Inova",
        period: formatExperiencePeriod(
          '2023-10-05', {
          isCurrent: false,
          language: 'pt',
          endDate: '2025-01-24'
        }),
        position: "Desenvolvedor RPA",
        description: "Automatizei processos empresariais utilizando Python, Selenium e Pyautogui, reduzindo a carga de trabalho manual em 60% e melhorando a eficiência operacional.",
      },
      {
        ...commonExperienceProps.sogamax,
        company: "Sogamax Distribuidora",
        period: formatExperiencePeriod(
          '2023-09-05', {
          isCurrent: false,
          language: 'pt',
          endDate: '2023-10-10'
        }),
        position: "Desenvolvedor RPA",
        description: "Desenvolvi soluções de automação com Python e Selenium enquanto contribuía para projetos web com React. Aumentei a eficiência operacional em 40% através de bots RPA e melhorei interfaces de usuário.",
      },
      {
        ...commonExperienceProps.highJump,
        company: "High Jump",
        period: formatExperiencePeriod(
          '2022-08-01', {
          isCurrent: false,
          language: 'pt',
          endDate: '2023-04-15'
        }),
        position: "Desenvolvedor RPA",
        description: "Automatizei processos empresariais utilizando Roberty Studio (Uma plataforma Low code RPA) e Javascript, reduzindo a carga de trabalho manual em 60% e melhorando a eficiência operacional.",
      }
    ]
  };

  return (
    <section className="relative"> {/* Adicione relative aqui */}
      <BackParticles />

      {/* Container com z-index para ficar acima das partículas */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <h1 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {language === 'en' ? 'Professional Experience' : 'Experiência Profissional'}
        </h1>

        <div className={`flex flex-col gap-12`}>
          {experiences[language].map((exp, index) => (
            <ExperienceCard
              key={index}
              logo={exp.logo}
              company={exp.company}
              period={exp.period}
              position={exp.position}
              description={exp.description}
              skills={exp.skills}
              href={exp.href}
              logoClass={exp.logoClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;