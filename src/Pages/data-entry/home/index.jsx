import CurrentCollectionCard from "../components/current-collection-card";
import StatsSection from "./StatsSection";
import useFetch from "../../../Hooks/useFetch";
import WidgetHeader from "../../../Components/widget/widget-header";
import { BASE_URL } from "../../../utils/constants";
import LatestContractsTable from "../components/latest-contracts-table";
import LoaderWidget from "../../../Components/loaders";
import CurrentCollectionCards from "./CurrentCollectionCards";
import Widget from "../../../Components/widget";
import WidgetLoader from "../../../Components/loaders";

const DataEntryHome = () => {
  const { isPending, error, data } = useFetch(
    `${BASE_URL}/DataEntry/mainPageStatsThird?format=json`
  );

  return (
    <>
      <StatsSection />
      <section className="widgets-holder">
        <Widget className="latest-contracts">
          <WidgetHeader
            className="h3"
            linkTo="/staff/dataentry/currentContracts"
          >
            احدث التعاقدات
          </WidgetHeader>
          <WidgetLoader isPending={isPending}>
            {error && <div className="fs-3">حدث خطأ!</div>}
            {data && <LatestContractsTable tableData={data} />}
          </WidgetLoader>
        </Widget>

        <section className="ongoing-collections">
          <WidgetHeader
            className="h4"
            linkTo="/staff/dataentry/ongoingcollectionrequests"
          >
            طلبات التحصيل الجارية
          </WidgetHeader>

          <CurrentCollectionCards />
        </section>
      </section>
    </>
  );
};

export default DataEntryHome;
