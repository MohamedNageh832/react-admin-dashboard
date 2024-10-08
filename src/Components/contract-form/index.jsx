import { useState } from "react";
import Confirm from "./confirm";
import StepOne from "./step-one";
import StepTwo from "./step-two";
import StepThree from "./step-three";
import Success from "./success";

const ContractForm = ({ data, setShowForm }) => {
  const {
    clientName,
    phone,
    area,
    addressDetails,
    building,
    apartment,
    countContractFor,
    services,
    contractSerial,
    contractDate,
  } = data || {};

  const [currentStep, setCurrentStep] = useState(1);
  const [values, setValues] = useState({
    clientName: clientName || "",
    phone: phone || "",
    area: area || "",
    addressDetails: addressDetails || "",
    building: building || "",
    apartment: apartment || "",
    countContractFor: countContractFor || "",
    services: services || "",
    contractSerial: contractSerial || "",
    contractDate: contractDate || "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSuccess = () => {
    setTimeout(() => setShowForm(false), 2000);
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
    success: <Success callback={handleSuccess}>تم تسجيل التعاقد بنجاح</Success>,
  };

  return (
    <>
      <div className="overlay" onClick={() => setShowForm(false)}></div>
      {steps[currentStep]}
    </>
  );
};

export default ContractForm;
