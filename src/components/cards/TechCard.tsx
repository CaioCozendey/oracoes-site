'use client';

import React from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import Image from 'next/image';
import { IconType } from 'react-icons';
import isImageIcon from '@/utils/images/isImagesOrIcon';

interface TechCardProps {
  name: string;
  description: string;
  icon?: IconType | string;
  color?: string;
  tag?: 'RPA' | 'Frontend';
  addClassDark?: string;
  addClassWhite?: string;
}

const TechCard = ({
  name,
  description,
  color = '#3B82F6',
  icon,
  addClassDark,
  addClassWhite
}: TechCardProps) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-900 
        backdrop-blur-xs flex flex-col transition-transform duration-300 ease-in-out
        hover:-translate-y-2 hover:shadow-lg
        ${darkMode ? `${addClassDark}` : `${addClassWhite}`}
      `}
    >
      {/* Container principal com posição relativa */}
      <div className="relative">
        {/* Conteúdo do card */}
        <div className='flex items-center gap-4'>
          {icon && (
            <div
              className="p-2 rounded-md flex-shrink-0"
              style={{
                backgroundColor: `${color}20`,
                color: color
              }}
            >
              {isImageIcon(icon) ? (
                <div className="w-5 h-5 relative">
                  <Image
                    className=''
                    src={icon}
                    alt={name}
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized={icon.startsWith('/icons')}
                  />
                </div>
              ) : (
                React.createElement(icon, { size: 20 })
              )}
            </div>
          )}
          <div className="flex-1">
            <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {name}
            </h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;