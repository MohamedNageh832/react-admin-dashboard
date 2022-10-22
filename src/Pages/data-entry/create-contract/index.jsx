import { useState } from "react";
import ContractForm from "../../../Components/contract-form";
import useFetch from "../../../Hooks/useFetch";
import ContractRequest from "../../../Components/contract-request";

const CreateContract = () => {
  const [showForm, setShowForm] = useState(false);
  const { isPending, error, data } = useFetch("");

  return (
    <>
      <section className="pending-contracts">
        {!data && <div className="widget--empty">لا يوجد طلبات حاليا</div>}
        <ContractRequest />
      </section>
      <section className="create-contracts">
        <button className="btn btn--blue" onClick={() => setShowForm(true)}>
          ادخال تعاقد جديد
        </button>
      </section>
      <ContractForm showForm={showForm} setShowForm={setShowForm} />
    </>
  );
};

export default CreateContract;
