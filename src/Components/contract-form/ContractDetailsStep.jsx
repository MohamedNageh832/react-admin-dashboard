import { Add } from "@mui/icons-material";
import EditClientServices from "../EditClientServices";
import FormInput from "../FormInput";

const ContractDetailsStep = ({ values, onChange }) => {
  const formData = [
    {
      label: "سريال التعاقد",
      name: "contractSerial",
      type: "number",
      errorMessage: "ادخل سريال العقد",
      required: true,
    },
    {
      label: "تاريخ التعاقد",
      name: "contractDate",
      type: "date",
      className: "custom-date",
      errorMessage: "اختر تاريخ مناسب",
      required: true,
    },
  ];

  return (
    <>
      <section className="form__group">
        <label className="form__label">الخدمة/الخدمات</label>
        <button className="link" type="button">
          <Add /> اضف خدمة جديدة
        </button>
      </section>

      {formData.map((input, i) => (
        <FormInput
          key={i}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <EditClientServices clientName={values.clientName} />
    </>
  );
};

export default ContractDetailsStep;
