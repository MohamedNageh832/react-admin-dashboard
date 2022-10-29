const FormSelect = (props) => {
  const { options, placeholder, ...otherProps } = props;

  return (
    <select {...otherProps}>
      {placeholder && (
        <option disabled={true} value="">
          {placeholder}
        </option>
      )}
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
