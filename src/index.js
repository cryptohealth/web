import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faAngleLeft,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

import App from './App';

library.add(faBars, faAngleLeft, faMobile);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
