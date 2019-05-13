import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";

const LoginWithGoogle = ({ startLogin }) => (
  <button className="button m-l-0" onClick={startLogin}>
    Login with Gmail
  </button>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginWithGoogle);
