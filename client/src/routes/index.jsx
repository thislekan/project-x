import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "../components/molecules";
import LandingPage from "../components/pages/landingPage";
import LoggedInUser from "../components/pages/loggedIn";
import RestrictedPages from "./restricted";

const ProtectedRoutes = React.lazy(() => import("./protectedRoutes"));
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
        <Suspense fallback={<div>This is loading...</div>}>
          <ProtectedRoutes>
            <RestrictedPages />
          </ProtectedRoutes>
        </Suspense>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
