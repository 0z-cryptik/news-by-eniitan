import { useRef, useEffect } from "react";
import { useList } from "../hooks&functions/myHooks";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "./navlink";

export const Search = ({ onSubmit, val, onChange }) => {
  let { dark } = useList();
  let text = useRef();

  useEffect(() => {
    text.current.focus();
  }, []);

  const submitHandler = (e) => {
    onSubmit(e);
    text.current.blur();
  };

  return (
    <center>
      <div
        className={`${
          dark ? `w-full bg-black xl:py-5` : `w-full xl:py-5`
        }`}>
        <form
          onSubmit={submitHandler}
          className={`${
            dark
              ? `bg-black w-[60%] pl-2 h-[3rem] border rounded-xl my-5`
              : `bg-white w-[60%] h-[3rem] pl-2 border rounded-xl my-5`
          }`}>
          <input
            type="text"
            ref={text}
            value={val}
            placeholder="search anything..."
            onChange={onChange}
            className={`${
              dark
                ? "w-[75%] md:w-[85%] h-[90%] bg-black text-white focus:outline-none rounded-xl"
                : "w-[75%] md:w-[85%] h-[90%] focus:outline-none rounded-xl"
            }`}
          />

          <button
            id="btns"
            type="submit"
            className={`${
              dark
                ? "bg-[#243744] border rounded-xl w-[25%] md:w-[15%] h-full lg:hover:bg-[#0C3758] lg:hover:text-white text-gray-400"
                : `bg-blue-300 border rounded-xl w-[25%] md:w-[15%] h-full lg:hover:bg-gradient-to-r from-blue-200 to-blue-600 lg:hover:text-white`
            }`}>
            <FaSearch className="mx-auto" />
          </button>
        </form>
      </div>
    </center>
  );
};

export const SearchButton4MenuBar = () => {
  const { activeCategory, menuFunc } = useList();
  return (
    <NavLink
      path={"/search"}
      styling={`${
        activeCategory === "search"
          ? "text-red-700 block border-b-[0.5px] border-b-gray-700 w-[90%] mx-auto pb-6 my-6"
          : "block border-b-[0.5px] border-b-gray-700 w-[90%] mx-auto pb-6 my-6"
      }`}
      onClick={() => menuFunc("search")}>
      <FaSearch
        size={"2rem"}
        className="mx-auto"
      />
    </NavLink>
  );
};

export const SearchButton4NavBar = () => {
  const { activeCategory, setActiveCategory } = useList();
  return (
    <NavLink
      path={"/search"}
      styling={`${
        activeCategory === "search"
          ? "text-sm p-5 hidden lg:inline text-blue-700 "
          : " text-sm p-5 hidden lg:inline hover:text-blue-700"
      }`}
      onClick={() => {
        setActiveCategory("search");
      }}>
      <FaSearch
        className="inline hover:scale-110"
        size={"1.5rem"}
      />
    </NavLink>
  );
};
