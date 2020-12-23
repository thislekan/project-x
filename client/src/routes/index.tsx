import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import TestComp from '../components';
import Login from '../components/pages/auth';

const Routes = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={TestComp} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </div>
    </BrowserRouter>
);

export default Routes;
