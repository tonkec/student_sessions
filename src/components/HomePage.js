import React, { Component } from 'react';
import SessionsSummary from './SessionsSummary';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1> Your Sessions </h1>
        <SessionsSummary />
      </div>
    );
  }
}

export default HomePage;
