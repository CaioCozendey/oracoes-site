"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext";
import { Github, Linkedin, Mail, Smartphone  } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Conteúdo multilíngue
  const content = {
    connect: {
      en: "Connect",
      pt: "Conectar"
    },
    contact: {
      en: "Contact",
      pt: "Contato"
    },
    links: {
      en: "Links",
      pt: "Links"
    },
    rights: {
      en: "All rights reserved",
      pt: "Todos os direitos reservados"
    },
    builtWith: {
      en: "Built with",
      pt: "Desenvolvido com"
    },
    navigation: [
      { 
        name: { en: "About Me", pt: "Sobre Mim" }, 
        url: "/" 
      },
      { 
        name: { en: "Experiences", pt: "Experiências" }, 
        url: '/pages/experiences'
      },
      { 
        name: { en: "Projects", pt: "Projetos" }, 
        url: '/pages/projects'
      },
      { 
        name: { en: "Techs", pt: "Techs" }, 
        url: '/pages/techs'
      }
    ]
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/caiocozendey",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/caio-dias-cozendey-502a1418a/",
      icon: <Linkedin size={20} />,
    },
    {
      name: "E-mail",
      url: "mailto:caiocozendey@hotmail.com",
      icon: <Mail size={20} />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5522998562641",
      icon: <Smartphone size={20} />,
    }
  ];

  // Função para pegar texto com base no idioma
  const getText = (item: { en: string; pt: string }) => item[language];

  return (
    <footer className={`py-8 mt-auto transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-gray-300 border-t border-gray-800' 
        : 'bg-gray-100 text-gray-800 border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:flex md:justify-between md:items-start">
          
          {/* Redes Sociais */}
          <div className="col-span-2 md:col-auto mb-6 md:mb-0">
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {getText(content.connect)}
            </h3>
            <div className="grid grid-cols-4 gap-4 md:flex md:space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:text-primary transition-colors flex justify-center hover:text-primary-blue'
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="mb-6 md:mb-0">
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {getText(content.contact)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="mailto:seu-email@exemplo.com" 
                  className='flex items-center text-sm md:text-base duration-75 hover:text-primary-blue'
                >
                  <Mail className="mr-2 flex-shrink-0" size={16} /> 
                  <span className="truncate"> caiocozendey@hotmail.com </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="tel:+5511999999999" 
                  className={`flex items-center text-sm md:text-base duration-75 ${
                    darkMode ? 'hover:text-primary-blue' : 'hover:text-primary-blue'
                  }`}
                >
                  <Smartphone className="mr-2 flex-shrink-0" size={16} /> 
                  (22) 99856-2641
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {getText(content.links)}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:block md:space-y-2">
              {content.navigation.map((link) => (
                <li key={link.url}>
                  <Link 
                    href={link.url} 
                    className='text-sm md:text-base hover:text-primary-blue duration-75'
                  >
                    {getText(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className={`border-t mt-8 pt-6 text-center ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className="text-sm">
            &copy; {currentYear} Caio Dias Cozendey. {getText(content.rights)}.
          </p>
          <p className="mt-2 text-xs md:text-sm">
            {getText(content.builtWith)}{" "}
            <Link 
              href="https://nextjs.org/" 
              target="_blank" 
              className={`hover:underline ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Next.js
            </Link>,{" "}
            <Link 
              href="https://tailwindcss.com/" 
              target="_blank" 
              className={`hover:underline ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Tailwind
            </Link>{" "}
            e{" "}
            <Link 
              href="https://www.typescriptlang.org/" 
              target="_blank" 
              className={`hover:underline ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              TypeScript
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;