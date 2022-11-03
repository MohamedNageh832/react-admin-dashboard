import Filter from "../../../Components/filter";
import useFetch from "../../../Hooks/useFetch";
import CreateCollectionRequestTable from "../../../Components/create-collection-request-table";
import PrintTemplate, { print } from "../../../Components/print/PrintTemplate";
import SpinnerLoader from "../../../Components/loaders";
import { useState } from "react";
import deepClone from "../../../utils/deepClone";
import { useEffect } from "react";
import TablePagination from "../../../Components/table/TablePagination";
import Ajax from "../../../utils/Ajax";
import PrintOptions from "./PrintOptions";
import x from "../../../Components/test";
import { useMemo } from "react";
import Widget from "../../../Components/widget";

const intialPrintData = {
  date: true,
  phone: true,
  area: true,
  addressDetails: true,
  nestedTables: false,
  collector: "",
};

const CreateCollectionRequest = () => {
  const ajax = Ajax();
  const { isPending, error, data } = useFetch("");
  // data && console.log(data);
  const [tableData, setTableData] = useState(x);
  const [selected, setSelected] = useState([]);
  const [showPrintForm, setShowPrintForm] = useState(false);

  const clientsNum = tableData && tableData.rows.length;
  const numberOfPages = Math.ceil(clientsNum / 20);
  const pages = numberOfPages < 1 ? 1 : numberOfPages;

  const [printReady, setPrintReady] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [printData, setPrintData] = useState(intialPrintData);

  const handlePrint = (e) => {
    e.preventDefault();

    if (selected.length > 0) {
      const newData = deepClone(tableData);

      newData.rows = selected;
      setTableData(newData);
    }

    setIsPrinting(true);
  };

  useEffect(() => {
    const updateTableData = () => {
      setTableData(tableData);
    };

    window.addEventListener("afterprint", updateTableData);
    return () => {
      window.removeEventListener("afterprint", updateTableData);
    };
  }, []);

  const handlePagination = async (currentPage) => {
    const data = await ajax.post({ page: currentPage });
  };

  const handleHidePrintOptions = () => {
    setPrintData(intialPrintData);

    setShowPrintForm(false);
  };

  const printOptions = useMemo(
    () => (
      <>
        <div className="overlay" onClick={handleHidePrintOptions}></div>
        {!isPrinting && (
          <PrintOptions
            data={printData}
            setData={setPrintData}
            onSubmit={handlePrint}
            printReady={printReady}
          />
        )}
        {isPrinting && (
          <div className="widget pos-center flex-center">
            <span>جار تجهيز الصفحات</span>
            <span className="spinner mr-3"></span>
          </div>
        )}
      </>
    ),
    [printData, isPrinting, printReady]
  );

  const clientsTable = useMemo(
    () => (
      <Widget>
        <SpinnerLoader isPending={isPending}>
          <section className="widget__header">
            <h5 className="fs-2">{clientsNum} عميل</h5>
            <TablePagination
              numberOfPages={pages}
              onPageChange={handlePagination}
            />
          </section>

          <PrintTemplate title={`المحصل/ ${printData.collector}`}>
            <CreateCollectionRequestTable
              data={tableData}
              selected={selected}
              setSelected={setSelected}
              printData={printData}
              isPrinting={isPrinting}
              setPrintReady={setPrintReady}
            />
          </PrintTemplate>
        </SpinnerLoader>
      </Widget>
    ),
    [data, selected, isPrinting, showPrintForm]
  );

  useEffect(() => {
    if (!printReady) return;

    print();

    setIsPrinting(false);
  }, [printReady]);

  return (
    <>
      <section className="space-between">
        <h2 className="heading-2">إنشاء طلب تحصيل</h2>
        <button
          className="btn btn--blue"
          onClick={() => setShowPrintForm(true)}
        >
          طباعة
        </button>
      </section>

      {showPrintForm && printOptions}

      <Filter />

      {tableData && clientsTable}
    </>
  );
};

export default CreateCollectionRequest;
