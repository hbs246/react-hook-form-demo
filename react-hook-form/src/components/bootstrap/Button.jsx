import { BUTTON_ACTION } from "../../constants";
export const Button = ({
  btnText,
  classes = "btn-primary",
  type,
  removeAddressSection,
  btnIndex,
  addMoreAddress,
  action,
  btnDivClass
}) => {
  const onClick = () => {
    const { ADD_ADDRESS_SECTION, REMOVE_ADDRESS_SECTION } = BUTTON_ACTION;
    switch (action) {
      case ADD_ADDRESS_SECTION:
        addMoreAddress();
        break;
      case REMOVE_ADDRESS_SECTION:
        removeAddressSection(btnIndex);
        break;
      default:
    }
  };
  return (
    <div className={`${btnDivClass}`}>
      <button
        type={type}
        className={`btn ${classes}`}
        onClick={() => onClick()}
      >
        {btnText}
      </button>
    </div>
  );
};
