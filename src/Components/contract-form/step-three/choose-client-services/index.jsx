import { useState } from "react";
import deepClone from "../../../../utils/deepClone";
import AddNewService from "./add-new-service";
import ClientService from "./client-service";
import DeleteBtn from "./delete-btn";
import DisableDeleteBtn from "./disable-delete-btn";
import EnableDeleteBtn from "./enable-delete-btn";

const ChooseClientServices = ({ servicesData, setValues, setShowList }) => {
  const [showDeleteBtns, setShowDeleteBtns] = useState(false);

  const handleDelete = (index) => {
    const servicesClone = deepClone(servicesData);
    servicesClone.splice(index, 1);

    if (servicesClone.length >= 1)
      setValues((prev) => ({ ...prev, services: servicesClone }));
    else {
      setValues((prev) => ({ ...prev, services: [] }));
      setShowDeleteBtns(false);
    }
  };

  return (
    <section className="form__group">
      {servicesData < 1 && (
        <label className="form__label">الخدمة/الخدمات</label>
      )}

      {servicesData.length > 0 &&
        servicesData.map((item, i) => (
          <ClientService key={i + 100} data={item} setShowList={setShowList}>
            {showDeleteBtns && <DeleteBtn onClick={() => handleDelete(i)} />}
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
  );
};

export default ChooseClientServices;
