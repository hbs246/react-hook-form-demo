import React from "react";
import { Error } from "./Error";
export const Input = ({
  type,
  placeholder,
  required = true,
  register,
  name,
  errors,
  defaultValue = "",
}) => {
  return (
    <>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name, { required })}
        defaultValue={defaultValue}
      />
      {errors[name] && <Error errKey={name} />}
    </>
  );
};
