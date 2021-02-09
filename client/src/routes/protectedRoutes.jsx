import { Navigate, useNavigate } from "react-router-dom";
import userAuth from "../utils/userAuth";

const Protected = (props) => {
  const navigate = useNavigate();
  console.log({ navigate });
  const { authenticate } = userAuth;

  if (authenticate && authenticate()) return <>{props.children}</>;
  return <Navigate to="/" />;
};

export default Protected;
