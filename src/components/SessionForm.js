import React, { Component } from 'react';
import Select from 'react-select';

const typeOptions = [
  { value: 'intro', label: 'intro' },
  { value: 'project inception', label: 'project inception' },
  { value: 'middle of project', label: 'middle of project' },
  { value: 'end of project', label: 'end of project'},
  { value: 'career advice', label: 'career advice'},
  { value: 'other', label: 'other'},
  { value: 'no show', label: 'no show'}
];

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentEmail: props.session ? props.session.studentEmail : '',
      type: null,

    };
  }

  onStudentEmailChange = (e) => {
    const studentEmail = e.target.value;
    this.setState({studentEmail})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      studentEmail: this.state.studentEmail,
      type: this.state.type
    })
  }

  handleChange = (type) => {
   this.setState({ type });
 }

  render() {
    const { type } = this.state;

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

          <Select
            value={type}
            onChange={this.handleChange}
            options={typeOptions}
          />

          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
