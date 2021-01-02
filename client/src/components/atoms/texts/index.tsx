import React from "react";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  route?: string;
  addClass?: string;
};

export const LargeHeader = ({ text, addClass }: Props) => <h1 className={addClass || ""}>{text}</h1>;

export const MediumHeader = ({ text, addClass }: Props) => <h3 className={addClass || ""}>{text}</h3>;

export const SmallHeader = ({ text, addClass }: Props) => <h6 className={addClass || ""}>{text}</h6>;

export const Paragraph = ({ text, addClass }: Props) => <p className={addClass || ""}>{text}</p>;

export const Span = ({ text, addClass }: Props) => <span className={addClass || ""}>{text}</span>;

export const Anchor = ({ text, route = "/", addClass }: Props) => (
  <Link to={route} className={addClass || ""}>
    {text}
  </Link>
);
