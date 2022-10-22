import deepClone from "../../../utils/deepClone";
import useFetch from "../../../Hooks/useFetch";
import FormDatalist from "../../form/FormDatalist";
import FormInput from "../../form/FormInput";
import FormSelect from "../../form/FormSelect";
import DeleteBtn from "./DeleteBtn";

const formSelectBoxes = [
  {
    name: "per",
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

const EditServicesRow = ({ service, index, services, setServices }) => {
  const { data: datalistOptions } = useFetch("");

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    const servicesClone = deepClone(services);

    servicesClone[index][name] = value;

    setServices(servicesClone);
  };

  return (
    <tr className="table__row--form">
      <td>
        <FormDatalist
          className="table__input"
          name="service"
          placeholder="اكتب..."
          value={service.service}
          onChange={handleServiceChange}
          options={datalistOptions}
        />
      </td>

      <td>
        <FormInput
          className="table__input"
          type="number"
          name="price"
          placeholder="اكتب..."
          value={service.price}
          onChange={(e) => handleServiceChange(e)}
        />
      </td>

      {formSelectBoxes.map((item, i) => (
        <td key={i}>
          <FormSelect
            className="table__input"
            {...item}
            value={service[item.name]}
            onChange={(e) => handleServiceChange(e)}
          />
        </td>
      ))}

      {services.length > 1 && (
        <td>
          <DeleteBtn index={index} array={services} setArray={setServices} />
        </td>
      )}
    </tr>
  );
};

export default EditServicesRow;
