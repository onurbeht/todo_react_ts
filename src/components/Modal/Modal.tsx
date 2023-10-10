import React from "react";
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#Modal");

    modal!.classList.add("hide");
  };

  return (
    <div id="Modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto do modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
