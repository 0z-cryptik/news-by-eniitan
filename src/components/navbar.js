import "../App.css";
import { useList } from "../hooks&functions/myHooks";
import { FaShoppingBag, FaLaptop, FaIcons, FaVideo } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { AiFillPicture } from "react-icons/ai";
import { ModeToggle } from "./toggleBtn";
import { RiMenu4Fill } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { Category4NavBar, NavLink } from "./navlink";
import { SearchButton4NavBar } from "./search";

export const NavBar = () => {
  const { dark, setViewMenu } = useList();
  const iconClass = "inline -mt-1 pr-1";

  return (
    <div>
      <div
        id="bg"
        className={`pt-3 flex flex-row h-[4rem] fixed z-10 w-full ${
          dark ? "bg-[#16242E] text-white" : "bg-slate-300"
        }`}>
        <div className="hidden lg:block">
          <Category4NavBar
            category={"general"}
            path={"/general"}>
            <FaIcons className={iconClass} />
            General
          </Category4NavBar>

          <Category4NavBar
            path={"/arts"}
            category={"arts"}>
            <AiFillPicture className={iconClass} />
            Arts
          </Category4NavBar>

          <Category4NavBar
            path={"/politics"}
            category={"politics"}>
            <GiWorld className={iconClass} />
            Politics
          </Category4NavBar>

          <Category4NavBar
            path={"/movies"}
            category={"movies"}>
            <FaVideo className={iconClass} />
            Movies
          </Category4NavBar>

          <Category4NavBar
            path={"/fashion"}
            category={"fashion"}>
            <FaShoppingBag className={iconClass} />
            Fashion
          </Category4NavBar>

          <Category4NavBar
            path={"/science"}
            category={"science"}>
            <ImLab className={iconClass} />
            Science
          </Category4NavBar>

          <Category4NavBar
            path={"/tech"}
            category={"tech"}>
            <FaLaptop className={iconClass} />
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
