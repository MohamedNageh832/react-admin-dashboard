import { Link } from "react-router-dom";
import CurrentCollectionCard from "../components/current-collection-card";
import StatsSection from "./StatsSection";
import useFetch from "../../../Hooks/useFetch";
import WidgetHeader from "../../../Components/widget/WidgetHeader";
import x from "../../../Components/test copy";
import cardData from "../../../Components/cardData";
import LatestContractsTable from "../components/latest-contracts-table";
import ClientProfile from "../../global/client-profile";
import TableWidget from "../../../Components/table-widget";

const DataEntryHome = () => {
  // const { isPending, error, data } = useFetch(
  //   "https://aswangreen.pythonanywhere.com/api/contractTables?format=json&&tableType=latestContracts"
  // );
  const isPending = false;
  const error = null;
  const data = x;

  return (
    <>
      <StatsSection />
      <section className="widgets-holder">
        <TableWidget className="latest-contracts">
          <WidgetHeader
            className="h3"
            linkTo="/staff/dataentry/currentContracts"
          >
            احدث التعاقدات
          </WidgetHeader>
          {isPending && <div className="fs-3">جار التحميل...</div>}
          {error && <div className="fs-3">حدث خطأ!</div>}
          {data && <LatestContractsTable tableData={data} />}
        </TableWidget>
        <section className="widget ongoing-collections">
          <WidgetHeader
            className="h4"
            linkTo="/staff/dataentry/ongoingcollectionrequests"
          >
            طلبات التحصيل الجارية
          </WidgetHeader>
          <section className="current-collections">
            <CurrentCollectionCard
              className="card card--grey"
              cardData={cardData}
            />
            <CurrentCollectionCard className="card card--grey" />
          </section>
        </section>
      </section>
    </>
  );
};

export default DataEntryHome;
