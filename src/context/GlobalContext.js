'use client';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ selectedTask, setSelectedTask, isSidePanelOpen, setIsSidePanelOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);