"use client";

import BackParticles from "@/components/ParticleBackground/main";
import { useLanguage } from "./context/LanguageContext";
import { useTheme } from "./context/ThemeContext";
import Typewriter from "@/components/maquina_de_escrever/main";

const About = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  // Conteúdo multilíngue
  const content = {
    title: {
      en: "RPA Developer",
      pt: "Desenvolvedor RPA"
    },
    name: {
      en: "Caio Dias Cozendey",
      pt: "Caio Dias Cozendey"
    },
    description: {
      en: "I automate processes with RPA using Python, Playwright, and Selenium, building intelligent workflows that integrate systems and optimize operations. As a Frontend Developer, I craft modern interfaces with React, Next.js, and TypeScript, combining responsive design (Tailwind CSS) with exceptional performance for memorable digital experiences.",
      pt: "Automatizo processos com RPA usando Python, Playwright e Selenium, criando fluxos inteligentes que integram sistemas e otimizam operações. Como desenvolvedor Frontend, crio interfaces modernas com React, Next.js e TypeScript, combinando design responsivo (Tailwind CSS) com performance excepcional para experiências digitais memoráveis."
    },
    project: {
      en: "Discuss for Project:",
      pt: "Discutir Projeto:"
    },
    cta: {
      en: "WhatsApp",
      pt: "WhatsApp"
    }
  };

  const getText = (key: keyof typeof content) => content[key][language];

  return (
    <div className="relative min-h-screen">
      {/* Background com partículas */}
      <BackParticles />

      {/* Conteúdo principal */}
      <div className={`relative z-10 transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto backdrop-blur-sm bg-opacity-80 rounded-xl p-8" >
            {/* Cabeçalho */}
            <div className="mb-12">
              <h2 className={`text-xl font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {getText('title')}
              </h2>
              <h1 className="text-4xl font-bold mt-2">
                {getText('name')}
              </h1>
            </div>

            {/* Descrição */}
            <div className="mb-12">
              <p className="text-lg leading-relaxed">
                <Typewriter
                  text={getText('description')}
                  speed={25}
                  delay={1000}
                  key={language}
                />
              </p>
            </div>

            {/* Separador */}
            <div className={`h-px w-full mb-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />

            {/* Chamada para ação */}
            <div className="space-y-4">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {getText('project')}
              </h3>
              <a
                href="https://wa.me/SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              >
                {getText('cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;