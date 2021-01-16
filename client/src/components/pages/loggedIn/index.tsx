import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { ShouldRender } from "../../atoms/wrappers";

interface Params {
  access_token: string;
  refresh_token: string;
}

const LoggedInUser = () => {
  const { access_token, refresh_token } = useParams<Params>();

  sessionStorage.setItem("access_token", access_token);
  sessionStorage.setItem("refresh_token", refresh_token);

  return (
    <div>
      <ShouldRender show={!!access_token}>
        <Redirect to="/me" />
      </ShouldRender>
    </div>
  );
};

export default LoggedInUser;
