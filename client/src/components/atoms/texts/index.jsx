import { Link } from "react-router-dom";

export const LargeHeader = ({ text, addClass }) => (
  <h1 className={addClass || ""}>{text}</h1>
);

export const MediumHeader = ({ text, addClass }) => (
  <h3 className={addClass || ""}>{text}</h3>
);

export const SmallHeader = ({ text, addClass }) => (
  <h6 className={addClass || ""}>{text}</h6>
);

export const Paragraph = ({ text, addClass }) => (
  <p className={addClass || ""}>{text}</p>
);

export const Span = ({ text, addClass }) => (
  <span className={addClass || ""}>{text}</span>
);

export const Anchor = ({ text, route = "/", addClass }) => (
  <Link to={route} className={addClass || ""}>
    {text}
  </Link>
);
