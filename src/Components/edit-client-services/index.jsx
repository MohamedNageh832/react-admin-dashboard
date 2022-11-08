import { useState } from "react";
import deepClone from "../../utils/deepClone";
import AddServiceBtn from "./add-services-btn";
import EditServicesRows from "./edit-services-rows";
import EditServicesTable from "./edit-services-table";
import ServicesControls from "./services-controls";

const EditClientServices = (props) => {
  const { clientName, servicesData, onSave, setShowList } = props || {};

  const [errors, setErrors] = useState({
    validServices: true,
  });
  const [services, setServices] = useState(
    servicesData.length > 0
      ? deepClone(servicesData)
      : [
          {
            service: "",
            price: "",
            per: "",
            type: "continous",
          },
        ]
  );

  const handleAddService = () => {
    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      const emptyService = Object.values(service).some((el) => el === "");

      if (emptyService) {
        setErrors((prev) => ({ ...prev, validServices: false }));
        return;
      } else setErrors((prev) => ({ ...prev, validServices: true }));
    }

    const newService = [
      ...services,
      {
        service: "",
        price: "",
        per: "",
        type: "continous",
      },
    ];

    setServices(newService);
  };

  return (
    <>
      <div className="overlay"></div>
      <section className="edit-client-services widget pos-center">
        <h3 className="h3">تعديل الخدمات ({clientName})</h3>
        <EditServicesTable services={services}>
          <EditServicesRows
            setErrors={setErrors}
            services={services}
            setServices={setServices}
          />
        </EditServicesTable>

        <AddServiceBtn
          showError={!errors.validServices}
          onClick={handleAddService}
        />

        <ServicesControls
          services={services}
          onSave={onSave}
          setErrors={setErrors}
          setShowList={setShowList}
        />
      </section>
    </>
  );
};

export default EditClientServices;
