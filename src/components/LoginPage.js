import React from "react";
import { startLogin } from "../actions/auth";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";

const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <h1> Track your sessions </h1>
      <button className="button m-l-0" onClick={startLogin}>
        {" "}
        Login With Google{" "}
      </button>
      <LoginForm />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
