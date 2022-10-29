import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ajax from "../../../utils/Ajax";

const x = {
  clientName: "محمد حسان",
  phone: "01233435555",
  area: "العقاد",
  addressDetails: "عمارات التأمين (عمارة 1 - شقة 3)",
  services: ["جمع منزلي"],
  contractSerial: 12324,
  contractDate: "12-2-2022",
  collectionStatus: "تم التحصيل",
  deserved: 0,
};

const ClientProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState(x);
  const ajax = Ajax();

  //ajax.post("", { clientId: id }).then((data) => setData(data));

  return (
    <>
      <header className="breadcrumb">
        <Link className="link breadcrumb__link">التعاقدات الحالية</Link>
        <span className="text--secondary">ملف العميل</span>
      </header>
      <h3 className="h3">{data.clientName}</h3>
      <section className="client-info">
        <ul className="client-info__column">
          <li className="client-info__item">
            <span className="text--secondary mb-2">رقم الهاتف</span>
            <p>{data.phone}</p>
          </li>
          <li className="client-info__item">
            <span className="text--secondary mb-2">المنطقة</span>
            <p>{data.area}</p>
          </li>
          <li className="client-info__item">
            <span className="text--secondary mb-2">العنوان بالتفصيل</span>
            <p>{data.addressDetails}</p>
          </li>
        </ul>
        <ul className="client-info__column">
          <li className="client-info__item">
            <span className="text--secondary mb-2">الخدمات</span>
            <p>{data.services}</p>
          </li>
          <li className="client-info__item">
            <span className="text--secondary mb-2">سريال التعاقد</span>
            <p>{data.contractSerial}</p>
          </li>
          <li className="client-info__item">
            <span className="text--secondary mb-2">تاريخ التعاقد</span>
            <p>{data.contractDate}</p>
          </li>
        </ul>
        <ul className="client-info__column">
          <li className="client-info__item">
            <span className="text--secondary mb-2">حالة التحصيل</span>
            <p>{data.collectionStatus}</p>
          </li>
          <li className="client-info__item">
            <span className="text--secondary mb-2">المستحق</span>
            <p>{data.deserved}</p>
          </li>
        </ul>
      </section>

      <section className="widget">
        <button className="btn-underlined">سجل التحصيل</button>
        <p className="mt-3">قريبا</p>
      </section>
    </>
  );
};

export default ClientProfile;
