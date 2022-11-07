import SpinnerLoader from "../../../../Components/loaders";
import Widget from "../../../../Components/widget";
import WidgetHeader from "../../../../Components/widget/widget-header";
import useFetch from "../../../../Hooks/useFetch";
import { BASE_URL } from "../../../utils/constants";
import LatestContractsTable from "../../components/latest-contracts-table";

const LatestContracts = () => {
  const { isPending, error, data } = useFetch(
    `${BASE_URL}/DataEntry/mainPageStatsThird?format=json`
  );

  return (
    <Widget className="latest-contracts">
      <WidgetHeader className="h3" linkTo="/staff/dataentry/currentContracts">
        احدث التعاقدات
      </WidgetHeader>
      <SpinnerLoader isPending={isPending}>
        {error && <div className="fs-3">حدث خطأ!</div>}
        {data && <LatestContractsTable tableData={data} />}
      </SpinnerLoader>
    </Widget>
  );
};

export default LatestContracts;
