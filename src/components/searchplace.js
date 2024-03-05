import { useEffect, useState } from "react";
import { Search } from "./search";
import axios from "axios";
import { timeFunc } from "../hooks&functions/timeHandler";
import { useList } from "../hooks&functions/myHooks";
import { Bars, Oval } from "react-loader-spinner";
import { Img } from "react-image";
import { ImageLoader, ImageUnLoader } from "./imageLoader";

export const SearchComp = () => {
  const { dark, setActiveCategory } = useList();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const conSearchList = searchList.filter(
    (item) => item.multimedia && item.multimedia.length
  );

  let onSearchchange = (e) => setSearchTerm(e.target.value);

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`
      );
      const results = await res.data.response.docs;
      setSearchList(results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const fetchData = async (pageNumber) => {
    try {
      const res = await axios(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${pageNumber}&q=${searchTerm}&sort=newest&api-key=${process.env.REACT_APP_API_KEY}`
      );
      setSearchList([...searchList, ...res.data.response.docs]);
      setFetchLoading(false);
    } catch (err) {
      console.log(err);
      setPage((prevPage) => prevPage - 1);
      setFetchLoading(false);
    }
  };

  const fetchHandler = () => {
    setPage((prevPage) => prevPage + 1);
    setFetchLoading(true);
    fetchData(page + 1);
  };

  useEffect(() => {
    setActiveCategory("search");
  }, []);

  if (loading) {
    return (
      <div className={`pt-[4rem] h-screen ${dark ? "bg-black" : ""}`}>
        <Search
          onSubmit={onSearchSubmit}
          val={searchTerm}
          onChange={onSearchchange}
        />
        <div className="h-[75vh] flex items-center">
          <Bars
            wrapperClass="mx-auto"
            color="blue"
          />
        </div>
      </div>
    );
  }

  if (!conSearchList.length) {
    return (
      <div
        className={`pt-[4rem] h-screen overflow-hidden ${
          dark ? "bg-black" : ""
        }`}>
        <Search
          onSubmit={onSearchSubmit}
          val={searchTerm}
          onChange={onSearchchange}
        />
        <div className="w-full h-screen"></div>
      </div>
    );
  }

  return (
    <div className={`${dark ? `bg-black pt-[4rem]` : `pt-[4rem]`}`}>
      <Search
        onSubmit={onSearchSubmit}
        val={searchTerm}
        onChange={onSearchchange}
      />

      <div
        className={`md:grid md:grid-cols-2 md:gap-10 md:px-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8 ${
          dark ? `bg-black text-white` : ``
        }`}>
        {conSearchList.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:border items-center overflow-hidden">
            <figure className="order-2">
              <Img
                id="op"
                src={[
                  `https://static01.nyt.com/${item.multimedia[0].url}`,
                  `https://static01.nyt.com/${item.multimedia[1].url}`,
                  `https://static01.nyt.com/${item.multimedia[2].url}`
                ]}
                className="lg:hover:opacity-70 mb-5 h-[14rem] w-full"
                loader={<ImageLoader />}
                unloader={<ImageUnLoader />}
              />

              <figcaption className="px-5 pb-6">
                <p className="mb-3 text-gray-600">
                  {timeFunc(item.pub_date)}
                </p>

                <a
                  href={item.web_url}
                  target="_blank"
                  className="text-2xl cursor-pointer font-bold">
                  {item.headline.main}
                </a>

                <p className="mt-3">{item.abstract}</p>

                <p className="order-1 my-3 text-red-500">
                  {item.byline.original}
                </p>
              </figcaption>
            </figure>
          </div>
        ))}

        <Oval
          color="blue"
          secondaryColor={`${dark ? "grey" : "#D0D3D4"}`}
          visible={fetchLoading ? true : false}
          wrapperStyle={{
            display: `${fetchLoading ? "flex" : "none"}`,
            justifyContent: "center",
            alignItems: "center"
          }}
        />
      </div>

      <center>
        <button
          id="btns"
          onClick={fetchHandler}
          className={`md:my-12 w-[7rem] rounded-md h-[2rem] mb-6 ${
            fetchLoading ? "hidden" : ""
          } ${
            dark
              ? `bg-transparent border border-white lg:hover:bg-[#0C3758] text-white`
              : `bg-blue-300 hover:bg-transparent hover:text-gray-400 hover:border-2`
          }`}>
          fetch more
        </button>
      </center>
    </div>
  );
};
