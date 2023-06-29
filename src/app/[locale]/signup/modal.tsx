import React from "react";
import { brytzone } from "../home/header";

const SubmitModal = () => {
  return (
    <div className={`${brytzone}_submit_modal`}>
      <h2 className="">Warning</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, sequi!</p>
      <div className="actions">
        <button type="button">Cancel</button>
        <button type="button">Proceed</button>
      </div>
    </div>
  );
};

export default SubmitModal;
