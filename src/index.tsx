import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Root from 'pages/Root';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Root />
  </Router>,
  document.getElementById('app')
);
