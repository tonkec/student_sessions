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
    const {studentEmail, id, createdAt, description, type, progress, duration, i} = this.props;
    return(
      <div className="sessionCard">
        <span> <b>{i} </b></span>
        <p style={{display: "inline-block"}}>
          {studentEmail} | {moment(createdAt).format("MM Do YY', h:mm:s")} | {type} | {progress} | {description} | {duration.hours} | {duration.minutes} | {duration.seconds}
        </p>

        <Link to={`/edit/${id}`} className="button">
          Edit
        </Link>

        <button
          onClick={this.handleClick}
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
