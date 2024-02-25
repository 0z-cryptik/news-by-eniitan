import { useEffect } from "react";
import BarLoader from "./barLoader";
import { timeFunc } from "../hooks&functions/timeHandler";
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { EmptyListPage } from "./errorpage";
import { ImageLoader, ImageUnLoader } from "./imageLoader";
import { Img } from "react-image";
import { useQuery } from "react-query";
import { News } from "./content";

export const Arts = () => {
  const { dark, setActiveCategory } = useList();

  const [getNews] = useGetNews("arts");

  const { data, error, isLoading } = useQuery("artsNews", getNews);

  useEffect(() => {
    setActiveCategory("arts");
  }, []);

  if (error && !data.length) return <EmptyListPage />;

  if (isLoading) return <BarLoader />;

  return <News data={data} />;
};
