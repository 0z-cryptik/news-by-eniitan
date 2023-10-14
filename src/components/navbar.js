import "../App.css";
import { useList } from "./myHooks";
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
import { ModeToggle } from "./toggleBtn";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ImLab } from "react-icons/im";

export const NavLink = ({ path, children, onClick, styling }) => (
	<Link
		id="smooth"
		to={path}
		onClick={onClick}
		className={styling}>
		{children}
	</Link>
);

const NavBar = () => {
	const {
		dark,
		activeCategory,
		setActiveCategory,
		setViewMenu,
		viewMenu,
	} = useList();

	const menuFunc = (category) => {
		setActiveCategory(category);
		setViewMenu(false);
	};

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

			<div
				style={{
					transform: `${
						viewMenu
							? "translate3d(40vw, 0, 0)"
							: "translate3d(100vw, 0, 0)"
					}`,
					zIndex: "30",
					transition: "transform .3s linear",
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
					className={`w-[80%] mx-auto mt-auto ${
						dark ? "text-gray-700" : "text-gray-300"
					}`}>
					<AiOutlineCode
						size={"2rem"}
						className="inline -mt-1 mr-1"
					/>
					Built By Eniitan
				</span>
			</div>

			<div
				style={{
					transform: `${
						viewMenu
							? "translate3d(60vw, 0, 0)"
							: "translate3d(100vw, 0, 0)"
					}`,
					zIndex: "30",
					transition: "transform .3s linear",
				}}
				className={`${
					dark
						? `fixed md:flex flex-col w-[40%] hidden h-[100vh] bg-black text-white text-xl pb-6`
						: `fixed bg-white md:flex flex-col w-[40%] h-[100vh] hidden text-black text-xl pb-6`
				}`}>
				<button
					onClick={() => setViewMenu(false)}
					className="block w-fit pl-1">
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
							? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
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
					className={`w-[60%] mx-auto mt-auto ${
						dark ? "text-gray-700" : "text-gray-300"
					}`}>
					<AiOutlineCode
						size={"2rem"}
						className="inline -mt-1 mr-1"
					/>
					Built By Eniitan
				</span>
			</div>

			{viewMenu && (
				<div
					id="overlay"
					className="z-20"></div>
			)}
		</div>
	);
};

export { NavBar };
