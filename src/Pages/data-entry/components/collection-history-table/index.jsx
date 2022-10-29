import { useState, useEffect } from "react";
import Table from "../../../../Components/table";
import TableBody from "../../../../Components/table/TableBody";
import TableCell from "../../../../Components/table/TableCell";
import TableHead from "../../../../Components/table/TableHead";
import TableRow from "../../../../Components/table/TableRow";
import Ajax from "../../../../utils/Ajax";
import { Link } from "react-router-dom";
import PrintTemplate, {
  print,
} from "../../../../Components/print/PrintTemplate";
import OngoingCollectionTable from "../ongoing-collection-table";
import TableWidget from "../../../../Components/table-widget";
import x from "../../../../Components/test";
import TablePagination from "../../../../Components/table/TablePagination";

const ajax = Ajax();

const CollectionHistoryTable = (props) => {
  const { tableData, printData } = props || {};
  const [isPending, setIsPending] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [data, setData] = useState(tableData);
  const [collectionTable, setCollectionTable] = useState(null);

  const clientsNum = data.rows.length;
  const numberOfPages = Math.ceil(clientsNum / 20);

  const handleShowRequestDetails = async (clientId) => {
    setIsPending(true);
    // const data = await ajax.post("", { clientId });
    setTimeout(() => {
      setCollectionTable(x);
      setIsPending(false);
    }, 1000);

    setCollectionTable(x);
  };

  useEffect(() => {
    if (!isPrinting) return;

    print();
    setIsPrinting(false);
  }, [isPrinting]);

  const handlePagination = (currentPage) => {
    ajax.post("", { currentPage });
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {printData.collectionDate && <th>{data.thead.date}</th>}
            {printData.collector && <th>{data.thead.collector}</th>}
            {printData.requiredCollections && (
              <th>{data.thead.requiredCollections}</th>
            )}
            {printData.collectionsDone && <th>{data.thead.collectionsDone}</th>}
            {printData.areas && <th>{data.thead.areas}</th>}

            <th>الخيارات</th>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.rows.length > 0 &&
            data.rows.map((row, i) => (
              <TableRow key={i + 200}>
                {printData.collectionDate && <TableCell>{row.date}</TableCell>}

                {printData.collector && (
                  <TableCell>
                    <Link to={``}>{row.collector}</Link>
                  </TableCell>
                )}

                {printData.requiredCollections && (
                  <TableCell>{row.requiredCollections}</TableCell>
                )}

                {printData.collectionsDone && (
                  <TableCell>{row.collectionsDone}</TableCell>
                )}

                {printData.areas && (
                  <TableCell>{row.areas.join(" - ")}</TableCell>
                )}

                <TableCell>
                  <button
                    className="link"
                    onClick={() => handleShowRequestDetails(row.clientId)}
                  >
                    عرض طلب التحصيل
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      {collectionTable && (
        <>
          <TableWidget
            isPending={isPending}
            className="ongoing-collection-table"
          >
            {collectionTable && (
              <>
                <section className="widget__header">
                  <span>المحصل/ {collectionTable.collector}</span>
                  <section className="flex">
                    <h5 className="clients-num">{clientsNum} عميل</h5>
                    <TablePagination
                      numberOfPages={numberOfPages}
                      onPageChange={handlePagination}
                    />
                  </section>
                </section>

                <PrintTemplate title={`المحصل/ ${collectionTable.collector}`}>
                  <OngoingCollectionTable tableData={collectionTable} />
                </PrintTemplate>
              </>
            )}

            <section className="widget__controls widget__controls--fixed-bottom">
              <button className="btn-link" onClick={() => setIsPrinting(true)}>
                اعادة طباعة
              </button>
              <button
                className="btn-link--secondary"
                onClick={() => setCollectionTable(null)}
              >
                اغلاق
              </button>
            </section>
          </TableWidget>
          <div
            className="overlay"
            onClick={() => setCollectionTable(null)}
          ></div>
        </>
      )}
    </>
  );
};

export default CollectionHistoryTable;
