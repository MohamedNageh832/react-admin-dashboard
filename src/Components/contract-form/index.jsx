import { useState } from "react";
import FormButton from "../form/FormButton";
import Confirm from "./confirm";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./step-three";

const ContractForm = ({ showForm, setShowForm }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [values, setValues] = useState({
    clientName: "",
    phoneNumber: "",
    area: "",
    addressDetails: "",
    buildingNumber: "",
    apartment: "",
    countContractFor: "",
    services: "",
    contractSerial: "",
    contractDate: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const steps = {
    1: (
      <StepOne
        values={values}
        onChange={onChange}
        setCurrentStep={setCurrentStep}
      />
    ),
    2: (
      <StepTwo
        values={values}
        onChange={onChange}
        setCurrentStep={setCurrentStep}
      />
    ),
    3: (
      <StepThree
        values={values}
        setValues={setValues}
        onChange={onChange}
        setCurrentStep={setCurrentStep}
      />
    ),
    4: <Confirm values={values} setCurrentStep={setCurrentStep} />,
  };

  return (
    showForm && (
      <>
        <div className="overlay" onClick={() => setShowForm(false)}></div>
        {steps[currentStep]}
      </>
    )
  );
};

export default ContractForm;
