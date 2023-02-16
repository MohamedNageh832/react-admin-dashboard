const Button = ({ onClick, text, className }) => {
  return (
    <button
      className={`previewer__btn${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
