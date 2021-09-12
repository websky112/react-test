import React from "react";
import { Label } from "../../../components";

const NameColumn = ({ name, symbol }) => {
  return (
    <>
      <Label text={name} weight="bold" fontSize={13} />
      <Label text={` (${symbol})`} weight="400" fontSize={11} />
    </>
  );
};

export default NameColumn;
