import FormDataConfirm from "../FormDataConfirm";

const Confirm = ({ values }) => {
  const arabicLabels = {
    clientName: "اسم العميل",
    phoneNumber: "رقم الهاتف",
    region: "المنطقة",
    addressDetails: "العنوان بالتفصيل",
    buildingNumber: "العمارة",
    apartment: "الشقة",
    countContractFor: "حساب التعاقد ل",
    services: "الخدمات",
    contractSerial: "سريال التعاقد",
    contractDate: "تاريخ التعاقد",
  };

  return (
    <section className="form__overflow">
      {Object.keys(values).map((item, i) => (
        <FormDataConfirm
          key={i}
          value={values[item]}
          label={arabicLabels[item]}
        />
      ))}
    </section>
  );
};

export default Confirm;
