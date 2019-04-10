import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentEmail: props.studentEmail ? props.studentEmail : ''
    };
  }

  onStudentEmailChange = (e) => {
    const studentEmail = e.target.value;
    this.setState({studentEmail})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({studentEmail: this.state.studentEmail})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="email"
            value={this.state.studentEmail}
            onChange={this.onStudentEmailChange}
            placeholder="Student's email address"
            autoFocus
          />
          <button> Add </button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
