import { EditOutlined, CancelOutlined } from "@mui/icons-material";
import CurrentCollectionCard from "../components/current-collection-card";
import Filter from "../../../Components/filter";
import Table from "../../../Components/table";
import useFetch from "../../../Hooks/useFetch";
import CollectionRequestTable from "../components/collection-request-table";
import { useState } from "react";
import x from "../../../Components/test";

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

const OnGoingCollectionRequests = () => {
  const { isPending, error, data } = useFetch(
    "https://aswangreen.pythonanywhere.com/api/contractTables?format=json&&tableType=currentContracts"
  );

  return (
    <>
      <CollectionRequestTable tableData={x} />
      <h2 className="heading-2">طلبات التحصيل الجارية</h2>
      <section className="d-flex">
        <CurrentCollectionCard />
      </section>

      <section className="space-between">
        <h2 className="heading-2">السجل</h2>
        <button className="btn btn--blue">طباعة</button>
      </section>

      <Filter />

      <section className="widget">
        {isPending && <div>جار التحميل...</div>}
        {error && <div>حدث خطأ!</div>}
        {data && <Table data={data} options={options} pagination={20} />}
      </section>
    </>
  );
};

export default OnGoingCollectionRequests;
