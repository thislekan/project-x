import { Link } from "react-router-dom";

export const NavButton = ({ content, route, addClass }) => (
  <Link to={`${route}`} className={addClass || ""}>
    {content}
  </Link>
);

export const SimpleButton = ({ content, onClick, addClass }) => (
  <button className={addClass || ""} onClick={onClick}>
    {content}
  </button>
);
