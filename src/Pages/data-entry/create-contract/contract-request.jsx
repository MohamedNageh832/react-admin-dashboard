import { useState } from "react";
import ContractForm from "../../../Components/contract-form";

const ContractRequest = ({ data }) => {
  const { clientName, sender, phone, services, address, clientId } = data || {};
  const [showContractForm, setShowContractForm] = useState(false);

  const handleCompleteData = () => {};

  const handleCancelContract = () => {};

  const x = {
    sender: "",
    clientName: "",
    phone: "",
    services: [],
    area: "",
  };

  return (
    <>
      <section className="contract-request">
        <small className="text--secondary">محمد</small>
        <section className="contract-request__section contract-request__basic">
          <h4>محمد حسن ابراهيم</h4>
          <p className="text--secondary">0122333123</p>
        </section>
        <section className="contract-request__section">
          <h5>الخدمة / الخدمات</h5>
          <p className="text--secondary">جمع منزلي</p>
        </section>
        <section className="contract-request__section">
          <h5>العنوان</h5>
          <p className="text--secondary">حي العقاد</p>
        </section>
        <section className="flex gap-3">
          <button
            className="btn-underlined--blue"
            onClick={() => setShowContractForm(true)}
          >
            اكمال التعاقد
          </button>
          <button
            className="btn-link--secondary"
            onClick={handleCancelContract}
          >
            إلغاء
          </button>
        </section>
      </section>
      {showContractForm && (
        <ContractForm data={data} setShowForm={setShowContractForm} />
      )}
    </>
  );
};

export default ContractRequest;
