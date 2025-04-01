'use client';

import React from 'react';
import { useTheme } from '@/app/context/ThemeContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TechIcon } from '@/utils/types/tech';

interface TechCardProps {
  name: string;
  description: string;
  icon?: TechIcon;
  color?: string;
  tag?: 'RPA' | 'Frontend';
}

const TechCard = ({
  name,
  description,
  color = '#3B82F6',
  icon,
  tag
}: TechCardProps) => {
  const { darkMode } = useTheme();

  const isImageIcon = (icon: TechIcon): icon is string => {
    return typeof icon === 'string' &&
      (icon.startsWith('/') ||
        /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(icon));
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-900 backdrop-blur-xs flex flex-col ${darkMode ? '' : ''
        }`}
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
    </motion.div>
  );
};

export default TechCard;