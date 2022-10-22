const FormRadio = (props) => {
  const { value, checked, onChange, ...otherProps } = props;

  return (
    <div className="pos-relative d-inline-block">
      <input
        className="form__radio"
        type="radio"
        value={value}
        {...otherProps}
        checked={checked}
        onChange={onChange}
      />
      <button className="form__radio-btn" type="button">
        {value}
      </button>
    </div>
  );
};

export default FormRadio;
