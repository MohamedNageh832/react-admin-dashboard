import EditClientServices from "../../edit-client-services";
import FormHeader from "../../form/FormHeader";
import FormFooter from "./form-footer";
import FormInputs from "./form-inputs";
import { useState } from "react";
import ChooseClientServices from "./choose-client-services";

const StepThree = ({ values, setValues, onChange, setCurrentStep }) => {
  const servicesData = values.services || [];
  const [showList, setShowList] = useState(false);

  const handleSaveServices = (newData) => {
    setValues((prev) => ({ ...prev, services: newData }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <form className="form pos-center" onSubmit={handleSubmit}>
        <FormHeader subTitle="الخطوة 3 من 3">ادخال تعاقد جديد</FormHeader>

        <ChooseClientServices
          servicesData={servicesData}
          setValues={setValues}
          setShowList={setShowList}
        />

        <FormInputs values={values} onChange={onChange} />
        <FormFooter setCurrentStep={setCurrentStep} />
      </form>

      {showList && (
        <EditClientServices
          servicesData={servicesData}
          onSave={handleSaveServices}
          setShowList={setShowList}
          clientName={values.clientName}
        />
      )}
    </>
  );
};

export default StepThree;
