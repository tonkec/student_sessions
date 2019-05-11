import React from "react";
import { loginAsGuest, logout } from "./../actions/auth";
import { startGetSessions } from "./../actions/sessions";
import { connect } from "react-redux";

class LoginAsGuest extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    let id = "guest";
    this.props.logout();
    this.props.loginAsGuest(id);
    this.props.getSessions();
  };

  render() {
    return (
      <button className="button" onClick={this.handleSubmit}>
        Login as Guest
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  loginAsGuest: (uid, email, password) =>
    dispatch(loginAsGuest(uid, email, password)),
  logout: () => dispatch(logout()),
  getSessions: () => dispatch(startGetSessions())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginAsGuest);
