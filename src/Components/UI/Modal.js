import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onclick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onclick={props.onclick} />, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </Fragment>
  );
};

export default Modal;
