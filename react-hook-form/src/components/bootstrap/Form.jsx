export const Form = ({ children, handleSubmit }) => {
  const onSubmitForm = (data) => {
    console.log('data',data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-row">{children}</div>
    </form>
  );
};
