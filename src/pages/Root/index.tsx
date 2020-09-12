import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import routes from 'routes';

const renderRoutes = (): JSX.Element[] =>
  routes.map(route => {
    const routeProps = {
      ...route,
      key: route.path && route.path.toString(),
    };

    return <Route {...routeProps} />;
  });

const Root: FC = () => (
  <Box>
    <Switch>{renderRoutes()}</Switch>
  </Box>
);

export default Root;
