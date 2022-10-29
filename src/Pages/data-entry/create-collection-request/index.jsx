import Filter from "../../../Components/filter";
import x from "../../../Components/test";
import useFetch from "../../../Hooks/useFetch";
import CreateCollectionRequestTable from "../../../Components/create-collection-request-table";
import PrintTemplate, { print } from "../../../Components/print/PrintTemplate";
import TableWidget from "../../../Components/table-widget";
import { useState } from "react";
import deepClone from "../../../utils/deepClone";
import { useEffect } from "react";
import TablePagination from "../../../Components/table/TablePagination";
import Ajax from "../../../utils/Ajax";
import PrintOptions from "./PrintOptions";

const CreateCollectionRequest = () => {
  const { isPending, error, data } = useFetch("");
  const ajax = Ajax();
  const [tableData, setTableData] = useState(x);
  const [selected, setSelected] = useState([]);
  const [showPrintForm, setShowPrintForm] = useState(false);

  const clientsNum = tableData.rows.length;
  const numberOfPages = Math.ceil(clientsNum / 20);
  const pages = numberOfPages < 1 ? 1 : numberOfPages;

  const [isPrinting, setIsPrinting] = useState(false);
  const [printData, setPrintData] = useState({
    date: true,
    phone: true,
    area: true,
    collector: "",
  });

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
    if (!isPrinting) return;

    print();

    setIsPrinting(false);
  }, [isPrinting]);

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

      {showPrintForm && (
        <>
          <div
            className="overlay"
            onClick={() => setShowPrintForm(false)}
          ></div>
          <PrintOptions
            data={printData}
            setData={setPrintData}
            onSubmit={handlePrint}
          />
        </>
      )}

      <Filter />

      <TableWidget isPending={isPending}>
        <section className="widget__header">
          <h5 className="clients-num">{clientsNum} عميل</h5>
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
          />
        </PrintTemplate>
      </TableWidget>
    </>
  );
};

export default CreateCollectionRequest;
