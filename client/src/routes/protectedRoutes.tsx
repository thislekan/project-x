import React from "react";
import { Redirect } from "react-router-dom";
import userAuth from "../utils/userAuth";

type Props = {
  children: any;
  isTrue?: boolean;
};

const Protected = (props: Props) => {
  if (userAuth.authenticate() || props.isTrue) return <>{props.children}</>;
  return <Redirect to="/" />;
};

export default Protected;
