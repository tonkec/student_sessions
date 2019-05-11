import React from "react";
import { loginAsGuest } from "./../actions/auth";
import { connect } from "react-redux";

class LoginAsGuest extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    let id = "guest";
    this.props.loginAsGuest(id);
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
    dispatch(loginAsGuest(uid, email, password))
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginAsGuest);
