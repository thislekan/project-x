/* eslint-disable no-undef */
import React from "react";
import { Redirect } from "react-router-dom";
import userAuth from "../utils/userAuth";

type Props = {
  children: JSX.Element;
};

const Protected = (props: Props) => {
  const { authenticate } = userAuth;
  if (authenticate && authenticate()) return <>{props.children}</>;
  return <Redirect to="/" />;
};

export default Protected;
