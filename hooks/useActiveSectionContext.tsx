import { ActiveSectionContext } from '@/context/active-section-context';
import { useContext } from 'react';

export default function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionContextProvider',
    );
  }
  return context;
}
