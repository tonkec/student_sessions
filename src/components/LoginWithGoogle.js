import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";

class LoginWithGoogle extends React.Component {
  render() {
    return (
      <button className="button m-l-0" onClick={this.props.startLogin}>
        Login With Google
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginWithGoogle);
