import React from "react";

const FlexView = ({ direction, justify, align, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};

export default FlexView;
