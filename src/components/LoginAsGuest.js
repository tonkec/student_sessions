import React from "react";
import { loginAsGuest, logout } from "./../actions/auth";
import { startGetSessions } from "./../actions/sessions";
import { connect } from "react-redux";

class LoginAsGuest extends React.Component {
  state = {
    user: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ user: "guest" });
    this.storeUser();
  };

  async storeUser() {
    try {
      const value = await localStorage.setItem("user", this.state.user);
      await localStorage.setItem("user", this.state.user);
      await this.props.loginAsGuest(this.state.user);
      this.props.getSessions();
    } catch (error) {
      console.log(error);
    }
  }

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
