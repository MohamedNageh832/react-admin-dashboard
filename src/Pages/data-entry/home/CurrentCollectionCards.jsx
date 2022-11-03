import useFetch from "../../../Hooks/useFetch";
import { BASE_URL } from "../../../utils/constants";
import CurrentCollectionCard from "../components/current-collection-card";

const CurrentCollectionCards = () => {
  const { data, isPending, error } = useFetch(
    `${BASE_URL}/DataEntry/mainPageStatsSecond?format=json`
  );

  return (
    <section className="current-collections">
      {isPending && <div className="fs-3">جار التحميل...</div>}
      {error && <div className="fs-3">حدث خطأ!</div>}

      {data &&
        data.map((item, i) => (
          <CurrentCollectionCard
            key={i}
            className="card card--grey"
            cardData={item}
          />
        ))}
    </section>
  );
};

export default CurrentCollectionCards;
