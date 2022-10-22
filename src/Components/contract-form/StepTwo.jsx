import FormInput from "../form/FormInput";
import FormHeader from "../form/FormHeader";

const StepTwo = ({ values, onChange, setCurrentStep }) => {
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
      type: "text",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <form className="form pos-fixed pos-center" onSubmit={handleSubmit}>
      <FormHeader subTitle="الخطوة 2 من 3">ادخال تعاقد جديد</FormHeader>

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
    </form>
  );
};

export default StepTwo;
