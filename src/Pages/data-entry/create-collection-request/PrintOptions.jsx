import { useState } from "react";
import FormHeader from "../../../Components/form/FormHeader";
import FormCheckbox from "../../../Components/form/FormCheckbox";
import FormInput from "../../../Components/form/FormInput";
import { useEffect } from "react";

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

const PrintOptions = ({ data, setData, onSubmit }) => {
  const onChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") setData({ ...data, [name]: checked });
    else setData({ ...data, [name]: value });
  };

  useEffect(() => {
    return () => {
      const { collector, ...otherData } = data;

      Object.keys(otherData).map((key) => (data[key] = true));
      setData({ collector, ...otherData });
    };
  }, []);

  return (
    <form className="widget form pos-center" onSubmit={onSubmit}>
      <FormHeader subTitle="ملحوظة: لا يتم طباعة خلية 'الخيارات'">
        خيارات الطباعة
      </FormHeader>

      <FormInput
        name="collector"
        label="المحصل"
        value={data.collector}
        onChange={onChange}
        required
      />

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

      <footer className="form__footer">
        <button className="btn btn--blue" type="submit">
          تأكيد طباعة الطلب
        </button>
      </footer>
    </form>
  );
};

export default PrintOptions;
