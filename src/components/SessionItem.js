import React from 'react';
import {connect} from 'react-redux';
import {removeSession} from '../actions/sessions';

class SessionItem extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.removeSession({ id: this.props.id });
  }

  render() {
    const {studentEmail} = this.props
    return(
      <div>
        <p style={{display: "inline-block", marginRight: "10px", marginBottom: "20px"}}>
          {studentEmail}
          {console.log(this.props)}
        </p>

        <button
          style={{display: "inline"}}
          onClick={this.handleClick}
        >
          Delete
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  removeSession: (id) => dispatch(removeSession(id))
});


export default connect(null, mapDispatchToProps)(SessionItem);
