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
import x from "../../../../Components/past-collections";
import TablePagination from "../../../../Components/table/TablePagination";
import PastCollectionTable from "../../ongoing-collection-requests/past-collection-table";
import SpinnerLoader from "../../../../Components/loaders";
import Widget from "../../../../Components/widget";
import { useMemo } from "react";

const ajax = Ajax();

const CollectionHistoryTable = (props) => {
  const { tableData, printData } = props || {};
  const [isPending, setIsPending] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const data = tableData;
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
    <div className="table-holder text-center">
      <Table>
        <TableHead>
          <TableRow>
            {printData.collectionDate && (
              <th className="table__heading">{data.thead.date}</th>
            )}
            {printData.collector && (
              <th className="table__heading">{data.thead.collector}</th>
            )}
            {printData.requiredCollections && (
              <th className="table__heading">
                {data.thead.requiredCollections}
              </th>
            )}
            {printData.collectionsDone && (
              <th className="table__heading">{data.thead.collectionsDone}</th>
            )}
            {printData.areas && (
              <th className="table__heading">{data.thead.areas}</th>
            )}

            <th className="table__heading">الخيارات</th>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.rows.length > 0 &&
            data.rows.map((row, i) => (
              <TableRow key={i + 200} className="table__row">
                {printData.collectionDate && (
                  <TableCell className="table__cell">{row.date}</TableCell>
                )}

                {printData.collector && (
                  <TableCell className="table__cell">
                    <Link to={``}>{row.collector}</Link>
                  </TableCell>
                )}

                {printData.requiredCollections && (
                  <TableCell className="table__cell">
                    {row.requiredCollections}
                  </TableCell>
                )}

                {printData.collectionsDone && (
                  <TableCell className="table__cell">
                    {row.collectionsDone}
                  </TableCell>
                )}

                {printData.areas && (
                  <TableCell className="table__cell">
                    {row.areas.join(" - ")}
                  </TableCell>
                )}

                <TableCell className="table__cell">
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
          <Widget className="widget--center">
            <SpinnerLoader isPending={isPending}>
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

                  <PrintTemplate
                    title={`المحصل/ ${collectionTable.collector}`}
                    footer={collectionTable.date}
                  >
                    <PastCollectionTable
                      tableData={collectionTable}
                      isPrinting={isPrinting}
                    />
                  </PrintTemplate>
                </>
              )}

              <section className="widget__controls widget__controls--fixed-bottom">
                <button
                  className="btn-link"
                  onClick={() => setIsPrinting(true)}
                >
                  اعادة طباعة
                </button>
                <button
                  className="btn-link--secondary"
                  onClick={() => setCollectionTable(null)}
                >
                  اغلاق
                </button>
              </section>
            </SpinnerLoader>
          </Widget>
          <div
            className="overlay"
            onClick={() => setCollectionTable(null)}
          ></div>
        </>
      )}
    </div>
  );
};

export default CollectionHistoryTable;
