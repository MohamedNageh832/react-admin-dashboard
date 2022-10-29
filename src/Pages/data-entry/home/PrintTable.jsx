import { useState } from "react";
import FormHeader from "../../../Components/form/FormHeader";
import FormCheckbox from "../../../Components/form/FormCheckbox";
import FormInput from "../../../Components/form/FormInput";

const formChecboxes = [
  {
    name: "date",
    label: "تاريخ التعاقد",
  },
  {
    name: "phone",
    label: "رقم الهاتف",
  },
  {
    name: "area",
    label: "المنطقة",
  },
];

const PrintTable = ({ data, setData, onSubmit }) => {
  const onChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") setData({ ...data, [name]: checked });
    else setData({ ...data, [name]: value });
  };

  return (
    <form className="widget" onSubmit={onSubmit}>
      <FormHeader subTitle="ملحوظة: لا يتم طباعة خلية 'الخيارات'">
        خيارات الطباعة
      </FormHeader>
      {formChecboxes.map((input, i) => (
        <FormCheckbox
          key={i}
          checked={data[input.name]}
          onChange={onChange}
          {...input}
        />
      ))}

      <FormInput
        className="w-50"
        name="collector"
        label="المحصل"
        value={data.collector}
        onChange={onChange}
        required
      />

      <button className="btn btn--blue mt-3" type="submit">
        تأكيد طباعة الطلب
      </button>
    </form>
  );
};

export default PrintTable;
