import React from 'react';
import {connect} from 'react-redux';
import {startRemoveSession} from '../actions/sessions';
import { Link } from 'react-router-dom';

class SessionItem extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.startRemoveSession({ id: this.props.id });
  }

  render() {
    const {studentEmail, id, createdAt} = this.props
    return(
      <div>
        <p style={{display: "inline-block", marginBottom: "20px"}}>
          {studentEmail} | {createdAt}
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
