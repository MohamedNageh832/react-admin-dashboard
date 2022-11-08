const FormDataConfirm = ({ label, children }) => {
  return (
    <section className="mb-2">
      <label className="text--secondary">{label}</label>
      <button type="button" className="link mr-2">
        تغيير
      </button>
      <section>{children}</section>
    </section>
  );
};

export default FormDataConfirm;
