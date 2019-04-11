import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AddSessionPage from './components/AddSessionPage';
import EditSessionPage from './components/EditSessionPage';
import OldSessionsPage from './components/OldSessionsPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/addSession" component={AddSessionPage} />
        <Route path="/edit/:id" component={EditSessionPage} />
        <Route path="/oldSessions" component={OldSessionsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
