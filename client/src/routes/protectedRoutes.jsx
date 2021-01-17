import { Redirect } from "react-router-dom";
import userAuth from "../utils/userAuth";

const Protected = (props) => {
  const { authenticate } = userAuth;

  if (authenticate && authenticate()) return <>{props.children}</>;
  return <Redirect to="/" />;
};

export default Protected;
