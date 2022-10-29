import FormHeader from "../../../Components/form/FormHeader";
import FormCheckbox from "../../../Components/form/FormCheckbox";
import { useEffect } from "react";

const formChecboxes = [
  {
    name: "contractSerial",
    label: "سريال التعاقد",
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
    name: "services",
    label: "الخدمات",
  },
  {
    name: "status",
    label: "حالة التحصيل",
  },
  {
    name: "receiptNumber",
    label: "سريال الفاتورة",
  },
];

const PrintOptions = ({ data, setData, onSubmit }) => {
  const onChange = (e) => {
    const { name, checked } = e.target;

    setData({ ...data, [name]: checked });
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
        <button className="btn btn--blue mt-3" type="submit">
          تأكيد الطباعة
        </button>
      </footer>
    </form>
  );
};

export default PrintOptions;
