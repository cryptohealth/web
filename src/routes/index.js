import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Authorization from '~/pages/Authorization';
import Home from '~/pages/Home';
import Login from '~/pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/authorization" exact component={Authorization} />
    </Switch>
  );
}

export default Routes;
