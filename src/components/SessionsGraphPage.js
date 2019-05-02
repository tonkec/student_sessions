import React from 'react';
import {connect} from 'react-redux';
import selectSessions from '../selectors/sessions';
import selectUserTotal from '../selectors/sessions-user-total';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from 'recharts';
import moment from 'moment';

class SessionsGraphPage extends React.Component {
  render () {
    return (
      <div>
        <h1> Sessions Graphs </h1>
        <BarChart width={730} height={250} data={this.props.total}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="email"
            hide={true}/>
          <YAxis
            label={{ value: 'hours', angle: -90, position: 'insideLeft' }}
            tickFormatter={(value) => {
            let formated = moment.duration(value, 'seconds');
            return formated._data.hours
          }} />
          <Tooltip formatter={(value) => {
            let formated = moment.duration(value, 'seconds');
            return `${formated._data.hours}h:${formated._data.minutes}m:${formated._data.seconds}s`
          }} />
          <Legend wrapperStyle={{
              paddingTop: "20px"
          }}/>
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
