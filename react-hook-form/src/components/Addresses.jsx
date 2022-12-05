import { ADDRESS_PAYLOAD, BUTTON_ACTION, TEXT, TYPE } from "../constants";
import { Card } from "./bootstrap/Card";
import { Address } from "./Address";
import { Button } from "./bootstrap/Button";

export const Addresses = ({ register, errors, addresses, remove, append }) => {
  const removeAddressSection = (index) => {
    remove(index);
  };

  const addMoreAddress = () => {
    append(ADDRESS_PAYLOAD);
  };

  const addressesStyle = {
    overflowX: "auto",
    maxHeight: "356px",
  };

  return (
    <div style={addressesStyle}>
      {addresses &&
        addresses.length > 0 &&
        addresses.map((address, index) => (
          <Card cardTitle={`${TEXT.ADDRESS} ${index + 1}`} key={index}>
            <Address
              address={address}
              register={register}
              errors={errors}
              removeAddressSection={removeAddressSection}
              btnIndex={index}
              action={BUTTON_ACTION.REMOVE_ADDRESS_SECTION}
            />
            {addresses.length === index + 1 && (
              <Button
                btnText={TEXT.ADD_MORE}
                type={TYPE.BUTTON}
                addMoreAddress={addMoreAddress}
                action={BUTTON_ACTION.ADD_ADDRESS_SECTION}
              />
            )}
          </Card>
        ))}
    </div>
  );
};
