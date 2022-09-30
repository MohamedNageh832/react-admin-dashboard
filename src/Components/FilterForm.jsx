import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import DateBounds from "./DateBounds";
import FormCheckbox from "./FormCheckbox";
import FormRadio from "./FormRadio";
import MultiSelect from "./MultiSelect";

const FilterForm = ({ setIsPending, setData }) => {
  const [values, setValues] = useState({
    dateFrom: "",
    dateTo: "",
    services: [],
    regions: [],
    collectionState: "",
  });

  const regions = [
    { name: "السيل", value: "34" },
    { name: "العقاد", value: "12" },
    { name: "اطلس", value: "192" },
  ];

  const services = [
    { label: "جمع منزلي" },
    { label: "نظافة سلم" },
    { label: "رش وتعقيم" },
  ];

  const collectionStates = ["الكل", "تم التحصيل", "لم يتم التحصيل", "متأخر"];
  const contractStates = ["الكل", "متعاقد", "غير متعاقد"];

  const [servicesCheckboxes, setServicesCheckboxes] = useState(
    [...Array(services.length)].map(() => false)
  );

  const handleCheckboxes = (e) => {
    if (e.target.checked === true) {
      setValues({
        ...values,
        services: [...values.services, e.target.name],
      });
    } else {
      setValues({
        ...values,
        services: values.services.filter((el) => el !== e.target.name),
      });
    }

    const id = e.target.id;

    const arr = [...servicesCheckboxes];

    arr[id] = !arr[id];
    setServicesCheckboxes(arr);
  };
  console.log(values);

  const handleSelectAll = () => {
    if (
      servicesCheckboxes.some((el) => el === false) ||
      servicesCheckboxes.every((el) => el === false)
    ) {
      setValues({
        ...values,
        services: services.map((el) => el.label),
      });

      setServicesCheckboxes(servicesCheckboxes.map((el) => true));
    } else {
      setServicesCheckboxes(servicesCheckboxes.map((el) => false));

      setValues({
        ...values,
        services: [],
      });
    }
  };

  const handleDelete = (item) => {
    const regions = values.regions.filter((value) => value !== item);

    setValues({ ...values, regions });
  };

  const handleSuggestions = (e, selectedVal) => {
    e.stopPropagation();

    if (!values.regions.includes(selectedVal)) {
      const regions = [...values.regions, selectedVal];
      setValues({ ...values, regions });
    }
  };

  const handleRadios = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { isPending, error, excuteFetch } = useFetch("");

    // setIsPending(isPending);
    // setData(await excuteFetch());
  };

  return (
    <form className="widget filter-form" onSubmit={handleSubmit}>
      <header className="space-between mb-3">
        <h2 className="h3">فلترة النتائج</h2>
        <button className="link fsize-3">تطبيق</button>
      </header>
      <main className="filter-form__body">
        <section className="filter-form__column">
          <section className="pos-relative">
            <h4 className="filter-form__title">المنطقة</h4>
            <MultiSelect
              handleDelete={handleDelete}
              handleSuggestions={handleSuggestions}
              datalist={regions}
              selectedValues={values.regions}
            />
          </section>
          <section>
            <h4 className="filter-form__title">التاريخ</h4>
            <DateBounds values={values} setValues={setValues} />
          </section>
        </section>
        <section className="filter-form__column">
          <FormCheckbox
            label="الخدمة/الخدمات"
            checked={servicesCheckboxes.every((el) => el === true)}
            onChange={handleSelectAll}
            className="bold mt-3"
          />
          {services.map((item, i) => (
            <FormCheckbox
              label={item.label}
              id={i}
              key={i}
              checked={servicesCheckboxes[i]}
              onChange={handleCheckboxes}
            />
          ))}
        </section>
        <section className="filter-form__column">
          <h4 className="filter-form__title">حالة التحصيل</h4>
          <section className="filter-form__collection-state">
            {collectionStates.map((state, i) => (
              <FormRadio
                key={i + 10}
                value={state}
                name="collectionState"
                onChange={handleRadios}
              />
            ))}
          </section>
          <section className="">
            <h4 className="filter-form__title">حالة التعاقد</h4>
            <section className="filter-form__collection-state">
              {contractStates.map((state, i) => (
                <FormRadio
                  key={i + 10}
                  value={state}
                  name="contractState"
                  onChange={handleRadios}
                />
              ))}
            </section>
          </section>
        </section>
      </main>
    </form>
  );
};

export default FilterForm;
