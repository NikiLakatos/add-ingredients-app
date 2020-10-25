import React from "react";
import styled from "./Auth.module.css";
import { Card } from "./UIComponents/Card";

const AuthComponent = (props) => {
  const loginHandler = () => {};

  return (
    <div className={styled.auth}>
      <Card>
        <h3>You are not authenticated!</h3>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

export const Auth = AuthComponent;
