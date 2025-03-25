"use client";

import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  logo: string;
  company: string;
  period: string;
  position: string;
  description: string;
  skills?: string[];
  href: string;
  logoClass: string;
}

export const ExperienceCard = ({
  logo,
  company,
  period,
  position,
  description,
  skills = [],
  href,
  logoClass,
}: ExperienceCardProps) => {
  const { darkMode } = useTheme();

  return (
    <Link href={href} passHref>
      <div className={`rounded-xl p-6 transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-md hover:shadow-lg cursor-pointer group`}>
        <div className="flex items-start gap-4">
          {/* Logo da Empresa - Container quadrado com altura máxima */}
          <div className="flex-shrink-0 h-full">
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} group-hover:scale-105 transition-transform ${logoClass || ''} h-full aspect-square flex items-center justify-center`}>
              <Image
                src={logo}
                alt={`${company} logo`}
                width={80}  // Aumentado para melhor qualidade
                height={80} // Aumentado para melhor qualidade
                className='object-contain w-full h-full max-h-[80px]' // Ocupa todo o espaço disponível
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-500 transition-colors`}>
                {company}
              </h3>
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                {period}
              </span>
            </div>

            <h4 className={`mt-1 font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {position}
            </h4>

            <p className={`mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
              {description}
            </p>

            {/* Habilidades/Tecnologias */}
            {skills.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'} group-hover:bg-blue-500 group-hover:text-white transition-colors`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Ícone de seta (opcional) */}
            <div className="mt-4 flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-500 transition-colors`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};