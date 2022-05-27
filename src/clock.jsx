import React, { useMemo } from "react";

export const Clock = () => {
  const now = new Date();
  const padNumber = (num) => {
    const padded = `00${num}`;

    return padded.substring(padded.length - 2);
  };

  return (
    <div>
      <span>{padNumber(now.getHours())}</span>
      <span style={{ "font-weight": "bold" }}>:</span>
      <span>{padNumber(now.getMinutes())}</span>
      <span style={{ "font-weight": "bold" }}>:</span>
      <span>{padNumber(now.getSeconds())}</span>
    </div>
  );
};
