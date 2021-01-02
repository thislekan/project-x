import React from "react";
import ReactDOM from "react-dom";
import Webfont from "webfontloader";
import Routes from "./routes";
import "./index.scss";

Webfont.load({
  google: {
    families: ["Amatic SC:400,600,700", "Andika:300,400,600,700", "sans-serif"],
  },
});
const MainApp = () => <Routes />;

const appDiv = document.getElementById("main-app");
ReactDOM.render(<MainApp />, appDiv);
