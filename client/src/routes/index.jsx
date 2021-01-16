import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "../components/molecules";
import LandingPage from "../components/pages/landingPage";
import LoggedInUser from "../components/pages/loggedIn";
import RestrictedPages from "./restricted";
import ProtectedRoutes from "./protectedRoutes";

const Routes = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route
          path="/loggedIn/:access_token/:refresh_token"
          component={LoggedInUser}
          exact
        />
        <ProtectedRoutes>
          <RestrictedPages />
        </ProtectedRoutes>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
