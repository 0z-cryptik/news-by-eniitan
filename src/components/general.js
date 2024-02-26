import { useEffect } from "react";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import BarLoader from "./barLoader";
import { EmptyListPage } from "./errorpage";
import { useQuery } from "react-query";
import { News } from "./content";

export const General = () => {
  const { setActiveCategory } = useList();

  const [getNews] = useGetNews("home");

  const { data, error, isLoading } = useQuery("generalNews", getNews);

  useEffect(() => {
    setActiveCategory("general");
  }, []);

  return (
    <News
      data={data}
      loading={isLoading}
      error={error}
    />
  );
};
