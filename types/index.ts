import { links, projectsData } from '@/lib/data';

export type ProjectProps = (typeof projectsData)[number];

export type SectionName = (typeof links)[number]['name'];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type useSectionInViewProps = {
  sectionName: SectionName;
};

export type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export type Theme = 'light' | 'dark';

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
