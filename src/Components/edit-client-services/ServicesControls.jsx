import deepClone from "../../utils/deepClone";

const ServicesControls = ({ services, onSave, isPending, setShowList }) => {
  const handleSave = async () => {
    const servicesClone = deepClone(services);

    const newData = { ...services, services: servicesClone };
    await onSave(newData);
    setShowList(false);
  };

  return (
    <section className="d-flex gap-3 pt-3">
      <button className="btn btn--blue" type="button" onClick={handleSave}>
        حفظ
      </button>
      <button className="btn btn--secondary" onClick={() => setShowList(false)}>
        إلغاء
      </button>
    </section>
  );
};

export default ServicesControls;
