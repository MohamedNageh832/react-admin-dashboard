const FormDataConfirm = ({ label, children }) => {
  return (
    <section>
      <label className="text-sec">{label}</label>
      <button type="button" className="link mr-2">
        تغيير
      </button>
      <section>{children}</section>
    </section>
  );
};

export default FormDataConfirm;
