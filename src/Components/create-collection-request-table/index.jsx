import { useState } from "react";
import Table from "../table";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHead from "../table/TableHead";
import TableRow from "../table/TableRow";
import useFetch from "../../Hooks/useFetch";
import Ajax from "../../utils/Ajax";
import { Link } from "react-router-dom";
import Checkbox from "../form/Checkbox";
import NestedTable from "../nested-table";
import { Fragment } from "react";

const notesInput = {
  type: "text",
  placeholder: "اكتب...",
};

const CreateCollectionRequestTable = (props) => {
  const { data, selected, setSelected, printData } = props || {};
  const [activeInputs, setActiveInputs] = useState(true);
  const [nestedTables, setNestedTable] = useState([]);
  const [showServicesTable, setShowServicesTable] = useState(false);
  const ajax = Ajax();

  const AllIsSelected = selected.length === data.rows.length;

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
    const dataById = nestedTables.filter((el) => el.clientId === clientId);
    const dataExists = dataById.length > 0;

    if (dataExists) {
    }

    const data = await ajax.post("", { clientId });
  };

  const handleEditNotes = (clientId) => {
    setActiveInputs(false);
    ajax.post("", { clientId });
    setTimeout(() => setActiveInputs(true), 2000);
  };

  const getNestedTableData = (clientId, i) => {
    const data = nestedTables.filter((el) => el.clientId === clientId)[i];

    return (
      data && (
        <TableRow>
          <TableCell colSpan="7">
            <NestedTable data={data} />
          </TableCell>
        </TableRow>
      )
    );
  };

  // Handle pagination
  return (
    <Table>
      <TableHead>
        <TableRow>
          <th className="table__cell--checkbox">
            <Checkbox checked={AllIsSelected} onChange={handleSelectAll} />
          </th>

          {printData.date && <th>{data.thead.date}</th>}
          <th>{data.thead.clientName}</th>
          {printData.phone && <th>{data.thead.phone}</th>}
          {printData.area && <th>{data.thead.area}</th>}
          <th>{data.thead.deserved}</th>

          <th>الملاحظات</th>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.rows.length > 0 &&
          data.rows.map((row, i) => (
            <Fragment key={i + 200}>
              <TableRow>
                <TableCell className="table__cell--checkbox">
                  <Checkbox
                    checked={
                      selected.filter((el) => el.clientId === row.clientId)
                        .length > 0
                    }
                    onChange={() => handleCheckboxes(row.clientId)}
                  />
                </TableCell>

                {printData.date && <TableCell>{row.date}</TableCell>}

                <TableCell>{row.clientName}</TableCell>

                {printData.phone && <TableCell>{row.phone}</TableCell>}

                {printData.area && <TableCell>{row.area}</TableCell>}

                <TableCell onClick={() => handleNestedTable(row.clientId)}>
                  {row.deserved}
                </TableCell>
                <TableCell className="table__cell--input">
                  <form onSubmit={() => handleEditNotes(row.clientId)}>
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
            </Fragment>
          ))}
      </TableBody>
    </Table>
  );
};

export default CreateCollectionRequestTable;
