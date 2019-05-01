import React from 'react';
import {connect} from 'react-redux';

class StudentPage extends React.Component {
  render() {
    const email = this.props.studentSessions[0].studentEmail;
    const count = this.props.studentSessions.length;
    return(
      <div>
        <h2> {email} has {count > 1 ? `${count} sessions`: `${count} session`} </h2>
        <p> Total time spent on sessions: </p>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  studentSessions: state.sessions.filter((s) => s.studentEmail === props.match.params.email)
});

export default connect (mapStateToProps)(StudentPage);
