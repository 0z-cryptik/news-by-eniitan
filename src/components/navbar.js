import "../App.css";
import { useList } from "../hooks&functions/myHooks";
import {
  FaSearch,
  FaShoppingBag,
  FaLaptop,
  FaIcons,
  FaVideo
} from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { AiFillPicture } from "react-icons/ai";
import { ModeToggle } from "./toggleBtn";
import { RiMenu4Fill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { NavLink } from "./navlink";

export const NavBar = () => {
  const {
    dark,
    activeCategory,
    setActiveCategory,
    setViewMenu,
    viewMenu
  } = useList();


  return (
    <div>
      <div
        id="bg"
        className={`${
          dark
            ? "bg-[#16242E] text-white pt-3 flex flex-row h-[4rem] fixed z-10 w-full"
            : "bg-slate-300 pt-3 flex fixed z-10 w-full flex-row h-[4rem]"
        }`}>
        <div className="hidden lg:block">
          <NavLink
            path={"/general"}
            onClick={() => setActiveCategory("general")}
            styling={`${
              activeCategory === "general"
                ? "text-sm p-5 border-b-2 border-blue-700 text-blue-700"
                : "text-sm p-5 border-b-2 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
            }`}>
            <FaIcons className="inline -mt-1 pr-1" />
            General
          </NavLink>

          <NavLink
            path={"/arts"}
            onClick={() => setActiveCategory("arts")}
            styling={`${
              activeCategory === "arts"
                ? "text-sm p-5 border-b-2 border-blue-700 text-blue-700 ml-1"
                : "text-sm p-5 border-b-2 ml-1 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
            }`}>
            <AiFillPicture className="inline -mt-1 pr-1" />
            Arts
          </NavLink>

          <NavLink
            path={"/politics"}
            onClick={() => setActiveCategory("politics")}
            styling={`${
              activeCategory === "politics"
                ? "text-sm p-5 ml-1 border-b-2 border-blue-700 text-blue-700"
                : "text-sm ml-1  p-5 border-b-2 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
            }`}>
            <GiWorld className="inline -mt-1 pr-1" />
            Politics
          </NavLink>

          <NavLink
            path={"/movies"}
            onClick={() => setActiveCategory("movies")}
            styling={`${
              activeCategory === "movies"
                ? "text-sm p-5 border-b-2 border-blue-700 ml-1 text-blue-700"
                : "text-sm ml-1 p-5 border-b-2 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
            }`}>
            <FaVideo className="inline -mt-1 pr-1" />
            Movies
          </NavLink>

          <NavLink
            path={"/fashion"}
            onClick={() => setActiveCategory("fashion")}
            styling={`${
              activeCategory === "fashion"
                ? "text-sm p-5 border-b-2 border-blue-700 ml-1 text-blue-700"
                : "text-sm p-5 ml-1 border-b-2 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
            }`}>
            <FaShoppingBag className="inline -mt-1 pr-1" />
            Fashion
          </NavLink>

          <NavLink
            path={"/science"}
            onClick={() => setActiveCategory("science")}
            styling={`${
              activeCategory === "science"
                ? "text-sm p-5 border-b-2 border-blue-700 ml-1 text-blue-700"
                : "text-sm p-5 border-b-2 ml-1 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
            }`}>
            <ImLab className="inline -mt-1 pr-1" />
            Science
          </NavLink>

          <NavLink
            path={"/tech"}
            onClick={() => setActiveCategory("tech")}
            styling={`${
              activeCategory === "tech"
                ? "text-sm p-5 border-b-2 border-blue-700 ml-1 text-blue-700"
                : "text-sm p-5 border-b-2 ml-1 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
            }`}>
            <FaLaptop className="inline -mt-1 pr-1" />
            Technology
          </NavLink>
        </div>

        <span className="flex-grow text-right pr-4">
          <ModeToggle />

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

          <button
            onClick={() => setViewMenu(true)}
            className="inline lg:hidden">
            <RiMenu4Fill size={"2.5rem"} />
          </button>
        </span>
      </div>
    </div>
  );
};
