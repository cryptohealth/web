import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/entrar" exact component={Login} />
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
}

export default Routes;
