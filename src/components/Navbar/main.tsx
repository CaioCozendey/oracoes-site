"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { useLanguage } from '@/app/context/LanguageContext';

type NavItem = {
  name: string;
  en: string;
  pt: string;
  path: string;
};

const Navbar = () => {
  const pathname = usePathname() || '';
  const { darkMode, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const navItems: NavItem[] = [
    {
      name: 'About',
      en: 'Home',
      pt: 'Início',
      path: '/'
    },
    {
      name: 'Experiences',
      en: 'Experience',
      pt: 'Experiência',
      path: '/pages/experiences'
    },
    {
      name: 'Projects',
      en: 'Projects',
      pt: 'Projetos',
      path: '/pages/projects'
    },
    {
      name: 'Techs',
      en: 'Techs',
      pt: 'Techs',
      path: '/pages/techs'
    },
    {
      name: 'Components',
      en: 'Components',
      pt: 'Componentes',
      path: '/pages/components'
    },
    {
      name: 'Tap',
      en: 'Tap',
      pt: 'Tap',
      path: '/pages/tap'
    },
  ];

  const languages = [
    {
      code: 'en',
      name: 'English',
      icon: '/icons/flags/usa_16.png'
    },
    {
      code: 'pt',
      name: 'Português',
      icon: '/icons/flags/brazil_16.png'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Rolando para baixo
        setVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Rolando para cima ou no topo
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Se o mouse estiver no topo da página (primeiros 100px)
      if (e.clientY < 100) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  const currentLanguage = languages.find(lang => lang.code === language);
  const getText = (item: { en: string, pt: string }) => item[language];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Navbar Desktop */}
      <nav className={`fixed top-0 left-0 right-0 z-50 shadow-lg font-titillium-web text-md transition-all duration-300 ${darkMode
        ? 'bg-gray-900 text-white shadow-gray-930 border-gray-700'
        : 'bg-white text-gray-800 shadow-gray-200 border-gray-200'
        } ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* ... restante do código da navbar permanece igual ... */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Ícone + Menu Hamburguer (mobile) */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden mr-4 p-2 rounded-md hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700' : ''
                  }`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Links Centrais (desktop) */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-16">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`hover:text-primary-blue transition-colors ${isActive(item.path)
                      ? darkMode
                        ? 'text-white font-semibold'
                        : 'text-gray-900 font-semibold'
                      : darkMode
                        ? 'text-gray-400'
                        : 'text-gray-600'
                      }`}
                  >
                    {getText(item)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Botões Direita */}
            <div className="flex items-center space-x-4">
              {/* Seletor de Idioma */}
              <div className="relative">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className={`cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700' : ''
                    }`}
                >
                  <span className="mr-1">
                    <Image
                      src={currentLanguage?.icon || '/default-icon.png'} // Fallback opcional
                      alt={currentLanguage?.name || 'Language icon'}
                      width={16}  // Largura em pixels
                      height={16} // Altura em pixels 
                    />
                  </span>
                  <ChevronDown size={16} className={`transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {languageDropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border ${darkMode
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    }`}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as 'en' | 'pt');
                          setLanguageDropdownOpen(false);
                        }}
                        className={`cursor-pointer w-full text-left px-4 py-2 flex items-center ${language === lang.code
                          ? darkMode
                            ? 'bg-gray-700 hover:bg-gray-600'
                            : 'bg-gray-100 hover:bg-gray-200'
                          : darkMode
                            ? 'hover:bg-gray-700'
                            : 'hover:bg-gray-100'
                          }`}
                      >
                        <span className="mr-2">
                          <Image
                            src={lang.icon}
                            alt={lang.name}
                            width={16}
                            height={16}
                          />
                        </span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Botão Dark/Light Mode */}
              <button
                onClick={toggleTheme}
                className={`cursor-pointer p-2 rounded-md hover:bg-gray-200 ${darkMode ? 'hover:bg-gray-700' : ''
                  }`}
                aria-label={darkMode ? 'Light mode' : 'Dark mode'}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-40 pt-16 md:hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.name}`}
                  href={item.path}
                  className={`py-3 px-4 rounded-md transition-colors ${isActive(item.path)
                    ? darkMode
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-200 text-gray-900 font-semibold'
                    : darkMode
                      ? 'hover:bg-gray-700 text-gray-400'
                      : 'hover:bg-gray-200 text-gray-600'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {getText(item)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Espaço para o conteúdo abaixo da navbar fixa */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;