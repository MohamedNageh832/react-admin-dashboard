import SpinnerLoader from "../../../../Components/loaders";
import useFetch from "../../../../Hooks/useFetch";
import ContractRequest from "./contract-request";

const PendingContracts = () => {
  const { isPending, error, data } = useFetch("");

  return (
    <section className="pending-contracts">
      {(!data || data.length === 0) && (
        <SpinnerLoader className="widget--empty fs-3" isPending={isPending}>
          {error && <span>حدث خطأ!</span>}
          {!isPending && !error && <span>لا يوجد طلبات حاليا</span>}
        </SpinnerLoader>
      )}
      {data && data.map((item, i) => <ContractRequest data={item} key={i} />)}
    </section>
  );
};

export default PendingContracts;
