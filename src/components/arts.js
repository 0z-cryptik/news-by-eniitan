import { useEffect } from "react";
import BarLoader from "./barLoader";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { EmptyListPage } from "./errorpage";
import { useQuery } from "react-query";
import { News } from "./news";

export const Arts = () => {
  const { dark, setActiveCategory } = useList();

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
