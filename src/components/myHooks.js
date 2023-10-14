import React, { useContext, createContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export const ListContext = createContext();
export const useList = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dark, setDark] = useLocalStorage("darkMode", false);
  const [viewMenu, setViewMenu] = useState(false);

  return (
    <ListContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        dark,
        setDark,
        viewMenu,
        setViewMenu,
      }}>
      {children}
    </ListContext.Provider>
  );
};
