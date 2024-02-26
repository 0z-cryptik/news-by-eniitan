import { Link } from "react-router-dom";
import { useList } from "../hooks&functions/myHooks";

export const NavLink = ({ path, children, onClick, styling }) => (
  <Link
    id="smooth"
    to={path}
    onClick={onClick}
    className={styling}>
    {children}
  </Link>
);

export const Category = ({ path, category, children }) => {
  const { menuFunc, activeCategory } = useList();
  return (
    <NavLink
      path={path}
      styling={`${
        activeCategory === category
          ? "block mx-3 py-[1rem] border-b border-red-700 text-red-700"
          : "block py-[1rem] mx-3"
      }`}
      onClick={() => menuFunc(category)}>
      {children}
    </NavLink>
  );
};

export const Category4NavBar = ({path, category, children}) => {
const {setActiveCategory, activeCategory} = useList()
  return <NavLink
  path={path}
  onClick={() => setActiveCategory(category)}
  styling={`${
    activeCategory === category
      ? "text-sm p-5 border-b-2 border-blue-700 text-blue-700"
      : "text-sm p-5 border-b-2 border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
  }`}>
  {children}
</NavLink>
}
