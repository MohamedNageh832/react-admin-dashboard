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

const ajax = Ajax();

const OngoingCollectionTable = (props) => {
  const { tableData, readOnly } = props || {};
  const [data, setData] = useState(tableData);
  const [selected, setSelected] = useState(
    data.rows.filter((el) => el.checked)
  );
  const [nestedTables, setNestedTable] = useState([]);
  const [showServicesTable, setShowServicesTable] = useState(false);

  const AllIsChecked = selected.length === data.rows.length;
  const someAreChecked = selected.length !== 0;

  const handleNestedTable = async (clientId) => {
    const dataById = nestedTables.filter((el) => el.clientId === clientId);
    const dataExists = dataById.length > 0;

    if (dataExists) {
    }

    const data = await ajax.post("", { clientId });
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <th className="table__cell--checkbox">
            <Checkbox
              checked={AllIsChecked}
              className={someAreChecked ? "checkbox--semi-checked" : ""}
              readOnly
            />
          </th>
          <th>{data.thead.date}</th>
          <th>{data.thead.clientName}</th>
          <th>{data.thead.phone}</th>
          <th>{data.thead.area}</th>
          <th>{data.thead.deserved}</th>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.rows.length > 0 &&
          data.rows.map((row, i) => (
            <TableRow key={i + 200}>
              <TableCell className="table__cell--checkbox">
                <SerialCheckbox
                  clientData={row}
                  selected={selected}
                  setSelected={setSelected}
                  readOnly
                />
              </TableCell>

              <TableCell>{row.date}</TableCell>

              <TableCell>
                <Link to={``}>{row.clientName}</Link>
              </TableCell>
              <TableCell>{row.phone}</TableCell>

              <TableCell>{row.area}</TableCell>

              <TableCell onClick={() => handleNestedTable(row.clientId)}>
                {row.deserved}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default OngoingCollectionTable;
