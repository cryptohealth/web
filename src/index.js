import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(faBars, faAngleLeft);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
