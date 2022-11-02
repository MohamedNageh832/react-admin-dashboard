import Checkbox from "./Checkbox";

const FormCheckbox = (props) => {
  const { label, id, name, className, onChange, ...otherProps } = props || {};

  return (
    <div className={`form__group--inline ${className}`}>
      <Checkbox
        id={id ? id : name}
        className="form__checkbox checkbox--sm"
        type="checkbox"
        name={name}
        onChange={onChange}
        {...otherProps}
      />
      {label && <label htmlFor={id ? id : name}>{label}</label>}
    </div>
  );
};

export default FormCheckbox;
