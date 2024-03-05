import { useEffect } from "react";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { useQuery } from "react-query";
import { News } from "./news";

export const Fashion = () => {
  const { setActiveCategory } = useList();

  const [getNews] = useGetNews("fashion");

  const { data, error, isLoading } = useQuery("fashionNews", getNews);

  useEffect(() => {
    setActiveCategory("fashion");
  }, []);

  return (
    <News
      data={data}
      loading={isLoading}
      error={error}
    />
  );
};
