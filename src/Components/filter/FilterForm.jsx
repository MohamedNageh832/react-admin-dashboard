import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import DateBounds from "../form/DateBounds";
import FormCheckbox from "../form/FormCheckbox";
import FormRadio from "../form/FormRadio";
import MultiSelect from "../multi-select";
import FilterHeader from "./FilterHeader";

const FilterForm = ({ setIsPending, setData, setShowForm }) => {
  const savedServices = []; // fetch from server

  const [values, setValues] = useState({
    dateFrom: "",
    dateTo: "",
    services: savedServices,
    regions: [], // Send as empty array when equal to length
    collectionState: "الكل",
    contractState: "الكل",
  });

  const regions = [
    { name: "السيل", value: "34" },
    { name: "العقاد", value: "12" },
    { name: "اطلس", value: "192" },
  ]; // fetch regions

  const services = [
    { label: "جمع منزلي" },
    { label: "نظافة سلم" },
    { label: "رش وتعقيم" },
  ];

  const collectionStates = ["الكل", "تم التحصيل", "لم يتم التحصيل", "متأخر"];
  const contractStates = ["الكل", "متعاقد", "غير متعاقد"];

  const [servicesCheckboxes, setServicesCheckboxes] = useState(
    [...Array(services.length)].map(() => true)
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

  const handleSelectAll = () => {
    if (servicesCheckboxes.some((el) => el === false)) {
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

    console.log(values);

    setShowForm(false);
  };

  return (
    <form className="widget filter-form" onSubmit={handleSubmit}>
      <FilterHeader setShowForm={setShowForm} />

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
            checked={servicesCheckboxes.every((el) => el === true)} //Array.every
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
                checked={values.collectionState === state}
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
                  checked={values.contractState === state}
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
