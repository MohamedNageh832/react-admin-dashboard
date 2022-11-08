import FormInput from "../../../form/FormInput";

const formData = [
  {
    label: "العنوان بالتفصيل",
    name: "addressDetails",
    type: "text",
    errorMessage: "هذا الحقل مطلوب",
    required: true,
  },
  {
    label: "عمارة",
    name: "building",
    type: "text",
  },
  {
    label: "شقة",
    name: "apartment",
    type: "number",
  },
  {
    label: "حساب التعاقد ل",
    name: "countContractFor",
    type: "text",
  },
];

const FormBody = ({ values, onChange }) => {
  return (
    <>
      <FormInput
        {...formData[0]}
        value={values[formData[0].name]}
        onChange={onChange}
      />
      <div className="separator--secondary" data-title="اختياري"></div>
      <section className="form__row">
        {formData.slice(1, 3).map((input, i) => (
          <FormInput
            key={i}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
      </section>
      <FormInput
        {...formData[3]}
        value={values[formData[3].name]}
        onChange={onChange}
      />
    </>
  );
};

export default FormBody;
