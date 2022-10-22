import { EditOutlined, CancelOutlined } from "@mui/icons-material";
import Filter from "../../../Components/filter";
import Table from "../../../Components/table";
import x from "../../../Components/test";
import useFetch from "../../../Hooks/useFetch";

const actions = [
  { name: "تعديل الخدمات", icon: <EditOutlined />, onClick: () => {} },
  { name: "إلغاء التعاقد", icon: <CancelOutlined />, onClick: () => {} },
];

const CurrentContracts = () => {
  // const {isPending, error, data} = useFetch();

  return (
    <>
      <section className="space-between">
        <h2 className="heading-2">التعاقدات الحالية</h2>
        <button className="btn btn--blue">طباعة</button>
      </section>
      <Filter />
      <section className="widget widget--table">
        <div className="overlay overlay--loading">
          <span className="spinner"></span>
        </div>

        <Table data={x} />
      </section>
    </>
  );
};

export default CurrentContracts;
