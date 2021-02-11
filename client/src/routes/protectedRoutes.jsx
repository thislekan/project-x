import { Navigate } from "react-router-dom";
import userAuth from "../utils/userAuth";
// import SideBar from "../components/molecules/navBar/sideBar";

const Protected = (props) => {
  const { authenticate } = userAuth;

  if (authenticate && authenticate()) {
    return (
      <div className="dashboard">
        <div className="dashboard__wrapper">
          <div className="dashboard__wrapper__sidebar">
            <p>Put sidebar here</p>
            {/* <SideBar /> */}
          </div>
          <div className="dashboard__wrapper__page">
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
