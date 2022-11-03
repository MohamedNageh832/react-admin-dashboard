import { Add } from "@mui/icons-material";
import { useEffect, useState } from "react";
import EditClientServices from "../../edit-client-services";
import FormInput from "../../form/FormInput";
import FormHeader from "../../form/FormHeader";
import ClientService from "./ClientService";
import DeleteBtn from "./DeleteBtn";

const formData = [
  {
    label: "سريال التعاقد",
    name: "contractSerial",
    type: "number",
    errorMessage: "ادخل سريال العقد",
    required: true,
  },
  {
    label: "تاريخ التعاقد",
    name: "contractDate",
    type: "date",
    className: "custom-date",
    errorMessage: "اختر تاريخ مناسب",
    required: true,
  },
];

const StepThree = ({ values, setValues, onChange, setCurrentStep }) => {
  const servicesData = values.services || [];
  const [showList, setShowList] = useState(false);
  const [showDeleteBtns, setShowDeleteBtns] = useState(false);

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
                  <DeleteBtn
                    index={i}
                    array={servicesData}
                    setArray={setValues}
                    setShowDeleteBtns={setShowDeleteBtns}
                  />
                )}
              </ClientService>
            ))}
          <section>
            <button
              className="link ml-3"
              type="button"
              onClick={() => setShowList(true)}
            >
              <Add /> اضف خدمة جديدة
            </button>
            {servicesData && !showDeleteBtns && (
              <button
                className="link link--sec"
                onClick={() => setShowDeleteBtns(true)}
              >
                حذف
              </button>
            )}
            {showDeleteBtns && (
              <button
                className="link link--sec"
                onClick={() => setShowDeleteBtns(false)}
              >
                تأكيد
              </button>
            )}
          </section>
        </section>

        {formData.map((input, i) => (
          <FormInput
            key={i}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <footer className="form__footer">
          <button className="btn btn--blue" type="submit">
            التالي
          </button>

          <button
            className="btn btn--secondary"
            type="button"
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            السابق
          </button>
        </footer>
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
