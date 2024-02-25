import React, { useContext, createContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import axios from "axios";

export const ListContext = createContext();
export const useList = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dark, setDark] = useLocalStorage("darkMode", true);
  const [viewMenu, setViewMenu] = useState(false);

  return (
    <ListContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        dark,
        setDark,
        viewMenu,
        setViewMenu
      }}>
      {children}
    </ListContext.Provider>
  );
};

export const useGetNews = (category) => {
  const getNews = async () => {
    const news = await axios(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_API_KEY}`
    );

    const posts = await news.data.results;

    const filteredList = posts.filter((item) => item.multimedia.length);

    return filteredList;
  };

  return [getNews];
};
