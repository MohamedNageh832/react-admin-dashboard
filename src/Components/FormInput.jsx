import { useState } from "react";

const FormInput = (props) => {
  const { label, onChange, name, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="form__group">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="form__input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        focused={focused.toString()}
      />
      <span className="form__validation-msg">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
