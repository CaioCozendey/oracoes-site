"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext"; // Importe o ThemeContext
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import BackParticles from "@/components/ParticleBackground/main";

const Experiences = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme(); // Obtenha o estado do dark mode

  // Dados dos cards

  // Dados constantes
  const commonExperienceProps = {
    autoGlass: {
      logo: "/icons/logo/autoglass.png",
      skills: ["Python", "Selenium", "PlayWright", "Pandas", "Git"],
      href: "/experience/autoglass",
      logoClass: "bg-gray-200"
    },
    treeInova: {
      logo: "/icons/logo/treeinova.png",
      skills: ["Python", "Selenium", "Tesseract", "Pyautogui", "Pandas", "Git"],
      href: "/experience/treeinova",
      logoClass: "bg-gray-200"
    },
    sogamax: {
      logo: "/icons/logo/sogamax.png",
      skills: ["Python", "Selenium", "Pandas", "Reactjs", "Tailwind", "Typescript"],
      href: "/experience/sogamax",
      logoClass: "bg-gray-200"
    },
    highJump: {
      logo: "/icons/logo/highjump.png",
      skills: ["Python", "Selenium", "Pandas", "Reactjs", "Tailwind", "Typescript"],
      href: "/experience/sogamax",
      logoClass: "bg-gray-200"
    }
  };

  // Dados variaveis
  const experiences = {
    en: [
      {
        ...commonExperienceProps.autoGlass,
        company: "AutoGlass Group",
        period: "Mar 2025 - Present",
        position: "RPA Developer",
        description: "Automated business processes using Python and Playwright, reducing manual workload by 60% and improving operational efficiency.",
      },
      {
        ...commonExperienceProps.treeInova,
        company: "Tree Iova",
        period: "Oct 2023 - Jan 2023",
        position: "RPA Developer",
        description: "Automated business processes using Python, Selenium and Pyautogui, reducing manual workload by 60% and improving operational efficiency.",
      },
      {
        ...commonExperienceProps.sogamax,
        company: "Sogamax Distribuidora",
        period: "Set 2023 - Oct 2023 (1 month)",
        position: "IT Intern",
        description: "Developed automation solutions with Python and Selenium while contributing to web development projects using React. Enhanced operational efficiency by 40% through RPA bots and improved user interfaces.",
      },
      {
        ...commonExperienceProps.highJump,
        company: "High Jump",
        period: "Set 2023 - Oct 2023 (1 month)",
        position: "IT Intern",
        description: "Developed automation solutions with Python and Selenium while contributing to web development projects using React. Enhanced operational efficiency by 40% through RPA bots and improved user interfaces.",
      }
    ],
    pt: [
      {
        ...commonExperienceProps.autoGlass,
        company: "Grupo AutoGlass",
        period: "Jan 2025 - Atual",
        position: "Desenvolvedor RPA",
        description: "Automatizei processos empresariais utilizando Python e Playwright, reduzindo a carga de trabalho manual em 60% e melhorando a eficiência operacional.",
      },
      {
        ...commonExperienceProps.treeInova,
        company: "Tree Inova",
        period: "Out 2023 - Jan 2025",
        position: "Desenvolvedor RPA",
        description: "Automatizei processos empresariais utilizando Python, Selenium e Pyautogui, reduzindo a carga de trabalho manual em 60% e melhorando a eficiência operacional.",
      },
      {
        ...commonExperienceProps.sogamax,
        company: "Sogamax Distribuidora",
        period: "Set 2023 - Out 2023 (1 mês)",
        position: "Desenvolvedor RPA",
        description: "Desenvolvi soluções de automação com Python e Selenium enquanto contribuía para projetos web com React. Aumentei a eficiência operacional em 40% através de bots RPA e melhorei interfaces de usuário.",
      },
      {
        ...commonExperienceProps.highJump,
        company: "High Jump",
        period: "Set 2023 - Out 2023 (1 mês)",
        position: "Desenvolvedor RPA",
        description: "Desenvolvi soluções de automação com Python e Selenium enquanto contribuía para projetos web com React. Aumentei a eficiência operacional em 40% através de bots RPA e melhorei interfaces de usuário.",
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