import React from "react";
import { connect } from "react-redux";
import selectSessions from "../selectors/sessions";
import SessionItem from "./SessionItem";

const SessionsSummary = props => {
  return (
    <div>
      {props.sessions.length === 0 ? (
        <p>No sessions</p>
      ) : (
        <div>
          {props.sessions.map((session, i) => {
            return <SessionItem key={session.id} {...session} seeMore={true} />;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const totalSessions = selectSessions(state.sessions, state.filters);
  return {
    sessions: totalSessions
  };
};

export default connect(mapStateToProps)(SessionsSummary);
