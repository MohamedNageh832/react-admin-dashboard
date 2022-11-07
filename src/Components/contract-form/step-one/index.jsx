import FormInput from "../../form/FormInput";
import FormHeader from "../../form/FormHeader";

const formData = [
  {
    label: "اسم العميل ثلاثي",
    name: "clientName",
    type: "text",
    errorMessage: "هذا الحقل مطلوب",
    required: true,
  },
  {
    label: "رقم الهاتف",
    name: "phone",
    type: "number",
    errorMessage: "يجب ان يتكون رقم الهاتف من 11 رقم تبدأ ب '01'",
    required: true,
  },
  {
    label: "اسم المنطقة",
    name: "area",
    type: "text",
    errorMessage: "هذا الحقل مطلوب",
    required: true,
  },
];

const StepOne = ({ values, onChange, setCurrentStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <form className="form pos-center" onSubmit={handleSubmit}>
      <FormHeader subTitle="الخطوة 1 من 3">ادخال تعاقد جديد</FormHeader>

      {formData.map((input, i) => (
        <FormInput
          key={i}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}

      <footer className="form__footer">
        <button className="btn btn--blue" type="submit">
          التالي
        </button>
      </footer>
    </form>
  );
};

export default StepOne;
