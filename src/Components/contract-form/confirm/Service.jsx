const Service = ({ data }) => {
  const { service, price, per, type } = data;

  const arabicTranslation = {
    month: "شهر",
    one: "مرة",
    continous: "خدمة مستمرة",
    once: "خدمة لمرة واحدة",
  };

  return (
    <p>
      {service} ({price} / {arabicTranslation[per]})
      <small className="title--sm mr-2">{arabicTranslation[type]}</small>
    </p>
  );
};

export default Service;
