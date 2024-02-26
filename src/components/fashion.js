import { useEffect } from "react";
import BarLoader from "./barLoader";
import { timeFunc } from "../hooks&functions/timeHandler";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { EmptyListPage } from "./errorpage";
import { Img } from "react-image";
import { ImageLoader, ImageUnLoader } from "./imageLoader";
import { useQuery } from "react-query";
import { News } from "./content";

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
