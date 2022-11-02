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
    <div className="table-holder">
      <Table className="table--no-min">
        <TableHead>
          <TableRow>
            <th className="table__heading">{data.thead.contractSerial}</th>
            <th className="table__heading">{data.thead.clientName}</th>
            <th className="table__heading">{data.thead.phone}</th>
            <th className="table__heading">{data.thead.area}</th>
            <th className="table__heading">{data.thead.services}</th>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.rows.length > 0 &&
            data.rows.map((row, i) => (
              <TableRow key={i + 200} className="table__row">
                <TableCell className="table__cell">
                  {row.contractSerial}
                </TableCell>

                <TableCell className="table__cell">
                  <Link to={``}>{row.clientName}</Link>
                </TableCell>

                <TableCell className="table__cell">{row.phone}</TableCell>
                <TableCell className="table__cell">{row.area}</TableCell>
                <TableCell className="table__cell">
                  {row.services.join(" - ")}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestContractsTable;
