import { useLocation } from "react-router-dom";
import SideBar from "./navBar/sideBar";
import TopNav from "./navBar/topNav";

const NavBar = () => {
  const { pathname } = useLocation();

  if (pathname.includes("me")) return <SideBar />;
  return <TopNav />;
};

export default NavBar;
