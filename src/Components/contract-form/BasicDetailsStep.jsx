import FormInput from "../FormInput";

const BasicDetailsStep = ({ values, onChange }) => {
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
      name: "phoneNumber",
      type: "number",
      errorMessage: "يجب ان يتكون رقم الهاتف من 11 رقم تبدأ ب '01'",
      required: true,
    },
    {
      label: "اسم المنطقة",
      name: "region",
      type: "text",
      errorMessage: "هذا الحقل مطلوب",
      required: true,
    },
  ];

  return formData.map((input, i) => (
    <FormInput
      key={i}
      {...input}
      value={values[input.name]}
      onChange={onChange}
    />
  ));
};

export default BasicDetailsStep;
