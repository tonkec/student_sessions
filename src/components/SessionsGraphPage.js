import React from 'react';
import {connect} from 'react-redux';
import selectSessions from '../selectors/sessions';
import selectTotalSessions from '../selectors/sessions-total';
import selectUserTotal from '../selectors/sessions-user-total';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';

class SessionsGraphPage extends React.Component {
  render () {
    return (
      <div>
        <h1> Sessions Graphs </h1>
        <BarChart width={730} height={250} data={this.props.total}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="email" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="duration" fill="#2ec4b6" />
        </BarChart>
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
