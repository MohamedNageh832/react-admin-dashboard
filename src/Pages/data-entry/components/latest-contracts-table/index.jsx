import TablePagination from "../../../../Components/table/TablePagination";
import { useState } from "react";
import Table from "../../../../Components/table";
import TableBody from "../../../../Components/table/TableBody";
import TableCell from "../../../../Components/table/TableCell";
import TableHead from "../../../../Components/table/TableHead";
import TableRow from "../../../../Components/table/TableRow";
import Ajax from "../../../../utils/Ajax";
import { Link } from "react-router-dom";

const ajax = Ajax();

const LatestContractsTable = (props) => {
  const { tableData: data } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <th>{data.thead.contractSerial}</th>
          <th>{data.thead.clientName}</th>
          <th>{data.thead.phone}</th>
          <th>{data.thead.area}</th>
          <th>{data.thead.services}</th>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.rows.length > 0 &&
          data.rows.map((row, i) => (
            <TableRow key={i + 200}>
              <TableCell>{row.contractSerial}</TableCell>

              <TableCell>
                <Link to={``}>{row.clientName}</Link>
              </TableCell>

              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.area}</TableCell>
              <TableCell>{row.services.join(" - ")}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default LatestContractsTable;
