import React from "react";

import styled from "./ErrorModal.module.css";

const ErrorModalComponent = React.memo((props) => {
  return (
    <React.Fragment>
      <div className={styled.backdrop} onClick={props.onClose} />
      <div className={styled.errorModal}>
        <h2>An Error Occurred!</h2>
        <p>{props.children}</p>
        <div className={styled.errorModalActions}>
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export const ErrorModal = ErrorModalComponent;
