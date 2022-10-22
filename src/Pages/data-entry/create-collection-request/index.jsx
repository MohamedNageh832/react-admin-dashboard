import Filter from "../../../Components/filter";
import Table from "../../../Components/table";
import x from "../../../Components/test";
import useFetch from "../../../Hooks/useFetch";
import CollectionRequestTable from "../components/collection-request-table";

const CreateCollectionRequest = () => {
  const { isPending, error, data } = useFetch("");

  return (
    <>
      <section className="space-between">
        <h2 className="heading-2">إنشاء طلب تحصيل</h2>
      </section>
      <Filter />

      <CollectionRequestTable tableData={x} />
    </>
  );
};

export default CreateCollectionRequest;
