import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavBar from '../components/molecules/navBar';
import LandingPage from '../components/pages/landingPage';
import RestrictedPages from './restricted';
import ProtectedRoutes from './protectedRoutes';

const Routes = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <ProtectedRoutes isTrue>
          <RestrictedPages />
        </ProtectedRoutes>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
