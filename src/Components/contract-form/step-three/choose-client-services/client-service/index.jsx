const ClientService = ({ data, setShowList, children }) => {
  const { service, price, per, type } = data;

  const arabicTranslation = {
    month: "شهر",
    one: "مرة",
    continous: "خدمة مستمرة",
    once: "خدمة لمرة واحدة",
  };

  return (
    <section>
      {children}
      <span className="title--sm ml-2">{arabicTranslation[type] + " "}</span>
      {service} ({price} / {arabicTranslation[per]})
      <button
        className="link link--sec mr-2"
        type="button"
        onClick={() => setShowList(true)}
      >
        تعديل
      </button>
    </section>
  );
};

export default ClientService;
