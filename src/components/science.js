import { useEffect } from "react";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { useQuery } from "react-query";
import { News } from "./news"

export const Science = () => {
  const { dark, setActiveCategory } = useList();

  const [getNews] = useGetNews("science");

  const { data, error, isLoading } = useQuery("scienceNews", getNews);

  useEffect(() => {
    setActiveCategory("science");
  }, []);

  return (
    <News
      data={data}
      loading={isLoading}
      error={error}
    />
  );
};
