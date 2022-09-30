import { useState } from "react";
import FormButton from "../FormButton";
import BasicDetailsStep from "./BasicDetailsStep";
import Confirm from "./Confirm";
import ContractDetailsStep from "./ContractDetailsStep";
import MoreInfoStep from "./MoreInfoStep";

const ContractForm = ({ showForm, setShowForm }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [values, setValues] = useState({
    clientName: "",
    phoneNumber: "",
    region: "",
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
    1: <BasicDetailsStep values={values} onChange={onChange} />,
    2: <MoreInfoStep values={values} onChange={onChange} />,
    3: <ContractDetailsStep values={values} onChange={onChange} />,
    4: <Confirm values={values} />,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    showForm && (
      <>
        <form className="form pos-fixed pos-center" onSubmit={handleSubmit}>
          <header className="form__header">
            <h3 className="form__title">إدخال تعاقد جديد</h3>
            <small className="text-sec">
              {currentStep < 4
                ? `الخطوة ${currentStep} من 3`
                : "تأكيد البيانات"}
            </small>
          </header>

          {steps[currentStep]}

          <footer className="form__footer">
            {currentStep < 4 && (
              <button
                className="btn btn--blue"
                type="button"
                onClick={() =>
                  currentStep < 4 ? setCurrentStep((c) => c + 1) : false
                }
              >
                التالي
              </button>
            )}
            {currentStep === 4 && (
              <FormButton text="تأكيد" color="blue" isPending={false} />
            )}
            {currentStep > 1 && (
              <button
                className="btn btn--secondary"
                type="button"
                onClick={() =>
                  currentStep > 1 ? setCurrentStep((c) => c - 1) : false
                }
              >
                السابق
              </button>
            )}
          </footer>
        </form>
        <div className="overlay" onClick={() => setShowForm(false)}></div>
      </>
    )
  );
};

export default ContractForm;
