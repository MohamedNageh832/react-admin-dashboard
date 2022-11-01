import Table from "../table";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHead from "../table/TableHead";
import TableRow from "../table/TableRow";

const NestedTable = ({ data }) => {
  return (
    <div className="nested-table-holder">
      <Table className="nested-table">
        <TableHead className="nested-table__thead">
          <TableRow className="nested-table__row">
            {data.thead.map((cell, i) => (
              <th className="nested-table__heading" key={i}>
                {cell}
              </th>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row, i) => (
            <TableRow className="nested-table__row" key={i + 100}>
              {row.map((cell, i) => (
                <TableCell className="nested-table__cell" key={i + 200}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NestedTable;
