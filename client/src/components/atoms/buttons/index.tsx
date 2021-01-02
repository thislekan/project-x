import React from "react";
import { Link } from "react-router-dom";

type Props = {
  content: string;
  route?: string;
  addClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const NavButton = ({ content, route, addClass }: Props) => (
  <Link to={`${route}`} className={addClass || ""}>
    {content}
  </Link>
);

export const SimpleButton = ({ content, onClick, addClass }: Props) => (
  <button className={addClass || ""} onClick={onClick}>
    {content}
  </button>
);
