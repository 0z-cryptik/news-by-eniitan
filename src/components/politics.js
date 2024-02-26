import { useEffect } from "react";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { useQuery } from "react-query";
import { News } from "./news";

export const Politics = () => {
  const { setActiveCategory } = useList();

  const [getNews] = useGetNews("politics");

  const { data, error, isLoading } = useQuery("politicsNews", getNews);

  useEffect(() => {
    setActiveCategory("politics");
  }, []);

  return (
    <News
      data={data}
      loading={isLoading}
      error={error}
    />
  );
};
