import { useEffect } from "react";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { useQuery } from "react-query";
import { News } from "./news";

export const Arts = () => {
  const { setActiveCategory } = useList();

  const [getNews] = useGetNews("arts");

  const { data, error, isLoading } = useQuery("artsNews", getNews);

  useEffect(() => {
    setActiveCategory("arts");
  }, []);

  return (
    <News
      data={data}
      loading={isLoading}
      error={error}
    />
  );
};
