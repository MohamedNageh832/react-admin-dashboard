import { useState } from "react";
import ContractForm from "../../../Components/contract-form";
import { contractRequestsData } from "../../../Components/contractRequests";
import DataPreviewer from "../../../Components/data-previewer";
import PreviewWrapper from "../../../Components/data-previewer/preview-wrapper";
import CreateContractBtn from "./create-contract-btn";
import PendingContracts from "./pending-contracts";

const CreateContract = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <DataPreviewer>
        <PreviewWrapper dataReceived={contractRequestsData}>
          <PendingContracts />
        </PreviewWrapper>
      </DataPreviewer>
      <CreateContractBtn onClick={() => setShowForm(true)} />
      {showForm && <ContractForm setShowForm={setShowForm} />}
    </>
  );
};

export default CreateContract;
