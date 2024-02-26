import { useEffect } from "react";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { useQuery } from "react-query";
import { News } from "./news";

export const Tech = () => {
  const { setActiveCategory } = useList();

  const [getNews] = useGetNews("technology");

  const { data, error, isLoading } = useQuery("techNews", getNews);

  useEffect(() => {
    setActiveCategory("tech");
  }, []);

  return (
    <News
      data={data}
      loading={isLoading}
      error={error}
    />
  );
};
