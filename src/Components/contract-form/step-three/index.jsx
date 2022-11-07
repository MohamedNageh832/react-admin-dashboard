import EditClientServices from "../../edit-client-services";
import FormHeader from "../../form/FormHeader";
import ClientService from "./ClientService";
import DeleteBtn from "./delete-btn";
import FormFooter from "./form-footer";
import AddNewService from "./add-new-service";
import EnableDeleteBtn from "./enable-delete-btn";
import DisableDeleteBtn from "./disable-delete-btn";
import FormInputs from "./form-inputs";
import { useState } from "react";
import deepClone from "../../../utils/deepClone";

const StepThree = ({ values, setValues, onChange, setCurrentStep }) => {
  const servicesData = values.services || [];
  const [showList, setShowList] = useState(false);
  const [showDeleteBtns, setShowDeleteBtns] = useState(false);

  const handleDelete = (index) => {
    const servicesClone = deepClone(servicesData);
    servicesClone.splice(index, 1);

    if (servicesClone.length >= 1) setValues(servicesClone);
    else {
      setValues((prev) => ({ ...prev, services: [] }));
      setShowDeleteBtns(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <form className="form pos-center" onSubmit={handleSubmit}>
        <FormHeader subTitle="الخطوة 3 من 3">ادخال تعاقد جديد</FormHeader>

        <section className="form__group">
          {servicesData < 1 && (
            <label className="form__label">الخدمة/الخدمات</label>
          )}

          {servicesData &&
            servicesData.map((item, i) => (
              <ClientService
                key={i + 100}
                data={item}
                setShowList={setShowList}
              >
                {showDeleteBtns && (
                  <DeleteBtn onClick={() => handleDelete(i)} />
                )}
              </ClientService>
            ))}

          <section>
            <AddNewService onClick={() => setShowList(true)} />
            {servicesData.length > 0 && !showDeleteBtns && (
              <EnableDeleteBtn onClick={() => setShowDeleteBtns(true)} />
            )}
            {showDeleteBtns && (
              <DisableDeleteBtn onClick={() => setShowDeleteBtns(false)} />
            )}
          </section>
        </section>

        <FormInputs values={values} onChange={onChange} />
        <FormFooter setCurrentStep={setCurrentStep} />
      </form>

      {showList && (
        <EditClientServices
          servicesData={servicesData}
          onSave={setValues}
          setShowList={setShowList}
          clientName={values.clientName}
        />
      )}
    </>
  );
};

export default StepThree;
