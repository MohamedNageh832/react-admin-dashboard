import { useState } from "react";
import SpinnerLoader from "../../../../Components/loaders";
import Ajax from "../../../../utils/Ajax";
import OngoingCollectionTable from "../ongoing-collection-table";
import x from "../../../../Components/test";
import TablePagination from "../../../../Components/table/TablePagination";
import PrintTemplate, {
  print,
} from "../../../../Components/print/PrintTemplate";
import { useEffect } from "react";
import Widget from "../../../../Components/widget";
import { usePreviewer } from "../../../../Components/data-previewer";

const CurrentCollectionCard = ({ className, cardData }) => {
  const ajax = Ajax();
  const [showTable, setShowTable] = useState(false);
  // const [isPending, setIsPending] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const { data, isPending, error } = usePreviewer();
  const { clientsNum, date, collector, areas, clientId } = cardData || data;
  const [collectionTable, setCollectionTable] = useState(x);

  const numberOfPages = Math.ceil(clientsNum / 20);
  const pages = numberOfPages < 1 ? 1 : numberOfPages;

  const handleClick = async () => {
    setShowTable(true);
    // setIsPending(true);
    const data = await ajax.post(
      "https://aswangreen2.pythonanywhere.com/account/login",
      { clientId }
    );
    // setIsPending(false);
  };

  const handlePrint = () => {
    // setIsPending(true);
    setIsPrinting(true);
  };

  useEffect(() => {
    if (!isPrinting) return;

    print();
    // setIsPending(false);
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

  return (
    <>
      <button className={className} onClick={handleClick}>
        <section className="space-between">
          <span className="card__content">{clientsNum} عميل</span>
          <small className="text--secondary">{date}</small>
        </section>
        <ul className="card__body">
          <li className="card__group">
            <span className="text--secondary">المحصل</span>
            <p className="card__content mt-2 mb-3">{collector}</p>
          </li>

          <li className="card__group">
            <span className="text--secondary">المنطقة</span>
            <p className="card__content mt-2">{areas.join(" - ")}</p>
          </li>
        </ul>
      </button>

      {showTable && (
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
                        numberOfPages={pages}
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
                <button className="btn btn--blue">تأكيد الفاتورة</button>
                <button
                  className="btn btn--secondary"
                  onClick={() => setShowTable(false)}
                >
                  اغلاق
                </button>
                <button
                  className="btn btn-link--secondary"
                  onClick={handlePrint}
                >
                  اعادة طباعة
                </button>
              </section>
            </SpinnerLoader>
          </Widget>
          <div className="overlay" onClick={() => setShowTable(false)}></div>
        </>
      )}
    </>
  );
};

export default CurrentCollectionCard;
