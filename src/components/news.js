import { useList } from "../hooks&functions/myHooks";
import { Img } from "react-image";
import { ImageLoader, ImageUnLoader } from "./imageLoader";
import { timeFunc } from "../hooks&functions/timeHandler";
import { EmptyListPage } from "./errorpage";
import BarLoader from "./barLoader";

export const News = ({ data = [], error, loading }) => {
  const { dark } = useList();

  if (!data.length && error) {
    return <EmptyListPage />;
  }

  if (loading) {
    return <BarLoader />;
  }

  return (
    <div
      id="bg"
      className={`pt-[4rem] lg:pt-[7rem] md:grid md:grid-cols-2 md:gap-10 md:px-8 md:pb-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8 ${
        dark ? `bg-black  text-white ` : ``
      }`}>
      {data.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col md:border items-center overflow-hidden`}>
          <figure className="order-2">
            <Img
              id="op"
              src={[
                item.multimedia[0].url,
                item.multimedia[1].url,
                item.multimedia[2].url
              ]}
              className="lg:hover:opacity-70 mb-5 h-[14rem] w-full"
              loader={<ImageLoader />}
              unloader={<ImageUnLoader />}
            />
            <figcaption className="px-5 pb-6">
              <p className="mb-3 text-gray-600">
                {timeFunc(item.published_date)}
              </p>

              <a
                href={item.url}
                target="_blank"
                className="text-2xl cursor-pointer font-bold"
                rel="noreferrer">
                {item.title}
              </a>

              <p className="mt-3">{item.abstract}</p>

              <p className="order-1 my-3 text-red-500">{item.byline}</p>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};
