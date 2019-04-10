import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddSessionPage from './components/AddSessionPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/addSession" component={AddSessionPage} />
        <Route component={NotFoundPage} />
      </Switch>
  </BrowserRouter>
);

export default App;
