import { Navigate } from "react-router-dom";
import userAuth from "../utils/userAuth";
import SideBar from "../components/molecules/navBar/sidebar";

const Protected = (props) => {
  const { authenticate } = userAuth;

  if (authenticate && authenticate()) {
    return (
      <div className="protected">
        <div className="protected__wrapper">
          <div className="protected__wrapper__sidebar">
            <SideBar />
          </div>
          <div className="protected__wrapper__page">
            <div className="top-bar"></div>
            <>{props.children}</>
          </div>
        </div>
      </div>
    );
  }

  return <Navigate to="/" />;
};

export default Protected;
