import { Redirect } from "react-router-dom";

const Protected = async (props) => {
  const {default: userAuth} = await import("../utils/userAuth");
  const { authenticate } = userAuth;
  if (authenticate && authenticate()) return <>{props.children}</>;
  return <Redirect to="/" />;
};

export default Protected;
