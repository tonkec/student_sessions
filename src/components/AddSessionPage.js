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
      }} />
    </div>
  )
}

export default connect()(AddSessionPage);
