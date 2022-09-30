const FormDataConfirm = ({ label, value }) => {
  return (
    <section>
      <label className="text-sec">{label}</label>
      <button type="button" className="link mr-2">
        تغيير
      </button>
      <section>
        <input className="form__input" disabled value={value} />
      </section>
    </section>
  );
};

export default FormDataConfirm;
