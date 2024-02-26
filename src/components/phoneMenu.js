import { useList } from "../hooks&functions/myHooks";
import { NavLink } from "./navlink";
import { MdCancelPresentation } from "react-icons/md";
import {
  FaSearch,
  FaShoppingBag,
  FaLaptop,
  FaIcons,
  FaVideo,
} from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { AiFillPicture, AiOutlineCode } from "react-icons/ai";
import { ImLab } from "react-icons/im";

export const PhoneMenu = () => {
  const { viewMenu, setViewMenu, dark, activeCategory, menuFunc } = useList();
  return (
    <div
      style={{
        transform: `${
          viewMenu ? "translate3d(40vw, 0, 0)" : "translate3d(100vw, 0, 0)"
        }`,
        zIndex: "30",
        transition: "transform .2s linear"
      }}
      className={`${
        dark
          ? `fixed flex flex-col w-[60%] md:hidden h-[100vh] bg-black text-white text-xl pb-6`
          : `fixed w-[60%] bg-white flex flex-col h-[100vh] md:hidden text-black text-xl pb-6`
      }`}>
      <button
        onClick={() => setViewMenu(false)}
        className="block pl-1 w-fit">
        <MdCancelPresentation size={"2rem"} />
      </button>

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

      <NavLink
        path={"/general"}
        styling={`${
          activeCategory === "general"
            ? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
            : "block py-[1rem] mx-3"
        }`}
        onClick={() => menuFunc("general")}>
        <FaIcons className="inline -mt-1 mr-3" />
        General
      </NavLink>

      <NavLink
        path={"/arts"}
        styling={`${
          activeCategory === "arts"
            ? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
            : "block py-[1rem] mx-3"
        }`}
        onClick={() => menuFunc("arts")}>
        <AiFillPicture className="inline -mt-1 mr-3" />
        Arts
      </NavLink>

      <NavLink
        path={"/politics"}
        styling={`${
          activeCategory === "politics"
            ? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
            : "block py-[1rem] mx-3"
        }`}
        onClick={() => menuFunc("politics")}>
        <GiWorld className="inline -mt-1 mr-3" />
        Politics
      </NavLink>

      <NavLink
        path={"/movies"}
        styling={`${
          activeCategory === "movies"
            ? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
            : "block py-[1rem] mx-3"
        }`}
        onClick={() => menuFunc("movies")}>
        <FaVideo className="inline -mt-1 mr-3" />
        Movies
      </NavLink>

      <NavLink
        path={"/fashion"}
        styling={`${
          activeCategory === "fashion"
            ? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
            : "block py-[1rem] mx-3"
        }`}
        onClick={() => menuFunc("fashion")}>
        <FaShoppingBag className="inline -mt-1 mr-3" />
        Fashion
      </NavLink>

      <NavLink
        path={"/science"}
        styling={`${
          activeCategory === "science"
            ? "block mx-3 py-[1rem] border-b border-b-red-700 text-red-700"
            : "block py-[1rem] mx-3"
        }`}
        onClick={() => menuFunc("science")}>
        <ImLab className="inline -mt-1 mr-3" />
        Science
      </NavLink>

      <NavLink
        path={"/tech"}
        styling={`${
          activeCategory === "tech"
            ? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
            : "block py-[1rem] mx-3"
        }`}
        onClick={() => menuFunc("tech")}>
        <FaLaptop className="inline -mt-1 mr-3" />
        Technology
      </NavLink>

      <span
        id="logo"
        className={`w-fit mx-auto mt-auto ${
          dark ? "text-gray-700" : "text-gray-300"
        }`}>
        <AiOutlineCode
          size={"2rem"}
          className="inline -mt-1 mr-1"
        />
        Built By Eniitan
      </span>
    </div>
  );
};
