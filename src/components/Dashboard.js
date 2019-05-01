import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectSessions from '../selectors/sessions';
import SessionsSummary from './SessionsSummary';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1> Your Sessions </h1>
        <SessionsSummary />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const totalSessions = selectSessions(state.sessions);
  return {
     sessions: totalSessions
   }
}

export default connect(mapStateToProps)(Dashboard);
