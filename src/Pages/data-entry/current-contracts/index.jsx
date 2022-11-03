import { useEffect, useState } from "react";
import CurrentContractsTable from "../../../Components/current-contracts-table";
import PrintOptions from "./PrintOptions";
import Filter from "../../../Components/filter";
import PrintTemplate, { print } from "../../../Components/print/PrintTemplate";
import LoaderWidget from "../../../Components/loader-widget";
import TablePagination from "../../../Components/table/TablePagination";
import x from "../../../Components/test copy";
import useFetch from "../../../Hooks/useFetch";
import { useMemo } from "react";

const intialPrintData = {
  contractSerial: true,
  phone: true,
  area: true,
  services: true,
  status: true,
  receiptNumber: true,
  collector: "",
};

const CurrentContracts = () => {
  // const {isPending, error, data} = useFetch();
  const [isPending, setIsPending] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [tableData, setTableData] = useState(x);
  const [showPrintForm, setShowPrintForm] = useState(false);

  const clientsNum = tableData.rows.length;
  const numberOfPages = Math.ceil(clientsNum / 20);

  const [printData, setPrintData] = useState(intialPrintData);

  useEffect(() => {
    if (!isPrinting) return;

    print();
    setIsPrinting(false);
  }, [isPrinting]);

  const handlePagination = (currentPage) => {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentPage }),
    });
  };

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

  const currentContractsTable = useMemo(() => {
    return (
      <PrintTemplate title={`${clientsNum} عميل`}>
        <CurrentContractsTable tableData={tableData} printData={printData} />
      </PrintTemplate>
    );
  }, [tableData, isPrinting, showPrintForm]);

  return (
    <>
      <section className="space-between">
        <h2 className="heading-2">التعاقدات الحالية</h2>
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
        <section className="widget__header">
          <h5 className="fs-2">{clientsNum} عميل</h5>
          <TablePagination
            numberOfPages={numberOfPages}
            onPageChange={handlePagination}
          />
        </section>

        {currentContractsTable}
      </LoaderWidget>
    </>
  );
};

export default CurrentContracts;
