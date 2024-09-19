import React from "react";
import "./Modal.css";
interface ModalProps {
  heading: string;
}

const Modal = ({ heading }: ModalProps) => {
  return (
    <div className="modal2">
      <div className="modal-content2">
        <h2>{heading}</h2>
        <form action="">
          <label htmlFor="">Username: </label>
          <br />
          <input className="mb-3" placeholder="Enter you Username" />
          <br />
          <label htmlFor="">Enter Password: </label>
          <br />
          <input type="password" placeholder="Enter you password" />
          <br />
        </form>
        <button className="Submit-btn" type="submit">
          sign in
        </button>
      </div>
    </div>
  );
};

export default Modal;
