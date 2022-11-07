import { useState } from "react";
import ContractForm from "../../../Components/contract-form";
import CreateContractBtn from "./create-contract-btn";
import PendingContracts from "./pending-contracts";

const CreateContract = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <PendingContracts />
      <CreateContractBtn onClick={() => setShowForm(true)} />
      {showForm && <ContractForm setShowForm={setShowForm} />}
    </>
  );
};

export default CreateContract;
