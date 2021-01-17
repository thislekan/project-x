import { Route, Switch } from "react-router-dom";

const RestrictedPages = () => (
  <Switch>
    <Route
      component={() => <h1 style={{ color: "red" }}>Me! ME!!!</h1>}
      path="/me"
      exact
    />
  </Switch>
);

export default RestrictedPages;
