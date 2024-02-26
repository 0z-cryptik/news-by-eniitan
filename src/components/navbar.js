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
import { Category4NavBar, NavLink } from "./navlink";
import { SearchButton4NavBar } from "./search";

export const NavBar = () => {
  const { dark, setViewMenu } =
    useList();

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
          <Category4NavBar
            category={"general"}
            path={"/general"}>
            <FaIcons className="inline -mt-1 pr-1" />
            General
          </Category4NavBar>

          <Category4NavBar
            path={"/arts"}
            category={"arts"}>
            <AiFillPicture className="inline -mt-1 pr-1" />
            Arts
          </Category4NavBar>

          <Category4NavBar
            path={"/politics"}
            category={"politics"}>
            <GiWorld className="inline -mt-1 pr-1" />
            Politics
          </Category4NavBar>

          <Category4NavBar
            path={"/movies"}
            category={"movies"}>
            <FaVideo className="inline -mt-1 pr-1" />
            Movies
          </Category4NavBar>

          <Category4NavBar
            path={"/fashion"}
            category={"fashion"}>
            <FaShoppingBag className="inline -mt-1 pr-1" />
            Fashion
          </Category4NavBar>

          <Category4NavBar
            path={"/science"}
            category={"science"}>
            <ImLab className="inline -mt-1 pr-1" />
            Science
          </Category4NavBar>

          <Category4NavBar
            path={"/tech"}
            category={"tech"}>
            <FaLaptop className="inline -mt-1 pr-1" />
            Technology
          </Category4NavBar>
        </div>

        <span className="flex-grow text-right pr-4">
          <ModeToggle />

          <SearchButton4NavBar />

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
