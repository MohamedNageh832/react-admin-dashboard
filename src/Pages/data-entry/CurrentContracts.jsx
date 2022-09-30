import { EditOutlined, CancelOutlined } from "@mui/icons-material";
import Filter from "../../Components/Filter";
import Table from "../../Components/Table";
import x from "../../Components/test";

const options = [
  { name: "تعديل الخدمات", icon: <EditOutlined />, onClick: () => {} },
  { name: "إلغاء التعاقد", icon: <CancelOutlined />, onClick: () => {} },
];

const CurrentContracts = () => {
  return (
    <>
      <section className="space-between">
        <h2 className="heading-2">التعاقدات الحالية</h2>
        <button className="btn btn--blue">طباعة</button>
      </section>
      <Filter />
      <section className="widget">
        <Table data={x} options={options} />
      </section>
    </>
  );
};

export default CurrentContracts;
