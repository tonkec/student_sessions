import React, { Component } from 'react';
import Select from 'react-select';
import moment from 'moment';

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
      type: props.session ? props.session.type : null,
      progress: props.session ? props.session.progress : null,
      date: props.session ? props.session.date : '',
      note: props.session ? props.session.note : '',
      minute: props.session ? props.session.duration.minutes : '',
      hour:  props.session ? props.session.duration.hours : '',
      second: props.session ? props.session.duration.seconds : '',
      description: props.session ? props.session.description : '',
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
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
    console.log(type)
   this.setState({ type });
  }

  setTypeValue = (type) => {
    console.log(type)
  }

  onSelectProgress = (progress) => {
    this.setState({ progress });
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({note})
  }

  onMinuteChange = (e) => {
    const minute = e.target.value;
    this.setState({minute})
  }

  onHourChange = (e) => {
    const hour = e.target.value;
    this.setState({hour})
  }

  onSecondChange = (e) => {
    const second = e.target.value;
    this.setState({second})
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({description})
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    let newData = {
      studentEmail: this.state.studentEmail,
      type: this.state.type,
      progress: this.state.progress,
      date: this.state.date,
      note: this.state.note,
      description: this.state.description,
      duration: {
        hours: this.state.hour,
        minutes: this.state.minute,
        seconds: this.state.second
      },
      createdAt: this.state.createdAt
    }

    this.props.onSubmit(newData)
  }

  render() {
    const { type, progress, studentEmail, date, note, minute, hour, second, description } = this.state;
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
            required
          />

          <input
            type="date"
            name="date"
            value={date}
            onChange={this.onDateChange}
            required
          />

          <input
            type="number"
            name="hour"
            value={hour}
            onChange={this.onHourChange}
            min="0"
            max="59"
            maxLength="2"
            placeholder="h"
            required
          />

          <input
            type="number"
            name="minute"
            value={minute}
            onChange={this.onMinuteChange}
            min="0"
            max="59"
            maxLength="2"
            placeholder="m"
            required
          />

          <input
            type="number"
            name="second"
            value={second}
            onChange={this.onSecondChange}
            min="0"
            max="59"
            maxLength="2"
            placeholder="s"
            required
          />

          <h2> Select type of session </h2>

          <Select
            onChange={this.onSelectType}
            options={typeOptions}
            defaultValue={{ label: type, value: type }}
            required
          />

          <h2> Select type of progress </h2>

          <Select
            defaultValue={{ label: progress, value: progress }}
            onChange={this.onSelectProgress}
            options={progressOptions}
            required
          />

          <textarea
            placeholder="Describe what you covered in the session"
            value={description}
            onChange={this.onDescriptionChange}
            required
          >
          </textarea>

          <textarea
            placeholder="Extra note for student care"
            value={note}
            onChange={this.onNoteChange}
          >
          </textarea>

          <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default SessionForm;
