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
      <div className={`w-full xl:py-5 ${dark ? `bg-black` : ``}`}>
        <form
          onSubmit={submitHandler}
          className={`w-[60%] pl-2 h-[3rem] border rounded-xl my-5 ${
            dark ? `bg-black` : `bg-white`
          }`}>
          <input
            type="text"
            ref={text}
            value={val}
            placeholder="search anything..."
            onChange={onChange}
            className={`w-[75%] md:w-[85%] h-[80%] focus:outline-none rounded-xl ${
              dark ? "bg-black text-white" : ""
            }`}
          />

          <button
            id="btns"
            type="submit"
            className={`border rounded-xl w-[25%] md:w-[15%] h-full ${
              dark
                ? "bg-[#243744] lg:hover:bg-[#0C3758] lg:hover:text-white text-gray-400"
                : `bg-blue-300 lg:hover:bg-gradient-to-r from-blue-200 to-blue-600 lg:hover:text-white`
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
      styling={`block border-b-[0.5px] border-b-gray-700 w-[90%] mx-auto pb-6 my-6 ${
        activeCategory === "search"
          ? "text-red-700  border-b-gray-700"
          : ""
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
      styling={`text-sm p-5 hidden lg:inline ${
        activeCategory === "search"
          ? "text-blue-700 "
          : "hover:text-blue-700"
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
