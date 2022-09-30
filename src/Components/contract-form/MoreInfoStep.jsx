import FormInput from "../FormInput";

const MoreInfoStep = ({ values, onChange }) => {
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
      name: "buildingNumber",
      type: "number",
      errorMessage: "هذا الحقل مطلوب",
      required: true,
    },
    {
      label: "شقة",
      name: "apartment",
      type: "number",
      errorMessage: "هذا الحقل مطلوب",
      required: true,
    },
    {
      label: "حساب التعاقد ل",
      name: "countContractFor",
      type: "text",
      errorMessage: "هذا الحقل مطلوب",
      required: true,
    },
  ];

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

export default MoreInfoStep;
