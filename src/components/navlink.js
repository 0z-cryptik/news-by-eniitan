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
      styling={`block py-[1rem] mx-3 ${
        activeCategory === category
          ? "border-b border-red-700 text-red-700"
          : ""
      }`}
      onClick={() => menuFunc(category)}>
      {children}
    </NavLink>
  );
};

export const Category4NavBar = ({ path, category, children }) => {
  const { setActiveCategory, activeCategory } = useList();
  return (
    <NavLink
      path={path}
      onClick={() => setActiveCategory(category)}
      styling={`text-sm p-5 border-b-2 ${
        activeCategory === category
          ? "border-blue-700 text-blue-700"
          : "border-blue-700/0 hover:border-blue-700 hover:text-blue-700"
      }`}>
      {children}
    </NavLink>
  );
};
