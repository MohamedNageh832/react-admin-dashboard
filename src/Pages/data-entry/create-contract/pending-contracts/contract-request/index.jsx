import { useState } from "react";
import ContractForm from "../../../../../Components/contract-form";
import Widget from "../../../../../Components/widget";
import WidgetLoader from "../../../../../Components/loaders";
import Ajax from "../../../../../utils/Ajax";

const x = {
  sender: "",
  clientName: "",
  phone: "",
  services: [],
  area: "",
};

const ContractRequest = ({ data }) => {
  const ajax = Ajax();
  const [isPending, setIsPending] = useState(false);
  const { clientName, sender, phone, services, area, clientId } = data || {};
  const [showContractForm, setShowContractForm] = useState(false);

  const handleCancelContract = async () => {
    setIsPending(true);
    const data = await ajax.post("", { clientId });

    setIsPending(false);
  };

  return (
    <>
      <Widget>
        <WidgetLoader isPending={isPending} className="contract-request">
          <small className="text--secondary fs-2">{sender}</small>
          <section className="contract-request__section contract-request__basic">
            <h4 className="h4">{clientName}</h4>
            <p className="text--secondary fs-2">{phone}</p>
          </section>
          <section className="contract-request__section">
            <h5 className="h5">الخدمة / الخدمات</h5>
            <p className="text--secondary fs-2">{services.join(" - ")}</p>
          </section>
          <section className="contract-request__section">
            <h5 className="h5">العنوان</h5>
            <p className="text--secondary fs-2">{area}</p>
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
        </WidgetLoader>
      </Widget>
      {showContractForm && (
        <ContractForm data={data} setShowForm={setShowContractForm} />
      )}
    </>
  );
};

export default ContractRequest;
