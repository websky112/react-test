import React from "react";

const Button = ({ children, onPress }) => {
  return (
    <button onClick={onPress} className="btn-wrapper">
      {children}
    </button>
  );
};

export default Button;
