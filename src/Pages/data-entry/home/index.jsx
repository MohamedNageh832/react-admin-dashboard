import { EditOutlined, CancelOutlined } from "@mui/icons-material";
import Table from "../../../Components/table";
import { Link } from "react-router-dom";
import CurrentCollectionCard from "../components/current-collection-card";
import StatsSection from "./StatsSection";
import useFetch from "../../../Hooks/useFetch";

const options = [
  {
    name: "تعديل الخدمات",
    icon: <EditOutlined />,
    onClick: () => {
      const data = { id: "" };
    },
  },
  {
    name: "إلغاء التعاقد",
    icon: <CancelOutlined />,
    onClick: () => {
      const data = { id: "" };
    },
  },
];

const DataEntryHome = () => {
  const { isPending, error, data } = useFetch(
    "https://aswangreen.pythonanywhere.com/api/contractTables?format=json&&tableType=latestContracts"
  );

  return (
    <>
      <StatsSection />
      <section className="widgets-holder">
        <section className="widget w-100">
          <div className="widget__header">
            <h3 className="widget__title--md">احدث التعاقدات</h3>
            <Link className="link" to="/staff/dataentry/currentContracts">
              المزيد
            </Link>
          </div>
          {isPending && <div>جار التحميل...</div>}
          {error && <div>حدث خطأ!</div>}
          {data && <Table data={data} options={options} />}
        </section>
        <section className="widget flex-grow-1">
          <header className="widget__header">
            <h4 className="h4">طلبات التحصيل الجارية</h4>
            <Link
              className="link"
              to="/staff/dataentry/ongoingcollectionrequests"
            >
              المزيد
            </Link>
          </header>
          <section className="current-collections">
            <CurrentCollectionCard grey={true} />
            <CurrentCollectionCard grey={true} />
          </section>
        </section>
      </section>
    </>
  );
};

export default DataEntryHome;
