import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import TestComp from '../components';

const Routes = () => (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={TestComp} exact/>
        </Switch>
      </div>
    </BrowserRouter>
);

export default Routes;
