const FormButton = (props) => {
  const { text, isPending, color } = props;

  return (
    <>
      {!isPending && <button className={`btn btn--${color}`}>{text}</button>}
      {isPending && (
        <button className={`btn btn--${color}-disabled`} disabled>
          جار التحميل...
        </button>
      )}
    </>
  );
};

export default FormButton;
