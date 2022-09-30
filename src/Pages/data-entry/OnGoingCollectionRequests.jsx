import CurrentCollectionCard from "../../Components/CurrentCollectionCard";
import Filter from "../../Components/Filter";
import Table from "../../Components/Table";
import x from "../../Components/test";

const OnGoingCollectionRequests = () => {
  return (
    <>
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
        <Table data={x} />
      </section>
    </>
  );
};

export default OnGoingCollectionRequests;
