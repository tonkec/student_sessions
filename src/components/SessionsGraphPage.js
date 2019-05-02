import React from 'react';
import selectSessions from '../selectors/sessions';
import selectUserTotal from '../selectors/sessions-user-total';
import BarChartSessions from './Charts/BarChartSessions';
import {connect} from 'react-redux';

class SessionsGraphPage extends React.Component {
  render () {
    return (
      <div>
        <h1> Sessions Graphs </h1>
        <BarChartSessions data={this.props.total} />
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  const totalSessions = selectSessions(state.sessions, state.filters);
  return {
    sessions: totalSessions,
    total: selectUserTotal(totalSessions)
  }
};

export default connect(mapStateToProps)(SessionsGraphPage);
