import { IconType } from 'react-icons';

export type Language = 'en' | 'pt';

export type TechIcon = IconType | string; // Define TechIcon here

export interface TechItem {
  name: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  icon?: TechIcon;
  color?: string;
  tag?: 'RPA' | 'Frontend';
}