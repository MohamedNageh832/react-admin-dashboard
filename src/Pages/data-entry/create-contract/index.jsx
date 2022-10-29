import { useState } from "react";
import ContractForm from "../../../Components/contract-form";
import useFetch from "../../../Hooks/useFetch";
import ContractRequest from "./contract-request";

const CreateContract = () => {
  const [showForm, setShowForm] = useState(false);
  const { isPending, error, data } = useFetch("");

  const x = { clientName: "mon" };

  return (
    <>
      <section className="pending-contracts">
        {(!data || data.length === 0) && (
          <div className="widget--empty">
            {isPending && <span>جار التحميل...</span>}
            {!isPending && <span>لا يوجد طلبات حاليا</span>}
          </div>
        )}
        {data && data.map((item, i) => <ContractRequest data={item} key={i} />)}
      </section>
      <section className="create-contracts">
        <button className="btn btn--blue" onClick={() => setShowForm(true)}>
          ادخال تعاقد جديد
        </button>
      </section>
      {showForm && <ContractForm setShowForm={setShowForm} />}
    </>
  );
};

export default CreateContract;
