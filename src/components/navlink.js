import { Link } from "react-router-dom";

export const NavLink = ({ path, children, onClick, styling }) => (
  <Link
    id="smooth"
    to={path}
    onClick={onClick}
    className={styling}>
    {children}
  </Link>
);
