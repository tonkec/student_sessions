import React from "react";
import selectUserTotal from "../selectors/sessions-user-total";
import selectTypes from "../selectors/sessions-type";
import selectProgress from "../selectors/sessions-progress";
import BarChartSessions from "./Charts/BarChartSessions";
import PieChartSessions from "./Charts/PieChartSessions";
import LoggedInAs from "./LoggedInAs";
import { connect } from "react-redux";

class SessionsGraphPage extends React.Component {
  render() {
    return (
      <div>
        <h1> Sessions Graphs </h1>
        <LoggedInAs />
        <BarChartSessions
          data={this.props.total}
          xKey="email"
          yKey="duration"
          barKey="duration"
        />
        <PieChartSessions
          data={this.props.types}
          dataKey="count"
          nameKey="type"
        />
        <PieChartSessions
          data={this.props.progress}
          dataKey="count"
          nameKey="progress"
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const totalSessions = state.sessions;
  return {
    sessions: totalSessions,
    total: selectUserTotal(totalSessions),
    types: selectTypes(totalSessions),
    progress: selectProgress(totalSessions)
  };
};

export default connect(mapStateToProps)(SessionsGraphPage);
