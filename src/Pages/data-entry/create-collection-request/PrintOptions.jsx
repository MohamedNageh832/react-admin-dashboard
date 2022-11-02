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
  {
    name: "addressDetails",
    label: "العنوان بالتفصيل",
  },
  {
    name: "nestedTables",
    label: "اظهار تفاصيل المستحق",
  },
];

const PrintOptions = ({ data, setData, onSubmit, printReady }) => {
  const [isMounted, setIsMounted] = useState(false);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") setData({ ...data, [name]: checked });
    else setData({ ...data, [name]: value });
  };

  useEffect(() => {
    return () => {
      if (!isMounted) {
        setIsMounted(true);
        return;
      }

      const { collector, nestedTables, ...otherData } = data;

      Object.keys(otherData).map((key) => (data[key] = true));
      setData({ collector, nestedTables, ...otherData });
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
        <button className="btn btn--blue" type="submit" disabled={printReady}>
          تأكيد طباعة الطلب
        </button>
      </footer>
    </form>
  );
};

export default PrintOptions;
