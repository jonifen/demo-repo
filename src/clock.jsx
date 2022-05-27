import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const int = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(int);
    };
  }, []);

  const numberStyles = {
    "font-weight": "bold",
    color: "#008788",
    "font-size": "2rem",
  };

  const separatorStyles = {
    "padding-top": "0.5rem",
  };

  const padNumber = (num) => {
    const padded = `00${num}`;

    return padded.substring(padded.length - 2);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={numberStyles}>{padNumber(now.getHours())}</div>
        <div style={separatorStyles}>:</div>
        <div style={numberStyles}>{padNumber(now.getMinutes())}</div>
        <div style={separatorStyles}>:</div>
        <div style={numberStyles}>{padNumber(now.getSeconds())}</div>
      </div>
      <div style={{ paddingTop: "1rem" }}>
        {padNumber(now.getDate())}/{padNumber(now.getMonth() + 1)}/
        {now.getFullYear()}
      </div>
    </div>
  );
};
