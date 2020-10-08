import React from "react";

import "./InfoBox.css";

const InfoBox = ({ title, cases, total, isRed, active, ...props }) => {
  return (
    <div
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
      onClick={props.onClick}
    >
      <h3>{title}</h3>
      <h4>{cases}</h4>
      <p>{total} TOTAL</p>
    </div>
  );
};

export default InfoBox;
