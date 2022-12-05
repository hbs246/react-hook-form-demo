import React from "react";
import { TYPE, PLACEHOLDER } from "../../constants";

export const CheckBox = ({ labelText }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type={TYPE.CHECKBOX} id="gridCheck" />
      <label className="form-check-label" htmlFor={PLACEHOLDER.GRID_CHECK}>
        {labelText}
      </label>
    </div>
  );
};
