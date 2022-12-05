import React from "react";

export const FormGroup = ({
  children,
  labelText,
  htmlFor,
  classes = "col-md-12",
}) => {
  return (
    <div className={`form-group ${classes}`}>
      {labelText && <label htmlFor={htmlFor}>{labelText}</label>}

      {children}
    </div>
  );
};
