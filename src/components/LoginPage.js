import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin}) => {
  return (
    <div>
      <h1> Login with Google </h1>
      <button onClick={startLogin}> Just Login </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
