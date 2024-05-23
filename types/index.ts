import { links, projectsData } from '@/lib/data';

export type ProjectProps = (typeof projectsData)[number];

export type SectionName = (typeof links)[number]['name'];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
