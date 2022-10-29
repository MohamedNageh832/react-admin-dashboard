import deepClone from "../../../utils/deepClone";
import useFetch from "../../../Hooks/useFetch";
import FormDatalist from "../../form/FormDatalist";
import FormInput from "../../form/FormInput";
import FormSelect from "../../form/FormSelect";
import DeleteBtn from "./DeleteBtn";

const formSelectBoxes = [
  {
    name: "per",
    placeholder: "السعر لكل...",
    options: [
      { value: "month", text: "شهر" },
      { value: "one", text: "مرة" },
    ],
  },
  {
    name: "type",
    options: [
      { value: "continous", text: "خدمة مستمرة" },
      { value: "once", text: "خدمة لمرة واحدة" },
    ],
  },
];

const EditServicesRows = ({ services, setServices, setErrors }) => {
  const { data: datalistOptions } = useFetch("");

  const handleServiceChange = (index) => {
    return (e) => {
      const { name, value } = e.target;
      const servicesClone = deepClone(services);

      servicesClone[index][name] = value;

      setServices((prev) => servicesClone);
      console.log(servicesClone);
      setErrors((prev) => ({ ...prev, validServices: true }));
    };
  };

  console.log("rerendered");

  return services.map((service, i) => (
    <ul className="edit-services-table--row" key={i + 200}>
      <li className="edit-services-table__cell">
        <FormDatalist
          className="table__input"
          name="service"
          placeholder="الخدمة..."
          value={service.service}
          onChange={handleServiceChange(i)}
          options={datalistOptions}
        />
      </li>

      <li className="edit-services-table__cell">
        <FormInput
          className="table__input"
          type="number"
          name="price"
          placeholder="سعر الخدمة..."
          value={service.price}
          onChange={handleServiceChange(i)}
        />
      </li>

      {formSelectBoxes.map((item, idx) => (
        <li className="edit-services-table__cell" key={idx + 100}>
          <FormSelect
            className="table__select"
            {...item}
            value={service[item.name]}
            onChange={handleServiceChange(i)}
          />
        </li>
      ))}

      {services.length > 1 && (
        <li className="flex-center edit-services-table__options">
          <DeleteBtn index={i} array={services} setArray={setServices} />
        </li>
      )}
    </ul>
  ));
};

export default EditServicesRows;
