import React from "react";
import { FOR, PLACEHOLDER, TYPE, TEXT, BUTTON_ACTION } from "../constants";
import { Button } from "./bootstrap/Button";
import { FormGroup } from "./bootstrap/FormGroup";
import { Input } from "./bootstrap/Input";

export const Address = ({
  address,
  register,
  errors,
  removeAddressSection,
  btnIndex,
}) => {
  return (
    <div className="row">
      <FormGroup htmlFor={FOR.STREET} classes="col-6">
        <Input
          type={TYPE.TEXT}
          placeholder={PLACEHOLDER.STREET}
          register={register}
          name={`addresses[${btnIndex}].street`}
          errors={errors}
          defaultValue={address?.street}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.CITY} classes="col-6">
        <Input
          type={TYPE.TEXT}
          placeholder={PLACEHOLDER.CITY}
          register={register}
          name={`addresses[${btnIndex}].city`}
          errors={errors}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.STATE} classes="col-6">
        <Input
          type={TYPE.TEXT}
          placeholder={PLACEHOLDER.STATE}
          register={register}
          name={`addresses[${btnIndex}].state`}
          errors={errors}
          defaultValue={address?.state}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.PHONE_NUMBER} classes="col-6">
        <Input
          type={TYPE.NUMBER}
          placeholder={PLACEHOLDER.PHONE_NUMBER}
          register={register}
          name={`addresses[${btnIndex}].phoneNumber`}
          errors={errors}
          defaultValue={address?.phoneNumber}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.ZIP_CODE} classes="col-6">
        <Input
          type={TYPE.NUMBER}
          placeholder={PLACEHOLDER.ZIP_CODE}
          register={register}
          name={`addresses[${btnIndex}].zipCode`}
          errors={errors}
          defaultValue={address?.zipCode}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.COUNTRY_CODE} classes="col-6">
        <Input
          type={TYPE.TEXT}
          placeholder={PLACEHOLDER.COUNTRY_CODE}
          register={register}
          name={`addresses[${btnIndex}].countryCode`}
          errors={errors}
          defaultValue={address?.countryCode}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.COUNTRY} classes="col-md-6">
        <Input
          type={TYPE.TEXT}
          placeholder={PLACEHOLDER.COUNTRY}
          register={register}
          name={`addresses[${btnIndex}].country`}
          errors={errors}
          defaultValue={address?.country}
        />
      </FormGroup>
      <Button
        btnText={TEXT.DELETE}
        type={TYPE.BUTTON}
        classes="btn-danger ml-3"
        removeAddressSection={removeAddressSection}
        btnIndex={btnIndex}
        action={BUTTON_ACTION.REMOVE_ADDRESS_SECTION}
      />
    </div>
  );
};
