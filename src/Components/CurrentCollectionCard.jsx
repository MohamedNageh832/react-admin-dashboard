const CurrentCollectionCard = ({ grey }) => {
  return (
    <div className={`card ${grey ? "card--grey" : ""}`}>
      <section className="custom-header">
        <span className="card__content">230 عميل</span>
        <span className="text-sec">12/9/2022</span>
      </section>
      <ul className="card__body">
        <li className="card__group">
          <span className="text-sec">المحصل</span>
          <span className="card__content"></span>
        </li>
        <li className="card__group">
          <span className="text-sec">المنطقة</span>
          <span className="card__content"></span>
        </li>
      </ul>
    </div>
  );
};

export default CurrentCollectionCard;
