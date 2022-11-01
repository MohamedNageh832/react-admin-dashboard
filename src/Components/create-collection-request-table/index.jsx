import { useState, useCallback, useEffect, Fragment } from "react";
import Table from "../table";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHead from "../table/TableHead";
import TableRow from "../table/TableRow";
import useFetch from "../../Hooks/useFetch";
import Ajax from "../../utils/Ajax";
import Checkbox from "../form/Checkbox";
import NestedTable from "../nested-table";
import x from "../neste-table";

const notesInput = {
  type: "text",
  placeholder: "اكتب...",
};

const CreateCollectionRequestTable = (props) => {
  const { data, selected, setSelected, printData, isPrinting, setPrintReady } =
    props || {};
  const [activeInputs, setActiveInputs] = useState(true);
  const [nestedTables, setNestedTable] = useState(x);
  const [isPending, setIsPending] = useState(false);
  const [visibleNestedTables, setVisibleNestedTables] = useState([]);

  const [colSpan, setColSpan] = useState(Object.keys(data.thead).length + 2);
  const ajax = Ajax();
  // edit this
  const AllIsSelected = selected.length === data.rows.length;

  useEffect(() => {
    const adjustForPrinting = async () => {
      const newColSpan = Object.keys(data.thead).length + 1;
      setColSpan(() => newColSpan);

      if (printData.nestedTables) {
        setIsPending(true);
        const data = await ajax.post("", { isPrinting });
        setNestedTable(() => data);
        setIsPending(false);
      }

      setPrintReady(true);
    };

    if (isPrinting) {
      adjustForPrinting();
    }

    const adjustColSpanAfter = async () => {
      const newColSpan = Object.keys(data.thead).length + 2;
      setColSpan(() => newColSpan);
      await setPrintReady(() => false);
    };

    window.addEventListener("afterprint", adjustColSpanAfter);
    return () => {
      window.removeEventListener("afterprint", adjustColSpanAfter);
    };
  }, [isPrinting]);

  const handleSelectAll = () => {
    if (AllIsSelected) {
      setSelected([]);
    } else {
      setSelected(data.rows);
    }
  };

  const handleCheckboxes = (clientId) => {
    const item = selected.filter((el) => el.clientId === clientId);
    const isSelected = item.length > 0;

    if (isSelected) {
      const newSelected = selected.filter((el) => el.clientId !== clientId);
      setSelected(newSelected);
    } else {
      const newSelected = data.rows.filter((el) => el.clientId === clientId);

      setSelected([...selected, ...newSelected]);
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

      setVisibleNestedTables((prev) => [...prev, data]);
    }

    setIsPending(false);
  };

  const handleEditNotes = (clientId) => {
    setActiveInputs(false);
    ajax.post("", { clientId });
    setTimeout(() => setActiveInputs(true), 2000);
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
              <TableCell colSpan={colSpan} className="table__cell--table">
                <div className="flex-center p-3">
                  <span className="spinner"></span>
                </div>
              </TableCell>
            </TableRow>
          )}

          {printData.nestedTables ||
            (!isPrinting && isVisible && data && (
              <TableRow>
                <TableCell colSpan={colSpan} className="table__cell--table">
                  <NestedTable data={data} />
                </TableCell>
              </TableRow>
            ))}
        </>
      );
    },
    [visibleNestedTables, isPending, printData]
  );

  // Handle pagination
  return (
    <div className="table-holder">
      <Table className="table--layout-fixed">
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
              <Checkbox checked={AllIsSelected} onChange={handleSelectAll} />
            </th>

            {printData.date && (
              <th className="table__heading">{data.thead.date}</th>
            )}
            <th className="table__heading">{data.thead.clientName}</th>
            {printData.phone && (
              <th className="table__heading">{data.thead.phone}</th>
            )}
            {printData.area && (
              <th className="table__heading">{data.thead.area}</th>
            )}
            <th className="table__heading">{data.thead.deserved}</th>

            <th className="table__heading">الملاحظات</th>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.rows.length > 0 &&
            data.rows.map((row, i) => (
              <Fragment key={i + 200}>
                <TableRow className="table__row">
                  <TableCell colSpan={colSpan}>
                    <Table className="dont-break-inside table--layout-fixed">
                      <colgroup>
                        <col className="table__checkbox"></col>
                        <col className="table__cell"></col>
                        <col className="table__cell"></col>
                        <col className="table__cell"></col>
                        <col className="table__cell"></col>
                        <col className="table__cell"></col>
                      </colgroup>
                      <TableBody>
                        <TableRow>
                          <TableCell className="table__cell table__checkbox">
                            <Checkbox
                              checked={
                                selected.filter(
                                  (el) => el.clientId === row.clientId
                                ).length > 0
                              }
                              onChange={() => handleCheckboxes(row.clientId)}
                            />
                          </TableCell>

                          {printData.date && (
                            <TableCell className="table__cell">
                              {row.date}
                            </TableCell>
                          )}

                          <TableCell className="table__cell">
                            {row.clientName}
                          </TableCell>

                          {printData.phone && (
                            <TableCell className="table__cell">
                              {row.phone}
                            </TableCell>
                          )}

                          {printData.area && (
                            <TableCell className="table__cell">
                              {row.area}
                            </TableCell>
                          )}

                          <TableCell
                            className="table__cell table__cell--clickable"
                            onClick={() => handleNestedTable(row.clientId)}
                          >
                            {row.deserved}
                          </TableCell>
                          <TableCell className="table__cell table__cell--input">
                            <form
                              onSubmit={() => handleEditNotes(row.clientId)}
                            >
                              <input
                                {...notesInput}
                                className="table__input"
                                onBlur={() => handleEditNotes(row.clientId)}
                                disabled={!activeInputs}
                              />
                            </form>
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

export default CreateCollectionRequestTable;
