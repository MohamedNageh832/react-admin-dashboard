import FormDataConfirm from "./form-data-confirm";
import Service from "../service";

const ClientData = ({ values }) => {
  return (
    <section className="form__overflow">
      <FormDataConfirm label="اسم العميل">{values.clientName}</FormDataConfirm>

      <FormDataConfirm label="رقم الهاتف">{values.phone}</FormDataConfirm>

      <FormDataConfirm label="المنطقة">{values.area}</FormDataConfirm>

      <FormDataConfirm label="العنوان بالتفصيل">
        {values.addressDetails}
      </FormDataConfirm>

      <FormDataConfirm label="العمارة">{values.building}</FormDataConfirm>

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
  );
};

export default ClientData;
