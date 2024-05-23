'use client';

import {
  ActiveSectionContextProviderProps,
  ActiveSectionContextType,
  SectionName,
} from '@/types';
import React, { createContext, useState } from 'react';

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSection() {
  const context = React.useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error(
      'useActiveSection must be used within a ActiveSectionContextProvider',
    );
  }
  return context;
}
