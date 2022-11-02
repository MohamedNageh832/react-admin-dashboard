import { useState } from "react";
import Table from "../../../../Components/table";
import TableBody from "../../../../Components/table/TableBody";
import TableCell from "../../../../Components/table/TableCell";
import TableHead from "../../../../Components/table/TableHead";
import TableRow from "../../../../Components/table/TableRow";
import SerialCheckbox from "./SerialCheckbox";
import Ajax from "../../../../utils/Ajax";
import { Link } from "react-router-dom";
import Checkbox from "../../../../Components/form/Checkbox";
import { useCallback } from "react";
import NestedTable from "../../../../Components/nested-table";

const ajax = Ajax();

const OngoingCollectionTable = (props) => {
  const { tableData, readOnly } = props || {};
  const [data, setData] = useState(tableData);
  const [selected, setSelected] = useState(
    data.rows.filter((el) => el.checked)
  );

  const [isPending, setIsPending] = useState(false);
  const [nestedTables, setNestedTable] = useState([]);
  const [visibleNestedTables, setVisibleNestedTables] = useState([]);

  const AllIsChecked = data.rows.filter((el) => el.checked).length === 20;
  const someAreChecked = selected.length > 0;

  const handleSelectAll = () => {
    if (selected.length === 0) {
      const newSelected = data.rows.map((el) => ({
        clientId: el.clientId,
      }));

      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

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

      if (data) setVisibleNestedTables((prev) => [...prev, data]);
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

  return (
    <div className="table-holder">
      <Table className="print-all">
        <colgroup>
          <col className="table__checkbox"></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>

        <TableHead>
          <TableRow>
            <th className="table__heading table__checkbox">
              <Checkbox
                checked={AllIsChecked}
                className={someAreChecked ? "checkbox--semi-checked" : ""}
                onChange={handleSelectAll}
              />
            </th>
            <th className="table__heading">{data.thead.date}</th>
            <th className="table__heading">{data.thead.clientName}</th>
            <th className="table__heading">{data.thead.phone}</th>
            <th className="table__heading">{data.thead.area}</th>
            <th className="table__heading">{data.thead.deserved}</th>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.rows.length > 0 &&
            data.rows.map((row, i) => (
              <TableRow key={i + 200} className="table__row">
                <TableCell colSpan="7">
                  <Table className="print-all table--layout-fixed">
                    <colgroup>
                      <col className="table__checkbox"></col>
                      <col></col>
                      <col></col>
                      <col></col>
                      <col></col>
                      <col></col>
                    </colgroup>

                    <TableBody>
                      <TableRow className="client-data">
                        <TableCell className="table__cell table__checkbox">
                          <SerialCheckbox
                            clientData={row}
                            selected={selected}
                            setSelected={setSelected}
                            readOnly
                          />
                        </TableCell>

                        <TableCell className="table__cell">
                          {row.date}
                        </TableCell>

                        <TableCell className="table__cell">
                          <Link to={``}>{row.clientName}</Link>
                        </TableCell>
                        <TableCell className="table__cell">
                          {row.phone}
                        </TableCell>

                        <TableCell className="table__cell">
                          {row.area}
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
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OngoingCollectionTable;
