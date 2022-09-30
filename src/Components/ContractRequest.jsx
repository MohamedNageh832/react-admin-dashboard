const ContractRequest = ({}) => {
  const props = {
    requestSender: "شيماء",
    clientName: "احمد حسن",
    phoneNumber: "0123132231",
    services: "جمع منزلي - نظافة سلم",
    addressDetails: "العقاد - عمارات التأمين",
  };

  return (
    <div className="widget contract-request">
      <span className="text-sec">{props.requestSender}</span>
      <section className="widget__section">
        <h4 className="widget-title--md">{props.clientName}</h4>
        <small className="text-sec">{props.phoneNumber}</small>
      </section>
      <h5 className="widget__title--sm">الخدمة/الخدمات</h5>
      <small className="text-sec">{props.services}</small>
      <h5 className="widget__title--sm">العنوان</h5>
      <small className="text-sec">{props.addressDetails}</small>
      <section className="d-flex gap-3 pt-3">
        <button className="btn-underlined--blue">اكمال التعاقد</button>
        <button className="btn-link--sec">الغاء</button>
      </section>
    </div>
  );
};

export default ContractRequest;
