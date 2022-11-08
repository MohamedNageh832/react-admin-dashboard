import FormInput from "../../../form/FormInput";

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

const FormBody = ({ values, onChange }) => {
  return formData.map((input, i) => (
    <FormInput
      key={i}
      {...input}
      value={values[input.name]}
      onChange={onChange}
    />
  ));
};

export default FormBody;
