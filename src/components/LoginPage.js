import React from "react";
import LoginForm from "./LoginForm";
import LoginWithGoogle from "./LoginWithGoogle";

const LoginPage = () => {
  return (
    <div>
      <h1> Track your sessions </h1>
      <LoginWithGoogle />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
