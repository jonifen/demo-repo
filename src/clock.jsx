import React, { useMemo } from "react";

export const Clock = () => {
  const numberStyles = {
    "font-weight": "bold",
    color: "#008788",
    "font-size": "2rem",
  };

  const separatorStyles = {
    "padding-top": "0.5rem",
  };

  const now = new Date();
  const padNumber = (num) => {
    const padded = `00${num}`;

    return padded.substring(padded.length - 2);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={numberStyles}>{padNumber(now.getHours())}</div>
      <div style={separatorStyles}>:</div>
      <div style={numberStyles}>{padNumber(now.getMinutes())}</div>
      <div style={separatorStyles}>:</div>
      <div style={numberStyles}>{padNumber(now.getSeconds())}</div>
    </div>
  );
};
