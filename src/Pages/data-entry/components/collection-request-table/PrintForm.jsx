import { useState } from "react";
import FormHeader from "../../../../Components/form/FormHeader";
import FormCheckbox from "../../../../Components/form/FormCheckbox";
import FormInput from "../../../../Components/form/FormInput";

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

const PrintTable = ({ data, setData }) => {
  const onChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") setData({ ...data, [name]: checked });
    else setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.print();
  };

  return (
    <form className="widget" onSubmit={handleSubmit}>
      <FormHeader subTitle="ملحوظة: لا يتم طباعة خلية 'الخيارات'">
        خيارات الطباعة
      </FormHeader>
      <section className="d-flex gap-5 mt-3">
        <section>
          {formChecboxes.map((input, i) => (
            <FormCheckbox
              key={i}
              checked={data[input.name]}
              onChange={onChange}
              {...input}
            />
          ))}
        </section>

        <FormInput
          name="collector"
          label="المحصل"
          value={data.collector}
          onChange={onChange}
          required
        />
      </section>

      <button className="btn btn--blue mt-3" type="submit">
        تأكيد طباعة الطلب
      </button>
    </form>
  );
};

export default PrintTable;
