import React, { useMemo } from "react";

export const Clock = () => {
  const now = new Date();
  const padNumber = (num) => {
    const padded = `00${num}`;

    return padded.substring(padded.length - 2);
  };

  return (
    <div>
      <span style={{ "font-weight": "bold" }}>{padNumber(now.getHours())}</span>
      <span>:</span>
      <span style={{ "font-weight": "bold" }}>{padNumber(now.getMinutes())}</span>
      <span>:</span>
      <span style={{ "font-weight": "bold" }}>{padNumber(now.getSeconds())}</span>
    </div>
  );
};
