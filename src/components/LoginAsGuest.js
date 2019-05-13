import React from "react";
import { loginAsGuest, logout } from "./../actions/auth";
import { startGetSessions } from "./../actions/sessions";
import { connect } from "react-redux";

class LoginAsGuest extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.saveUser();
  };

  loginUser = user => {
    this.props.logout();
    this.props.loginAsGuest(user);
    this.props.getSessions();
  };

  saveUser = () => {
    localStorage.setItem("user", "guest");
    this.loginUser();
  };

  checkUser = () => {
    let user = localStorage.getItem("user");
    if (user) {
      this.loginUser();
      // login user
    } else {
      // redirect to dashboard
    }
  };

  loginUser = () => {
    this.props.logout();
    this.props.loginAsGuest("guest");
    this.props.getSessions();
  };

  componentDidMount = () => {
    this.checkUser();
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
  loginAsGuest: id => dispatch(loginAsGuest(id)),
  logout: () => dispatch(logout()),
  getSessions: () => dispatch(startGetSessions())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginAsGuest);
