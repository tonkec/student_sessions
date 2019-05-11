import React from "react";

class LoginForm extends React.Component {
  state = {
    user: ""
  };

  onUserEmailChange = e => {
    const email = e.target.value;
    this.setState({
      user: {
        email
      }
    });
  };

  onUserPasswordChange = e => {
    const password = e.target.value;
    this.setState({
      user: {
        password
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
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
          {" "}
          Go{" "}
        </button>
      </form>
    );
  }
}

export default LoginForm;
