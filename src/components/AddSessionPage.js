import React from 'react';
import SessionForm from './SessionForm';
import {connect} from 'react-redux';
import {addSessionToDb} from '../actions/sessions';

const AddSessionPage = (props) => {
  return (
    <div>
      <h1> Add New Session </h1>
      <SessionForm onSubmit={(session) => {
        props.dispatch(addSessionToDb(session));
        console.log(session)
        props.history.push('/dashboard');
      }} />
    </div>
  )
}

export default connect()(AddSessionPage);
