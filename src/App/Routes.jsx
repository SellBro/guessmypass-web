import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import AuthPage from 'Auth';
import HomePage from 'Home';

import { getJwtToken } from 'shared/utils/authToken';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/auth" />
        <Route path="/auth" component={AuthPage} />
        <ProtectedRoute path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        getJwtToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default Routes;
