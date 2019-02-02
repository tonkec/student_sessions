import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
const SECRETKEY1 = process.env.REACT_APP_SECRETKEY1;
const SECRETKEY2 = process.env.REACT_APP_SECRETKEY2;
class App extends Component {
  constructor(props) {
     super(props);
     this.getSessions = this.getSessions.bind(this);
     this.handleForm = this.handleForm.bind(this);
     this.state = {
       sessions: [],
       loading: false,
       loadingStarted: false,
       error: null,
       dates: [],
       duration: [],
       studentNames: [],
       sessionAggregates: [],
       mentor: {
         month:  1,
         year: 2019,
         email: "",
       }
     };
   }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.mentor !== nextState.mentor) {
      this.getSessions(nextState.mentor);
    }
  }

  componentDidMount(){
    if (SECRETKEY1 === "" || SECRETKEY2 === "") {
      alert("Please share your secrets with me! You need to add secret keys from api. More info in the comment in source code")
      // Follow the steps here: https://stackoverflow.com/a/50457996/2504334
    }
  }

  handleForm(e) {
    e.preventDefault();
    let monthVal = e.target.elements.month.value;
    let yearVal = e.target.elements.year.value;
    let emailVal = e.target.elements.email.value;
    let mentor = {
      month: monthVal,
      year: yearVal,
      email: emailVal
    }
    this.setState({
      mentor: mentor,
      loadingStarted: true,
      loading: true
    });

    this.getSessions(mentor);
  }

  getSessions(mentor){
    const api = `https://script.google.com/macros/s/${SECRETKEY1}/exec?email=${mentor.email}&key=${SECRETKEY2}&month=${mentor.month}&year=${mentor.year}`;
    axios.get(api)
      .then(res => {
        // console.log(res)
          const sessionAggregates = res.data.aggregates;
          const dates = res.data.details.map(obj => obj.date);
          const studentNames = res.data.details.map(obj => obj.student_name);
          const duration = res.data.details.map(obj => obj.duration);
          this.setState({
            sessions: res.data.details,
            studentNames: studentNames,
            duration: duration,
            dates: dates,
            sessionAggregates: sessionAggregates,
            loading: false,
            error: null
          });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: "Uh, oh, something is wrong :O"
        });

      });
  }
  renderLoading() {
    return (
      this.state.loading ? <p> Loading... </p> : <p> Loaded </p>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1> Track your sessions with students </h1>
           <form onSubmit={this.handleForm}>
             <input type="email" placeholder="Email" name="email" required/>
             <input type="integer" placeholder="Month (integer)" name="month" required />
             <input type="integer" placeholder="Year (integer)" name="year" required />
             <button> Go </button>
            {this.state.loadingStarted ? this.renderLoading() : <p><small>add your email, month and year</small></p>}
            <span className="error">{this.state.error} </span>
           </form>
        </header>
        <section>
        <table>
          <thead>
            <tr>
              <th> Student Name </th>
              <th> Duration </th>
              <th> Date </th>
            </tr>
          </thead>
          <tbody>
            {this.state.sessions.map((session, i) =>
              <tr key={i}>
                  <td> {session.student_name} </td>
                  <td> {session.duration} </td>
                  <td> {session.date} </td>
              </tr>
            )}
          </tbody>
        </table>
          <div className="aggregates">
            <h4> Session count: {this.state.sessionAggregates.session_count} </h4>
            <h4> Session time: {this.state.sessionAggregates.total_session_time} </h4>
            <h4> Euros Billable: {this.state.sessionAggregates.euros_billable} </h4>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
