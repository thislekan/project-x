import { useParams, Redirect } from "react-router-dom";
import { ShouldRender } from "../../atoms/wrappers";

const LoggedInUser = () => {
  const { access_token, refresh_token } = useParams();
  sessionStorage.setItem("access_token", access_token);
  sessionStorage.setItem("refresh_token", refresh_token);

  return (
    <div>
      <ShouldRender show={!!access_token}>
        <Redirect to="/me" />
      </ShouldRender>
      <ShouldRender show={!access_token}>
        <Redirect to="/" />
      </ShouldRender>
    </div>
  );
};

export default LoggedInUser;
