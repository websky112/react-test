import React from "react";
import { Label } from ".";

const TextInput = ({ height, value, onChange, label }) => {
  return (
    <>
      <Label text={label} fontSize={10} weight="400" />
      <input
        style={{
          height,
          border: "none",
          outline: "none",
          backgroundColor: "lightgrey",
          borderRadius: 5,
          paddingLeft: 10,
          boxSizing: "border-box",
          width: "100%",
        }}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </>
  );
};

export default TextInput;
