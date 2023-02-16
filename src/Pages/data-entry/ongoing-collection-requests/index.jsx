import CurrentCollectionCard from "../components/current-collection-card";
import Filter from "../../../Components/filter";
import useFetch from "../../../Hooks/useFetch";
import SpinnerLoader from "../../../Components/loaders";
import { useState, useEffect, useMemo } from "react";
import x from "../../../Components/test-history";
import PrintTemplate, { print } from "../../../Components/print/PrintTemplate";
import CollectionHistoryTable from "../components/collection-history-table";
import PrintOptions from "./PrintOptions";
import { BASE_URL } from "../../../utils/constants";
import cardData from "../../../Components/cardData";
import Widget from "../../../Components/widget";
import DataPreviewer, {
  usePreviewer,
} from "../../../Components/data-previewer";
import PreviewWrapper from "../../../Components/data-previewer/preview-wrapper";
import collectionCardsData from "../../../Components/test-history";
import pastCollectionsData from "../../../Components/past-collections";
import CurrentCollectionCards from "../home/ongoing-collections/current-collection-cards";

const intialPrintData = {
  collectionDate: true,
  collector: true,
  requiredCollections: true,
  collectionsDone: true,
  areas: true,
};

const OnGoingCollectionRequests = () => {
  // const { isPending, error, data } = useFetch(
  //   `${BASE_URL}api/contractTables?format=json&&tableType=currentContracts`
  // );
  const { isPending, error, data } = usePreviewer();
  const [isPrinting, setIsPrinting] = useState(false);
  const [showPrintForm, setShowPrintForm] = useState(false);
  // const [selected, setSelected] = useState(
  //   data.rows.filter((el) => el.checked)
  // );

  const [printData, setPrintData] = useState(intialPrintData);

  useEffect(() => {
    if (!isPrinting) return;

    print();
    setIsPrinting(false);
  }, [isPrinting]);

  const handlePrint = (e) => {
    e.preventDefault();

    // if (selected.length > 0) {
    //   const newData = deepClone(data);

    //   newData.rows = selected;
    //   setData(newData);
    // }

    setIsPrinting(true);
  };

  const handleHidePrintOptions = () => {
    setPrintData(intialPrintData);

    setShowPrintForm(false);
  };

  const printOptions = useMemo(
    () => (
      <>
        <div className="overlay" onClick={handleHidePrintOptions}></div>
        <PrintOptions
          data={printData}
          setData={setPrintData}
          onSubmit={handlePrint}
        />
      </>
    ),
    [printData]
  );

  const collectionHistoryTable = useMemo(() => {
    return (
      <PrintTemplate>
        <CollectionHistoryTable tableData={data} printData={printData} />
      </PrintTemplate>
    );
  }, [data, isPrinting, showPrintForm]);

  return (
    <>
      <h2 className="heading-2">طلبات التحصيل الجارية</h2>
      <DataPreviewer>
        <PreviewWrapper dataReceived={collectionCardsData.rows}>
          <section className="d-flex">
            <CurrentCollectionCards />
            {/* <CurrentCollectionCard className="card" cardData={cardData} /> */}
          </section>
        </PreviewWrapper>
      </DataPreviewer>

      <section className="space-between">
        <h2 className="heading-2">السجل</h2>
        <button
          className="btn btn--blue"
          onClick={() => setShowPrintForm(true)}
        >
          طباعة
        </button>
      </section>

      {showPrintForm && printOptions}

      <Filter />

      <PreviewWrapper dataReceived={collectionCardsData}>
        <Widget>
          <SpinnerLoader isPending={isPending}>
            {error && <div>حدث خطأ!</div>}
            {data && collectionHistoryTable}
          </SpinnerLoader>
        </Widget>
      </PreviewWrapper>
    </>
  );
};

export default OnGoingCollectionRequests;
