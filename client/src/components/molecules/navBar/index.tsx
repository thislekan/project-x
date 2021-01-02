import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./sideBar";
import TopNav from "./topNav";

const NavBar = () => {
  const { pathname } = useLocation();

  if (pathname.includes("me")) return <SideBar />;
  return <TopNav />;
};

export default NavBar;
