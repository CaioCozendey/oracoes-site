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