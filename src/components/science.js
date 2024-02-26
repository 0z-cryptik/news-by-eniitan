import { useEffect } from "react";
import BarLoader from "./barLoader";
import {timeFunc} from '../hooks&functions/timeHandler';
import { useList, useGetNews } from "../hooks&functions/myHooks";
import { EmptyListPage } from "./errorpage";
import { Img } from "react-image";
import { ImageLoader, ImageUnLoader } from "./imageLoader";
import { useQuery } from "react-query";
import { News } from "./content"

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
