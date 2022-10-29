import { Link } from "react-router-dom";
import CurrentCollectionCard from "../components/current-collection-card";
import StatsSection from "./StatsSection";
import useFetch from "../../../Hooks/useFetch";
import WidgetHeader from "../../../Components/widget/WidgetHeader";
import x from "../../../Components/test copy";
import cardData from "../../../Components/cardData";
import LatestContractsTable from "../components/latest-contracts-table";
import ClientProfile from "../../global/client-profile";

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
        <section className="widget latest-contracts">
          <div className="widget__header">
            <h3 className="widget__title--md">احدث التعاقدات</h3>
            <Link className="link" to="/staff/dataentry/currentContracts">
              المزيد
            </Link>
          </div>
          {isPending && <div>جار التحميل...</div>}
          {error && <div>حدث خطأ!</div>}
          {data && <LatestContractsTable tableData={data} />}
        </section>
        <section className="widget ongoing-collections">
          <WidgetHeader linkTo="/staff/dataentry/ongoingcollectionrequests">
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
