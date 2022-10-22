import { useState } from "react";
import Ajax from "../../../../utils/Ajax";
import CollectionRequestTable from "../collection-request-table";

const CurrentCollectionCard = ({ grey, data }) => {
  const ajax = Ajax();
  const { clientsNum, date, collector, area, clientId } = data || {};
  const [collectionTable, setCollectionTable] = useState(null);

  const handleClick = async () => {
    const data = await ajax.post({ clientId });
    setCollectionTable(data);
  };

  return (
    <>
      <button
        className={`card ${grey ? "card--grey" : ""}`}
        onClick={() => handleClick}
      >
        <section className="custom-header">
          <span className="card__content">{clientsNum} عميل</span>
          <span className="text-sec">{date}</span>
        </section>
        <ul className="card__body">
          <li className="card__group">
            <span className="text-sec">المحصل</span>
            <span className="card__content">{collector}</span>
          </li>

          <li className="card__group">
            <span className="text-sec">المنطقة</span>
            <span className="card__content">{area}</span>
          </li>
        </ul>
      </button>

      {collectionTable && (
        <CollectionRequestTable tableData={collectionTable} />
      )}
    </>
  );
};

export default CurrentCollectionCard;
