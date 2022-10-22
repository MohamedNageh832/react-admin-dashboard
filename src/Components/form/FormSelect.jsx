const FormSelect = (props) => {
  const { options, ...otherProps } = props;

  return (
    <select {...otherProps}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
