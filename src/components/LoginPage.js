import React from "react";
import LoginAsGuest from "./LoginAsGuest";
import LoginWithGoogle from "./LoginWithGoogle";

const LoginPage = () => {
  return (
    <div>
      <h1> Track your sessions </h1>
      <LoginWithGoogle />
      <LoginAsGuest />
    </div>
  );
};

export default LoginPage;
