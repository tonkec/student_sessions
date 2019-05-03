import React from "react";
import { connect } from "react-redux";
import selectSessionsTotalDuration from "../selectors/sessions-total-duration";
import moment from "moment";

class StudentPage extends React.Component {
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
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let studentSessions = state.sessions.filter(
    s => s.studentEmail === props.match.params.email
  );
  return {
    studentSessions: studentSessions,
    selectSessionsTotalDuration: selectSessionsTotalDuration(studentSessions)
  };
};

export default connect(mapStateToProps)(StudentPage);
