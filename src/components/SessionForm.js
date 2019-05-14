import React, { Component } from "react";
import Select from "react-select";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const typeOptions = [
  { value: "Intro", label: "Intro" },
  { value: "Project inception", label: "Project inception" },
  { value: "Middle of project", label: "Middle of project" },
  { value: "End of project", label: "End of project" },
  { value: "Career advice", label: "Career advice" },
  { value: "Other", label: "Other" },
  { value: "No show", label: "No show" }
];

const progressOptions = [
  {
    value: "Excellent - It's going great.",
    label: "Excellent - It's going great."
  },
  {
    value: "Average - The student is moving at an acceptable pace.",
    label: "Average - The student is moving at an acceptable pace."
  },
  {
    value: "I'm worried about this student's progress.",
    label: "I'm worried about this student's progress."
  }
];

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentEmail: props.session ? props.session.studentEmail : "",
      type: props.session ? props.session.type : null,
      progress: props.session ? props.session.progress : null,
      date: props.session ? moment(props.session.date) : null,
      note: props.session ? props.session.note : "",
      minute: props.session ? props.session.duration.minutes : "",
      hour: props.session ? props.session.duration.hours : "",
      second: props.session ? props.session.duration.seconds : "",
      description: props.session ? props.session.description : "",
      createdAt: props.session ? props.session.createdAt : moment().format(),
      focused: false
    };
  }

  onStudentEmailChange = e => {
    const studentEmail = e.target.value;
    this.setState({ studentEmail });
  };

  onDateChange = date => {
    this.setState({ date });
  };

  onSelectType = type => {
    this.setState({ type: type.value });
  };

  onSelectProgress = progress => {
    this.setState({ progress: progress.value });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };

  onMinuteChange = e => {
    const minute = e.target.value;
    this.setState({ minute });
  };

  onHourChange = e => {
    const hour = e.target.value;
    this.setState({ hour });
  };

  onSecondChange = e => {
    const second = e.target.value;
    this.setState({ second });
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };

  onSubmit = e => {
    e.preventDefault();

    let newData = {
      studentEmail: this.state.studentEmail,
      type: this.state.type,
      progress: this.state.progress,
      date: moment(this.state.date).format("YYYY-MM-DD"),
      note: this.state.note,
      description: this.state.description,
      duration: {
        hours: this.state.hour,
        minutes: this.state.minute,
        seconds: this.state.second
      },
      createdAt: this.state.createdAt
    };

    this.props.onSubmit(newData);
  };

  render() {
    const {
      type,
      progress,
      studentEmail,
      date,
      note,
      minute,
      hour,
      second,
      description
    } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="group">
            <label> Student's Email </label>
            <input
              type="email"
              name="email"
              value={studentEmail}
              onChange={this.onStudentEmailChange}
              placeholder="Student's email address"
              autoFocus
              required
              className="m-l-0"
            />
          </div>

          <div className="group">
            <label> Date of session </label>

            <SingleDatePicker
              date={date}
              onDateChange={this.onDateChange}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              numberOfMonths={1}
              readOnly={true}
              isOutsideRange={() => false}
              id="single-date-picker"
            />
          </div>

          <div className="group group-duration">
            <label> Duration of session </label>
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
          </div>

          <div className="group">
            <label> Select type of session </label>
            <Select
              onChange={this.onSelectType}
              options={typeOptions}
              defaultValue={{ label: type, value: type }}
              required
            />
          </div>

          <div className="group">
            <label> Select type of progress </label>
            <Select
              defaultValue={{ label: progress, value: progress }}
              onChange={this.onSelectProgress}
              options={progressOptions}
              required
            />
          </div>

          <div className="group">
            <textarea
              placeholder="Describe what you covered in the session"
              value={description}
              onChange={this.onDescriptionChange}
              required
              className="textarea"
            />
          </div>
          <div className="group">
            <textarea
              placeholder="Extra note for student care"
              value={note}
              onChange={this.onNoteChange}
              className="textarea"
            />
          </div>

          <button className="m-l-0 button btn-form"> Submit </button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
