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

const progressOptions = [
  { value: "Excellent - It's going great.", label: "Excellent - It's going great." },
  { value: "Average - The student is moving at an acceptable pace.", label: "Average - The student is moving at an acceptable pace."},
  { value: "I'm worried about this student's progress.", label: "I'm worried about this student's progress."}
]

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentEmail: props.session ? props.session.studentEmail : '',
      type: null,
      progress: null,
      date: ''
    };
  }

  onStudentEmailChange = (e) => {
    const studentEmail = e.target.value;
    this.setState({studentEmail})
  }

  onDateChange = (e) => {
    const date = e.target.value;
    this.setState({date})
  }

  onSelectType = (type) => {
   this.setState({ type });
  }

  onSelectProgress = (progress) => {
    this.setState({ progress });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      studentEmail: this.state.studentEmail,
      type: this.state.type,
      progress: this.state.progress,
      date: this.state.date
    })
  }

  render() {
    const { type, progress, studentEmail, date } = this.state;

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="email"
            value={studentEmail}
            onChange={this.onStudentEmailChange}
            placeholder="Student's email address"
            autoFocus
          />

          <input
            type="date"
            name="date"
            value={date}
            onChange={this.onDateChange}
          />

          <h2> Select type of session </h2>

          <Select
            value={type}
            onChange={this.onSelectType}
            options={typeOptions}
          />

          <h2> Select type of progress </h2>

          <Select
            value={progress}
            onChange={this.onSelectProgress}
            options={progressOptions}
          />

          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
