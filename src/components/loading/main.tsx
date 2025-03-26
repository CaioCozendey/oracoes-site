// components/InlineLoading.tsx
'use client';

import { useTheme } from '@/app/context/ThemeContext';

const Loading = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const { darkMode } = useTheme();
  
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-3',
    lg: 'h-8 w-8 border-4'
  };

  return (
    <div className={`inline-block animate-spin rounded-full ${sizeClasses[size]} ${darkMode ? 'border-t-blue-400 border-gray-600' : 'border-t-blue-600 border-gray-200'}`}
         style={{ animationDuration: '0.8s' }} />
  );
};

export default Loading;