import FormHeader from "../../form/FormHeader";
import ClientService from "../step-three/ClientService";
import FormDataConfirm from "./FormDataConfirm";
import Service from "./Service";

const Confirm = ({ values, setCurrentStep }) => {
  const arabicLabels = {
    clientName: "اسم العميل",
    phoneNumber: "رقم الهاتف",
    area: "المنطقة",
    addressDetails: "العنوان بالتفصيل",
    buildingNumber: "العمارة",
    apartment: "الشقة",
    countContractFor: "حساب التعاقد ل",
    services: "الخدمات",
    contractSerial: "سريال التعاقد",
    contractDate: "تاريخ التعاقد",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <form className="form pos-center" onSubmit={handleSubmit}>
      <FormHeader subTitle="تأكيد البيانات">ادخال تعاقد جديد</FormHeader>

      <section className="form__overflow">
        <FormDataConfirm label="اسم العميل">
          {values.clientName}
        </FormDataConfirm>

        <FormDataConfirm label="رقم الهاتف">
          {values.phoneNumber}
        </FormDataConfirm>

        <FormDataConfirm label="المنطقة">{values.area}</FormDataConfirm>

        <FormDataConfirm label="العنوان بالتفصيل">
          {values.addressDetails}
        </FormDataConfirm>

        <FormDataConfirm label="العمارة">
          {values.buildingNumber}
        </FormDataConfirm>

        <FormDataConfirm label="الشقة">{values.apartment}</FormDataConfirm>

        <FormDataConfirm label="حساب التعاقد ل">
          {values.countContractFor}
        </FormDataConfirm>

        <FormDataConfirm label="الخدمات">
          {values.services.map((item, i) => (
            <Service key={i} data={item} />
          ))}
        </FormDataConfirm>

        <FormDataConfirm label="سريال التعاقد">
          {values.contractSerial}
        </FormDataConfirm>

        <FormDataConfirm label="تاريخ التعاقد">
          {values.contractDate}
        </FormDataConfirm>
      </section>

      <footer className="form__footer">
        <button className="btn btn--blue" type="submit">
          تأكيد
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
  );
};

export default Confirm;
