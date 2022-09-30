const FormCheckbox = (props) => {
  const { label, id, className, onChange, ...otherProps } = props;

  return (
    <div className={`form__group--inline ${className}`}>
      <input
        id={id}
        className="form__checkbox"
        type="checkbox"
        name={label}
        onChange={onChange}
        {...otherProps}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormCheckbox;
