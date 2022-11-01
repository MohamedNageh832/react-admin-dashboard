import { useState } from "react";
import Table from "../../../../Components/table";
import TableBody from "../../../../Components/table/TableBody";
import TableCell from "../../../../Components/table/TableCell";
import TableHead from "../../../../Components/table/TableHead";
import TableRow from "../../../../Components/table/TableRow";
import Ajax from "../../../../utils/Ajax";
import { Link } from "react-router-dom";
import Checkbox from "../../../../Components/form/Checkbox";
import NestedTable from "../../../../Components/nested-table";
import { useCallback } from "react";
import { Fragment } from "react";

const ajax = Ajax();

const PastCollectionTable = (props) => {
  const { tableData } = props || {};
  const [data, setData] = useState(tableData);
  const [isPending, setIsPending] = useState(false);
  const [visibleNestedTables, setVisibleNestedTables] = useState([]);
  const [nestedTables, setNestedTable] = useState([]);
  const [showServicesTable, setShowServicesTable] = useState(false);

  const AllIsChecked = data.rows.filter((el) => el.checked).length === 20;
  const someAreChecked = data.rows.filter((el) => el.checked).length !== 20;

  const handleNestedTable = async (clientId) => {
    setIsPending(true);
    const dataById = nestedTables.filter((el) => el.clientId === clientId);
    const dataIsVisible =
      visibleNestedTables.filter((el) => el.clientId === clientId).length > 0;
    const dataExists = dataById.length > 0;

    if (dataIsVisible) {
      const newVisible = visibleNestedTables.filter(
        (el) => el.clientId !== clientId
      );

      setVisibleNestedTables(newVisible);
      setIsPending(false);
      return;
    }

    if (dataExists) {
      setVisibleNestedTables((prev) => [...prev, ...dataById]);
    } else {
      const data = await ajax.post("", { clientId });

      setVisibleNestedTables((prev) => [...prev, data]);
    }

    setIsPending(false);
  };

  const getNestedTableData = useCallback(
    (clientId, i) => {
      const data = nestedTables.filter((el) => el.clientId === clientId)[0];
      const isVisible =
        visibleNestedTables.filter((el) => el.clientId === clientId).length > 0;

      return (
        <>
          {isPending && (
            <TableRow>
              <TableCell colSpan="7" className="table__cell--table">
                <div className="flex-center p-3">
                  <span className="spinner"></span>
                </div>
              </TableCell>
            </TableRow>
          )}

          {data && (
            <TableRow>
              <TableCell colSpan="7" className="table__cell--table">
                <NestedTable data={data} />
              </TableCell>
            </TableRow>
          )}
        </>
      );
    },
    [visibleNestedTables, isPending]
  );

  // data.showNested ?

  return (
    <div className="table-holder">
      <Table className="print-all print-checks table--layout-fixed">
        <colgroup>
          <col className="table__checkbox"></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>

        <TableHead>
          <TableRow className="table__row">
            <th className="table__heading table__checkbox">
              <Checkbox
                checked={AllIsChecked}
                className={someAreChecked ? "checkbox--semi-checked" : ""}
                readOnly
              />
            </th>
            <th className="table__heading">{data.thead.clientName}</th>
            <th className="table__heading">{data.thead.receiptNumber}</th>
            <th className="table__heading">{data.thead.phone}</th>
            <th className="table__heading">{data.thead.area}</th>
            <th className="table__heading">{data.thead.addressDetails}</th>
            <th className="table__heading">{data.thead.deserved}</th>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.rows.length > 0 &&
            data.rows.map((row, i) => (
              <Fragment key={i + 200}>
                <TableRow className="table__row">
                  <TableCell colSpan="7">
                    <Table className="print-all table--layout-fixed">
                      <colgroup>
                        <col className="table__checkbox"></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                      </colgroup>
                      <TableBody>
                        <TableRow className="client-data">
                          <TableCell className="table__cell table__cell--checkbox">
                            <Checkbox
                              checked={row.checked}
                              className="checkbox--outlined"
                              readOnly
                            />
                          </TableCell>

                          <TableCell className="table__cell">
                            <Link to={``}>{row.clientName}</Link>
                          </TableCell>

                          <TableCell className="table__cell">
                            {row.receiptNumber}
                          </TableCell>
                          <TableCell className="table__cell">
                            {row.phone}
                          </TableCell>

                          <TableCell className="table__cell">
                            {row.area}
                          </TableCell>
                          <TableCell className="table__cell">
                            {row.addressDetails}
                          </TableCell>

                          <TableCell
                            className="table__cell"
                            onClick={() => handleNestedTable(row.clientId)}
                          >
                            {row.deserved}
                          </TableCell>
                        </TableRow>
                        {getNestedTableData(row.clientId, i)}
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PastCollectionTable;
