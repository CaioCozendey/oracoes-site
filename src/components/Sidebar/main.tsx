'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { useTheme } from '@/app/context/ThemeContext';

type ComponentItem = {
  name: string;
  path: string;
  en: string;
  pt: string;
};

type ComponentCategory = {
  title: string;
  en: string;
  pt: string;
  items: ComponentItem[];
};

interface SidebarProps {
  componentsData: ComponentCategory[];
  activeComponent: string | null;
  setActiveComponent: (path: string | null) => void;
}

const Sidebar = ({ componentsData, activeComponent, setActiveComponent }: SidebarProps) => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  // Declara getText antes de usar no useMemo
  const getText = (item: { en: string; pt: string }) => item[language];

  // Ordena os componentes mantendo as categorias na ordem original
  const sortedComponentsData = useMemo(() => {
    return componentsData.map(category => ({
      ...category,
      items: [...category.items].sort((a, b) => {
        const textA = getText(a).toLowerCase();
        const textB = getText(b).toLowerCase();
        return textA.localeCompare(textB);
      })
    }));
  }, [componentsData, language, getText]); // Adicione getText nas dependências

  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
    componentsData.reduce((acc, category) => {
      acc[category.title] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className={`w-64 h-screen fixed left-0 top-0 pt-16 overflow-y-auto transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-800 text-gray-200 border-gray-700' 
        : 'bg-white text-gray-800 border-gray-200'
    } border-r`}>
      <div className="p-4 space-y-4">
        {sortedComponentsData.map((category) => (
          <div key={category.title} className="space-y-1">
            <button
              onClick={() => toggleCategory(category.title)}
              className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-md transition-colors ${
                darkMode
                  ? 'hover:bg-gray-700 text-gray-200'
                  : 'hover:bg-gray-100 text-gray-800'
              } font-medium cursor-pointer`}
            > 
              <span>{getText(category)}</span>
              <svg
                className={`w-4 h-4 transition-transform ${expandedCategories[category.title] ? 'rotate-0' : '-rotate-90'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedCategories[category.title] && (
              <ul className={`ml-4 space-y-1 border-l pl-4 ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                {category.items.map((component) => (
                  <li key={component.path}>
                    <button
                      onClick={() => setActiveComponent(component.path)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-sm cursor-pointer transition-colors ${
                        activeComponent === component.path
                          ? darkMode
                            ? 'bg-blue-900/50 text-blue-200'
                            : 'bg-blue-100 text-blue-800'
                          : darkMode
                            ? 'hover:bg-gray-700 text-gray-300'
                            : 'hover:bg-gray-200 text-gray-600'
                      }`}
                    >
                      {getText(component)}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;