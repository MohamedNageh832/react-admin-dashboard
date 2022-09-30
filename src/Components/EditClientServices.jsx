import { Add } from "@mui/icons-material";
import { useState } from "react";
import Table from "./Table";

const EditClientServices = ({ clientName }) => {
  const [columns, setColumns] = useState([
    {
      service: "",
      price: "",
      per: "month",
      type: "continous",
    },
  ]);

  const [rowsNum, setRowsNum] = useState(0);

  const [formData, setFormData] = useState([]);

  const createRowElements = (num) => [
    {
      element: "input",
      name: "service",
      type: "text",
      value: columns[num].service,
    },
    {
      element: "input",
      name: "price",
      type: "number",
      value: columns[num].price,
    },
    {
      element: "select",
      options: [
        { value: "one", text: "مرة" },
        { value: "month", text: "شهر" },
      ],
      props: { name: "per", value: columns[num].per },
    },
    {
      element: "select",
      options: [
        { value: "oneTime", text: "خدمة لمرة واحدة" },
        { value: "continous", text: "خدمة مستمرة" },
      ],
      props: { name: "type", value: columns[num].type },
    },
  ];

  const columnsSchema = {
    service: "",
    price: "",
    per: "month",
    type: "continous",
  };

  const tableData = {
    thead: ["الخدمة", "سعر الخدمة", "السعر لكل", "نوع الخدمة"],
  };

  const onChange = (e) => {
    setColumns({ ...columns, [e.target.name]: e.target.value });
  };

  const handleAddService = () => {
    setRowsNum((n) => n + 1);
    setColumns([...columns, columnsSchema]);

    console.log(columns);

    const newRow = createRowElements(rowsNum);

    setFormData([...formData, newRow]);
    console.log(formData);
  };

  return (
    <>
      <div className="overlay"></div>
      <section className="edit-client-services">
        <h3 className="mb-2">تعديل الخدمات ({clientName})</h3>
        <Table
          data={tableData}
          tableForm={{ rowsNum, formData, columns, onChange }}
        />
        <section className="d-flex gap-3 pt-3">
          <button className="link" type="button" onClick={handleAddService}>
            <Add />
            اضف خدمة جديدة
          </button>
          <button className="link link--grey">حذف</button>
        </section>
        <section className="d-flex gap-3 pt-3">
          <button className="btn btn--blue">حفظ</button>
          <button className="btn btn--secondary">إلغاء</button>
        </section>
      </section>
    </>
  );
};

export default EditClientServices;
