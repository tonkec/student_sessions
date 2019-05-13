import React from "react";
import { connect } from "react-redux";
import { startRemoveSession } from "../actions/sessions";
import { Link } from "react-router-dom";
import moment from "moment";

class SessionItem extends React.Component {
  handleClick = e => {
    e.preventDefault();
    this.props.startRemoveSession({ id: this.props.id });
  };

  render() {
    const {
      studentEmail,
      id,
      createdAt,
      description,
      type,
      progress,
      duration,
      date,
      note,
      seeMore
    } = this.props;
    let noteComponent = (
      <p>
        <span> Note </span>: {note}
      </p>
    );

    let descriptionComponent = (
      <p>
        <span> Description </span>: {description}
      </p>
    );

    let createdAtComponent = (
      <p>
        <span> Created at </span>: {createdAt}
      </p>
    );

    return (
      <div className="sessionCard">
        <p>
          <span> email: </span>
          <Link
            to={{
              pathname: `/student/${studentEmail}`
            }}
          >
            {studentEmail}
          </Link>
        </p>

        <p>
          <span> Date of session: </span>
          {moment(date).format("LLL")}
        </p>

        <p>
          <span> Session duration: </span>
          {duration.hours}:{duration.minutes}:{duration.seconds}
        </p>

        <p>
          <span> Type of session: </span>
          {type}
        </p>

        <p>
          <span> Student's progress: </span> {progress}
        </p>

        {seeMore ? (
          <Link
            className="button m-l-0"
            to={{
              pathname: `/session/${id}`
            }}
          >
            See more
          </Link>
        ) : (
          <div>
            {noteComponent}
            {descriptionComponent}
            {createdAtComponent}
          </div>
        )}

        <Link to={`/edit/${id}`} className={`button ${seeMore ? "" : "m-l-0"}`}>
          Edit
        </Link>

        <button onClick={this.handleClick} className="button">
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveSession: id => dispatch(startRemoveSession(id))
});

export default connect(
  null,
  mapDispatchToProps
)(SessionItem);
