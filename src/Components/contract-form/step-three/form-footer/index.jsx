const FormFooter = (setCurrentStep) => {
  return (
    <footer className="form__footer">
      <button className="btn btn--blue" type="submit">
        التالي
      </button>

      <button
        className="btn btn--secondary"
        type="button"
        onClick={() => setCurrentStep((prev) => prev - 1)}
      >
        السابق
      </button>
    </footer>
  );
};

export default FormFooter;
