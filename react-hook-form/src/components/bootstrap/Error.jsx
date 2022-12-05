import React from "react";
import { TEXT } from "../../constants";

export const Error = ({ errKey }) => {
  return <p className="text-danger">{TEXT[errKey]} is required</p>;
};
