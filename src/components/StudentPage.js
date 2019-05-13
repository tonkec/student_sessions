import React from "react";
import { connect } from "react-redux";
import BarChartSessions from "./Charts/BarChartSessions";
import Message from "./Message";

import { history } from "../routers/AppRouter";
import { showMessage } from "../actions/messages";

import selectSessionsTotalDuration from "../selectors/sessions-total-duration";
import selectSessionDuration from "../selectors/student-session-duration";
import moment from "moment";

class StudentPage extends React.Component {
  componentDidMount = () => {
    if (!this.props.studentEmail) {
      this.props.showMessage({ show: true, message: "No such student" });
      history.push("/");
    }
  };

  render() {
    const email = this.props.match.params.email;
    const count = this.props.studentSessions.length;
    const seconds = this.props.selectSessionsTotalDuration;
    const duration = moment.duration(seconds, "seconds");
    return (
      <div>
        <h2>
          {email} has {count > 1 ? `${count} sessions` : `${count} session`}
        </h2>
        <p>
          Total time spent on sessions:
          <span>
            {duration._data.hours}h: {duration._data.minutes}m:
            {duration._data.seconds}s
          </span>
        </p>
        {this.props.sessionsWithGroupedDuration.length > 3 ? (
          <BarChartSessions
            data={this.props.sessionsWithGroupedDuration}
            barKey="duration"
            xKey="date"
            yKey="duration"
          />
        ) : (
          "We can not show graph because this student doesn't have enough data yet"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let studentSessions = state.sessions.filter(
    s => s.studentEmail === props.match.params.email
  );
  let studentEmail = state.sessions.find(s => {
    return s.studentEmail === props.match.params.email;
  });

  return {
    studentSessions: studentSessions,
    studentEmail: studentEmail,
    sessionsWithGroupedDuration: selectSessionDuration(studentSessions),
    selectSessionsTotalDuration: selectSessionsTotalDuration(studentSessions)
  };
};

const mapDispatchToProps = (dispatch, state) => ({
  showMessage: (show, message) => dispatch(showMessage(show, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentPage);
