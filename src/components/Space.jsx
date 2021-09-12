import React, { memo } from "react";

const Space = ({ size }) => {
  return <div style={{ width: size, height: size }} />;
};

export default memo(Space);
