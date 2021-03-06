import React from "react";
import { connect } from "react-redux";

const LoggedInAs = ({ email }) => <p> Logged in as {email}</p>;

const mapStateToProps = (state, props) => ({
  email: state.auth.email || state.auth.id
});

export default connect(mapStateToProps)(LoggedInAs);
