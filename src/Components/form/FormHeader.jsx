const FormHeader = ({ subTitle, children }) => {
  return (
    <header className="form__header">
      <h3 className="form__title">{children}</h3>
      <small className="text-sec fs-1">{subTitle}</small>
    </header>
  );
};

export default FormHeader;
