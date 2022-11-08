import FormHeader from "../../form/FormHeader";
import FormBody from "./form-body";

const StepOne = ({ values, onChange, setCurrentStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <form className="form pos-center" onSubmit={handleSubmit}>
      <FormHeader subTitle="الخطوة 1 من 3">ادخال تعاقد جديد</FormHeader>

      <FormBody values={values} onChange={onChange} />

      <footer className="form__footer">
        <button className="btn btn--blue" type="submit">
          التالي
        </button>
      </footer>
    </form>
  );
};

export default StepOne;
