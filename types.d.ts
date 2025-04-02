// types.d.ts
import { IconType } from 'react-icons';

type ExperienceLevel =
  | 'Beginner' | 'Iniciante'
  | 'Intermediate' | 'Intermediário' 
  | 'Advanced' | 'Avançado'
  | 'Expert' | 'Especialista';

type Language = 'en' | 'pt'; // Added quotes to make these proper string literal types

declare global {
  interface TechCardProps {
    name: string; // Changed from Language to string since you're passing getText(tech.name)
    experience: ExperienceLevel;
    icon?: IconType;
    color?: string;
    darkMode?: boolean;
  }
}