import React from "react";
import LoginAsGuest from "./LoginAsGuest";
import LoginWithGoogle from "./LoginWithGoogle";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="m-b-0"> Sessions Tracker </h1>
      <p>
        Track mentoring sessions with your students and get the meaningful data
      </p>
      <LoginWithGoogle />
      <LoginAsGuest />
    </div>
  );
};

export default LoginPage;
