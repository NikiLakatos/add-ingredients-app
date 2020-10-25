import React from "react";
import "./LoadingIndicator.css";

const LoadingIndicatorComponent = () => {
  return (
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export const LoadingIndicator = LoadingIndicatorComponent;
