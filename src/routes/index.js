import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '~/pages/Home';
import Login from '~/pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </Switch>
  );
}

export default Routes;
