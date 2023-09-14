import React from "react";
import Button from "../wrapper/Button";
import "./ErrorModal.css";
const ErrorModal = (props) => {
  return (
    <div className="backdrop" onClick={props.onConfirm}>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <p className="content">{props.message}</p>
        <form className="action">
          <Button onClick={props.onConfirm}>Close</Button>
        </form>
      </div>
    </div>
  );
};

export default ErrorModal;
