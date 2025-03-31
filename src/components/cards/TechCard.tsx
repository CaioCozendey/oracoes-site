// components/cards/TechCard.tsx
'use client';

import { useTheme } from '@/app/context/ThemeContext';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface TechCardProps {
  name: string;
  experience: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Especialista';
  icon?: IconType;
  color?: string;
}

const experienceColors = {
  'Iniciante': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'Intermediário': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'Avançado': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Especialista': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
};

const TechCard = ({ name, experience = 'Intermediário', color = '#3B82F6', icon: Icon }: TechCardProps) => {
  const { darkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-lg p-5 shadow-md border border-gray-200 dark:border-gray-700 flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white' }`}
    >
      <div className='flex items-center gap-4 mb-3'>
        {Icon && (
          <div 
            className="p-2 rounded-md flex-shrink-0"
            style={{ 
              backgroundColor: `${color}20`,
              color: color
            }}
          >
            <Icon size={20} />
          </div>
        )}
        <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {name}
        </h3>
      </div>
      
      <div className="mt-auto">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${experienceColors[experience]}`}>
          {experience}
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;