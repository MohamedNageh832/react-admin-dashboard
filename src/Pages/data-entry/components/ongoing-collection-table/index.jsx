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
    <div className="table-holder">
      <Table className="print-all">
        <TableHead>
          <TableRow>
            <th className="table__heading table__checkbox">
              <Checkbox
                checked={AllIsChecked}
                className={someAreChecked ? "checkbox--semi-checked" : ""}
                readOnly
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
              <TableRow className="table__row" key={i + 200}>
                <TableCell className="table__cell table__checkbox">
                  <SerialCheckbox
                    clientData={row}
                    selected={selected}
                    setSelected={setSelected}
                    readOnly
                  />
                </TableCell>

                <TableCell className="table__cell">{row.date}</TableCell>

                <TableCell className="table__cell">
                  <Link to={``}>{row.clientName}</Link>
                </TableCell>
                <TableCell className="table__cell">{row.phone}</TableCell>

                <TableCell className="table__cell">{row.area}</TableCell>

                <TableCell
                  className="table__cell"
                  onClick={() => handleNestedTable(row.clientId)}
                >
                  {row.deserved}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OngoingCollectionTable;
