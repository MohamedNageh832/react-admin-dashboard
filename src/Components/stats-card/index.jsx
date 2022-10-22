const StatsCard = ({ props, data }) => {
  return (
    <div className="stats-card">
      <section
        className="stats-card__icon"
        style={{ backgroundColor: props.bgColor, color: props.color }}
      >
        {props.icon}
      </section>
      <section className="card__body">
        <small className="text-sec">{props.title}</small>
        <span className="card__data">{data}</span>
      </section>
    </div>
  );
};

export default StatsCard;
