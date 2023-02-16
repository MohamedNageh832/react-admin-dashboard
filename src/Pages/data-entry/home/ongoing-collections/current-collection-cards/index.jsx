import { usePreviewer } from "../../../../../Components/data-previewer";
import SpinnerLoader from "../../../../../Components/loaders";
import useFetch from "../../../../../Hooks/useFetch";
import { BASE_URL } from "../../../../../utils/constants";
import CurrentCollectionCard from "../../../components/current-collection-card";

const CurrentCollectionCards = () => {
  // const { data, isPending, error } = useFetch(
  //   `${BASE_URL}/DataEntry/mainPageStatsSecond?format=json`
  // );

  const { data, isPending, error } = usePreviewer();

  return (
    <SpinnerLoader isPending={isPending} className="current-collections">
      {error && <div className="fs-3">حدث خطأ!</div>}

      {data &&
        data.map((item, i) => (
          <CurrentCollectionCard
            key={i}
            className="card card--grey"
            cardData={item}
          />
        ))}
    </SpinnerLoader>
  );
};

export default CurrentCollectionCards;
