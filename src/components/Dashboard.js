import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectSessions from '../selectors/sessions';
import SessionsSummary from './SessionsSummary';
import SessionsFilters from './SessionsFilters';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1> Your Sessions </h1>
        <SessionsFilters />
        <SessionsSummary />
      </div>
    );
  }
}


export default Dashboard;
