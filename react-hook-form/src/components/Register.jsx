import { FormGroup } from "./bootstrap/FormGroup";
import { Input } from "./bootstrap/Input";
import { TYPE, PLACEHOLDER, FOR, TEXT, BUTTON_ACTION ,ADDRESS_PAYLOAD } from "../constants";
import { Button } from "./bootstrap/Button";
import { useFieldArray, useForm } from "react-hook-form";
import { Form } from "./bootstrap/Form";
import { Addresses } from "./Addresses";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, },
    control,
  } = useForm();

  const { append, remove, fields } = useFieldArray({
    name: "addresses",
    control
  });

  return (
    <Form handleSubmit={handleSubmit}>
      <FormGroup htmlFor={FOR.FIRST_NAME}>
        <Input
          type={TYPE.TEXT}
          placeholder={PLACEHOLDER.FIRST_NAME}
          register={register}
          name={FOR.FIRST_NAME}
          errors={errors}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.LAST_NAME}>
        <Input
          type={TYPE.TEXT}
          placeholder={PLACEHOLDER.LAST_NAME}
          register={register}
          name={FOR.LAST_NAME}
          errors={errors}
        />
      </FormGroup>
      <FormGroup htmlFor={FOR.EMAIL_ADDRESS}>
        <Input
          type={TYPE.EMAIL}
          placeholder={PLACEHOLDER.EMAIL_ADDRESS}
          register={register}
          name={FOR.EMAIL_ADDRESS}
          errors={errors}
        />
      </FormGroup>
      <Addresses
        register={register}
        errors={errors}
        control={control}
        remove={remove}
        addresses={fields.length ? fields : fields.concat(ADDRESS_PAYLOAD)}
        append={append}
      />

      <Button
        btnText={TEXT.REGISTER}
        type={TEXT.SUBMIT}
        action={BUTTON_ACTION.SUBMIT_REGISTER_FORM}
        classes="btn-success mt-4"
        btnDivClass="mx-auto"
      />
    </Form>
  );
};
