import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import LoginPage from '../components/LoginPage';
import AddSessionPage from '../components/AddSessionPage';
import EditSessionPage from '../components/EditSessionPage';
import OldSessionsPage from '../components/OldSessionsPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/addSession" component={AddSessionPage} />
      <PrivateRoute path="/edit/:id" component={EditSessionPage} />
      <Route path="/oldSessions" component={OldSessionsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
