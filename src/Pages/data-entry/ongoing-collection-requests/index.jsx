import CurrentCollectionCard from "../components/current-collection-card";
import Filter from "../../../Components/filter";
import useFetch from "../../../Hooks/useFetch";
import LoaderWidget from "../../../Components/loader-widget";
import { useState, useEffect, useMemo } from "react";
import x from "../../../Components/test-history";
import PrintTemplate, { print } from "../../../Components/print/PrintTemplate";
import CollectionHistoryTable from "../components/collection-history-table";
import PrintOptions from "./PrintOptions";
import { BASE_URL } from "../../../utils/constants";

const intialPrintData = {
  collectionDate: true,
  collector: true,
  requiredCollections: true,
  collectionsDone: true,
  areas: true,
};

const OnGoingCollectionRequests = () => {
  const { isPending, error, data } = useFetch(
    `${BASE_URL}api/contractTables?format=json&&tableType=currentContracts`
  );
  const [tableData, setTableData] = useState(x);
  const [isPrinting, setIsPrinting] = useState(false);
  const [showPrintForm, setShowPrintForm] = useState(false);
  const [selected, setSelected] = useState(
    tableData.rows.filter((el) => el.checked)
  );

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
        <CollectionHistoryTable tableData={tableData} printData={printData} />
      </PrintTemplate>
    );
  }, [tableData, isPrinting, showPrintForm]);

  return (
    <>
      <h2 className="heading-2">طلبات التحصيل الجارية</h2>
      <section className="d-flex">
        <CurrentCollectionCard className="card" />
      </section>

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

      <LoaderWidget isPending={isPending}>
        {error && <div>حدث خطأ!</div>}
        {tableData && collectionHistoryTable}
      </LoaderWidget>
    </>
  );
};

export default OnGoingCollectionRequests;
