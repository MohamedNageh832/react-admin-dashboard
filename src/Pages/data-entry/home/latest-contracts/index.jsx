import { usePreviewer } from "../../../../Components/data-previewer";
import PreviewWrapper from "../../../../Components/data-previewer/preview-wrapper";
import { lastestContractsData } from "../../../../Components/lastestContractData";
import SpinnerLoader from "../../../../Components/loaders";
import Widget from "../../../../Components/widget";
import WidgetHeader from "../../../../Components/widget/widget-header";
import useFetch from "../../../../Hooks/useFetch";
import { BASE_URL } from "../../../../utils/constants";
import LatestContractsTable from "../../components/latest-contracts-table";

const LatestContracts = () => {
  // const { isPending, error, data } = useFetch(
  //   `${BASE_URL}/DataEntry/mainPageStatsThird?format=json`
  // );

  const { data, isPending, error } = usePreviewer();

  return (
    <Widget className="latest-contracts">
      <PreviewWrapper dataReceived={lastestContractsData}>
        <WidgetHeader
          className="h3"
          linkTo="/staff/data-entry/current-contracts"
        >
          احدث التعاقدات
        </WidgetHeader>
        <SpinnerLoader isPending={isPending}>
          {error && <div className="fs-3">حدث خطأ!</div>}
          {data && <LatestContractsTable tableData={data} />}
        </SpinnerLoader>
      </PreviewWrapper>
    </Widget>
  );
};

export default LatestContracts;
