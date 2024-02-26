import { useEffect } from "react";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { useQuery } from "react-query";
import { News } from "./content";

export const Movies = () => {
  const { setActiveCategory } = useList();

  const [getNews] = useGetNews("movies");

  const { data, error, isLoading } = useQuery("movieNews", getNews);

  useEffect(() => {
    setActiveCategory("movies");
  }, []);

  return (
    <News
      data={data}
      loading={isLoading}
      error={error}
    />
  );
};
