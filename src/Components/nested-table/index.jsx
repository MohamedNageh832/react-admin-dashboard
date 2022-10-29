import Table from "../table";
import TableBody from "../table/TableBody";
import TableCell from "../table/TableCell";
import TableHead from "../table/TableHead";
import TableRow from "../table/TableRow";

const NestedTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {data.thead.map((cell, i) => (
            <TableCell key={i}>{cell}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.rows.map((row, i) => (
          <TableRow key={i + 100}>
            {row.map((cell, i) => (
              <TableCell key={i + 200}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NestedTable;
