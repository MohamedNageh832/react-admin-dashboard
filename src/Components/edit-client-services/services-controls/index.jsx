import deepClone from "../../../utils/deepClone";

const ServicesControls = ({
  services,
  onSave,
  isPending,
  setErrors,
  setShowList,
}) => {
  const handleSave = async () => {
    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      const emptyService = Object.values(service).some((el) => el === "");

      if (emptyService) {
        setErrors((prev) => ({ ...prev, validServices: false }));
        return;
      } else setErrors((prev) => ({ ...prev, validServices: true }));
    }

    const servicesClone = deepClone(services);

    await onSave(servicesClone);
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
