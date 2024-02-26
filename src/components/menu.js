import { useList } from "../hooks&functions/myHooks";
import { MdCancelPresentation } from "react-icons/md";
import { FaShoppingBag, FaLaptop, FaIcons, FaVideo } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { AiFillPicture, AiOutlineCode } from "react-icons/ai";
import { ImLab } from "react-icons/im";
import { Category } from "./navlink";
import { SearchButton4MenuBar } from "./search";

export const Menu = ({ device }) => {
  const { viewMenu, dark, setViewMenu } = useList();

  let translateValue, transitionTime, width, logoWidth;

  if (device === "phone") {
    transitionTime = ".2s";
    translateValue = "40vw";
    width = "w-[60%]";
    logoWidth = "w-fit";
  } else if (device === "tab") {
    transitionTime = ".3s";
    translateValue = "60vw";
    width = "w-[40%]";
    logoWidth = "w-[60%]";
  }

  const classStyle = `fixed ${
    device === "phone" ? "flex md:hidden" : "hidden md:flex"
  } flex-col h-[100vh] lg:hidden text-xl pb-6 ${width} ${
    dark ? `bg-black text-white` : `bg-white text-black`
  }`;

  return (
    <div
      style={{
        transform: `${
          viewMenu
            ? `translate3d(${translateValue}, 0, 0)`
            : "translate3d(100vw, 0, 0)"
        }`,
        zIndex: "30",
        transition: `transform ${transitionTime} linear`
      }}
      className={classStyle}>
      <button
        onClick={() => setViewMenu(false)}
        className="block w-fit pl-1">
        <MdCancelPresentation size={"2rem"} />
      </button>

      <SearchButton4MenuBar />

      <Category
        path={"/general"}
        category={"general"}>
        <FaIcons className="inline -mt-1 mr-3" />
        General
      </Category>

      <Category
        path={"/arts"}
        category={"arts"}>
        <AiFillPicture className="inline -mt-1 mr-3" />
        Arts
      </Category>

      <Category
        path={"/politics"}
        category={"politics"}>
        <GiWorld className="inline -mt-1 mr-3" />
        Politics
      </Category>

      <Category
        path={"/movies"}
        category={"movies"}>
        <FaVideo className="inline -mt-1 mr-3" />
        Movies
      </Category>

      <Category
        path={"/fashion"}
        category={"fashion"}>
        <FaShoppingBag className="inline -mt-1 mr-3" />
        Fashion
      </Category>

      <Category
        path={"/science"}
        category={"science"}>
        <ImLab className="inline -mt-1 mr-3" />
        Science
      </Category>

      <Category
        path={"/tech"}
        category={"tech"}>
        <FaLaptop className="inline -mt-1 mr-3" />
        Technology
      </Category>

      <span
        id="logo"
        className={`${logoWidth} mx-auto mt-auto ${
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
