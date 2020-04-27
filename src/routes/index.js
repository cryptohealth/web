import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelloWorld from '~/pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HelloWorld} />
    </Switch>
  );
}

export default Routes;
