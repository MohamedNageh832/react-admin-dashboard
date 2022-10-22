const Checkbox = (props) => {
  const { onChange, className, ...otherProps } = props || {};

  return (
    <span className={`checkbox ${className}`}>
      <input
        className="checkbox__input"
        type="checkbox"
        onChange={onChange}
        {...otherProps}
      />
      <span className="checkbox__ui"></span>
    </span>
  );
};

export default Checkbox;
