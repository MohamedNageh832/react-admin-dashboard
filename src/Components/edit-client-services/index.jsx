import { useState } from "react";
import deepClone from "../../utils/deepClone";
import AddServiceBtn from "./AddServiceBtn";
import EditServicesRow from "./edit-services-row";
import EditServicesTable from "./EditServicesTable";
import ServicesControls from "./ServicesControls";

const thead = ["الخدمة", "سعر الخدمة", "السعر لكل", "نوع الخدمة", ""];

const EditClientServices = (props) => {
  const { clientName, servicesData, setValues, setShowList } = props;

  const [services, setServices] = useState(
    servicesData.length > 0
      ? deepClone(servicesData)
      : [
          {
            service: "",
            price: "",
            per: "month",
            type: "continous",
          },
        ]
  );

  return (
    <>
      <div className="overlay"></div>
      <section className="edit-client-services">
        <h3 className="mb-2">تعديل الخدمات ({clientName})</h3>
        <EditServicesTable thead={thead}>
          {services.map((service, i) => (
            <EditServicesRow
              key={i}
              index={i}
              service={service}
              services={services}
              setServices={setServices}
            />
          ))}
        </EditServicesTable>

        <AddServiceBtn services={services} setServices={setServices} />

        <ServicesControls
          services={services}
          setValues={setValues}
          setShowList={setShowList}
        />
      </section>
    </>
  );
};

export default EditClientServices;
