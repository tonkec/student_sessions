import React from 'react';
import {connect} from 'react-redux';
import {startRemoveSession} from '../actions/sessions';
import { Link } from 'react-router-dom';
import moment from 'moment';

class SessionItem extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.startRemoveSession({ id: this.props.id });
  }

  render() {
    const {studentEmail, id, createdAt, description, type, progress, duration} = this.props;
    return(
      <div className="sessionCard">
        <p style={{display: "inline-block"}}>
        <Link to={{
      pathname: `/student/${studentEmail}`,
    }}>
          {studentEmail}
        </Link> | {moment(createdAt).format("MM Do YY', h:mm:s A")} | {type} | {progress} | {description} | {duration.hours} | {duration.minutes} | {duration.seconds}
        </p>

        <Link to={`/edit/${id}`} className="button m-l-0">
          Edit
        </Link>

        <button
          onClick={this.handleClick}
          className="button"
        >
          Delete
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveSession: (id) => dispatch(startRemoveSession(id))
});


export default connect(null, mapDispatchToProps)(SessionItem);
