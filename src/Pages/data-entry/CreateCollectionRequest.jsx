import Filter from "../../Components/Filter";
import Table from "../../Components/Table";
import x from "../../Components/test";

const CreateCollectionRequest = () => {
  return (
    <>
      <section className="space-between">
        <h2 className="heading-2">إنشاء طلب تحصيل</h2>
        <button className="btn btn--blue">تأكيد الطلب</button>
      </section>
      <Filter />
      <section className="widget">
        <Table {...x} />
      </section>
    </>
  );
};

export default CreateCollectionRequest;
