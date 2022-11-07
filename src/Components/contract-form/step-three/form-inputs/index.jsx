import FormInput from "../../../form/FormInput";

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

const FormInputs = ({ values, onChange }) => {
  return formData.map((input, i) => (
    <FormInput
      key={i}
      {...input}
      value={values[input.name]}
      onChange={onChange}
    />
  ));
};

export default FormInputs;
