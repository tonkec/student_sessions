import React from "react";
import selectUserTotal from "../selectors/sessions-user-total";
import selectTypes from "../selectors/sessions-type";
import selectProgress from "../selectors/sessions-progress";
import BarChartSessions from "./Charts/BarChartSessions";
import PieChartSessions from "./Charts/PieChartSessions";
import LoggedInAs from "./LoggedInAs";
import { connect } from "react-redux";

const ProfilePage = ({ sessions, total, types, progress }) => (
  <div className="profile-page">
    <h1> Your Profile </h1>
    <LoggedInAs />
    <p>
      Currently you have
      {sessions.length >= 1
        ? ` ${sessions.length} sessions`
        : ` ${sessions.length} session`}
    </p>
    {sessions.length >= 5 ? (
      <div>
        <BarChartSessions
          data={total}
          xKey="email"
          yKey="duration"
          barKey="duration"
        />
        <PieChartSessions data={types} dataKey="count" nameKey="type" />
        <PieChartSessions data={progress} dataKey="count" nameKey="progress" />
      </div>
    ) : (
      "We need at least 5 sessions to create graphs"
    )}
  </div>
);

const mapStateToProps = (state, props) => {
  const totalSessions = state.sessions;
  return {
    sessions: totalSessions,
    total: selectUserTotal(totalSessions),
    types: selectTypes(totalSessions),
    progress: selectProgress(totalSessions)
  };
};

export default connect(mapStateToProps)(ProfilePage);
