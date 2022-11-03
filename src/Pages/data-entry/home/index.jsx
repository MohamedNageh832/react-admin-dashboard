import CurrentCollectionCard from "../components/current-collection-card";
import StatsSection from "./StatsSection";
import useFetch from "../../../Hooks/useFetch";
import WidgetHeader from "../../../Components/widget/WidgetHeader";
import { BASE_URL } from "../../../utils/constants";
import LatestContractsTable from "../components/latest-contracts-table";
import LoaderWidget from "../../../Components/loader-widget";
import CurrentCollectionCards from "./CurrentCollectionCards";

const DataEntryHome = () => {
  const { isPending, error, data } = useFetch(
    `${BASE_URL}/DataEntry/mainPageStatsThird?format=json`
  );

  return (
    <>
      <StatsSection />
      <section className="widgets-holder">
        <LoaderWidget isPending={isPending} className="latest-contracts">
          <WidgetHeader
            className="h3"
            linkTo="/staff/dataentry/currentContracts"
          >
            احدث التعاقدات
          </WidgetHeader>
          {isPending && <div className="fs-3">جار التحميل...</div>}
          {error && <div className="fs-3">حدث خطأ!</div>}
          {data && <LatestContractsTable tableData={data} />}
        </LoaderWidget>

        <section className="widget ongoing-collections">
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
