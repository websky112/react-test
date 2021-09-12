import React from "react";

const Label = ({ fontSize, weight, text, color }) => (
  <span style={{ fontSize, fontWeight: weight, color: color || "black" }}>
    {text}
  </span>
);

export default Label;
