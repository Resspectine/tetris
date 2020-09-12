import { RouteProps } from 'react-router';

import { ROUTE_PATHS } from './helpers';

import Dashboard from 'pages/Dashboard';

const routes: RouteProps[] = [
  {
    path: ROUTE_PATHS.index,
    component: Dashboard,
    exact: true,
  },
  {
    path: ROUTE_PATHS[404],
    exact: true,
  },
];

export default routes;
