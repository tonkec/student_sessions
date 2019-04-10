import React, { Component } from 'react';
import db from '../firebase/firebase';
import {startGetSessions} from '../actions/sessions';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1> Your Current Sessions </h1>
      </div>
    );
  }
}

export default HomePage;
