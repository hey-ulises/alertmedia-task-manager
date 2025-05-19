'use client';
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <GlobalContext.Provider value={{ selectedTask, setSelectedTask }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);