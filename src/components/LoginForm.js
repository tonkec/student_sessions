import React from "react";
import uuid from "uuid";
import { loginWithoutGoogle } from "./../actions/auth";
import { connect } from "react-redux";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onUserEmailChange = e => {
    const email = e.target.value;
    this.setState({ email });
  };

  onUserPasswordChange = e => {
    const password = e.target.value;
    this.setState({ password });
  };

  handleSubmit = e => {
    e.preventDefault();
    let uid = uuid();
    this.props.loginWithoutGoogle(uid, this.state.email, this.state.password);
  };

  render() {
    return (
      <form className="login-form">
        <input
          type="email"
          placeholder="Your Email"
          required
          onChange={this.onUserEmailChange}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          onChange={this.onUserPasswordChange}
        />
        <button className="button btn-login-form" onClick={this.handleSubmit}>
          Go
        </button>
        <br />
        <small>
          {" "}
          If you already have account, we will log you in. If you don't have
          account, we will create a new one{" "}
        </small>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  loginWithoutGoogle: (uid, email, password) =>
    dispatch(loginWithoutGoogle(uid, email, password))
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginForm);
